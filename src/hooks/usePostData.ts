
import { useState, useEffect } from "react";
import { extractFrontmatter } from "@/lib/utils";

export interface PostData {
  title: string;
  date: string;
  content: string;
  author: string;
  abstract?: string;
}

export const usePostData = (category?: string, slug?: string) => {
  const [post, setPost] = useState<PostData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const isBrowser = typeof window !== 'undefined';

  useEffect(() => {
    // Skip if no parameters or in SSR mode
    if (!category || !slug || !isBrowser) {
      if (!isBrowser) {
        console.log("Skipping data fetch in SSR for post:", category, slug);
      }
      return;
    }

    const loadPost = async () => {
      try {
        console.log(`Loading post: ${category}/${slug}`);
        const modules = import.meta.glob("/src/content/**/*.md", { query: '?raw', import: 'default' });
        
        const filePath = Object.keys(modules).find(
          path => path.includes(`/${category}/`) && path.endsWith(`${slug}.md`)
        );
        
        if (!filePath) {
          throw new Error("Post not found");
        }
        
        const loader = modules[filePath];
        const markdown = await loader() as string;
        
        const { frontmatter, content } = extractFrontmatter(markdown);
        
        let abstract = "";
        
        if (frontmatter.abstract && frontmatter.abstract.length > 50) {
          abstract = frontmatter.abstract;
        } 
        else if (frontmatter.description && frontmatter.description.length > 50) {
          abstract = frontmatter.description;
        }
        else if (content) {
          const abstractMatch = content.match(/## Abstract:([\s\S]*?)(?=##|$)/i) || 
                               content.match(/### Abstract:([\s\S]*?)(?=###|$)/i);
                               
          if (abstractMatch && abstractMatch[1] && abstractMatch[1].trim().length > 50) {
            abstract = abstractMatch[1].trim();
          }
        }

        // Process author field - it can be either a string or already an array
        let authorValue = frontmatter.author || "Unknown Author";
        
        // If the author is a string containing commas, consider it as multiple authors
        if (typeof authorValue === 'string' && authorValue.includes(',')) {
          authorValue = authorValue.trim();
        }

        setPost({
          title: frontmatter.title || slug?.replace(/-/g, " ") || "Untitled",
          date: frontmatter.date || new Date().toISOString().split("T")[0],
          content,
          author: authorValue,
          abstract
        });
        setIsLoading(false);
        console.log("Post loaded successfully");
      } catch (err) {
        console.error("Failed to load post:", err);
        setError("The post you're looking for doesn't exist.");
        setIsLoading(false);
      }
    };

    loadPost();
  }, [slug, category, isBrowser]);

  return { post, isLoading, error };
};
