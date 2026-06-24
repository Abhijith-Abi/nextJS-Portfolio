"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type SectionWrapperProps = {
    id: string;
    children: ReactNode;
    className?: string;
    index?: string;
    label?: string;
};

export function SectionWrapper({
    id,
    children,
    className = "",
    index,
    label,
}: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={`container-width relative py-16 sm:py-20 lg:py-24 ${className}`}
        >
            {(index || label) && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="mb-10 flex items-center gap-3 sm:mb-14 sm:gap-4 lg:mb-20"
                >
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-accent sm:text-[11px] sm:tracking-[0.32em]">
                        {index ?? ""}
                    </span>
                    <motion.span
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="hairline flex-1 origin-left"
                    />
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/50 sm:text-[11px] sm:tracking-[0.32em]">
                        {label ?? ""}
                    </span>
                </motion.div>
            )}
            {children}
        </section>
    );
}
