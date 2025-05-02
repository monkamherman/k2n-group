
// API endpoints for store

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: string;
  stock: number;
}

// Mock product database
const products: Product[] = [
  {
    id: '1',
    name: 'Consultation Service',
    description: 'Professional business consultation for startups and established companies',
    price: 200,
    imageUrl: '/placeholder.svg',
    category: 'services',
    stock: 10,
  },
  {
    id: '2',
    name: 'Tech Support Package',
    description: 'Technical support for your business infrastructure',
    price: 150,
    imageUrl: '/placeholder.svg',
    category: 'services',
    stock: 20,
  },
  {
    id: '3',
    name: 'Business Analysis',
    description: 'In-depth analysis of your business performance and recommendations',
    price: 300,
    imageUrl: '/placeholder.svg',
    category: 'services',
    stock: 5,
  },
  {
    id: '4',
    name: 'Website Development',
    description: 'Custom website development for your business',
    price: 500,
    imageUrl: '/placeholder.svg',
    category: 'products',
    stock: 15,
  },
  {
    id: '5',
    name: 'SEO Optimization',
    description: 'Improve your website visibility with our SEO services',
    price: 250,
    imageUrl: '/placeholder.svg',
    category: 'services',
    stock: 30,
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const storeAPI = {
  getAllProducts: async () => {
    await delay(500); // Simulate network delay
    return products;
  },
  
  getProductById: async (id: string) => {
    await delay(300); // Simulate network delay
    const product = products.find(p => p.id === id);
    
    if (!product) {
      throw new Error('Product not found');
    }
    
    return product;
  },
  
  getProductsByCategory: async (category: string) => {
    await delay(400); // Simulate network delay
    return products.filter(p => p.category === category);
  },
  
  searchProducts: async (query: string) => {
    await delay(400); // Simulate network delay
    
    // Simple search implementation
    const lowercaseQuery = query.toLowerCase();
    return products.filter(
      p => p.name.toLowerCase().includes(lowercaseQuery) ||
           p.description.toLowerCase().includes(lowercaseQuery)
    );
  }
};

export type { Product };
