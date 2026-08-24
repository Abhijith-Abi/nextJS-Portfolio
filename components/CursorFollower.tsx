"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

/**
 * Cyber-Crimson Blob cursor with smooth spring physics & interactive state expansion.
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

        const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const pos = { x: mouse.x, y: mouse.y };

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

        const tick = () => {
            const dx = mouse.x - pos.x;
            const dy = mouse.y - pos.y;

            const ease = 0.2;
            pos.x += dx * ease;
            pos.y += dy * ease;

            const vx = dx * ease;
            const vy = dy * ease;
            const speed = Math.sqrt(vx * vx + vy * vy);

            const angle = (Math.atan2(vy, vx) * 180) / Math.PI;

            const stretch = Math.min(speed / 28, 0.65);
            const scaleX = 1 + stretch;
            const scaleY = 1 - stretch * 0.5;

            gsap.set(blob, {
                x: pos.x,
                y: pos.y,
                rotation: angle,
                scaleX,
                scaleY,
            });
        };

        const ticker = gsap.ticker.add(tick);

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

    useEffect(() => {
        const blob = blobRef.current;
        if (!blob) return;
        gsap.to(blob, {
            width: hovering ? 68 : 38,
            height: hovering ? 68 : 38,
            backgroundColor: hovering
                ? "rgba(47, 107, 255, 0.35)"
                : "rgba(47, 107, 255, 0.18)",
            boxShadow: hovering
                ? "0 0 32px rgba(47, 107, 255, 0.5), inset 0 0 16px rgba(96, 165, 250, 0.4)"
                : "0 0 20px rgba(47, 107, 255, 0.25), inset 0 0 10px rgba(96, 165, 250, 0.2)",
            duration: 0.3,
            ease: "power3.out",
        });
    }, [hovering]);

    if (!enabled) return null;

    return (
        <>
            <div
                ref={blobRef}
                aria-hidden
                className="pointer-events-none fixed left-0 top-0 z-[200] hidden lg:block"
                style={{
                    width: 38,
                    height: 38,
                    borderRadius: "9999px",
                    background: "rgba(47, 107, 255, 0.18)",
                    filter: "blur(1.5px)",
                    boxShadow:
                        "0 0 20px rgba(47, 107, 255, 0.25), inset 0 0 10px rgba(96, 165, 250, 0.2)",
                    willChange: "transform, width, height",
                    mixBlendMode: "screen",
                }}
            />
            <div
                ref={dotRef}
                aria-hidden
                className="pointer-events-none fixed left-0 top-0 z-[201] hidden lg:block"
                style={{
                    width: 6,
                    height: 6,
                    borderRadius: "9999px",
                    background: "#2f6bff",
                    boxShadow: "0 0 14px rgba(47, 107, 255, 0.95)",
                    willChange: "transform",
                }}
            />
        </>
    );
}
