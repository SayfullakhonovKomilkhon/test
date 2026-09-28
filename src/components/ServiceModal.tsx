import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { ServiceItem } from '../data/companyData';
import { ImageWithFallback } from './ImageWithFallback';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceTitle: string) => void;
}

export function ServiceModal({ service, onClose, onSelectForQuote }: ServiceModalProps) {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-100">
          <ImageWithFallback
            src={service.imageUrl}
            alt={service.title}
            fallbackTitle={service.title}
            fallbackSubtitle={service.tagline}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-slate-800 flex items-center justify-center transition-colors shadow-md focus:outline-none"
            aria-label="Lukk detaljer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title overlay */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs font-semibold uppercase tracking-wider text-sky-300 block mb-1">
              {service.badgeText}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold">{service.title}</h3>
            <p className="text-sm text-slate-200 mt-0.5">{service.tagline}</p>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Om tjenesten
            </h4>
            <p className="text-base text-slate-700 leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Scope / What is included */}
          <div className="p-4 rounded-xl bg-sky-50/60 border border-sky-100/80">
            <h4 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-sky-600" />
              Hva inngår i tjenesten:
            </h4>
            <ul className="space-y-2.5">
              {service.included.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Ideal for note */}
          <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
            <span>
              <strong className="text-slate-700">Passer optimalt for:</strong> {service.idealFor}
            </span>
          </div>

          {/* Bottom actions */}
          <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-4 border-t border-slate-100">
            <button
              onClick={onClose}
              className="w-full sm:w-auto px-5 py-2.5 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
            >
              Lukk
            </button>
            <button
              onClick={() => {
                onSelectForQuote(service.title);
                onClose();
              }}
              className="w-full sm:w-auto px-6 py-2.5 text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm hover:shadow transition-all flex items-center justify-center gap-2"
            >
              <span>Be om tilbud på {service.title}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
