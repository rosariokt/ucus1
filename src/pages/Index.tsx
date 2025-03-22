
import React from "react";
import { Hero, ArticleList, CategoryList, Footer, Header, PageTransition } from "@/components";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Calendar, ChevronRight } from "lucide-react";

const Index = () => {
  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col bg-background">
        <Header transparent={true} />
        
        {/* Hero Section */}
        <Hero />

        {/* Main Content */}
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {/* Featured Section */}
          <div className="bg-muted/30 py-8 border-y border-border/30">
            <div className="container mx-auto px-4">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <Calendar className="h-8 w-8 text-primary/70" />
                  <div>
                    <h3 className="font-serif text-lg font-medium text-foreground/80">Latest Updates</h3>
                    <p className="text-sm text-muted-foreground">Our repository is updated daily with new academic research</p>
                  </div>
                </div>
                
                <Separator className="md:hidden w-full" />
                
                <div className="md:border-l md:pl-6 md:border-r md:pr-6 py-2">
                  <p className="text-center font-light text-muted-foreground">
                    <span className="text-2xl font-serif font-medium text-primary">10,000+</span> 
                    <span className="block text-sm mt-1">Academic Papers</span>
                  </p>
                </div>
                
                <Separator className="md:hidden w-full" />
                
                <div>
                  <Link to="/popular" className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 group">
                    <span>Explore popular journals</span>
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        
          {/* Article List */}
          <ArticleList />
          
          {/* Categories List - Show limited categories with link to full page */}
          <CategoryList showLimited={true} />
        </main>
        
        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
