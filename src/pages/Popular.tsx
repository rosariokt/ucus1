
import React from "react";
import { Header, Footer } from "@/components";
import Container from "@/components/Container";
import { Award } from "lucide-react";
import { useState, useEffect } from "react";
import { extractFrontmatter } from "@/lib/utils";
import { PopularTabs } from "@/components/popular";

interface Post {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  category: string;
  author: string;
  views?: number;
  citations?: number;
}

const Popular = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    const loadPosts = async () => {
      try {
        // Dynamically import all markdown files
        const markdownFiles = import.meta.glob("../content/**/*.md", { query: '?raw', import: 'default' });
        const loadedPosts: Post[] = [];
        
        // Process all file paths and load content for each file
        const promises = Object.entries(markdownFiles).map(async ([path, loader]) => {
          const content = await loader() as string;
          const pathParts = path.split("/");
          const category = pathParts[pathParts.length - 2];
          const filename = pathParts[pathParts.length - 1];
          const slug = filename.replace(".md", "");
          
          const { frontmatter } = extractFrontmatter(content);
          
          // Add mock data for views and citations for demonstration purposes
          return {
            title: frontmatter.title || slug.replace(/-/g, " "),
            date: frontmatter.date || new Date().toISOString().split("T")[0],
            excerpt: frontmatter.excerpt || frontmatter.description || "",
            slug,
            category,
            author: frontmatter.author || "Unknown Author",
            views: Math.floor(Math.random() * 1000) + 100, // Random number for demo
            citations: Math.floor(Math.random() * 50) // Random number for demo
          };
        });
        
        const results = await Promise.all(promises);
        
        // Sort by views (most popular first)
        results.sort((a, b) => (b.views || 0) - (a.views || 0));
        
        setPosts(results);
      } catch (error) {
        console.error("Error loading posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main id="main-content" className="flex-1" tabIndex={-1}>
        <div className="bg-primary/10 py-12">
          <Container>
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="bg-primary/20 p-3 rounded-full mb-2">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-medium">Popular Academic Journals</h1>
              <p className="text-muted-foreground max-w-2xl text-lg">
                Most-read and most-cited academic publications from leading research institutions
              </p>
            </div>
          </Container>
        </div>

        <Container className="py-12">
          <PopularTabs posts={posts} isLoading={isLoading} />
        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default Popular;
