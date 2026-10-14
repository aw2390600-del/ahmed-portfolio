"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Terminal, Code2, Cpu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

const TYPING_WORDS = [
  "Graphic Designer.",
  "Web Developer.",
  "AI Creative.",
  "Veterinary Student.",
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = TYPING_WORDS[textIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < fullText.length) {
          setCurrentText(fullText.slice(0, currentText.length + 1));
        } else {
          // Pause at full word before deleting
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(fullText.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % TYPING_WORDS.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 md:px-12 overflow-hidden bg-[#08080b]">
      {/* Background Cyber Glow & Grid Effects */}
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#ff6b00]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#ff6b00]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Column 1: Headline, Typing Effect & CTAs (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/30 w-fit mb-6 shadow-[0_0_15px_rgba(255,107,0,0.2)]">
              <span className="w-2 h-2 rounded-full bg-[#ff6b00] shadow-[0_0_8px_#ff6b00] animate-ping" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#ff6b00]">
                Creative Technologist • AW DESIGN
              </span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-4 leading-[1.05]">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-neutral-400">Ahmed Wahed</span>
            </h1>

            {/* Futuristic Typing Effect Container */}
            <div className="min-h-[70px] sm:min-h-[85px] flex items-center mb-6">
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight text-neutral-300">
                I am a{" "}
                <span className="font-semibold text-[#ff6b00] glow-text-orange inline-block">
                  {currentText}
                </span>
                <span className="inline-block w-1 h-8 sm:h-10 ml-1.5 bg-[#ff6b00] shadow-[0_0_10px_#ff6b00] animate-pulse align-middle" />
              </h2>
            </div>

            {/* Bio Description (Keeping original user data) */}
            <p className="text-base sm:text-lg text-neutral-400 font-light leading-relaxed max-w-xl mb-10">
              I'm Ahmed Wahed, the creative mind behind <span className="text-white font-medium">AW DESIGN</span>. 
              I combine graphic design, programming, and AI to build premium digital experiences, 
              all while studying Veterinary Medicine at Delta University.
            </p>

            {/* CTAs: Solid Orange Button + Ghost Button */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Type 1: Solid Orange Button with Dark Text */}
              <Link
                href="/#work"
                className="group flex items-center gap-2.5 bg-[#ff6b00] text-black font-bold px-7 py-4 rounded-xl transition-all duration-300 hover:bg-[#ff7a00] hover:shadow-[0_0_30px_rgba(255,107,0,0.65)] hover:scale-105 active:scale-95 text-xs sm:text-sm uppercase tracking-wider"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Type 2: Ghost Button with Orange Border and Orange Text */}
              <Link
                href="/#contact"
                className="group flex items-center gap-2.5 bg-black/40 backdrop-blur-md border border-[#ff6b00]/60 text-[#ff6b00] font-semibold px-7 py-4 rounded-xl transition-all duration-300 hover:bg-[#ff6b00]/10 hover:border-[#ff6b00] hover:shadow-[0_0_20px_rgba(255,107,0,0.35)] hover:scale-105 active:scale-95 text-xs sm:text-sm uppercase tracking-wider"
              >
                <span>LET'S TALK</span>
                <Sparkles className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
              </Link>
            </div>

            {/* Quick Metrics Bar */}
            <div className="mt-12 pt-8 border-t border-white/[0.08] flex items-center gap-8">
              <div>
                <div className="text-2xl font-bold text-white tracking-tight">3+</div>
                <div className="text-xs text-neutral-400 uppercase tracking-widest">Fields</div>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-[#ff6b00] tracking-tight">10+</div>
                <div className="text-xs text-neutral-400 uppercase tracking-widest">Projects</div>
              </div>
              <div className="w-[1px] h-8 bg-white/10" />
              <div>
                <div className="text-2xl font-bold text-white tracking-tight">100%</div>
                <div className="text-xs text-neutral-400 uppercase tracking-widest">Commitment</div>
              </div>
            </div>
          </motion.div>

          {/* Column 2: Personal Photo inside Futuristic Glowing Orange Frame (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center"
          >
            {/* Glowing Aura behind frame */}
            <div className="absolute inset-4 bg-gradient-to-tr from-[#ff6b00]/30 via-[#ff6b00]/10 to-transparent rounded-3xl blur-2xl transform -rotate-3 scale-105 pointer-events-none" />

            {/* Futuristic Tech Frame Container */}
            <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl p-3 bg-gradient-to-b from-[#1b1b22] to-[#0f0f14] border-2 border-[#ff6b00]/70 shadow-[0_0_40px_rgba(255,107,0,0.35)] group">
              
              {/* Futuristic Corner Brackets */}
              <div className="absolute -top-1.5 -left-1.5 w-6 h-6 border-t-2 border-l-2 border-[#ff6b00] shadow-[0_0_10px_#ff6b00] z-20" />
              <div className="absolute -top-1.5 -right-1.5 w-6 h-6 border-t-2 border-r-2 border-[#ff6b00] shadow-[0_0_10px_#ff6b00] z-20" />
              <div className="absolute -bottom-1.5 -left-1.5 w-6 h-6 border-b-2 border-l-2 border-[#ff6b00] shadow-[0_0_10px_#ff6b00] z-20" />
              <div className="absolute -bottom-1.5 -right-1.5 w-6 h-6 border-b-2 border-r-2 border-[#ff6b00] shadow-[0_0_10px_#ff6b00] z-20" />

              {/* Top Tech Status Bar */}
              <div className="absolute top-5 inset-x-6 z-20 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] font-mono tracking-widest text-[#ff6b00] uppercase bg-black/60 px-2 py-0.5 rounded border border-[#ff6b00]/30 backdrop-blur-sm">
                  SYS.ONLINE // 2026
                </span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-neutral-300 bg-black/60 px-2 py-0.5 rounded border border-white/10 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  ACTIVE
                </span>
              </div>

              {/* Photo Image Wrapper */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0c0c10]">
                <Image
                  src="/profile.jpg"
                  alt="Ahmed Wahed"
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Tech Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#08080b] via-transparent to-transparent opacity-80" />
                <div className="absolute inset-0 border border-white/10 rounded-2xl pointer-events-none" />

                {/* Cyber Scan Line Effect */}
                <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#ff6b00] to-transparent opacity-60 shadow-[0_0_12px_#ff6b00] animate-bounce pointer-events-none" />

                {/* Bottom Card Inside Frame */}
                <div className="absolute bottom-4 inset-x-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-[#ff6b00]/40 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-white">
                        Ahmed Wahed
                      </div>
                      <div className="text-[11px] text-[#ff6b00] font-mono">
                        Designer • Dev • Vet Student
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-[#ff6b00]/20 border border-[#ff6b00]/50 flex items-center justify-center text-[#ff6b00]">
                      <Cpu className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Tech Badges */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-6 top-1/3 z-30 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#121218]/90 backdrop-blur-md border border-[#ff6b00]/50 shadow-[0_0_20px_rgba(255,107,0,0.25)] text-xs font-medium text-white"
              >
                <Code2 className="w-4 h-4 text-[#ff6b00]" />
                <span>Next.js & React</span>
              </motion.div>

              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 bottom-1/4 z-30 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#121218]/90 backdrop-blur-md border border-[#ff6b00]/50 shadow-[0_0_20px_rgba(255,107,0,0.25)] text-xs font-medium text-white"
              >
                <Terminal className="w-4 h-4 text-[#ff6b00]" />
                <span>Creative AI</span>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}