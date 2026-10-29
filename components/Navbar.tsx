"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
    { id: "home", href: "/", label: "Home", num: "01" },
    { id: "about", href: "/about", label: "About", num: "02" },
    { id: "services", href: "/services", label: "Services", num: "03" },
    { id: "projects", href: "/projects", label: "Work", num: "04" },
    { id: "blog", href: "/blog", label: "Journal", num: "05" },
    { id: "contact", href: "/contact", label: "Contact", num: "06" },
];

/** Smooth-scroll for in-page anchors; the href still works without JS. */
function scrollToSection(
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string,
) {
    const el = document.getElementById(id);
    if (!el) return;
    event.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    history.replaceState(null, "", id === "home" ? "/" : `#${id}`);
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

    const handleClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        item: (typeof navItems)[number],
    ) => {
        scrollToSection(event, item.id);
        setOpen(false);
    };

    const activeLabel =
        navItems.find(
            (i) => isHome && i.id !== "blog" && i.href === pathname,
        ) !== undefined;

    return (
        <>
        <motion.header
            role="banner"
            initial={{ y: -60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
                delay: 1.2,
            }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "border-b border-line bg-background/85 backdrop-blur-xl"
                    : "border-b border-transparent"
            }`}
        >
            <nav
                aria-label="Primary"
                className="container-width relative flex items-center justify-between py-3.5 sm:py-4"
            >
                <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="group flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-70"
                >
                    {/* Decorative: the name next to it is the link text. A
                        background keeps the hero portrait as the page's
                        first (eager, LCP) image. */}
                    <span
                        aria-hidden
                        className="relative flex h-8 w-8 shrink-0 overflow-hidden rounded-full border border-line bg-surface2 bg-cover bg-center"
                        style={{ backgroundImage: "url(/avatar.webp)" }}
                    />
                    <span className="font-display text-sm font-bold tracking-tight text-ink">
                        Abhijith P A
                        <span className="text-accent">.</span>
                    </span>
                </Link>

                <ul className="hidden items-center gap-1 lg:flex">
                    {navItems.map((item) => {
                        const scrollTarget =
                            isHome && item.id !== "blog" && item.id !== "services";
                        return (
                            <li key={item.id}>
                                {scrollTarget ? (
                                    <a
                                        href={`#${item.id}`}
                                        onClick={(e) => handleClick(e, item)}
                                        className="group relative rounded-full px-3.5 py-1.5 text-[13px] font-medium text-ink-muted transition hover:text-ink cursor-pointer"
                                    >
                                        <span className="relative z-10">
                                            {item.label}
                                        </span>
                                        <span className="pointer-events-none absolute -bottom-0.5 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-4" />
                                    </a>
                                ) : (
                                    <Link
                                        href={item.href}
                                        className="group relative rounded-full px-3.5 py-1.5 text-[13px] font-medium text-ink-muted transition hover:text-ink"
                                    >
                                        <span className="relative z-10">
                                            {item.label}
                                        </span>
                                        <span className="pointer-events-none absolute -bottom-0.5 left-1/2 h-[1px] w-0 -translate-x-1/2 bg-accent transition-all duration-300 group-hover:w-4" />
                                    </Link>
                                )}
                            </li>
                        );
                    })}
                </ul>

                <div className="flex items-center gap-2">
                    {isHome ? (
                        <a
                            href="#contact"
                            onClick={(e) => scrollToSection(e, "contact")}
                            className="btn-primary hidden items-center gap-2 px-4 py-2 text-[12px] md:inline-flex cursor-pointer"
                        >
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-emerald" />
                            </span>
                            Available for work
                        </a>
                    ) : (
                        <Link
                            href="/contact"
                            className="btn-primary hidden items-center gap-2 px-4 py-2 text-[12px] md:inline-flex"
                        >
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75" />
                                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-emerald" />
                            </span>
                            Available for work
                        </Link>
                    )}

                    <button
                        type="button"
                        className="surface inline-flex h-9 w-9 items-center justify-center rounded-full text-ink transition hover:border-accent/40 lg:hidden cursor-pointer"
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
                        className="surface-card absolute left-3 right-3 top-full mt-2 rounded-2xl border border-line p-3 shadow-soft backdrop-blur-2xl lg:hidden z-50 max-h-[80vh] overflow-y-auto"
                    >
                        <ul className="space-y-1 text-sm font-medium text-ink">
                            {navItems.map((item) =>
                                isHome &&
                                item.id !== "blog" &&
                                item.id !== "services" ? (
                                    <li key={item.id}>
                                        <a
                                            href={`#${item.id}`}
                                            onClick={(e) => handleClick(e, item)}
                                            className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition hover:bg-ink/[0.04] hover:text-accent cursor-pointer"
                                        >
                                            <span className="font-medium">
                                                {item.label}
                                            </span>
                                            <span className="font-mono text-[10px] text-ink/40">
                                                {item.num}
                                            </span>
                                        </a>
                                    </li>
                                ) : (
                                    <li key={item.id}>
                                        <Link
                                            href={item.href}
                                            onClick={() => setOpen(false)}
                                            className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left transition hover:bg-ink/[0.04] hover:text-accent"
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
                            <li className="pt-2 border-t border-line">
                                <Link
                                    href="/contact"
                                    onClick={() => setOpen(false)}
                                    className="surface flex w-full items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-mono font-semibold text-accent"
                                >
                                    <span className="relative flex h-2 w-2">
                                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-emerald opacity-75" />
                                        <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-emerald" />
                                    </span>
                                    <span>Available for Hire</span>
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </nav>
        </motion.header>
        {/* Target for the layout's "Skip to main content" link */}
        <span id="main-content" tabIndex={-1} className="sr-only" />
        </>
    );
}
