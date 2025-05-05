
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ServicesDropdown from "./services-menu/ServicesDropdown";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { ActiveService } from "./services-menu/types";

function Navbar() {
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  const [activeService, setActiveService] = useState<ActiveService>(null);
  
  const handleServiceHover = (service: ActiveService) => {
    setActiveService(service);
  };

  const handleServiceLeave = () => {
    setActiveService(null);
  };
  
  // On mobile we'll show the dropdown elsewhere
  if (isMobile) {
    return null;
  }

  return (
    <nav className="hidden sm:flex items-center">
      <ul className="flex sm:gap-6 md:gap-8 px-4 text-sm md:text-base font-medium">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "transition-colors hover:text-dark-green dark:hover:text-green-400",
                isActive
                  ? "text-dark-green dark:text-green-400 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-dark-green dark:after:bg-green-400"
                  : "text-gray-700 dark:text-gray-200"
              )
            }
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              cn(
                "transition-colors hover:text-dark-green dark:hover:text-green-400",
                isActive
                  ? "text-dark-green dark:text-green-400 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-dark-green dark:after:bg-green-400"
                  : "text-gray-700 dark:text-gray-200"
              )
            }
          >
            À propos
          </NavLink>
        </li>
        <li>
          <ServicesDropdown 
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            activeService={activeService}
            handleServiceHover={handleServiceHover}
            handleServiceLeave={handleServiceLeave}
          />
        </li>
        <li>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              cn(
                "transition-colors hover:text-dark-green dark:hover:text-green-400",
                isActive
                  ? "text-dark-green dark:text-green-400 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-dark-green dark:after:bg-green-400"
                  : "text-gray-700 dark:text-gray-200"
              )
            }
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/elearning"
            className={({ isActive }) =>
              cn(
                "transition-colors hover:text-dark-green dark:hover:text-green-400",
                isActive
                  ? "text-dark-green dark:text-green-400 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-dark-green dark:after:bg-green-400"
                  : "text-gray-700 dark:text-gray-200"
              )
            }
          >
            Formations
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/carrieres"
            className={({ isActive }) =>
              cn(
                "transition-colors hover:text-dark-green dark:hover:text-green-400",
                isActive
                  ? "text-dark-green dark:text-green-400 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-dark-green dark:after:bg-green-400"
                  : "text-gray-700 dark:text-gray-200"
              )
            }
          >
            Carrières
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              cn(
                "transition-colors hover:text-dark-green dark:hover:text-green-400",
                isActive
                  ? "text-dark-green dark:text-green-400 relative after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-full after:bg-dark-green dark:after:bg-green-400"
                  : "text-gray-700 dark:text-gray-200"
              )
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
