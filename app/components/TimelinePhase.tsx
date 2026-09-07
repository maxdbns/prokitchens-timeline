"use client";

import { useState, useEffect } from "react";
import { ChevronDown, AlertCircle, CheckCircle2, Clock } from "lucide-react";
import { Phase } from "../data/timelineData";

interface TimelinePhaseProps {
  phase: Phase;
  index: number;
}

export default function TimelinePhase({ phase, index }: TimelinePhaseProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  const isLeft = index % 2 === 0;
  const borderColor = "border-[#5BC8C8]";
  const bgGradient = "from-[#EAF5F6] dark:from-[#1A4E58]/20";

  return (
    <div className={`flex gap-8 ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
      {/* Content */}
      <div className="flex-1">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-full text-left transition-all duration-500 ${
            isExpanded
              ? `bg-gradient-to-br ${bgGradient} to-transparent border-2 ${borderColor} shadow-lg`
              : "bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-[#5BC8C8] hover:shadow-md"
          } p-6 rounded-lg group`}
        >
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <p className="text-xs font-bold text-[#3A8A96] dark:text-[#5BC8C8] tracking-widest mb-2">
                PHASE {String(index + 1).padStart(2, "0")} • {phase.duration}
              </p>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-[#5BC8C8] transition-colors">
                {phase.title}
              </h3>
              {!isExpanded && (
                <p className="text-sm text-slate-600 dark:text-slate-400">
                  {phase.steps.length} steps
                </p>
              )}
            </div>
            <ChevronDown
              className={`w-6 h-6 text-[#5BC8C8] flex-shrink-0 transition-transform duration-500 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </div>

          {/* Expanded Steps */}
          {isExpanded && (
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
              <div className="space-y-4">
                {phase.steps.map((step, idx) => (
                  <div
                    key={idx}
                    className="timeline-content flex gap-4"
                    style={{ animationDelay: `${idx * 0.05}s` }}
                  >
                    <div className="flex-shrink-0 pt-1">
                      <div className="w-6 h-6 rounded-full border-2 border-[#5BC8C8] bg-white dark:bg-slate-800 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-[#5BC8C8]" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0 pb-4 border-b border-slate-200 dark:border-slate-700 last:border-0 last:pb-0">
                      <h4 className="font-medium text-slate-900 dark:text-white leading-snug">
                        {step.step}
                      </h4>
                      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                          <Clock className="w-4 h-4 text-[#5BC8C8]" />
                          <span>{step.calendar}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                          <CheckCircle2 className="w-4 h-4 text-[#5BC8C8]" />
                          <span className="truncate">{step.responsible}</span>
                        </div>
                      </div>
                      {step.risk && (
                        <div className="mt-3 p-3 bg-red-50/50 dark:bg-red-950/20 rounded border border-red-200 dark:border-red-800/30 flex gap-2">
                          <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                          <p className="text-xs font-medium text-red-700 dark:text-red-300">
                            {step.risk}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </button>
      </div>

      {/* Timeline Marker */}
      <div className="flex flex-col items-center">
        <div
          className={`w-4 h-4 rounded-full border-4 border-white dark:border-slate-900 bg-[#5BC8C8] timeline-dot transition-all duration-300 ${
            isExpanded ? "ring-4 ring-[#5BC8C8] ring-opacity-30" : ""
          }`}
          style={{ animationDelay: `${index * 0.15}s` }}
        />
        {index < 7 && (
          <div
            className="w-1 flex-1 min-h-24 bg-gradient-to-b from-[#5BC8C8] to-transparent opacity-30 timeline-line"
            style={{ animationDelay: `${index * 0.15 + 0.1}s` }}
          />
        )}
      </div>
    </div>
  );
}
