
import { useState, useEffect, useRef } from "react";
import { BookOpen, ChevronDown, ChevronUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface PostTableOfContentsProps {
  content: string;
  className?: string;
}

const PostTableOfContents = ({ content, className }: PostTableOfContentsProps) => {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Set mounted state
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Generate table of contents from markdown content
  useEffect(() => {
    if (!content || !isMounted) return;
    
    const headers = content.match(/#{2,3}\s+(.+)/g) || [];
    const items = headers.map(header => {
      const level = (header.match(/^#{2,3}/) || [''])[0].length - 1;
      const text = header.replace(/^#{2,3}\s+/, '');
      const id = text.toLowerCase().replace(/[^\w]+/g, '-');
      return { level, text, id };
    });
    
    setToc(items);
  }, [content, isMounted]);
  
  // Track active section based on scroll position - client side only
  useEffect(() => {
    if (toc.length === 0 || !isMounted) return;
    
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    // Only create observers on the client side
    if (typeof window !== 'undefined' && 'IntersectionObserver' in window) {
      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              setActiveId(entry.target.id);
            }
          });
        },
        { rootMargin: "-80px 0px -80% 0px" }
      );
      
      // Observe all section headings
      toc.forEach(item => {
        const element = document.getElementById(item.id);
        if (element) observerRef.current?.observe(element);
      });
    }
    
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [toc, isMounted]);
  
  // Skip rendering during SSR or if there are no headers
  if (!isMounted || toc.length === 0) {
    return null;
  }
  
  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center">
          <BookOpen className="h-5 w-5 mr-2 text-primary/70" />
          <h3 className="text-base font-medium">In This Article</h3>
        </div>
        <Button 
          variant="ghost" 
          size="sm" 
          className="h-8 w-8 p-0"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
        </Button>
      </div>
      
      <CardContent className={cn(
        "p-0 transition-all duration-300 ease-in-out overflow-hidden",
        isCollapsed ? "max-h-0" : "max-h-[500px]"
      )}>
        <nav className="py-3 px-4">
          <ul className="space-y-1.5 text-sm">
            {toc.map((item, index) => (
              <li 
                key={index} 
                className={cn(
                  "transition-colors",
                  item.level === 2 ? "pl-0" : "pl-4 border-l-2 border-border"
                )}
              >
                <a 
                  href={`#${item.id}`} 
                  className={cn(
                    "block py-1 hover:text-primary transition-colors",
                    activeId === item.id ? "text-primary font-medium" : "text-muted-foreground"
                  )}
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </CardContent>
    </Card>
  );
};

export default PostTableOfContents;
