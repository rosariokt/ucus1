
import React from "react";
import { Link } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const Logo = () => {
  return (
    <Link 
      to="/" 
      className="flex items-center font-serif font-medium text-xl text-foreground/90 hover:text-primary transition-colors"
    >
      <GraduationCap className="h-6 w-6 mr-2 text-primary" />
      <span className="hidden sm:inline">Jurnal Harian Regional</span>
      <span className="sm:hidden">JHR</span>
    </Link>
  );
};

export default Logo;
