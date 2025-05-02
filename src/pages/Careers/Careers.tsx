
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Briefcase, Users, CheckCircle } from "lucide-react";

const Careers = () => {
  const { toast } = useToast();
  
  const jobOpenings = [
    {
      id: 1,
      title: "Technicien en pisciculture",
      department: "Opérations",
      location: "Yaoundé",
      type: "Temps plein",
      description: "Nous recherchons un technicien en pisciculture expérimenté pour rejoindre notre équipe d'opérations.",
      requirements: [
        "Au moins 2 ans d'expérience en pisciculture",
        "Connaissance des systèmes d'aquaculture modernes",
        "Capacité à travailler en équipe",
        "Permis de conduire valide"
      ]
    },
    {
      id: 2,
      title: "Responsable marketing digital",
      department: "Marketing",
      location: "Yaoundé",
      type: "Temps plein",
      description: "Gérez nos campagnes marketing et aidez à développer notre présence en ligne.",
      requirements: [
        "3+ ans d'expérience en marketing digital",
        "Maîtrise des outils d'analyse web",
        "Expérience en gestion de campagnes sur les réseaux sociaux",
        "Bonnes compétences rédactionnelles en français et en anglais"
      ]
    },
    {
      id: 3,
      title: "Consultant en aquaculture",
      department: "Consultation",
      location: "Flexible",
      type: "Freelance",
      description: "Nous cherchons des consultants expérimentés pour nos projets d'aquaculture.",
      requirements: [
        "5+ ans d'expérience en aquaculture",
        "Expertise en conception de systèmes aquacoles",
        "Expérience en conseil et en gestion de projets",
        "Disponibilité pour des déplacements occasionnels"
      ]
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logique d'envoi du formulaire à implémenter
    toast({
      title: "Candidature envoyée",
      description: "Nous avons bien reçu votre candidature et vous recontacterons prochainement.",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-green-50 dark:bg-green-900/20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-dark-green dark:text-green-400 mb-6">
            Rejoignez notre équipe
          </h1>
          <p className="text-xl text-green-700 dark:text-green-300 mb-8 max-w-3xl mx-auto">
            Découvrez les opportunités de carrière chez K2N Group et contribuez à l'innovation dans le secteur aquacole
          </p>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-dark-green dark:text-green-400">
            Pourquoi nous rejoindre ?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-green-100 dark:bg-green-900/30 p-4 rounded-full">
                  <Briefcase className="h-8 w-8 text-dark-green dark:text-green-400" />
                </div>
                <CardTitle className="mt-4 text-dark-green dark:text-green-400">
                  Croissance professionnelle
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Nous investissons dans le développement de nos employés avec des formations continues et des opportunités d'avancement.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-green-100 dark:bg-green-900/30 p-4 rounded-full">
                  <CheckCircle className="h-8 w-8 text-dark-green dark:text-green-400" />
                </div>
                <CardTitle className="mt-4 text-dark-green dark:text-green-400">
                  Impact positif
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Contribuez à des projets qui ont un impact réel sur la sécurité alimentaire et le développement durable.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-green-100 dark:bg-green-900/30 p-4 rounded-full">
                  <Users className="h-8 w-8 text-dark-green dark:text-green-400" />
                </div>
                <CardTitle className="mt-4 text-dark-green dark:text-green-400">
                  Culture collaborative
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  Rejoignez une équipe dynamique où l'innovation, la collaboration et le respect sont au cœur de nos valeurs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 px-4 bg-green-50 dark:bg-green-900/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-dark-green dark:text-green-400">
            Postes disponibles
          </h2>
          
          <div className="grid grid-cols-1 gap-6">
            {jobOpenings.map((job) => (
              <Card key={job.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-dark-green dark:text-green-400">
                        {job.title}
                      </CardTitle>
                      <CardDescription className="mt-1">
                        {job.department} | {job.location} | {job.type}
                      </CardDescription>
                    </div>
                    <Button variant="green">Postuler</Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{job.description}</p>
                  <h4 className="font-semibold mb-2">Exigences:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {job.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-dark-green dark:text-green-400">
            Soumettez votre candidature
          </h2>
          
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Prénom</Label>
                    <Input id="firstName" placeholder="Votre prénom" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nom</Label>
                    <Input id="lastName" placeholder="Votre nom" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="votre@email.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Téléphone</Label>
                  <Input id="phone" placeholder="+237 6XX XX XX XX" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="position">Poste souhaité</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Sélectionnez un poste" />
                    </SelectTrigger>
                    <SelectContent>
                      {jobOpenings.map((job) => (
                        <SelectItem key={job.id} value={job.id.toString()}>{job.title}</SelectItem>
                      ))}
                      <SelectItem value="other">Autre (précisez ci-dessous)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experience">Expérience professionnelle</Label>
                  <Textarea id="experience" placeholder="Décrivez brièvement votre expérience professionnelle pertinente." />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="resume">CV (PDF, DOCX)</Label>
                  <Input id="resume" type="file" accept=".pdf,.docx" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="coverLetter">Lettre de motivation</Label>
                  <Textarea id="coverLetter" placeholder="Pourquoi souhaitez-vous rejoindre K2N Group?" rows={5} />
                </div>
                
                <Button type="submit" variant="green" className="w-full">
                  Soumettre ma candidature
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Careers;
