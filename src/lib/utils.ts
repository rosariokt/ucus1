
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  // Format: January 1, 2023
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function slugify(text: string) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Generates a fully accessible aria description for dates
 * Complies with WCAG 2.1 SC 1.3.1 (Info and Relationships)
 */
export function accessibleDate(dateString: string, format: "long" | "short" = "long"): {
  formatted: string;
  iso: string;
  ariaLabel: string;
} {
  const date = new Date(dateString);
  
  const formatted = format === "long" 
    ? date.toLocaleDateString("en-US", { 
        year: "numeric", 
        month: "long", 
        day: "numeric" 
      })
    : date.toLocaleDateString("en-US", { 
        year: "numeric", 
        month: "short", 
        day: "numeric" 
      });
  
  const iso = date.toISOString();
  
  // Create an accessible description for screen readers
  const ariaLabel = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  
  return { formatted, iso, ariaLabel };
}

// This function helps extract frontmatter from markdown content
export function extractFrontmatter(content: string) {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(content);
  
  if (!match) return { frontmatter: {}, content };
  
  const frontmatterString = match[1];
  const remainingContent = content.replace(frontmatterRegex, '').trim();
  const frontmatter: Record<string, any> = {};
  
  // Parse frontmatter
  const lines = frontmatterString.split('\n');
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    // Skip empty lines
    if (!line.trim()) continue;
    
    // Look for key: value pattern
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;
    
    const key = line.slice(0, colonIndex).trim();
    let value: string | string[] = line.slice(colonIndex + 1).trim();
    
    // Handle array (format: authors: ['value1', 'value2'])
    if (value.startsWith('[') && value.endsWith(']')) {
      try {
        // Replace single quotes with double quotes for JSON parsing
        const jsonValue = value.replace(/'/g, '"');
        value = JSON.parse(jsonValue);
      } catch (e) {
        console.error(`Failed to parse array for ${key}:`, e);
      }
    }
    
    // Handle multi-line array (format: authors:\n  - value1\n  - value2)
    else if (value === '' && i + 1 < lines.length && lines[i + 1].trim().startsWith('-')) {
      const arrayValues: string[] = [];
      i++;
      
      while (i < lines.length && lines[i].trim().startsWith('-')) {
        arrayValues.push(lines[i].trim().substring(1).trim());
        i++;
      }
      
      if (arrayValues.length > 0) {
        value = arrayValues; // Assign the array to value (which is now correctly typed as string | string[])
        i--; // Adjust index since we'll increment in the loop
      }
    }
    
    frontmatter[key] = value;
  }
  
  return { frontmatter, content: remainingContent };
}

// Get category color based on category name
export function getCategoryColor(category: string): string {
  const categoryColors: Record<string, string> = {
    blog: "bg-violet-100 text-violet-800 border-violet-200 hover:bg-violet-200",
    coding: "bg-blue-100 text-blue-800 border-blue-200 hover:bg-blue-200",
    design: "bg-pink-100 text-pink-800 border-pink-200 hover:bg-pink-200",
    lifestyle: "bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-200",
    technology: "bg-emerald-100 text-emerald-800 border-emerald-200 hover:bg-emerald-200",
    health: "bg-green-100 text-green-800 border-green-200 hover:bg-green-200",
    tutorials: "bg-indigo-100 text-indigo-800 border-indigo-200 hover:bg-indigo-200",
    default: "bg-slate-100 text-slate-800 border-slate-200 hover:bg-slate-200",
  };
  
  return categoryColors[category] || categoryColors.default;
}

/**
 * Check contrast ratio between two colors for WCAG compliance
 * Returns true if the contrast ratio meets WCAG AA standards
 */
export function hasAdequateContrast(foreground: string, background: string): boolean {
  // Convert hex colors to RGB
  const hexToRgb = (hex: string): number[] => {
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    const fullHex = hex.replace(shorthandRegex, (_, r, g, b) => r + r + g + g + b + b);
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullHex);
    
    return result 
      ? [
          parseInt(result[1], 16),
          parseInt(result[2], 16),
          parseInt(result[3], 16)
        ] 
      : [0, 0, 0];
  };
  
  // Calculate luminance
  const luminance = (rgb: number[]): number => {
    const [r, g, b] = rgb.map(v => {
      const val = v / 255;
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
    });
    
    return r * 0.2126 + g * 0.7152 + b * 0.0722;
  };
  
  const rgbForeground = hexToRgb(foreground);
  const rgbBackground = hexToRgb(background);
  
  const l1 = luminance(rgbForeground);
  const l2 = luminance(rgbBackground);
  
  // Calculate contrast ratio
  const ratio = l1 > l2 
    ? (l1 + 0.05) / (l2 + 0.05) 
    : (l2 + 0.05) / (l1 + 0.05);
  
  // WCAG AA requires a contrast ratio of at least 4.5:1 for normal text
  return ratio >= 4.5;
}
