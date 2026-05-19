"use client";

import anime from "animejs";
import { CSSProperties, useEffect, useRef } from "react";

type Props = {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    stagger?: number;
    onScroll?: boolean;
    split?: "char" | "word";
    runKey?: string | number;
};

/**
 * Kinetic typography component using anime.js.
 * Splits text into chars or words, masks each unit with overflow,
 * and animates with stagger + easing.
 */
export function AnimeText({
    text,
    className = "",
    delay = 0,
    duration = 1100,
    stagger = 22,
    onScroll = false,
    split = "char",
    runKey,
}: Props) {
    const ref = useRef<HTMLSpanElement>(null);
    const animatedRef = useRef(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const run = () => {
            if (animatedRef.current && !runKey) return;
            animatedRef.current = true;
            anime({
                targets: el.querySelectorAll(".anime-char"),
                translateY: ["110%", "0%"],
                opacity: [0, 1],
                duration,
                delay: anime.stagger(stagger, { start: delay }),
                easing: "cubicBezier(.22,1,.36,1)",
            });
        };

        if (!onScroll) {
            run();
            return;
        }

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        run();
                        io.disconnect();
                    }
                });
            },
            { threshold: 0.35 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, [delay, duration, stagger, onScroll, runKey]);

    // Inline style is used so we don't depend on a CSS class that could
    // be overridden by global rules (which caused word-stacking before).
    const maskStyle: CSSProperties = {
        display: "inline-block",
        overflow: "hidden",
        lineHeight: 1.05,
        paddingBottom: "0.05em",
        verticalAlign: "bottom",
    };

    const renderUnits = () => {
        if (split === "word") {
            return text.split(" ").map((word, i, arr) => (
                <span
                    key={i}
                    style={{
                        ...maskStyle,
                        marginRight: i < arr.length - 1 ? "0.28em" : 0,
                    }}
                >
                    <span className="anime-char">{word}</span>
                </span>
            ));
        }

        return text.split(" ").map((word, wi, arr) => (
            <span
                key={wi}
                style={{
                    display: "inline-block",
                    marginRight: wi < arr.length - 1 ? "0.28em" : 0,
                    verticalAlign: "bottom",
                }}
            >
                <span style={maskStyle}>
                    {word.split("").map((c, ci) => (
                        <span key={ci} className="anime-char">
                            {c}
                        </span>
                    ))}
                </span>
            </span>
        ));
    };

    return (
        <span ref={ref} className={className} aria-label={text}>
            {renderUnits()}
        </span>
    );
}
