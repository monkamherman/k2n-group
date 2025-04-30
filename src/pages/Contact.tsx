
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire à implémenter
    console.log("Formulaire envoyé");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Contactez-nous
          </h1>
          <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos questions
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Sujet
                  </label>
                  <Input type="text" id="subject" placeholder="Sujet de votre message" required />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Votre message" rows={5} required />
                </div>
                
                <Button type="submit" size="lg" className="w-full">
                  Envoyer le message
                </Button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="mr-4 text-blue-700">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Adresse</h3>
                    <p className="text-gray-600">
                      123 Rue de la Pisciculture<br />
                      75000 Paris<br />
                      France
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-blue-700">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-gray-600">contact@k2ngroup.com</p>
                    <p className="text-gray-600">info@k2ngroup.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="mr-4 text-blue-700">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Téléphone</h3>
                    <p className="text-gray-600">+33 1 23 45 67 89</p>
                    <p className="text-gray-600">+33 9 87 65 43 21</p>
                  </div>
                </div>
                
                <div className="mt-8">
                  <h3 className="font-semibold text-lg mb-3">Heures d'ouverture</h3>
                  <p className="text-gray-600">
                    Lundi - Vendredi: 9h00 - 18h00<br />
                    Samedi: 9h00 - 12h00<br />
                    Dimanche: Fermé
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">Nous trouver</h2>
          {/* Placeholder for map - in a real implementation, you would integrate Google Maps or similar */}
          <div className="h-96 bg-blue-100 flex items-center justify-center">
            <p className="text-blue-700">Carte interactive à intégrer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
