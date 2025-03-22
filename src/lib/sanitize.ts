
/**
 * Sanitizes user input to prevent XSS attacks
 * @param input The user input to sanitize
 * @returns Sanitized string
 */
export function sanitizeInput(input: string): string {
  // Basic sanitization - remove HTML tags and encode entities
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

/**
 * Sanitizes HTML content for safe rendering
 * This is a very basic implementation - consider using DOMPurify in production
 * @param html HTML content to sanitize
 * @returns Sanitized HTML string
 */
export function sanitizeHtml(html: string): string {
  // This is a simplified version - in production, use DOMPurify
  const allowedTags = ['p', 'div', 'span', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'blockquote'];
  const doc = new DOMParser().parseFromString(html, 'text/html');
  
  // Remove all event attributes
  const allElements = doc.querySelectorAll('*');
  allElements.forEach(el => {
    Array.from(el.attributes).forEach(attr => {
      if (attr.name.startsWith('on') || attr.value.includes('javascript:')) {
        el.removeAttribute(attr.name);
      }
    });
    
    // Remove any elements not in our allowlist
    if (!allowedTags.includes(el.tagName.toLowerCase())) {
      el.outerHTML = el.innerHTML;
    }
  });
  
  return doc.body.innerHTML;
}

/**
 * Creates a slug from a string (safe for URLs)
 * @param text Text to convert to a slug
 * @returns URL-safe slug
 */
export function createSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, '')
    .replace(/ +/g, '-');
}
