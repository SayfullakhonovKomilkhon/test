import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, ShieldCheck, ExternalLink, Navigation } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';

interface ContactSectionProps {
  prefilledService?: string;
  prefilledMessage?: string;
}

export function ContactSection({ prefilledService, prefilledMessage }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: prefilledService || 'Bedriftsrenhold',
    message: prefilledMessage || '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  // Update if prefilledService changes
  if (prefilledService && formData.service !== prefilledService && !submitted) {
    setFormData((prev) => ({ ...prev, service: prefilledService }));
  }

  if (prefilledMessage && formData.message !== prefilledMessage && !submitted) {
    setFormData((prev) => ({ ...prev, message: prefilledMessage }));
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    // Validation
    if (!formData.name.trim()) {
      setErrorMsg('Vennligst oppgi navnet ditt.');
      return;
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Vennligst oppgi en gyldig e-postadresse.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 8) {
      setErrorMsg('Vennligst oppgi et gyldig telefonnummer.');
      return;
    }
    if (!formData.message.trim()) {
      setErrorMsg('Vennligst skriv en kort melding om lokalene eller dine ønsker.');
      return;
    }

    setIsSubmitting(true);
    // Simulate instantaneous clean submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Tenorveien 2A, 1859 Slitu, Norway'
  )}`;

  return (
    <section id="kontakt" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-2">
            <Mail className="w-4 h-4 text-sky-600" />
            <span>Ta kontakt</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Kontakt oss
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Vi er klare til å hjelpe deg med profesjonelle renholdsløsninger for bedrifter og private.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-slate-50/80 rounded-2xl p-6 sm:p-10 border border-slate-200/90 shadow-sm">
            {submitted ? (
              <div className="text-center py-10 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Takk for din henvendelse!
                </h3>
                <p className="text-sm sm:text-base text-slate-600 max-w-md mx-auto">
                  Vi har mottatt din forespørsel angående <strong>{formData.service}</strong>. En av våre renholdsledere gjennomgår dine detaljer og kontakter deg innen 2 timer på hverdager.
                </p>
                <div className="p-4 rounded-xl bg-white border border-slate-200 max-w-sm mx-auto text-left text-xs space-y-1.5 text-slate-600">
                  <p><strong>Referanse:</strong> 3R-{(Date.now() % 100000).toString().padStart(6, '0')}</p>
                  <p><strong>Navn:</strong> {formData.name}</p>
                  <p><strong>E-post:</strong> {formData.email}</p>
                  <p><strong>Telefon:</strong> {formData.phone}</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      service: 'Bedriftsrenhold',
                      message: '',
                    });
                  }}
                  className="mt-6 px-6 py-2.5 text-xs font-semibold text-sky-700 bg-white border border-slate-200 hover:border-slate-300 rounded-lg shadow-2xs transition-colors"
                >
                  Send en ny henvendelse
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5 text-left">
                {errorMsg && (
                  <div className="p-3.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-medium">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Navn */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Navn <span className="text-sky-600">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ditt fulle navn eller firmanavn"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* E-post */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                      E-post <span className="text-sky-600">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="din.epost@bedrift.no"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Telefonnummer */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Telefonnummer <span className="text-sky-600">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+47 000 00 000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Tjeneste */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                      Tjeneste
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                    >
                      {SERVICES.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                      <option value="Annet / Flere tjenester">Annet / Flere tjenester</option>
                    </select>
                  </div>
                </div>

                {/* Melding */}
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide">
                    Melding <span className="text-sky-600">*</span>
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Beskriv dine lokaler, ønsket oppstart, ca. areal eller spesielle ønsker..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 text-sm text-slate-900 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all resize-y"
                  />
                </div>

                {/* Terms and Submit */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <p className="text-[11px] text-slate-500 max-w-xs">
                    Ved å sende inn godtar du at vi behandler dine opplysninger for å besvare forespørselen.
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto px-8 py-3.5 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 text-sm cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sender...</span>
                    ) : (
                      <>
                        <span>Send forespørsel</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Company Info & Interactive Map */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
            
            {/* Verified Address & Contact Cards */}
            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider">
                  Hovedkontor
                </span>
                <span className="text-xs text-slate-400 font-mono">Org.nr {COMPANY_INFO.orgNumber}</span>
              </div>

              <h3 className="text-2xl font-bold tracking-tight text-white mb-4">
                {COMPANY_INFO.name}
              </h3>

              <div className="space-y-3.5 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">{COMPANY_INFO.address.street}</p>
                    <p>{COMPANY_INFO.address.postalCode} {COMPANY_INFO.address.city}, {COMPANY_INFO.address.country}</p>
                    <p className="text-xs text-slate-400 mt-0.5">{COMPANY_INFO.address.municipality} ({COMPANY_INFO.address.region})</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-slate-800">
                  <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                  <a
                    href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, '')}`}
                    className="hover:text-sky-300 transition-colors"
                  >
                    {COMPANY_INFO.contact.phone}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="hover:text-sky-300 transition-colors"
                  >
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                  <span>{COMPANY_INFO.contact.hours}</span>
                </div>
              </div>
            </div>

            {/* Interactive Map Box */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-sm bg-slate-100 flex-1 flex flex-col min-h-[280px]">
              {/* Map header toolbar */}
              <div className="px-4 py-2.5 bg-white border-b border-slate-200 flex items-center justify-between text-xs text-slate-600">
                <div className="flex items-center gap-1.5 font-medium text-slate-800">
                  <Navigation className="w-3.5 h-3.5 text-sky-600" />
                  <span>Slitu, Indre Østfold (E18-korridoren)</span>
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sky-600 hover:text-sky-700 font-semibold flex items-center gap-1"
                >
                  <span>Åpne i Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Interactive OpenStreetMap Embed Container */}
              <div className="relative flex-1 min-h-[220px] w-full bg-slate-200">
                <iframe
                  title="3R RENHOLD AS Lokasjon i Slitu"
                  width="100%"
                  height="100%"
                  className="w-full h-full min-h-[220px] border-0"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=11.2300%2C59.5600%2C11.3100%2C59.6050&amp;layer=mapnik&amp;marker=59.5828%2C11.2678"
                  loading="lazy"
                />
                
                {/* Custom Overlay Pin with address */}
                <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-md rounded-lg p-2.5 shadow-md border border-slate-200 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-sky-600 animate-pulse" />
                    <span className="font-bold text-slate-900">Tenorveien 2A, Slitu</span>
                  </div>
                  <p className="text-[10px] text-slate-500 mt-0.5">Godkjent renholdsbedrift</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
