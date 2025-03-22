
import { BookOpen, ChevronRight, User, Calendar, Award, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
  author: string;
  index: number;
}

// Category color mappings
const categoryColors: Record<string, string> = {
  coding: "bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100",
  design: "bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100",
  health: "bg-green-50 text-green-700 border-green-200 hover:bg-green-100",
  lifestyle: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
  technology: "bg-indigo-50 text-indigo-700 border-indigo-200 hover:bg-indigo-100",
  blog: "bg-purple-50 text-purple-700 border-purple-200 hover:bg-purple-100",
  tutorials: "bg-teal-50 text-teal-700 border-teal-200 hover:bg-teal-100",
};

// Get color for category
const getCategoryColor = (category: string) => {
  return categoryColors[category] || "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100";
};

const ArticleCard = ({ 
  title, 
  excerpt, 
  date, 
  slug, 
  category, 
  author, 
  index 
}: ArticleCardProps) => {
  return (
    <Card
      className="animate-scale-in overflow-hidden border-border/40 hover:border-primary/30 transition-all duration-300 hover:shadow-md group"
      style={{ 
        animationDelay: `${index * 100}ms`,
        animationFillMode: "both" 
      }}
    >
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
          <div className="space-y-3">
            {/* Category badge */}
            <div className="flex items-center gap-2 mb-1">
              <Badge 
                variant="outline" 
                className={`text-xs font-medium rounded-full ${getCategoryColor(category)}`}
              >
                <Tag className="h-3 w-3 mr-1 opacity-70" />
                {category}
              </Badge>
            </div>
            
            {/* Title */}
            <h3 className="font-serif text-xl font-semibold leading-tight text-[#2C3E50] group-hover:text-primary transition-colors">
              <Link 
                to={`/${category}/${slug}`} 
                className="hover:underline decoration-primary/30 underline-offset-4"
              >
                {title}
              </Link>
            </h3>
            
            {/* Abstract */}
            <p className="text-muted-foreground text-sm leading-relaxed">
              {excerpt.length > 140 ? excerpt.substring(0, 140) + "..." : excerpt}
            </p>
            
            <div className="pt-2">
              <Button variant="ghost" size="sm" asChild className="text-primary p-0 h-auto hover:bg-transparent hover:underline">
                <Link to={`/${category}/${slug}`} className="flex items-center academic-link">
                  <span className="text-xs mr-1">Read full article</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:border-l lg:pl-6 space-y-3">
            {/* Author info */}
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-wide mb-1 font-medium">Author</span>
              <span className="flex items-center font-medium">
                <User className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                {author}
              </span>
            </div>
            
            <Separator className="opacity-30" />
            
            {/* Publication date */}
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-wide mb-1 font-medium">Published</span>
              <span className="flex items-center text-sm">
                <Calendar className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                <time dateTime={date}>{date}</time>
              </span>
            </div>
            
            <Separator className="opacity-30" />
            
            {/* Citation */}
            <div className="flex flex-col">
              <span className="text-xs text-muted-foreground uppercase tracking-wide mb-1 font-medium">Citation</span>
              <span className="flex items-center text-sm">
                <Award className="h-3.5 w-3.5 mr-1.5 text-primary/70" />
                <Link to={`/${category}/${slug}`} className="text-primary hover:underline">
                  View citation
                </Link>
              </span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ArticleCard;
