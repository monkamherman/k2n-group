
import { useState, useEffect } from 'react';
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import AvatarIcon from "./Avatar";
import Navbar from "./Navbar";
import { ModeToggle } from '../mode_toggle';
import ButoonHeader from "./ButoonHeader";
import NavbarMobile from './NavbarMobile';
import LanguageSelector from './LanguageSwitcher';
import { useAuthStore } from '@/store/authStore';
import { useIsMobile } from '@/hooks/use-mobile';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthStore();
  const isMobile = useIsMobile();

  // Close mobile menu when switching to desktop
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile]);

  return (
    <header className="sticky top-0 left-0 p-2 shadow-md font-roboto text-[1rem] bg-bg-gradient dark:bg-dark dark:text-white text-clip z-50">
      <div className="flex mx-[2%] items-center justify-between">
        <NavLink to="/">
          <img src="/Logo vert.svg" alt="logo" className="h-12" />
        </NavLink>
        
        <Navbar />
        
        <div className="flex gap-2 items-center sm:hidden">
          <ModeToggle />
          <LanguageSelector />
          <button 
            className="block sm:hidden text-dark dark:text-white text-[1.6rem]" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <LanguageSelector />
          <ModeToggle /> 
          <AvatarIcon />
        </div>
      </div>

      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute p-4 text-dark dark:text-white bg-white dark:bg-gray-800 w-[80%] sm:w-[40%] top-[4.4rem] rounded right-0 backdrop-blur-md z-10 shadow-md"
        >
          <NavbarMobile />
          {!user && <ButoonHeader />}
        </div>
      )}
    </header>
  );
}

export default Header;
