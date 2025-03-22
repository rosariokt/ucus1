
import { cn } from "@/lib/utils";
import React from "react";

interface VisuallyHiddenProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Component that hides content visually but keeps it accessible to screen readers
 */
const VisuallyHidden = ({ 
  children, 
  className, 
  as: Component = "span",
  ...props 
}: VisuallyHiddenProps) => {
  return (
    <Component
      className={cn(
        "absolute w-px h-px p-0 overflow-hidden whitespace-nowrap border-0",
        "clip-rect-0 not-sr-only",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default VisuallyHidden;
