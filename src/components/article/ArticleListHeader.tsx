
import { BookOpen, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ArticleListHeader = () => {
  return (
    <div className="flex items-center justify-between mb-10">
      <div className="flex flex-col">
        <h2 className="text-3xl md:text-4xl font-serif font-medium tracking-tight flex items-center text-[#2C3E50]">
          <BookOpen className="h-7 w-7 mr-3 text-primary" />
          Jurnal Harian Regional
        </h2>
        <p className="text-muted-foreground mt-2 text-lg max-w-2xl">
          Discover peer-reviewed research from leading academic institutions worldwide
        </p>
      </div>
      <Button 
        variant="outline" 
        size="sm" 
        className="group text-primary border-primary/30 hover:border-primary hover:bg-primary/5"
        asChild
      >
        <Link to="/categories">
          <span>View all</span>
          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </Button>
    </div>
  );
};

export default ArticleListHeader;
