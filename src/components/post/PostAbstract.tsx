
import { Quote } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface PostAbstractProps {
  abstract: string;
}

const PostAbstract = ({ abstract }: PostAbstractProps) => {
  // If there's no abstract, don't render this component
  if (!abstract || abstract.length < 50) return null;
  
  return (
    <Card className="mb-8 border border-primary/10 bg-primary/5 transition-all duration-300 hover:border-primary/20">
      <CardHeader className="pb-2 flex flex-row items-center gap-2">
        <Quote className="h-5 w-5 text-primary" />
        <h2 className="text-lg font-serif font-medium">Abstract</h2>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {/* Show the actual abstract text */}
          <p className="text-muted-foreground italic leading-relaxed font-serif">{abstract}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostAbstract;
