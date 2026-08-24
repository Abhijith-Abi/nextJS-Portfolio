"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Loader() {
    const [show, set] = useState(true);

    useEffect(() => {
        const t = setTimeout(() => set(false), 1400);
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
                        filter: "blur(16px)",
                        scale: 1.02,
                        transition: { duration: 0.5, ease: [0.7, 0, 0.3, 1] },
                    }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
                >
                    <div className="relative flex flex-col items-center gap-7">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.7,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                            className="relative"
                        >
                            <div className="absolute -inset-10 animate-pulse rounded-full bg-gradient-to-br from-accent/30 via-accent2/20 to-accent-purple/15 blur-3xl" />
                            <div className="surface relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/10 shadow-glow">
                                <span className="bg-gradient-to-br from-accent via-accent2 to-accent-purple bg-clip-text font-display text-2xl font-black text-transparent">
                                    ABI
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="flex items-center gap-2"
                        >
                            <span className="h-1.5 w-1.5 animate-ping rounded-full bg-accent" />
                            <span className="font-mono text-[11px] uppercase tracking-[0.36em] text-ink/60">
                                Abhijith P A · Initializing
                            </span>
                        </motion.div>

                        <div className="relative h-1 w-52 overflow-hidden rounded-full bg-white/5 border border-white/10">
                            <motion.div
                                initial={{ scaleX: 0, originX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{
                                    duration: 1.1,
                                    ease: [0.7, 0, 0.3, 1],
                                }}
                                className="absolute inset-0 origin-left bg-gradient-to-r from-accent via-accent2 to-accent-purple"
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
