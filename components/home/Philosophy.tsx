"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="py-40 px-6 md:px-12 bg-[#08080b] border-t border-white/[0.06] flex items-center justify-center text-center relative overflow-hidden">
      {/* Background Neon Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#ff6b00]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10">
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#ff6b00] mb-6 px-3.5 py-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/30">
          Core Belief
        </div>

        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-10 text-white"
        >
          I don't want to choose between{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b00] via-[#ff8c26] to-white glow-text-orange">
            creativity and technology.
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg sm:text-2xl text-neutral-400 font-light max-w-3xl leading-relaxed"
        >
          I believe the best digital experiences happen when design, technology, and problem-solving work together.
        </motion.p>
      </div>
    </section>
  );
}
