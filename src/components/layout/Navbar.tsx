
import { NavLink } from "react-router-dom";
import Select from "./Select";
import { Button } from "@/components/ui/button";

function Navbar() {
  return (
    <div>
      <nav className="hidden md:flex gap-6 items-center">
        <NavLink to="/" className={({ isActive }) =>
          isActive ? "bg-gradient-to-r from-dark-green bg-clip-text text-transparent to-custom-orange" : "text-dark dark:text-white"
        }>
          Accueil
        </NavLink>
        <NavLink to="/about" className={({ isActive }) =>
          isActive ? "bg-gradient-to-r from-dark-green bg-clip-text text-transparent to-custom-orange" : "text-dark dark:text-white"
        }>
          A propos
        </NavLink>

        <Select />
        
        <NavLink to="/formations" className={({ isActive }) =>
          isActive ? "bg-gradient-to-r from-dark-green bg-clip-text text-transparent to-custom-orange" : "text-dark dark:text-white"
        }>
          Formations
        </NavLink>
        
        <NavLink to="/blog" className={({ isActive }) =>
          isActive ? "bg-gradient-to-r from-dark-green bg-clip-text text-transparent to-custom-orange" : "text-dark dark:text-white"
        }>
          Blog
        </NavLink>
        
        <NavLink to="/carriere" className={({ isActive }) =>
          isActive ? "bg-gradient-to-r from-dark-green bg-clip-text text-transparent to-custom-orange" : "text-dark dark:text-white"
        }>
          Carrière
        </NavLink>
        
        <NavLink to="/contact">
          <Button className="border-primary bg-[#298C39] text-white hover:bg-primary">
            Contactez-nous
          </Button>
        </NavLink>
      </nav>
    </div>
  );
}

export default Navbar;
