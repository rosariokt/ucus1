
import React, { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ReadingProgressProps {
  className?: string;
  color?: string;
  height?: number;
  targetId?: string;
}

const ReadingProgress = ({ 
  className, 
  color,
  height = 3,
  targetId = "article-content"
}: ReadingProgressProps) => {
  const [readingProgress, setReadingProgress] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    
    const article = document.getElementById(targetId);
    
    if (!article) return;

    const calculateReadingProgress = () => {
      const currentPosition = window.scrollY;
      const articleStart = article.offsetTop - 100; // Adjust for header
      const articleHeight = article.clientHeight;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // If we're before the article, progress is 0
      if (currentPosition < articleStart) {
        setReadingProgress(0);
        return;
      }
      
      // If we're at the end of the page, progress is 100
      if (currentPosition + windowHeight >= documentHeight) {
        setReadingProgress(100);
        return;
      }
      
      // Calculate progress through the article
      let progress = ((currentPosition - articleStart) / 
                    (articleHeight - windowHeight / 2)) * 100;
      
      // Clamp progress between 0 and 100
      progress = Math.max(0, Math.min(100, progress));
      setReadingProgress(progress);
    };

    // Initial calculation
    calculateReadingProgress();
    
    // Attach event listener
    window.addEventListener("scroll", calculateReadingProgress, { passive: true });
    
    // Clean up
    return () => {
      window.removeEventListener("scroll", calculateReadingProgress);
    };
  }, [targetId]);

  // Don't render anything during SSR
  if (!isMounted) return null;

  // Ensure proper ARIA attributes for accessibility
  const progressLabel = `Reading progress: ${Math.round(readingProgress)}%`;
  
  return (
    <div 
      className="reading-progress-container" 
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(readingProgress)}
      aria-label={progressLabel}
    >
      <Progress 
        value={readingProgress} 
        className={cn(
          "reading-progress-bar h-[3px] rounded-none bg-transparent focus-visible:outline-offset-2 focus-visible:outline-2 focus-visible:outline-primary",
          `h-[${height}px]`,
          className
        )}
        style={{ 
          backgroundColor: 'transparent',
          height: `${height}px`, 
          ...(color ? { '--progress-color': color } : {}) 
        }}
      />
    </div>
  );
};

export default ReadingProgress;
