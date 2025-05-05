
import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Users, PlusCircle, Edit, Trash2, CheckCircle, XCircle } from 'lucide-react';
import { authAPI, User } from '@/api/auth';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [staff, setStaff] = useState<User[]>([]);
  const [isAddingStaff, setIsAddingStaff] = useState(false);
  const [newStaffData, setNewStaffData] = useState({
    username: '',
    email: '',
    role: 'technician',
    firstName: '',
    lastName: '',
    phone: ''
  });

  // Fetch all staff members (non-users)
  useEffect(() => {
    const fetchStaff = async () => {
      try {
        // This is a mock implementation - in a real app, you would fetch from your API
        const allUsers = [
          {
            id: '1',
            username: 'admin',
            email: 'admin@k2n.com',
            role: 'admin',
            avatar: 'https://github.com/shadcn.png',
            firstName: 'Admin',
            lastName: 'User',
            phone: '+237 655 123 456'
          },
          {
            id: '2',
            username: 'blogger',
            email: 'blogger@k2n.com',
            role: 'blogger',
            avatar: 'https://i.pravatar.cc/150?u=blogger',
            firstName: 'Blog',
            lastName: 'Writer',
            phone: '+237 655 789 012'
          },
          {
            id: '3',
            username: 'technician',
            email: 'tech@k2n.com',
            role: 'technician',
            avatar: 'https://i.pravatar.cc/150?u=technician',
            firstName: 'Tech',
            lastName: 'Expert',
            phone: '+237 655 345 678'
          }
        ];
        
        // Filter to only include non-user roles
        const nonUserStaff = allUsers.filter(user => user.role !== 'user');
        setStaff(nonUserStaff);
      } catch (error) {
        console.error('Error fetching staff:', error);
      }
    };

    fetchStaff();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewStaffData(prev => ({ ...prev, [name]: value }));
  };

  const handleAddStaff = () => {
    // In a real app, you would call an API to add the user
    const newStaff = {
      id: (staff.length + 1).toString(),
      ...newStaffData,
      avatar: `https://i.pravatar.cc/150?u=${newStaffData.username}`
    };

    setStaff(prev => [...prev, newStaff as User]);
    setIsAddingStaff(false);
    setNewStaffData({
      username: '',
      email: '',
      role: 'technician',
      firstName: '',
      lastName: '',
      phone: ''
    });
  };

  const handleDeleteStaff = (id: string) => {
    // In a real app, you would call an API to delete the user
    setStaff(prev => prev.filter(staff => staff.id !== id));
  };

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6 dark:text-white">
        Tableau de bord Admin
      </h1>

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Aperçu</TabsTrigger>
          <TabsTrigger value="users">Utilisateurs</TabsTrigger>
          <TabsTrigger value="staff">Personnel</TabsTrigger>
          <TabsTrigger value="content">Contenu</TabsTrigger>
          <TabsTrigger value="settings">Paramètres</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Utilisateurs</CardTitle>
                <CardDescription>Total des utilisateurs inscrits</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">24</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Articles</CardTitle>
                <CardDescription>Total des articles publiés</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">14</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Services</CardTitle>
                <CardDescription>Total des services actifs</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-4xl font-bold">8</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        <TabsContent value="users">
          <Card>
            <CardHeader>
              <CardTitle>Gestion des utilisateurs</CardTitle>
              <CardDescription>Gérer les utilisateurs et leurs rôles</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Nom</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Rôle</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                    {['admin', 'blogger', 'technician', 'user'].map((role, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">{role}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{role}@k2n.com</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            role === 'admin' 
                              ? 'bg-red-100 text-red-800' 
                              : role === 'blogger'
                                ? 'bg-blue-100 text-blue-800'
                                : role === 'technician'
                                  ? 'bg-yellow-100 text-yellow-800'
                                  : 'bg-gray-100 text-gray-800'
                          }`}>
                            {role}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-blue-600 hover:text-blue-900 mr-2">Modifier</button>
                          <button className="text-red-600 hover:text-red-900">Supprimer</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="staff">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Gestion du Personnel</CardTitle>
                <CardDescription>Gérer les administrateurs, blogueurs et techniciens</CardDescription>
              </div>
              <Button 
                onClick={() => setIsAddingStaff(true)}
                className="flex items-center gap-2"
              >
                <PlusCircle size={16} />
                Ajouter Personnel
              </Button>
            </CardHeader>
            <CardContent>
              {isAddingStaff ? (
                <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-md mb-4">
                  <h3 className="text-lg font-medium mb-4">Ajouter un nouveau membre du personnel</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <Label htmlFor="firstName">Prénom</Label>
                      <Input 
                        id="firstName" 
                        name="firstName"
                        value={newStaffData.firstName}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Nom</Label>
                      <Input 
                        id="lastName" 
                        name="lastName"
                        value={newStaffData.lastName}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="username">Nom d'utilisateur</Label>
                      <Input 
                        id="username" 
                        name="username"
                        value={newStaffData.username}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        name="email"
                        type="email"
                        value={newStaffData.email}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input 
                        id="phone" 
                        name="phone"
                        value={newStaffData.phone}
                        onChange={handleInputChange}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="role">Rôle</Label>
                      <select
                        id="role"
                        name="role"
                        value={newStaffData.role}
                        onChange={handleInputChange}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base mt-1 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                      >
                        <option value="admin">Administrateur</option>
                        <option value="blogger">Blogueur</option>
                        <option value="technician">Technicien</option>
                      </select>
                    </div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <Button variant="outline" onClick={() => setIsAddingStaff(false)}>
                      Annuler
                    </Button>
                    <Button onClick={handleAddStaff}>
                      Ajouter
                    </Button>
                  </div>
                </div>
              ) : null}

              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Photo</TableHead>
                    <TableHead>Nom</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Téléphone</TableHead>
                    <TableHead>Rôle</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {staff.map((person) => (
                    <TableRow key={person.id}>
                      <TableCell>
                        <img 
                          src={person.avatar} 
                          alt={person.username} 
                          className="w-10 h-10 rounded-full object-cover"
                        />
                      </TableCell>
                      <TableCell>
                        {person.firstName} {person.lastName}
                        <div className="text-xs text-gray-500">@{person.username}</div>
                      </TableCell>
                      <TableCell>{person.email}</TableCell>
                      <TableCell>{person.phone}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          person.role === 'admin' 
                            ? 'bg-red-100 text-red-800' 
                            : person.role === 'blogger'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {person.role === 'admin' ? 'Administrateur' : 
                           person.role === 'blogger' ? 'Blogueur' : 'Technicien'}
                        </span>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="icon" className="w-8 h-8">
                            <Edit size={16} />
                          </Button>
                          <Button 
                            variant="outline" 
                            size="icon" 
                            className="w-8 h-8 text-red-600 hover:text-red-800"
                            onClick={() => handleDeleteStaff(person.id)}
                          >
                            <Trash2 size={16} />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="content">
          <Card>
            <CardHeader>
              <CardTitle>Gestion du contenu</CardTitle>
              <CardDescription>Gérer les articles et les pages du site</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                Interface de gestion de contenu en cours de développement...
              </p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings">
          <Card>
            <CardHeader>
              <CardTitle>Paramètres du site</CardTitle>
              <CardDescription>Configurer les paramètres généraux</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-500 dark:text-gray-400">
                Interface des paramètres en cours de développement...
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AdminDashboard;
