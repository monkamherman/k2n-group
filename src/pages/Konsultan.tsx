
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Konsultan = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire à implémenter
    console.log("Demande de consultation envoyée");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-6">
            K2N Konsultan
          </h1>
          <p className="text-xl text-green-700 mb-8 max-w-3xl mx-auto">
            Des services de consultation professionnelle pour vos projets piscicoles et aquacoles
          </p>
          <Button size="lg" className="bg-green-700 hover:bg-green-800">
            Demander une consultation
          </Button>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos services de consultation</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-900">Étude de faisabilité</h3>
              <p className="text-gray-600 mb-4">
                Analyse complète de votre projet piscicole pour évaluer sa viabilité technique, économique et environnementale.
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Analyse du site et des ressources</li>
                <li>Estimation des coûts et des revenus</li>
                <li>Évaluation des risques</li>
              </ul>
            </div>
            
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-900">Optimisation de production</h3>
              <p className="text-gray-600 mb-4">
                Conseils experts pour améliorer la productivité et la rentabilité de votre exploitation piscicole existante.
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Audit des pratiques actuelles</li>
                <li>Recommandations d'amélioration</li>
                <li>Suivi et évaluation des résultats</li>
              </ul>
            </div>
            
            <div className="p-6 border rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-3 text-green-900">Conception de systèmes</h3>
              <p className="text-gray-600 mb-4">
                Conception sur mesure de systèmes piscicoles adaptés à vos besoins spécifiques et à votre environnement.
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-600">
                <li>Plans détaillés des installations</li>
                <li>Sélection des équipements appropriés</li>
                <li>Stratégies de gestion opérationnelle</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Consultation Form */}
      <section className="py-16 px-4 bg-green-50" id="consultation">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Demande de consultation</h2>
          
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md">
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-1">
                    Prénom
                  </label>
                  <Input type="text" id="firstName" placeholder="Votre prénom" required />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-1">
                    Nom
                  </label>
                  <Input type="text" id="lastName" placeholder="Votre nom" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input type="email" id="email" placeholder="votre@email.com" required />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-1">
                  Téléphone
                </label>
                <Input type="tel" id="phone" placeholder="+33 1 23 45 67 89" />
              </div>
              
              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-1">
                  Entreprise (optionnel)
                </label>
                <Input type="text" id="company" placeholder="Nom de votre entreprise" />
              </div>
              
              <div>
                <label htmlFor="consultationType" className="block text-sm font-medium mb-1">
                  Type de consultation
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionnez un type de consultation" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="feasibility">Étude de faisabilité</SelectItem>
                    <SelectItem value="optimization">Optimisation de production</SelectItem>
                    <SelectItem value="design">Conception de systèmes</SelectItem>
                    <SelectItem value="other">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label htmlFor="details" className="block text-sm font-medium mb-1">
                  Détails du projet
                </label>
                <Textarea id="details" placeholder="Décrivez votre projet et vos besoins spécifiques..." rows={5} required />
              </div>
              
              <div>
                <label htmlFor="budget" className="block text-sm font-medium mb-1">
                  Budget estimé (optionnel)
                </label>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Sélectionnez une fourchette de budget" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Moins de 10 000 €</SelectItem>
                    <SelectItem value="medium">10 000 € - 50 000 €</SelectItem>
                    <SelectItem value="large">50 000 € - 100 000 €</SelectItem>
                    <SelectItem value="xlarge">Plus de 100 000 €</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <Button type="submit" className="w-full bg-green-700 hover:bg-green-800">
                Soumettre ma demande
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                Nous vous répondrons dans les 48 heures avec une proposition personnalisée.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Konsultan;
