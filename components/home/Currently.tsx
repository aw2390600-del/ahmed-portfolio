"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["DESIGNING", "BUILDING", "LEARNING", "EXPERIMENTING"];

export default function Currently() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 bg-[#0c0c12] border-t border-white/[0.06] text-white overflow-hidden relative">
      <div className="absolute inset-0 cyber-dots opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12 relative z-10">
        
        <div className="flex flex-col gap-5 max-w-lg">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#ff6b00]">
            <span className="w-2 h-2 rounded-full bg-[#ff6b00] animate-ping" />
            Live Status
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-white">
            Currently engaged in...
          </h2>
          <ul className="text-lg sm:text-xl font-light leading-relaxed text-neutral-300 space-y-2.5">
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
              Studying veterinary medicine.
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
              Designing bold visual brands.
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
              Building digital products & interactive UIs.
            </li>
            <li className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00]" />
              Learning something new every single day.
            </li>
          </ul>
        </div>

        <div className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter w-full md:w-auto overflow-hidden h-[1.3em] relative">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={index}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-white via-[#ff6b00] to-[#ff8c26] glow-text-orange"
            >
              {WORDS[index]}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
