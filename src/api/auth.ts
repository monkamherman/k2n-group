
// API endpoints for authentication

interface User {
  id: string;
  username: string;
  email: string;
  role: 'user' | 'admin' | 'blogger' | 'technician';
  avatar?: string;
  firstName?: string;
  lastName?: string;
  phone?: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

// Mock users database
const users: User[] = [
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
  },
  {
    id: '4',
    username: 'user',
    email: 'user@k2n.com',
    role: 'user',
    avatar: 'https://i.pravatar.cc/150?u=user',
    firstName: 'Regular',
    lastName: 'User',
    phone: '+237 655 901 234'
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const authAPI = {
  login: async (credentials: LoginCredentials) => {
    await delay(500); // Simulate network delay
    
    const user = users.find(u => 
      u.email === credentials.email && 
      // In a real app, you would hash the password
      // This is just for demonstration
      credentials.password === 'password'
    );
    
    if (user) {
      return { user, token: `fake-jwt-token-${user.id}` };
    }
    
    throw new Error('Invalid email or password');
  },
  
  register: async (data: RegisterData) => {
    await delay(500); // Simulate network delay
    
    // Check if user already exists
    if (users.some(u => u.email === data.email)) {
      throw new Error('User already exists with this email');
    }
    
    // Create new user (in a real app, you would save to a database)
    const newUser: User = {
      id: (users.length + 1).toString(),
      username: data.username,
      email: data.email,
      role: 'user',
    };
    
    // Add to mock database
    users.push(newUser);
    
    return { user: newUser, token: `fake-jwt-token-${newUser.id}` };
  },
  
  getCurrentUser: async (token: string) => {
    await delay(200); // Simulate network delay
    
    if (!token) throw new Error('No token provided');
    
    // Extract user ID from token (very simplified)
    const userId = token.replace('fake-jwt-token-', '');
    const user = users.find(u => u.id === userId);
    
    if (!user) throw new Error('User not found');
    
    return user;
  },
  
  logout: async () => {
    await delay(200); // Simulate network delay
    return { success: true };
  }
};

export type { User, LoginCredentials, RegisterData };
