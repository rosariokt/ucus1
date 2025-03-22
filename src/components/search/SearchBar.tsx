
import React, { forwardRef } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { sanitizeInput } from "@/lib/sanitize";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  className?: string;
  inputRef?: React.RefObject<HTMLInputElement>;
  onFocus?: () => void;
  onBlur?: () => void;
}

const SearchBar = ({ 
  searchQuery, 
  setSearchQuery, 
  handleSearch, 
  className,
  inputRef,
  onFocus,
  onBlur
}: SearchBarProps) => {
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Sanitize input before setting state
    const sanitizedValue = sanitizeInput(e.target.value);
    setSearchQuery(sanitizedValue);
  };
  
  return (
    <form onSubmit={handleSearch} className={className} role="search">
      <div className="relative">
        <Input
          type="search"
          placeholder="Search..."
          className="w-full pl-8 border-primary/20 focus-visible:border-primary"
          value={searchQuery}
          onChange={handleInputChange}
          ref={inputRef}
          onFocus={onFocus}
          onBlur={onBlur}
          aria-label="Search articles"
        />
        <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
        <kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 hidden sm:flex h-5 items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
          /
        </kbd>
      </div>
    </form>
  );
};

export default SearchBar;
