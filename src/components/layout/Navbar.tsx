
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-blue-700">K2N Group</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-blue-900 hover:text-blue-700">
              Accueil
            </Link>
            <div className="relative group">
              <button className="px-3 py-2 text-blue-900 hover:text-blue-700">
                Services
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                <div className="py-1">
                  <Link to="/services/ecommerce" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                    E-commerce
                  </Link>
                  <Link to="/services/production" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                    Production
                  </Link>
                  <Link to="/services/techniciens" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                    Techniciens
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative group">
              <button className="px-3 py-2 text-blue-900 hover:text-blue-700">
                Mini-sites
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg hidden group-hover:block">
                <div className="py-1">
                  <Link to="/blog" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                    Blog
                  </Link>
                  <Link to="/elearning" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                    E-learning
                  </Link>
                  <Link to="/actualites" className="block px-4 py-2 text-gray-800 hover:bg-blue-50">
                    Actualités
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/konsultan" className="px-3 py-2 text-blue-900 hover:text-blue-700">
              Konsultan
            </Link>
            <Link to="/technologie" className="px-3 py-2 text-blue-900 hover:text-blue-700">
              Technologie
            </Link>
            <Link to="/contact">
              <Button className="ml-4">Contact</Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="p-2">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white">
            <Link to="/" className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded-md">
              Accueil
            </Link>
            <div>
              <div className="block px-3 py-2 text-blue-900 font-medium">
                Services
              </div>
              <div className="pl-4 space-y-1">
                <Link to="/services/ecommerce" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md">
                  E-commerce
                </Link>
                <Link to="/services/production" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md">
                  Production
                </Link>
                <Link to="/services/techniciens" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md">
                  Techniciens
                </Link>
              </div>
            </div>
            <div>
              <div className="block px-3 py-2 text-blue-900 font-medium">
                Mini-sites
              </div>
              <div className="pl-4 space-y-1">
                <Link to="/blog" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md">
                  Blog
                </Link>
                <Link to="/elearning" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md">
                  E-learning
                </Link>
                <Link to="/actualites" className="block px-3 py-2 text-gray-800 hover:bg-blue-50 rounded-md">
                  Actualités
                </Link>
              </div>
            </div>
            <Link to="/konsultan" className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded-md">
              Konsultan
            </Link>
            <Link to="/technologie" className="block px-3 py-2 text-blue-900 hover:bg-blue-50 rounded-md">
              Technologie
            </Link>
            <Link to="/contact" className="block px-3 py-2">
              <Button className="w-full">Contact</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
