"use client";

import { motion } from "framer-motion";
import { APPROACH } from "@/lib/data";

export default function Approach() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#08080b] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#ff6b00] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shadow-[0_0_8px_#ff6b00]" />
            Workflow & Process
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
          >
            From Idea to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#ff6b00]">Experience.</span>
          </motion.h2>
        </div>

        {/* 4 Step Process Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {APPROACH.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-8 rounded-3xl bg-[#0e0e15] border border-white/[0.08] hover:border-[#ff6b00]/60 transition-all duration-500 hover:shadow-[0_0_35px_rgba(255,107,0,0.22)] flex flex-col justify-between group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#ff6b00]/10 border border-[#ff6b00]/30 flex items-center justify-center text-xl font-bold text-[#ff6b00] group-hover:bg-[#ff6b00] group-hover:text-black transition-all duration-500 mb-8 shadow-[0_0_15px_rgba(255,107,0,0.15)]">
                {step.step}
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight text-white mb-2 group-hover:text-[#ff6b00] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-neutral-400 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
