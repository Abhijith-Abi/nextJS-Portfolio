"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

const lineVariants: Variants = {
    hidden: { y: "115%", opacity: 0 },
    show: (i: number) => ({
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.9,
            delay: i * 0.06,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

const wordVariants: Variants = {
    hidden: { y: "100%", opacity: 0, filter: "blur(8px)" },
    show: (i: number) => ({
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
            duration: 0.7,
            delay: i * 0.04,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

type RevealLinesProps = {
    lines: ReactNode[];
    className?: string;
    once?: boolean;
};

export function RevealLines({
    lines,
    className = "",
    once = true,
}: RevealLinesProps) {
    return (
        <span className={className}>
            {lines.map((line, i) => (
                <span
                    key={i}
                    className="block overflow-hidden pb-1"
                    style={{ lineHeight: 1.05 }}
                >
                    <motion.span
                        className="inline-block will-change-transform"
                        custom={i}
                        variants={lineVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once, amount: 0.5 }}
                    >
                        {line}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

type RevealWordsProps = {
    text: string;
    className?: string;
    once?: boolean;
    delay?: number;
};

export function RevealWords({
    text,
    className = "",
    once = true,
    delay = 0,
}: RevealWordsProps) {
    const words = text.split(" ");
    return (
        <span className={className} aria-label={text}>
            {words.map((word, i) => (
                <span
                    key={i}
                    className="inline-block overflow-hidden pb-[0.05em] align-bottom"
                >
                    <motion.span
                        className="inline-block will-change-transform"
                        custom={i + delay * 10}
                        variants={wordVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once, amount: 0.4 }}
                    >
                        {word}
                        {i < words.length - 1 ? "\u00A0" : ""}
                    </motion.span>
                </span>
            ))}
        </span>
    );
}

type FadeInProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    once?: boolean;
};

export function FadeIn({
    children,
    className = "",
    delay = 0,
    y = 24,
    once = true,
}: FadeInProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y, filter: "blur(6px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
            viewport={{ once, amount: 0.3 }}
        >
            {children}
        </motion.div>
    );
}
