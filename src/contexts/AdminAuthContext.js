 // contexts/AdminAuthContext.js
'use client';
import { createContext, useContext, useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { authAPI } from '@/lib/api/endpoints';
 

const AdminAuthContext = createContext();

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};

export const AdminAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Check authentication status on mount
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      if (typeof window !== 'undefined') {
        const token = localStorage.getItem('accessToken');
        const userData = localStorage.getItem('user');
        
        if (token && userData) {
          const parsedUser = JSON.parse(userData);
          
          // Optional: Verify token with backend
          // You can add an API call here to validate the token
          
          setUser(parsedUser);
          setIsAuthenticated(true);
          
          // Set token in cookies for middleware
          document.cookie = `accessToken=${token}; path=/; max-age=86400; secure; samesite=strict`;
        } else {
          setUser(null);
          setIsAuthenticated(false);
          // Clear any stale cookies
          document.cookie = 'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
        }
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setUser(null);
      setIsAuthenticated(false);
      // Clear cookies on error
      document.cookie = 'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    } finally {
      setLoading(false);
    }
  };

  const login = async (credentials) => {
    try {
      const response = await authAPI.loginUser(credentials);
      
      if (response.success && response.data) {
        const { user, accessToken, refreshToken } = response.data;
        
        // Store in localStorage
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('user', JSON.stringify(user));
        
        // Set in cookies for middleware
        document.cookie = `accessToken=${accessToken}; path=/; max-age=86400; secure; samesite=strict`;
        
        // Update state
        setUser(user);
        setIsAuthenticated(true);
        
        return { success: true, data: response.data };
      }
      
      return { success: false, message: 'Login failed' };
    } catch (error) {
      console.error('Login error:', error);
      return { 
        success: false, 
        message: error.message || 'Login failed'
      };
    }
  };

  const logout = async () => {
    try {
      // Call logout API
      await authAPI.logoutUser();
    } catch (error) {
      console.error('Logout API error:', error);
    } finally {
      // Clear storage regardless of API success
      if (typeof window !== 'undefined') {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        
        // Clear cookies
        document.cookie = 'accessToken=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
      }
      
      setUser(null);
      setIsAuthenticated(false);
      
      // Redirect to login
      router.push('/admin/login');
    }
  };

  const value = {
    user,
    loading,
    isAuthenticated,
    login,
    logout,
    checkAuth,
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};