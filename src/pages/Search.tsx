
import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { Container, Header, PageTransition, Footer } from "@/components";
import PostCard from "@/components/PostCard";
import { extractFrontmatter } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SearchIcon } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

interface Post {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  category: string;
  content: string;
}

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const keyword = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(keyword);
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setIsLoading(true);
      try {
        // Dynamically import all markdown files
        const modules = import.meta.glob("/src/content/**/*.md", { query: '?raw', import: 'default' });
        const allPosts: Post[] = [];

        // Process all file paths and load content for each file
        const promises = Object.entries(modules).map(async ([path, loader]) => {
          const content = await loader() as string;
          const { frontmatter, content: postContent } = extractFrontmatter(content);
          
          // Extract category from path
          const pathSegments = path.split("/");
          const category = pathSegments[pathSegments.length - 2];
          const filename = pathSegments[pathSegments.length - 1];
          const slug = filename.replace(".md", "");
          
          return {
            title: frontmatter.title || "Untitled",
            date: frontmatter.date || new Date().toISOString().split("T")[0],
            excerpt: frontmatter.excerpt || "",
            slug,
            category,
            content: postContent
          };
        });
        
        const results = await Promise.all(promises);
        
        // Sort posts by date (newest first)
        results.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
        
        setPosts(results);
      } catch (error) {
        console.error("Error loading posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, []);

  useEffect(() => {
    if (keyword && posts.length > 0) {
      const lowercaseKeyword = keyword.toLowerCase();
      
      const results = posts.filter((post) => 
        post.title.toLowerCase().includes(lowercaseKeyword) ||
        post.excerpt.toLowerCase().includes(lowercaseKeyword) ||
        post.content.toLowerCase().includes(lowercaseKeyword)
      );
      
      setFilteredPosts(results);
    } else {
      setFilteredPosts([]);
    }
  }, [keyword, posts]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchParams({ q: searchQuery });
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main id="main-content" className="flex-1 py-12" tabIndex={-1}>
          <Container>
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <Link to="/" className="text-sm font-medium hover:underline">Home</Link>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Search</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <div className="mb-10">
              <h1 className="text-4xl font-display font-bold tracking-tight mb-4">
                Search
              </h1>
              <p className="text-muted-foreground text-lg">
                Find posts by title, excerpt, or content
              </p>
            </div>

            <form onSubmit={handleSearch} className="mb-8">
              <div className="flex gap-2">
                <Input
                  type="search"
                  placeholder="Enter keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="max-w-lg"
                  aria-label="Search terms"
                />
                <Button type="submit">
                  <SearchIcon className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </form>

            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="animate-pulse p-6 border rounded-xl">
                    <div className="h-4 bg-secondary rounded w-1/4 mb-4"></div>
                    <div className="h-6 bg-secondary rounded w-3/4 mb-4"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-secondary rounded"></div>
                      <div className="h-4 bg-secondary rounded"></div>
                      <div className="h-4 bg-secondary rounded w-5/6"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : keyword ? (
              <>
                <div className="mb-6">
                  <h2 className="text-2xl font-display font-semibold mb-2">
                    {filteredPosts.length} results for "{keyword}"
                  </h2>
                </div>

                {filteredPosts.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredPosts.map((post) => (
                      <PostCard
                        key={`${post.category}-${post.slug}`}
                        title={post.title}
                        excerpt={post.excerpt}
                        date={post.date}
                        slug={post.slug}
                        category={post.category}
                      />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-2xl font-display font-semibold mb-2">No posts found</h3>
                    <p className="text-muted-foreground">
                      Try different keywords or browse categories instead.
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  Enter a search term to find posts.
                </p>
              </div>
            )}
          </Container>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Search;
