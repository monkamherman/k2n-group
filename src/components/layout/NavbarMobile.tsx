
import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const NavbarMobile = () => {
  return (
    <div className="space-y-4 pb-4 z-50">
      <NavLink
        to="/"
        className={({ isActive }) =>
          cn(
            "flex px-2 py-2.5 rounded-md transition-colors",
            isActive
              ? "bg-dark-green/10 text-dark-green dark:bg-green-900/30 dark:text-green-400"
              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          )
        }
      >
        Accueil
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          cn(
            "flex px-2 py-2.5 rounded-md transition-colors",
            isActive
              ? "bg-dark-green/10 text-dark-green dark:bg-green-900/30 dark:text-green-400"
              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          )
        }
      >
        À propos
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive }) =>
          cn(
            "flex px-2 py-2.5 rounded-md transition-colors",
            isActive
              ? "bg-dark-green/10 text-dark-green dark:bg-green-900/30 dark:text-green-400"
              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          )
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive }) =>
          cn(
            "flex px-2 py-2.5 rounded-md transition-colors",
            isActive
              ? "bg-dark-green/10 text-dark-green dark:bg-green-900/30 dark:text-green-400"
              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          )
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/elearning"
        className={({ isActive }) =>
          cn(
            "flex px-2 py-2.5 rounded-md transition-colors",
            isActive
              ? "bg-dark-green/10 text-dark-green dark:bg-green-900/30 dark:text-green-400"
              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          )
        }
      >
        Formations
      </NavLink>
      <NavLink
        to="/carrieres"
        className={({ isActive }) =>
          cn(
            "flex px-2 py-2.5 rounded-md transition-colors",
            isActive
              ? "bg-dark-green/10 text-dark-green dark:bg-green-900/30 dark:text-green-400"
              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          )
        }
      >
        Carrières
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          cn(
            "flex px-2 py-2.5 rounded-md transition-colors",
            isActive
              ? "bg-dark-green/10 text-dark-green dark:bg-green-900/30 dark:text-green-400"
              : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
          )
        }
      >
        Contact
      </NavLink>
    </div>
  );
};

export default NavbarMobile;
