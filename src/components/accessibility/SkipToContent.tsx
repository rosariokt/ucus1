
import React from "react";

const SkipToContent = () => {
  return (
    <a 
      href="#main-content" 
      className="fixed top-0 left-0 p-3 bg-primary text-white transform -translate-y-full focus:translate-y-0 z-50 transition-transform duration-200 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary" 
      aria-label="Skip to content"
    >
      Skip to content
    </a>
  );
};

export default SkipToContent;
