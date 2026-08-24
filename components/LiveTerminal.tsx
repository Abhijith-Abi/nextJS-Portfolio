"use client";

import { useState, useEffect } from "react";
import {
    Terminal as TerminalIcon,
    Play,
    Copy,
    Check,
    RotateCcw,
    Sparkles,
    CheckCircle2,
    Activity,
    Server,
    Cpu,
} from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";
import { FadeIn } from "./motion/RevealText";

type CommandPreset = {
    id: string;
    label: string;
    command: string;
    icon: any;
    outputLines: { text: string; color?: "default" | "accent" | "emerald" | "amber" | "muted" }[];
};

const presets: CommandPreset[] = [
    {
        id: "deploy-erp",
        label: "Deploy Cloud Architecture",
        command: "abi-cli deploy --stack=start-visa --env=production --region=ap-south-1",
        icon: Server,
        outputLines: [
            { text: "[1/4] 🚀 Initializing Next.js 14 & Cloudflare Edge cluster...", color: "accent" },
            { text: "[2/4] 🗄️ Running PostgreSQL migrations & caching warmups...", color: "amber" },
            { text: "[3/4] 🛡️ Validating encryption guardrails & API route checks...", color: "default" },
            { text: "[4/4] ✨ Platform deployed to Edge with zero-downtime rollout!", color: "emerald" },
            { text: "✔  Status: 200 OK | Uptime: 99.99% | Latency: 12ms", color: "emerald" },
        ],
    },
    {
        id: "run-ai",
        label: "Launch AI Autonomous Agent",
        command: "abi-cli ai-agent --model=claude-3-5 --rag=vector-db --channels=whatsapp,telegram",
        icon: Cpu,
        outputLines: [
            { text: "[1/3] 🤖 Connecting OpenAI/Claude embeddings to Vector DB...", color: "accent" },
            { text: "[2/3] 💬 Initializing WhatsApp Business & Telegram Bot Webhooks...", color: "amber" },
            { text: "[3/3] ⚡ Agent stream online: Auto-reply latency < 350ms with context memory.", color: "emerald" },
            { text: "✔  Webhook verified: Active listeners 24/7", color: "emerald" },
        ],
    },
    {
        id: "audit-vitals",
        label: "Benchmark Core Web Vitals",
        command: "abi-cli audit --url=https://abisolutions.online --device=mobile --strict",
        icon: Activity,
        outputLines: [
            { text: "[1/3] 🔍 Running Lighthouse v11 headless performance engine...", color: "default" },
            { text: "[2/3] ⚡ Performance: 100/100 | Accessibility: 100/100 | Best Practices: 100/100 | SEO: 100/100", color: "emerald" },
            { text: "[3/3] 🎯 First Contentful Paint: 0.4s | Largest Contentful Paint: 0.7s | CLS: 0.00", color: "accent" },
            { text: "✔  Audit Passed: Maximum Grade S Performance Achieved.", color: "emerald" },
        ],
    },
];

