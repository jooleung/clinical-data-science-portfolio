import { CrtShell } from "@/components/crt-shell";
import { projects } from "@/lib/site-data";

export const metadata = {
  title: "Projects",
  description:
    "Portfolio project placeholders for survival analysis, Kaplan-Meier analysis, Cox regression, SAP development, clinical trial analytics, and real-world data studies."
};

export default function ProjectsPage() {
  return (
    <CrtShell title="Projects" compact>
      <div className="crt-page-panel">
        <h1 className="crt-page-title">Project Files</h1>
        <p className="crt-page-copy">Clinical trial analytics and real-world evidence modules prepared for reports and repositories.</p>
        <div className="crt-grid crt-grid-2">
          {projects.map((project) => (
            <article key={project.title} className="crt-card">
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="crt-pill-list crt-pill-list-left">
                {project.tags.map((tag) => (
                  <span key={tag} className="crt-pill">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href={project.github} className="secondary-option">
                  GitHub
                </a>
                <a href={project.report} className="secondary-option">
                  PDF Report
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </CrtShell>
  );
}
