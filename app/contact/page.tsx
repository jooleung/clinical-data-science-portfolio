import { CrtShell } from "@/components/crt-shell";
import { profile } from "@/lib/site-data";

export const metadata = {
  title: "Contact",
  description: "Contact links for email, LinkedIn, and GitHub."
};

const contactLinks = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { label: "LinkedIn", value: "linkedin.com/in/jo-yaozu-liang", href: profile.linkedin },
  { label: "GitHub", value: "github.com/jooleung", href: profile.github },
  { label: "CV Download", value: "Y_Liang_Rusume_June26_JnJ.pdf", href: profile.resume }
];

export default function ContactPage() {
  return (
    <CrtShell title="Contact" compact>
      <div className="crt-page-panel">
        <h1 className="crt-page-title">Contact Terminal</h1>
        <p className="crt-page-copy">
          For clinical data science, biostatistics, oncology analytics, or internship conversations.
        </p>
        <div className="crt-grid crt-grid-2">
          {contactLinks.map((link) => (
            <a key={link.label} href={link.href} className="crt-card block no-underline">
              <h2>{link.label}</h2>
              <p>{link.value}</p>
            </a>
          ))}
        </div>
      </div>
    </CrtShell>
  );
}
