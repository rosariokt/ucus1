
import React from 'react';

interface StaticContentProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Komponen pembungkus untuk konten statis yang memastikan konten
 * dirender dengan benar dalam lingkungan SSG
 */
const StaticContent = ({ children, className = "" }: StaticContentProps) => {
  return (
    <div className={`static-content-wrapper ${className}`}>
      {children}
    </div>
  );
};

export default StaticContent;
