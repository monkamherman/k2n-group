
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const ServiceEcommerce = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Boutique en ligne K2N
          </h1>
          <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
            Tous les produits et équipements nécessaires pour votre activité piscicole
          </p>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Produits populaires</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="border rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <ShoppingCart size={64} className="text-blue-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Équipement d'aération</h3>
                <p className="text-gray-600 mb-4">Système d'aération haute performance pour bassins piscicoles</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">350 €</span>
                  <Button>Ajouter au panier</Button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="border rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <ShoppingCart size={64} className="text-blue-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Aliment premium</h3>
                <p className="text-gray-600 mb-4">Aliment équilibré pour poissons d'eau douce en phase de croissance</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">45 €</span>
                  <Button>Ajouter au panier</Button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="border rounded-lg overflow-hidden shadow-md">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <ShoppingCart size={64} className="text-blue-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-2">Kit de test d'eau</h3>
                <p className="text-gray-600 mb-4">Kit complet pour l'analyse de la qualité de l'eau de vos bassins</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">85 €</span>
                  <Button>Ajouter au panier</Button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg">Voir tous les produits</Button>
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Catégories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg mb-2">Équipements</h3>
              <Button variant="outline">Explorer</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg mb-2">Alimentation</h3>
              <Button variant="outline">Explorer</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg mb-2">Traitement</h3>
              <Button variant="outline">Explorer</Button>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="font-bold text-lg mb-2">Accessoires</h3>
              <Button variant="outline">Explorer</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceEcommerce;
