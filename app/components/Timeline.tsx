"use client";

import { useEffect, useRef, useState } from "react";
import TimelinePhase from "./TimelinePhase";
import { timelineData } from "../data/timelineData";

export default function Timeline() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = Math.min((scrollTop / (docHeight - windowHeight)) * 100, 100);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="flex-1 relative">
      {/* Scroll Progress */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5BC8C8] via-[#3A8A96] to-[#1A4E58] z-50"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Hero Brutal */}
      <div className="min-h-[120vh] relative overflow-hidden flex items-center">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-[#EAF5F6] dark:from-slate-950 dark:via-slate-900 dark:to-[#0F1F23]" />
        
        {/* Animated blobs */}
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[#5BC8C8]/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-[#3A8A96]/15 rounded-full blur-3xl animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-[#1A4E58]/10 rounded-full blur-3xl" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            {/* Texte - 60% */}
            <div className="lg:col-span-3 space-y-10">
              <div>
                <span className="inline-block px-4 py-2 bg-[#5BC8C8]/20 rounded-full text-sm font-bold text-[#1A4E58] dark:text-[#5BC8C8] mb-8 border border-[#5BC8C8]/30">
                  ✦ VOTRE PARCOURS
                </span>
                <h1 className="text-9xl lg:text-[120px] font-black text-slate-900 dark:text-white leading-[0.9] mb-6 tracking-tight">
                  Dark<br />Kitchen
                </h1>
                <p className="text-6xl font-light text-slate-700 dark:text-slate-300 leading-[1.2] mb-8">
                  En <span className="font-bold text-[#5BC8C8]">7 phases</span>
                </p>
              </div>
              
              <p className="text-2xl text-slate-700 dark:text-slate-400 font-light leading-relaxed max-w-lg">
                Du concept à l'ouverture. 40+ jalons. Une chronologie qui transforme votre idée en empire culinaire.
              </p>

              <div className="flex gap-4 pt-8">
                <a href="#phases" className="px-10 py-5 bg-gradient-to-r from-[#5BC8C8] to-[#3A8A96] text-white rounded-2xl font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
                  Découvrir
                </a>
                <button className="px-10 py-5 border-2 border-slate-900 dark:border-white rounded-2xl font-bold text-lg hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-900 transition-all">
                  Détails
                </button>
              </div>
            </div>

            {/* Stats - 40% */}
            <div className="lg:col-span-2 relative h-[500px] hidden lg:block">
              {/* Stat 1 */}
              <div className="absolute top-0 right-0 w-56 h-56 bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-3xl p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/50" style={{ transform: "rotate(8deg)" }}>
                <div className="text-6xl font-black text-[#5BC8C8] mb-3">7</div>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-tight">Phases<br/>Stratégiques</p>
              </div>

              {/* Stat 2 */}
              <div className="absolute top-48 right-20 w-56 h-56 bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-3xl p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/50" style={{ transform: "rotate(-5deg)" }}>
                <div className="text-6xl font-black text-[#3A8A96] mb-3">40+</div>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-tight">Jalons<br/>Détaillés</p>
              </div>

              {/* Stat 3 */}
              <div className="absolute bottom-0 right-40 w-56 h-56 bg-white/80 dark:bg-slate-800/80 backdrop-blur rounded-3xl p-8 shadow-2xl border border-slate-200/50 dark:border-slate-700/50" style={{ transform: "rotate(3deg)" }}>
                <div className="text-6xl font-black text-[#1A4E58] mb-3">2-12</div>
                <p className="text-sm font-bold text-slate-700 dark:text-slate-300 leading-tight">Mois de<br/>Déploiement</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline Phases */}
      <div id="phases" className="relative z-10 bg-white dark:bg-slate-900 py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-32">
            <h2 className="text-7xl font-black text-slate-900 dark:text-white mb-6">
              Le <span className="text-[#5BC8C8]">Chemin</span>
            </h2>
            <p className="text-2xl text-slate-700 dark:text-slate-400 font-light max-w-2xl">
              Chaque phase est une étape critique. Chaque jalon vous rapproche de l'ouverture.
            </p>
          </div>

          <div className="space-y-32">
            {timelineData.map((phase, index) => (
              <TimelinePhase key={phase.id} phase={phase} index={index} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="relative bg-gradient-to-br from-[#5BC8C8]/10 to-[#3A8A96]/5 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-7xl font-black text-slate-900 dark:text-white mb-8">
            Lancez <span className="text-[#5BC8C8]">Maintenant</span>
          </h2>
          <p className="text-2xl text-slate-700 dark:text-slate-400 font-light mb-12 max-w-2xl mx-auto">
            ProKitchens guide chaque étape. De la préparation à l'ouverture, nous vous pilotent vers le succès.
          </p>
          <a href="#contact" className="inline-block px-12 py-6 bg-gradient-to-r from-[#5BC8C8] to-[#3A8A96] text-white rounded-2xl font-bold text-xl hover:shadow-2xl hover:scale-110 transition-all duration-300">
            Demander une Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
