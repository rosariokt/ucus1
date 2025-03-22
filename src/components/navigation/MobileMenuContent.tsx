
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import SearchBar from "../search/SearchBar";

interface CategoryItem {
  name: string;
  icon: React.ReactNode;
}

interface MobileMenuContentProps {
  categories: CategoryItem[];
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  onCloseMenu: () => void;
}

const MobileMenuContent = ({ 
  categories, 
  searchQuery, 
  setSearchQuery, 
  handleSearch, 
  onCloseMenu 
}: MobileMenuContentProps) => {
  return (
    <div className="flex flex-col h-full">
      {/* Mobile Search */}
      <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
        className="mb-6 sm:hidden"
      />
      
      {/* Mobile Menu Navigation */}
      <div className="space-y-6 flex-1">
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Navigation</h3>
          <div className="space-y-1">
            <Link 
              to="/" 
              className="flex items-center py-2 text-base font-medium hover:text-primary transition-colors"
              onClick={onCloseMenu}
            >
              Home
            </Link>
            <Link 
              to="/categories" 
              className="flex items-center py-2 text-base font-medium hover:text-primary transition-colors"
              onClick={onCloseMenu}
            >
              All Categories
            </Link>
            <Link 
              to="/search" 
              className="flex items-center py-2 text-base font-medium hover:text-primary transition-colors"
              onClick={onCloseMenu}
            >
              Advanced Search
            </Link>
            <Link 
              to="/popular" 
              className="flex items-center py-2 text-base font-medium hover:text-primary transition-colors"
              onClick={onCloseMenu}
            >
              Popular Journals
            </Link>
          </div>
        </div>
        
        <Separator className="w-full" />
        
        <div className="space-y-2">
          <h3 className="text-sm font-medium text-muted-foreground">Categories</h3>
          <div className="space-y-1">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={`/categories/${category.name}`}
                className="flex items-center justify-between py-2 text-base capitalize hover:text-primary transition-colors"
                onClick={onCloseMenu}
              >
                <div className="flex items-center">
                  {category.icon}
                  {category.name}
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenuContent;
