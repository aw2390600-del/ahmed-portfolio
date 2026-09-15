"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 flex items-center justify-between transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] px-6 md:px-12",
        scrolled ? "py-4 bg-[#FAF9F6]/80 backdrop-blur-md shadow-sm border-b border-[#D6CDB3]/30" : "py-8 bg-transparent"
      )}
    >
      <div className="font-medium tracking-tighter text-xl text-[#2C2C2C]">
        <Link href="/" className="hover:opacity-70 transition-opacity">
          AHMED WAHED
        </Link>
      </div>

      <nav className="hidden md:flex items-center gap-8 text-[13px] font-medium tracking-widest uppercase text-[#8B9085]">
        <Link href="/#about" className="hover:text-[#2C2C2C] transition-colors">
          About
        </Link>
        <Link href="/#work" className="hover:text-[#2C2C2C] transition-colors">
          Work
        </Link>
        <Link href="/#skills" className="hover:text-[#2C2C2C] transition-colors">
          Skills
        </Link>
        <Link href="/#journey" className="hover:text-[#2C2C2C] transition-colors">
          Experience
        </Link>
      </nav>

      <div className="flex items-center">
        <Link
          href="/#contact"
          className={cn(
            "group flex items-center gap-2 bg-[#2C2C2C] text-[#FAF9F6] px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:bg-[#D6CDB3] hover:text-[#2C2C2C]",
            scrolled && "scale-90"
          )}
        >
          LET'S TALK
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </header>
  );
}
