"use client";

import { motion } from "framer-motion";
import {
    ButtonHTMLAttributes,
    MouseEvent,
    ReactNode,
    useRef,
    useState,
} from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
    children: ReactNode;
    className?: string;
};

export function MagneticButton({
    children,
    className = "",
    ...props
}: Props) {
    const ref = useRef<HTMLButtonElement>(null);
    const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLButtonElement>) => {
        const el = ref.current;
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const xPercent = ((e.clientX - rect.left) / rect.width) * 100;
        const yPercent = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePos({ x: xPercent, y: yPercent });
    };

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`relative overflow-hidden ${className}`}
            {...(props as any)}
        >
            {/* Interactive Color Glow Wave following the cursor inside button */}
            <span
                className="pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out"
                style={{
                    opacity: isHovered ? 1 : 0,
                    background: `radial-gradient(140px circle at ${mousePos.x}% ${mousePos.y}%, rgba(255, 255, 255, 0.35), transparent 70%)`,
                }}
            />
            <span className="relative z-10 inline-flex items-center gap-2">
                {children}
            </span>
        </motion.button>
    );
}
