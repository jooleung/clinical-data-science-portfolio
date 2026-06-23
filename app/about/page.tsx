import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { aboutHighlights, focusAreas, profile } from "@/lib/site-data";

export const metadata = {
  title: "About",
  description: "Education, interests, goals, and skill overview for a clinical data science portfolio."
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title="Quantitative biology training, clinical trial statistics, and applied data science."
        description="A profile built around oncology endpoints, survival methods, reproducible analysis, and communication across biomedical and data teams."
      />
      <section className="bg-panel-50/35 py-14">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="pixel-panel p-6">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-clinical-700">Profile</p>
            <h2 className="mt-4 text-2xl font-semibold text-ink">{profile.name}</h2>
            <p className="mt-3 text-sm leading-6 text-ink/68">
              University of Toronto HBSc candidate in Quantitative Biology, Genome Biology, and Applied Data Science,
              with prior study through Berkeley Global Access.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span key={area} className="border border-ink/15 bg-white/50 px-2.5 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-ink/70">
                  {area}
                </span>
              ))}
            </div>
          </aside>
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <article key={item.title} className="pixel-panel p-6">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/68">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
