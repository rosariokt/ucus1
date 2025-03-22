
import React from 'react';
import AdSense from './AdSense';
import { cn } from '@/lib/utils';

interface SidebarAdProps {
  className?: string;
  keywords?: string[];
}

const SidebarAd = ({ className, keywords = [] }: SidebarAdProps) => {
  // Sidebar ads are optimized for longer viewtime and persistence
  return (
    <div className={cn("sidebar-ad-container", className)}>
      <AdSense 
        position="sticky-sidebar"
        slot="2233445566" // Replace with your actual slot ID
        format="vertical"
        size="300x600"
        keywords={keywords}
        className="max-w-[300px] mx-auto"
      />
    </div>
  );
};

export default SidebarAd;
