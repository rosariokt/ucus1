
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface CategoryCardGridProps {
  categories: string[];
  isFeatured?: boolean;
}

const CategoryCardGrid = ({ categories, isFeatured = false }: CategoryCardGridProps) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {categories.map((category) => (
        <Link 
          key={category}
          to={`/categories/${category}`}
          className="group border rounded-md p-3 hover:border-primary/50 hover:bg-accent flex flex-col justify-between h-20 transition-colors"
        >
          {isFeatured && (
            <Badge variant="outline" className="mb-2 bg-primary/5 text-primary border-primary/20">
              Featured
            </Badge>
          )}
          <span className="font-medium capitalize text-sm">{category}</span>
          <div className="flex items-center justify-end text-muted-foreground group-hover:text-primary">
            <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCardGrid;
