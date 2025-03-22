
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
