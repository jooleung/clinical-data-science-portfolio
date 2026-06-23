import Link from "next/link";
import { Download, Github, Linkedin, TerminalSquare } from "lucide-react";
import { BootOverlay } from "@/components/boot-overlay";
import { Container } from "@/components/container";
import { LumonMark } from "@/components/lumon-mark";
import { ModuleDirectory } from "@/components/module-directory";
import { focusAreas, profile, quickCapabilities } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <BootOverlay />
      <section className="border-b-2 border-ink bg-panel-50/30">
        <Container className="grid gap-8 py-10 sm:py-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
          <div className="pixel-panel flex flex-col justify-between p-5 sm:p-7">
            <div>
              <div className="flex items-start justify-between gap-5 border-b border-current/20 pb-5">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.24em] text-clinical-700">Employee Wellness Record</p>
                  <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-normal text-ink sm:text-5xl lg:text-6xl">
                    {profile.name}
                  </h1>
                </div>
                <div className="hidden border-2 border-ink bg-clinical-600 p-3 text-panel-50 shadow-[5px_5px_0_#c7623a] sm:block">
                  <LumonMark />
                </div>
              </div>
              <div className="mt-5 grid gap-3 font-mono text-xs uppercase tracking-[0.12em] text-ink/68 sm:grid-cols-2">
                <span className="border border-current/20 bg-white/40 p-3">{profile.university}</span>
                <span className="border border-current/20 bg-white/40 p-3">{profile.role}</span>
              </div>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/72">{profile.headline}</p>
            </div>

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

          <div className="pixel-panel p-5">
            <div className="border-2 border-ink bg-white/36 p-5 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4 border-b border-ink/20 pb-4">
                <div>
                  <p className="font-mono text-xs font-semibold uppercase tracking-[0.14em] text-ink">Macrodata Refinement</p>
                  <p className="mt-1 text-sm text-ink/62">Oncology statistics and drug development profile</p>
                </div>
                <span className="border-2 border-ink bg-signal-500 px-2.5 py-1 font-mono text-[0.68rem] font-semibold uppercase tracking-[0.1em] text-white">
                  ASIP
                </span>
              </div>
              <div className="mt-5 grid gap-3">
                {quickCapabilities.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="feature-row">
                      <span className="flex h-8 w-8 items-center justify-center border border-ink/30 bg-clinical-100 text-clinical-700">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink/75">{item.label}</span>
                      <TerminalSquare className="h-4 w-4 opacity-45" />
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 border-2 border-ink bg-trial-50/80 p-4">
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

      <section className="bg-panel-50/45 py-10">
        <Container className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="pixel-panel p-5">
            <div className="border-b border-current/20 pb-4">
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.22em] text-clinical-700">Focus Areas</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink">Where biology meets clinical evidence.</h2>
            </div>
            <div className="mt-5 flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span key={area} className="border-2 border-ink/45 bg-white/50 px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink/72 shadow-[3px_3px_0_#bfd5ca]">
                  {area}
                </span>
              ))}
            </div>
          </div>
          <ModuleDirectory />
        </Container>
      </section>
    </>
  );
}
