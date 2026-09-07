"use client";

import { useEffect, useRef, useState } from "react";
import TimelinePhase from "./TimelinePhase";
import { timelineData } from "../data/timelineData";

export default function Timeline() {
  const phasesRef = useRef<(HTMLDivElement | null)[]>([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -100px 0px" }
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
    <section className="flex-1 relative overflow-hidden">
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#5BC8C8] via-[#3A8A96] to-[#1A4E58] z-50" style={{ width: `${scrollProgress}%` }} />

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-[#5BC8C8]/10 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-gradient-to-br from-[#3A8A96]/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-[350px] h-[350px] bg-gradient-to-br from-[#1A4E58]/8 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-40">
        {/* Hero */}
        <div className="mb-48 text-center">
          <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-[#EAF5F6] dark:bg-[#1A4E58]/40 rounded-full border border-[#5BC8C8]/40">
            <span className="text-xs font-bold text-[#1A4E58] dark:text-[#5BC8C8] tracking-widest">CHRONOLOGIE DE LANCEMENT</span>
            <span className="text-xs text-[#5BC8C8]">→</span>
          </div>
          
          <h1 className="text-8xl sm:text-9xl font-light mb-6 text-slate-900 dark:text-white tracking-tight leading-[1.1] max-w-4xl mx-auto">
            La Timeline de<br />
            <span className="font-semibold bg-gradient-to-r from-[#5BC8C8] via-[#3A8A96] to-[#1A4E58] bg-clip-text text-transparent">
              Votre Dark Kitchen
            </span>
          </h1>
          
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-light mb-12">
            Sept phases. Quarante jalons. Deux à douze mois. Le parcours complet de votre concept à l'ouverture officielle.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              { icon: "7", label: "phases" },
              { icon: "40+", label: "jalons" },
              { icon: "2-12", label: "mois" },
            ].map((item) => (
              <div key={item.label} className="px-4 py-3 bg-white/60 dark:bg-slate-800/40 backdrop-blur-md rounded-full border border-slate-200/50 dark:border-slate-700/50">
                <span className="font-semibold text-[#5BC8C8]">{item.icon}</span>
                <span className="text-xs text-slate-600 dark:text-slate-400 ml-2">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-[#5BC8C8] via-[#3A8A96] to-transparent opacity-60" />
          </div>

          {/* Phases */}
          <div className="space-y-32">
            {timelineData.map((phase, index) => (
              <div
                key={phase.id}
                ref={(el) => {
                  phasesRef.current[index] = el;
                }}
                className="phase-scroll-trigger"
                style={{
                  animationDelay: `${index * 0.08}s`,
                }}
              >
                <TimelinePhase phase={phase} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-48 pt-20 border-t border-slate-200/50 dark:border-slate-700/50 text-center">
          <h2 className="text-4xl font-semibold text-slate-900 dark:text-white mb-6">
            Prêt à lancer votre dark kitchen ?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            Contactez ProKitchens pour débuter votre parcours. Nous guidons chaque étape de la préparation à l'ouverture.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#5BC8C8] to-[#3A8A96] rounded-full text-white font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            Demander une consultation
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
