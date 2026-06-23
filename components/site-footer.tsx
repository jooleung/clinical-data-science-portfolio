import Link from "next/link";
import { Container } from "@/components/container";
import { navItems, profile } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/15 bg-panel-50/70 backdrop-blur-xl">
      <Container className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-ink/62">Clinical data science, oncology statistics, and drug development.</p>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="font-mono text-xs font-semibold uppercase tracking-[0.08em] text-ink/58 hover:text-clinical-700">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
