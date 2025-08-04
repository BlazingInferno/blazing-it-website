import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.tsx';
import './index.css';

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

// Debug Auth0 configuration
console.log('Auth0 Domain:', domain);
console.log('Auth0 Client ID:', clientId);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {domain && clientId ? (
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth0Provider>
    ) : (
      <div className="min-h-screen bg-red-50 flex items-center justify-center">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-lg shadow-md p-8 border border-red-200">
            <h1 className="text-2xl font-bold text-red-900 mb-2">Auth0 Configuration Missing</h1>
            <p className="text-red-700 mb-4">
              Please set VITE_AUTH0_DOMAIN and VITE_AUTH0_CLIENT_ID environment variables.
            </p>
            <p className="text-sm text-red-600">
              Check your .env file or Netlify environment variables.
            </p>
          </div>
        </div>
      </div>
    )}
  </StrictMode>
);