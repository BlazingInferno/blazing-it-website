import React from 'react';
import { withAuthenticationRequired } from '@auth0/auth0-react';

// Define the type for the props that this component will accept
interface ProtectedRouteProps {
  component: React.ComponentType<object>;
}

// This component will wrap any route you want to protect
// It will automatically redirect unauthenticated users to the login page
export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component }) => {
  const Component = withAuthenticationRequired(component, {
    // A loading indicator to show while redirecting
    onRedirecting: () => <div>Loading...</div>,
  });

  return <Component />;
};