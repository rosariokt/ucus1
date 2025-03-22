
import { useState, useEffect } from "react";
import { extractFrontmatter } from "@/lib/utils";
import { BookText, FileText, Bookmark, ChevronRight, GraduationCap, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Container from "@/components/Container";
import { Separator } from "@/components/ui/separator";

interface Post {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  category: string;
}

const CategorySection = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
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
          
          return {
            title: frontmatter.title || slug.replace(/-/g, " "),
            date: frontmatter.date || new Date().toISOString().split("T")[0],
            excerpt: "", // Not needed for categories section
            slug,
            category
          };
        });
        
        const results = await Promise.all(promises);
        setPosts(results);
      } catch (error) {
        console.error("Error loading posts:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadPosts();
  }, []);

  // Group posts by category
  const categories = [...new Set(posts.map(post => post.category))];

  return (
    <Container>
      <div className="mt-20">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-serif font-bold tracking-tight flex items-center">
            <FolderOpen className="h-7 w-7 mr-3 text-primary" />
            Academic Fields & Categories
          </h2>
          <Button variant="outline" size="sm" asChild className="group text-primary border-primary/30 hover:border-primary hover:bg-primary/5">
            <a href="/categories">
              Explore all categories
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </Button>
        </div>
        
        <Separator className="mb-8 opacity-50" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const categoryPosts = posts.filter(post => post.category === category);
            return (
              <Card key={category} className="hover:shadow-md transition-all duration-300 border-border/40 hover:border-primary/30 overflow-hidden">
                <div className="bg-primary/10 h-2" />
                <CardHeader className="pb-3 pt-5">
                  <CardTitle className="flex items-center font-serif text-xl capitalize">
                    <GraduationCap className="h-5 w-5 mr-2 text-primary opacity-80" />
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-muted-foreground text-sm mb-4 flex items-center">
                    <FileText className="h-3.5 w-3.5 mr-1.5 opacity-70" />
                    <span>{categoryPosts.length} articles in collection</span>
                  </div>
                  
                  <Separator className="my-3 opacity-30" />
                  
                  <ul className="space-y-2.5 mb-4 text-sm">
                    {categoryPosts.slice(0, 3).map((post) => (
                      <li key={post.slug} className="flex items-start group">
                        <Bookmark className="h-3.5 w-3.5 mr-2 mt-0.5 text-muted-foreground group-hover:text-primary transition-colors" />
                        <a 
                          href={`/${post.category}/${post.slug}`}
                          className="line-clamp-2 hover:text-primary transition-colors academic-link"
                        >
                          {post.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-4 pt-3 border-t border-border/50">
                    <Button variant="outline" size="sm" asChild className="w-full group justify-center">
                      <a href={`/categories/${category}`}>
                        Explore {category} publications
                        <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default CategorySection;
