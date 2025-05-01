
import React from "react";
import Header from "./Header";
import { Outlet, Link } from "react-router-dom";
import { AuthProvider } from "../../context/AuthContext";
import { ThemeProvider } from "../../context/ThemeContext";

const MainLayout = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Outlet />
          </main>
          <footer className="bg-[#298C39] text-white py-12 px-4">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-4">K2N Group</h3>
                <p>
                  Votre partenaire en pisciculture, innovation et expertise aquacole.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3">Liens rapides</h4>
                <ul className="space-y-2">
                  <li><Link to="/" className="hover:text-custom-orange">Accueil</Link></li>
                  <li><Link to="/about" className="hover:text-custom-orange">A propos</Link></li>
                  <li><Link to="/blog" className="hover:text-custom-orange">Blog</Link></li>
                  <li><Link to="/contact" className="hover:text-custom-orange">Contact</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3">Services</h4>
                <ul className="space-y-2">
                  <li><Link to="/services/ecommerce" className="hover:text-custom-orange">E-commerce</Link></li>
                  <li><Link to="/services/production" className="hover:text-custom-orange">Production</Link></li>
                  <li><Link to="/services/techniciens" className="hover:text-custom-orange">Techniciens</Link></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-lg mb-3">Contact</h4>
                <address className="not-italic">
                  K2N Group<br />
                  Email: contact@k2ngroup.com<br />
                  Tél: +123 456 789
                </address>
              </div>
            </div>
            
            <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-green-600 text-center">
              <p>© {new Date().getFullYear()} K2N Group. Tous droits réservés.</p>
            </div>
          </footer>
        </div>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default MainLayout;
