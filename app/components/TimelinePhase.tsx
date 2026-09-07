"use client";

import { useState } from "react";
import { ChevronDown, Clock, MapPin } from "lucide-react";
import { Phase } from "../data/timelineData";

interface TimelinePhaseProps {
  phase: Phase;
  index: number;
}

export default function TimelinePhase({ phase, index }: TimelinePhaseProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div className={`flex gap-12 items-start ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
      {/* Content Card */}
      <div className="flex-1">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="card-hover w-full text-left bg-white dark:bg-slate-800/60 backdrop-blur-sm border border-slate-200/50 dark:border-slate-700/50 rounded-2xl p-8 group"
        >
          <div className="flex items-start justify-between gap-6 mb-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-3 mb-3">
                <span className="inline-block px-3 py-1 bg-[#EAF5F6] dark:bg-[#1A4E58]/40 rounded-full">
                  <p className="text-xs font-bold text-[#1A4E58] dark:text-[#5BC8C8] tracking-widest">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </span>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide">
                  {phase.duration}
                </p>
              </div>
              <h3 className="card-title text-3xl font-semibold text-slate-900 dark:text-white mb-2">
                {phase.title}
              </h3>
              {!isExpanded && (
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {phase.steps.length} milestone{phase.steps.length !== 1 ? "s" : ""} in this phase
                </p>
              )}
            </div>
            <ChevronDown
              className={`w-6 h-6 text-[#5BC8C8] flex-shrink-0 transition-all duration-500 ${
                isExpanded ? "rotate-180 scale-110" : "group-hover:scale-110"
              }`}
            />
          </div>

          {/* Expanded Content */}
          {isExpanded && (
            <div className="timeline-content mt-8 pt-8 border-t border-slate-200/50 dark:border-slate-700/50">
              <div className="space-y-5">
                {phase.steps.map((step, idx) => (
                  <div key={idx} className="group/step">
                    <div className="flex gap-4 pb-5 border-b border-slate-100 dark:border-slate-700/30 last:border-0 last:pb-0">
                      {/* Step Number */}
                      <div className="flex-shrink-0 pt-1">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#5BC8C8] to-[#3A8A96] flex items-center justify-center">
                          <span className="text-xs font-bold text-white">{idx + 1}</span>
                        </div>
                      </div>

                      {/* Step Content */}
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-slate-900 dark:text-white group-hover/step:text-[#5BC8C8] transition-colors leading-snug mb-3">
                          {step.step}
                        </h4>

                        {/* Meta Info */}
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                            <Clock className="w-4 h-4 text-[#5BC8C8]/60 flex-shrink-0" />
                            <span>{step.calendar}</span>
                          </div>
                          <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                            <MapPin className="w-4 h-4 text-[#5BC8C8]/60 flex-shrink-0" />
                            <span className="truncate">{step.responsible}</span>
                          </div>
                        </div>

                        {/* Risk Badge (subtle) */}
                        {step.risk && (
                          <div className="mt-3 pt-3 border-t border-slate-100 dark:border-slate-700/30">
                            <div className="inline-flex items-center gap-2 px-3 py-2 bg-amber-50/50 dark:bg-amber-950/20 rounded-lg border border-amber-200/30 dark:border-amber-800/30">
                              <div className="w-2 h-2 rounded-full bg-amber-600 dark:bg-amber-400" />
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
      <div className="flex flex-col items-center flex-shrink-0">
        <div
          className="w-5 h-5 rounded-full border-4 border-white dark:border-slate-900 bg-gradient-to-br from-[#5BC8C8] to-[#3A8A96] shadow-lg timeline-dot dot-pulse transition-all duration-300 relative z-10"
          style={{ animationDelay: `${index * 0.15}s` }}
        />
        {index < 7 && (
          <div
            className="w-1 flex-1 min-h-32 bg-gradient-to-b from-[#5BC8C8] via-[#3A8A96] to-transparent opacity-40 timeline-line"
            style={{ animationDelay: `${index * 0.15 + 0.1}s` }}
          />
        )}
      </div>
    </div>
  );
}
