import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.tsx';
import './index.css';

// Debug: Log environment variables to console
console.log('Auth0 Domain:', import.meta.env.VITE_AUTH0_DOMAIN);
console.log('Auth0 Client ID:', import.meta.env.VITE_AUTH0_CLIENT_ID);
console.log('All env vars:', import.meta.env);

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

if (!domain || !clientId) {
  console.error('Missing Auth0 configuration!');
  console.error('Domain:', domain);
  console.error('Client ID:', clientId);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain={domain || 'missing-domain'}
        clientId={clientId || 'missing-client-id'}
        authorizationParams={{
          redirect_uri: window.location.origin
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>
);