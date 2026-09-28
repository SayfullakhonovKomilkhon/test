import { useState } from 'react';
import { Calculator, ArrowRight, CheckCircle2, Building, Home, Store, Sparkles } from 'lucide-react';
import { SERVICES } from '../data/companyData';

interface PriceCalculatorProps {
  onProceedWithEstimate: (details: {
    propertyType: string;
    area: number;
    service: string;
    frequency: string;
    estimatedPrice: number;
  }) => void;
}

export function PriceCalculator({ onProceedWithEstimate }: PriceCalculatorProps) {
  const [propertyType, setPropertyType] = useState<'kontor' | 'butikk' | 'sameie' | 'bolig'>('kontor');
  const [area, setArea] = useState<number>(150);
  const [selectedService, setSelectedService] = useState<string>('Bedriftsrenhold');
  const [frequency, setFrequency] = useState<'daglig' | 'ukentlig' | '14dager' | 'engangs'>('ukentlig');

  // Realistic transparent Norwegian commercial cleaning baseline calculation
  const calculatePrice = () => {
    let ratePerSqm = 18; // kr per m² basis

    if (propertyType === 'kontor') ratePerSqm = 16;
    if (propertyType === 'butikk') ratePerSqm = 19;
    if (propertyType === 'sameie') ratePerSqm = 14;
    if (propertyType === 'bolig') ratePerSqm = 22;

    if (selectedService === 'Hovedvask') ratePerSqm *= 2.2;
    if (selectedService === 'Flyttevask') ratePerSqm *= 2.6;
    if (selectedService === 'Vindusvask') ratePerSqm *= 0.9;
    if (selectedService === 'Spesialrengjøring') ratePerSqm *= 2.0;

    let base = Math.round(area * ratePerSqm);
    // Minimum charge threshold
    if (base < 1400) base = 1400;

    // Frequency discount factor per visit
    if (frequency === 'daglig') base = Math.round(base * 0.75);
    else if (frequency === 'ukentlig') base = Math.round(base * 0.9);

    return base;
  };

  const estimatedPrice = calculatePrice();

  const propertyTypes = [
    { id: 'kontor', label: 'Kontor & Næring', icon: Building },
    { id: 'butikk', label: 'Butikk & Handel', icon: Store },
    { id: 'sameie', label: 'Borettslag & Sameie', icon: Building },
    { id: 'bolig', label: 'Privat Bolig', icon: Home },
  ] as const;

  const frequencies = [
    { id: 'daglig', label: 'Daglig (5 dager/uke)' },
    { id: 'ukentlig', label: '1–2 ganger per uke' },
    { id: '14dager', label: 'Hver 14. dag' },
    { id: 'engangs', label: 'Enkeltstående oppdrag' },
  ] as const;

  return (
    <section className="py-20 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-2">
            <Calculator className="w-4 h-4 text-sky-600" />
            <span>Prisberegner</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Beregn veiledende renholdspris
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Få et raskt estimat tilpasset lokalenes type, størrelse og ønsket renholdsintervall.
          </p>
        </div>

        {/* Calculator Interface Box */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* 1. Property Type */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  1. Type lokale
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {propertyTypes.map((pt) => {
                    const Icon = pt.icon;
                    return (
                      <button
                        key={pt.id}
                        type="button"
                        onClick={() => setPropertyType(pt.id)}
                        className={`p-3 rounded-xl border text-xs font-semibold flex items-center gap-2.5 transition-all cursor-pointer ${
                          propertyType === pt.id
                            ? 'bg-sky-50 border-sky-400 text-sky-900 shadow-xs'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${propertyType === pt.id ? 'text-sky-600' : 'text-slate-400'}`} />
                        <span className="truncate">{pt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 2. Area Slider */}
              <div>
                <div className="flex items-center justify-between text-xs font-semibold mb-2">
                  <span className="uppercase tracking-wider text-slate-500">2. Areal i kvadratmeter</span>
                  <span className="text-sky-700 text-sm font-bold font-mono">{area} m²</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="1200"
                  step="10"
                  value={area}
                  onChange={(e) => setArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-sky-600"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>30 m²</span>
                  <span>300 m²</span>
                  <span>600 m²</span>
                  <span>1200+ m²</span>
                </div>
              </div>

              {/* 3. Service Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  3. Ønsket tjeneste
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm font-medium text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                >
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title} ({s.tagline})
                    </option>
                  ))}
                </select>
              </div>

              {/* 4. Frequency */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
                  4. Hyppighet
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {frequencies.map((freq) => (
                    <button
                      key={freq.id}
                      type="button"
                      onClick={() => setFrequency(freq.id)}
                      className={`p-2.5 rounded-lg border text-xs font-medium text-left transition-all cursor-pointer ${
                        frequency === freq.id
                          ? 'bg-sky-50 border-sky-400 text-sky-900 font-semibold'
                          : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                      }`}
                    >
                      {freq.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Output Summary Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-sky-900 via-slate-900 to-sky-950 text-white rounded-xl p-6 sm:p-7 flex flex-col justify-between shadow-xl">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 text-[11px] font-semibold text-sky-200 mb-4">
                  <Sparkles className="w-3.5 h-3.5 text-sky-300" />
                  <span>Veiledende overslag</span>
                </div>

                <div className="text-xs text-sky-200/90 mb-1">
                  Estimert pris fra ca:
                </div>
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight tabular-nums font-mono">
                  {estimatedPrice.toLocaleString('no-NO')} <span className="text-lg font-sans font-normal text-sky-300">kr</span>
                </div>
                <div className="text-[11px] text-slate-300 mt-1">
                  Eks. mva · Per renholdsbesøk
                </div>

                <div className="mt-6 space-y-2 pt-4 border-t border-white/15 text-xs text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Inkluderer alt forbruksutstyr & midler</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Ingen oppsigelsestid første måned</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                    <span>Endelig fastpris etter gratis befaring</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  onClick={() =>
                    onProceedWithEstimate({
                      propertyType,
                      area,
                      service: selectedService,
                      frequency,
                      estimatedPrice,
                    })
                  }
                  className="w-full py-3.5 bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer"
                >
                  <span>Få fast tilbud basert på valgene</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[10px] text-slate-400 text-center mt-2">
                  100% uforpliktende · Rask respons
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
