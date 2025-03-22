
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
        
        console.log("Extracted frontmatter:", frontmatter);
        console.log("Authors field type:", typeof frontmatter.authors, "value:", frontmatter.authors);
        
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

        // Process author field - check for both author and authors (array)
        let authorValue = "Unknown Author";
        if (frontmatter.author) {
          authorValue = frontmatter.author;
          console.log("Using author field:", authorValue);
        } else if (frontmatter.authors) {
          console.log("Found authors field:", frontmatter.authors);
          if (Array.isArray(frontmatter.authors)) {
            authorValue = frontmatter.authors.join(', ');
            console.log("Joined authors array:", authorValue);
          } else if (typeof frontmatter.authors === 'string') {
            authorValue = frontmatter.authors;
            console.log("Using authors as string:", authorValue);
          }
        } else {
          console.log("No author or authors field found in frontmatter");
        }

        setPost({
          title: frontmatter.title || slug?.replace(/-/g, " ") || "Untitled",
          date: frontmatter.date || new Date().toISOString().split("T")[0],
          content,
          author: authorValue,
          abstract
        });
        setIsLoading(false);
        console.log("Post loaded successfully with author:", authorValue);
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
