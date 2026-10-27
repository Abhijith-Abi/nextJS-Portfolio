"use client";

import { useMemo, type CSSProperties } from "react";

/**
 * Ambient drift of paper petals across the hero.
 * Leaf-shaped petals in three depth layers (sharp / soft / blurred).
 * Pure CSS animation; randomized once via useMemo.
 * Respects prefers-reduced-motion through globals.css.
 */
const COLORS = ["#C6F24E", "#E3FF8A", "#94C227", "#F5F5F3"];

type PetalSpec = {
    id: number;
    left: number;
    size: number;
    fall: number;
    sway: number;
    delay: number;
    drift: number;
    opacity: number;
    rotate: number;
    blur: number;
    color: string;
};

export function PetalDrift({
    count = 9,
    className = "",
}: {
    count?: number;
    className?: string;
}) {
    const petals = useMemo<PetalSpec[]>(
        () =>
            Array.from({ length: count }, (_, i) => {
                const layer = i % 3; // 0 = front sharp, 1 = mid, 2 = far blurred
                return {
                    id: i,
                    left: Math.random() * 92 + 4,
                    size: [22 + Math.random() * 14, 16 + Math.random() * 10, 10 + Math.random() * 8][
                        layer
                    ],
                    fall: 17 + Math.random() * 18 + layer * 4,
                    sway: 3 + Math.random() * 3,
                    delay: -Math.random() * 34,
                    drift: -Math.random() * 34,
                    opacity: [0.34, 0.24, 0.15][layer] + Math.random() * 0.08,
                    rotate: Math.random() * 360,
                    blur: [0.6, 1.2, 2.4][layer],
                    color: COLORS[i % COLORS.length],
                };
            }),
        [count],
    );

    return (
        <div
            aria-hidden
            className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
        >
            {petals.map((p) => (
                <span
                    key={p.id}
                    className="petal"
                    style={
                        {
                            left: `${p.left}%`,
                            "--fall": `${p.fall}s`,
                            animationDelay: `${p.drift}s`,
                        } as CSSProperties
                    }
                >
                    <span
                        className="petal-core"
                        style={
                            {
                                width: p.size,
                                height: p.size * 1.4,
                                background: `linear-gradient(160deg, ${p.color} 10%, rgba(255,255,255,0.35) 95%)`,
                                "--sway": `${p.sway}s`,
                                "--opacity": p.opacity,
                                animationDelay: `${p.delay}s`,
                                transform: `rotate(${p.rotate + 45}deg)`,
                                filter: `blur(${p.blur}px)`,
                            } as CSSProperties
                        }
                    />
                </span>
            ))}
        </div>
    );
}
