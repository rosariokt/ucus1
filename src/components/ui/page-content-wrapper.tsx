
import React from "react";
import { cn } from "@/lib/utils";
import { SkipToContent } from "@/components/accessibility";

interface PageContentWrapperProps {
  children: React.ReactNode;
  className?: string;
}

const PageContentWrapper = ({ children, className }: PageContentWrapperProps) => {
  return (
    <div className={cn("min-h-screen flex flex-col bg-background", className)}>
      <SkipToContent />
      {children}
    </div>
  );
};

export default PageContentWrapper;
