import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ConceptSection from './components/ConceptSection';
import Services from './components/Services';
import SpaceAndPartners from './components/SpaceAndPartners';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="min-h-screen bg-brand-sand font-sans text-stone-800 selection:bg-brand-teal selection:text-white">
      <Navbar />
      <Hero />
      <ConceptSection />
      <Services />
      <SpaceAndPartners />  {/* O carrossel está dentro deste componente */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;