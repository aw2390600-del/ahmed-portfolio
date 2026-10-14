import Link from "next/link";
import { PERSONAL_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-12 md:py-16 bg-[#060608] border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-8 text-sm">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 rounded-lg bg-[#ff6b00]/10 border border-[#ff6b00]/30 flex items-center justify-center text-[#ff6b00] font-black text-xs">
          AW
        </div>
        <span className="font-bold tracking-tight text-base text-white">
          AHMED WAHED
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shadow-[0_0_8px_#ff6b00]" />
      </div>
      
      <div className="text-neutral-400 tracking-widest uppercase text-xs text-center font-medium">
        Designing • Building • Innovating
      </div>

      <div className="flex items-center gap-6 text-neutral-400 font-semibold uppercase text-xs">
        {Object.entries(PERSONAL_INFO.socials).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#ff6b00] hover:drop-shadow-[0_0_10px_rgba(255,107,0,0.8)] transition-all"
          >
            {platform}
          </a>
        ))}
      </div>
      
      <div className="text-neutral-500 text-xs text-center md:hidden w-full pt-4 border-t border-white/[0.06]">
        © 2026 Ahmed Wahed. All rights reserved.
      </div>
    </footer>
  );
}
