import { useState } from 'react';
import { Sparkles, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
  fallbackSubtitle?: string;
  aspectRatio?: string;
  badge?: string;
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
  fallbackTitle = '3R RENHOLD AS',
  fallbackSubtitle = 'Profesjonell renholdsstandard',
  badge,
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      {!hasError ? (
        <>
          <img
            src={src}
            alt={alt}
            referrerPolicy="no-referrer"
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`w-full h-full object-cover transition-all duration-700 ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            }`}
          />
          {!isLoaded && (
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-100 via-sky-50 to-slate-200 animate-pulse flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-sky-400 opacity-60 animate-spin" style={{ animationDuration: '4s' }} />
            </div>
          )}
        </>
      ) : (
        /* Zero-Broken-Image Policy: High-end Scandinavian SVG & gradient composition */
        <div className="w-full h-full min-h-[220px] bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 p-6 flex flex-col justify-between text-white relative overflow-hidden select-none">
          {/* Subtle architectural grid lines */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <svg width="100%" height="100%">
              <defs>
                <pattern id="clean-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#clean-grid)" />
            </svg>
          </div>

          {/* Ambient soft glow */}
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-sky-500/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-blue-600/20 rounded-full blur-2xl pointer-events-none" />

          {/* Top meta */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-white/10 backdrop-blur-md border border-white/15 text-[11px] font-medium text-sky-200">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-300" />
              <span>{badge || 'Godkjent Renhold'}</span>
            </div>
            <span className="text-[11px] text-slate-300 tracking-wider font-mono">3R RENHOLD</span>
          </div>

          {/* Center visual emblem */}
          <div className="relative z-10 my-auto py-4 flex flex-col items-center text-center">
            <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-sky-300 shadow-xl mb-3">
              <Building2 className="w-7 h-7" />
            </div>
            <h4 className="text-base font-semibold text-white tracking-tight">{fallbackTitle}</h4>
            <p className="text-xs text-sky-100/80 max-w-[260px] mt-1">{fallbackSubtitle}</p>
          </div>

          {/* Bottom guarantee */}
          <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-[11px] text-slate-300">
            <span className="flex items-center gap-1 text-sky-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-400" />
              100% Kvalitetsfokus
            </span>
            <span>Slitu · Norge</span>
          </div>
        </div>
      )}
    </div>
  );
}
