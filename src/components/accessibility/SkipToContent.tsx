
import React from "react";

/**
 * Skip to content link that appears on keyboard focus
 * Complies with WCAG 2.1 SC 2.4.1 (Bypass Blocks) 
 */
const SkipToContent = () => {
  return (
    <a 
      href="#main-content" 
      className="absolute z-50 p-3 bg-primary text-primary-foreground -translate-y-full focus:translate-y-0 transition-transform duration-200 focus:outline-2 focus:outline-offset-2 focus:outline-primary left-6 top-6" 
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  );
};

export default SkipToContent;
