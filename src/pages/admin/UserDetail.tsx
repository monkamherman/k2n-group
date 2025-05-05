
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit, Trash2, User as UserIcon } from 'lucide-react';

interface User {
  username: string;
  email: string;
  role: 'user' | 'admin' | 'blogger' | 'technician';
  createdAt: Date;
  lastLogin: Date;
  status: 'active' | 'inactive' | 'suspended';
}

const UserDetail = () => {
  const { username } = useParams<{ username: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchUserDetail = async () => {
      setLoading(true);
      try {
        // This is a mock implementation - in a real app, you would fetch from your API
        const mockUser: User = {
          username: username || 'user',
          email: `${username}@k2n.com`,
          role: (username === 'admin' ? 'admin' : 
                username === 'blogger' ? 'blogger' : 
                username === 'technician' ? 'technician' : 'user') as 'user' | 'admin' | 'blogger' | 'technician',
          createdAt: new Date(2025, 0, 15),
          lastLogin: new Date(2025, 4, 2),
          status: 'active'
        };
        
        setUser(mockUser);
      } catch (error) {
        console.error('Error fetching user:', error);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchUserDetail();
    }
  }, [username]);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
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

  if (!user) {
    return (
      <div className="container mx-auto py-10">
        <div className="flex flex-col items-center justify-center h-64">
          <h2 className="text-2xl font-bold mb-4">Utilisateur non trouvé</h2>
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
        <h1 className="text-3xl font-bold dark:text-white">Détails de l'Utilisateur</h1>
      </div>

      <Card className="max-w-3xl mx-auto">
        <CardHeader className="relative pb-0">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">{user.username}</CardTitle>
              <CardDescription>Profil utilisateur</CardDescription>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm" className="flex items-center gap-1">
                <Edit className="h-4 w-4" /> Modifier
              </Button>
              <Button variant="destructive" size="sm" className="flex items-center gap-1">
                <Trash2 className="h-4 w-4" /> Supprimer
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-500 dark:text-gray-400">
                <UserIcon size={64} />
              </div>
            </div>
            <div className="flex-grow space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Nom d'utilisateur</p>
                  <p className="mt-1">{user.username}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                  <p className="mt-1">{user.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Rôle</p>
                  <p className="mt-1">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      user.role === 'admin' 
                        ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' 
                        : user.role === 'blogger'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          : user.role === 'technician'
                            ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                            : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                    }`}>
                      {user.role === 'admin' ? 'Administrateur' : 
                      user.role === 'blogger' ? 'Blogueur' : 
                      user.role === 'technician' ? 'Technicien' : 'Utilisateur'}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Statut</p>
                  <p className="mt-1">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      user.status === 'active' 
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' 
                        : user.status === 'inactive'
                          ? 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'
                          : 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400'
                    }`}>
                      {user.status === 'active' ? 'Actif' : 
                      user.status === 'inactive' ? 'Inactif' : 'Suspendu'}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Date de création</p>
                  <p className="mt-1">{formatDate(user.createdAt)}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Dernière connexion</p>
                  <p className="mt-1">{formatDate(user.lastLogin)}</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end border-t pt-6">
          <Link to="/admin/dashboard">
            <Button variant="outline">Retour</Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserDetail;
