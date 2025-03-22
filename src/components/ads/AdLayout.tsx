
import React from 'react';
import AdSense, { AdPosition } from './AdSense';
import { cn } from '@/lib/utils';

interface AdLayoutProps {
  children: React.ReactNode;
  contentType?: 'article' | 'feed' | 'category' | 'homepage';
  keywords?: string[];
  className?: string;
}

const AdLayout = ({ 
  children, 
  contentType = 'article',
  keywords = [],
  className
}: AdLayoutProps) => {
  // Different ad slot assignments based on content type
  const getAdConfig = (position: AdPosition) => {
    // Map positions to optimal ad formats and slots based on heatmap data
    const adConfigs = {
      'content-top': {
        slot: '1234567890', // Replace with your actual slot IDs
        format: 'horizontal' as const,
        size: '728x90' as const
      },
      'content-middle': {
        slot: '0987654321',
        format: 'rectangle' as const,
        size: '336x280' as const
      },
      'content-bottom': {
        slot: '1122334455',
        format: 'horizontal' as const,
        size: '728x90' as const
      },
      'sidebar': {
        slot: '5566778899',
        format: 'vertical' as const,
        size: '300x600' as const
      },
      'in-feed': {
        slot: '9988776655',
        format: 'rectangle' as const,
        size: '300x250' as const
      },
      'sticky-bottom': {
        slot: '6655443322',
        format: 'horizontal' as const,
        size: '320x100' as const
      },
      'sticky-sidebar': {
        slot: '2233445566',
        format: 'vertical' as const,
        size: '300x600' as const
      },
    };

    return adConfigs[position];
  };

  // Determine which ads to show based on content type
  const showAd = (position: AdPosition): boolean => {
    switch (contentType) {
      case 'article':
        return ['content-top', 'content-middle', 'content-bottom', 'sidebar'].includes(position);
      case 'feed':
        return ['content-top', 'in-feed', 'sticky-bottom'].includes(position);
      case 'category':
        return ['content-top', 'in-feed', 'sidebar'].includes(position);
      case 'homepage':
        return ['content-top', 'in-feed', 'sticky-bottom'].includes(position);
      default:
        return false;
    }
  };

  // Smart keyword handling - extract relevant keywords for better ad targeting
  const getSmartKeywords = () => {
    // Start with base keywords
    let smartKeywords = [...keywords];
    
    // Add high-value keywords based on content type
    if (contentType === 'article') {
      smartKeywords = [...smartKeywords, 'research', 'academic', 'study', 'education'];
    } else if (contentType === 'category') {
      smartKeywords = [...smartKeywords, 'collection', 'topics', 'subject'];
    }
    
    return smartKeywords;
  };

  return (
    <div className={cn("ad-layout-container relative", className)}>
      {/* Content Top Ad - High CTR position */}
      {showAd('content-top') && (
        <AdSense 
          position="content-top"
          {...getAdConfig('content-top')}
          keywords={getSmartKeywords()}
        />
      )}
      
      {/* Main Content with Ads */}
      <div className="ad-layout-content">
        {children}
        
        {/* Content Middle Ad - Embedded within content for high engagement */}
        {showAd('content-middle') && contentType === 'article' && (
          <AdSense 
            position="content-middle"
            {...getAdConfig('content-middle')}
            keywords={getSmartKeywords()}
          />
        )}
      </div>
      
      {/* Content Bottom Ad - After content completion */}
      {showAd('content-bottom') && (
        <AdSense 
          position="content-bottom" 
          {...getAdConfig('content-bottom')}
          keywords={getSmartKeywords()}
        />
      )}
      
      {/* Sticky Bottom Ad - Persistent visibility */}
      {showAd('sticky-bottom') && (
        <AdSense 
          position="sticky-bottom"
          {...getAdConfig('sticky-bottom')}
          keywords={getSmartKeywords()}
        />
      )}
    </div>
  );
};

export default AdLayout;
