import { useState, FormEvent } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, Sparkles, Building, Phone } from 'lucide-react';
import { COMPANY_INFO, SERVICES } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export function QuoteModal({ isOpen, onClose, preselectedService }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    service: preselectedService || 'Bedriftsrenhold',
    approxArea: '100 - 300 m²',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="bg-gradient-to-r from-sky-600 via-sky-700 to-blue-800 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Lukk"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-white/15 text-[11px] font-medium text-sky-200 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Gratis & uforpliktende tilbud</span>
          </div>

          <h3 className="text-2xl font-bold tracking-tight">Få et tilbud fra 3R RENHOLD AS</h3>
          <p className="text-xs sm:text-sm text-sky-100 mt-1">
            Fyll ut feltene under, så sender vi et skreddersydd prisoverslag innen 2 timer.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">
                Forespørsel mottatt!
              </h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Takk, {formData.name}. Vi forbereder et tilbud for <strong>{formData.service}</strong> og tar kontakt med deg på {formData.phone} / {formData.email}.
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-left">
                <div className="flex items-center gap-2 text-sky-800 font-semibold mb-1">
                  <ShieldCheck className="w-4 h-4 text-sky-600" />
                  3R RENHOLD AS · Godkjent renholdsbedrift
                </div>
                <p>Org.nr: {COMPANY_INFO.orgNumber} · Tenorveien 2A, 1859 Slitu</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="w-full py-3 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg text-sm shadow-sm transition-colors"
              >
                Ferdig
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                    Ditt navn <span className="text-sky-600">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ola Nordmann"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                    Bedriftsnavn (valgfritt)
                  </label>
                  <input
                    type="text"
                    placeholder="Bedrift AS"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                    E-post <span className="text-sky-600">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="navn@epost.no"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                    Telefon <span className="text-sky-600">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+47 000 00 000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                    Tjeneste
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                  >
                    {SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Totalpakke / Flere tjenester">Totalpakke / Flere tjenester</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                    Omtrentlig areal
                  </label>
                  <select
                    value={formData.approxArea}
                    onChange={(e) => setFormData({ ...formData, approxArea: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                  >
                    <option value="Under 50 m²">Under 50 m²</option>
                    <option value="50 - 150 m²">50 - 150 m²</option>
                    <option value="150 - 300 m²">150 - 300 m²</option>
                    <option value="300 - 600 m²">300 - 600 m²</option>
                    <option value="Over 600 m²">Over 600 m²</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1 uppercase tracking-wide">
                  Beskrivelse / Spesielle behov
                </label>
                <textarea
                  rows={3}
                  placeholder="Fortell kort om lokalene, ønsket oppstartsdato, turnus osv."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  type="button"
                  onClick={onClose}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800"
                >
                  Avbryt
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold rounded-lg text-sm transition-all shadow-sm flex items-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Sender...</span>
                  ) : (
                    <>
                      <span>Send tilbudsforespørsel</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
