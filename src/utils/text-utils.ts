
/**
 * Cleans markdown formatting from text to create readable excerpts
 */
export const cleanExcerpt = (text: string) => {
  // Remove markdown formatting
  return text
    .replace(/#{1,6}\s+/g, '') // Remove headers
    .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
    .replace(/\*(.*?)\*/g, '$1') // Remove italic
    .replace(/`([^`]+)`/g, '$1') // Remove inline code
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1') // Remove links but keep text
    .replace(/^\s*>+\s*/gm, '') // Remove blockquotes
    .replace(/^\s*-\s*/gm, '') // Remove list markers
    .replace(/^\s*\d+\.\s*/gm, '') // Remove ordered list markers
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/<[^>]*>/g, ''); // Remove HTML tags
};

/**
 * Truncates text to a specified length with ellipsis
 */
export const truncateText = (text: string, maxLength: number = 150): string => {
  if (!text || text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + '...';
};
