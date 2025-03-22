
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface CategoryCardListProps {
  categories: string[];
  isFeatured?: boolean;
}

const CategoryCardList = ({ categories, isFeatured = false }: CategoryCardListProps) => {
  return (
    <div className="flex flex-col space-y-2">
      {categories.map((category) => (
        <Link 
          key={category}
          to={`/categories/${category}`}
          className="flex items-center justify-between border-b py-3 px-2 hover:bg-accent/40 group transition-colors"
        >
          <div className="flex items-center gap-2">
            <span className="font-medium capitalize text-sm">{category}</span>
            {isFeatured && (
              <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20 ml-2">
                Featured
              </Badge>
            )}
          </div>
          <div className="flex items-center text-muted-foreground group-hover:text-primary">
            <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryCardList;
