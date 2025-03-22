
import { Container } from "@/components";
import { BookOpen, Mail, GraduationCap, ExternalLink, FileText, BookMarked, PenTool, Globe, MapPin, Phone, Shield, Info, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t py-12 lg:py-16 bg-[#2C3E50]/5">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-primary/10 p-2 rounded-full mr-3">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <h2 className="font-serif font-medium text-xl">Jurnal Harian Regional</h2>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Access to thousands of peer-reviewed academic articles, journals, and research papers from leading institutions worldwide.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-primary transition-colors hover:text-primary/80">
                <Mail className="h-4 w-4 mr-2" />
                <a href="mailto:jurnal@harianregional.com" className="hover:underline">jurnal@harianregional.com</a>
              </div>
              <div className="flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Kayuringin Jaya, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17144</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground transition-colors hover:text-foreground">
                <Phone className="h-4 w-4 mr-2" />
                <span>+62 859-2052-8697</span>
              </div>
            </div>
          </div>
          
          <div className="md:mx-auto">
            <h3 className="text-base font-medium mb-4 text-foreground/90 font-serif">Quick Links</h3>
            <nav className="space-y-3">
              <Link to="/" className="block text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                <Globe className="h-4 w-4 mr-2.5 text-primary/70" />
                <span>Home</span>
              </Link>
              <Link to="/categories" className="block text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                <BookMarked className="h-4 w-4 mr-2.5 text-primary/70" />
                <span>Categories</span>
              </Link>
              <Link to="/search" className="block text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                <PenTool className="h-4 w-4 mr-2.5 text-primary/70" />
                <span>Advanced Search</span>
              </Link>
              <Link to="/popular" className="block text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                <FileText className="h-4 w-4 mr-2.5 text-primary/70" />
                <span>Popular Journals</span>
              </Link>
              <Link to="/academic-resources" className="block text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                <GraduationCap className="h-4 w-4 mr-2.5 text-primary/70" />
                <span>Academic Resources</span>
              </Link>
              <Link to="/contact" className="block text-sm text-muted-foreground hover:text-primary transition-colors flex items-center">
                <Mail className="h-4 w-4 mr-2.5 text-primary/70" />
                <span>Contact Us</span>
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-base font-medium mb-4 text-foreground/90 font-serif">Academic Resources</h3>
            <div className="space-y-3.5">
              <Link to="/academic-resources/citation-guidelines" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group">
                <div className="bg-primary/5 p-1.5 rounded mr-2 group-hover:bg-primary/10 transition-colors">
                  <BookOpen className="h-3.5 w-3.5 text-primary/80" />
                </div>
                <span>Citation Guidelines</span>
                <ExternalLink className="h-3 w-3 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link to="/academic-resources/research-methodology" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group">
                <div className="bg-primary/5 p-1.5 rounded mr-2 group-hover:bg-primary/10 transition-colors">
                  <FileText className="h-3.5 w-3.5 text-primary/80" />
                </div>
                <span>Research Methodology</span>
                <ExternalLink className="h-3 w-3 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link to="/academic-resources/academic-writing" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group">
                <div className="bg-primary/5 p-1.5 rounded mr-2 group-hover:bg-primary/10 transition-colors">
                  <PenTool className="h-3.5 w-3.5 text-primary/80" />
                </div>
                <span>Academic Writing</span>
                <ExternalLink className="h-3 w-3 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              <Link to="/academic-resources/peer-review-process" className="flex items-center text-sm text-muted-foreground hover:text-primary transition-colors group">
                <div className="bg-primary/5 p-1.5 rounded mr-2 group-hover:bg-primary/10 transition-colors">
                  <Users className="h-3.5 w-3.5 text-primary/80" />
                </div>
                <span>Peer Review Process</span>
                <ExternalLink className="h-3 w-3 ml-1.5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 opacity-30" />
        
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Jurnal Harian Regional. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-primary transition-colors">Terms</Link>
            <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
