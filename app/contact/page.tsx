import { Github, Linkedin, Mail } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { Container } from "@/components/container";
import { profile } from "@/lib/site-data";

export const metadata = {
  title: "Contact",
  description: "Contact links for email, LinkedIn, and GitHub."
};

const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "linkedin.com/in/jo-yaozu-liang", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", value: "github.com/jooleung", href: profile.github, icon: Github }
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Open to clinical data science, biostatistics, and oncology analytics conversations."
        description="For internships, research, clinical development, or data science opportunities, please reach out through email, LinkedIn, or GitHub."
      />
      <section className="bg-panel-50/35 py-14">
        <Container className="grid gap-5 md:grid-cols-3">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                className="pixel-panel p-6 transition-transform hover:-translate-y-1"
              >
                <span className="flex h-11 w-11 items-center justify-center border border-ink/15 bg-clinical-100 text-clinical-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-lg font-semibold text-ink">{link.label}</h2>
                <p className="mt-2 break-words text-sm text-ink/65">{link.value}</p>
              </a>
            );
          })}
        </Container>
      </section>
    </>
  );
}
