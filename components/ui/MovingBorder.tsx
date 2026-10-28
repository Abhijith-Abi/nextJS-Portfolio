"use client";

import { motion } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode } from "react";

/**
 * Port of Aceternity UI's "Moving Border" (hover border gradient) concept.
 * A lime light point orbits the pill border continuously; the interior is
 * a dark glass pill. Built with a rotating conic ring — no extra deps.
 */
export function MovingBorderButton({
    children,
    className = "",
    duration = 6,
    ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    /** Seconds for one full orbit of the border light. */
    duration?: number;
}) {
    return (
        <button
            {...props}
            className={`group relative cursor-pointer overflow-hidden rounded-full p-px ${className}`}
        >
            <MovingBorderInner duration={duration}>{children}</MovingBorderInner>
        </button>
    );
}

/**
 * The orbiting light + pill content on its own, so any interactive wrapper
 * (e.g. an <a>) can use it. The wrapper needs:
 * `group relative overflow-hidden rounded-full p-px`.
 */
export function MovingBorderInner({
    children,
    duration = 6,
}: {
    children: ReactNode;
    duration?: number;
}) {
    return (
        <>
            {/* orbiting border light */}
            <motion.span
                aria-hidden
                className="pointer-events-none absolute inset-[-150%]"
                style={{
                    background:
                        "conic-gradient(from 0deg, transparent 0deg, transparent 250deg, rgba(198,242,78,0.85) 320deg, #E3FF8A 340deg, transparent 360deg)",
                }}
                animate={{ rotate: 360 }}
                transition={{ duration, ease: "linear", repeat: Infinity }}
            />
            {/* content */}
            <span className="relative flex items-center justify-center gap-2 rounded-full border border-line bg-background px-7 py-3.5 text-sm text-ink transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-[rgba(198,242,78,0.06)] group-hover:text-accent2">
                {children}
            </span>
        </>
    );
}
