"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-medium tracking-tight mb-4 text-[#2C2C2C]"
        >
          Have an idea?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-5xl font-light text-[#8B9085] mb-16"
        >
          Let's build something great.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-32"
        >
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group flex items-center gap-2 bg-[#2C2C2C] text-[#FAF9F6] px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[#D6CDB3] hover:text-[#2C2C2C] hover:scale-105 uppercase text-sm tracking-widest"
          >
            EMAIL ME
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          
          <a
            href={`tel:${PERSONAL_INFO.socials.phone}`}
            className="group flex items-center gap-2 bg-transparent border border-[#D6CDB3] text-[#2C2C2C] px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[#D6CDB3]/20 hover:scale-105 uppercase text-sm tracking-widest"
          >
            CALL ME
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          
          <a
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-transparent border border-[#D6CDB3] text-[#2C2C2C] px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[#D6CDB3]/20 hover:scale-105 uppercase text-sm tracking-widest"
          >
            INSTAGRAM
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>

          <a
            href={PERSONAL_INFO.socials.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-transparent border border-[#D6CDB3] text-[#2C2C2C] px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[#D6CDB3]/20 hover:scale-105 uppercase text-sm tracking-widest"
          >
            BEHANCE
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
          
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-transparent border border-[#D6CDB3] text-[#2C2C2C] px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[#D6CDB3]/20 hover:scale-105 uppercase text-sm tracking-widest"
          >
            LINKEDIN
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="text-2xl font-medium tracking-tight mb-2 text-[#2C2C2C]">
            AHMED WAHED
          </div>
          <div className="text-sm tracking-widest uppercase text-[#8B9085] font-medium">
            {PERSONAL_INFO.role}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
