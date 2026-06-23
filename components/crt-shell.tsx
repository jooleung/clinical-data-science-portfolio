import Link from "next/link";
import { ReactNode } from "react";
import { profile } from "@/lib/site-data";

type CrtShellProps = {
  title?: string;
  children: ReactNode;
  compact?: boolean;
};

export function CrtShell({ title = "Personal Website", children, compact = false }: CrtShellProps) {
  return (
    <section className="crt-stage">
      <div className="crt-screen">
        <header className="crt-header">
          <div className="crt-title-box">
            <span>{title}</span>
          </div>
          <Link href="/" className="crt-logo" aria-label="Return to Personal Website home">
            <span className="crt-logo-globe" />
            <span className="crt-logo-text">LIANG</span>
          </Link>
        </header>
        <div className="crt-rule" />
        <div className={compact ? "crt-content crt-content-compact" : "crt-content"}>{children}</div>
        <div className="crt-status">
          <span>{profile.name}</span>
          <span>{profile.role}</span>
        </div>
      </div>
    </section>
  );
}
