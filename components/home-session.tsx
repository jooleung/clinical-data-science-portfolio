"use client";

import Link from "next/link";
import { useState } from "react";
import { CrtShell } from "@/components/crt-shell";
import { profile } from "@/lib/site-data";

const primaryMenu = [
  { label: "CV Download", href: profile.resume, external: true },
  { label: "Education", href: "/about" },
  { label: "Experience", href: "/experience" }
];

const secondaryMenu = [
  { label: "Projects", href: "/projects" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" }
];

export function HomeSession() {
  const [entered, setEntered] = useState(false);

  return (
    <CrtShell title="Personal Website">
      {!entered ? (
        <div className="wellness-center">
          <button type="button" className="begin-button" onClick={() => setEntered(true)}>
            Personal Website
          </button>
        </div>
      ) : (
        <div className="wellness-menu">
          <p className="wellness-prompt">What I&apos;d like to do is share with you some facts about your candidate.</p>
          <div className="menu-stack" aria-label="Personal website submenu">
            {primaryMenu.map((item, index) =>
              item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="wellness-option"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  {item.label}
                </a>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="wellness-option"
                  style={{ animationDelay: `${index * 90}ms` }}
                >
                  {item.label}
                </Link>
              )
            )}
          </div>
          <div className="secondary-stack">
            {secondaryMenu.map((item) => (
              <Link key={item.label} href={item.href} className="secondary-option">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </CrtShell>
  );
}
