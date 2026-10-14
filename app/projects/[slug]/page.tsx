import { PROJECTS } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug);
  const project = PROJECTS[projectIndex];

  if (!project) {
    notFound();
  }

  const nextProject = PROJECTS[projectIndex + 1] || PROJECTS[0];

  return (
    <article className="bg-[#08080b] min-h-screen pt-28 pb-16 text-white relative">
      {/* Top Back Nav */}
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-8">
        <Link 
          href="/#work" 
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 hover:text-[#ff6b00] transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-[#ff6b00]" />
          BACK TO ALL PROJECTS
        </Link>
      </div>

      {/* Project Cover Container with Glowing Border */}
      <div className="px-6 md:px-12 max-w-[100rem] mx-auto mb-20">
        <div className="w-full aspect-video md:aspect-[21/9] bg-[#0e0e15] border border-white/[0.08] shadow-[0_0_40px_rgba(255,107,0,0.15)] rounded-3xl flex items-center justify-center overflow-hidden relative">
          <Image
            src={project.coverImage}
            alt={`${project.title} Cover`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#08080b] via-transparent to-transparent opacity-50" />
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-12 mb-32">
        {/* Overview Header */}
        <div className="grid md:grid-cols-[1fr_280px] gap-12 items-start mb-24 border-b border-white/[0.08] pb-20">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#ff6b00] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff6b00] shadow-[0_0_8px_#ff6b00]" />
              Project Case Study
            </div>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl font-light text-neutral-300 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
          
          {/* Metadata Card */}
          <div className="p-6 rounded-2xl bg-[#0e0e15] border border-white/[0.08] flex flex-col gap-5 text-sm">
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#ff6b00] mb-1">Category</div>
              <div className="text-base font-semibold text-white">{project.category}</div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#ff6b00] mb-1">Year</div>
              <div className="text-base font-semibold text-white">{project.year}</div>
            </div>
            <div>
              <div className="text-[11px] font-mono uppercase tracking-widest text-[#ff6b00] mb-1">Role</div>
              <div className="text-base font-semibold text-white">{project.role}</div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-28">
          
          {/* The Challenge */}
          <section className="grid md:grid-cols-[240px_1fr] gap-8 p-8 rounded-3xl bg-[#0e0e15] border border-white/[0.08]">
            <h2 className="text-2xl font-bold tracking-tight text-[#ff6b00]">The Challenge</h2>
            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              {project.challenge}
            </p>
          </section>

          {/* The Idea */}
          <section className="grid md:grid-cols-[240px_1fr] gap-8 p-8 rounded-3xl bg-[#0e0e15] border border-white/[0.08]">
            <h2 className="text-2xl font-bold tracking-tight text-[#ff6b00]">The Idea</h2>
            <p className="text-base sm:text-lg text-neutral-300 font-light leading-relaxed">
              {project.idea}
            </p>
          </section>

          {/* Final Result Gallery */}
          <section>
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Final <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-neutral-100 to-[#ff6b00]">Visuals</span>
              </h2>
              <span className="text-xs font-mono text-neutral-400">Click to expand</span>
            </div>
            <ProjectGallery images={project.images} title={project.title} />
          </section>
        </div>
      </div>

      {/* Next Project Footer */}
      <div className="border-t border-white/[0.08] bg-[#060608] py-28 px-6 md:px-12 text-center flex flex-col items-center">
        <span className="text-xs font-mono font-semibold tracking-widest uppercase text-[#ff6b00] mb-6">
          Next Case Study
        </span>
        <Link 
          href={`/projects/${nextProject.slug}`}
          className="group text-4xl sm:text-6xl font-extrabold tracking-tight text-white hover:text-[#ff6b00] transition-colors flex flex-col items-center gap-6"
        >
          {nextProject.title}
          <div className="w-14 h-14 rounded-full bg-[#ff6b00] text-black flex items-center justify-center shadow-[0_0_20px_#ff6b00] group-hover:scale-110 transition-transform">
            <ArrowRight className="w-6 h-6" />
          </div>
        </Link>
      </div>

    </article>
  );
}
