"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Orbit cursor — a lime probe.
 * A small solid core rides the pointer exactly; a hairline lime ring trails
 * behind it on a spring with a tiny satellite orbiting the ring; a wide
 * soft lime spotlight breathes beneath everything (Aceternity-style mouse
 * spotlight, page-wide). Grows on interactive elements.
 */
export function CursorFollower() {
    const [enabled, setEnabled] = useState(false);
    const [hovering, setHovering] = useState(false);

    const mx = useMotionValue(-200);
    const my = useMotionValue(-200);

    // Core rides the pointer almost 1:1.
    const coreX = useSpring(mx, { stiffness: 1400, damping: 60, mass: 0.3 });
    const coreY = useSpring(my, { stiffness: 1400, damping: 60, mass: 0.3 });

    // Ring trails behind.
    const ringX = useSpring(mx, { stiffness: 320, damping: 30, mass: 0.7 });
    const ringY = useSpring(my, { stiffness: 320, damping: 30, mass: 0.7 });

    // Spotlight drifts lazily.
    const glowX = useSpring(mx, { stiffness: 90, damping: 24, mass: 1.1 });
    const glowY = useSpring(my, { stiffness: 90, damping: 24, mass: 1.1 });

    useEffect(() => {
        const finePointer = window.matchMedia(
            "(hover: hover) and (pointer: fine)",
        ).matches;
        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)",
        ).matches;
        setEnabled(finePointer && !reduced);
    }, []);

    useEffect(() => {
        if (!enabled) return;
        const onMove = (e: PointerEvent) => {
            mx.set(e.clientX);
            my.set(e.clientY);
        };
        window.addEventListener("pointermove", onMove);
        return () => window.removeEventListener("pointermove", onMove);
    }, [enabled, mx, my]);

    useEffect(() => {
        if (!enabled) return;
        const interactiveSel =
            'a, button, input, textarea, select, [role="button"], [data-cursor="hover"]';
        const onOver = (e: MouseEvent) => {
            const t = e.target as HTMLElement | null;
            if (t && t.closest(interactiveSel)) setHovering(true);
        };
        const onOut = (e: MouseEvent) => {
            const t = e.target as HTMLElement | null;
            const r = e.relatedTarget as HTMLElement | null;
            if (t && t.closest(interactiveSel)) {
                if (!r || !r.closest(interactiveSel)) setHovering(false);
            }
        };
        window.addEventListener("mouseover", onOver);
        window.addEventListener("mouseout", onOut);
        return () => {
            window.removeEventListener("mouseover", onOver);
            window.removeEventListener("mouseout", onOut);
        };
    }, [enabled]);

    if (!enabled) return null;

    return (
        <>
            {/* Page-wide mouse spotlight */}
            <motion.div
                aria-hidden
                className="pointer-events-none fixed left-0 top-0 z-[90] hidden h-[560px] w-[560px] lg:block"
                style={{
                    x: glowX,
                    y: glowY,
                    translateX: "-50%",
                    translateY: "-50%",
                    background:
                        "radial-gradient(circle, rgba(198,242,78,0.07) 0%, rgba(198,242,78,0.03) 35%, transparent 70%)",
                    mixBlendMode: "screen",
                }}
            />

            {/* Trailing ring + orbiting satellite */}
            <motion.div
                aria-hidden
                className="pointer-events-none fixed left-0 top-0 z-[200] hidden lg:block"
                style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
            >
                <motion.div
                    animate={{
                        width: hovering ? 64 : 34,
                        height: hovering ? 64 : 34,
                        borderColor: hovering
                            ? "rgba(198,242,78,0.9)"
                            : "rgba(245,245,243,0.55)",
                        backgroundColor: hovering
                            ? "rgba(198,242,78,0.10)"
                            : "rgba(198,242,78,0)",
                    }}
                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    className="relative flex items-center justify-center rounded-full border"
                    style={{
                        boxShadow: hovering
                            ? "0 0 28px rgba(198,242,78,0.25)"
                            : "0 0 14px rgba(198,242,78,0.10)",
                    }}
                >
                    {/* orbiting satellite */}
                    <motion.div
                        className="absolute inset-[-9px]"
                        animate={{ rotate: hovering ? 45 : 360 }}
                        transition={{
                            duration: 3.2,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                    >
                        <span className="absolute left-1/2 top-0 h-[5px] w-[5px] -translate-x-1/2 rounded-full bg-accent" />
                    </motion.div>
                </motion.div>
            </motion.div>

            {/* Precise core */}
            <motion.div
                aria-hidden
                className="pointer-events-none fixed left-0 top-0 z-[201] hidden lg:block"
                style={{ x: coreX, y: coreY, translateX: "-50%", translateY: "-50%" }}
            >
                <motion.span
                    animate={{
                        scale: hovering ? 0.4 : 1,
                        opacity: hovering ? 0.85 : 1,
                    }}
                    transition={{ duration: 0.2 }}
                    className="block h-[6px] w-[6px] rounded-full bg-accent shadow-[0_0_10px_rgba(198,242,78,0.8)]"
                />
            </motion.div>
        </>
    );
}
