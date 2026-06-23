import { CrtShell } from "@/components/crt-shell";
import { skillGroups } from "@/lib/site-data";

export const metadata = {
  title: "Skills",
  description: "Statistics, clinical research, programming, and data visualization skills for clinical data science."
};

export default function SkillsPage() {
  return (
    <CrtShell title="Skills" compact>
      <div className="crt-page-panel">
        <h1 className="crt-page-title">Skill Refinement</h1>
        <p className="crt-page-copy">
          Statistical, clinical research, programming, and visualization toolkit for clinical data science roles.
        </p>
        <div className="crt-grid crt-grid-2">
          {skillGroups.map((group) => (
            <article key={group.title} className="crt-card">
              <h2>{group.title}</h2>
              <div className="crt-pill-list crt-pill-list-left">
                {group.skills.map((skill) => (
                  <span key={skill} className="crt-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </CrtShell>
  );
}
