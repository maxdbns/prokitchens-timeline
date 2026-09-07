"use client";

import { useState } from "react";
import { ChevronDown, Clock, Users, AlertTriangle } from "lucide-react";
import { Phase } from "../data/timelineData";

interface TimelinePhaseProps {
  phase: Phase;
  index: number;
}

export default function TimelinePhase({ phase, index }: TimelinePhaseProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div className={`flex gap-12 items-start lg:gap-20 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
      {/* Content Card */}
      <div className="flex-1">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="card-hover w-full text-left bg-white/70 dark:bg-slate-800/50 backdrop-blur-md border border-slate-200/40 dark:border-slate-700/40 rounded-2xl p-8 lg:p-10 group transition-all duration-500"
        >
          <div className="flex items-start justify-between gap-6 mb-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 bg-gradient-to-br from-[#5BC8C8] to-[#3A8A96] rounded-full">
                  <span className="text-xs font-bold text-white">{String(index + 1).padStart(2, "0")}</span>
                </span>
                <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                  {phase.duration}
                </span>
              </div>
              <h3 className="card-title text-2xl lg:text-3xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-[#5BC8C8] transition-colors">
                {phase.title}
              </h3>
              {!isExpanded && (
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {phase.steps.length} étape{phase.steps.length > 1 ? "s" : ""} • {phase.description}
                </p>
              )}
            </div>
            <ChevronDown
              className={`w-6 h-6 text-[#5BC8C8] flex-shrink-0 transition-all duration-500 ${
                isExpanded ? "rotate-180 scale-125" : "group-hover:scale-110"
              }`}
            />
          </div>

          {/* Expanded Steps */}
          {isExpanded && (
            <div className="timeline-content mt-8 pt-8 border-t border-slate-200/50 dark:border-slate-700/50">
              <div className="space-y-6">
                {phase.steps.map((step, idx) => (
                  <div key={idx} className="group/step">
                    <div className="flex gap-4">
                      <div className="flex-shrink-0 pt-1">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5BC8C8]/20 to-[#3A8A96]/20 border border-[#5BC8C8]/30 flex items-center justify-center">
                          <span className="text-xs font-semibold text-[#1A4E58] dark:text-[#5BC8C8]">{idx + 1}</span>
                        </div>
                      </div>

                      <div className="flex-1 min-w-0 pb-6 border-b border-slate-100 dark:border-slate-700/30 last:border-0 last:pb-0">
                        <h4 className="font-medium text-slate-900 dark:text-white group-hover/step:text-[#5BC8C8] transition-colors leading-snug mb-3">
                          {step.step}
                        </h4>

                        <div className="space-y-2 mb-3">
                          <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                            <Clock className="w-4 h-4 text-[#5BC8C8]/60 flex-shrink-0" />
                            <span className="font-medium">{step.calendar}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                            <Users className="w-4 h-4 text-[#5BC8C8]/60 flex-shrink-0" />
                            <span className="font-medium truncate">{step.responsible}</span>
                          </div>
                        </div>

                        {step.risk && (
                          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700/30">
                            <div className="inline-flex items-center gap-2 px-3 py-2 bg-amber-50/50 dark:bg-amber-950/20 rounded-lg border border-amber-200/30 dark:border-amber-800/30">
                              <AlertTriangle className="w-4 h-4 text-amber-700 dark:text-amber-400 flex-shrink-0" />
                              <p className="text-xs font-medium text-amber-700 dark:text-amber-300">
                                {step.risk}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </button>
      </div>

      {/* Timeline Marker */}
      <div className="flex flex-col items-center flex-shrink-0 hidden lg:flex">
        <div
          className="w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 bg-gradient-to-br from-[#5BC8C8] to-[#3A8A96] shadow-lg timeline-dot dot-pulse transition-all duration-300 relative z-10"
          style={{ animationDelay: `${index * 0.15}s` }}
        />
        {index < 7 && (
          <div
            className="w-1 flex-1 min-h-40 bg-gradient-to-b from-[#5BC8C8] via-[#3A8A96] to-transparent opacity-30 timeline-line"
            style={{ animationDelay: `${index * 0.15 + 0.1}s` }}
          />
        )}
      </div>
    </div>
  );
}
