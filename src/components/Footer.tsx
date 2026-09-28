import { useState } from 'react';
import { ShieldCheck, MapPin, Mail, Phone, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export function Footer() {
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Column 1: Brand & Tagline */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-sky-600 text-white flex items-center justify-center font-extrabold text-sm tracking-tighter shadow-sm">
                3R
              </span>
              <span className="text-xl font-extrabold text-white tracking-tight">
                {COMPANY_INFO.name}
              </span>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Professional cleaning services in Norway. Profesjonelt renhold for bedrifter og private i Viken og Østfold.
            </p>
            <div className="pt-2 text-xs text-sky-400 font-mono">
              Org.nr. {COMPANY_INFO.orgNumber}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigasjon
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => scrollTo('hjem')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Hjem
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('tjenester')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Tjenester
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('hvorfor-oss')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Hvorfor velge 3R
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('galleri')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Bildegalleri
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('om-oss')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Om oss
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('kontakt')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Kontakt oss
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Tjenester Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Våre renholdstjenester
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button
                  onClick={() => scrollTo('tjenester')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Bedriftsrenhold
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('tjenester')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Daglig renhold
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('tjenester')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Hovedvask & Dyprens
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('tjenester')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Flyttevask med garanti
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('tjenester')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Vindusvask & Glassfasader
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollTo('tjenester')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Spesialrengjøring
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Base */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Lokasjon & Kontakt
            </h4>
            <div className="space-y-3 text-sm">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.address.street}, {COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}, Norge
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-white transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </p>
              <div className="pt-2 flex items-center gap-2 text-xs text-sky-300">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span>Offentlig godkjent renholdsbedrift</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div>
            © {new Date().getFullYear()} {COMPANY_INFO.name}. Alle rettigheter reservert. Etablert {COMPANY_INFO.foundedYear}.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => scrollTo('tjenester')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Tjenester
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => scrollTo('om-oss')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Om oss
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => scrollTo('kontakt')}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Kontakt
            </button>
            <span aria-hidden="true">·</span>
            <button
              onClick={() => setShowPrivacyModal(true)}
              className="hover:text-white underline transition-colors cursor-pointer"
            >
              Personvern
            </button>
          </div>

          <div className="font-mono text-slate-500">
            Org.nr. {COMPANY_INFO.orgNumber}
          </div>
        </div>

      </div>

      {/* Privacy modal */}
      {showPrivacyModal && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-4 flex items-center justify-center animate-fadeIn"
          onClick={() => setShowPrivacyModal(false)}
        >
          <div
            className="bg-white text-slate-900 p-6 sm:p-8 rounded-2xl max-w-lg w-full shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPrivacyModal(false)}
              className="absolute top-4 right-4 p-1 rounded-full text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="text-xl font-bold mb-3">Personvernerklæring</h3>
            <div className="text-xs sm:text-sm text-slate-600 space-y-3 max-h-[60vh] overflow-y-auto pr-2">
              <p>
                <strong>3R RENHOLD AS</strong> (Org.nr {COMPANY_INFO.orgNumber}) behandler personopplysninger i henhold til gjeldende personvernlovgivning (GDPR).
              </p>
              <p>
                Når du fyller ut kontaktskjemaet eller ber om et tilbud, samler vi inn nødvendig kontaktinformasjon (navn, e-post, telefonnummer og oppdragsdetaljer) utelukkende for å kunne gi deg et relevant tilbud og utføre avtalte renholdstjenester.
              </p>
              <p>
                Opplysningene deles aldri med tredjeparter utenom det som kreves for lovpålagt regnskapsføring og oppfyllelse av avtaler. Du kan når som helst be om innsyn eller sletting ved å kontakte oss på {COMPANY_INFO.contact.email}.
              </p>
            </div>
            <div className="mt-5 text-right">
              <button
                onClick={() => setShowPrivacyModal(false)}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800"
              >
                Lukk
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
