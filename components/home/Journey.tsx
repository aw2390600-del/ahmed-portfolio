"use client";

import { motion } from "framer-motion";
import { JOURNEY } from "@/lib/data";

export default function Journey() {
  return (
    <section id="journey" className="py-32 px-6 md:px-12 bg-[#FAF9F6]">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-medium tracking-tight mb-20 text-center text-[#2C2C2C]"
        >
          My Journey
        </motion.h2>

        <div className="flex flex-col gap-12 border-l border-[#D6CDB3]/50 pl-8 md:pl-12 ml-4 md:ml-0 relative">
          {JOURNEY.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute w-3 h-3 bg-[#D6CDB3] rounded-full -left-[43px] md:-left-[55px] top-2" />
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                <h3 className="text-2xl font-medium text-[#2C2C2C]">{item.role}</h3>
                <span className="text-sm tracking-widest uppercase text-[#8B9085] font-medium">
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
