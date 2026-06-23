"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { useState } from "react";
import { clsx } from "clsx";
import { Container } from "@/components/container";
import { navItems, profile } from "@/lib/site-data";
import { LumonMark } from "@/components/lumon-mark";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-panel-50/82 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3" aria-label="Home">
          <span className="flex h-9 w-9 items-center justify-center border-2 border-ink bg-clinical-600 text-panel-50 shadow-[4px_4px_0_#c7623a]">
            <LumonMark />
          </span>
          <span className="hidden font-mono text-xs font-semibold uppercase tracking-[0.16em] text-ink sm:inline">LIANG INTRANET</span>
        </Link>

        <nav className="nav-cluster relative hidden items-center gap-1 md:flex" aria-label="Main navigation">
          <button
            type="button"
            className="border-2 border-ink bg-clinical-100 px-3 py-2 font-mono text-xs font-semibold uppercase tracking-[0.12em] text-ink shadow-[3px_3px_0_#bfd5ca]"
          >
            Departments
          </button>
          <div className="nav-submenu pixel-panel absolute right-0 top-12 w-[32rem] p-3">
            <div className="mb-2 flex items-center justify-between border-b border-current/20 pb-2">
              <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.18em]">Authorized submenu</span>
              <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-current/55">{profile.role}</span>
            </div>
            <div className="grid gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={clsx(
                    "submenu-row",
                    pathname === item.href ? "bg-clinical-100 shadow-[3px_3px_0_#c7623a]" : ""
                  )}
                >
                  <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-current/55">{item.code}</span>
                  <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em]">{item.label}</span>
                  <span className="min-w-0 truncate text-xs text-current/58">{item.description}</span>
                  <span className="font-mono text-xs">+</span>
                </Link>
              ))}
            </div>
          </div>
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
