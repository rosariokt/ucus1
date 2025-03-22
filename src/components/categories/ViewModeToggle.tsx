
import { LayoutGrid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ViewModeToggleProps {
  viewMode: "grid" | "list";
  setViewMode: (mode: "grid" | "list") => void;
}

const ViewModeToggle = ({ viewMode, setViewMode }: ViewModeToggleProps) => {
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="icon"
        className={cn(viewMode === "grid" && "bg-muted")}
        onClick={() => setViewMode("grid")}
      >
        <LayoutGrid className="h-4 w-4" />
        <span className="sr-only">Grid view</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        className={cn(viewMode === "list" && "bg-muted")}
        onClick={() => setViewMode("list")}
      >
        <List className="h-4 w-4" />
        <span className="sr-only">List view</span>
      </Button>
    </div>
  );
};

export default ViewModeToggle;
