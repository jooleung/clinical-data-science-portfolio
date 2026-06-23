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
        title="Clinical data, analysis, and biomedical research preparation."
        description="A concise overview of internship experience, data analysis work, and quantitative biology foundations relevant to clinical development roles."
      />
      <section className="bg-slate-50 py-14">
        <Container>
          <div className="grid gap-5">
            {experiences.map((experience) => {
              const Icon = experience.icon;
              return (
                <article key={experience.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div className="flex gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-clinical-50 text-clinical-700">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div>
                        <h2 className="text-xl font-semibold text-ink">{experience.title}</h2>
                        <p className="mt-1 text-sm font-medium text-slate-600">{experience.organization}</p>
                      </div>
                    </div>
                    <span className="w-fit rounded-md bg-trial-50 px-3 py-1.5 text-sm font-semibold text-trial-600">
                      {experience.period}
                    </span>
                  </div>
                  <ul className="mt-5 grid gap-3 text-sm leading-6 text-slate-600">
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
