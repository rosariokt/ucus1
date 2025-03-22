
import { useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface BackButtonProps {
  className?: string;
  label?: string;
}

const BackButton = ({ className, label = "Back" }: BackButtonProps) => {
  const navigate = useNavigate();

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button
            onClick={() => navigate(-1)}
            className={cn(
              "group flex items-center text-sm font-medium text-muted-foreground hover:text-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded-md px-2 py-1 transition-all duration-200",
              "transform hover:-translate-x-0.5 active:translate-y-0.5",
              className
            )}
            aria-label="Go back to previous page"
          >
            <ChevronLeft className="h-4 w-4 mr-1 transition-transform group-hover:-translate-x-1 duration-200" />
            {label}
          </button>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="animate-fade-in duration-300">
          <p className="text-xs">Return to previous page</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default BackButton;
