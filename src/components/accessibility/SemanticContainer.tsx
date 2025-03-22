
import React from "react";
import { cn } from "@/lib/utils";

interface SemanticContainerProps {
  as?: "main" | "section" | "article" | "aside" | "nav" | "header" | "footer";
  id?: string;
  label?: string;
  children: React.ReactNode;
  className?: string;
}

/**
 * Component that ensures proper semantic HTML structure with ARIA labels when needed
 * Complies with WCAG 2.1 SC 1.3.1 (Info and Relationships) and 4.1.2 (Name, Role, Value)
 */
const SemanticContainer: React.FC<SemanticContainerProps> = ({
  as: Component = "section",
  id,
  label,
  children,
  className,
}) => {
  const ariaAttributes = label
    ? { "aria-label": label }
    : {};
  
  return (
    <Component
      id={id}
      className={cn("w-full", className)}
      {...ariaAttributes}
    >
      {children}
    </Component>
  );
};

export default SemanticContainer;
