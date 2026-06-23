import Image from "next/image";
import { ExternalLink, FileText, Github } from "lucide-react";
import { projects } from "@/lib/site-data";

type Project = (typeof projects)[number];

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-soft">
      <div className="relative aspect-[16/9] border-b border-slate-200 bg-slate-50">
        <Image src={project.image} alt={`${project.title} project visual`} fill className="object-cover" sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
      </div>
      <div className="p-5">
        <h3 className="text-lg font-semibold text-ink">{project.title}</h3>
        <p className="mt-3 text-sm leading-6 text-slate-600">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-md bg-trial-50 px-2.5 py-1 text-xs font-medium text-trial-600">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-3">
          <a href={project.github} className="inline-flex items-center gap-2 text-sm font-semibold text-clinical-700 hover:text-clinical-600">
            <Github className="h-4 w-4" />
            GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
          <a href={project.report} className="inline-flex items-center gap-2 text-sm font-semibold text-clinical-700 hover:text-clinical-600">
            <FileText className="h-4 w-4" />
            PDF report
          </a>
        </div>
      </div>
    </article>
  );
}
