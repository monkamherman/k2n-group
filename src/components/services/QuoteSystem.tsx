
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuthStore } from "@/store/authStore";

interface QuoteSystemProps {
  serviceType: string;
}

const QuoteSystem = ({ serviceType }: QuoteSystemProps) => {
  const { user } = useAuthStore();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Demande envoyée avec succès",
        description: "Votre demande de devis a été envoyée. Un technicien vous contactera prochainement.",
      });
    }, 1500);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-dark-green dark:text-green-400">
          Demande de devis pour {serviceType}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom</Label>
              <Input 
                id="firstName" 
                placeholder="Votre prénom" 
                defaultValue={user?.firstName || ""} 
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom</Label>
              <Input 
                id="lastName" 
                placeholder="Votre nom" 
                defaultValue={user?.lastName || ""}
                required 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                placeholder="votre@email.com" 
                defaultValue={user?.email || ""}
                required 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Téléphone</Label>
              <Input 
                id="phone" 
                placeholder="+237 6XX XX XX XX"
                defaultValue={user?.phone || ""} 
                required 
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="company">Entreprise (optionnel)</Label>
            <Input id="company" placeholder="Nom de votre entreprise" />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="projectType">Type de projet</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez le type de projet" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="installation">Installation</SelectItem>
                <SelectItem value="maintenance">Maintenance</SelectItem>
                <SelectItem value="consultation">Consultation</SelectItem>
                <SelectItem value="formation">Formation</SelectItem>
                <SelectItem value="other">Autre</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="projectDescription">Description du projet</Label>
            <Textarea 
              id="projectDescription" 
              placeholder="Décrivez votre projet et vos besoins spécifiques..." 
              rows={5}
              required 
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="budget">Budget estimé</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez une fourchette de budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Moins de 500 000 FCFA</SelectItem>
                <SelectItem value="medium">500 000 - 2 000 000 FCFA</SelectItem>
                <SelectItem value="large">2 000 000 - 5 000 000 FCFA</SelectItem>
                <SelectItem value="xlarge">Plus de 5 000 000 FCFA</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="deadlineSelect">Délai souhaité</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez un délai" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="urgent">Urgent (moins de 7 jours)</SelectItem>
                <SelectItem value="standard">Standard (2-4 semaines)</SelectItem>
                <SelectItem value="flexible">Flexible (1-3 mois)</SelectItem>
                <SelectItem value="longterm">Long terme (3+ mois)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            type="submit" 
            variant="green" 
            className="w-full" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Soumettre ma demande de devis"}
          </Button>
          
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center mt-2">
            Après soumission, votre demande sera traitée par nos experts qui prépareront un devis personnalisé.
          </p>
        </form>
      </CardContent>
    </Card>
  );
};

export default QuoteSystem;
