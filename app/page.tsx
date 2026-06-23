import Link from "next/link";
import { ArrowRight, Download, Github, Linkedin } from "lucide-react";
import { Container } from "@/components/container";
import { focusAreas, profile, quickCapabilities } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <section className="border-b border-slate-200 bg-white">
        <Container className="grid gap-10 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clinical-600">{profile.university}</p>
            <h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-normal text-ink sm:text-5xl lg:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-slate-700">{profile.role}</p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{profile.headline}</p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={profile.resume}
                className="inline-flex items-center gap-2 rounded-md bg-clinical-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-clinical-700"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href={profile.linkedin}
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold text-ink hover:bg-slate-50"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={profile.github}
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-3 text-sm font-semibold text-ink hover:bg-slate-50"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-5 shadow-soft">
            <div className="rounded-md border border-slate-200 bg-white p-5">
              <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-4">
                <div>
                  <p className="text-sm font-semibold text-ink">Clinical Analytics Profile</p>
                  <p className="mt-1 text-sm text-slate-600">Biostatistics and drug development focus</p>
                </div>
                <span className="rounded-md bg-signal-500 px-2.5 py-1 text-xs font-semibold text-white">Available</span>
              </div>
              <div className="mt-5 grid gap-3">
                {quickCapabilities.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3 rounded-md border border-slate-200 bg-white p-3">
                      <span className="flex h-9 w-9 items-center justify-center rounded-md bg-clinical-50 text-clinical-700">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-medium text-slate-700">{item.label}</span>
                    </div>
                  );
                })}
              </div>
              <div className="mt-5 rounded-md bg-trial-50 p-4">
                <p className="text-sm font-semibold text-ink">Target roles</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Clinical Data Science, Biostatistics, Clinical Development, and RWE analytics roles at pharmaceutical
                  and biotechnology organizations.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-12">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clinical-600">Focus Areas</p>
              <h2 className="mt-3 text-2xl font-semibold text-ink">Where biology meets clinical evidence.</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span key={area} className="rounded-md border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700">
                  {area}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-clinical-700 hover:text-clinical-600">
              View project areas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
