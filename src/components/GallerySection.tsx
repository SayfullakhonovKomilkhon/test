import { useState } from 'react';
import { Camera, X, Maximize2, MapPin, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS, GalleryImage } from '../data/companyData';
import { ImageWithFallback } from './ImageWithFallback';

export function GallerySection() {
  const [activeFilter, setActiveFilter] = useState<'alle' | 'kontor' | 'team' | 'detaljer' | 'spesial'>('alle');
  const [activeModalItem, setActiveModalItem] = useState<GalleryImage | null>(null);

  const filteredItems = activeFilter === 'alle'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeFilter);

  const filterTabs = [
    { id: 'alle', label: 'Alle bilder' },
    { id: 'kontor', label: 'Kontor & Bygg' },
    { id: 'team', label: 'Personale & Arbeid' },
    { id: 'detaljer', label: 'Kjøkken & Sanitær' },
    { id: 'spesial', label: 'Spesialutstyr' },
  ] as const;

  return (
    <section id="galleri" className="py-20 sm:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-700 tracking-wider uppercase mb-2">
              <Camera className="w-4 h-4 text-sky-600" />
              <span>Visuelt arbeid</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Bilder fra våre oppdrag
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl">
              Et innblikk i renhetsstandarden vi leverer til næringslivet og private hjem i Viken og Østfold.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers, as allowed by Frontend Design Constitution) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg self-start md:self-end">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all cursor-pointer whitespace-nowrap ${
                  activeFilter === tab.id
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical modern photo grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 auto-rows-[240px] sm:auto-rows-[280px]">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveModalItem(item)}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-100 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 ${
                activeFilter === 'alle' ? item.aspectClass : 'col-span-1 row-span-1'
              }`}
            >
              <ImageWithFallback
                src={item.imageUrl}
                alt={item.title}
                fallbackTitle={item.title}
                fallbackSubtitle={item.description}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Top Category Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase bg-black/40 backdrop-blur-md text-sky-200 rounded border border-white/10">
                  {item.categoryLabel}
                </span>
              </div>

              {/* Quick expand icon */}
              <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-4 h-4" />
              </div>

              {/* Bottom Details */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-[11px] text-sky-200/90 mb-1">
                  <MapPin className="w-3 h-3 text-sky-400" />
                  <span>{item.location}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold leading-tight group-hover:text-sky-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-300 line-clamp-1 mt-1 font-normal opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quality note */}
        <div className="mt-8 flex items-center justify-between text-xs text-slate-500 border-t border-slate-100 pt-4">
          <span className="flex items-center gap-1.5 text-slate-600">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            Fotografert under reelle renholdsoppdrag i Norge
          </span>
          <span className="font-mono">3R RENHOLD AS · BILDER</span>
        </div>

      </div>

      {/* Lightbox / Modal */}
      {activeModalItem && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-fadeIn"
          onClick={() => setActiveModalItem(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setActiveModalItem(null)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/75 flex items-center justify-center transition-colors"
              aria-label="Lukk bilde"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="max-h-[70vh] overflow-hidden flex items-center justify-center bg-black">
              <img
                src={activeModalItem.imageUrl}
                alt={activeModalItem.title}
                className="max-h-[70vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="p-6 bg-slate-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
                  {activeModalItem.categoryLabel}
                </span>
                <h4 className="text-xl font-bold">{activeModalItem.title}</h4>
                <p className="text-sm text-slate-300 mt-1">{activeModalItem.description}</p>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-800 px-3 py-2 rounded-lg shrink-0">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>{activeModalItem.location}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
