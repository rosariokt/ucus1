
import { cn } from "@/lib/utils";
import React from "react";

interface VisuallyHiddenProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Component that hides content visually but keeps it accessible to screen readers
 * Following WCAG standards for screen reader accessibility
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
        "absolute w-1 h-1 p-0 -m-1 overflow-hidden",
        "clip-path-inset-50 whitespace-nowrap",
        className
      )}
      style={{
        clip: "rect(0, 0, 0, 0)",
        clipPath: "inset(50%)",
        whiteSpace: "nowrap",
        border: 0
      }}
      {...props}
    >
      {children}
    </Component>
  );
};

export default VisuallyHidden;
