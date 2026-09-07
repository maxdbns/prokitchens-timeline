"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Text */}
          <div className="space-y-8">
            {/* Badge */}
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#5BC8C8]/10 border border-[#5BC8C8]/30 rounded-full backdrop-blur-sm hover:bg-[#5BC8C8]/20 transition-all duration-500"
              style={{ 
                opacity: 1 - scrollY / 600,
                transform: `translateY(${scrollY * 0.3}px)`
              }}
            >
              <span className="w-2 h-2 rounded-full bg-[#5BC8C8] animate-pulse" />
              <span className="text-xs font-bold text-[#1A4E58] dark:text-[#5BC8C8] tracking-widest">
                DÉPLOIEMENT DARK KITCHEN
              </span>
            </div>

            {/* Main Title */}
            <div 
              style={{ 
                transform: `translateY(${scrollY * 0.4}px)`,
                opacity: Math.max(0.2, 1 - scrollY / 800)
              }}
              className="transition-transform duration-500"
            >
              <h1 className="text-8xl lg:text-9xl font-900 leading-[0.95] text-[var(--text-primary)] mb-6">
                Votre<br />
                <span className="text-gradient">Timeline</span>
              </h1>
              <p className="text-5xl font-300 text-[var(--text-secondary)] leading-[1.3] mt-6">
                en 7 phases<br />essentielles
              </p>
            </div>

            {/* Description */}
            <p className="text-xl text-[var(--text-secondary)] font-light leading-relaxed max-w-lg mt-8 opacity-80 hover:opacity-100 transition-opacity duration-500">
              Du concept à l'ouverture. 40+ jalons précis. Une chronologie qui transforme votre vision en réalité opérationnelle.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <a 
                href="#timeline"
                className="group px-8 py-4 bg-gradient-to-r from-[#5BC8C8] to-[#3A8A96] text-white rounded-xl font-600 text-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Explorer la Timeline
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <button className="px-8 py-4 border-2 border-[var(--text-primary)] text-[var(--text-primary)] rounded-xl font-600 text-lg hover:bg-[var(--text-primary)] hover:text-white active:scale-95 transition-all duration-300">
                En savoir plus
              </button>
            </div>
          </div>

          {/* Right - Stats Cards */}
          <div className="relative h-[600px] hidden lg:block perspective">
            {/* Card 1 */}
            <div 
              className="absolute top-0 right-0 w-72 h-56 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/20 dark:border-slate-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group"
              style={{ 
                transform: `translateY(${scrollY * 0.15}px) rotateZ(-3deg)`,
              }}
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute -top-2 -right-2 w-24 h-24 bg-gradient-to-br from-[#5BC8C8]/20 to-transparent rounded-full blur-xl" />
              <div className="relative z-10">
                <p className="text-xs font-bold text-[#1A4E58] dark:text-[#5BC8C8] tracking-widest mb-3">PHASES</p>
                <div className="text-7xl font-900 bg-gradient-to-br from-[#5BC8C8] to-[#3A8A96] bg-clip-text text-transparent">7</div>
                <p className="text-sm font-600 text-[var(--text-primary)] mt-4">Phases<br/>Stratégiques</p>
                <p className="text-xs text-[var(--text-secondary)] mt-2">Chacune critique pour le succès</p>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              className="absolute top-1/3 right-32 w-72 h-56 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/20 dark:border-slate-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group"
              style={{ 
                transform: `translateY(${scrollY * 0.25}px) rotateZ(2deg)`,
              }}
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute -bottom-2 -right-2 w-24 h-24 bg-gradient-to-br from-[#3A8A96]/20 to-transparent rounded-full blur-xl" />
              <div className="relative z-10">
                <p className="text-xs font-bold text-[#1A4E58] dark:text-[#5BC8C8] tracking-widest mb-3">JALONS</p>
                <div className="text-7xl font-900 bg-gradient-to-br from-[#3A8A96] to-[#1A4E58] bg-clip-text text-transparent">40+</div>
                <p className="text-sm font-600 text-[var(--text-primary)] mt-4">Jalons<br/>Détaillés</p>
                <p className="text-xs text-[var(--text-secondary)] mt-2">Chaque étape mapée</p>
              </div>
            </div>

            {/* Card 3 */}
            <div 
              className="absolute bottom-10 right-0 w-72 h-56 bg-white/70 dark:bg-slate-800/70 backdrop-blur-xl rounded-2xl p-8 shadow-lg border border-white/20 dark:border-slate-700/50 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group"
              style={{ 
                transform: `translateY(${scrollY * 0.1}px) rotateZ(-2deg)`,
              }}
            >
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute -top-2 -left-2 w-24 h-24 bg-gradient-to-br from-[#1A4E58]/20 to-transparent rounded-full blur-xl" />
              <div className="relative z-10">
                <p className="text-xs font-bold text-[#1A4E58] dark:text-[#5BC8C8] tracking-widest mb-3">DURÉE</p>
                <div className="text-7xl font-900 bg-gradient-to-br from-[#1A4E58] to-[#5BC8C8] bg-clip-text text-transparent">2-12</div>
                <p className="text-sm font-600 text-[var(--text-primary)] mt-4">Mois de<br/>Déploiement</p>
                <p className="text-xs text-[var(--text-secondary)] mt-2">Préparation à ouverture</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 opacity-60 hover:opacity-100 transition-opacity duration-300"
        style={{ 
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: Math.max(0, 0.6 - scrollY / 1000)
        }}
      >
        <div className="animate-bounce text-[#5BC8C8]">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
