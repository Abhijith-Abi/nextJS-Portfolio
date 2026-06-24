"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * Blob cursor — soft squishy orange shape with jelly physics.
 * Stretches in the direction of motion, squashes back to a circle when idle.
 * Native cursor stays visible; this is a decorative accent.
 */
export function CursorFollower() {
    const blobRef = useRef<HTMLDivElement>(null);
    const dotRef = useRef<HTMLDivElement>(null);
    const [enabled, setEnabled] = useState(false);
    const [hovering, setHovering] = useState(false);

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

        const blob = blobRef.current;
        const dot = dotRef.current;
        if (!blob || !dot) return;

        // Mouse target
        const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        // Blob current position (lerps toward mouse)
        const pos = { x: mouse.x, y: mouse.y };

        // GSAP setters for the inner dot — instant follow
        gsap.set([blob, dot], { xPercent: -50, yPercent: -50, opacity: 0 });
        const setDotX = gsap.quickSetter(dot, "x", "px");
        const setDotY = gsap.quickSetter(dot, "y", "px");

        let visible = false;

        const onMove = (e: PointerEvent) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
            (setDotX as any)(e.clientX);
            (setDotY as any)(e.clientY);

            if (!visible) {
                visible = true;
                gsap.to([blob, dot], { opacity: 1, duration: 0.3 });
            }
        };

        // Physics ticker — lerp blob position, compute velocity, deform
        const tick = () => {
            const dx = mouse.x - pos.x;
            const dy = mouse.y - pos.y;

            // Lerp factor (lower = more drag, more squish)
            const ease = 0.18;
            pos.x += dx * ease;
            pos.y += dy * ease;

            // Velocity = distance to travel this frame
            const vx = dx * ease;
            const vy = dy * ease;
            const speed = Math.sqrt(vx * vx + vy * vy);

            // Direction angle (deg)
            const angle = (Math.atan2(vy, vx) * 180) / Math.PI;

            // Stretch factor capped — more speed = more stretch
            const stretch = Math.min(speed / 30, 0.6);
            const scaleX = 1 + stretch;
            const scaleY = 1 - stretch * 0.55;

            gsap.set(blob, {
                x: pos.x,
                y: pos.y,
                rotation: angle,
                scaleX,
                scaleY,
            });
        };

        const ticker = gsap.ticker.add(tick);

        // Hover detection — grow on interactive elements
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

        const onLeaveWindow = () => {
            visible = false;
            gsap.to([blob, dot], { opacity: 0, duration: 0.2 });
        };
        const onEnterWindow = () => {
            visible = true;
            gsap.to([blob, dot], { opacity: 1, duration: 0.2 });
        };

        window.addEventListener("pointermove", onMove);
        window.addEventListener("mouseover", onOver);
        window.addEventListener("mouseout", onOut);
        document.addEventListener("mouseleave", onLeaveWindow);
        document.addEventListener("mouseenter", onEnterWindow);

        return () => {
            gsap.ticker.remove(ticker);
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("mouseover", onOver);
            window.removeEventListener("mouseout", onOut);
            document.removeEventListener("mouseleave", onLeaveWindow);
            document.removeEventListener("mouseenter", onEnterWindow);
        };
    }, [enabled]);

    // React to hover state — animate blob size/opacity
    useEffect(() => {
        const blob = blobRef.current;
        if (!blob) return;
        gsap.to(blob, {
            width: hovering ? 64 : 40,
            height: hovering ? 64 : 40,
            backgroundColor: hovering
                ? "rgba(96, 165, 250, 0.4)"
                : "rgba(96, 165, 250, 0.2)",
            duration: 0.35,
            ease: "power3.out",
        });
    }, [hovering]);

    if (!enabled) return null;

    return (
        <>
            {/* Squishy blob */}
            <div
                ref={blobRef}
                aria-hidden
                className="pointer-events-none fixed left-0 top-0 z-[200] hidden lg:block"
                style={{
                    width: 40,
                    height: 40,
                    borderRadius: "9999px",
                    background: "rgba(96, 165, 250, 0.2)",
                    filter: "blur(2px)",
                    boxShadow:
                        "0 0 24px rgba(96, 165, 250, 0.3), inset 0 0 12px rgba(147, 197, 253, 0.2)",
                    willChange: "transform, width, height",
                    mixBlendMode: "screen",
                }}
            />
            {/* Crisp inner dot */}
            <div
                ref={dotRef}
                aria-hidden
                className="pointer-events-none fixed left-0 top-0 z-[201] hidden lg:block"
                style={{
                    width: 6,
                    height: 6,
                    borderRadius: "9999px",
                    background: "#60a5fa",
                    boxShadow: "0 0 10px rgba(96, 165, 250, 0.8)",
                    willChange: "transform",
                }}
            />
        </>
    );
}
