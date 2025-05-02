
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { authAPI, User } from '../api/auth';

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;
  
  login: (email: string, password: string) => Promise<void>;
  register: (username: string, email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      token: null,
      isLoading: false,
      error: null,
      
      login: async (email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const response = await authAPI.login({ email, password });
          set({ user: response.user, token: response.token, isLoading: false });
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Login failed', 
            isLoading: false 
          });
        }
      },
      
      register: async (username: string, email: string, password: string) => {
        set({ isLoading: true, error: null });
        try {
          const response = await authAPI.register({ username, email, password });
          set({ user: response.user, token: response.token, isLoading: false });
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Registration failed', 
            isLoading: false 
          });
        }
      },
      
      logout: async () => {
        set({ isLoading: true });
        try {
          await authAPI.logout();
          set({ user: null, token: null, isLoading: false });
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Logout failed', 
            isLoading: false 
          });
        }
      },
      
      checkAuth: async () => {
        const token = useAuthStore.getState().token;
        if (!token) return;
        
        set({ isLoading: true });
        try {
          const user = await authAPI.getCurrentUser(token);
          set({ user, isLoading: false });
        } catch (error) {
          set({ 
            user: null, 
            token: null,
            error: error instanceof Error ? error.message : 'Authentication failed', 
            isLoading: false 
          });
        }
      },
    }),
    {
      name: 'k2n-auth-storage',
    }
  )
);
