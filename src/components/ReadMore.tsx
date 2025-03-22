
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface ReadMoreProps {
  children: React.ReactNode;
  maxHeight?: number;
  className?: string;
  buttonText?: {
    more: string;
    less: string;
  };
}

const ReadMore = ({
  children,
  maxHeight = 200,
  className,
  buttonText = { more: "Read more", less: "Show less" },
}: ReadMoreProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "transition-all duration-500 ease-in-out overflow-hidden",
          !expanded && `max-h-[${maxHeight}px]`
        )}
        style={{ maxHeight: expanded ? "2000px" : `${maxHeight}px` }}
      >
        {children}
        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent transition-opacity duration-300" />
        )}
      </div>
      
      <div className="flex justify-center mt-2 overflow-hidden">
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setExpanded(!expanded)}
          className="flex items-center text-primary hover:text-primary/80 font-medium text-sm transform transition-all duration-200 hover:scale-105"
        >
          {expanded ? (
            <>
              {buttonText.less}
              <ChevronUp className="ml-1 h-4 w-4 animate-bounce" />
            </>
          ) : (
            <>
              {buttonText.more}
              <ChevronDown className="ml-1 h-4 w-4 animate-bounce" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ReadMore;
