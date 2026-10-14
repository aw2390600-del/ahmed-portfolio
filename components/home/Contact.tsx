"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Palette, Send } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 md:px-12 bg-[#08080b] border-t border-white/[0.06] relative overflow-hidden">
      {/* Background Neon Aura */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#ff6b00]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        
        {/* Status Pill */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#ff6b00] mb-6 px-4 py-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/30 shadow-[0_0_15px_rgba(255,107,0,0.2)]">
          <Send className="w-3.5 h-3.5 text-[#ff6b00]" />
          Get In Touch
        </div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-white"
        >
          Have an <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#ff6b00]">idea?</span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-2xl sm:text-4xl font-light text-neutral-400 mb-16"
        >
          Let's build something <span className="text-white font-medium">great together.</span>
        </motion.p>

        {/* Buttons Row: Solid Orange + Ghost Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-24 max-w-4xl"
        >
          {/* Main Solid Orange Button with Dark Text */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="group flex items-center gap-2.5 bg-[#ff6b00] text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 hover:bg-[#ff7a00] hover:shadow-[0_0_30px_rgba(255,107,0,0.7)] hover:scale-105 active:scale-95 uppercase text-xs sm:text-sm tracking-wider"
          >
            <Mail className="w-4 h-4" />
            <span>EMAIL ME</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          
          {/* Ghost Button: Call Me */}
          <a
            href={`tel:${PERSONAL_INFO.socials.phone}`}
            className="group flex items-center gap-2.5 bg-black/40 border border-[#ff6b00]/60 text-[#ff6b00] px-7 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-[#ff6b00]/10 hover:border-[#ff6b00] hover:shadow-[0_0_20px_rgba(255,107,0,0.3)] hover:scale-105 active:scale-95 uppercase text-xs sm:text-sm tracking-wider"
          >
            <Phone className="w-4 h-4" />
            <span>CALL ME</span>
          </a>
          
          {/* Ghost Button: Instagram */}
          <a
            href={PERSONAL_INFO.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 bg-black/40 border border-white/10 text-neutral-300 px-7 py-4 rounded-xl font-semibold transition-all duration-300 hover:border-[#ff6b00] hover:text-[#ff6b00] hover:bg-[#ff6b00]/10 hover:shadow-[0_0_20px_rgba(255,107,0,0.25)] hover:scale-105 active:scale-95 uppercase text-xs sm:text-sm tracking-wider"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#ff6b00]">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span>INSTAGRAM</span>
          </a>

          {/* Ghost Button: Behance */}
          <a
            href={PERSONAL_INFO.socials.behance}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 bg-black/40 border border-white/10 text-neutral-300 px-7 py-4 rounded-xl font-semibold transition-all duration-300 hover:border-[#ff6b00] hover:text-[#ff6b00] hover:bg-[#ff6b00]/10 hover:shadow-[0_0_20px_rgba(255,107,0,0.25)] hover:scale-105 active:scale-95 uppercase text-xs sm:text-sm tracking-wider"
          >
            <Palette className="w-4 h-4 text-[#ff6b00]" />
            <span>BEHANCE</span>
          </a>
          
          {/* Ghost Button: LinkedIn */}
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 bg-black/40 border border-white/10 text-neutral-300 px-7 py-4 rounded-xl font-semibold transition-all duration-300 hover:border-[#ff6b00] hover:text-[#ff6b00] hover:bg-[#ff6b00]/10 hover:shadow-[0_0_20px_rgba(255,107,0,0.25)] hover:scale-105 active:scale-95 uppercase text-xs sm:text-sm tracking-wider"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-[#ff6b00]">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect width="4" height="12" x="2" y="9"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
            <span>LINKEDIN</span>
          </a>
        </motion.div>

        {/* Brand Signoff */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-col items-center p-8 rounded-3xl bg-[#0f0f16] border border-white/[0.08] max-w-xl w-full"
        >
          <div className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
            AHMED WAHED
          </div>
          <div className="text-xs sm:text-sm tracking-wider uppercase text-[#ff6b00] font-mono mb-3">
            {PERSONAL_INFO.role}
          </div>
          <div className="text-xs text-neutral-400 font-mono">
            Direct: <span className="text-white">{PERSONAL_INFO.email}</span> • <span className="text-white">{PERSONAL_INFO.socials.phone}</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
