"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Maximize2 } from "lucide-react";

export default function ProjectGallery({ images, title }: { images: string[], title: string }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedImage(null);
    };
    if (selectedImage) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {images.map((img, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedImage(img)}
            className="w-full aspect-[4/3] bg-[#0e0e15] border border-white/[0.08] hover:border-[#ff6b00]/70 rounded-3xl overflow-hidden relative shadow-md cursor-zoom-in group transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,107,0,0.25)]"
          >
            <Image
              src={img}
              alt={`${title} Image ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-106"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
            <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 group-hover:border-[#ff6b00] group-hover:text-[#ff6b00] transition-all">
              <Maximize2 className="w-4 h-4" />
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-12 cursor-zoom-out backdrop-blur-xl"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#ff6b00] hover:text-black transition-all z-50 shadow-[0_0_15px_#ff6b00]"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-w-5xl max-h-[85vh] rounded-2xl overflow-hidden border-2 border-[#ff6b00] shadow-[0_0_50px_rgba(255,107,0,0.4)]"
            >
              <Image
                src={selectedImage}
                alt={`${title} Fullscreen`}
                fill
                className="object-contain"
                quality={100}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
