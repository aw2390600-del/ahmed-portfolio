"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-start md:justify-center pt-32 md:pt-24 pb-[45vh] md:pb-12 px-6 md:px-12 overflow-hidden bg-[#FAF9F6]">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute bottom-0 w-full h-[55vh] md:h-full md:inset-0">
          <Image
            src="/profile-bg.jpg"
            alt="Ahmed Wahed Workspace"
            fill
            quality={100}
            unoptimized
            className="object-cover object-[70%_top] md:object-center"
            priority
          />
          {/* Mobile fade-out at the top of the image to blend with the text background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F6] via-[#FAF9F6]/20 to-transparent md:hidden" />
          {/* Desktop gradient overlay */}
          <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-[#FAF9F6] via-[#FAF9F6]/80 to-transparent w-2/3" />
        </div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto flex items-center h-full">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mt-8 md:mt-0"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95] mb-6 text-[#2C2C2C]">
            Hi, I'm Ahmed.
          </h1>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#8B9085] mb-8 leading-tight">
            Graphic Designer.<br />
            Web Developer.<br />
            AI Creative.
          </h2>
          <p className="text-lg md:text-xl text-[#2C2C2C]/80 font-light leading-relaxed max-w-lg mb-12 drop-shadow-sm">
            I'm Ahmed Wahed, the creative mind behind AW DESIGN. I combine graphic design, programming, and AI to build premium digital experiences, all while studying Veterinary Medicine at Delta University.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href="/#work"
              className="group flex items-center gap-2 bg-[#2C2C2C] text-[#FAF9F6] px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[#D6CDB3] hover:text-[#2C2C2C] hover:scale-105 uppercase tracking-widest text-sm shadow-xl"
            >
              VIEW MY WORK
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            <Link
              href="/#contact"
              className="group flex items-center gap-2 bg-white/50 backdrop-blur-md text-[#2C2C2C] border border-[#2C2C2C]/20 px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-white/80 hover:scale-105 uppercase tracking-widest text-sm shadow-xl"
            >
              LET'S TALK
            </Link>
          </div>
        </motion.div>

        {/* Floating Cards (Scattered across the screen) */}
        <FloatingCard 
          title="GRAPHIC DESIGN" 
          className="top-32 left-[45%] hidden md:block" 
          delay={0.3}
        />
        <FloatingCard 
          title="WEB DEVELOPMENT" 
          className="bottom-32 left-[50%] hidden md:block" 
          delay={0.5}
        />
        <FloatingCard 
          title="AI CREATIVE" 
          className="top-1/4 right-[5%] hidden lg:block" 
          delay={0.7}
        />
      </div>
    </section>
  );
}

function FloatingCard({ title, className, delay = 0 }: { title: string, className?: string, delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "absolute z-20 cursor-default",
        className
      )}
    >
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        whileHover={{ 
          scale: 0.9, 
          x: (delay * 10) % 2 === 0 ? 30 : -30, 
          y: (delay * 10) % 3 === 0 ? 30 : -30,
          opacity: 0.6
        }}
        transition={{ 
          y: { repeat: Infinity, duration: 4 + (delay * 2), ease: "easeInOut", times: [0, 0.5, 1] },
          hover: { duration: 0.3, type: "spring", stiffness: 300 }
        }}
        className={cn(
          "px-5 py-2.5 bg-white/70 backdrop-blur-md rounded-full shadow-xl border border-white/50 text-xs font-medium tracking-widest uppercase transition-colors duration-300 text-[#2C2C2C]"
        )}
      >
        {title}
      </motion.div>
    </motion.div>
  );
}
