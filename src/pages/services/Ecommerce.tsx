
import React from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Filter, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ServiceEcommerce = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-green-50 dark:bg-green-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 dark:text-green-400 mb-6">
            Boutique en ligne K2N
          </h1>
          <p className="text-xl text-green-700 dark:text-green-300 mb-8 max-w-3xl mx-auto">
            Tous les produits et équipements nécessaires pour votre activité piscicole au Cameroun
          </p>
          <Button size="lg" className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
            Explorer notre catalogue
          </Button>
        </div>
      </section>

      {/* Top Categories Banner */}
      <section className="py-10 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
              <img 
                src="https://images.unsplash.com/photo-1535591273668-578e31182c4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Aérateurs pour bassins" 
                className="w-16 h-16 object-cover rounded-full mb-2"
              />
              <span className="text-sm font-medium text-green-800 dark:text-green-400">Aération</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
              <img 
                src="https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Aliments pour poissons" 
                className="w-16 h-16 object-cover rounded-full mb-2"
              />
              <span className="text-sm font-medium text-green-800 dark:text-green-400">Alimentation</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
              <img 
                src="https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Équipements de filtration" 
                className="w-16 h-16 object-cover rounded-full mb-2"
              />
              <span className="text-sm font-medium text-green-800 dark:text-green-400">Filtration</span>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-green-50 dark:bg-green-900/20">
              <img 
                src="https://images.unsplash.com/photo-1584557173055-d9e97c4dbe9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
                alt="Tests d'eau" 
                className="w-16 h-16 object-cover rounded-full mb-2"
              />
              <span className="text-sm font-medium text-green-800 dark:text-green-400">Analyse d'eau</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-green-800 dark:text-green-400">Produits populaires</h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="hidden md:flex gap-2 items-center">
                <Filter size={16} />
                Filtrer
              </Button>
              <Button variant="outline" size="sm" className="hidden md:flex gap-2 items-center">
                <TrendingUp size={16} />
                Trier
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1585852446392-b7a5a0396577?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Système d'aération professionnel" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-green-800 dark:text-green-400">Aérateur Professionnel AeroX-C280</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 text-xs font-medium rounded">Populaire</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Système d'aération haute performance adapté aux conditions climatiques du Cameroun, idéal pour les bassins jusqu'à 300m²</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">350 000 FCFA</span>
                  <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">Ajouter au panier</Button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Livraison disponible à Yaoundé, Douala et Bafoussam
                </p>
              </div>
            </div>

            {/* Product 2 */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1595475207225-428b62bda831?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Aliment premium pour poissons" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-green-800 dark:text-green-400">Aliment NutriGrow Tilapia</h3>
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 dark:bg-amber-800 dark:text-amber-100 text-xs font-medium rounded">Promo -15%</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Aliment équilibré pour tilapias en phase de croissance, produit localement à partir d'ingrédients sélectionnés (sac de 25kg)</p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-bold text-lg">42 500 FCFA</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 line-through ml-2">50 000 FCFA</span>
                  </div>
                  <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">Ajouter au panier</Button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  En stock - Expédition sous 24h
                </p>
              </div>
            </div>

            {/* Product 3 */}
            <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1621950374421-abf28aca1e1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Kit de test d'eau complet" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-xl text-green-800 dark:text-green-400">Kit d'analyse AquaTest Pro</h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 text-xs font-medium rounded">Nouveau</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Kit complet pour l'analyse de la qualité de l'eau (pH, oxygène, nitrates, ammoniac) avec guide adapté aux conditions tropicales</p>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">85 000 FCFA</span>
                  <Button className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">Ajouter au panier</Button>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                  Livraison gratuite à partir de 100 000 FCFA
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 dark:bg-green-700 dark:hover:bg-green-600">
              <Link to="/shop">Voir tous les produits</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Categories */}
      <section className="py-16 px-4 bg-green-50 dark:bg-green-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-800 dark:text-green-400">Nos catégories de produits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1638283247777-6c3323c42319?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Équipements d'aération et de filtration" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-400">Équipements</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Aérateurs, pompes, filtres et systèmes d'oxygénation adaptés au climat camerounais
                </p>
                <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-900/30">
                  Explorer
                </Button>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1602016736566-7aa4eff68c94?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Aliments pour poissons" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-400">Alimentation</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Aliments pour toutes les phases de croissance, vitamines et compléments produits localement
                </p>
                <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-900/30">
                  Explorer
                </Button>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1633281651825-5f3c9b55f6a0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Produits de traitement d'eau" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-400">Traitement</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Produits de traitement d'eau, médicaments et probiotiques approuvés pour l'aquaculture
                </p>
                <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-900/30">
                  Explorer
                </Button>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
              <div className="h-40 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1591983358636-d8eb2b4abb7f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Accessoires pour pisciculture" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2 text-green-800 dark:text-green-400">Accessoires</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
                  Filets, épuisettes, bassins, outils et accessoires essentiels pour les pisciculteurs camerounais
                </p>
                <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50 dark:border-green-500 dark:text-green-400 dark:hover:bg-green-900/30">
                  Explorer
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-green-800 dark:text-green-400">Ce que disent nos clients</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold mr-3">
                  JN
                </div>
                <div>
                  <h4 className="font-bold">Jean Ngoumou</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Pisciculteur à Mbalmayo</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "Grâce aux aérateurs professionnels achetés sur K2N Shop, j'ai pu augmenter ma production de tilapias de 30%. Le service client est réactif et les livraisons sont rapides."
              </p>
              <div className="flex text-amber-400 mt-3">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold mr-3">
                  MF
                </div>
                <div>
                  <h4 className="font-bold">Marie Fotso</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Coopérative de Bafoussam</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "Notre coopérative utilise exclusivement les aliments NutriGrow de K2N. Les poissons grandissent plus vite et sont en meilleure santé. Un produit local de grande qualité!"
              </p>
              <div className="flex text-amber-400 mt-3">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
              </div>
            </div>
            
            <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold mr-3">
                  PN
                </div>
                <div>
                  <h4 className="font-bold">Paul Njock</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Entrepreneur à Douala</p>
                </div>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                "J'ai démarré mon exploitation avec les conseils et le matériel de K2N. Le kit d'analyse d'eau m'a permis d'éviter des pertes importantes. Je recommande vivement!"
              </p>
              <div className="flex text-amber-400 mt-3">
                <span>★</span><span>★</span><span>★</span><span>★</span><span>☆</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-green-600 dark:bg-green-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">Prêt à développer votre activité piscicole?</h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Rejoignez plus de 500 pisciculteurs camerounais qui font confiance à K2N pour leurs équipements et fournitures
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700">
              Créer un compte
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-green-700 dark:border-green-300 dark:text-green-300 dark:hover:bg-green-700">
              Demander un catalogue
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceEcommerce;
