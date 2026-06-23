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
        title="Statistical, clinical, programming, and communication toolkit."
        description="A focused overview of methods and tools used across oncology endpoint interpretation, statistical programming, reporting, and data storytelling."
      />
      <section className="bg-panel-50/35 py-14">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {skillGroups.map((group) => {
              const Icon = group.icon;
              return (
                <article key={group.title} className="glass-panel p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center border border-ink/15 bg-clinical-100 text-clinical-700">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="text-xl font-semibold text-ink">{group.title}</h2>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="glass-tile px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink/72">
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
