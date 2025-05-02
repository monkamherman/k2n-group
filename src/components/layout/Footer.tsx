
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import LanguageSelector from "./LanguageSwitcher";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 sm:py-12 px-4 sm:px-12 text-sm md:text-base font-roboto">
      <Separator className="h-0.5 bg-secondary/20 dark:bg-primary/20" />
      
      <div className="w-full max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8">
          {/* Logo Column */}
          <div className="flex flex-col items-center md:items-start">
            <img className="h-12" src="/Logo vert.svg" alt="K2N Group Logo" />
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-center md:text-left">
              Expertise, innovation et excellence à votre service
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[#298C39] dark:text-primary font-bold text-lg mb-4">Liens rapides</h3>
            <nav className="flex flex-col gap-3">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive 
                    ? "text-dark-green dark:text-primary font-medium" 
                    : "text-gray-600 dark:text-gray-400 hover:text-dark-green dark:hover:text-primary transition-colors"
                }
              >
                Accueil
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive 
                    ? "text-dark-green dark:text-primary font-medium" 
                    : "text-gray-600 dark:text-gray-400 hover:text-dark-green dark:hover:text-primary transition-colors"
                }
              >
                A propos
              </NavLink>
              <NavLink
                to="/formations"
                className={({ isActive }) =>
                  isActive 
                    ? "text-dark-green dark:text-primary font-medium" 
                    : "text-gray-600 dark:text-gray-400 hover:text-dark-green dark:hover:text-primary transition-colors"
                }
              >
                Formations
              </NavLink>
              <NavLink
                to="/blog"
                className={({ isActive }) =>
                  isActive 
                    ? "text-dark-green dark:text-primary font-medium" 
                    : "text-gray-600 dark:text-gray-400 hover:text-dark-green dark:hover:text-primary transition-colors"
                }
              >
                Blog
              </NavLink>
              <NavLink
                to="/carriere"
                className={({ isActive }) =>
                  isActive 
                    ? "text-dark-green dark:text-primary font-medium" 
                    : "text-gray-600 dark:text-gray-400 hover:text-dark-green dark:hover:text-primary transition-colors"
                }
              >
                Carrières
              </NavLink>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[#298C39] dark:text-primary font-bold text-lg mb-4">Contact</h3>
            <div className="flex flex-col gap-3 text-gray-600 dark:text-gray-400">
              <p className="flex items-center gap-2">
                <span className="font-medium">Adresse:</span> Carrefour Meec, Yaoundé
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Email:</span> k2ngroup07@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <span className="font-medium">Téléphone:</span> +(237) 620 39 23 42
              </p>
            </div>
          </div>

          {/* Social Media & Language */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[#298C39] dark:text-primary font-bold text-lg mb-4">Suivez-nous</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.facebook.com/k2n_group_sarl/"
                className="text-gray-600 dark:text-gray-400 hover:text-dark-green dark:hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://www.instagram.com/k2n_group_sarl/"
                className="text-gray-600 dark:text-gray-400 hover:text-dark-green dark:hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="text-2xl" />
              </a>
              <a
                href="https://www.linkedin.com/company/k2n-group/"
                className="text-gray-600 dark:text-gray-400 hover:text-dark-green dark:hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </div>
      
      <Separator className="h-0.5 bg-secondary/20 dark:bg-primary/20" />
      
      <div className="mt-8 text-center text-gray-500 dark:text-gray-400">
        <p>© {new Date().getFullYear()} K2N GROUP. Tous droits réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
