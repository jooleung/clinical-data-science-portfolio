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
        title="Quantitative biology training with a clinical data science direction."
        description="I am building a profile at the intersection of biomedical science, statistical analysis, and data-driven clinical development."
      />
      <section className="bg-white py-14">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="rounded-lg border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clinical-600">Profile</p>
            <h2 className="mt-4 text-2xl font-semibold text-ink">{profile.name}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              University of Toronto undergraduate student majoring in Quantitative Biology with Genome Biology and
              Applied Data Science training.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span key={area} className="rounded-md bg-white px-2.5 py-1 text-xs font-medium text-slate-700 ring-1 ring-slate-200">
                  {area}
                </span>
              ))}
            </div>
          </aside>
          <div className="grid gap-4 sm:grid-cols-2">
            {aboutHighlights.map((item) => (
              <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
