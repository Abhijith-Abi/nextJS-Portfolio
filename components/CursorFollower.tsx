"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement | null>(null);
  const ringRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const xToDot = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3.out" });
    const yToDot = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3.out" });

    const xToRing = gsap.quickTo(ring, "x", { duration: 0.35, ease: "power3.out" });
    const yToRing = gsap.quickTo(ring, "y", { duration: 0.35, ease: "power3.out" });

    const handleMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      xToDot(clientX);
      yToDot(clientY);
      xToRing(clientX);
      yToRing(clientY);
    };

    window.addEventListener("pointermove", handleMove);

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <>
      <div
        ref={ringRef}
        className="pointer-events-none fixed left-0 top-0 z-[60] hidden -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/60 bg-accent/5 backdrop-blur-sm transition-opacity duration-200 md:block"
        style={{ width: 40, height: 40 }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[61] hidden -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent md:block"
        style={{ width: 6, height: 6 }}
      />
    </>
  );
}


