"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import { ArrowRight, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = ["ALL", "GRAPHIC DESIGN", "BRANDING", "WEB / DEVELOPMENT", "PERSONAL PROJECTS"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "ALL") return true;
    if (activeCategory === "GRAPHIC DESIGN" && project.category.includes("Graphic Design")) return true;
    if (activeCategory === "BRANDING" && (project.category.includes("Brand") || project.category.includes("Advertising"))) return true;
    if (activeCategory === "WEB / DEVELOPMENT" && (project.category.includes("Web") || project.category.includes("UI"))) return true;
    if (activeCategory === "PERSONAL PROJECTS" && project.type.includes("Personal")) return true;
    return false;
  });

  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-[#08080b] relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#ff6b00] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shadow-[0_0_8px_#ff6b00]" />
              Portfolio Showcase
            </div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
            >
              Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#ff6b00]">Work</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-sm sm:text-base text-neutral-400 font-light max-w-md leading-relaxed"
          >
            A curated collection of visual identities, advertising campaigns, and interactive digital experiences.
          </motion.p>
        </div>

        {/* Category Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap gap-2.5 mb-16"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 border",
                activeCategory === category 
                  ? "bg-[#ff6b00] text-black border-[#ff6b00] shadow-[0_0_20px_rgba(255,107,0,0.5)] font-bold scale-105" 
                  : "bg-[#0f0f15] text-neutral-400 border-white/[0.08] hover:border-[#ff6b00]/50 hover:text-white"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col p-5 rounded-3xl bg-[#0e0e15] border border-white/[0.08] hover:border-[#ff6b00]/60 transition-all duration-500 hover:shadow-[0_0_35px_rgba(255,107,0,0.22)] overflow-hidden"
              >
                {/* Image Thumbnail Container */}
                <Link 
                  href={`/projects/${project.slug}`} 
                  className="block overflow-hidden rounded-2xl bg-[#13131b] aspect-[16/10] mb-6 relative"
                >
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-108"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e15] via-transparent to-transparent opacity-60" />
                  
                  {/* Top Floating Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="text-[11px] font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#ff6b00] border border-[#ff6b00]/40">
                      {project.type}
                    </span>
                  </div>

                  {/* Hover Icon Button */}
                  <div className="absolute bottom-4 right-4 z-10 w-10 h-10 rounded-full bg-[#ff6b00] text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_15px_#ff6b00]">
                    <ArrowRight className="w-5 h-5 -rotate-45" />
                  </div>
                </Link>
                
                {/* Card Content & Tags */}
                <div className="flex flex-col flex-grow px-2">
                  {/* Tags */}
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#ff6b00] bg-[#ff6b00]/10 border border-[#ff6b00]/25 px-2.5 py-0.5 rounded-md">
                      {project.category}
                    </span>
                    <span className="text-[11px] font-mono text-neutral-400 bg-white/[0.04] px-2.5 py-0.5 rounded-md">
                      {project.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2 group-hover:text-[#ff6b00] transition-colors">
                    <Link href={`/projects/${project.slug}`}>
                      {project.title}
                    </Link>
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-neutral-400 font-light leading-relaxed mb-6 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Action Link */}
                  <div className="mt-auto pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <Link 
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ff6b00] hover:text-[#ff8c26] transition-colors"
                    >
                      VIEW CASE STUDY
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                    <span className="text-xs text-neutral-400 font-mono">
                      {project.role}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
