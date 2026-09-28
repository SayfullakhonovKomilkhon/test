import { useState, useEffect } from 'react';
import { Sparkles, Phone, MessageSquareQuote, ArrowUp } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FloatingWidgetProps {
  onOpenQuoteModal: () => void;
}

export function FloatingWidget({ onOpenQuoteModal }: FloatingWidgetProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Hurtigkontakt og snarveier"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2.5 animate-fadeIn"
    >
      {/* Scroll to Top button */}
      <button
        onClick={scrollToTop}
        className="w-10 h-10 rounded-full bg-white/90 hover:bg-white text-slate-700 hover:text-slate-900 border border-slate-200/90 shadow-md flex items-center justify-center transition-all duration-200 cursor-pointer"
        aria-label="Til toppen av siden"
        title="Til toppen"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      {/* Floating Call Button */}
      <a
        href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
        className="hidden sm:flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white/95 hover:bg-white text-slate-800 text-xs font-semibold border border-slate-200/90 shadow-md hover:shadow-lg transition-all"
        title="Ring oss"
      >
        <Phone className="w-3.5 h-3.5 text-sky-600" />
        <span className="font-mono">{COMPANY_INFO.contact.phone}</span>
      </a>

      {/* Primary Floating 'Få et tilbud' Pill Action */}
      <button
        onClick={onOpenQuoteModal}
        className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white text-xs sm:text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-200 cursor-pointer group"
      >
        <Sparkles className="w-4 h-4 text-sky-200 group-hover:rotate-12 transition-transform" />
        <span className="whitespace-nowrap">Få et tilbud</span>
      </button>
    </aside>
  );
}
