"use client";

import { useEffect, useState } from "react";

export function RetroCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
      setActive(true);
    };
    const onLeave = () => setActive(false);

    window.addEventListener("mousemove", onMove);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <span
      className="retro-cursor"
      style={{
        opacity: active ? 1 : 0,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      aria-hidden="true"
    />
  );
}
