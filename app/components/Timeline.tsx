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
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section id="timeline" className="relative py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Title */}
      <div className="mb-32 text-center">
        <h2 className="text-6xl lg:text-8xl font-900 text-[var(--text-primary)] mb-6 leading-[1.1]">
          Le Parcours<br />
          <span className="text-gradient">Complet</span>
        </h2>
        <p className="text-xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto leading-relaxed">
          7 phases essentielles pour transformer votre concept en dark kitchen opérationnelle
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#5BC8C8] via-[#3A8A96] to-transparent -translate-x-1/2 opacity-30 hidden lg:block" />

        {/* Items */}
        <div className="space-y-24">
          {timelineData.map((phase, index) => (
            <div
              key={phase.id}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              style={{
                opacity: visibleItems.includes(index) ? 1 : 0,
                transform: visibleItems.includes(index)
                  ? `translateY(0) translateX(0)`
                  : index % 2 === 0
                    ? `translateY(60px) translateX(-40px)`
                    : `translateY(60px) translateX(40px)`,
                transition: `all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 100}ms`,
              }}
            >
              <TimelineItem phase={phase} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
