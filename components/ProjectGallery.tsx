"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectGallery({ images, title }: { images: string[], title: string }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {images.map((img, i) => (
          <div 
            key={i} 
            onClick={() => setSelectedImage(img)}
            className="w-full aspect-[3/4] bg-neutral-100 rounded-[2rem] flex items-center justify-center text-neutral-400 overflow-hidden relative shadow-md cursor-zoom-in group"
          >
            <Image
              src={img}
              alt={`${title} Image ${i + 1}`}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
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
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-12 cursor-zoom-out backdrop-blur-sm"
          >
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full h-full max-w-5xl max-h-screen"
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
