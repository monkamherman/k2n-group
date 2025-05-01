
import { useState, useContext } from 'react';
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import AvatarIcon from "./Avatar";
import Navbar from "./Navbar";
import { ModeToggle } from '../mode_toggle';
import { AuthContext } from '../../context/AuthContext';
import ButoonHeader from "./ButoonHeader";
import NavbarMobile from './NavbarMobile';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated } = useContext(AuthContext) || { isAuthenticated: false };

  return (
    <header className="sticky top-0 left-0 p-2 shadow-md font-roboto text-[1rem] bg-bg-gradient dark:bg-dark dark:text-white text-clip z-50">
      <div className="flex mx-[2%] items-center justify-between">
        <NavLink to="/">
          <img src="/Logo vert.svg" alt="logo" className="h-12" />
        </NavLink>
        
        <Navbar />
        
        <div className="flex gap-2 items-center sm:hidden">
          <ModeToggle />
          <button 
            className="block sm:hidden text-dark dark:text-white text-[1.6rem]" 
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-4">
          <ModeToggle /> 
          <AvatarIcon />
          <div className="rounded-full dark:shadow-dark-mode shadow-light p-2 gap-2 flex items-center bg-white">
            {!isAuthenticated && <ButoonHeader />}
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="absolute p-4 text-dark dark:text-white bg-white dark:bg-gray-800 w-[80%] sm:w-[40%] top-[4.4rem] rounded right-0 backdrop-blur-md z-10 shadow-md"
        >
          <NavbarMobile />
          <ButoonHeader />
        </div>
      )}
    </header>
  );
}

export default Header;
