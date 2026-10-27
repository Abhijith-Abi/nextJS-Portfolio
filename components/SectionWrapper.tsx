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
            className={`container-width relative py-20 sm:py-24 lg:py-32 ${className}`}
        >
            {(index || label) && (
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    viewport={{ once: true, amount: 0.5 }}
                    className="mb-12 sm:mb-16 lg:mb-20"
                >
                    <div className="flex items-baseline gap-4">
                        <span className="font-mono text-[11px] font-bold tracking-[0.2em] text-accent sm:text-xs">
                            {index ?? ""}
                        </span>
                        <span className="hairline h-px w-10 shrink-0" />
                        <span className="section-eyebrow">{label ?? ""}</span>
                    </div>
                    <motion.span
                        initial={{ scaleX: 0, originX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        transition={{
                            duration: 1,
                            ease: [0.22, 1, 0.36, 1],
                            delay: 0.15,
                        }}
                        viewport={{ once: true, amount: 0.5 }}
                        className="mt-5 block h-px w-full bg-line lg:mt-6"
                    />
                </motion.div>
            )}
            {children}
        </section>
    );
}
