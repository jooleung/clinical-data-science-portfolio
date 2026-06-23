import { CrtShell } from "@/components/crt-shell";
import { experiences } from "@/lib/site-data";

export const metadata = {
  title: "Experience",
  description: "Clinical data science internship, data analysis experience, and biomedical training."
};

export default function ExperiencePage() {
  return (
    <CrtShell title="Experience" compact>
      <div className="crt-page-panel">
        <h1 className="crt-page-title">Experience Log</h1>
        <p className="crt-page-copy">
          Clinical data science, oncology trial analytics, statistical programming, and data storytelling experience.
        </p>
        <div className="crt-grid">
          {experiences.map((experience) => (
            <article key={experience.title} className="crt-card">
              <h2>{experience.title}</h2>
              <p>
                {experience.organization} | {experience.period}
              </p>
              <ul>
                {experience.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </CrtShell>
  );
}
