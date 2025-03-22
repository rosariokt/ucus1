
import { useState, useEffect } from "react";
import { Copy, Check, Quote, FileText, Download } from "lucide-react";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { StaticContent } from "@/components/ui";

interface PostCitationProps {
  title: string;
  author: string;
  date: string;
  url: string;
}

const PostCitation = ({ title, author, date, url }: PostCitationProps) => {
  const [selectedFormat, setSelectedFormat] = useState("apa");
  const [copied, setCopied] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Set mounted state on client-side only
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Format citation based on selected style
  const getCitation = () => {
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    
    switch (selectedFormat) {
      case "apa":
        return `${author}. (${new Date(date).getFullYear()}). ${title}. Retrieved from ${url}`;
      case "mla":
        return `${author}. "${title}." ${formattedDate}, ${url}.`;
      case "chicago":
        return `${author}. "${title}." ${formattedDate}. ${url}.`;
      default:
        return `${author}. (${new Date(date).getFullYear()}). ${title}. Retrieved from ${url}`;
    }
  };

  const handleCopy = () => {
    if (!isMounted) return;
    
    navigator.clipboard.writeText(getCitation());
    setCopied(true);
    toast({
      description: "Citation copied to clipboard",
      duration: 3000,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  // Don't use Date constructor during SSR
  if (!isMounted) {
    return (
      <StaticContent>
        <div className="space-y-3">
          <div className="flex items-center mb-2">
            <Quote className="h-5 w-5 mr-2 text-primary/70" />
            <h3 className="text-lg font-medium">How to Cite</h3>
          </div>
          <div className="p-3 bg-muted/50 rounded-md animate-pulse h-32"></div>
        </div>
      </StaticContent>
    );
  }

  return (
    <div className="space-y-3">
      <div className="flex items-center mb-2">
        <Quote className="h-5 w-5 mr-2 text-primary/70" />
        <h3 className="text-lg font-medium">How to Cite</h3>
      </div>
      
      <Select value={selectedFormat} onValueChange={setSelectedFormat}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Citation Format" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apa">APA</SelectItem>
          <SelectItem value="mla">MLA</SelectItem>
          <SelectItem value="chicago">Chicago</SelectItem>
        </SelectContent>
      </Select>
      
      <div className="relative citation-box">
        <div className="p-3 bg-muted/5 rounded-md text-sm font-mono text-foreground/90 border border-border max-h-48 overflow-y-auto break-words whitespace-normal citation-content">
          {getCitation()}
        </div>
        <Button 
          size="sm" 
          variant="outline" 
          className="absolute top-2 right-2 h-8 w-8 p-0 bg-white/80 hover:bg-primary/10 hover:text-primary"
          onClick={handleCopy}
          aria-label={copied ? "Copied to clipboard" : "Copy citation to clipboard"}
        >
          {copied ? <Check className="h-4 w-4 text-green-600" /> : <Copy className="h-4 w-4" />}
        </Button>
      </div>
      
      <Button variant="default" size="sm" className="w-full gap-2 bg-[#0056b3] hover:bg-[#003d7a]">
        <Download className="h-4 w-4" />
        Download PDF
      </Button>
    </div>
  );
};

export default PostCitation;
