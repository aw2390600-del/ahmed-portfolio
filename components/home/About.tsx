"use client";

import { motion } from "framer-motion";
import { Palette, MonitorSmartphone, Sparkles, Stethoscope } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-[#2C2C2C]"
          >
            More than one path.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl md:text-2xl text-[#8B9085] font-light leading-relaxed space-y-6"
          >
            <p>
              I'm Ahmed Wahed, a veterinary medicine student with a strong passion for graphic design, technology and digital experiences.
            </p>
            <p>
              My journey started from visual creativity and design, then expanded into programming and building digital products.
            </p>
            <p>
              Today, I enjoy combining creativity, technology and problem-solving to create useful and visually strong experiences.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AboutCard 
            icon={<Palette className="w-6 h-6" />}
            number="01"
            category="Design"
            title="Graphic Design"
            description="Specializing in branding, visual identity, and social media design to create premium experiences."
            delay={0.2}
          />
          <AboutCard 
            icon={<MonitorSmartphone className="w-6 h-6" />}
            number="02"
            category="Development"
            title="Web Dev & Programming"
            description="Building modern websites and digital products using React, Next.js, and modern tools."
            delay={0.3}
          />
          <AboutCard 
            icon={<Sparkles className="w-6 h-6" />}
            number="03"
            category="AI"
            title="AI Creative"
            description="Leveraging AI for image generation, video creation, and producing cutting-edge creative content."
            delay={0.4}
          />
          <AboutCard 
            icon={<Stethoscope className="w-6 h-6" />}
            number="04"
            category="Academic"
            title="Veterinary Medicine"
            description="Studying at Delta University, bringing a unique perspective to my creative and technical work."
            delay={0.5}
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
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white p-8 md:p-10 rounded-[2rem] border border-[#D6CDB3]/30 flex flex-col h-full hover:shadow-[0_20px_40px_rgba(214,205,179,0.2)] hover:-translate-y-2 transition-all duration-500 group"
    >
      <div className="flex items-start justify-between mb-12">
        <div className="flex flex-col gap-4">
          {icon && (
            <div className="w-12 h-12 rounded-full bg-[#FAF9F6] border border-[#D6CDB3]/30 flex items-center justify-center text-[#D6CDB3] group-hover:text-[#2C2C2C] group-hover:bg-[#D6CDB3]/20 transition-colors duration-500">
              {icon}
            </div>
          )}
          <span className="text-sm font-semibold tracking-widest uppercase text-[#8B9085]/70 group-hover:text-[#2C2C2C] transition-colors duration-500">
            {category}
          </span>
        </div>
        <span className="text-3xl font-light text-[#D6CDB3]/50 group-hover:text-[#D6CDB3] transition-colors duration-500">
          {number}
        </span>
      </div>
      <div className="mt-auto text-[#2C2C2C]">
        <h3 className="text-2xl font-medium mb-4">{title}</h3>
        <p className="text-[#8B9085] leading-relaxed font-light">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
