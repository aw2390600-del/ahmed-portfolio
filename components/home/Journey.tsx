"use client";

import { motion } from "framer-motion";
import { JOURNEY } from "@/lib/data";

export default function Journey() {
  return (
    <section id="journey" className="py-32 px-6 md:px-12 bg-[#08080b] border-t border-white/[0.06] relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#ff6b00] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shadow-[0_0_8px_#ff6b00]" />
            Career & Trajectory
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#ff6b00]">Journey</span>
          </motion.h2>
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-8 border-l-2 border-[#ff6b00]/30 pl-8 md:pl-12 ml-4 md:ml-8 relative">
          {JOURNEY.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-[#0e0e15] border border-white/[0.08] hover:border-[#ff6b00]/60 transition-all duration-300 relative group hover:shadow-[0_0_25px_rgba(255,107,0,0.18)]"
            >
              {/* Glowing Timeline Marker */}
              <div className="absolute w-4 h-4 bg-[#ff6b00] rounded-full -left-[42px] md:-left-[58px] top-7 shadow-[0_0_12px_#ff6b00] border-2 border-black group-hover:scale-125 transition-transform" />
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#ff6b00] transition-colors">
                  {item.role}
                </h3>
                <span className="text-xs font-mono font-semibold tracking-widest uppercase text-[#ff6b00] bg-[#ff6b00]/10 border border-[#ff6b00]/30 px-3 py-1 rounded-full w-fit">
                  {item.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
