
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle, XCircle, Mail, Phone, Calendar } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface Notification {
  id: string;
  type: 'quote' | 'contact' | 'career';
  title: string;
  message: string;
  sender: string;
  timestamp: Date;
  read: boolean;
  phone?: string;
  email: string;
  details: Record<string, any>;
}

const NotificationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [notification, setNotification] = useState<Notification | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchNotificationDetail = async () => {
      setLoading(true);
      try {
        // This is a mock implementation - in a real app, you would fetch from your API
        const mockNotifications: Notification[] = [
          {
            id: '1',
            type: 'quote',
            title: 'Nouvelle demande de devis',
            message: 'Paul Biya a soumis une demande de devis pour Techniciens spécialisés',
            sender: 'Paul Biya',
            email: 'paul.biya@example.com',
            phone: '+237 655 123 456',
            timestamp: new Date(2025, 4, 2, 10, 30),
            read: false,
            details: {
              service: 'Techniciens spécialisés',
              budget: '500000-1000000 FCFA',
              timeframe: 'Urgent (moins d\'une semaine)',
              description: 'Nous avons besoin de techniciens spécialisés pour un projet d\'aquaculture gouvernemental dans la région du Nord.',
              attachments: ['devis_technique.pdf']
            }
          },
          {
            id: '2',
            type: 'career',
            title: 'Candidature reçue',
            message: 'Martin Fru a soumis sa candidature pour le poste de Technicien en pisciculture',
            sender: 'Martin Fru',
            email: 'martin.fru@example.com',
            phone: '+237 699 789 123',
            timestamp: new Date(2025, 4, 1, 14, 15),
            read: false,
            details: {
              position: 'Technicien en pisciculture',
              experience: '3-5 ans',
              education: 'Master en Aquaculture',
              skills: ['Élevage de tilapia', 'Gestion des bassins', 'Contrôle qualité de l\'eau'],
              resume: 'martin_fru_cv.pdf',
              coverLetter: 'martin_fru_lettre.pdf'
            }
          },
          {
            id: '3',
            type: 'contact',
            title: 'Nouveau message de contact',
            message: 'Jean Pierre a envoyé un message concernant les services de consultation',
            sender: 'Jean Pierre',
            email: 'jean.pierre@example.com',
            phone: '+237 677 456 789',
            timestamp: new Date(2025, 3, 30, 9, 45),
            read: true,
            details: {
              subject: 'Demande d\'information sur les services de consultation',
              message: 'Bonjour, je souhaite obtenir plus d\'informations sur vos services de consultation en aquaculture. Pouvez-vous me contacter pour discuter des possibilités de collaboration pour mon entreprise?',
              companyName: 'Aqua Solutions Cameroun'
            }
          }
        ];
        
        const foundNotification = mockNotifications.find(n => n.id === id);
        setNotification(foundNotification || null);
      } catch (error) {
        console.error('Error fetching notification:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchNotificationDetail();
    }
  }, [id]);

  const formatDate = (date: Date) => {
    return format(date, "d MMMM yyyy 'à' HH:mm", { locale: fr });
  };

  if (loading) {
    return (
      <div className="container mx-auto py-10">
        <div className="flex justify-center items-center h-64">
          <p>Chargement des données...</p>
        </div>
      </div>
    );
  }

  if (!notification) {
    return (
      <div className="container mx-auto py-10">
        <div className="flex flex-col items-center justify-center h-64">
          <h2 className="text-2xl font-bold mb-4">Notification non trouvée</h2>
          <Link to="/admin/dashboard">
            <Button>Retour au tableau de bord</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center mb-6">
        <Link to="/admin/dashboard" className="mr-4">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold dark:text-white">Détails de la Notification</h1>
      </div>

      <Card className="max-w-3xl mx-auto">
        <CardHeader>
          <div className="flex items-center gap-2">
            <div className={`p-2 rounded-full ${
              notification.type === 'quote' 
                ? 'bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                : notification.type === 'contact'
                  ? 'bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400'
                  : 'bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400'
            }`}>
              {notification.type === 'quote' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 3v4a1 1 0 0 0 1 1h4"/><path d="M17 21H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l5 5v11a2 2 0 0 1-2 2Z"/><path d="m9 15 2 2 4-4"/></svg>
              ) : notification.type === 'contact' ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
              )}
            </div>
            <div>
              <CardTitle>{notification.title}</CardTitle>
              <CardDescription>
                {notification.type === 'quote' ? 'Demande de devis' : 
                notification.type === 'contact' ? 'Message de contact' : 'Candidature'} 
                reçu le {formatDate(notification.timestamp)}
              </CardDescription>
            </div>
          </div>
          <div className="mt-4 flex items-center">
            <span className={`flex items-center gap-1 px-2 py-1 rounded-full text-xs ${
              notification.read 
                ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                : 'bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400'
            }`}>
              {notification.read ? (
                <><CheckCircle size={14} /> Lu</>
              ) : (
                <><XCircle size={14} /> Non lu</>
              )}
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-md">
              <h3 className="font-medium mb-3">Informations de l'expéditeur</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                  <span>{notification.sender}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} className="text-gray-500" />
                  <a href={`mailto:${notification.email}`} className="text-blue-600 hover:underline dark:text-blue-400">
                    {notification.email}
                  </a>
                </div>
                {notification.phone && (
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-gray-500" />
                    <a href={`tel:${notification.phone}`} className="text-blue-600 hover:underline dark:text-blue-400">
                      {notification.phone}
                    </a>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-gray-500" />
                  <span>{formatDate(notification.timestamp)}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-3">Message</h3>
              <p className="text-gray-700 dark:text-gray-300">{notification.message}</p>
            </div>

            <div>
              <h3 className="font-medium mb-3">Détails</h3>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-md p-4">
                {notification.type === 'quote' && (
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Service demandé</p>
                      <p>{notification.details.service}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Budget</p>
                      <p>{notification.details.budget}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Délai souhaité</p>
                      <p>{notification.details.timeframe}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Description du projet</p>
                      <p>{notification.details.description}</p>
                    </div>
                    {notification.details.attachments && notification.details.attachments.length > 0 && (
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Pièces jointes</p>
                        <ul className="list-disc list-inside">
                          {notification.details.attachments.map((attachment: string, index: number) => (
                            <li key={index} className="text-blue-600 hover:underline dark:text-blue-400">
                              <a href="#">{attachment}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                {notification.type === 'career' && (
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Poste</p>
                      <p>{notification.details.position}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Expérience</p>
                      <p>{notification.details.experience}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Formation</p>
                      <p>{notification.details.education}</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Compétences</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {notification.details.skills.map((skill: string, index: number) => (
                          <span key={index} className="px-2 py-1 bg-gray-200 text-gray-800 text-xs rounded-full dark:bg-gray-700 dark:text-gray-300">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Documents</p>
                      <ul className="list-disc list-inside">
                        <li className="text-blue-600 hover:underline dark:text-blue-400">
                          <a href="#">{notification.details.resume}</a>
                        </li>
                        <li className="text-blue-600 hover:underline dark:text-blue-400">
                          <a href="#">{notification.details.coverLetter}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {notification.type === 'contact' && (
                  <div className="space-y-3">
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Sujet</p>
                      <p>{notification.details.subject}</p>
                    </div>
                    {notification.details.companyName && (
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Entreprise</p>
                        <p>{notification.details.companyName}</p>
                      </div>
                    )}
                    <div>
                      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Message</p>
                      <p className="whitespace-pre-line">{notification.details.message}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between border-t pt-6">
          <Link to="/admin/dashboard">
            <Button variant="outline">Retour</Button>
          </Link>
          <div className="flex gap-2">
            <Button variant="outline" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Répondre
            </Button>
            {!notification.read && (
              <Button className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                Marquer comme lu
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default NotificationDetail;
