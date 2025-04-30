
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, Fish, Users } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Nos Services
          </h1>
          <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
            Découvrez la gamme complète des services offerts par K2N Group
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* E-commerce Service */}
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <ShoppingCart size={64} className="text-blue-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">Boutique en ligne K2N</h3>
                <p className="text-gray-600 mb-4">
                  Tous les produits et équipements nécessaires pour votre activité piscicole, disponibles en quelques clics.
                </p>
                <Button asChild className="w-full">
                  <Link to="/services/ecommerce">Découvrir</Link>
                </Button>
              </div>
            </div>

            {/* Production Service */}
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <Fish size={64} className="text-blue-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">Production de poissons</h3>
                <p className="text-gray-600 mb-4">
                  Des espèces sélectionnées et élevées selon des normes rigoureuses pour une qualité optimale.
                </p>
                <Button asChild className="w-full">
                  <Link to="/services/production">Découvrir</Link>
                </Button>
              </div>
            </div>

            {/* Technicians Service */}
            <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <Users size={64} className="text-blue-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">Techniciens spécialisés</h3>
                <p className="text-gray-600 mb-4">
                  Une équipe de professionnels à votre service pour tous vos projets aquacoles.
                </p>
                <Button asChild className="w-full">
                  <Link to="/services/techniciens">Découvrir</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Pourquoi choisir K2N Services</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">1</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Expertise</h3>
              <p className="text-gray-600">Une équipe d'experts avec plus de 15 ans d'expérience dans le domaine aquacole.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">2</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Qualité</h3>
              <p className="text-gray-600">Des produits et services répondant aux normes les plus strictes du secteur.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">3</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Innovation</h3>
              <p className="text-gray-600">Des solutions technologiques innovantes pour répondre aux défis de demain.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">4</span>
              </div>
              <h3 className="font-bold text-lg mb-2">Support</h3>
              <p className="text-gray-600">Un accompagnement personnalisé tout au long de votre projet.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à démarrer votre projet ?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contactez-nous dès aujourd'hui pour discuter de vos besoins spécifiques.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/contact">Nous contacter</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/konsultan">Demander une consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
