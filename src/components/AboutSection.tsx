import { ShieldCheck, CheckCircle2, HeartHandshake, MapPin, Building2, UserCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { ImageWithFallback } from './ImageWithFallback';

export function AboutSection() {
  return (
    <section id="om-oss" className="py-20 sm:py-28 bg-slate-50/60 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Photo of professional employee */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/90 aspect-[4/5] bg-slate-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1000&q=80"
                alt="Profesjonell medarbeider i 3R RENHOLD AS med renholdsutstyr"
                fallbackTitle="Våre dyktige renholdere"
                fallbackSubtitle="Kvalifiserte fagfolk med HMS-kort og opplæring"
                className="w-full h-full object-cover"
              />

              {/* Scrim gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Quote / Staff card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md rounded-xl p-4 shadow-xl border border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center shrink-0">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 leading-tight">
                      Faste, motiverte medarbeidere
                    </h4>
                    <p className="text-xs text-slate-500">
                      7 dedikerte ansatte med fokus på grundighet
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Accent trust element */}
            <div className="hidden sm:flex absolute -top-5 -right-5 bg-white rounded-xl p-4 shadow-lg border border-slate-200/80 items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="text-[11px] font-mono text-slate-400 block">BASE SLITU</span>
                <span className="text-xs font-bold text-slate-900">Tenorveien 2A</span>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Values */}
          <div className="lg:col-span-7 order-1 lg:order-2 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-3">
              <HeartHandshake className="w-4 h-4 text-sky-600" />
              <span>Bli kjent med oss</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Om 3R RENHOLD AS
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>
                <strong>3R RENHOLD AS</strong> ble etablert i 2020 med en klar visjon: Å levere profesjonelle, forutsigbare og grundige renholdstjenester som overgår kundenes forventninger i hverdagen.
              </p>
              <p>
                Med base i <strong>Tenorveien 2A i Slitu</strong> betjener vi både små og store bedrifter, borettslag, næringsbygg og private hjem i hele regionen. Vi forstår at rene lokaler ikke bare handler om estetikk, men om trivsel, helse, godt inneklima og et profesjonelt førsteinntrykk for dine samarbeidspartnere.
              </p>
              <p>
                Våre 7 medarbeidere er hjertet i virksomheten. Vi investerer i grundig opplæring, ergonomisk og moderne utstyr, og bruker utelukkende godkjente, skånsomme kjemikalier. Som en <strong>offentlig godkjent renholdsbedrift registrert hos Arbeidstilsynet</strong>, garanterer vi ryddige arbeidsvilkår, gyldige HMS-kort og full åpenhet.
              </p>
            </div>

            {/* Company Pillars list */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Personlig oppfølging</h4>
                  <p className="text-xs text-slate-500 mt-0.5">En fast kontaktperson som kjenner dine lokaler og avtaler.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Miljø & Helse</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Skånsomme midler som gir ren luft og ivaretar overflatene.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Arbeidstilsynet Godkjent</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Registrert i det offisielle Renholdsregisteret.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Lokal forankring</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Kort reisevei gir rask responstid ved ekstraordinære behov.</p>
                </div>
              </div>
            </div>

            {/* Official credentials footer */}
            <div className="mt-8 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span className="flex items-center gap-1.5 font-medium text-slate-700">
                <ShieldCheck className="w-4 h-4 text-sky-600" />
                Org.nr: {COMPANY_INFO.orgNumber}
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-sky-600" />
                {COMPANY_INFO.address.street}, {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
