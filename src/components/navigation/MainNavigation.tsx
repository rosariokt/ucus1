
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface CategoryItem {
  name: string;
  icon: React.ReactNode;
}

interface MainNavigationProps {
  categories: CategoryItem[];
}

const MainNavigation = ({ categories }: MainNavigationProps) => {
  return (
    <div className="hidden md:flex items-center space-x-6">
      <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
        Home
      </Link>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Link to="/categories" className="text-sm font-medium hover:text-primary transition-colors flex items-center group">
            Categories <ChevronRight className="h-3.5 w-3.5 ml-1 group-hover:rotate-90 transition-transform" />
          </Link>
        </HoverCardTrigger>
        <HoverCardContent className="w-64 p-4">
          <div className="grid grid-cols-2 gap-2">
            {categories.slice(0, 6).map((category) => (
              <Link
                key={category.name}
                to={`/categories/${category.name}`}
                className="flex items-center px-2 py-1.5 text-sm capitalize hover:text-primary hover:bg-secondary rounded-md transition-colors"
              >
                {category.icon}
                {category.name}
              </Link>
            ))}
          </div>
          <div className="mt-3 pt-3 border-t">
            <Link 
              to="/categories"
              className="text-xs text-primary hover:underline flex items-center"
            >
              View all categories <ChevronRight className="h-3 w-3 ml-1" />
            </Link>
          </div>
        </HoverCardContent>
      </HoverCard>
      <Link to="/search" className="text-sm font-medium hover:text-primary transition-colors">
        Advanced Search
      </Link>
      <Link to="/popular" className="text-sm font-medium hover:text-primary transition-colors">
        Popular Journals
      </Link>
    </div>
  );
};

export default MainNavigation;
