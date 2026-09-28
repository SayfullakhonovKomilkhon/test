/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustStats } from './components/TrustStats';
import { ServicesSection } from './components/ServicesSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { GallerySection } from './components/GallerySection';
import { PriceCalculator } from './components/PriceCalculator';
import { AboutSection } from './components/AboutSection';
import { CtaSection } from './components/CtaSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { FloatingWidget } from './components/FloatingWidget';
import { ScrollProgress } from './components/ScrollProgress';

export default function App() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('Bedriftsrenhold');
  const [contactPrefillMessage, setContactPrefillMessage] = useState<string>('');

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) {
      setPreselectedService(serviceName);
    }
    setQuoteModalOpen(true);
  };

  const handleScrollToContact = () => {
    const contactEl = document.getElementById('kontakt');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProceedWithEstimate = (details: {
    propertyType: string;
    area: number;
    service: string;
    frequency: string;
    estimatedPrice: number;
  }) => {
    const msg = `Forespørsel basert på kalkulator:\n- Lokale: ${details.propertyType}\n- Areal: ${details.area} m²\n- Tjeneste: ${details.service}\n- Hyppighet: ${details.frequency}\n- Estimert pris: ca. ${details.estimatedPrice.toLocaleString('no-NO')} kr eks. mva per gang.`;
    setPreselectedService(details.service);
    setContactPrefillMessage(msg);
    handleScrollToContact();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col relative selection:bg-sky-100 selection:text-sky-900">
      {/* Micro scroll progress bar */}
      <ScrollProgress />

      {/* Sticky Header */}
      <Header onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* HERO Screen */}
        <Hero
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onScrollToContact={handleScrollToContact}
        />

        {/* Trust Metrics Block */}
        <TrustStats />

        {/* Services Section */}
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Why Choose 3R RENHOLD AS */}
        <WhyChooseUs onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* Asymmetrical Gallery */}
        <GallerySection />

        {/* Interactive Price Calculator */}
        <PriceCalculator onProceedWithEstimate={handleProceedWithEstimate} />

        {/* About 3R RENHOLD AS */}
        <AboutSection />

        {/* High Impact CTA Banner */}
        <CtaSection
          onOpenQuoteModal={() => handleOpenQuoteModal()}
          onScrollToContact={handleScrollToContact}
        />

        {/* Contact Section with Interactive Map */}
        <ContactSection
          prefilledService={preselectedService}
          prefilledMessage={contactPrefillMessage}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Button */}
      <FloatingWidget onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Quote Request Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preselectedService={preselectedService}
      />
    </div>
  );
}
