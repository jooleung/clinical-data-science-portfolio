import { CrtShell } from "@/components/crt-shell";
import { aboutHighlights, focusAreas, profile } from "@/lib/site-data";

export const metadata = {
  title: "Education",
  description: "Education, interests, goals, and skill overview for a clinical data science portfolio."
};

export default function AboutPage() {
  return (
    <CrtShell title="Education" compact>
      <div className="crt-page-panel">
        <h1 className="crt-page-title">Education Record</h1>
        <p className="crt-page-copy">
          {profile.name} is building a clinical data science profile through quantitative biology, genome biology, and
          applied data science training.
        </p>
        <div className="crt-grid crt-grid-2">
          {aboutHighlights.map((item) => (
            <article key={item.title} className="crt-card">
              <h2>{item.title}</h2>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
        <div className="crt-pill-list">
          {focusAreas.map((area) => (
            <span key={area} className="crt-pill">
              {area}
            </span>
          ))}
        </div>
      </div>
    </CrtShell>
  );
}
