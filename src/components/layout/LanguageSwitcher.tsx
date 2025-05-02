
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  // This is a placeholder for the language switching functionality
  // You can implement the actual language switching later
  
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex gap-2 items-center">
          <Globe size={16} />
          <span>FR</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => console.log('Switched to French')}>
          Français
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => console.log('Switched to English')}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
