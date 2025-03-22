
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ArticleListFooter = () => {
  return (
    <div className="flex justify-center mt-10">
      <Button 
        variant="outline" 
        className="group border-primary/30 hover:border-primary hover:bg-primary/5"
        asChild
      >
        <Link to="/categories">
          <span>View All Academic Articles</span>
          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Button>
    </div>
  );
};

export default ArticleListFooter;
