"use client";

import { useState } from "react";
import { ChevronDown, Clock, Users, AlertTriangle } from "lucide-react";
import { Phase, timelineData } from "../data/timelineData";

interface TimelinePhaseProps {
  phase: Phase;
  index: number;
}

export default function TimelinePhase({ phase, index }: TimelinePhaseProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div className={`grid lg:grid-cols-2 gap-12 items-start`}>
      {/* Timeline Marker & Line */}
      <div className="hidden lg:flex flex-col items-center">
        <div className="w-5 h-5 rounded-full border-4 border-white dark:border-slate-950 bg-gradient-to-br from-[#5BC8C8] to-[#3A8A96] shadow-xl relative z-10" />
        {index < timelineData.length - 1 && (
          <div className="w-1 h-32 bg-gradient-to-b from-[#5BC8C8] to-transparent opacity-40 mt-2" />
        )}
      </div>

      {/* Content Card */}
      <div className="relative group">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-full text-left card-hover transition-all duration-500 ${
            isExpanded
              ? "bg-gradient-to-br from-white/80 to-white/40 dark:from-slate-800/80 dark:to-slate-800/40 border-2 border-[#5BC8C8]/50 shadow-2xl"
              : "bg-white/60 dark:bg-slate-800/40 border border-slate-200/40 dark:border-slate-700/40 hover:border-[#5BC8C8]/30 hover:shadow-xl"
          } backdrop-blur-md rounded-2xl p-8 overflow-hidden relative`}
        >
          {/* Background accent */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#5BC8C8]/5 to-transparent rounded-full blur-2xl -z-10" />

          <div className="flex items-start justify-between gap-6 mb-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#5BC8C8] to-[#3A8A96] rounded-lg shadow-lg text-white font-bold text-sm">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-xs font-bold text-[#1A4E58] dark:text-[#5BC8C8] tracking-widest">
                    PHASE {index + 1}
                  </p>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
                    {phase.duration}
                  </p>
                </div>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#5BC8C8] transition-colors">
                {phase.title}
              </h3>
              {!isExpanded && (
                <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2">
                  {phase.description}
                </p>
              )}
            </div>
            <ChevronDown
              className={`w-6 h-6 text-[#5BC8C8] flex-shrink-0 transition-all duration-500 group-hover:scale-110 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="timeline-content mt-8 pt-8 border-t border-slate-200/50 dark:border-slate-700/50 space-y-6 max-h-96 overflow-y-auto">
              {phase.steps.map((step, idx) => (
                <div key={idx} className="group/step flex gap-4">
                  <div className="flex-shrink-0 pt-1">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#5BC8C8]/30 to-[#3A8A96]/20 border border-[#5BC8C8]/30 flex items-center justify-center">
                      <span className="text-xs font-bold text-[#1A4E58] dark:text-[#5BC8C8]">{idx + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0 pb-6 border-b border-slate-100 dark:border-slate-700/30 last:border-0 last:pb-0">
                    <h4 className="font-semibold text-slate-900 dark:text-white group-hover/step:text-[#5BC8C8] transition-colors mb-2 leading-snug text-sm">
                      {step.step}
                    </h4>
                    <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#5BC8C8]/60 flex-shrink-0" />
                        <span>{step.calendar}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-[#5BC8C8]/60 flex-shrink-0" />
                        <span>{step.responsible}</span>
                      </div>
                    </div>
                    {step.risk && (
                      <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700/30">
                        <div className="inline-flex items-center gap-2 px-2 py-1 bg-amber-50/50 dark:bg-amber-950/20 rounded border border-amber-200/30 dark:border-amber-800/30">
                          <AlertTriangle className="w-3 h-3 text-amber-700 dark:text-amber-400 flex-shrink-0" />
                          <p className="text-xs font-medium text-amber-700 dark:text-amber-300">
                            {step.risk}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </button>
      </div>
    </div>
  );
}
