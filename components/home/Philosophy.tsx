"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section className="py-40 px-6 md:px-12 bg-white flex items-center justify-center text-center">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-12"
        >
          I don't want to choose between creativity and technology.
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-neutral-500 font-light max-w-3xl leading-relaxed"
        >
          I believe the best digital experiences happen when design, technology and problem-solving work together.
        </motion.p>
      </div>
    </section>
  );
}