export function LiveTerminal() {
    const [activePreset, setActivePreset] = useState<string>("deploy-erp");
    const [copied, setCopied] = useState(false);
    const [visibleLines, setVisibleLines] = useState<number>(0);

    const currentPreset = presets.find((p) => p.id === activePreset) || presets[0];

    // Simulate animated line-by-line terminal output
    useEffect(() => {
        setVisibleLines(0);
        const interval = setInterval(() => {
            setVisibleLines((prev) => {
                if (prev < currentPreset.outputLines.length) {
                    return prev + 1;
                }
                clearInterval(interval);
                return prev;
            });
        }, 300);

        return () => clearInterval(interval);
    }, [activePreset, currentPreset]);

    const handleCopy = () => {
        navigator.clipboard.writeText(currentPreset.command);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <SectionWrapper id="terminal" index="06" label="Terminal">
            {/* Header */}
            <div className="mb-12 grid items-end gap-6 sm:mb-16 md:grid-cols-[1.1fr_0.9fr]">
                <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-xs font-mono uppercase tracking-[0.2em] text-accent mb-4">
                        <TerminalIcon className="h-3 w-3" />
                        Live Architecture Simulator
                    </div>
                    <h2 className="font-display text-[clamp(2.2rem,6.5vw,4.2rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-ink">
                        <span className="block">INTERACTIVE LIVE</span>
                        <span className="block text-accent">
                            CLOUD TERMINAL.
                        </span>
                    </h2>
                </div>
                <FadeIn>
                    <p className="text-sm leading-relaxed text-ink/75 sm:text-base md:text-right lg:text-lg">
                        Test and simulate automated CI/CD deployments, AI agent workflows, and performance benchmark audits in real-time.
                    </p>
                </FadeIn>
            </div>

            {/* Terminal Main Window */}
            <div className="surface relative overflow-hidden rounded-[2.5rem] border border-white/15 bg-surface/95 shadow-glow">
                {/* Top Window Bar */}
                <div className="flex flex-wrap items-center justify-between border-b border-white/10 bg-background/80 px-4 py-3 sm:px-6">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1.5">
                            <span className="h-3 w-3 rounded-full bg-red-500/80" />
                            <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                            <span className="h-3 w-3 rounded-full bg-green-500/80" />
                        </div>
                        <span className="ml-3 font-mono text-xs text-ink/60 hidden sm:inline">
                            abi-solutions-cloud — zsh — 80x24
                        </span>
                    </div>

                    {/* Preset Tabs */}
                    <div className="flex flex-wrap gap-1">
                        {presets.map((p) => {
                            const isSelected = activePreset === p.id;
                            const Icon = p.icon;
                            return (
                                <button
                                    key={p.id}
                                    type="button"
                                    onClick={() => setActivePreset(p.id)}
                                    className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 font-mono text-xs transition-all cursor-pointer ${
                                        isSelected
                                            ? "bg-accent text-white font-bold shadow-glow-sm"
                                            : "text-ink/60 hover:text-ink hover:bg-white/5"
                                    }`}
                                >
                                    <Icon className="h-3.5 w-3.5" />
                                    <span>{p.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Terminal Screen Body */}
                <div className="p-6 sm:p-8 font-mono text-xs sm:text-sm bg-background/90 min-h-[280px]">
                    {/* Command Prompt Line */}
                    <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4 mb-4">
                        <div className="flex items-center gap-2 min-w-0">
                            <span className="text-accent font-bold">$</span>
                            <span className="text-ink font-semibold truncate">{currentPreset.command}</span>
                        </div>
                        <button
                            type="button"
                            onClick={handleCopy}
                            className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 font-mono text-[11px] text-ink/80 hover:border-accent hover:text-accent transition-colors shrink-0"
                            aria-label="Copy Command"
                        >
                            {copied ? (
                                <>
                                    <Check className="h-3.5 w-3.5 text-accent-emerald" />
                                    <span>Copied!</span>
                                </>
                            ) : (
                                <>
                                    <Copy className="h-3.5 w-3.5" />
                                    <span>Copy</span>
                                </>
                            )}
                        </button>
                    </div>

                    {/* Output Lines with stream effect */}
                    <div className="space-y-2.5">
                        {currentPreset.outputLines.slice(0, visibleLines).map((line, i) => {
                            let colorClass = "text-ink/80";
                            if (line.color === "accent") colorClass = "text-accent font-semibold";
                            if (line.color === "emerald") colorClass = "text-accent-emerald font-semibold";
                            if (line.color === "amber") colorClass = "text-accent2 font-semibold";
                            if (line.color === "muted") colorClass = "text-ink/40";

                            return (
                                <div key={i} className={`leading-relaxed ${colorClass}`}>
                                    {line.text}
                                </div>
                            );
                        })}

                        {/* Blinking Cursor */}
                        {visibleLines === currentPreset.outputLines.length && (
                            <div className="flex items-center gap-2 pt-2 text-accent">
                                <span>✔ Ready for next task</span>
                                <span className="inline-block h-4 w-2 bg-accent animate-pulse" />
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom Status Ribbon */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 bg-background/60 px-6 py-3 font-mono text-[11px] text-ink/60">
                    <div className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-accent-emerald animate-ping" />
                        <span className="text-ink">Cluster Health: 100% Operational</span>
                    </div>
                    <div className="flex items-center gap-4">
                        <span>Node: ap-south-1</span>
                        <span>SSL: TLS 1.3 / Verified</span>
                    </div>
                </div>
            </div>
        </SectionWrapper>
    );
}
