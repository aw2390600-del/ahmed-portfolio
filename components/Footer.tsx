import Link from "next/link";
import { PERSONAL_INFO } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 md:px-12 py-12 md:py-20 bg-[#FAF9F6] border-t border-[#D6CDB3]/30 flex flex-col md:flex-row items-center justify-between gap-8 text-sm">
      <div className="font-medium tracking-tighter text-lg text-[#2C2C2C]">
        AHMED WAHED
      </div>
      
      <div className="text-[#8B9085] tracking-wide uppercase text-xs text-center font-medium">
        Designing • Building • Learning
      </div>

      <div className="flex items-center gap-6 text-[#8B9085] font-medium uppercase text-xs">
        {Object.entries(PERSONAL_INFO.socials).map(([platform, url]) => (
          <a
            key={platform}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#2C2C2C] transition-colors"
          >
            {platform}
          </a>
        ))}
      </div>
      
      <div className="text-[#8B9085]/60 text-xs text-center md:hidden w-full pt-4 border-t border-[#D6CDB3]/30">
        © 2026 Ahmed Wahed
      </div>
    </footer>
  );
}
