"use client";

import { motion } from "framer-motion";
import { STATISTICS } from "@/lib/data";

export default function Statistics() {
  return (
    <section className="py-24 px-6 md:px-12 border-y border-neutral-100 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATISTICS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-2"
            >
              <div className="text-4xl md:text-6xl font-light tracking-tighter text-black">
                {stat.value}
              </div>
              <div className="text-xs md:text-sm font-medium tracking-widest uppercase text-neutral-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
