"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6 md:px-12 bg-[#2C2C2C] text-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-medium tracking-widest uppercase text-[#8B9085] mb-20"
        >
          What I Do
        </motion.h2>

        <div className="flex flex-col">
          {SKILLS.map((skillGroup, index) => (
            <motion.div 
              key={skillGroup.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group border-b border-[#8B9085]/20 py-12 md:py-16 flex flex-col md:flex-row md:items-start justify-between gap-12"
            >
              <div className="md:w-1/3 flex flex-col gap-6">
                <span className="text-xs font-medium tracking-widest uppercase text-[#8B9085]">
                  {skillGroup.category}
                </span>
                <span className="text-6xl md:text-8xl font-light tracking-tighter text-[#FAF9F6]/10 transition-colors duration-500 group-hover:text-[#D6CDB3]">
                  {skillGroup.id}
                </span>
              </div>
              
              <div className="md:w-2/3">
                <ul className="flex flex-col gap-4">
                  {skillGroup.items.map((item, i) => (
                    <li 
                      key={i}
                      className="text-3xl md:text-5xl font-light tracking-tight text-[#8B9085] hover:text-[#FAF9F6] transition-colors duration-300"
                    >
                      {item}
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
