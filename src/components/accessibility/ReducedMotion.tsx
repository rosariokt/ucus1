
import React, { useEffect, useState } from "react";

/**
 * Component that respects the user's prefers-reduced-motion setting
 * Complies with WCAG 2.1 SC 2.3.3 (Animation from Interactions)
 */
const ReducedMotion: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const onChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };
    
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);
  
  return (
    <div className={prefersReducedMotion ? "motion-safe:animate-none" : ""}>
      {children}
    </div>
  );
};

export default ReducedMotion;
