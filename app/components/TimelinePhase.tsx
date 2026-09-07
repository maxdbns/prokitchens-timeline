"use client";

import { ChevronDown } from "lucide-react";
import { Phase } from "../data/timelineData";

interface TimelinePhaseProps {
  phase: Phase;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
}

const phaseColors = [
  { bg: "bg-blue-50", border: "border-blue-200", dot: "bg-blue-500", darkBg: "dark:bg-blue-950", darkBorder: "dark:border-blue-800" },
  { bg: "bg-emerald-50", border: "border-emerald-200", dot: "bg-emerald-500", darkBg: "dark:bg-emerald-950", darkBorder: "dark:border-emerald-800" },
  { bg: "bg-amber-50", border: "border-amber-200", dot: "bg-amber-500", darkBg: "dark:bg-amber-950", darkBorder: "dark:border-amber-800" },
  { bg: "bg-purple-50", border: "border-purple-200", dot: "bg-purple-500", darkBg: "dark:bg-purple-950", darkBorder: "dark:border-purple-800" },
  { bg: "bg-pink-50", border: "border-pink-200", dot: "bg-pink-500", darkBg: "dark:bg-pink-950", darkBorder: "dark:border-pink-800" },
  { bg: "bg-cyan-50", border: "border-cyan-200", dot: "bg-cyan-500", darkBg: "dark:bg-cyan-950", darkBorder: "dark:border-cyan-800" },
  { bg: "bg-orange-50", border: "border-orange-200", dot: "bg-orange-500", darkBg: "dark:bg-orange-950", darkBorder: "dark:border-orange-800" },
];

export default function TimelinePhase({
  phase,
  index,
  isExpanded,
  onToggle,
}: TimelinePhaseProps) {
  const color = phaseColors[index % phaseColors.length];

  return (
    <div
      className="animate-slideInFromLeft"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <button
        onClick={onToggle}
        className={`w-full text-left transition-all duration-300 ${
          isExpanded
            ? `${color.bg} ${color.darkBg} border-2 ${color.border} ${color.darkBorder}`
            : "bg-white dark:bg-slate-800 border-l-4 border-slate-200 dark:border-slate-700 hover:shadow-md"
        } p-6 rounded-xl`}
      >
        <div className="flex items-start gap-4">
          <div className={`flex-shrink-0 w-3 h-3 mt-2 rounded-full ${color.dot}`} />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-slate-500 dark:text-slate-400 tracking-widest mb-1">
                  PHASE {index + 1}
                </p>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                  {phase.title}
                </h3>
              </div>
              <div className="flex-shrink-0">
                <ChevronDown
                  className={`w-5 h-5 text-slate-600 dark:text-slate-400 transition-transform duration-300 ${
                    isExpanded ? "rotate-180" : ""
                  }`}
                />
              </div>
            </div>
            {!isExpanded && (
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                {phase.steps.length} steps • {phase.duration}
              </p>
            )}
          </div>
        </div>
      </button>

      {/* Expanded Content */}
      {isExpanded && (
        <div className={`border-x-2 border-b-2 ${color.border} ${color.darkBorder} bg-white dark:bg-slate-800 rounded-b-xl overflow-hidden`}>
          <div className="p-6 space-y-4">
            {phase.steps.map((step, stepIndex) => (
              <div
                key={stepIndex}
                className="flex gap-4 pb-4 border-b border-slate-200 dark:border-slate-700 last:border-0 last:pb-0 animate-fadeInUp"
                style={{ animationDelay: `${stepIndex * 0.05}s` }}
              >
                <div className="flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${color.bg} ${color.darkBg} text-slate-700 dark:text-slate-300`}>
                    {stepIndex + 1}
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-slate-900 dark:text-white">
                    {step.step}
                  </h4>
                  <div className="mt-2 grid grid-cols-2 gap-4 text-xs">
                    <div>
                      <p className="text-slate-500 dark:text-slate-400">Timeline</p>
                      <p className="font-semibold text-slate-700 dark:text-slate-300">
                        {step.calendar}
                      </p>
                    </div>
                    <div>
                      <p className="text-slate-500 dark:text-slate-400">Responsibility</p>
                      <p className="font-semibold text-slate-700 dark:text-slate-300">
                        {step.responsible}
                      </p>
                    </div>
                  </div>
                  {step.risk && (
                    <div className="mt-3 p-2 bg-red-50 dark:bg-red-950/20 rounded border border-red-200 dark:border-red-800/30">
                      <p className="text-xs font-medium text-red-700 dark:text-red-300">
                        ⚠️ Risk: {step.risk}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
