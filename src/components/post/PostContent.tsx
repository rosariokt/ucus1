
import ReactMarkdown from "react-markdown";
import { useState } from "react";

interface PostContentProps {
  content: string;
}

const PostContent = ({ content }: PostContentProps) => {
  const [processedContent] = useState<string>(content || "");
  
  // Function to clean Markdown content by removing HTML comments and templating tags
  const cleanMarkdownContent = (content: string) => {
    if (!content) return "";
    
    return content
      // Remove HTML comments
      .replace(/<!--(?!AD_PLACEMENT)[\s\S]*?-->/g, '')
      // Remove Liquid/Jekyll template tags
      .replace(/{%[\s\S]*?%}/g, '')
      // Remove HTML includes
      .replace(/{{\s*include\s+[\s\S]*?}}/g, '')
      // Remove ads placeholders
      .replace(/{{\s*site\.[\s\S]*?}}/g, '')
      // Remove multiline special blocks that might be in the markdown
      .replace(/{% include [\s\S]*?%}/g, '');
  };
  
  // Custom component renderer
  const renderers = {
    p: ({ children, ...props }: any) => (
      <p {...props} className="mb-6 leading-relaxed text-lg text-foreground/90">{children}</p>
    ),
    h2: ({ children, ...props }: any) => (
      <h2 {...props} className="text-2xl font-serif font-semibold mt-10 mb-4 pb-2 border-b border-border/50 article-section">{children}</h2>
    ),
    h3: ({ children, ...props }: any) => (
      <h3 {...props} className="text-xl font-serif font-medium mt-8 mb-3 article-subsection">{children}</h3>
    ),
    blockquote: ({ children, ...props }: any) => (
      <blockquote {...props} className="pl-4 italic border-l-2 border-[#0056b3]/50 text-muted-foreground my-6">{children}</blockquote>
    ),
    ul: ({ children, ...props }: any) => (
      <ul {...props} className="list-disc pl-6 mb-6 space-y-2">{children}</ul>
    ),
    ol: ({ children, ...props }: any) => (
      <ol {...props} className="list-decimal pl-6 mb-6 space-y-2">{children}</ol>
    ),
    a: ({ children, href, ...props }: any) => (
      <a href={href} {...props} className="text-[#0056b3] hover:text-[#003d7a] transition-colors underline decoration-[#0056b3]/30 hover:decoration-[#0056b3]/50">{children}</a>
    ),
    img: ({ src, alt, ...props }: any) => (
      <figure className="my-8">
        <img src={src} alt={alt} {...props} className="mx-auto rounded-lg shadow-md" />
        {alt && <figcaption className="text-center text-sm text-muted-foreground mt-2 italic">{alt}</figcaption>}
      </figure>
    ),
    table: ({ children, ...props }: any) => (
      <div className="overflow-x-auto my-6">
        <table {...props} className="min-w-full border-collapse border border-border">
          {children}
        </table>
      </div>
    ),
    th: ({ children, ...props }: any) => (
      <th {...props} className="border border-border bg-muted p-2 text-left font-medium">{children}</th>
    ),
    td: ({ children, ...props }: any) => (
      <td {...props} className="border border-border p-2">{children}</td>
    ),
    code: ({ children, ...props }: any) => (
      <code {...props} className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
  };

  if (!content) return null;

  return (
    <article className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:font-medium prose-h1:text-2xl prose-h2:text-xl prose-h3:text-lg prose-a:text-[#0056b3] hover:prose-a:text-[#003d7a] prose-a:transition-colors prose-img:rounded-md prose-img:mx-auto">
      <ReactMarkdown components={renderers}>
        {cleanMarkdownContent(processedContent)}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
