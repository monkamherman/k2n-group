
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Save } from 'lucide-react';
import { User, authAPI } from '@/api/auth';
import { useToast } from '@/hooks/use-toast';

const StaffEdit = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const [staffData, setStaffData] = useState<User>({
    id: '',
    username: '',
    email: '',
    role: 'technician',
    firstName: '',
    lastName: '',
    phone: '',
    avatar: ''
  });

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
        if (foundStaff) {
          setStaffData(foundStaff);
        } else {
          toast({
            title: "Erreur",
            description: "Membre du personnel non trouvé",
            variant: "destructive"
          });
          navigate('/admin/dashboard');
        }
      } catch (error) {
        console.error('Error fetching staff member:', error);
        toast({
          title: "Erreur",
          description: "Une erreur est survenue lors du chargement des données",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchStaffMember();
    }
  }, [id, navigate, toast]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setStaffData(prev => ({ 
      ...prev, 
      [name]: value 
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      // In a real app, you would call an API to update the user
      // This is just for demonstration
      await new Promise(resolve => setTimeout(resolve, 800));
      
      toast({
        title: "Modifications enregistrées",
        description: "Les informations du membre ont été mises à jour avec succès",
      });
      
      navigate(`/admin/staff-detail/${id}`);
    } catch (error) {
      console.error('Error updating staff:', error);
      toast({
        title: "Erreur",
        description: "Une erreur est survenue lors de la sauvegarde des modifications",
        variant: "destructive"
      });
    } finally {
      setSaving(false);
    }
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

  return (
    <div className="container mx-auto py-10">
      <div className="flex items-center mb-6">
        <Link to="/admin/dashboard" className="mr-4">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold dark:text-white">Modifier le Personnel</h1>
      </div>

      <form onSubmit={handleSubmit}>
        <Card className="max-w-3xl mx-auto">
          <CardHeader>
            <CardTitle>Modification des informations</CardTitle>
            <CardDescription>Mettez à jour les informations du membre du personnel</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="firstName">Prénom</Label>
                <Input 
                  id="firstName" 
                  name="firstName" 
                  value={staffData.firstName} 
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="lastName">Nom</Label>
                <Input 
                  id="lastName" 
                  name="lastName" 
                  value={staffData.lastName} 
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Nom d'utilisateur</Label>
                <Input 
                  id="username" 
                  name="username" 
                  value={staffData.username} 
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={staffData.email} 
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  value={staffData.phone} 
                  onChange={handleInputChange}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="role">Rôle</Label>
                <select
                  id="role"
                  name="role"
                  value={staffData.role}
                  onChange={handleInputChange}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  required
                >
                  <option value="admin">Administrateur</option>
                  <option value="blogger">Blogueur</option>
                  <option value="technician">Technicien</option>
                </select>
              </div>

              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="avatar">URL de la photo de profil</Label>
                <Input 
                  id="avatar" 
                  name="avatar" 
                  value={staffData.avatar} 
                  onChange={handleInputChange}
                />
                {staffData.avatar && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 mb-1">Aperçu:</p>
                    <img 
                      src={staffData.avatar} 
                      alt="Avatar preview" 
                      className="w-16 h-16 rounded-full object-cover" 
                    />
                  </div>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Link to={`/admin/staff-detail/${id}`}>
              <Button variant="outline">Annuler</Button>
            </Link>
            <Button type="submit" disabled={saving} className="flex items-center gap-2">
              {saving ? 'Enregistrement...' : (
                <>
                  <Save className="h-4 w-4" />
                  Enregistrer les modifications
                </>
              )}
            </Button>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
};

export default StaffEdit;
