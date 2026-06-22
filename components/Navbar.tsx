"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
    { id: "home", href: "/", label: "Home", num: "01" },
    { id: "about", href: "/about", label: "About", num: "02" },
    { id: "skills", href: "/services", label: "Stack", num: "03" },
    { id: "projects", href: "/projects", label: "Work", num: "04" },
    { id: "experience", href: "/about", label: "Path", num: "05" },
    { id: "blog", href: "/blog", label: "Blog", num: "06" },
    { id: "contact", href: "/contact", label: "Contact", num: "07" },
];

function scrollToSection(id: string) {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();
    const isHome = pathname === "/";

    useMotionValueEvent(scrollY, "change", (latest) => {
        setScrolled(latest > 12);
    });

    const handleClick = (item: (typeof navItems)[number]) => {
        if (isHome && item.id !== "blog") {
            scrollToSection(item.id);
        }
        setOpen(false);
    };

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 1.5,
            }}
            className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
        >
            <nav
                className={`relative flex w-full max-w-3xl items-center justify-between rounded-2xl border px-3 py-2.5 transition-all duration-300 ${
                    scrolled
                        ? "border-line bg-background/85 shadow-soft backdrop-blur-2xl"
                        : "border-line bg-surface/80 backdrop-blur-xl"
                }`}
            >
                <Link href="/" className="group flex items-center gap-2.5 pl-2">
                    <span className="relative flex h-7 w-7 items-center justify-center overflow-hidden rounded-lg bg-accent">
                        <span className="font-display text-[11px] font-extrabold text-white">
                            A
                        </span>
                    </span>
                    <span className="hidden font-display text-sm font-bold tracking-tight text-ink sm:block">
                        Abhijith P A
                    </span>
                </Link>

                <ul className="hidden items-center gap-0.5 md:flex">
                    {navItems.map((item) =>
                        isHome && item.id !== "blog" ? (
                            <li key={item.id}>
                                <button
                                    type="button"
                                    onClick={() => handleClick(item)}
                                    className="group relative rounded-lg px-3 py-1.5 text-[13px] font-medium text-ink/60 transition hover:text-ink"
                                >
                                    <span className="relative z-10">
                                        {item.label}
                                    </span>
                                    <span className="absolute inset-0 rounded-lg bg-ink/0 transition group-hover:bg-ink/[0.04]" />
                                    <span className="pointer-events-none absolute -bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-6" />
                                </button>
                            </li>
                        ) : (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className="group relative rounded-lg px-3 py-1.5 text-[13px] font-medium text-ink/60 transition hover:text-ink"
                                >
                                    <span className="relative z-10">
                                        {item.label}
                                    </span>
                                    <span className="absolute inset-0 rounded-lg bg-ink/0 transition group-hover:bg-ink/[0.04]" />
                                    <span className="pointer-events-none absolute -bottom-0.5 left-1/2 h-px w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-6" />
                                </Link>
                            </li>
                        ),
                    )}
                </ul>

                {isHome ? (
                    <button
                        type="button"
                        onClick={() => handleClick(navItems[6])}
                        className="btn-primary hidden items-center gap-2 rounded-lg px-3.5 py-1.5 text-[12px] font-semibold md:inline-flex"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        Available
                    </button>
                ) : (
                    <Link
                        href="/contact"
                        className="btn-primary hidden items-center gap-2 rounded-lg px-3.5 py-1.5 text-[12px] font-semibold md:inline-flex"
                    >
                        <span className="h-1.5 w-1.5 rounded-full bg-white" />
                        Available
                    </Link>
                )}

                <button
                    type="button"
                    className="surface inline-flex h-9 w-9 items-center justify-center rounded-lg text-ink md:hidden"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="Toggle navigation"
                >
                    <span className="sr-only">Toggle navigation</span>
                    <div className="space-y-1">
                        <span className="block h-0.5 w-4 bg-ink" />
                        <span className="block h-0.5 w-4 bg-ink" />
                    </div>
                </button>

                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="surface absolute left-0 right-0 top-full mt-2 rounded-2xl p-3 md:hidden"
                    >
                        <ul className="space-y-0.5 text-sm font-medium text-ink/90">
                            {navItems.map((item) =>
                                isHome && item.id !== "blog" ? (
                                    <li key={item.id}>
                                        <button
                                            type="button"
                                            onClick={() => handleClick(item)}
                                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition hover:bg-ink/5"
                                        >
                                            <span className="font-mono text-[10px] text-ink/40">
                                                {item.num}
                                            </span>
                                            {item.label}
                                        </button>
                                    </li>
                                ) : (
                                    <li key={item.id}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition hover:bg-ink/5"
                                        >
                                            <span className="font-mono text-[10px] text-ink/40">
                                                {item.num}
                                            </span>
                                            {item.label}
                                        </Link>
                                    </li>
                                ),
                            )}
                        </ul>
                    </motion.div>
                )}
            </nav>
        </motion.header>
    );
}
