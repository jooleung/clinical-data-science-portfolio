import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { skillGroups } from "@/lib/site-data";

export const metadata = {
  title: "Skills",
  description: "Statistics, clinical research, programming, and data visualization skills for clinical data science."
};

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Technical and clinical research toolkit."
        description="A focused skills overview for biostatistics, clinical trials, real-world data, programming, and visualization roles."
      />
      <section className="bg-slate-50 py-14">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-md bg-clinical-50 text-clinical-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="text-xl font-semibold text-ink">{group.title}</h2>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="rounded-md border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
