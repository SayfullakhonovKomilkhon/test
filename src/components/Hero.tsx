import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Building, MapPin } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ImageWithFallback } from './ImageWithFallback';

interface HeroProps {
  onOpenQuoteModal: () => void;
  onScrollToContact: () => void;
}

export function Hero({ onOpenQuoteModal, onScrollToContact }: HeroProps) {
  return (
    <section id="hjem" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-white">
      {/* Subtle Scandinavian ambient atmospheric light shapes */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-sky-100/50 via-blue-50/40 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Trust badge kicker without pills - unboxed metadata */}
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-800 tracking-wider uppercase mb-5">
              <span className="inline-flex items-center gap-1.5 text-sky-700">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                Godkjent Renholdsbedrift
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal">Org.nr {COMPANY_INFO.orgNumber}</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-slate-500 font-normal">Etablert {COMPANY_INFO.foundedYear}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12] mb-6">
              Profesjonelt renhold. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800">
                Rent. Trygt. Profesjonelt.
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mb-8">
              {COMPANY_INFO.subheading} Vi leverer pålitelig kvalitetsrenhold til kontorer, næringseiendom og private hjem med kompromissløst fokus på detaljer.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenQuoteModal}
                className="px-7 py-3.5 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2.5 text-base cursor-pointer group"
              >
                <span>Få et tilbud</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onScrollToContact}
                className="px-7 py-3.5 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 font-semibold rounded-lg border border-slate-200 shadow-xs hover:border-slate-300 transition-all duration-200 flex items-center justify-center text-base cursor-pointer"
              >
                Kontakt oss
              </button>
            </div>

            {/* Verified Trust Points Bar */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Godkjent av Arbeidstilsynet</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Faste, opplærte renholdere</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
                <span>Slitu, Indre Østfold & omegn</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset with soft glow and glass elements */}
          <div className="lg:col-span-5 relative">
            {/* Ambient soft blue glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/25 via-blue-500/20 to-sky-200/20 rounded-3xl blur-2xl transform scale-105 pointer-events-none" />

            <div className="relative rounded-2xl p-2 bg-white/60 backdrop-blur-md border border-white/80 shadow-2xl">
              <div className="relative rounded-xl overflow-hidden aspect-[4/3] sm:aspect-[1/1] lg:aspect-[4/5] shadow-inner">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"
                  alt="3R RENHOLD AS profesjonell renholdsmedarbeider utfører overflatedesinfeksjon og renhold i moderne kontorlokaler"
                  fallbackTitle="3R RENHOLD AS"
                  fallbackSubtitle="Offentlig godkjent renhold for bedrifter og private"
                  className="w-full h-full object-cover"
                />

                {/* Subtle gradient overlay at bottom for card readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent pointer-events-none" />

                {/* Floating Glass Element 1: Official Approval Card */}
                <div className="absolute top-4 left-4 right-4 sm:right-auto bg-white/90 backdrop-blur-md rounded-xl p-3 shadow-lg border border-white/80 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 flex items-center justify-center text-sky-700 shrink-0">
                    <ShieldCheck className="w-6 h-6 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 leading-tight">Godkjent Renholdsvirksomhet</p>
                    <p className="text-[11px] text-slate-500 leading-snug">Registrert hos Arbeidstilsynet</p>
                  </div>
                </div>

                {/* Floating Glass Element 2: Quality & Region pill at bottom */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md rounded-xl p-3.5 shadow-lg border border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600">
                      <Sparkles className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-slate-900">100% Fornøydgaranti</p>
                      <p className="text-[11px] text-slate-500">Skreddersydd etter dine behov</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-slate-400 block">BASE</span>
                    <span className="text-xs font-semibold text-slate-700">Slitu, Norge</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tiny accent decoration: floating mini metric */}
            <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-white rounded-xl p-3 shadow-xl border border-slate-200/80 items-center gap-3 z-10">
              <div className="w-9 h-9 rounded-lg bg-sky-600 text-white flex items-center justify-center font-bold text-sm">
                3R
              </div>
              <div>
                <p className="text-xs font-bold text-slate-900">Kvalitet & Presisjon</p>
                <p className="text-[11px] text-slate-500">Fast personell · Avtalt tid</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
