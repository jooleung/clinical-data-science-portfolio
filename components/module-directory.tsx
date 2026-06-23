import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { navItems } from "@/lib/site-data";

export function ModuleDirectory() {
  return (
    <div className="pixel-panel p-4 sm:p-5">
      <div className="flex items-center justify-between gap-4 border-b border-current/20 pb-3">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em]">Refinement Directory</p>
        <span className="font-mono text-[0.68rem] uppercase tracking-[0.16em] text-current/60">6 modules</span>
      </div>
      <div className="mt-4 grid gap-2">
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} className="submenu-row group">
            <span className="font-mono text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-current/55">{item.code}</span>
            <span className="font-mono text-xs font-semibold uppercase tracking-[0.12em]">{item.label}</span>
            <span className="min-w-0 flex-1 truncate text-xs text-current/58">{item.description}</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-45 transition-opacity group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </div>
  );
}
