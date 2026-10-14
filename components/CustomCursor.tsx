"use client";

import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useSpring(-100, { damping: 25, stiffness: 350 });
  const cursorY = useSpring(-100, { damping: 25, stiffness: 350 });
  const trailingX = useSpring(-100, { damping: 18, stiffness: 180 });
  const trailingY = useSpring(-100, { damping: 18, stiffness: 180 });

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    if (window.matchMedia("(hover: none)").matches) return;
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailingX.set(e.clientX);
      trailingY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const isInteractive = Boolean(
        target.closest("a, button, input, textarea, select, [role='button'], .clickable, .cursor-pointer")
      );
      setIsHovered(isInteractive);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, trailingX, trailingY, isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer Glowing Neon Ring */}
      <motion.div
        style={{
          x: trailingX,
          y: trailingY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: isHovered ? 52 : 28,
          height: isHovered ? 52 : 28,
          borderColor: isHovered ? "rgba(255, 107, 0, 0.95)" : "rgba(255, 107, 0, 0.55)",
          backgroundColor: isHovered ? "rgba(255, 107, 0, 0.15)" : "rgba(255, 107, 0, 0.03)",
          boxShadow: isHovered
            ? "0 0 25px rgba(255, 107, 0, 0.8), inset 0 0 15px rgba(255, 107, 0, 0.3)"
            : "0 0 12px rgba(255, 107, 0, 0.35)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300, mass: 0.5 }}
        className="fixed rounded-full border-2 will-change-transform"
      />

      {/* Center Precision Dot */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          scale: isHovered ? 0 : 1,
          opacity: isHovered ? 0 : 1,
        }}
        transition={{ duration: 0.15 }}
        className="fixed w-2 h-2 rounded-full bg-[#ff6b00] shadow-[0_0_10px_#ff6b00] will-change-transform"
      />
    </div>
  );
}
