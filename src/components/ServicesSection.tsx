import { useState } from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/companyData';
import { ImageWithFallback } from './ImageWithFallback';
import { ServiceModal } from './ServiceModal';

interface ServicesSectionProps {
  onOpenQuoteModal: (preselectedService?: string) => void;
}

export function ServicesSection({ onOpenQuoteModal }: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="tjenester" className="py-20 sm:py-28 bg-slate-50/50 relative overflow-hidden">
      {/* Decorative ambient elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-3">
              <Sparkles className="w-4 h-4 text-sky-600" />
              <span>Våre tjenester</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Skreddersydde renholdstjenester av høyeste standard
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Vi leverer alt fra kontinuerlig daglig renhold i store næringsbygg til spesialiserte enkeltoppdrag for bedrifter og private i hele regionen.
            </p>
          </div>

          <div className="shrink-0">
            <button
              onClick={() => onOpenQuoteModal()}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-sky-700 bg-sky-50 hover:bg-sky-100 border border-sky-200 rounded-lg transition-colors shadow-xs"
            >
              <span>Se alle tilbud & priser</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 6 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <ImageWithFallback
                  src={service.imageUrl}
                  alt={service.title}
                  fallbackTitle={service.title}
                  fallbackSubtitle={service.tagline}
                  badge={service.badgeText}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badge without pill clutter */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-semibold text-sky-800 shadow-sm border border-slate-100">
                  {service.badgeText}
                </div>

                <div className="absolute bottom-3 right-3 text-xs font-mono text-white/80">
                  0{index + 1}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-sky-600 font-medium mt-1 mb-3">
                    {service.tagline}
                  </p>
                  <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-4">
                    {service.shortDesc}
                  </p>

                  {/* Highlights list */}
                  <div className="space-y-1.5 pt-3 border-t border-slate-100 mb-5">
                    {service.included.slice(0, 2).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 flex items-center justify-between border-t border-slate-100/80">
                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 hover:text-sky-800 transition-colors group/btn cursor-pointer"
                  >
                    <span>Les mer</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>

                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="px-3 py-1.5 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-sky-50 hover:text-sky-700 rounded-md transition-colors border border-slate-200"
                  >
                    Få tilbud
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForQuote={(title) => onOpenQuoteModal(title)}
      />
    </section>
  );
}
