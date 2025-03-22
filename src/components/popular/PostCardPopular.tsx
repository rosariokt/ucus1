
import React from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ChevronRight, BookOpen, Users, Newspaper, Award } from "lucide-react";
import { getCategoryColor } from "@/lib/utils";

interface PostCardPopularProps {
  post: {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    category: string;
    author: string;
    views?: number;
    citations?: number;
  };
  index: number;
  isCitation?: boolean;
}

const PostCardPopular = ({ post, index, isCitation = false }: PostCardPopularProps) => {
  const categoryColor = getCategoryColor(post.category);
  const MetricIcon = isCitation ? Award : Users;
  const metricValue = isCitation ? post.citations : post.views;
  const metricLabel = isCitation ? "citations" : "views";

  return (
    <Card
      className="overflow-hidden border-border/40 hover:border-primary/30 transition-all duration-300 hover:shadow-md group"
    >
      <CardContent className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-1">
              <Badge 
                variant="outline" 
                className={`text-xs font-medium rounded-full ${categoryColor}`}
              >
                {post.category}
              </Badge>
              
              <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full flex items-center">
                <MetricIcon className="h-3 w-3 mr-1" />
                {metricValue} {metricLabel}
              </span>
            </div>
            
            <h3 className="font-serif text-xl font-semibold leading-tight text-[#2C3E50] group-hover:text-primary transition-colors">
              <Link 
                to={`/${post.category}/${post.slug}`} 
                className="hover:underline decoration-primary/30 underline-offset-4"
              >
                {post.title}
              </Link>
            </h3>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              {post.excerpt.length > 140 ? post.excerpt.substring(0, 140) + "..." : post.excerpt}
            </p>
            
            <div className="pt-2">
              <Button variant="ghost" size="sm" asChild className="text-primary p-0 h-auto hover:bg-transparent hover:underline">
                <Link to={`/${post.category}/${post.slug}`} className="flex items-center academic-link">
                  <span className="text-xs mr-1">Read full article</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:border-l lg:pl-6 flex flex-col justify-center">
            <div className="text-center">
              <div className="flex flex-col items-center">
                <MetricIcon className="h-5 w-5 text-primary/70 mb-1" />
                <span className="text-2xl font-medium font-serif text-foreground/90">{metricValue}</span>
                <span className="text-xs text-muted-foreground">Total {isCitation ? "Citations" : "Views"}</span>
              </div>
              
              <Separator className="my-3 opacity-30" />
              
              <div className="flex flex-col items-center">
                {isCitation ? (
                  <Newspaper className="h-5 w-5 text-primary/70 mb-1" />
                ) : (
                  <BookOpen className="h-5 w-5 text-primary/70 mb-1" />
                )}
                <span className="text-2xl font-medium font-serif text-foreground/90">
                  {isCitation ? post.views : post.citations}
                </span>
                <span className="text-xs text-muted-foreground">
                  {isCitation ? "Views" : "Citations"}
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostCardPopular;
