// components/AdminProtectedRoute.js
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
 
 

const AdminProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading, user } = useAdminAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      // Redirect to admin login if not authenticated
      router.push('/admin/login');
    }
  }, [isAuthenticated, loading, router]);

  // Show loading spinner while checking authentication
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center space-y-4">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
          <p className="text-gray-600">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  // Don't render children if not authenticated
  if (!isAuthenticated) {
    return null;
  }

  // Optional: Check if user has admin role
  if (user && user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600 mb-8">You don't have permission to access this page.</p>
          <button
            onClick={() => router.push('/')}
            className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700"
          >
            Go to Home
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default AdminProtectedRoute;