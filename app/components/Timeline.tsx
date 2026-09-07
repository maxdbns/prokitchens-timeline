"use client";

import { useEffect, useRef, useState } from "react";
import TimelineItem from "./TimelineItem";
import { timelineData } from "../data/timelineData";

export default function Timeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = itemsRef.current.indexOf(entry.target as HTMLDivElement);
          if (entry.isIntersecting && !visibleItems.includes(index)) {
            setVisibleItems((prev) => [...prev, index]);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section id="timeline" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Titre Section */}
      <div className="mb-32 text-center animate-in-view in-view">
        <h2 className="text-7xl lg:text-8xl font-black text-slate-900 dark:text-white mb-6">
          Le Parcours<br/><span className="text-[#5BC8C8]">Complet</span>
        </h2>
        <p className="text-2xl text-slate-700 dark:text-slate-400 font-light max-w-2xl mx-auto">
          7 phases essentielles pour transformer votre concept en dark kitchen opérationnelle
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5BC8C8] via-[#3A8A96] to-transparent -translate-x-1/2 opacity-30" />

        {/* Items */}
        <div className="space-y-32">
          {timelineData.map((phase, index) => (
            <div
              key={phase.id}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className={`animate-in-view ${visibleItems.includes(index) ? "in-view" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <TimelineItem phase={phase} index={index} isVisible={visibleItems.includes(index)} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
