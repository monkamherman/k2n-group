
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Actualites = () => {
  // Données factices pour les actualités
  const news = [
    {
      id: 1,
      title: "K2N Group ouvre un nouveau centre de recherche",
      content: "K2N Group est fier d'annoncer l'ouverture d'un tout nouveau centre de recherche dédié à l'innovation en pisciculture durable.",
      date: "2023-04-10",
      type: "entreprise",
      image: "placeholder"
    },
    {
      id: 2,
      title: "Participation au Salon International de l'Aquaculture",
      content: "K2N Group sera présent au prochain Salon International de l'Aquaculture qui se tiendra à Paris du 15 au 18 mai 2023.",
      date: "2023-04-05",
      type: "evenement",
      image: "placeholder"
    },
    {
      id: 3,
      title: "Nouveau partenariat avec l'Université Maritime",
      content: "K2N Group est heureux d'annoncer son partenariat avec l'Université Maritime pour des projets de recherche conjoints.",
      date: "2023-03-22",
      type: "partenariat",
      image: "placeholder"
    },
    {
      id: 4,
      title: "Lancement d'une nouvelle gamme d'aliments pour poissons",
      content: "K2N Group lance une nouvelle gamme d'aliments premium pour poissons d'élevage, fruit de 2 années de recherche.",
      date: "2023-03-15",
      type: "produit",
      image: "placeholder"
    },
    {
      id: 5,
      title: "Conférence sur l'aquaculture durable",
      content: "K2N Group organise une conférence sur les pratiques d'aquaculture durable le 20 avril 2023 à son siège social.",
      date: "2023-03-08",
      type: "evenement",
      image: "placeholder"
    },
    {
      id: 6,
      title: "Certification ISO obtenue pour nos installations",
      content: "K2N Group a obtenu la certification ISO 14001 pour l'ensemble de ses installations de production, reconnaissant nos efforts en matière de gestion environnementale.",
      date: "2023-02-25",
      type: "entreprise",
      image: "placeholder"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Actualités K2N
          </h1>
          <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
            Restez informé des dernières nouvelles et événements de K2N Group
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Rechercher une actualité..."
                className="pl-8 pr-4"
              />
            </div>
          </div>
        </div>
      </section>

      {/* News Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full grid-cols-5 max-w-3xl mx-auto">
              <TabsTrigger value="all">Tous</TabsTrigger>
              <TabsTrigger value="entreprise">Entreprise</TabsTrigger>
              <TabsTrigger value="evenement">Événements</TabsTrigger>
              <TabsTrigger value="partenariat">Partenariats</TabsTrigger>
              <TabsTrigger value="produit">Produits</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.map((item) => (
                  <div key={item.id} className="border rounded-lg overflow-hidden shadow-md">
                    <div className="h-48 bg-blue-100 flex items-center justify-center">
                      <p className="text-blue-500">Image de l'actualité</p>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                          {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                        </span>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.content}</p>
                      <Button variant="outline">Lire la suite</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="entreprise" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.filter(item => item.type === "entreprise").map((item) => (
                  <div key={item.id} className="border rounded-lg overflow-hidden shadow-md">
                    <div className="h-48 bg-blue-100 flex items-center justify-center">
                      <p className="text-blue-500">Image de l'actualité</p>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                          Entreprise
                        </span>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.content}</p>
                      <Button variant="outline">Lire la suite</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="evenement" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.filter(item => item.type === "evenement").map((item) => (
                  <div key={item.id} className="border rounded-lg overflow-hidden shadow-md">
                    <div className="h-48 bg-blue-100 flex items-center justify-center">
                      <p className="text-blue-500">Image de l'actualité</p>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                          Événement
                        </span>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.content}</p>
                      <Button variant="outline">Lire la suite</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="partenariat" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.filter(item => item.type === "partenariat").map((item) => (
                  <div key={item.id} className="border rounded-lg overflow-hidden shadow-md">
                    <div className="h-48 bg-blue-100 flex items-center justify-center">
                      <p className="text-blue-500">Image de l'actualité</p>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                          Partenariat
                        </span>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.content}</p>
                      <Button variant="outline">Lire la suite</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="produit" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {news.filter(item => item.type === "produit").map((item) => (
                  <div key={item.id} className="border rounded-lg overflow-hidden shadow-md">
                    <div className="h-48 bg-blue-100 flex items-center justify-center">
                      <p className="text-blue-500">Image de l'actualité</p>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium px-3 py-1 bg-blue-100 text-blue-800 rounded-full">
                          Produit
                        </span>
                        <span className="text-sm text-gray-500">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.content}</p>
                      <Button variant="outline">Lire la suite</Button>
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Pagination */}
          <div className="mt-12">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#" isActive>1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">2</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Restez informé</h2>
          <p className="text-xl text-gray-600 mb-8">
            Inscrivez-vous à notre newsletter pour recevoir les dernières actualités de K2N Group
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input type="email" placeholder="Votre adresse email" className="flex-grow" />
            <Button>S'inscrire</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Actualites;
