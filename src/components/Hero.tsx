
import { useState } from "react";
import { Search, BookOpen, Calendar, University, BookMarked, GraduationCap, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import Container from "@/components/Container";
import { Separator } from "@/components/ui/separator";

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#2C3E50] to-[#34495E] text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMCAwdjZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-10"></div>
      <Container>
        <div className="py-24 flex flex-col items-center justify-center text-center space-y-8 relative z-10">
          <div className="space-y-4 max-w-3xl">
            <div className="flex justify-center mb-4">
              <University className="h-16 w-16 text-amber-300 opacity-90" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium tracking-tight leading-tight">
              Jurnal Harian Regional
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto leading-relaxed font-light">
              Access peer-reviewed research papers and scholarly articles from leading academic institutions worldwide.
            </p>
            <p className="text-lg text-blue-200/80 max-w-xl mx-auto italic font-light">
              Expanding knowledge through curated academic research
            </p>
          </div>
          
          <Separator className="w-24 bg-amber-300/30 my-4" />
          
          <form onSubmit={handleSearch} className="w-full max-w-2xl">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-grow">
                <Input
                  type="search"
                  placeholder="Search by topic, author, keyword, or institution..."
                  className="w-full pl-12 h-14 py-6 bg-white/95 backdrop-blur-sm text-foreground border-0 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#34495E]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
              <Button type="submit" size="lg" className="h-14 px-8 bg-amber-500 hover:bg-amber-600 text-white font-medium">
                Search Articles
              </Button>
            </div>
          </form>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8 text-center max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center hover:bg-white/15 transition-colors">
              <BookMarked className="h-8 w-8 mb-3 text-amber-300" />
              <h3 className="font-medium text-lg mb-2">Extensive Collection</h3>
              <p className="text-blue-100 text-sm font-light">Access to over 10,000+ peer-reviewed research papers</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center hover:bg-white/15 transition-colors">
              <GraduationCap className="h-8 w-8 mb-3 text-amber-300" />
              <h3 className="font-medium text-lg mb-2">Top Institutions</h3>
              <p className="text-blue-100 text-sm font-light">Publications from 100+ leading academic institutions</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex flex-col items-center hover:bg-white/15 transition-colors">
              <Globe className="h-8 w-8 mb-3 text-amber-300" />
              <h3 className="font-medium text-lg mb-2">Always Current</h3>
              <p className="text-blue-100 text-sm font-light">New research papers added daily with latest findings</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
