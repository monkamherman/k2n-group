
import React from "react";
import { Button } from "@/components/ui/button";
import QuoteSystem from "@/components/services/QuoteSystem";
import { Users, Award, Calendar, BookOpen } from "lucide-react";

const ServiceTechniciens = () => {
  const [showQuoteForm, setShowQuoteForm] = React.useState(false);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-green-50 dark:bg-green-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-green dark:text-green-400 mb-6">
            Nos techniciens spécialisés
          </h1>
          <p className="text-xl text-green-700 dark:text-green-300 mb-8 max-w-3xl mx-auto">
            Une équipe de professionnels qualifiés pour tous vos projets aquacoles
          </p>
          <Button 
            size="lg" 
            variant="green" 
            onClick={() => setShowQuoteForm(!showQuoteForm)}
          >
            {showQuoteForm ? "Masquer le formulaire" : "Demander un devis"}
          </Button>
        </div>
      </section>

      {/* Quote Form */}
      {showQuoteForm && (
        <section className="py-12 px-4">
          <QuoteSystem serviceType="Techniciens spécialisés" />
        </section>
      )}

      {/* Services offerts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-dark-green dark:text-green-400">
            Services offerts par nos techniciens
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-4 text-dark-green dark:text-green-400">Installation de systèmes</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Nos techniciens sont formés pour installer tous types de systèmes aquacoles, des petites installations aux projets industriels.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Installation de bassins</li>
                <li>Mise en place de systèmes de filtration</li>
                <li>Installation de systèmes d'oxygénation</li>
                <li>Configuration des équipements de surveillance</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-4 text-dark-green dark:text-green-400">Maintenance préventive</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Un entretien régulier pour prévenir les problèmes et assurer la longévité de vos installations.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Contrôle régulier des paramètres de l'eau</li>
                <li>Nettoyage et entretien des filtres</li>
                <li>Vérification des équipements électriques</li>
                <li>Optimisation des systèmes</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-4 text-dark-green dark:text-green-400">Interventions d'urgence</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Une équipe disponible pour intervenir rapidement en cas de problème technique.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Réparation de fuites</li>
                <li>Dépannage des systèmes de filtration</li>
                <li>Résolution des problèmes de qualité d'eau</li>
                <li>Remplacement d'équipements défectueux</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-4 text-dark-green dark:text-green-400">Formation pratique</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Nos techniciens forment votre équipe à l'utilisation et à la maintenance des installations.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Formation au contrôle des paramètres</li>
                <li>Gestion quotidienne des installations</li>
                <li>Détection précoce des problèmes</li>
                <li>Meilleures pratiques d'entretien</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-4 text-dark-green dark:text-green-400">Audit technique</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Évaluation complète de vos installations pour identifier les améliorations possibles.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Analyse de la performance des systèmes</li>
                <li>Identification des points faibles</li>
                <li>Recommandations d'optimisation</li>
                <li>Rapport détaillé avec plan d'action</li>
              </ul>
            </div>
            
            <div className="border rounded-lg p-6 shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold mb-4 text-dark-green dark:text-green-400">Conseil technique</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Conseils personnalisés pour améliorer vos installations et augmenter votre productivité.
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
                <li>Recommandations d'équipements</li>
                <li>Solutions aux problèmes récurrents</li>
                <li>Adaptation aux nouvelles techniques</li>
                <li>Optimisation de la consommation d'énergie</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Notre équipe */}
      <section className="py-16 px-4 bg-green-50 dark:bg-green-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-dark-green dark:text-green-400">
            Notre équipe technique
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-dark-green dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-dark-green dark:text-green-400">15+</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Techniciens qualifiés</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center mb-4">
                <Award className="h-8 w-8 text-dark-green dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-dark-green dark:text-green-400">100%</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Certifiés et formés</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8 text-dark-green dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-dark-green dark:text-green-400">5+ ans</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">D'expérience moyenne</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-200 dark:bg-green-800 rounded-full flex items-center justify-center mb-4">
                <BookOpen className="h-8 w-8 text-dark-green dark:text-green-400" />
              </div>
              <h3 className="text-xl font-semibold text-dark-green dark:text-green-400">Formation continue</h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">Mise à jour régulière des compétences</p>
            </div>
          </div>
          
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-dark-green text-dark-green hover:bg-dark-green hover:text-white dark:border-green-400 dark:text-green-400 dark:hover:bg-green-400 dark:hover:text-black"
              onClick={() => setShowQuoteForm(true)}
            >
              Contacter nos techniciens
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceTechniciens;
