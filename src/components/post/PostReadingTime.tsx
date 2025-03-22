
import { BookOpen, Clock } from "lucide-react";
import { useMemo } from "react";

interface PostReadingTimeProps {
  content: string;
}

const PostReadingTime = ({ content }: PostReadingTimeProps) => {
  const readingTime = useMemo(() => {
    const wordsPerMinute = 200; // Average reading speed
    const wordCount = content.trim().split(/\s+/).length;
    return Math.ceil(wordCount / wordsPerMinute);
  }, [content]);

  return (
    <div className="flex items-center text-sm text-muted-foreground">
      <Clock className="h-4 w-4 mr-1.5" />
      <span>{readingTime} min read</span>
    </div>
  );
};

export default PostReadingTime;
