
import React from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { DrawerTrigger } from "@/components/ui/drawer";

const MobileMenuTrigger = () => {
  return (
    <DrawerTrigger asChild>
      <Button 
        variant="outline" 
        size="icon" 
        className="ml-2 md:hidden border-primary/20 hover:bg-primary/5"
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
    </DrawerTrigger>
  );
};

export default MobileMenuTrigger;
