
import { useState, useMemo } from "react";
import { BookOpen, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  CategorySearch, 
  ViewModeToggle, 
  CategoryCardGrid, 
  CategoryCardList,
  CategoriesTabContent
} from "@/components/categories";
import { allCategories, featuredCategories, getRandomItems } from "@/components/categories/CategoriesData";

interface CategoryListProps {
  showLimited?: boolean;
}

const CategoryList = ({ showLimited = false }: CategoryListProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  
  // Get 10 random categories for the homepage
  const randomCategories = useMemo(() => 
    getRandomItems(allCategories, 10)
  , []);
  
  // Determine which categories to display based on props
  const categoriesToDisplay = showLimited ? randomCategories : allCategories;
  
  // Filter categories based on search
  const filteredCategories = categoriesToDisplay.filter(category => 
    category.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  return (
    <Container>
      <div className="mt-16 mb-20">
        <div className="flex flex-col gap-2 mb-8">
          <h2 className="text-3xl font-serif font-semibold tracking-tight text-foreground/90">
            Academic Journals & Publications
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl">
            Explore our extensive collection of peer-reviewed journals across various academic disciplines.
          </p>
        </div>
        
        <div className="bg-card border rounded-xl p-6 mb-8 shadow-sm">
          {!showLimited && (
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <CategorySearch 
                searchQuery={searchQuery} 
                setSearchQuery={setSearchQuery} 
              />
              
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-1.5 text-muted-foreground"
                >
                  <Filter className="h-3.5 w-3.5" />
                  <span>Filter</span>
                </Button>
                
                <ViewModeToggle viewMode={viewMode} setViewMode={setViewMode} />
              </div>
            </div>
          )}
          
          {showLimited ? (
            // Show random categories in a grid for the homepage
            <CategoryCardGrid categories={randomCategories} />
          ) : (
            // Show full categories list with tabs
            <Tabs defaultValue="all" className="w-full">
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Categories</TabsTrigger>
                <TabsTrigger value="featured">Featured</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-0">
                <CategoriesTabContent 
                  tabValue="all"
                  viewMode={viewMode}
                  filteredCategories={filteredCategories}
                  featuredCategories={featuredCategories}
                />
              </TabsContent>
              
              <TabsContent value="featured" className="mt-0">
                <CategoriesTabContent 
                  tabValue="featured"
                  viewMode={viewMode}
                  filteredCategories={filteredCategories}
                  featuredCategories={featuredCategories}
                />
              </TabsContent>
            </Tabs>
          )}

          {showLimited && (
            <div className="mt-8 text-center">
              <Button asChild variant="default" size="lg" className="px-6 bg-primary hover:bg-primary/90 text-white">
                <Link to="/categories" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>Browse all categories</span>
                </Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default CategoryList;
