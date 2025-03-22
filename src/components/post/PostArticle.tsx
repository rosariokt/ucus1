
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { Bookmark } from "lucide-react";
import { PostMetadata, PostAbstract, PostContent, PostAuthors, PostShareSection } from "@/components/post";
import { Separator } from "@/components/ui/separator";
import { StaticContent } from "@/components/ui";

interface PostArticleProps {
  post: {
    title: string;
    date: string;
    content: string;
    author: string;
    abstract?: string;
  };
  category?: string;
  keywords: string[];
}

const PostArticle = ({ post, category, keywords }: PostArticleProps) => {
  // Generate mock DOI for demo purposes
  const generateDoiLink = (title: string, date: string) => {
    const year = new Date(date).getFullYear();
    const cleanTitle = title.toLowerCase().replace(/[^a-z0-9]/g, '').substring(0, 10);
    return `10.1234/journal.${cleanTitle}.${year}`;
  };

  const doiLink = generateDoiLink(post.title, post.date);

  return (
    <article>
      <Card className="mb-8 overflow-hidden">
        <CardContent className="pt-6">
          <header className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <Badge 
                variant="outline" 
                className="transition-colors hover:bg-primary/10 hover:text-foreground capitalize"
              >
                <Bookmark className="h-3.5 w-3.5 mr-1.5" />
                {category}
              </Badge>
            </div>
            
            <h1 className="article-title text-2xl sm:text-3xl font-serif font-semibold tracking-tight leading-tight mb-6">
              {post.title}
            </h1>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <PostMetadata
                author={post.author}
                date={post.date}
                category={category}
              />
            </div>
          </header>
          
          <Separator className="my-6 opacity-30" />
          
          {/* Display abstract if available */}
          {post.abstract && post.abstract.length >= 50 && (
            <PostAbstract abstract={post.abstract} />
          )}
          
          <div id="article-content">
            <PostContent content={post.content} />
          </div>
          
          <Separator className="my-6" />
          
          <div className="flex flex-col gap-8">
            <PostAuthors author={post.author} />
            <PostShareSection title={post.title} abstract={post.abstract} />
          </div>
        </CardContent>
        
        <CardFooter className="bg-muted/10 border-t border-border/50 py-6">
          <div className="w-full space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Journal Information</h3>
            </div>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-muted-foreground">Journal:</span>
                <p className="font-medium">Jurnal Harian Regional</p>
              </div>
              <div>
                <span className="text-muted-foreground">Volume:</span>
                <p className="font-medium">{new Date(post.date).getFullYear()}, Vol. 12</p>
              </div>
              <div>
                <span className="text-muted-foreground">Issue:</span>
                <p className="font-medium">{new Date(post.date).getMonth() + 1}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Pages:</span>
                <p className="font-medium">122-136</p>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </article>
  );
};

export default PostArticle;
