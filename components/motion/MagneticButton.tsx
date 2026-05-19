"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import {
    ButtonHTMLAttributes,
    MouseEvent,
    ReactNode,
    useEffect,
    useRef,
    useState,
} from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    strength?: number;
    className?: string;
};

export function MagneticButton({
    children,
    strength = 0.3,
    className = "",
    ...props
}: Props) {
    const ref = useRef<HTMLButtonElement>(null);
    const [enabled, setEnabled] = useState(false);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const sx = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
    const sy = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

    useEffect(() => {
        setEnabled(
            window.matchMedia("(hover: hover) and (pointer: fine)").matches,
        );
    }, []);

    const handleMove = (e: MouseEvent<HTMLButtonElement>) => {
        if (!enabled) return;
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        x.set((e.clientX - cx) * strength);
        y.set((e.clientY - cy) * strength);
    };

    const handleLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ x: sx, y: sy }}
            className={className}
            {...(props as any)}
        >
            <motion.span
                className="inline-flex items-center gap-2"
                style={{ x: sx, y: sy }}
            >
                {children}
            </motion.span>
        </motion.button>
    );
}
