import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

// Define the type for the props that this component will accept
interface ProtectedRouteProps {
  component: React.ComponentType<any>;
}

// This component will wrap any route you want to protect
// It will automatically redirect unauthenticated users to the login page
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    // A loading indicator to show while redirecting
    onRedirecting: () => (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    )
  });

  return <Component />;
};