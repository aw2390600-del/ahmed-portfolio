"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Globe, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<"EN" | "AR">("EN");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Work", href: "/#work" },
    { name: "Certificates", href: "/#certificates" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#journey" },
  ];

  const toggleLanguage = () => {
    setLang((prev) => (prev === "EN" ? "AR" : "EN"));
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 flex items-center justify-between transition-all duration-300 px-6 md:px-12",
          scrolled
            ? "py-4 bg-[#08080b]/80 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "py-7 bg-transparent"
        )}
      >
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#ff6b00]/10 border border-[#ff6b00]/40 flex items-center justify-center text-[#ff6b00] font-black text-xs tracking-tighter group-hover:shadow-[0_0_15px_rgba(255,107,0,0.8)] transition-all">
            AW
          </div>
          <span className="font-semibold tracking-tight text-lg text-white group-hover:text-[#ff6b00] transition-colors">
            AHMED WAHED
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shadow-[0_0_8px_#ff6b00] animate-pulse" />
        </Link>

        {/* Desktop Links with Orange Glow Hover */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-semibold tracking-widest uppercase text-neutral-400">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative py-1 transition-all duration-300 hover:text-[#ff6b00] hover:drop-shadow-[0_0_12px_rgba(255,107,0,0.8)]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right Actions: Language Switcher & Solid Orange Button */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            title="Switch Language"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-xs font-medium text-neutral-300 hover:border-[#ff6b00]/60 hover:text-[#ff6b00] hover:shadow-[0_0_15px_rgba(255,107,0,0.25)] transition-all"
          >
            <Globe className="w-3.5 h-3.5 text-[#ff6b00]" />
            <span className="tracking-wider">{lang === "EN" ? "EN / عربي" : "عربي / EN"}</span>
          </button>

          {/* Solid Neon Orange Button with Dark Text */}
          <Link
            href="/#contact"
            className={cn(
              "group flex items-center gap-2 bg-[#ff6b00] text-black px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 hover:bg-[#ff7a00] hover:shadow-[0_0_25px_rgba(255,107,0,0.7)] hover:scale-105 active:scale-95",
              scrolled && "scale-95"
            )}
          >
            <span>LET'S TALK</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-2.5 py-1 rounded-full border border-white/10 text-[11px] font-medium text-neutral-300"
          >
            {lang}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-neutral-300 hover:text-[#ff6b00] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[70px] z-40 bg-[#0c0c12]/95 backdrop-blur-2xl border-b border-[#ff6b00]/20 p-6 flex flex-col gap-4 shadow-[0_20px_40px_rgba(0,0,0,0.9)] lg:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-neutral-200 hover:text-[#ff6b00] transition-colors py-2 border-b border-white/5"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 flex items-center justify-center gap-2 bg-[#ff6b00] text-black py-3 rounded-xl font-bold uppercase text-sm tracking-widest shadow-[0_0_20px_rgba(255,107,0,0.4)]"
            >
              LET'S TALK
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
