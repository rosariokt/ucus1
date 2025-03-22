
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface CategorySearchProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const CategorySearch = ({ searchQuery, setSearchQuery }: CategorySearchProps) => {
  return (
    <div className="relative w-full md:max-w-md">
      <Input
        type="search"
        placeholder="Search categories..."
        className="pl-9"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
    </div>
  );
};

export default CategorySearch;
