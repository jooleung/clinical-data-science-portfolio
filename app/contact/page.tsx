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
  { label: "LinkedIn", value: "linkedin.com/in/your-profile", href: profile.linkedin, icon: Linkedin },
  { label: "GitHub", value: "github.com/your-username", href: profile.github, icon: Github }
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Open to clinical data science and biostatistics conversations."
        description="For internship, research, clinical development, or data science opportunities, please reach out through email, LinkedIn, or GitHub."
      />
      <section className="bg-white py-14">
        <Container className="grid gap-5 md:grid-cols-3">
          {contactLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-soft"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-md bg-clinical-50 text-clinical-700">
                  <Icon className="h-5 w-5" />
                </span>
                <h2 className="mt-5 text-lg font-semibold text-ink">{link.label}</h2>
                <p className="mt-2 break-words text-sm text-slate-600">{link.value}</p>
              </a>
            );
          })}
        </Container>
      </section>
    </>
  );
}
