
import { Link } from "react-router-dom";
import { cn, formatDate, getCategoryColor } from "@/lib/utils";
import { CalendarIcon, BookOpen, ArrowRightIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface PostCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  category: string;
  className?: string;
}

const PostCard = ({
  title,
  excerpt,
  date,
  slug,
  category,
  className,
}: PostCardProps) => {
  const categoryColor = getCategoryColor(category);

  return (
    <div 
      className={cn(
        "group relative flex flex-col rounded-xl border border-border/60 transition-all duration-300 hover:shadow-md hover:border-primary/20 overflow-hidden bg-card",
        "transform hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >      
      <div className="p-6 flex-1 flex flex-col">
        {/* Top metadata row with date and category */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-xs font-medium text-muted-foreground">
            <CalendarIcon className="h-3.5 w-3.5 mr-1.5" />
            <time dateTime={date}>{formatDate(date)}</time>
          </div>
          
          <Badge 
            variant="outline" 
            className={cn(
              "text-xs font-medium rounded-full transition-colors",
              "transform transition-all duration-300 group-hover:scale-105",
              categoryColor
            )}
          >
            {category}
          </Badge>
        </div>
        
        {/* Title with hover effect */}
        <h2 className="font-display text-xl font-semibold tracking-tight leading-tight mb-3 text-foreground/90 group-hover:text-primary transition-colors">
          {title}
        </h2>
        
        <Separator className="my-3 opacity-30 transition-all duration-300 group-hover:opacity-60" />
        
        {/* Excerpt with lighter text */}
        <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-grow">
          {excerpt}
        </p>
        
        {/* Read more link with arrow icon */}
        <Link
          to={`/${category}/${slug}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors mt-auto group-hover:underline decoration-primary/30 underline-offset-4"
        >
          <BookOpen className="h-4 w-4 mr-1.5 opacity-70 transition-transform group-hover:translate-x-0.5 duration-300" />
          Read full article
          <ArrowRightIcon className="h-3.5 w-3.5 ml-1.5 transition-transform group-hover:translate-x-1 duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
