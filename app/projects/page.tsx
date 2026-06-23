import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/site-data";

export const metadata = {
  title: "Projects",
  description: "Portfolio project placeholders for survival analysis, Kaplan-Meier analysis, Cox regression, SAP development, clinical trial analytics, and real-world data studies."
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Project areas for clinical trial and real-world evidence analytics."
        description="Each project card is ready for a GitHub repository, PDF report, short summary, tags, and image asset."
      />
      <section className="bg-white py-14">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
