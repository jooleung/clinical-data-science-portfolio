"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";
import { Container } from "@/components/container";
import { navItems, profile } from "@/lib/site-data";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/15 bg-panel-50/78 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <span className="flex h-9 w-9 items-center justify-center border border-ink bg-clinical-600 font-mono text-xs font-semibold text-panel-50 shadow-[3px_3px_0_#c7623a]">
            JL
          </span>
          <span className="hidden font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink sm:inline">
            {profile.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "border px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.08em] transition-colors",
                pathname === item.href
                  ? "border-ink bg-clinical-100 text-ink"
                  : "border-transparent text-ink/65 hover:border-ink/25 hover:bg-white/60 hover:text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.linkedin}
            className="border border-transparent p-2 text-ink/65 hover:border-ink/25 hover:bg-white/60 hover:text-ink"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            className="border border-transparent p-2 text-ink/65 hover:border-ink/25 hover:bg-white/60 hover:text-ink"
            aria-label="GitHub profile"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          className="border border-ink/20 p-2 text-ink hover:bg-white/70 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <nav className="border-t border-ink/15 bg-panel-50/90 backdrop-blur-xl md:hidden" aria-label="Mobile navigation">
          <Container className="grid gap-1 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "border px-3 py-3 font-mono text-xs font-semibold uppercase tracking-[0.08em]",
                  pathname === item.href ? "border-ink bg-clinical-100 text-ink" : "border-transparent text-ink/70 hover:bg-white/70"
                )}
              >
                {item.label}
              </Link>
            ))}
          </Container>
        </nav>
      ) : null}
    </header>
  );
}
