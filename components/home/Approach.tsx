"use client";

import { motion } from "framer-motion";
import { APPROACH } from "@/lib/data";

export default function Approach() {
  return (
    <section className="py-32 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-medium tracking-tight mb-20"
        >
          From Idea to Experience.
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-neutral-100 z-0" />

          {APPROACH.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 flex flex-col gap-6"
            >
              <div className="w-24 h-24 rounded-full bg-neutral-50 flex items-center justify-center text-2xl font-light text-neutral-400 border border-neutral-100">
                {step.step}
              </div>
              <div>
                <h3 className="text-lg font-medium tracking-wide mb-3">{step.title}</h3>
                <p className="text-neutral-500 font-light leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
