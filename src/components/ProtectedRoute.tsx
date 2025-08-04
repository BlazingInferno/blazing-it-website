import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';
import { useAuth0 } from '@auth0/auth0-react';

// Define the type for the props that this component will accept
interface ProtectedRouteProps {
  component: React.ComponentType<object>;
}

// This component will wrap any route you want to protect
// It will automatically redirect unauthenticated users to the login page
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component }) => {
  const { isLoading, isAuthenticated, loginWithRedirect } = useAuth0();

  // Show loading while Auth0 is initializing
  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Authenticating...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, trigger login
  if (!isAuthenticated) {
    loginWithRedirect({
      appState: { returnTo: window.location.pathname }
    });
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  // If authenticated, render the protected component
  const Component = withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading admin...</p>
        </div>
      </div>
    )
  });

  return <Component />;
};