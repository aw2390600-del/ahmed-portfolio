"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { Award, CheckCircle2, Maximize2, ShieldCheck, X } from "lucide-react";
import { CERTIFICATES } from "@/lib/data";

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialId: string;
  tags: string[];
  description: string;
}

// Framer Motion variants for smooth staggered reveal on scroll
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.92,
    filter: "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <section id="certificates" className="py-32 px-6 md:px-12 bg-[#08080b] border-t border-white/[0.06] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ff6b00]/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#ff6b00] mb-3"
            >
              <Award className="w-4 h-4 text-[#ff6b00]" />
              Verified Credentials
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
            >
              Honors & <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-200 to-[#ff6b00]">Certificates</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-sm sm:text-base text-neutral-400 font-light max-w-md leading-relaxed"
          >
            Recognized achievements across Creative Art Direction, Full Stack Engineering, Generative AI, and Medical Sciences.
          </motion.p>
        </div>

        {/* Certificates Grid with Sequential Staggered Animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {CERTIFICATES.map((cert) => (
            <motion.div
              key={cert.id}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onClick={() => setSelectedCert(cert)}
              className="group cursor-pointer rounded-2xl bg-[#0f0f16] border border-white/[0.08] hover:border-[#ff6b00]/70 p-4 transition-colors duration-500 hover:shadow-[0_0_35px_rgba(255,107,0,0.25)] flex flex-col justify-between"
            >
              {/* Thumbnail with Zoom icon */}
              <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-[#14141d] mb-4">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                
                {/* Hover overlay button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-11 h-11 rounded-full bg-[#ff6b00] text-black flex items-center justify-center shadow-[0_0_20px_#ff6b00] transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-2.5 left-2.5 z-10">
                  <span className="flex items-center gap-1 text-[10px] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-black/80 backdrop-blur-md text-[#ff6b00] border border-[#ff6b00]/30">
                    <ShieldCheck className="w-3 h-3 text-[#ff6b00]" />
                    VERIFIED
                  </span>
                </div>
              </div>

              {/* Certificate Info */}
              <div className="flex flex-col flex-grow">
                <div className="flex items-center justify-between text-[11px] text-neutral-400 font-mono mb-1.5">
                  <span>{cert.issuer}</span>
                  <span className="text-[#ff6b00]">{cert.date}</span>
                </div>
                <h3 className="text-base font-bold text-white group-hover:text-[#ff6b00] transition-colors leading-snug mb-2">
                  {cert.title}
                </h3>
                <p className="text-xs text-neutral-400 font-light leading-relaxed line-clamp-2 mb-4">
                  {cert.description}
                </p>

                {/* Tags & Action */}
                <div className="mt-auto pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {cert.tags.slice(0, 2).map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#ff6b00] group-hover:underline flex items-center gap-1">
                    Preview
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox / Modal Effect */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-2xl p-4 sm:p-6 md:p-10 cursor-zoom-out"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ff6b00] hover:text-black transition-all z-[110] shadow-[0_0_20px_rgba(255,107,0,0.4)]"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Certificate Card with Prominent Glowing Frame */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 280 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-[#0e0e15] rounded-3xl border-2 border-[#ff6b00] shadow-[0_0_60px_rgba(255,107,0,0.5)] p-4 sm:p-6 flex flex-col cursor-default overflow-hidden"
            >
              {/* Futuristic Corner Brackets */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-[#ff6b00] pointer-events-none" />
              <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-[#ff6b00] pointer-events-none" />
              <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-[#ff6b00] pointer-events-none" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-[#ff6b00] pointer-events-none" />

              {/* Certificate Image Frame */}
              <div className="relative w-full aspect-[16/11] max-h-[70vh] rounded-2xl overflow-hidden bg-black/60 shadow-inner mb-6">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  quality={100}
                  priority
                  className="object-contain"
                />
              </div>

              {/* Modal Metadata Details */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-white/10">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono text-[#ff6b00] bg-[#ff6b00]/10 border border-[#ff6b00]/30 px-2 py-0.5 rounded">
                      ID: {selectedCert.credentialId}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Verified
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedCert.title}
                  </h3>
                  <p className="text-sm text-neutral-400 font-light">
                    Issued by <span className="text-neutral-200 font-medium">{selectedCert.issuer}</span> • {selectedCert.date}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <a
                    href={selectedCert.image}
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-[#ff6b00] text-black font-bold text-xs uppercase tracking-wider hover:bg-[#ff7a00] hover:shadow-[0_0_20px_rgba(255,107,0,0.6)] transition-all"
                  >
                    Open Full Image
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
