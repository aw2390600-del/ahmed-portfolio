"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STATISTICS } from "@/lib/data";

function CounterItem({
  stat,
  index,
}: {
  stat: { value: string; label: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  // Parse numeric value if present
  const numericMatch = stat.value.match(/(\d+)/);
  const targetNumber = numericMatch ? parseInt(numericMatch[1], 10) : null;
  const suffix = stat.value.includes("+") ? "+" : "";
  const isInfinity = stat.value.includes("∞");

  useEffect(() => {
    if (!isInView || targetNumber === null) return;

    let start = 0;
    const duration = 1500;
    const steps = 30;
    const increment = targetNumber / steps;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        setCount(targetNumber);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, targetNumber]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-8 rounded-2xl bg-[#0f0f15] border border-white/[0.07] hover:border-[#ff6b00]/60 transition-all duration-500 hover:shadow-[0_0_35px_rgba(255,107,0,0.22)] flex flex-col justify-between overflow-hidden"
    >
      {/* Subtle corner glow on hover */}
      <div className="absolute -top-10 -right-10 w-24 h-24 bg-[#ff6b00]/10 rounded-full blur-xl group-hover:bg-[#ff6b00]/25 transition-all duration-500 pointer-events-none" />

      <div className="flex items-baseline gap-1 mb-3">
        <span className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-100 to-[#ff6b00] group-hover:to-[#ff8c26] transition-all">
          {isInfinity
            ? "∞"
            : targetNumber !== null
            ? String(count).padStart(2, "0") + suffix
            : stat.value}
        </span>
      </div>

      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] group-hover:shadow-[0_0_8px_#ff6b00] transition-shadow" />
        <span className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-neutral-400 group-hover:text-white transition-colors">
          {stat.label}
        </span>
      </div>
    </motion.div>
  );
}

export default function Statistics() {
  return (
    <section className="py-20 px-6 md:px-12 bg-[#08080b] border-y border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATISTICS.map((stat, index) => (
            <CounterItem key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
