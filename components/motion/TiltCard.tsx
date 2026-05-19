"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { MouseEvent, ReactNode, useEffect, useRef, useState } from "react";

type Props = {
    children: ReactNode;
    className?: string;
    max?: number;
};

export function TiltCard({ children, className = "", max = 7 }: Props) {
    const ref = useRef<HTMLDivElement>(null);
    const [enabled, setEnabled] = useState(false);
    const mx = useMotionValue(0);
    const my = useMotionValue(0);
    const smx = useSpring(mx, { stiffness: 220, damping: 20, mass: 0.5 });
    const smy = useSpring(my, { stiffness: 220, damping: 20, mass: 0.5 });

    const rotateX = useTransform(smy, [-0.5, 0.5], [max, -max]);
    const rotateY = useTransform(smx, [-0.5, 0.5], [-max, max]);
    const glareX = useTransform(smx, [-0.5, 0.5], ["0%", "100%"]);
    const glareY = useTransform(smy, [-0.5, 0.5], ["0%", "100%"]);

    useEffect(() => {
        setEnabled(
            window.matchMedia("(hover: hover) and (pointer: fine)").matches,
        );
    }, []);

    const handleMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!enabled) return;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleLeave = () => {
        mx.set(0);
        my.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ rotateX, rotateY, transformPerspective: 1200 }}
            className={`relative will-change-transform ${className}`}
        >
            {children}
            <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 rounded-[inherit]"
                style={{
                    background: useTransform(
                        [glareX, glareY] as any,
                        ([gx, gy]: string[]) =>
                            `radial-gradient(420px circle at ${gx} ${gy}, rgba(124,92,255,0.14), transparent 50%)`,
                    ),
                }}
            />
        </motion.div>
    );
}
