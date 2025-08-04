import React from 'react';
import { Routes, Route } from 'react-router-dom';
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
// Correct the import statement by adding the .tsx extension
import { ProtectedRoute } from './components/ProtectedRoute.tsx'; 

function App() {
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
          <Route path="/posts" element={<Admin />} />
          
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