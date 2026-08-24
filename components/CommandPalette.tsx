"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search,
    Command,
    X,
    Home,
    User,
    CodeXml,
    FolderGit2,
    Briefcase,
    Mail,
    Send,
    FileText,
    Sparkles,
    Calculator,
    Terminal,
    ArrowRight,
    ExternalLink,
} from "lucide-react";

type ActionItem = {
    id: string;
    title: string;
    description: string;
    category: "Navigation" | "Projects" | "Interactive" | "Connect";
    icon: any;
    action: () => void;
    shortcut?: string;
};

export function CommandPalette() {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const [selectedIndex, setSelectedIndex] = useState(0);
    const router = useRouter();

    const toggleOpen = useCallback(() => {
        setOpen((prev) => !prev);
        setQuery("");
        setSelectedIndex(0);
    }, []);

    // Listen for ⌘K or Ctrl+K
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                toggleOpen();
            }
            if (e.key === "Escape" && open) {
                setOpen(false);
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [open, toggleOpen]);

    const actions: ActionItem[] = [
        {
            id: "nav-home",
            title: "Home",
            description: "Return to the main overview",
            category: "Navigation",
            icon: Home,
            action: () => {
                router.push("/");
                setOpen(false);
            },
            shortcut: "H",
        },
        {
            id: "nav-profile",
            title: "Executive Profile (Abhijith P A)",
            description: "View verified career, media gallery & milestones",
            category: "Navigation",
            icon: User,
            action: () => {
                router.push("/abhijith-pa");
                setOpen(false);
            },
            shortcut: "P",
        },
        {
            id: "nav-about",
            title: "About & Engineering Path",
            description: "Learn about technical philosophies & experience",
            category: "Navigation",
            icon: Briefcase,
            action: () => {
                router.push("/about");
                setOpen(false);
            },
        },
        {
            id: "nav-services",
            title: "Services & Capabilities (Abi Solutions)",
            description: "Enterprise software, AI automation & cloud builds",
            category: "Navigation",
            icon: CodeXml,
            action: () => {
                router.push("/services");
                setOpen(false);
            },
            shortcut: "S",
        },
        {
            id: "nav-projects",
            title: "Projects & Case Studies",
            description: "Start Visa, House of Vaz, Yuva Paripalan & Palana Neuro Sync",
            category: "Navigation",
            icon: FolderGit2,
            action: () => {
                router.push("/projects");
                setOpen(false);
            },
            shortcut: "W",
        },
        {
            id: "nav-estimator",
            title: "Project Scope & Cost Estimator",
            description: "Calculate custom software delivery time & quote",
            category: "Interactive",
            icon: Calculator,
            action: () => {
                router.push("/#estimator");
                setOpen(false);
            },
            shortcut: "E",
        },
        {
            id: "nav-terminal",
            title: "Live Cloud & AI Terminal Simulator",
            description: "Simulate architecture deployments & logs",
            category: "Interactive",
            icon: Terminal,
            action: () => {
                router.push("/#terminal");
                setOpen(false);
            },
            shortcut: "T",
        },
        {
            id: "nav-resume",
            title: "View / Download Resume",
            description: "Executive technical CV with verified stack",
            category: "Navigation",
            icon: FileText,
            action: () => {
                router.push("/resume");
                setOpen(false);
            },
            shortcut: "R",
        },
        {
            id: "nav-contact",
            title: "Contact & Inquiries",
            description: "Send a direct message or proposal request",
            category: "Connect",
            icon: Mail,
            action: () => {
                router.push("/contact");
                setOpen(false);
            },
            shortcut: "C",
        },
        {
            id: "action-whatsapp",
            title: "Instant WhatsApp Chat",
            description: "Chat with Abhijith P A directly on WhatsApp (+91 99613 16468)",
            category: "Connect",
            icon: Send,
            action: () => {
                window.open("https://wa.me/919961316468?text=Hi%20Abhijith,%20I'd%20like%20to%20discuss%20a%20project", "_blank");
                setOpen(false);
            },
        },
    ];

    const filtered = actions.filter(
        (a) =>
            a.title.toLowerCase().includes(query.toLowerCase()) ||
            a.description.toLowerCase().includes(query.toLowerCase()) ||
            a.category.toLowerCase().includes(query.toLowerCase())
    );

    const handleSelect = (idx: number) => {
        if (filtered[idx]) {
            filtered[idx].action();
        }
    };

    // Keyboard navigation within modal
    useEffect(() => {
        const handleNav = (e: KeyboardEvent) => {
            if (!open) return;
            if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
            } else if (e.key === "Enter" && filtered.length > 0) {
                e.preventDefault();
                handleSelect(selectedIndex);
            }
        };

        window.addEventListener("keydown", handleNav);
        return () => window.removeEventListener("keydown", handleNav);
    }, [open, selectedIndex, filtered]);

    return (
        <>
            {/* Global Floating Trigger Button (Bottom Right) */}
            <div className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40">
                <button
                    type="button"
                    onClick={toggleOpen}
                    className="group flex items-center gap-2 sm:gap-2.5 rounded-full border border-white/15 bg-[#0e121d]/90 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-mono text-ink shadow-glow backdrop-blur-2xl transition-all duration-300 hover:border-accent hover:bg-accent/15 hover:shadow-glow-blue hover:scale-105"
                    aria-label="Open Command Menu (⌘K)"
                >
                    <span className="flex h-5 w-5 items-center justify-center rounded-lg bg-accent/25 text-accent font-bold text-[11px] shadow-sm">
                        ⌘
                    </span>
                    <span className="hidden sm:inline text-ink/80 group-hover:text-white font-medium">Command Menu</span>
                    <span className="rounded-md border border-white/10 bg-white/10 px-1.5 py-0.5 text-[10px] text-ink/70 font-mono">K</span>
                </button>
            </div>

            {/* Ultra-Minimal Frosted Glass Modal & Command Palette */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 z-[200] flex items-start justify-center bg-black/70 p-3 sm:p-6 pt-[6vh] sm:pt-[12vh] backdrop-blur-2xl"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: -16 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: -16 }}
                            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-2xl overflow-hidden rounded-[1.8rem] sm:rounded-[2rem] border border-white/15 bg-[#0a0d16]/90 shadow-[0_24px_80px_-12px_rgba(0,0,0,0.9),0_0_0_1px_rgba(47,107,255,0.2)] backdrop-blur-3xl"
                        >
                            {/* Ambient Top Glow */}
                            <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-40 w-80 rounded-full bg-accent/20 blur-[60px]" />

                            {/* Search Header */}
                            <div className="relative flex items-center border-b border-white/[0.08] px-4 sm:px-5 py-3 sm:py-4 bg-white/[0.02]">
                                <Search className="h-4 w-4 sm:h-5 sm:w-5 text-accent shrink-0" />
                                <input
                                    type="text"
                                    value={query}
                                    onChange={(e) => {
                                        setQuery(e.target.value);
                                        setSelectedIndex(0);
                                    }}
                                    placeholder="Type a command or search..."
                                    className="w-full bg-transparent px-3 py-1 font-mono text-xs sm:text-sm text-white placeholder-ink/40 outline-none"
                                    autoFocus
                                />
                                {query && (
                                    <button
                                        type="button"
                                        onClick={() => setQuery("")}
                                        className="text-xs font-mono text-ink/40 hover:text-ink mr-2"
                                    >
                                        Clear
                                    </button>
                                )}
                                <button
                                    type="button"
                                    onClick={() => setOpen(false)}
                                    className="rounded-xl border border-white/10 bg-white/5 p-1.5 text-ink/60 transition hover:bg-white/15 hover:text-white"
                                    aria-label="Close command palette"
                                >
                                    <X className="h-4 w-4" />
                                </button>
                            </div>

                            {/* Command Results List */}
                            <div className="max-h-[55vh] sm:max-h-[58vh] overflow-y-auto p-2 sm:p-3 space-y-1">
                                {filtered.length === 0 ? (
                                    <div className="py-12 text-center">
                                        <p className="font-mono text-xs text-ink/50">
                                            No matching commands for "{query}"
                                        </p>
                                    </div>
                                ) : (
                                    filtered.map((item, idx) => {
                                        const Icon = item.icon;
                                        const isSelected = selectedIndex === idx;
                                        return (
                                            <button
                                                key={item.id}
                                                type="button"
                                                onClick={() => handleSelect(idx)}
                                                onMouseEnter={() => setSelectedIndex(idx)}
                                                className={`group flex w-full items-center justify-between rounded-xl sm:rounded-2xl px-3 sm:px-4 py-2.5 sm:py-3 text-left transition-all duration-200 cursor-pointer ${
                                                    isSelected
                                                        ? "bg-accent/20 border border-accent/40 shadow-glow-sm"
                                                        : "border border-transparent hover:bg-white/[0.04]"
                                                }`}
                                            >
                                                <div className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 pr-2">
                                                    <div
                                                        className={`flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-200 ${
                                                            isSelected
                                                                ? "bg-accent text-white shadow-glow-sm"
                                                                : "border border-white/10 bg-white/5 text-ink/70 group-hover:text-accent group-hover:border-accent/30"
                                                        }`}
                                                    >
                                                        <Icon className="h-4 w-4" />
                                                    </div>
                                                    <div className="min-w-0">
                                                        <p
                                                            className={`font-display text-xs sm:text-sm font-bold truncate ${
                                                                isSelected ? "text-white" : "text-ink"
                                                            }`}
                                                        >
                                                            {item.title}
                                                        </p>
                                                        <p className="font-mono text-[10px] sm:text-[11px] text-ink/50 truncate">
                                                            {item.description}
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0 ml-2">
                                                    <span className="font-mono text-[8px] sm:text-[9px] uppercase tracking-wider text-ink/50 bg-white/5 border border-white/10 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full hidden xs:inline">
                                                        {item.category}
                                                    </span>
                                                    {item.shortcut && (
                                                        <kbd className="hidden sm:inline rounded-lg border border-white/15 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-ink/70">
                                                            {item.shortcut}
                                                        </kbd>
                                                    )}
                                                    <ArrowRight
                                                        className={`h-3.5 w-3.5 sm:h-4 sm:w-4 transition-all duration-200 ${
                                                            isSelected
                                                                ? "translate-x-0.5 text-accent opacity-100"
                                                                : "opacity-0"
                                                        }`}
                                                    />
                                                </div>
                                            </button>
                                        );
                                    })
                                )}
                            </div>

                            {/* Minimal Footer Navigation Hints */}
                            <div className="flex items-center justify-between border-t border-white/[0.08] bg-black/40 px-4 sm:px-5 py-2.5 sm:py-3 font-mono text-[10px] sm:text-[11px] text-ink/50">
                                <div className="flex items-center gap-2 sm:gap-3.5">
                                    <span><kbd className="rounded border border-white/10 bg-white/5 px-1 py-0.5 text-[9px] sm:text-[10px]">↑↓</kbd> Nav</span>
                                    <span><kbd className="rounded border border-white/10 bg-white/5 px-1 py-0.5 text-[9px] sm:text-[10px]">↵</kbd> Select</span>
                                    <span><kbd className="rounded border border-white/10 bg-white/5 px-1 py-0.5 text-[9px] sm:text-[10px]">esc</kbd> Close</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="h-1.5 w-1.5 sm:h-2 sm:w-2 rounded-full bg-accent-emerald shadow-[0_0_6px_#10b981]" />
                                    <span className="text-accent font-semibold">Abi OS</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
