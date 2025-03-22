
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export type AdPosition = 
  | "default" 
  | "in-feed" 
  | "content-top" 
  | "content-middle" 
  | "sidebar" 
  | "sticky-sidebar"
  | "content-bottom"
  | "sticky-bottom";

interface AdSenseProps {
  slot: string;
  format?: "auto" | "rectangle" | "horizontal" | "vertical";
  size?: string;
  className?: string;
  position?: AdPosition;
  keywords?: string[];
}

/**
 * AdSense Component - Renders Google AdSense advertisements
 * 
 * Notes:
 * - This component will only render on client-side to prevent hydration issues
 * - Multiple instances can be placed throughout the page
 */
const AdSense: React.FC<AdSenseProps> = ({
  slot,
  format = "auto",
  size = "responsive",
  className,
  position = "default",
  keywords = [],
}) => {
  const [isMounted, setIsMounted] = useState(false);
  
  // Only execute this effect on the client side
  useEffect(() => {
    setIsMounted(true);
    
    // Only run this in browser environment
    if (typeof window !== 'undefined') {
      try {
        // Load Google AdSense script if it doesn't exist
        if (!document.querySelector('script[src*="pagead2.googlesyndication.com"]')) {
          const script = document.createElement('script');
          script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
          script.async = true;
          script.crossOrigin = "anonymous";
          script.dataset.adClient = "ca-pub-1234567890123456"; // Replace with your actual publisher ID
          document.head.appendChild(script);
        }
        
        // Initialize ads after the component is mounted - with delay to avoid timing issues
        setTimeout(() => {
          if (window.adsbygoogle) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
          }
        }, 300);
      } catch (e) {
        console.error("AdSense error:", e);
      }
    }
  }, []);

  // Use the same exact rendering structure for both client and server
  // This consistent structure is critical to prevent hydration mismatches
  return (
    <div className={cn("overflow-hidden text-center ad-container", `ad-${position}`, className)}>
      <div className="text-xs text-muted-foreground mb-1">Advertisement</div>
      {isMounted ? (
        <ins
          className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-1234567890123456" // Replace with your actual publisher ID
          data-ad-slot={slot}
          data-ad-format={format}
          data-ad-layout-key="-ef+6k-30-ac+ty"
          data-full-width-responsive="true"
        ></ins>
      ) : (
        <div className="adsbygoogle-placeholder h-[90px] bg-muted/10 rounded"></div>
      )}
    </div>
  );
};

// Add type augmentation for the global window object
declare global {
  interface Window {
    adsbygoogle?: any[];
    __HYDRATION_ERROR_COUNT__?: number;
    __FORCE_CLIENT_RENDER__?: boolean;
  }
}

export default AdSense;
