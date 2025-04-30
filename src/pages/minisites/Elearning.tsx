
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { GraduationCap, Play, Clock, Users } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Elearning = () => {
  // Données factices pour les cours
  const courses = [
    {
      id: 1,
      title: "Introduction à la pisciculture",
      description: "Un cours complet pour débuter dans la pisciculture et comprendre les fondamentaux.",
      instructor: "Michel Dupont",
      duration: "6 heures",
      students: 258,
      level: "Débutant",
      progress: 0,
      status: "available",
      image: "placeholder"
    },
    {
      id: 2,
      title: "Systèmes aquaponiques avancés",
      description: "Apprenez à concevoir et maintenir des systèmes aquaponiques performants.",
      instructor: "Sophie Martin",
      duration: "8 heures",
      students: 142,
      level: "Intermédiaire",
      progress: 35,
      status: "inprogress",
      image: "placeholder"
    },
    {
      id: 3,
      title: "Santé et nutrition des poissons",
      description: "Tout ce que vous devez savoir pour maintenir vos poissons en bonne santé.",
      instructor: "Jean Leroy",
      duration: "5 heures",
      students: 189,
      level: "Intermédiaire",
      progress: 100,
      status: "completed",
      image: "placeholder"
    },
    {
      id: 4,
      title: "Technologies modernes en pisciculture",
      description: "Découvrez les dernières innovations technologiques appliquées à la pisciculture.",
      instructor: "Laura Blanc",
      duration: "7 heures",
      students: 103,
      level: "Avancé",
      progress: 0,
      status: "available",
      image: "placeholder"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
            Centre de formation K2N
          </h1>
          <p className="text-xl text-blue-700 mb-8 max-w-3xl mx-auto">
            Développez vos compétences en pisciculture avec nos formations en ligne
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg">Explorer les cours</Button>
            <Button variant="outline" size="lg">Voir mon compte</Button>
          </div>
        </div>
      </section>

      {/* Courses */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="all">Tous les cours</TabsTrigger>
              <TabsTrigger value="progress">En cours</TabsTrigger>
              <TabsTrigger value="completed">Terminés</TabsTrigger>
              <TabsTrigger value="certificates">Certificats</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-8">
              <h2 className="text-3xl font-bold mb-8">Tous les cours disponibles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="h-48 bg-blue-100 flex items-center justify-center">
                      <GraduationCap size={48} className="text-blue-500" />
                    </div>
                    <CardHeader>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users size={16} />
                            <span>{course.students} étudiants</span>
                          </div>
                        </div>
                        {course.progress > 0 && (
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Progression</span>
                              <span>{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} />
                          </div>
                        )}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full flex items-center gap-2">
                        {course.status === "available" ? (
                          <>
                            <Play size={16} />
                            Commencer
                          </>
                        ) : course.status === "inprogress" ? (
                          <>
                            <Play size={16} />
                            Continuer
                          </>
                        ) : (
                          <>
                            <GraduationCap size={16} />
                            Revoir
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="progress">
              <h2 className="text-3xl font-bold mb-8">Cours en progression</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.filter(course => course.status === "inprogress").map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="h-48 bg-blue-100 flex items-center justify-center">
                      <GraduationCap size={48} className="text-blue-500" />
                    </div>
                    <CardHeader>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users size={16} />
                            <span>{course.students} étudiants</span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Progression</span>
                            <span>{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full flex items-center gap-2">
                        <Play size={16} />
                        Continuer
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
                {courses.filter(course => course.status === "inprogress").length === 0 && (
                  <div className="col-span-3 text-center py-12">
                    <p className="text-gray-500">Vous n'avez pas de cours en progression actuellement.</p>
                    <Button className="mt-4">Explorer les cours</Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="completed">
              <h2 className="text-3xl font-bold mb-8">Cours terminés</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.filter(course => course.status === "completed").map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="h-48 bg-blue-100 flex items-center justify-center">
                      <GraduationCap size={48} className="text-blue-500" />
                    </div>
                    <CardHeader>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex justify-between text-sm">
                          <div className="flex items-center gap-1">
                            <Clock size={16} />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Users size={16} />
                            <span>{course.students} étudiants</span>
                          </div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>Terminé</span>
                            <span>100%</span>
                          </div>
                          <Progress value={100} />
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full flex items-center gap-2">
                        <GraduationCap size={16} />
                        Voir le certificat
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
                {courses.filter(course => course.status === "completed").length === 0 && (
                  <div className="col-span-3 text-center py-12">
                    <p className="text-gray-500">Vous n'avez pas encore terminé de cours.</p>
                    <Button className="mt-4">Explorer les cours</Button>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="certificates">
              <h2 className="text-3xl font-bold mb-8">Mes certificats</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {courses.filter(course => course.status === "completed").map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="h-48 bg-green-100 flex items-center justify-center">
                      <GraduationCap size={48} className="text-green-500" />
                    </div>
                    <CardHeader>
                      <CardTitle>Certificat : {course.title}</CardTitle>
                      <CardDescription>Délivré le 15 mars 2023</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-600">
                        Ce certificat atteste que vous avez complété avec succès la formation "{course.title}" dispensée par K2N Group.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <div className="flex w-full gap-2">
                        <Button variant="outline" className="flex-1">Voir</Button>
                        <Button className="flex-1">Télécharger</Button>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
                {courses.filter(course => course.status === "completed").length === 0 && (
                  <div className="col-span-3 text-center py-12">
                    <p className="text-gray-500">Vous n'avez pas encore obtenu de certificats.</p>
                    <Button className="mt-4">Explorer les cours</Button>
                  </div>
                )}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
      
      {/* Featured Courses */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Cours populaires</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <Card key={course.id} className="overflow-hidden">
                <div className="h-32 bg-blue-100 flex items-center justify-center">
                  <GraduationCap size={32} className="text-blue-500" />
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                </CardHeader>
                <CardFooter className="p-4 pt-0">
                  <Button variant="outline" className="w-full">En savoir plus</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Elearning;
