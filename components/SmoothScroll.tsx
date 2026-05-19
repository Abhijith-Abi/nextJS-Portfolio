"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

export function SmoothScroll({ children }: { children: ReactNode }) {
    useEffect(() => {
        // Respect reduced motion
        const prefersReduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        if (prefersReduced) return;

        const lenis = new Lenis({
            duration: 0.95,
            // luxurious physics-style easing
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 1.4,
        });

        // Hook into GSAP ScrollTrigger so reveals stay in sync
        lenis.on("scroll", ScrollTrigger.update);
        const tickerCb = (time: number) => lenis.raf(time * 1000);
        gsap.ticker.add(tickerCb);
        gsap.ticker.lagSmoothing(0);

        return () => {
            gsap.ticker.remove(tickerCb);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
