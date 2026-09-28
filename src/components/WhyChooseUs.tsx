import { Shield, Sparkles, Clock, Sliders, CheckCircle2, FileCheck, ArrowRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface WhyChooseUsProps {
  onOpenQuoteModal: () => void;
}

export function WhyChooseUs({ onOpenQuoteModal }: WhyChooseUsProps) {
  const pillars = [
    {
      id: 'profesjonell-service',
      title: 'Profesjonell service',
      desc: 'Grundig opplært personale med godkjente HMS-kort og oppdaterte renholdsmetoder. Vi opptrer med diskresjon, respekt og presisjon i alle oppdrag.',
      highlight: 'Faste renholdere med ID',
      icon: Shield,
    },
    {
      id: 'hoy-kvalitet',
      title: 'Høy kvalitet',
      desc: 'Kompromissløs nøyaktighet i hvert hjørne. Vi benytter profesjonelle, svanemerkede rengjøringsmidler og avansert utstyr som bevarer inventarets levetid.',
      highlight: 'Miljøvennlige kjemikalier',
      icon: Sparkles,
    },
    {
      id: 'palitelighet',
      title: 'Pålitelighet',
      desc: 'Forutsigbarhet er en kjerneverdi. Vi overholder inngåtte tidsfrister, leverer til avtalt tid og har rask responstid dersom du har akutte behov.',
      highlight: '100% punktlighet og faste avtaler',
      icon: Clock,
    },
    {
      id: 'tilpassede-losninger',
      title: 'Tilpassede løsninger',
      desc: 'Ingen lokaler er like. Vi designer renholdet etter dine eksakte bruksmønstre – enten du trenger daglig kontorvask, turnusvask eller periodisk stornedvask.',
      highlight: 'Skreddersydd uten binding',
      icon: Sliders,
    },
  ];

  return (
    <section id="hvorfor-oss" className="py-20 sm:py-28 bg-gradient-to-b from-white via-sky-50/50 to-white relative overflow-hidden">
      {/* Ambient background rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-3">
            <CheckCircle2 className="w-4 h-4 text-sky-600" />
            <span>Verdier som teller</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Hvorfor velge 3R RENHOLD AS?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            I en bransje med mange aktører skiller vi oss ut gjennom ryddighet, godkjenninger og et genuint engasjement for kundens lokaler.
          </p>
        </div>

        {/* 4 Large Clean Scandinavian Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                className="relative bg-white/90 backdrop-blur-md rounded-2xl p-8 sm:p-10 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-sky-300 transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Subtle top indicator */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-sky-800/60 bg-sky-50 px-2.5 py-1 rounded">
                    0{idx + 1}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-sky-800 transition-colors mb-3">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {pillar.desc}
                  </p>
                </div>

                {/* Bottom Highlight */}
                <div className="pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-sky-700">
                  <CheckCircle2 className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>{pillar.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Scandinavian Trust Callout Footer */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
              <FileCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Offisielt godkjent renholdsvirksomhet
              </h4>
              <p className="text-xs sm:text-sm text-slate-600">
                Registrert i Renholdsregisteret (Arbeidstilsynet) · Org.nr {COMPANY_INFO.orgNumber}
              </p>
            </div>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="w-full lg:w-auto px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg text-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer shadow-sm"
          >
            <span>Be om uforpliktende befaring</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
