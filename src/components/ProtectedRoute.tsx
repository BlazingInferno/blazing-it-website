import React from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

interface ProtectedRouteProps {
  component: React.ComponentType<any>;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component: Component }) => {
  const { isAuthenticated, isLoading, loginWithRedirect, error } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log('ProtectedRoute - isAuthenticated:', isAuthenticated);
    console.log('ProtectedRoute - isLoading:', isLoading);
    console.log('ProtectedRoute - current path:', location.pathname);
    console.log('ProtectedRoute - error:', error);
  }, [isAuthenticated, isLoading, location.pathname, error]);

  // Show loading while Auth0 is initializing
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading authentication...</p>
        </div>
      </div>
    );
  }

  // Show error if Auth0 has an error
  if (error) {
    return (
      <div className="min-h-screen bg-red-50 flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-lg shadow-md p-8 border border-red-200">
            <h1 className="text-2xl font-bold text-red-900 mb-2">Authentication Error</h1>
            <p className="text-red-700 mb-4">{error.message}</p>
            <button
              onClick={() => loginWithRedirect()}
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If not authenticated, trigger login
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Admin Access Required</h1>
            <p className="text-gray-600 mb-6">You need to log in to access the admin dashboard.</p>
            <button
              onClick={() => loginWithRedirect({
                appState: { returnTo: '/posts' }
              })}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Log In with Auth0
            </button>
          </div>
        </div>
      </div>
    );
  }

  // If authenticated, render the protected component
  return <Component />;
};