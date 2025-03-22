
import { Grid3X3 } from "lucide-react";
import { CategoryCardGrid } from "@/components/categories";
import { CategoryCardList } from "@/components/categories";
import { useState, useEffect } from "react";

interface CategoriesTabContentProps {
  tabValue: string;
  viewMode: "grid" | "list";
  filteredCategories: string[];
  featuredCategories: string[];
}

const CategoriesTabContent = ({ 
  tabValue, 
  viewMode, 
  filteredCategories, 
  featuredCategories 
}: CategoriesTabContentProps) => {
  const [isMounted, setIsMounted] = useState(false);
  
  // Only set the mounted state on the client side
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (tabValue === "all") {
    if (filteredCategories.length === 0) {
      return (
        <div className="text-center py-12">
          <Grid3X3 className="h-10 w-10 mx-auto text-muted-foreground mb-3" />
          <h3 className="text-lg font-medium mb-1">No categories found</h3>
          <p className="text-muted-foreground text-sm">
            Try adjusting your search or filter to find what you're looking for.
          </p>
        </div>
      );
    }

    return (
      <>
        {viewMode === "grid" ? (
          <CategoryCardGrid categories={filteredCategories} />
        ) : (
          <CategoryCardList categories={filteredCategories} />
        )}
      </>
    );
  }
  
  // Featured tab
  return (
    <>
      {viewMode === "grid" ? (
        <CategoryCardGrid categories={featuredCategories} isFeatured />
      ) : (
        <CategoryCardList categories={featuredCategories} isFeatured />
      )}
    </>
  );
};

export default CategoriesTabContent;
