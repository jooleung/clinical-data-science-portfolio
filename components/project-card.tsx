import Image from "next/image";
import { ExternalLink, FileText, Github } from "lucide-react";
import { projects } from "@/lib/site-data";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="glass-panel overflow-hidden transition-transform hover:-translate-y-1">
      <div className="relative aspect-[16/9] border-b border-ink/15 bg-panel-100">
        <Image src={project.image} alt={`${project.title} project visual`} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-ink/68">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="border border-ink/15 bg-white/50 px-2.5 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-ink/75">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={project.github} className="module-button px-3 py-2 text-xs">
            <Github className="h-4 w-4" />
            GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a href={project.report} className="module-button px-3 py-2 text-xs">
            <FileText className="h-4 w-4" />
            PDF report
          </a>
        </div>
      </div>
    </article>
  );
}
