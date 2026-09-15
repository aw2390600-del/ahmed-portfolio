"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const WORDS = ["DESIGNING", "BUILDING", "LEARNING", "EXPERIMENTING"];

export default function Currently() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % WORDS.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 px-6 md:px-12 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-12">
        
        <div className="flex flex-col gap-6 max-w-lg">
          <h2 className="text-xl font-medium tracking-wide text-neutral-400">
            Currently...
          </h2>
          <ul className="text-2xl md:text-3xl font-light leading-relaxed text-neutral-300 space-y-2">
            <li>Studying veterinary medicine.</li>
            <li>Designing brands.</li>
            <li>Building digital experiences.</li>
            <li>Learning something new every day.</li>
          </ul>
        </div>

        <div className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter w-full md:w-auto overflow-hidden h-[1.2em] relative">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={index}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute whitespace-nowrap text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500"
            >
              {WORDS[index]}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
