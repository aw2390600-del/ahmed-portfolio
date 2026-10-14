"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { Check, Sparkles } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-[#08080b] border-t border-white/[0.06] text-white relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#ff6b00] mb-3">
              <Sparkles className="w-4 h-4 text-[#ff6b00]" />
              Core Capabilities
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
            >
              Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#ff6b00]">Expertise</span>
            </motion.h2>
          </div>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-md leading-relaxed">
            Proficiencies across visual identity design, interactive software engineering, generative AI, and professional tooling.
          </p>
        </div>

        {/* Skills Groups */}
        <div className="flex flex-col gap-8">
          {SKILLS.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group p-8 md:p-12 rounded-3xl bg-[#0e0e15] border border-white/[0.08] hover:border-[#ff6b00]/60 hover:shadow-[0_0_35px_rgba(255,107,0,0.2)] transition-all duration-500 flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-16"
            >
              <div className="md:w-1/3 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-semibold tracking-widest uppercase text-[#ff6b00] bg-[#ff6b00]/10 border border-[#ff6b00]/30 px-3 py-1 rounded-full">
                    {skillGroup.category}
                  </span>
                </div>
                <div className="mt-6 md:mt-12">
                  <span className="text-6xl sm:text-8xl font-black tracking-tighter text-neutral-800 transition-colors duration-500 group-hover:text-[#ff6b00]/80">
                    {skillGroup.id}
                  </span>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <ul className="grid sm:grid-cols-2 gap-4">
                  {skillGroup.items.map((item, i) => (
                    <li 
                      key={i}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-[#ff6b00]/40 hover:bg-[#ff6b00]/[0.04] transition-all duration-300 flex items-center gap-3"
                    >
                      <span className="w-6 h-6 rounded-lg bg-[#ff6b00]/10 border border-[#ff6b00]/30 flex items-center justify-center text-[#ff6b00] shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-base sm:text-lg font-medium text-neutral-300 group-hover:text-white transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
