import { ArrowRight, Phone, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ImageWithFallback } from './ImageWithFallback';

interface CtaSectionProps {
  onOpenQuoteModal: () => void;
  onScrollToContact: () => void;
}

export function CtaSection({ onOpenQuoteModal, onScrollToContact }: CtaSectionProps) {
  return (
    <section className="py-16 sm:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Light-Blue Premium Box */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-sky-50 via-sky-100/70 to-blue-50 border border-sky-200/90 shadow-xl p-8 sm:p-12 lg:p-16">
          
          {/* Subtle background ambient reflections */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/60 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-sky-300/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wider uppercase mb-4">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                <span>Uforpliktende tilbud på 1-2-3</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Trenger du profesjonelt renhold? <br />
                <span className="text-sky-700">La 3R RENHOLD AS gjøre jobben.</span>
              </h2>

              <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
                Ta kontakt i dag for en uforpliktende prat eller gratis befaring av dine lokaler. Vi setter sammen en renholdsplan som gir deg perfekt resultat til riktig pris.
              </p>

              {/* Guarantees */}
              <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Gratis og uforpliktende befaring</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Ingen skjulte kostnader</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-600" />
                  <span>Svar innen 2 timer på hverdager</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <button
                  onClick={onOpenQuoteModal}
                  className="px-8 py-4 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 text-base cursor-pointer group"
                >
                  <span>Be om tilbud</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
                  className="px-7 py-4 bg-white/90 hover:bg-white text-slate-800 font-semibold rounded-xl border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all flex items-center justify-center gap-2 text-base"
                >
                  <Phone className="w-4 h-4 text-sky-600" />
                  <span>{COMPANY_INFO.contact.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Image: Professional cleaning worker */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-sm rounded-2xl overflow-hidden shadow-2xl border-4 border-white/80 aspect-[4/5] bg-sky-200">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80"
                  alt="3R RENHOLD AS profesjonell renholder i moderne kontorbygg"
                  fallbackTitle="3R RENHOLD AS"
                  fallbackSubtitle="Kvalitet du kan stole på i hverdagen"
                  className="w-full h-full object-cover"
                />

                {/* Badge card overlay */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-md border border-slate-100 text-center">
                  <p className="text-xs font-bold text-slate-900">3R RENHOLD AS</p>
                  <p className="text-[11px] text-slate-500">Tenorveien 2A, 1859 Slitu</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
