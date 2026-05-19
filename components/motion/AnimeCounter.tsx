"use client";

import anime from "animejs";
import { useEffect, useRef, useState } from "react";

type Props = {
    to: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    decimals?: number;
    className?: string;
};

export function AnimeCounter({
    to,
    suffix = "",
    prefix = "",
    duration = 1800,
    decimals = 0,
    className = "",
}: Props) {
    const ref = useRef<HTMLSpanElement>(null);
    const [done, setDone] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el || done) return;

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        const obj = { v: 0 };
                        anime({
                            targets: obj,
                            v: to,
                            duration,
                            easing: "easeOutExpo",
                            update: () => {
                                if (el)
                                    el.textContent =
                                        prefix +
                                        obj.v.toFixed(decimals) +
                                        suffix;
                            },
                            complete: () => setDone(true),
                        });
                        io.disconnect();
                    }
                });
            },
            { threshold: 0.5 },
        );

        io.observe(el);
        return () => io.disconnect();
    }, [to, suffix, prefix, duration, decimals, done]);

    return (
        <span ref={ref} className={className}>
            {prefix}0{suffix}
        </span>
    );
}
