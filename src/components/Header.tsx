
import { useNavigate } from "react-router-dom";
import { BookOpen, Search as SearchIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import Container from "./Container";
import Logo from "./navigation/Logo";
import MainNavigation from "./navigation/MainNavigation";
import SearchBar from "./search/SearchBar";
import MobileMenuTrigger from "./navigation/MobileMenuTrigger";
import MobileMenuContent from "./navigation/MobileMenuContent";
import { SkipToContent, VisuallyHidden } from "./accessibility";

interface HeaderProps {
  transparent?: boolean;
}

const Header = ({ transparent }: HeaderProps = {}) => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const categories = [
    { name: "blog", icon: <BookOpen className="h-4 w-4 mr-1.5 opacity-70" /> },
    { name: "coding", icon: <BookOpen className="h-4 w-4 mr-1.5 opacity-70" /> },
    { name: "design", icon: <BookOpen className="h-4 w-4 mr-1.5 opacity-70" /> },
    { name: "lifestyle", icon: <BookOpen className="h-4 w-4 mr-1.5 opacity-70" /> },
    { name: "technology", icon: <BookOpen className="h-4 w-4 mr-1.5 opacity-70" /> },
    { name: "health", icon: <BookOpen className="h-4 w-4 mr-1.5 opacity-70" /> },
    { name: "tutorials", icon: <BookOpen className="h-4 w-4 mr-1.5 opacity-70" /> },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsOpen(false);
    }
  };

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Press / to focus search
      if (e.key === "/" && !isSearchFocused) {
        e.preventDefault();
        searchInputRef.current?.focus();
      }
      
      // Press Escape to blur search
      if (e.key === "Escape" && isSearchFocused) {
        searchInputRef.current?.blur();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSearchFocused]);

  return (
    <>
      <SkipToContent />
      <header 
        className={cn(
          "sticky top-0 z-50 w-full border-b backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm transition-all",
          transparent ? "bg-transparent border-transparent" : "bg-background/95 border-border/40"
        )}
        role="banner"
      >
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <Logo />
            </div>
            
            {/* Desktop Navigation */}
            <MainNavigation categories={categories} />
            
            {/* Search & Mobile Menu */}
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center">
                <VisuallyHidden>
                  Press / to search
                </VisuallyHidden>
                <SearchBar 
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  handleSearch={handleSearch}
                  className="relative hidden sm:block"
                  inputRef={searchInputRef}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                />
              </div>
              
              {/* Mobile Menu Button */}
              <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <MobileMenuTrigger />
                <DrawerContent className="h-[80vh] px-4 py-6">
                  <MobileMenuContent 
                    categories={categories} 
                    searchQuery={searchQuery} 
                    setSearchQuery={setSearchQuery} 
                    handleSearch={handleSearch}
                    onCloseMenu={() => setIsOpen(false)}
                  />
                </DrawerContent>
              </Drawer>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
