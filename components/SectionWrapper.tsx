"use client";

import { ReactNode, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SectionWrapperProps = {
  id: string;
  children: ReactNode;
  className?: string;
};

export function SectionWrapper({
  id,
  children,
  className = ""
}: SectionWrapperProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 40 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 80%"
          }
        }
      );
    }, element);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`container-width py-16 sm:py-20 lg:py-24 ${className}`}
    >
      {children}
    </section>
  );
}




