"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
    const [show, set] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => set(false), 1700);
        return () => clearTimeout(t);
    }, []);

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    key="loader"
                    initial={{ opacity: 1 }}
                    exit={{
                        opacity: 0,
                        filter: "blur(12px)",
                        transition: { duration: 0.6, ease: [0.7, 0, 0.3, 1] },
                    }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
                >
                    <div className="relative flex flex-col items-center gap-8">
                        <motion.div
                            initial={{ scale: 0.85, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative"
                        >
                            <div className="absolute -inset-12 rounded-full bg-accent opacity-20 blur-3xl" />
                            <div className="surface relative flex h-20 w-20 items-center justify-center rounded-2xl">
                                <span className="font-display text-2xl font-extrabold text-accent">
                                    ABI
                                </span>
                            </div>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                            className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink/50"
                        >
                            Abhijith P A
                        </motion.p>

                        <div className="relative h-px w-56 overflow-hidden rounded-full bg-line">
                            <motion.div
                                initial={{ scaleX: 0, originX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                    duration: 1.3,
                                    ease: [0.7, 0, 0.3, 1],
                                }}
                                className="absolute inset-0 origin-left bg-accent"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
