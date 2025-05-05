
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Edit, Trash2 } from 'lucide-react';
import { User, authAPI } from '@/api/auth';

const StaffDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [staff, setStaff] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchStaffMember = async () => {
      setLoading(true);
      try {
        // This is a mock implementation - in a real app, you would fetch from your API
        const mockUsers = [
          {
            id: '1',
            username: 'admin',
            email: 'admin@k2n.com',
            role: 'admin' as const,
            avatar: 'https://github.com/shadcn.png',
            firstName: 'Admin',
            lastName: 'User',
            phone: '+237 655 123 456'
          },
          {
            id: '2',
            username: 'blogger',
            email: 'blogger@k2n.com',
            role: 'blogger' as const,
            avatar: 'https://i.pravatar.cc/150?u=blogger',
            firstName: 'Blog',
            lastName: 'Writer',
            phone: '+237 655 789 012'
          },
          {
            id: '3',
            username: 'technician',
            email: 'tech@k2n.com',
            role: 'technician' as const,
            avatar: 'https://i.pravatar.cc/150?u=technician',
            firstName: 'Tech',
            lastName: 'Expert',
            phone: '+237 655 345 678'
          }
        ];
        
        const foundStaff = mockUsers.find(user => user.id === id);
        setStaff(foundStaff || null);
      } catch (error) {
        console.error('Error fetching staff member:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchStaffMember();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container mx-auto py-10">
        <div className="flex justify-center items-center h-64">
          <p>Chargement des données...</p>
        </div>
      </div>
    );
  }

  if (!staff) {
    return (
      <div className="container mx-auto py-10">
        <div className="flex flex-col items-center justify-center h-64">
          <h2 className="text-2xl font-bold mb-4">Membre du personnel non trouvé</h2>
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
        <h1 className="text-3xl font-bold dark:text-white">Détails du Personnel</h1>
      </div>

      <Card className="max-w-3xl mx-auto">
        <CardHeader className="relative pb-0">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-2xl">{staff.firstName} {staff.lastName}</CardTitle>
              <CardDescription>@{staff.username}</CardDescription>
            </div>
            <div className="flex space-x-2">
              <Link to={`/admin/staff-edit/${staff.id}`}>
                <Button variant="outline" size="sm" className="flex items-center gap-1">
                  <Edit className="h-4 w-4" /> Modifier
                </Button>
              </Link>
              <Button variant="destructive" size="sm" className="flex items-center gap-1">
                <Trash2 className="h-4 w-4" /> Supprimer
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <img 
                src={staff.avatar} 
                alt={staff.username}
                className="w-32 h-32 rounded-full object-cover border-4 border-gray-200 dark:border-gray-800" 
              />
            </div>
            <div className="flex-grow space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Rôle</p>
                  <p className="mt-1">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      staff.role === 'admin' 
                        ? 'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400' 
                        : staff.role === 'blogger'
                          ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                    }`}>
                      {staff.role === 'admin' ? 'Administrateur' : 
                      staff.role === 'blogger' ? 'Blogueur' : 'Technicien'}
                    </span>
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Nom d'utilisateur</p>
                  <p className="mt-1">{staff.username}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</p>
                  <p className="mt-1">{staff.email}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Téléphone</p>
                  <p className="mt-1">{staff.phone}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Prénom</p>
                  <p className="mt-1">{staff.firstName}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Nom</p>
                  <p className="mt-1">{staff.lastName}</p>
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

export default StaffDetail;
