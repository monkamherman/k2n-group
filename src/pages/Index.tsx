
import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Fish, ShoppingCart, Users, GraduationCap } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header/Hero Section */}
      <header className="w-full py-16 px-4 md:px-8 lg:px-16 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-6">
            Bienvenue chez K2N Group
          </h1>
          <p className="text-xl md:text-2xl text-blue-700 mb-8">
            Expertise en pisciculture, technologie et innovation
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" className="bg-blue-700 hover:bg-blue-800">
              <Link to="/services">Découvrir nos services</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Nous contacter</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Main Business Areas */}
      <section className="py-16 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Nos trois pôles d'expertise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* K2N Service */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <div className="mb-4 text-blue-700">
                <ShoppingCart size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">K2N Service</h3>
              <p className="text-gray-700 mb-4">
                Commercialisation de produits et services de pisciculture, production de poissons d'eau douce et assistance technique spécialisée.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/services">En savoir plus</Link>
              </Button>
            </div>

            {/* K2N Konsultan */}
            <div className="bg-green-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <div className="mb-4 text-green-700">
                <Users size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-green-900">K2N Konsultan</h3>
              <p className="text-gray-700 mb-4">
                Services de consultation professionnelle pour vos projets aquacoles, avec expertise et accompagnement personnalisé.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/konsultan">Demander un conseil</Link>
              </Button>
            </div>

            {/* K2N Technologie */}
            <div className="bg-blue-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <div className="mb-4 text-blue-700">
                <GraduationCap size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">K2N Technologie</h3>
              <p className="text-gray-700 mb-4">
                Recherche et développement en innovation technologique appliquée à l'aquaculture et à la gestion environnementale.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/technologie">Découvrir nos innovations</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Mini-sites Section */}
      <section className="py-16 px-4 md:px-8 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Explorez nos mini-sites</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Blog */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Blog</h3>
              <p className="text-gray-700 mb-4">
                Articles, conseils et actualités sur la pisciculture et les innovations du secteur.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/blog">Lire nos articles</Link>
              </Button>
            </div>

            {/* E-learning */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 text-blue-900">E-learning</h3>
              <p className="text-gray-700 mb-4">
                Formations en ligne pour développer vos compétences en pisciculture et aquaculture.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/elearning">Suivre nos formations</Link>
              </Button>
            </div>

            {/* Actualités */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-3 text-blue-900">Actualités</h3>
              <p className="text-gray-700 mb-4">
                Dernières nouvelles, événements et développements de K2N Group.
              </p>
              <Button asChild variant="outline" className="w-full">
                <Link to="/actualites">Voir les actualités</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
