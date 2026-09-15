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
    <article className="bg-[#FAF9F6] min-h-screen pt-24 pb-12 text-[#2C2C2C]">
      <div className="px-6 md:px-12 max-w-7xl mx-auto mb-8">
        <Link 
          href="/#work" 
          className="inline-flex items-center gap-2 text-sm font-medium text-[#8B9085] hover:text-[#2C2C2C] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          BACK TO WORK
        </Link>
      </div>

      {/* Project Cover */}
      <div className="px-6 md:px-12 max-w-[100rem] mx-auto mb-20">
        <div className="w-full aspect-video md:aspect-[21/9] bg-[#D6CDB3]/20 rounded-[2rem] flex items-center justify-center text-[#8B9085] overflow-hidden relative shadow-lg">
          <Image
            src={project.coverImage}
            alt={`${project.title} Cover`}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 mb-32">
        {/* Overview */}
        <div className="grid md:grid-cols-[1fr_300px] gap-12 items-start mb-24 border-b border-[#D6CDB3]/30 pb-24">
          <div>
            <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6">
              {project.title}
            </h1>
            <p className="text-xl md:text-2xl font-light text-[#8B9085] leading-relaxed">
              {project.shortDescription}
            </p>
          </div>
          
          <div className="flex flex-col gap-6 text-sm">
            <div>
              <div className="font-semibold tracking-widest uppercase text-[#8B9085]/60 mb-1">Category</div>
              <div className="text-lg font-medium">{project.category}</div>
            </div>
            <div>
              <div className="font-semibold tracking-widest uppercase text-[#8B9085]/60 mb-1">Year</div>
              <div className="text-lg font-medium">{project.year}</div>
            </div>
            <div>
              <div className="font-semibold tracking-widest uppercase text-[#8B9085]/60 mb-1">Role</div>
              <div className="text-lg font-medium">{project.role}</div>
            </div>
          </div>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-32">
          
          {/* The Challenge */}
          <section className="grid md:grid-cols-[300px_1fr] gap-8">
            <h2 className="text-2xl font-medium tracking-tight">The Challenge</h2>
            <p className="text-xl text-[#8B9085] font-light leading-relaxed">
              {project.challenge}
            </p>
          </section>

          {/* The Idea */}
          <section className="grid md:grid-cols-[300px_1fr] gap-8">
            <h2 className="text-2xl font-medium tracking-tight">The Idea</h2>
            <p className="text-xl text-[#8B9085] font-light leading-relaxed">
              {project.idea}
            </p>
          </section>

          {/* Final Result Gallery */}
          <section>
            <h2 className="text-2xl font-medium tracking-tight mb-12">Final Result</h2>
            <ProjectGallery images={project.images} title={project.title} />
          </section>
        </div>
      </div>

      {/* Next Project */}
      <div className="border-t border-[#D6CDB3]/30 bg-white/50 py-32 px-6 md:px-12 text-center flex flex-col items-center">
        <span className="text-sm font-semibold tracking-widest uppercase text-[#8B9085]/60 mb-6">
          Next Project
        </span>
        <Link 
          href={`/projects/${nextProject.slug}`}
          className="group text-5xl md:text-7xl font-medium tracking-tight hover:text-[#8B9085] transition-colors flex flex-col items-center gap-6"
        >
          {nextProject.title}
          <div className="w-16 h-16 rounded-full bg-[#2C2C2C] text-[#FAF9F6] flex items-center justify-center group-hover:bg-[#D6CDB3] group-hover:text-[#2C2C2C] transition-colors">
            <ArrowRight className="w-6 h-6 transition-transform duration-300 group-hover:translate-x-1" />
          </div>
        </Link>
      </div>

    </article>
  );
}
