
import { NavLink } from "react-router-dom";
import { useAuthStore } from "@/store/authStore";

function NavbarMobile() {
  const { user } = useAuthStore();
  
  return (
    <nav className="flex flex-col gap-3 mb-4 text-dark dark:text-white">
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
      <NavLink to="/services" className={({ isActive }) =>
        isActive ? "bg-gradient-to-r from-dark-green bg-clip-text text-transparent to-custom-orange" : "text-dark dark:text-white"
      }>
        Services
      </NavLink>
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
      
      {/* Conditional dashboard links based on user role */}
      {user && user.role === 'admin' && (
        <NavLink to="/admin/dashboard" className={({ isActive }) =>
          isActive ? "bg-gradient-to-r from-dark-green bg-clip-text text-transparent to-custom-orange" : "text-dark dark:text-white"
        }>
          Dashboard Admin
        </NavLink>
      )}
      
      {user && user.role === 'blogger' && (
        <NavLink to="/blogger/dashboard" className={({ isActive }) =>
          isActive ? "bg-gradient-to-r from-dark-green bg-clip-text text-transparent to-custom-orange" : "text-dark dark:text-white"
        }>
          Dashboard Blogueur
        </NavLink>
      )}
      
      {user && user.role === 'technician' && (
        <NavLink to="/technician/dashboard" className={({ isActive }) =>
          isActive ? "bg-gradient-to-r from-dark-green bg-clip-text text-transparent to-custom-orange" : "text-dark dark:text-white"
        }>
          Dashboard Technicien
        </NavLink>
      )}
    </nav>
  );
}

export default NavbarMobile;
