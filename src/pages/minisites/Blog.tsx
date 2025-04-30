
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

const Blog = () => {
  // Données factices pour les articles de blog
  const blogPosts = [
    {
      id: 1,
      title: "5 conseils pour démarrer votre projet de pisciculture",
      excerpt: "Découvrez les éléments essentiels à considérer avant de lancer votre exploitation piscicole...",
      author: "Michel Dupont",
      date: "2023-04-15",
      category: "Débutant",
      image: "placeholder"
    },
    {
      id: 2,
      title: "L'importance de la qualité de l'eau en pisciculture",
      excerpt: "L'eau est l'élément fondamental de toute exploitation piscicole. Apprenez comment maintenir des paramètres optimaux...",
      author: "Sophie Martin",
      date: "2023-03-22",
      category: "Technique",
      image: "placeholder"
    },
    {
      id: 3,
      title: "Les innovations technologiques en aquaculture",
      excerpt: "Le secteur aquacole connaît une révolution technologique. Découvrez les dernières innovations qui transforment la pisciculture...",
      author: "Jean Leroy",
      date: "2023-02-10",
      category: "Innovation",
      image: "placeholder"
    },
    {
      id: 4,
      title: "Comment choisir les bonnes espèces pour votre exploitation",
      excerpt: "Le choix des espèces est crucial pour le succès de votre projet. Voici les critères à prendre en compte...",
      author: "Laura Blanc",
      date: "2023-01-05",
      category: "Stratégie",
      image: "placeholder"
    }
  ];

  const categories = [
    "Tous", "Débutant", "Technique", "Innovation", "Stratégie", "Santé des poissons", "Alimentation", "Équipement"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-12 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Blog K2N
          </h1>
          <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
            Restez informé des dernières tendances et conseils en pisciculture
          </p>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-2 top-3 h-4 w-4 text-gray-500" />
              <Input
                type="search"
                placeholder="Rechercher un article..."
                className="pl-8 pr-4"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Main Content */}
          <main className="md:w-2/3">
            <div className="space-y-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="border rounded-lg overflow-hidden shadow-md">
                  <div className="h-48 bg-blue-100 flex items-center justify-center">
                    <p className="text-blue-500">Image de l'article</p>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <span className="text-sm text-blue-700 mr-4">{post.category}</span>
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <h2 className="text-2xl font-bold mb-2 text-blue-900">{post.title}</h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Par {post.author}</span>
                      <Button variant="outline">Lire la suite</Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
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
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </main>
          
          {/* Sidebar */}
          <aside className="md:w-1/3 space-y-8">
            {/* Categories */}
            <div className="border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Catégories</h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <div key={index}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                    >
                      {category}
                    </Button>
                    {index < categories.length - 1 && <Separator />}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Recent Posts */}
            <div className="border rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Articles récents</h3>
              <div className="space-y-4">
                {blogPosts.slice(0, 3).map((post) => (
                  <div key={post.id} className="flex gap-3">
                    <div className="w-16 h-16 bg-blue-100 flex-shrink-0 rounded"></div>
                    <div>
                      <h4 className="font-medium line-clamp-2 hover:text-blue-700">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-500">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Newsletter</h3>
              <p className="text-gray-600 mb-4">
                Inscrivez-vous pour recevoir nos derniers articles et conseils.
              </p>
              <div className="space-y-2">
                <Input type="email" placeholder="Votre adresse email" />
                <Button className="w-full">S'inscrire</Button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blog;
