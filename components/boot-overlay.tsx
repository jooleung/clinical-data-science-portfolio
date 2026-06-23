"use client";

import { useEffect, useState } from "react";
import { profile } from "@/lib/site-data";
import { LumonMark } from "@/components/lumon-mark";

export function BootOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 1850);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="boot-overlay" aria-label="Portfolio loading sequence">
      <div className="boot-terminal">
        <div className="flex items-center gap-3 border-b border-current/30 pb-3">
          <LumonMark />
          <span className="font-mono text-xs uppercase tracking-[0.24em]">Clinical Intranet</span>
        </div>
        <div className="mt-5 grid gap-2 font-mono text-xs uppercase tracking-[0.12em]">
          <span>Importing candidate profile...</span>
          <span>Validating oncology analytics modules...</span>
          <span>Loading {profile.name}</span>
        </div>
        <div className="mt-5 h-3 border border-current p-0.5">
          <div className="boot-bar h-full" />
        </div>
      </div>
    </div>
  );
}
