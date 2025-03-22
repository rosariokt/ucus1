
import { Clock, ChevronRight, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const LatestUpdatesWidget = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border mb-12 p-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <Clock className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="font-serif text-xl font-medium text-foreground/90">Latest Updates</h3>
            <p className="text-sm text-muted-foreground">Our repository is updated daily with new academic research</p>
          </div>
        </div>
        
        <Separator className="md:hidden w-full" />
        
        <div className="md:border-l md:border-r md:px-8 py-2 flex flex-col items-center">
          <p className="text-center">
            <span className="block text-3xl font-serif font-medium text-primary">10,000+</span> 
            <span className="block text-sm text-muted-foreground mt-1">Academic Papers</span>
          </p>
        </div>
        
        <Separator className="md:hidden w-full" />
        
        <div>
          <Button 
            variant="outline" 
            size="sm" 
            className="group border-primary/30 text-primary hover:bg-primary/5 hover:border-primary flex items-center gap-1.5"
            asChild
          >
            <Link to="/popular">
              <Eye className="h-4 w-4" />
              <span>Explore popular journals</span>
              <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LatestUpdatesWidget;
