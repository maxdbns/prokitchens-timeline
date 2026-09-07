"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import TimelinePhase from "./TimelinePhase";
import { timelineData } from "../data/timelineData";

export default function Timeline() {
  const [expandedPhase, setExpandedPhase] = useState<string | null>(null);

  return (
    <section className="flex-1 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-24 animate-fadeInUp">
          <div className="text-center mb-12">
            <h1 className="text-5xl sm:text-6xl font-light mb-6 text-slate-900 dark:text-white">
              Dark Kitchen <span className="font-bold text-[#5BC8C8]">Launch</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto mb-8">
              A complete blueprint for launching your dark kitchen operation. From project preparation to opening day, every milestone matters.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-4 py-2 bg-[#EAF5F6] dark:bg-[#1A4E58] rounded-full">
                <p className="text-sm font-semibold text-[#1A4E58] dark:text-[#5BC8C8]">7 Phases</p>
              </div>
              <div className="px-4 py-2 bg-[#EAF5F6] dark:bg-[#1A4E58] rounded-full">
                <p className="text-sm font-semibold text-[#1A4E58] dark:text-[#5BC8C8]">40+ Milestones</p>
              </div>
              <div className="px-4 py-2 bg-[#EAF5F6] dark:bg-[#1A4E58] rounded-full">
                <p className="text-sm font-semibold text-[#1A4E58] dark:text-[#5BC8C8]">2-12 Months Duration</p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Phases */}
        <div className="space-y-4">
          {timelineData.map((phase, index) => (
            <TimelinePhase
              key={phase.id}
              phase={phase}
              index={index}
              isExpanded={expandedPhase === phase.id}
              onToggle={() =>
                setExpandedPhase(expandedPhase === phase.id ? null : phase.id)
              }
            />
          ))}
        </div>

        {/* Risk Summary */}
        <div className="mt-24 pt-12 border-t border-slate-200 dark:border-slate-700">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white mb-8">
            Key Risk Areas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Insufficient capitalization",
              "Supplier delays",
              "Regulatory compliance",
              "Team recruitment gaps",
              "Timing misalignment",
              "Technical validation",
            ].map((risk, idx) => (
              <div
                key={idx}
                className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-red-100 dark:border-red-900/30 hover:shadow-md transition-shadow"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 bg-red-500 rounded-full flex-shrink-0" />
                  <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    {risk}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
