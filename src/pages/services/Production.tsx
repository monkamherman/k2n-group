
import React from "react";
import { Button } from "@/components/ui/button";
import { Fish } from "lucide-react";

const ServiceProduction = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Production de poissons d'eau douce
          </h1>
          <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
            Des espèces sélectionnées et élevées selon des normes rigoureuses pour une qualité optimale
          </p>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Notre processus</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Sélection rigoureuse</h3>
              <p className="text-gray-600">
                Nous sélectionnons les meilleures espèces adaptées à votre environnement et à vos besoins spécifiques.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Élevage contrôlé</h3>
              <p className="text-gray-600">
                Nos poissons sont élevés dans des conditions strictement contrôlées pour garantir leur santé et leur croissance optimale.
              </p>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Distribution responsable</h3>
              <p className="text-gray-600">
                Nous assurons une livraison dans des conditions optimales pour préserver la qualité et le bien-être des poissons.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Species */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos espèces phares</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <Fish size={64} className="text-blue-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Tilapia</h3>
                <p className="text-gray-600 mb-4">Espèce robuste et facile à élever, idéale pour les débutants.</p>
                <Button variant="outline" className="w-full">En savoir plus</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <Fish size={64} className="text-blue-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Carpe</h3>
                <p className="text-gray-600 mb-4">Poisson traditionnel avec une excellente conversion alimentaire.</p>
                <Button variant="outline" className="w-full">En savoir plus</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <Fish size={64} className="text-blue-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Perche</h3>
                <p className="text-gray-600 mb-4">Espèce à haute valeur commerciale avec une chair délicate.</p>
                <Button variant="outline" className="w-full">En savoir plus</Button>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <Fish size={64} className="text-blue-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Truite</h3>
                <p className="text-gray-600 mb-4">Adaptée aux eaux fraîches et riches en oxygène.</p>
                <Button variant="outline" className="w-full">En savoir plus</Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceProduction;
