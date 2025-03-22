
import React from "react";
import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: "default" | "small" | "large" | "full";
  fontStyle?: "default" | "academic" | "serif" | "modern";
  centered?: boolean;
  withGutter?: boolean;
  animateIn?: boolean;
}

const Container = ({ 
  children, 
  className, 
  size = "default", 
  fontStyle = "default",
  centered = false,
  withGutter = true,
  animateIn = true,
  ...props 
}: ContainerProps) => {
  return (
    <div
      className={cn(
        "w-full mx-auto transition-all duration-300",
        {
          "animate-fade-in": animateIn,
          "px-4 sm:px-6": withGutter,
          "max-w-7xl": size === "large",
          "max-w-5xl": size === "default",
          "max-w-3xl": size === "small",
          "max-w-none": size === "full",
          "font-serif": fontStyle === "serif",
          "font-sans tracking-tight": fontStyle === "modern",
          "prose prose-lg prose-blue dark:prose-invert": fontStyle === "academic",
          "text-center": centered,
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
