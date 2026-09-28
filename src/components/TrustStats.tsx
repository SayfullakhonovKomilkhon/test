import { ShieldCheck, Calendar, Users, Award, Building2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export function TrustStats() {
  const stats = [
    {
      value: COMPANY_INFO.foundedYear,
      label: 'Etablert år',
      subtext: 'Solid erfaring i bransjen',
      icon: Calendar,
    },
    {
      value: `${COMPANY_INFO.employeeCount}`,
      label: 'Ansatte',
      subtext: 'Kvalifiserte renholdere',
      icon: Users,
    },
    {
      value: '100%',
      label: 'Fokus på kvalitet',
      subtext: 'Ingen snarveier, grundig arbeid',
      icon: Award,
    },
    {
      value: COMPANY_INFO.orgNumber,
      label: 'Organisasjonsnummer',
      subtext: 'Offentlig registrert AS',
      icon: Building2,
      isMono: true,
    },
  ];

  return (
    <section className="py-16 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-2">
            <ShieldCheck className="w-4 h-4 text-sky-600" />
            <span>Offisielt bekreftede virksomhetsdata</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Kvalitet du kan stole på
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            3R RENHOLD AS er en godkjent norsk renholdsbedrift med registrert base i Slitu. Vi bygger vårt omdømme på reell fagkompetanse, ryddige ansettelsesforhold og dokumentert kvalitet.
          </p>
        </div>

        {/* 4 Clean Stats Cards with Scandinavian restraint */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-sky-50/40 hover:border-sky-200 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-sky-600 group-hover:scale-105 group-hover:text-sky-700 transition-all shadow-xs">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-medium text-slate-400">Verifisert</span>
                </div>

                <div className={`text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight tabular-nums ${stat.isMono ? 'font-mono text-2xl sm:text-3xl' : ''}`}>
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-800 mt-1">
                  {stat.label}
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  {stat.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Regulatory approval banner */}
        <div className="mt-8 p-4 rounded-xl bg-sky-50/80 border border-sky-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-sky-950">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-ping" />
            <span className="font-semibold">Offentlig godkjent renholdsbedrift:</span>
            <span>Registrert i Renholdsregisteret hos Arbeidstilsynet.</span>
          </div>
          <div className="text-slate-600 flex items-center gap-3">
            <span>Alle ansatte har godkjente HMS-kort</span>
            <span aria-hidden="true" className="text-slate-300">·</span>
            <span>Skikkelige lønns- og arbeidsvilkår</span>
          </div>
        </div>

      </div>
    </section>
  );
}
