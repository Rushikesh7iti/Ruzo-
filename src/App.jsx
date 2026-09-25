import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutVision from './components/AboutVision';
import Industries from './components/Industries';
import Testimonials from './components/Testimonials';
import ContactSection from './components/ContactSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [contactSectionService, setContactSectionService] = useState('');

  // Handle opening modal from various CTAs
  const handleOpenContact = (source = 'general', data = null) => {
    setModalData(data);
    setModalOpen(true);
  };

  // Handle selecting a service from the Services matrix
  const handleSelectService = (serviceTitle) => {
    setModalData({ service: serviceTitle });
    setModalOpen(true);
  };

  // Handle industry inquiry
  const handleIndustryInquire = (industryName) => {
    setModalData({
      service: 'Software Implementations',
      message: `Inquiring about specialized IT solutions and consulting for: ${industryName}`
    });
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 flex flex-col selection:bg-ruzo-cyan/30 selection:text-white">
      {/* Sticky Glass Navbar with "To Connect" branding */}
      <Navbar onOpenContact={() => handleOpenContact('navbar')} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero: Support Consultant for your Business + Ethos ("We Do Not and Will Not Disappoint!") */}
        <Hero onOpenContact={() => handleOpenContact('hero')} />

        {/* 2. Our Services: The 8 core services from Fouratechnology */}
        <Services onSelectService={handleSelectService} />

        {/* 3. About Company: Vision & Mission directly from Fouratechnology */}
        <AboutVision onOpenContact={() => handleOpenContact('about-vision')} />

        {/* 4. Industry Verticals: Banking, Telecom, Government, Oil & Gas, Logistics, Real Estate, Manufacturing */}
        <Industries onIndustryInquire={handleIndustryInquire} />

        {/* 5. Executive Endorsements & Certifications */}
        <Testimonials />

        {/* 6. Contact Us Hub with WhatsApp Direct Connect */}
        <ContactSection prefilledService={contactSectionService} />
      </main>

      {/* Footer matching Fouratechnology useful links and services */}
      <Footer />

      {/* Global Quick Consultation Modal */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialData={modalData}
      />
    </div>
  );
}
