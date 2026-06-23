import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { experiences } from "@/lib/site-data";

export const metadata = {
  title: "Experience",
  description: "Clinical data science internship, data analysis experience, and biomedical training."
};

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Clinical data science, analytics operations, and communication experience."
        description="Experience spanning oncology trial case studies, reproducible R/SAS workflows, multi-source business analytics, and team-facing data storytelling."
      />
      <section className="bg-panel-50/35 py-14">
        <Container>
          <div className="grid gap-5">
            {experiences.map((experience) => {
              const Icon = experience.icon;
              return (
                <article key={experience.title} className="pixel-panel p-6">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center border border-ink/15 bg-clinical-100 text-clinical-700">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="text-xl font-semibold text-ink">{experience.title}</h2>
                        <p className="mt-1 text-sm font-medium text-ink/65">{experience.organization}</p>
                      </div>
                    </div>
                    <span className="w-fit border border-ink/15 bg-trial-50/80 px-3 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink/70">
                      {experience.period}
                    </span>
                  </div>
                  <ul className="mt-5 grid gap-3 text-sm leading-6 text-ink/68">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-500" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
