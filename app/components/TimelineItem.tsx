"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Phase } from "../data/timelineData";

interface TimelineItemProps {
  phase: Phase;
  index: number;
  isVisible: boolean;
}

export default function TimelineItem({ phase, index, isVisible }: TimelineItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div className={`grid lg:grid-cols-2 gap-16 items-start ${!isLeft ? "lg:[direction:rtl]" : ""}`}>
      {/* Marker */}
      <div className="hidden lg:flex flex-col items-center">
        <div 
          className={`w-6 h-6 rounded-full border-4 border-white dark:border-slate-950 bg-gradient-to-br from-[#5BC8C8] to-[#3A8A96] shadow-lg cursor-pointer hover:scale-125 transition-transform ${isOpen ? "ring-4 ring-[#5BC8C8]/50" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        />
        {index < 6 && (
          <div className="w-1 h-40 bg-gradient-to-b from-[#5BC8C8] to-transparent opacity-30 mt-4" />
        )}
      </div>

      {/* Card */}
      <div className={`lg:[direction:ltr]`}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-full text-left transition-all duration-500 ${
            isOpen
              ? "bg-gradient-to-br from-white/90 to-white/50 dark:from-slate-800/90 dark:to-slate-800/50 border-2 border-[#5BC8C8]/50 shadow-2xl"
              : "bg-white/60 dark:bg-slate-800/40 border border-slate-200/40 dark:border-slate-700/40 hover:border-[#5BC8C8]/30 hover:shadow-lg"
          } backdrop-blur-xl rounded-3xl p-10 group relative overflow-hidden`}
        >
          {/* Gradient background */}
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#5BC8C8]/10 to-transparent rounded-full blur-3xl group-hover:from-[#5BC8C8]/20 transition-all" />

          <div className="relative z-10">
            <div className="flex items-start justify-between gap-6 mb-4">
              <div className="flex-1">
                <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-[#5BC8C8]/10 rounded-full">
                  <span className="w-3 h-3 rounded-full bg-[#5BC8C8]" />
                  <span className="text-xs font-bold text-[#1A4E58] dark:text-[#5BC8C8]">
                    PHASE {String(index + 1).padStart(2, "0")} • {phase.duration}
                  </span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-3 group-hover:text-[#5BC8C8] transition-colors">
                  {phase.title}
                </h3>
                <p className="text-lg text-slate-700 dark:text-slate-400 font-light">
                  {phase.description}
                </p>
              </div>

              <ChevronDown
                className={`w-8 h-8 text-[#5BC8C8] flex-shrink-0 transition-all duration-500 ${isOpen ? "rotate-180 scale-125" : "group-hover:scale-110"}`}
              />
            </div>

            {/* Steps - Expanded */}
            {isOpen && (
              <div className="mt-8 pt-8 border-t border-slate-200/50 dark:border-slate-700/50 space-y-6 max-h-96 overflow-y-auto animate-in-view in-view">
                {phase.steps.map((step, idx) => (
                  <div key={idx} className="flex gap-4 group/step">
                    <div className="flex-shrink-0 pt-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5BC8C8]/30 to-[#3A8A96]/20 border border-[#5BC8C8]/30 flex items-center justify-center text-xs font-bold text-[#1A4E58] dark:text-[#5BC8C8]">
                        {idx + 1}
                      </div>
                    </div>
                    <div className="flex-1 pb-6 border-b border-slate-200/30 dark:border-slate-700/20 last:border-0 last:pb-0">
                      <h4 className="font-semibold text-slate-900 dark:text-white group-hover/step:text-[#5BC8C8] transition-colors mb-2">
                        {step.step}
                      </h4>
                      <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1">
                        <p>📅 {step.calendar}</p>
                        <p>👤 {step.responsible}</p>
                        {step.risk && <p className="text-amber-600 dark:text-amber-400">⚠️ {step.risk}</p>}
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
