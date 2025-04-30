
import React from "react";
import { Button } from "@/components/ui/button";
import { GraduationCap, Download } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Technologie = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            K2N Technologie
          </h1>
          <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
            Recherche et innovation au service de la pisciculture moderne
          </p>
          <Button size="lg">
            Découvrir nos innovations
          </Button>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Domaines de recherche</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-md">
              <div className="mb-4 text-blue-700">
                <GraduationCap size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Intelligence artificielle</h3>
              <p className="text-gray-600 mb-4">
                Développement d'algorithmes et de systèmes intelligents pour optimiser la gestion et le monitoring des installations piscicoles.
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Analyse prédictive pour la santé des poissons</li>
                <li>Optimisation automatique des paramètres d'élevage</li>
                <li>Détection précoce des anomalies</li>
              </ul>
            </div>
            
            <div className="p-6 border rounded-lg shadow-md">
              <div className="mb-4 text-blue-700">
                <GraduationCap size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Systèmes durables</h3>
              <p className="text-gray-600 mb-4">
                Conception de solutions piscicoles éco-responsables combinant performance économique et respect de l'environnement.
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Systèmes à faible empreinte carbone</li>
                <li>Recyclage et réutilisation des ressources</li>
                <li>Intégration des énergies renouvelables</li>
              </ul>
            </div>
            
            <div className="p-6 border rounded-lg shadow-md">
              <div className="mb-4 text-blue-700">
                <GraduationCap size={48} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900">Biotechnologies</h3>
              <p className="text-gray-600 mb-4">
                Recherche avancée sur les procédés biologiques pour améliorer la santé et la croissance des poissons.
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Probiotiques spécifiques pour poissons</li>
                <li>Solutions naturelles contre les pathogènes</li>
                <li>Amélioration génétique responsable</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Current Projects */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Projets en cours</h2>
          
          <Tabs defaultValue="aquamonitor">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="aquamonitor">AquaMonitor</TabsTrigger>
              <TabsTrigger value="ecofeed">EcoFeed</TabsTrigger>
              <TabsTrigger value="smartsystem">SmartSystem</TabsTrigger>
            </TabsList>
            
            <TabsContent value="aquamonitor">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Projet AquaMonitor</h3>
                <p className="text-gray-700 mb-4">
                  Système de surveillance intelligent qui utilise des capteurs avancés et l'intelligence artificielle pour monitorer en temps réel les paramètres essentiels de l'eau et le comportement des poissons.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-bold mb-2">Objectifs</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Réduire la mortalité de 40%</li>
                      <li>Optimiser la consommation d'énergie</li>
                      <li>Améliorer la qualité de l'eau en continu</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Technologies utilisées</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Capteurs IoT submersibles</li>
                      <li>Analyse d'images par deep learning</li>
                      <li>Plateformes cloud de traitement de données</li>
                    </ul>
                  </div>
                </div>
                <Button className="flex items-center gap-2">
                  <Download size={16} />
                  Télécharger la fiche technique
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="ecofeed">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Projet EcoFeed</h3>
                <p className="text-gray-700 mb-4">
                  Programme de recherche sur les aliments durables à base d'ingrédients alternatifs et locaux, réduisant l'impact environnemental tout en maintenant une excellente valeur nutritionnelle.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-bold mb-2">Objectifs</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Réduire l'usage de farine de poisson de 70%</li>
                      <li>Utiliser des sources de protéines locales</li>
                      <li>Maintenir ou améliorer le taux de croissance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Innovations</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Formules à base d'insectes et de micro-algues</li>
                      <li>Processus d'extraction de protéines innovant</li>
                      <li>Tests de digestibilité avancés</li>
                    </ul>
                  </div>
                </div>
                <Button className="flex items-center gap-2">
                  <Download size={16} />
                  Télécharger la fiche technique
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="smartsystem">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-blue-900">Projet SmartSystem</h3>
                <p className="text-gray-700 mb-4">
                  Système piscicole intelligent et interconnecté, intégrant des technologies d'automation et d'IA pour créer un environnement d'élevage optimal et autonome.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-bold mb-2">Objectifs</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Réduire les interventions humaines de 60%</li>
                      <li>Augmenter la production de 25%</li>
                      <li>Diminuer la consommation d'eau de 40%</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Composants</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      <li>Système central de contrôle intelligent</li>
                      <li>Réseau de capteurs et d'actuateurs</li>
                      <li>Interface utilisateur intuitive</li>
                    </ul>
                  </div>
                </div>
                <Button className="flex items-center gap-2">
                  <Download size={16} />
                  Télécharger la fiche technique
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Collaboration CTA */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-blue-900">Collaborez avec nous</h2>
          <p className="text-xl text-gray-600 mb-8">
            Vous êtes un institut de recherche, une université ou une entreprise innovante ? Rejoignez nos projets de recherche et d'innovation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">Proposer une collaboration</Button>
            <Button variant="outline" size="lg">En savoir plus</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technologie;
