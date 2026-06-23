import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/container";
import { focusAreas, profile, quickCapabilities } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <section className="border-b border-ink/15 bg-panel-50/30">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-clinical-700">{profile.university}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-normal text-ink sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 font-mono text-sm font-semibold uppercase tracking-[0.12em] text-signal-600">{profile.role}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/68">{profile.headline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.resume}
                className="module-button module-button-primary"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href={profile.linkedin}
                className="module-button"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={profile.github}
                className="module-button"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          <div className="glass-panel p-5">
            <div className="border border-ink/15 bg-white/50 p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4 border-b border-ink/15 pb-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink">Clinical Analytics Profile</p>
                  <p className="mt-1 text-sm text-ink/62">Oncology statistics and drug development focus</p>
                </div>
                <span className="border border-ink bg-signal-500 px-2.5 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-white">
                  ASIP
                </span>
              </div>
              <div className="mt-5 grid gap-3">
                {quickCapabilities.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="glass-tile flex items-center gap-3 p-3">
                      <span className="flex h-9 w-9 items-center justify-center border border-ink/15 bg-clinical-100 text-clinical-700">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-ink/75">{item.label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 border border-ink/15 bg-trial-50/80 p-4">
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink">Target roles</p>
                <p className="mt-2 text-sm leading-6 text-ink/65">
                  Clinical Data Science, Biostatistics, Clinical Development, and oncology analytics roles at
                  pharmaceutical and biotechnology organizations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-panel-50/45 py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-clinical-700">Focus Areas</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink">Where biology meets clinical evidence.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span key={area} className="glass-tile px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink/72">
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <Link href="/projects" className="module-button">
              View project areas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
