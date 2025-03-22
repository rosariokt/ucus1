
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ChevronLeft, ChevronRight, Link as LinkIcon, FileSymlink, Download, ExternalLink, Quote } from "lucide-react";
import { PostTableOfContents, PostCitation } from "@/components/post";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { StaticContent } from "@/components/ui";

interface PostSidebarProps {
  post: {
    title: string;
    author: string;
    date: string;
    content: string;
  };
  keywords: string[];
  category?: string;
  slug?: string;
}

const PostSidebar = ({ post, keywords, category, slug }: PostSidebarProps) => {
  // Use a state variable for the URL to avoid SSR hydration issues
  const [currentUrl, setCurrentUrl] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const isBrowser = typeof window !== 'undefined';

  // Update URL only on the client side
  useEffect(() => {
    setIsMounted(true);
    if (isBrowser) {
      setCurrentUrl(window.location.href);
    }
  }, [isBrowser]);

  // Create a simpler placeholder for server-side rendering
  // This will be replaced on the client side after hydration
  if (!isBrowser || !isMounted) {
    return (
      <StaticContent>
        <div className="sticky top-24 space-y-6" data-hydration-placeholder="sidebar">
          <div className="h-[300px] bg-muted/10 rounded animate-pulse"></div>
          <div className="h-[200px] bg-muted/10 rounded animate-pulse"></div>
          <div className="h-[50px] bg-muted/10 rounded animate-pulse"></div>
        </div>
      </StaticContent>
    );
  }

  // Generate mock DOI for demo purposes
  const generateDoiLink = (title: string, date: string) => {
    const year = new Date(date).getFullYear();
    const cleanTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 10);
    return `10.1234/journal.${cleanTitle}.${year}`;
  };

  const doiLink = generateDoiLink(post.title, post.date);

  // This section only runs on the client after hydration
  return (
    <div className="sticky top-24 space-y-6" data-hydrated="true">
      {/* DOI Information Card */}
      <Card className="border-primary/10 transition-all duration-300 hover:border-primary/20 animate-slide-up shadow-sm">
        <CardHeader className="pb-2 flex flex-row items-center gap-2">
          <LinkIcon className="h-5 w-5 text-[#0056b3]" />
          <h2 className="text-lg font-serif font-medium">DOI Information</h2>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground/80">DOI:</span>
            <a 
              href={`https://doi.org/${doiLink}`}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-sm font-medium text-[#0056b3] hover:underline flex items-center doi-link"
            >
              {doiLink}
              <ExternalLink className="h-3.5 w-3.5 ml-1" />
            </a>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-foreground/80">Publication:</span>
            <span className="text-sm">{post.date.split('-')[0]}</span>
          </div>
          <Separator className="my-2" />
          <Button variant="default" size="sm" className="w-full gap-2 bg-[#0056b3] hover:bg-[#003d7a]">
            <Download className="h-4 w-4" />
            Download Paper
          </Button>
        </CardContent>
      </Card>
      
      {post.content && (
        <PostTableOfContents 
          content={post.content} 
          className="animate-slide-up delay-75"
        />
      )}
      
      <Card className="animate-slide-up delay-75 shadow-sm">
        <CardHeader className="pb-2 flex flex-row items-center gap-2">
          <Quote className="h-5 w-5 text-[#0056b3]" />
          <h2 className="text-lg font-serif font-medium">Citation</h2>
        </CardHeader>
        <CardContent className="p-4">
          <PostCitation
            title={post.title}
            author={post.author}
            date={post.date}
            url={currentUrl}
          />
        </CardContent>
      </Card>
      
      {/* Related Articles Navigation */}
      <Card className="animate-slide-up delay-150 shadow-sm">
        <CardHeader className="pb-2 flex flex-row items-center gap-2">
          <FileText className="h-5 w-5 text-[#0056b3]" />
          <h2 className="text-lg font-serif font-medium">Navigation</h2>
        </CardHeader>
        <CardContent className="p-4 space-y-4">
          <div className="flex justify-between gap-2">
            <Button variant="outline" size="sm" className="w-1/2 gap-1" asChild>
              <Link to={category ? `/categories/${category}` : "/"}>
                <ChevronLeft className="h-4 w-4" />
                Back to List
              </Link>
            </Button>
            <Button variant="outline" size="sm" className="w-1/2 gap-1" asChild>
              <Link to={`/ach/full-122579`}>
                <ChevronRight className="h-4 w-4" />
                Next Article
              </Link>
            </Button>
          </div>
          
          <div className="text-sm font-medium">Related Articles</div>
          <div className="space-y-2">
            <Link 
              to="/ach/full-122579" 
              className="block text-sm hover:text-[#0056b3] transition-colors hover:underline"
            >
              Energy conservation in wireless sensor networks
            </Link>
            <Link 
              to="/ach/full-122593" 
              className="block text-sm hover:text-[#0056b3] transition-colors hover:underline"
            >
              Machine learning approaches to network security
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostSidebar;
