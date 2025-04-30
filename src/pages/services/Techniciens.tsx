
import React from "react";
import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";

const ServiceTechniciens = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Techniciens spécialisés en pisciculture
          </h1>
          <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
            Une équipe de professionnels à votre service pour tous vos projets aquacoles
          </p>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Nos services techniques</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="border rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Installation de systèmes</h3>
              <p className="text-gray-600 mb-4">
                Nos techniciens experts installent vos systèmes aquacoles de A à Z, en garantissant une efficacité optimale et une intégration parfaite à votre environnement.
              </p>
              <Button variant="outline">Demander un devis</Button>
            </div>
            
            <div className="border rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Maintenance régulière</h3>
              <p className="text-gray-600 mb-4">
                Services d'entretien programmés pour assurer le bon fonctionnement de vos installations et prévenir les problèmes techniques.
              </p>
              <Button variant="outline">Réserver une visite</Button>
            </div>
            
            <div className="border rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Diagnostic et réparation</h3>
              <p className="text-gray-600 mb-4">
                Intervention rapide en cas de panne ou de dysfonctionnement pour minimiser les perturbations de votre production.
              </p>
              <Button variant="outline">Service d'urgence</Button>
            </div>
            
            <div className="border rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-3">Formation technique</h3>
              <p className="text-gray-600 mb-4">
                Formation de votre personnel à l'utilisation et à la maintenance de base des équipements piscicoles.
              </p>
              <Button variant="outline">Programmer une formation</Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Notre équipe de techniciens</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <Users size={64} className="text-blue-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-1">Michel Dupont</h3>
                <p className="text-blue-700 mb-3">Spécialiste en systèmes aquaponiques</p>
                <p className="text-gray-600 mb-4">15 ans d'expérience dans l'installation et la maintenance de systèmes aquaponiques innovants.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <Users size={64} className="text-blue-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-1">Sophie Martin</h3>
                <p className="text-blue-700 mb-3">Experte en équipements de filtration</p>
                <p className="text-gray-600 mb-4">Spécialisée dans les systèmes de filtration avancés pour tous types d'élevages piscicoles.</p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md text-center">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <Users size={64} className="text-blue-500" />
              </div>
              <div className="p-4">
                <h3 className="font-bold text-xl mb-1">Jean Leroy</h3>
                <p className="text-blue-700 mb-3">Technicien en automation</p>
                <p className="text-gray-600 mb-4">Expert en systèmes automatisés de contrôle et de surveillance pour piscicultures.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button size="lg">Rejoindre notre équipe</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceTechniciens;
