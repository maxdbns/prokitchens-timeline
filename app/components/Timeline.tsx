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
    <section className="flex-1 bg-gradient-to-b from-white via-slate-50 to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <div className="mb-32 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-[#EAF5F6] dark:bg-[#1A4E58]/30 rounded-full border border-[#5BC8C8]/20">
            <p className="text-xs font-bold text-[#1A4E58] dark:text-[#5BC8C8] tracking-widest">
              LAUNCH TIMELINE
            </p>
          </div>
          <h1 className="text-6xl sm:text-7xl font-light mb-6 text-slate-900 dark:text-white tracking-tight">
            Dark Kitchen <span className="font-bold bg-gradient-to-r from-[#5BC8C8] to-[#3A8A96] bg-clip-text text-transparent">Launch</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            From preparation to opening. A comprehensive roadmap of every phase, milestone, and risk in your dark kitchen deployment journey.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5BC8C8] via-[#3A8A96] to-[#1A4E58] transform -translate-x-1/2 opacity-30" />

          {/* Phases */}
          <div className="space-y-24">
            {timelineData.map((phase, index) => (
              <div
                key={phase.id}
                ref={(el) => {
                  phasesRef.current[index] = el;
                }}
                className={`relative ${index % 2 === 0 ? "timeline-phase-left" : "timeline-phase-right"}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <TimelinePhase phase={phase} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-32 pt-20 border-t border-slate-200 dark:border-slate-700">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Phases", value: "7" },
              { label: "Milestones", value: "40+" },
              { label: "Timeline", value: "2-12 Mo" },
              { label: "Phases", value: "100%" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <p className="text-4xl font-bold bg-gradient-to-r from-[#5BC8C8] to-[#3A8A96] bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
