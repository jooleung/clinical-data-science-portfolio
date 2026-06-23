import Link from "next/link";
import { Container } from "@/components/container";
import { navItems, profile } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <Container className="flex flex-col gap-5 py-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold text-ink">{profile.name}</p>
          <p className="mt-1 text-sm text-slate-600">Clinical data science, biostatistics, and drug development.</p>
        </div>
        <nav className="flex flex-wrap gap-x-4 gap-y-2" aria-label="Footer navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-600 hover:text-clinical-700">
              {item.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
