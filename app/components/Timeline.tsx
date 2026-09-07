"use client";

import { useEffect, useRef } from "react";
import TimelinePhase from "./TimelinePhase";
import { timelineData } from "../data/timelineData";

export default function Timeline() {
  const phasesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    phasesRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="flex-1 relative overflow-hidden py-40">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#5BC8C8] opacity-5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-[#3A8A96] opacity-5 rounded-full blur-3xl" />
        <div className="absolute top-2/3 left-1/3 w-72 h-72 bg-[#1A4E58] opacity-3 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section */}
        <div className="mb-40 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#EAF5F6] dark:bg-[#1A4E58]/30 rounded-full border border-[#5BC8C8]/30">
            <p className="text-xs font-bold text-[#1A4E58] dark:text-[#5BC8C8] tracking-widest">
              ✓ COMPREHENSIVE ROADMAP
            </p>
          </div>
          <h1 className="text-7xl sm:text-8xl font-light mb-8 text-slate-900 dark:text-white tracking-tight leading-tight">
            Dark Kitchen<br />
            <span className="font-semibold bg-gradient-to-r from-[#5BC8C8] via-[#3A8A96] to-[#1A4E58] bg-clip-text text-transparent">
              Launch Timeline
            </span>
          </h1>
          <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-light">
            Seven phases. Forty milestones. Two to twelve months. Everything you need to transform a concept into a thriving dark kitchen operation.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line - Gradient Vertical */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 transform -translate-x-1/2">
            <div className="absolute inset-0 bg-gradient-to-b from-[#5BC8C8] via-[#3A8A96] to-transparent opacity-50" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#5BC8C8] to-[#1A4E58] opacity-20" />
          </div>

          {/* Phases Container */}
          <div className="space-y-32">
            {timelineData.map((phase, index) => (
              <div
                key={phase.id}
                ref={(el) => {
                  phasesRef.current[index] = el;
                }}
                className="phase-scroll-trigger"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                <TimelinePhase phase={phase} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-40 pt-20 border-t border-slate-200/50 dark:border-slate-700/50">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Phases", value: "7", desc: "Clearly defined stages" },
              { label: "Milestones", value: "40+", desc: "Detailed checkpoints" },
              { label: "Duration", value: "2-12", desc: "Months to launch" },
              { label: "Coverage", value: "100%", desc: "End-to-end journey" },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="text-center group p-6 rounded-2xl bg-white/40 dark:bg-slate-800/20 backdrop-blur-sm hover:bg-white/60 dark:hover:bg-slate-800/40 transition-all duration-300 border border-slate-200/20 dark:border-slate-700/20"
              >
                <p className="text-5xl font-bold bg-gradient-to-r from-[#5BC8C8] to-[#3A8A96] bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300 inline-block">
                  {stat.value}
                </p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-3">
                  {stat.label}
                </p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {stat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
