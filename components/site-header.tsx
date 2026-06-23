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
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <span className="flex h-9 w-9 items-center justify-center rounded-md bg-clinical-600 text-sm font-semibold text-white">
            YN
          </span>
          <span className="hidden text-sm font-semibold text-ink sm:inline">{profile.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                pathname === item.href ? "bg-clinical-50 text-clinical-700" : "text-slate-600 hover:bg-slate-100 hover:text-ink"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={profile.linkedin}
            className="rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-ink"
            aria-label="LinkedIn profile"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            className="rounded-md p-2 text-slate-600 hover:bg-slate-100 hover:text-ink"
            aria-label="GitHub profile"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-slate-700 hover:bg-slate-100 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </Container>

      {open ? (
        <nav className="border-t border-slate-200 bg-white md:hidden" aria-label="Mobile navigation">
          <Container className="grid gap-1 py-3">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={clsx(
                  "rounded-md px-3 py-3 text-sm font-medium",
                  pathname === item.href ? "bg-clinical-50 text-clinical-700" : "text-slate-700 hover:bg-slate-100"
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
