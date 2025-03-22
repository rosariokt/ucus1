
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Container from "@/components/Container";
import Header from "@/components/Header";
import { extractFrontmatter } from "@/lib/utils";
import {
  CategoryHeader,
  CategoryTabs,
  PostsGrid,
  CategoryFooter,
  PageTransition
} from "@/components";

interface Post {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  category: string;
}

const Category = () => {
  const { category } = useParams<{ category: string }>();
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
      try {
        // Dynamically import all markdown files from the category folder
        const modules = import.meta.glob("/src/content/**/*.md", { query: '?raw', import: 'default' });
        const allPosts: Post[] = [];
        const categorySet = new Set<string>();

        // Process all file paths and load content for each file
        const promises = Object.entries(modules).map(async ([path, loader]) => {
          const content = await loader() as string;
          const { frontmatter } = extractFrontmatter(content);
          
          // Extract category from path
          const pathSegments = path.split("/");
          const postCategory = pathSegments[pathSegments.length - 2];
          const filename = pathSegments[pathSegments.length - 1];
          const slug = filename.replace(".md", "");
          
          categorySet.add(postCategory);
          
          return {
            title: frontmatter.title || "Untitled",
            date: frontmatter.date || new Date().toISOString().split("T")[0],
            excerpt: frontmatter.excerpt || "",
            slug,
            category: postCategory
          };
        });
        
        const results = await Promise.all(promises);
        
        // Filter posts by the current category if provided
        const filteredPosts = category 
          ? results.filter(post => post.category === category)
          : results;
        
        // Sort posts by date (newest first)
        filteredPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        setPosts(filteredPosts);
        setCategories(Array.from(categorySet));
        setIsLoading(false);
      } catch (error) {
        console.error("Error loading posts:", error);
        setIsLoading(false);
      }
    };

    loadPosts();
  }, [category]);

  // Capitalize the first letter of category
  const formatCategoryName = (cat: string) => {
    return cat.charAt(0).toUpperCase() + cat.slice(1);
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main id="main-content" className="flex-1 py-12" tabIndex={-1}>
          <Container>
            <CategoryHeader 
              category={category} 
              formatCategoryName={formatCategoryName} 
            />

            <CategoryTabs 
              categories={categories} 
              category={category} 
              formatCategoryName={formatCategoryName} 
            />

            {/* Grid layout with main content */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Main content area with posts */}
              <div className="md:col-span-4">
                <PostsGrid 
                  posts={posts} 
                  isLoading={isLoading} 
                  category={category} 
                />
              </div>
            </div>
          </Container>
        </main>

        <CategoryFooter />
      </div>
    </PageTransition>
  );
};

export default Category;
