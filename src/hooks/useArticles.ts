
import { useState, useEffect } from "react";
import { extractFrontmatter } from "@/lib/utils";
import { cleanExcerpt } from "@/utils/text-utils";

export interface Post {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  category: string;
  author: string;
}

/**
 * Custom hook to load and process article data
 */
export const useArticles = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const loadPosts = async () => {
      try {
        const markdownFiles = import.meta.glob("../content/**/*.md", { query: '?raw', import: 'default' });
        const loadedPosts: Post[] = [];
        
        // Create an array of promises for loading all markdown files
        const promises = Object.entries(markdownFiles).map(async ([path, loader]) => {
          const content = await loader() as string;
          const pathParts = path.split("/");
          const category = pathParts[pathParts.length - 2];
          const filename = pathParts[pathParts.length - 1];
          const slug = filename.replace(".md", "");
          
          const { frontmatter, content: postContent } = extractFrontmatter(content);
          
          // Clean excerpt from markdown syntax
          let excerpt = frontmatter.excerpt || frontmatter.description || postContent.substring(0, 150) + "...";
          excerpt = cleanExcerpt(excerpt);
          
          return {
            title: frontmatter.title || slug.replace(/-/g, " "),
            date: frontmatter.date || new Date().toISOString().split("T")[0],
            excerpt,
            slug,
            category,
            author: frontmatter.author || "Unknown Author"
          };
        });
        
        // Wait for all promises to resolve
        const results = await Promise.all(promises);
        
        // Sort by date (newest first)
        results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        setPosts(results);
      } catch (error) {
        console.error("Error loading posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    // Only run on client-side
    if (isClient) {
      loadPosts();
    }
  }, [isClient]);

  return { posts, isLoading };
};
