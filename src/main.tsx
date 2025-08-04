import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App.tsx';
import './index.css';

// Debug: Log environment variables to console
console.log('🔍 DEBUG: Auth0 Domain:', import.meta.env.VITE_AUTH0_DOMAIN);
console.log('🔍 DEBUG: Auth0 Client ID:', import.meta.env.VITE_AUTH0_CLIENT_ID);
console.log('🔍 DEBUG: All env vars:', import.meta.env);
console.log('🔍 DEBUG: NODE_ENV:', import.meta.env.MODE);

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

console.log('🔍 DEBUG: Extracted domain:', domain);
console.log('🔍 DEBUG: Extracted clientId:', clientId);

if (!domain || !clientId || domain === 'missing-domain' || clientId === 'missing-client-id') {
  console.error('❌ Missing Auth0 configuration!');
  console.error('❌ Domain:', domain);
  console.error('❌ Client ID:', clientId);
  console.error('❌ Please check your .env file');
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