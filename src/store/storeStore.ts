
import { create } from 'zustand';
import { storeAPI, Product } from '../api/store';

interface StoreState {
  products: Product[];
  selectedProduct: Product | null;
  cart: { product: Product; quantity: number }[];
  isLoading: boolean;
  error: string | null;
  
  fetchProducts: () => Promise<void>;
  fetchProductById: (id: string) => Promise<void>;
  fetchProductsByCategory: (category: string) => Promise<void>;
  searchProducts: (query: string) => Promise<void>;
  
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useStoreStore = create<StoreState>((set, get) => ({
  products: [],
  selectedProduct: null,
  cart: [],
  isLoading: false,
  error: null,
  
  fetchProducts: async () => {
    set({ isLoading: true });
    try {
      const products = await storeAPI.getAllProducts();
      set({ products, isLoading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch products', 
        isLoading: false 
      });
    }
  },
  
  fetchProductById: async (id: string) => {
    set({ isLoading: true });
    try {
      const product = await storeAPI.getProductById(id);
      set({ selectedProduct: product, isLoading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch product', 
        isLoading: false 
      });
    }
  },
  
  fetchProductsByCategory: async (category: string) => {
    set({ isLoading: true });
    try {
      const products = await storeAPI.getProductsByCategory(category);
      set({ products, isLoading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to fetch products by category', 
        isLoading: false 
      });
    }
  },
  
  searchProducts: async (query: string) => {
    set({ isLoading: true });
    try {
      const products = await storeAPI.searchProducts(query);
      set({ products, isLoading: false });
    } catch (error) {
      set({ 
        error: error instanceof Error ? error.message : 'Failed to search products', 
        isLoading: false 
      });
    }
  },
  
  addToCart: (product: Product, quantity = 1) => {
    const cart = [...get().cart];
    const existingItem = cart.find(item => item.product.id === product.id);
    
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ product, quantity });
    }
    
    set({ cart });
  },
  
  removeFromCart: (productId: string) => {
    const cart = get().cart.filter(item => item.product.id !== productId);
    set({ cart });
  },
  
  updateCartItemQuantity: (productId: string, quantity: number) => {
    const cart = get().cart.map(item => 
      item.product.id === productId ? { ...item, quantity } : item
    );
    set({ cart });
  },
  
  clearCart: () => set({ cart: [] })
}));
