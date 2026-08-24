"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Image from "next/image";

const navItems = [
    { id: "home", href: "/", label: "Home", num: "01" },
    { id: "about", href: "/about", label: "About", num: "02" },
    { id: "skills", href: "/services", label: "Stack", num: "03" },
    { id: "workflow", href: "/#workflow", label: "Architecture", num: "04" },
    { id: "projects", href: "/projects", label: "Work", num: "05" },
    { id: "experience", href: "/about", label: "Path", num: "06" },
    { id: "blog", href: "/blog", label: "Blog", num: "07" },
    { id: "contact", href: "/contact", label: "Contact", num: "08" },
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
        setScrolled(latest > 20);
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
                delay: 1.2,
            }}
            className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
        >
            <nav
                className={`relative flex w-full max-w-4xl items-center justify-between rounded-2xl border px-3.5 py-2.5 transition-all duration-300 ${
                    scrolled
                        ? "border-white/10 bg-background/80 shadow-soft backdrop-blur-2xl"
                        : "border-white/[0.08] bg-surface/75 backdrop-blur-xl"
                }`}
            >
                <Link
                    href="/"
                    className="group flex items-center gap-2.5 pl-1.5 transition-transform duration-200 hover:scale-105"
                >
                    <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-accent/50 bg-surface2 shadow-glow-sm">
                        <Image
                            src="/avatar.jpg"
                            alt="Abhijith P A Logo"
                            width={32}
                            height={32}
                            className="h-full w-full object-cover object-center"
                            priority
                        />
                    </span>
                    <span className="hidden font-display text-sm font-bold tracking-tight text-ink sm:block">
                        Abhijith P A
                    </span>
                </Link>

                <ul className="hidden items-center gap-1 md:flex">
                    {navItems.map((item) =>
                        isHome && item.id !== "blog" ? (
                            <li key={item.id}>
                                <button
                                    type="button"
                                    onClick={() => handleClick(item)}
                                    className="group relative rounded-xl px-3 py-1.5 text-[13px] font-medium text-ink-muted transition hover:text-ink"
                                >
                                    <span className="relative z-10">
                                        {item.label}
                                    </span>
                                    <span className="absolute inset-0 rounded-xl bg-white/0 transition group-hover:bg-white/[0.05]" />
                                    <span className="pointer-events-none absolute -bottom-0.5 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-5 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                                </button>
                            </li>
                        ) : (
                            <li key={item.id}>
                                <Link
                                    href={item.href}
                                    className="group relative rounded-xl px-3 py-1.5 text-[13px] font-medium text-ink-muted transition hover:text-ink"
                                >
                                    <span className="relative z-10">
                                        {item.label}
                                    </span>
                                    <span className="absolute inset-0 rounded-xl bg-white/0 transition group-hover:bg-white/[0.05]" />
                                    <span className="pointer-events-none absolute -bottom-0.5 left-1/2 h-[2px] w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-5 shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
                                </Link>
                            </li>
                        ),
                    )}
                </ul>

                <div className="flex items-center gap-2">
                    {isHome ? (
                        <button
                            type="button"
                            onClick={() => scrollToSection("contact")}
                            className="hidden items-center gap-2 rounded-xl bg-accent/10 border border-accent/30 px-3.5 py-1.5 text-[12px] font-semibold text-accent transition-all duration-200 hover:bg-accent hover:text-black hover:shadow-glow-sm md:inline-flex"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
                            </span>
                            Available
                        </button>
                    ) : (
                        <Link
                            href="/contact"
                            className="hidden items-center gap-2 rounded-xl bg-accent/10 border border-accent/30 px-3.5 py-1.5 text-[12px] font-semibold text-accent transition-all duration-200 hover:bg-accent hover:text-black hover:shadow-glow-sm md:inline-flex"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
                            </span>
                            Available
                        </Link>
                    )}

                    <button
                        type="button"
                        className="surface inline-flex h-9 w-9 items-center justify-center rounded-xl text-ink transition hover:border-accent/40 md:hidden"
                        onClick={() => setOpen((v) => !v)}
                        aria-label="Toggle navigation"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <div className="space-y-1">
                            <span
                                className={`block h-0.5 w-4 bg-ink transition-transform duration-200 ${
                                    open ? "translate-y-1.5 rotate-45" : ""
                                }`}
                            />
                            <span
                                className={`block h-0.5 w-4 bg-ink transition-opacity duration-200 ${
                                    open ? "opacity-0" : ""
                                }`}
                            />
                            <span
                                className={`block h-0.5 w-4 bg-ink transition-transform duration-200 ${
                                    open ? "-translate-y-1.5 -rotate-45" : ""
                                }`}
                            />
                        </div>
                    </button>
                </div>

                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        className="surface-card absolute left-0 right-0 top-full mt-2 rounded-2xl border border-white/10 p-3 shadow-2xl backdrop-blur-2xl md:hidden"
                    >
                        <ul className="space-y-1 text-sm font-medium text-ink">
                            {navItems.map((item) =>
                                isHome && item.id !== "blog" ? (
                                    <li key={item.id}>
                                        <button
                                            type="button"
                                            onClick={() => handleClick(item)}
                                            className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition hover:bg-white/[0.06] hover:text-accent"
                                        >
                                            <span className="font-medium">
                                                {item.label}
                                            </span>
                                            <span className="font-mono text-[10px] text-ink/40">
                                                {item.num}
                                            </span>
                                        </button>
                                    </li>
                                ) : (
                                    <li key={item.id}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition hover:bg-white/[0.06] hover:text-accent"
                                        >
                                            <span className="font-medium">
                                                {item.label}
                                            </span>
                                            <span className="font-mono text-[10px] text-ink/40">
                                                {item.num}
                                            </span>
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
