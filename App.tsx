import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConceptSection from './components/ConceptSection';
import Services from './components/Services';
import SpaceAndPartners from './components/SpaceAndPartners';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleLocationChange);

    // Dynamic link interceptor for relative URLs
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor) {
        const href = anchor.getAttribute('href');
        if (href && href.startsWith('/')) {
          e.preventDefault();
          window.history.pushState({}, '', href);
          // Dispatch popstate so listener triggers
          const navEvent = new PopStateEvent('popstate');
          window.dispatchEvent(navEvent);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);

    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      document.removeEventListener('click', handleLinkClick);
    };
  }, []);

  const isPrivacyPage = currentPath === '/politica-de-privacidade';

  return (
    <div className="min-h-screen bg-brand-sand font-sans text-stone-800 selection:bg-brand-teal selection:text-white">
      <Navbar />
      {isPrivacyPage ? (
        <PrivacyPolicy />
      ) : (
        <>
          <Hero />
          <ConceptSection />
          <Services />
          <SpaceAndPartners />  {/* O carrossel está dentro deste componente */}
        </>
      )}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
