import React from 'react';
import { useEffect } from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Cybersecurity from './pages/services/Cybersecurity';
import CloudSolutions from './pages/services/CloudSolutions';
import ITConsulting from './pages/services/ITConsulting';
import DataBackup from './pages/services/DataBackup';
import ITSupport from './pages/services/ITSupport';
import Projects from './pages/Projects';
import Admin from './pages/Admin';
import GoogleWorkspaceToMicrosoft365 from './pages/blog/GoogleWorkspaceToMicrosoft365';
import DynamicBlogPost from './pages/blog/DynamicBlogPost';
import Leeds from './pages/Leeds';
import { ProtectedRoute } from './components/ProtectedRoute';

function App() {
  const { isAuthenticated, user, isLoading, handleRedirectCallback } = useAuth0();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.log('App - Auth0 state:', { isAuthenticated, isLoading, user: user?.email });
    
    // Handle Auth0 redirect callback
    const handleAuth0Redirect = async () => {
      const urlParams = new URLSearchParams(location.search);
      const hasAuthCode = urlParams.has('code') && urlParams.has('state');
      
      if (hasAuthCode && !isLoading) {
        console.log('Auth0 callback detected, processing...');
        try {
          const result = await handleRedirectCallback();
          console.log('Auth0 callback result:', result);
          
          // Navigate to intended destination or admin page
          const returnTo = result?.appState?.returnTo || '/posts';
          console.log('Navigating to:', returnTo);
          navigate(returnTo, { replace: true });
        } catch (error) {
          console.error('Auth0 callback error:', error);
          navigate('/', { replace: true });
        }
      }
    };
    
    if (isAuthenticated && !isLoading) {
      handleAuth0Redirect();
    }
  }, [isAuthenticated, isLoading, user, location.search, navigate, handleRedirectCallback]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/cybersecurity" element={<Cybersecurity />} />
          <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
          <Route path="/services/it-consulting" element={<ITConsulting />} />
          <Route path="/services/data-backup" element={<DataBackup />} />
          <Route path="/services/it-support" element={<ITSupport />} />
          <Route path="/projects" element={<Projects />} />
          
          {/* Admin route - protected with Auth0 */}
          <Route path="/posts" element={<ProtectedRoute component={Admin} />} />
          
          <Route path="/blog/google-workspace-to-microsoft-365" element={<GoogleWorkspaceToMicrosoft365 />} />
          <Route path="/blog/:slug" element={<DynamicBlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/leeds" element={<Leeds />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;