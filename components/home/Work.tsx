"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { PROJECTS } from "@/lib/data";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = ["ALL", "GRAPHIC DESIGN", "BRANDING", "WEB / DEVELOPMENT", "PERSONAL PROJECTS"];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === "ALL") return true;
    if (activeCategory === "GRAPHIC DESIGN" && project.category.includes("Graphic Design")) return true;
    if (activeCategory === "BRANDING" && project.category.includes("Brand")) return true;
    if (activeCategory === "WEB / DEVELOPMENT" && (project.category.includes("Web") || project.category.includes("UI"))) return true;
    if (activeCategory === "PERSONAL PROJECTS" && project.type.includes("Personal")) return true;
    return false;
  });

  return (
    <section id="work" className="py-32 px-6 md:px-12 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-medium tracking-tight mb-6 text-[#2C2C2C]"
          >
            Selected Work
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-[#8B9085] font-light max-w-2xl"
          >
            A selection of projects, experiments and visual work I've created.
          </motion.p>
        </div>

        {/* Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 mb-16"
        >
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2.5 rounded-full text-xs font-medium tracking-widest uppercase transition-all duration-300 border",
                activeCategory === category 
                  ? "bg-[#2C2C2C] text-[#FAF9F6] border-[#2C2C2C]" 
                  : "bg-transparent text-[#8B9085] border-[#D6CDB3]/50 hover:bg-[#D6CDB3]/20 hover:text-[#2C2C2C] hover:border-[#D6CDB3]"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "group flex flex-col",
                  index % 2 !== 0 ? "md:mt-24" : "" // Asymmetric layout
                )}
              >
                <Link href={`/projects/${project.slug}`} className="block overflow-hidden rounded-[2rem] bg-transparent aspect-[3/4] mb-6 relative shadow-[0_8px_30px_rgba(44,44,44,0.04)] hover:shadow-[0_20px_40px_rgba(44,44,44,0.12)] transition-shadow duration-500">
                  <div className="absolute inset-0 bg-[#D6CDB3]/10 group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] flex items-center justify-center overflow-hidden">
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </Link>
                
                <div className="flex flex-col gap-2 px-2">
                  <div className="flex items-center justify-between text-xs font-medium tracking-widest uppercase text-[#8B9085] mb-2">
                    <span>{project.category}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-3xl font-medium tracking-tight mb-2 text-[#2C2C2C] group-hover:text-[#8B9085] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#8B9085] font-light leading-relaxed mb-6">
                    {project.shortDescription}
                  </p>
                  <Link 
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#2C2C2C] hover:opacity-70 transition-opacity w-fit"
                  >
                    VIEW PROJECT
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
