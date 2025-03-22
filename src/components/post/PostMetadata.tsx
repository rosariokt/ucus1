
import { formatDate } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarIcon, Bookmark, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";

interface PostMetadataProps {
  author: string;
  date: string;
  category?: string;
  readingTime?: number;
}

const PostMetadata = ({ author, date, category, readingTime }: PostMetadataProps) => {
  // Get first author for display in metadata
  const primaryAuthor = author.split(',')[0].trim();
  
  // Get author initials for avatar fallback
  const getAuthorInitials = (name: string): string => {
    return name
      .split(' ')
      .map(part => part[0])
      .slice(0, 2)
      .join('')
      .toUpperCase();
  };

  // Mock reading time calculation
  const calculatedReadingTime = readingTime || 8;

  return (
    <div className="flex flex-wrap items-center gap-4 mt-4">
      <div className="flex items-center gap-3">
        <Avatar className="h-10 w-10 border-2 border-background shadow-sm">
          <AvatarImage src={`https://api.dicebear.com/7.x/initials/svg?seed=${primaryAuthor}`} alt={primaryAuthor} />
          <AvatarFallback className="bg-primary/10 text-primary text-xs font-medium">
            {getAuthorInitials(primaryAuthor)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex flex-col">
          <span className="font-medium text-foreground">{author.includes(',') ? `${primaryAuthor} et al.` : primaryAuthor}</span>
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center">
              <CalendarIcon className="h-3.5 w-3.5 mr-1.5" />
              <time dateTime={date}>{formatDate(date)}</time>
            </span>
            
            <span className="flex items-center">
              <Clock className="h-3.5 w-3.5 mr-1.5" />
              <span>{calculatedReadingTime} min read</span>
            </span>
          </div>
        </div>
      </div>
      
      {category && (
        <Link to={`/categories/${category}`} className="ml-auto">
          <Badge 
            variant="outline" 
            className="transition-colors hover:bg-primary/10 hover:text-foreground capitalize"
          >
            <Bookmark className="h-3.5 w-3.5 mr-1.5" />
            {category}
          </Badge>
        </Link>
      )}
    </div>
  );
};

export default PostMetadata;
