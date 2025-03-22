
import { Share2, Link, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useState, useEffect } from "react";

interface PostShareSectionProps {
  title?: string;
  abstract?: string;
}

const PostShareSection = ({ title, abstract }: PostShareSectionProps) => {
  const [copied, setCopied] = useState(false);
  const [shareUrl, setShareUrl] = useState("");
  const shareTitle = title || 'Shared article';
  const shareText = abstract || 'Check out this article';

  // Only set the share URL on the client side
  useEffect(() => {
    setShareUrl(window.location.href);
  }, []);

  const handleCopyLink = () => {
    if (!shareUrl) return;
    
    navigator.clipboard.writeText(shareUrl)
      .then(() => {
        setCopied(true);
        toast({
          description: "Link copied to clipboard",
          duration: 3000,
        });
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
      });
  };

  const handleShare = (platform: string) => {
    if (!shareUrl) return;
    
    let shareLink = '';

    switch(platform) {
      case 'facebook':
        shareLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
        break;
      case 'twitter':
        shareLink = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;
        break;
      case 'linkedin':
        shareLink = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      default:
        if (navigator.share) {
          navigator.share({
            title: shareTitle,
            text: shareText,
            url: shareUrl,
          }).catch(error => console.log('Error sharing', error));
          return;
        }
    }

    if (shareLink) {
      window.open(shareLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="mt-12 pt-6 border-t border-border/50">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h3 className="text-lg font-medium font-serif">Share this article</h3>
          <p className="text-sm text-muted-foreground">If you found this useful, share it with your colleagues</p>
        </div>
        <div className="flex gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full h-10 w-10 transition-colors hover:bg-blue-100 hover:text-blue-600 dark:hover:bg-blue-900/30 dark:hover:text-blue-400" 
            onClick={() => handleShare('facebook')}
            aria-label="Share on Facebook"
          >
            <Facebook className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full h-10 w-10 transition-colors hover:bg-sky-100 hover:text-sky-500 dark:hover:bg-sky-900/30 dark:hover:text-sky-400" 
            onClick={() => handleShare('twitter')}
            aria-label="Share on Twitter"
          >
            <Twitter className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full h-10 w-10 transition-colors hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900/30 dark:hover:text-blue-400" 
            onClick={() => handleShare('linkedin')}
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full h-10 w-10 transition-colors hover:bg-primary/10 hover:text-primary" 
            onClick={handleCopyLink}
            aria-label="Copy link"
            disabled={!shareUrl}
          >
            <Link className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PostShareSection;
