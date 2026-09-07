"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Phase } from "../data/timelineData";

interface TimelineItemProps {
  phase: Phase;
  index: number;
}

export default function TimelineItem({ phase, index }: TimelineItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div className={`grid lg:grid-cols-2 gap-16 items-start ${!isLeft ? "lg:[direction:rtl]" : ""}`}>
      {/* Timeline Marker */}
      <div className="hidden lg:flex flex-col items-center">
        <div 
          className={`w-6 h-6 rounded-full border-4 border-white dark:border-slate-900 bg-gradient-to-br from-[#5BC8C8] to-[#3A8A96] shadow-lg cursor-pointer transition-all duration-300 ${
            isOpen ? "ring-4 ring-[#5BC8C8]/50 scale-125" : "hover:scale-110"
          }`}
          onClick={() => setIsOpen(!isOpen)}
        />
        {index < 6 && (
          <div className="w-1 h-40 bg-gradient-to-b from-[#5BC8C8] to-transparent opacity-30 mt-4 transition-opacity duration-500" />
        )}
      </div>

      {/* Card */}
      <div className={`lg:[direction:ltr]`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full text-left transition-all duration-500 ${
            isOpen
              ? "bg-gradient-to-br from-white/90 to-white/40 dark:from-slate-800/90 dark:to-slate-800/40 border-2 border-[#5BC8C8]/50 shadow-xl scale-105"
              : "bg-white/60 dark:bg-slate-800/40 border border-slate-200/30 dark:border-slate-700/40 hover:border-[#5BC8C8]/30 hover:shadow-lg hover:scale-102"
          } backdrop-blur-xl rounded-2xl p-8 group relative overflow-hidden`}
        >
          {/* Glow on hover */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#5BC8C8]/15 to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative z-10">
            <div className="flex items-start justify-between gap-6 mb-4">
              <div className="flex-1">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 mb-4 px-3 py-2 bg-[#5BC8C8]/10 rounded-full border border-[#5BC8C8]/30 transition-all duration-300">
                  <span className="w-2 h-2 rounded-full bg-[#5BC8C8]" />
                  <span className="text-xs font-bold text-[#1A4E58] dark:text-[#5BC8C8] tracking-widest">
                    PHASE {String(index + 1).padStart(2, "0")} • {phase.duration}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-4xl lg:text-5xl font-900 text-[var(--text-primary)] mb-3 group-hover:text-[#5BC8C8] transition-colors duration-300">
                  {phase.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-[var(--text-secondary)] font-light">
                  {phase.description}
                </p>
              </div>

              {/* Chevron */}
              <ChevronDown
                className={`w-8 h-8 text-[#5BC8C8] flex-shrink-0 transition-all duration-500 ${isOpen ? "rotate-180 scale-125" : "group-hover:scale-110"}`}
              />
            </div>

            {/* Expanded Steps */}
            {isOpen && (
              <div className="mt-8 pt-8 border-t border-slate-200/50 dark:border-slate-700/50 space-y-6 max-h-96 overflow-y-auto animate-in">
                {phase.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 group/step"
                    style={{
                      opacity: 0,
                      animation: `fadeInUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${idx * 80}ms forwards`,
                    }}
                  >
                    <div className="flex-shrink-0 pt-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5BC8C8]/30 to-[#3A8A96]/20 border border-[#5BC8C8]/30 flex items-center justify-center text-xs font-bold text-[#1A4E58] dark:text-[#5BC8C8] transition-all duration-300 group-hover/step:scale-110">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="flex-1 pb-6 border-b border-slate-200/30 dark:border-slate-700/20 last:border-0 last:pb-0">
                      <h4 className="font-600 text-[var(--text-primary)] group-hover/step:text-[#5BC8C8] transition-colors duration-300 mb-2">
                        {step.step}
                      </h4>
                      <div className="text-sm text-[var(--text-secondary)] space-y-1">
                        <p>📅 {step.calendar}</p>
                        <p>👤 {step.responsible}</p>
                        {step.risk && (
                          <p className="text-amber-600 dark:text-amber-400 font-medium">
                            ⚠️ {step.risk}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}
