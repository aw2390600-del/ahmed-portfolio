"use client";

import { motion } from "framer-motion";
import { Palette, MonitorSmartphone, Sparkles, Stethoscope } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-[#08080b] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#ff6b00] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shadow-[0_0_8px_#ff6b00]" />
            Background & Mindset
          </div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-8 text-white"
          >
            More than <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#ff6b00]">one path.</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-lg sm:text-xl text-neutral-400 font-light leading-relaxed space-y-4"
          >
            <p>
              I'm Ahmed Wahed, a veterinary medicine student with a strong passion for graphic design, technology, and digital experiences.
            </p>
            <p>
              My journey started from visual creativity and design, then expanded into programming and building digital products.
            </p>
            <p>
              Today, I enjoy combining creativity, technology, and problem-solving to create useful and visually strong experiences.
            </p>
          </motion.div>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AboutCard 
            icon={<Palette className="w-5 h-5 text-[#ff6b00]" />}
            number="01"
            category="Design"
            title="Graphic Design"
            description="Specializing in branding, visual identity, and social media design to create premium experiences."
            delay={0.1}
          />
          <AboutCard 
            icon={<MonitorSmartphone className="w-5 h-5 text-[#ff6b00]" />}
            number="02"
            category="Development"
            title="Web Dev & Programming"
            description="Building modern websites and digital products using React, Next.js, and modern tools."
            delay={0.2}
          />
          <AboutCard 
            icon={<Sparkles className="w-5 h-5 text-[#ff6b00]" />}
            number="03"
            category="AI"
            title="AI Creative"
            description="Leveraging AI for image generation, video creation, and producing cutting-edge creative content."
            delay={0.3}
          />
          <AboutCard 
            icon={<Stethoscope className="w-5 h-5 text-[#ff6b00]" />}
            number="04"
            category="Academic"
            title="Veterinary Medicine"
            description="Studying at Delta University, bringing a unique perspective to my creative and technical work."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
}

function AboutCard({ 
  icon,
  number, 
  category, 
  title, 
  description, 
  delay 
}: { 
  icon?: React.ReactNode,
  number: string, 
  category: string, 
  title: string, 
  description: string, 
  delay: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-[#0e0e15] p-8 rounded-3xl border border-white/[0.08] hover:border-[#ff6b00]/70 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(255,107,0,0.22)] hover:-translate-y-1.5 transition-all duration-500 group relative overflow-hidden"
    >
      <div className="flex items-start justify-between mb-8">
        <div className="flex flex-col gap-3">
          {icon && (
            <div className="w-12 h-12 rounded-2xl bg-[#ff6b00]/10 border border-[#ff6b00]/30 flex items-center justify-center group-hover:bg-[#ff6b00] group-hover:text-black transition-all duration-500">
              {icon}
            </div>
          )}
          <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 group-hover:text-[#ff6b00] transition-colors">
            {category}
          </span>
        </div>
        <span className="text-4xl font-extrabold text-neutral-700 group-hover:text-[#ff6b00]/60 transition-colors">
          {number}
        </span>
      </div>
      <div>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-[#ff6b00] transition-colors">
          {title}
        </h3>
        <p className="text-sm text-neutral-400 leading-relaxed font-light">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
