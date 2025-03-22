
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollToTopProps {
  threshold?: number;
  className?: string;
}

const ScrollToTop = ({ threshold = 300, className }: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [threshold]);

  return (
    <button
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-8 right-8 p-3 rounded-full bg-primary/90 text-white shadow-lg hover:bg-primary transition-all duration-300 z-50",
        "transform scale-90 hover:scale-100",
        "hover:shadow-primary/20 hover:shadow-lg",
        isVisible 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-10 pointer-events-none",
        className
      )}
    >
      <ArrowUp size={20} className="animate-pulse" />
    </button>
  );
};

export default ScrollToTop;
