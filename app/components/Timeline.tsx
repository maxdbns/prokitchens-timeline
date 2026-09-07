"use client";

import { useEffect, useRef, useState } from "react";
import TimelinePhase from "./TimelinePhase";
import { timelineData } from "../data/timelineData";

export default function Timeline() {
  const phasesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    phasesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = Math.min((scrollTop / (docHeight - windowHeight)) * 100, 100);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="flex-1 relative overflow-x-hidden">
      {/* Animated Scroll Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#5BC8C8] via-[#3A8A96] to-[#1A4E58] z-50 transition-all"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Background Floaters */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 -left-40 w-80 h-80 bg-[#5BC8C8]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-60 w-96 h-96 bg-[#3A8A96]/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/3 w-72 h-72 bg-[#1A4E58]/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      <div ref={containerRef} className="relative z-10">
        {/* Hero Section - Asymmetric */}
        <div className="min-h-screen flex items-center overflow-hidden relative">
          <div className="absolute inset-0">
            {/* Gradient mesh background */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/40 via-transparent to-transparent dark:from-slate-900/40" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left side - Text */}
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#5BC8C8]/10 border border-[#5BC8C8]/30 rounded-lg backdrop-blur-sm">
                  <span className="text-xs font-bold text-[#1A4E58] dark:text-[#5BC8C8] tracking-widest">✦ DÉPLOIEMENT</span>
                </div>

                <h1 className="text-7xl lg:text-8xl font-light text-slate-900 dark:text-white leading-[1.05] tracking-tight">
                  Timeline<br />
                  <span className="font-bold bg-gradient-to-r from-[#5BC8C8] via-[#3A8A96] to-[#1A4E58] bg-clip-text text-transparent">
                    Votre Success
                  </span>
                </h1>

                <p className="text-xl text-slate-700 dark:text-slate-300 font-light leading-relaxed max-w-md">
                  De l'idée à l'ouverture. Une roadmap complète orchestrée en 7 phases décisives pour lancer votre dark kitchen.
                </p>

                <div className="flex gap-4 pt-8">
                  <a href="#timeline" className="px-8 py-4 bg-gradient-to-r from-[#5BC8C8] to-[#3A8A96] text-white rounded-full font-semibold hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    Explorer
                  </a>
                  <button className="px-8 py-4 border border-slate-300 dark:border-slate-700 rounded-full font-semibold hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
                    En savoir plus
                  </button>
                </div>
              </div>

              {/* Right side - Stats Grid (3D look) */}
              <div className="relative h-full min-h-[500px] hidden lg:flex items-center justify-end">
                <div className="relative w-full h-full">
                  {/* Floating stat cards */}
                  <div className="absolute top-10 right-0 w-48 h-40 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm transform hover:translate-y-2 transition-transform" style={{ transform: "rotateX(10deg) rotateY(-5deg)" }}>
                    <div className="text-4xl font-bold text-[#5BC8C8] mb-2">7</div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Phases Stratégiques</p>
                  </div>

                  <div className="absolute top-1/3 right-32 w-48 h-40 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm transform hover:translate-y-2 transition-transform delay-100" style={{ transform: "rotateX(-8deg) rotateY(8deg)" }}>
                    <div className="text-4xl font-bold text-[#3A8A96] mb-2">40+</div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Jalons Précis</p>
                  </div>

                  <div className="absolute bottom-20 right-16 w-48 h-40 bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-200/50 dark:border-slate-700/50 backdrop-blur-sm transform hover:translate-y-2 transition-transform delay-200" style={{ transform: "rotateX(5deg) rotateY(-3deg)" }}>
                    <div className="text-4xl font-bold text-[#1A4E58] mb-2">2-12</div>
                    <p className="text-sm font-medium text-slate-600 dark:text-slate-400">Mois de Déploiement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div id="timeline" className="relative py-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="text-5xl font-light text-slate-900 dark:text-white mb-4">
              Le Parcours <span className="font-bold text-[#5BC8C8]">Complet</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Chaque phase a son importance. Chaque jalon définit votre progression.
            </p>
          </div>

          {/* Phases - Asymmetric Layout */}
          <div className="space-y-40">
            {timelineData.map((phase, index) => (
              <div
                key={phase.id}
                ref={(el) => {
                  phasesRef.current[index] = el;
                }}
                className="phase-scroll-trigger"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <TimelinePhase phase={phase} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative h-64 hidden lg:block">
              <div className="absolute inset-0 bg-gradient-to-br from-[#5BC8C8]/20 to-[#3A8A96]/20 rounded-3xl blur-2xl" />
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl font-light text-slate-900 dark:text-white">
                Prêt à<br />
                <span className="font-bold text-[#5BC8C8]">lancer ?</span>
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-md">
                ProKitchens guide chaque étape. De la préparation à l'ouverture officielle, nous transformons votre concept en réalité opérationnelle.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#5BC8C8] to-[#3A8A96] text-white rounded-full font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300">
                Demander une consultation
                <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
