import Link from "next/link";
import Image from "next/image";
import {
    ArrowUpRight,
    Rss,
    MapPin,
    Mail,
    Phone,
    MessageSquare,
} from "lucide-react";

export function Footer() {
    return (
        <footer className="relative border-t border-line bg-background/60 font-sans text-sm">
            {/* Big CTA band */}
            <div className="container-width flex flex-col gap-6 border-b border-line py-16 sm:py-20 lg:flex-row lg:items-end lg:justify-between lg:py-24">
                <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.32em] text-accent sm:text-[11px]">
                        Have an idea on your mind?
                    </p>
                    <h2 className="display-hero mt-4 !text-[clamp(2.25rem,6vw,4.75rem)]">
                        Let&rsquo;s build it{" "}
                        <span className="display-serif-italic">together</span>
                    </h2>
                </div>
                <Link
                    href="/contact"
                    className="btn-primary group inline-flex shrink-0 items-center gap-3 px-8 py-4 text-sm font-semibold"
                >
                    <span>Start a conversation</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
            </div>

            <div className="container-width grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-4">
                {/* Column 1: Company Profile */}
                <div>
                    <div className="mb-4 flex items-center gap-2.5">
                        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-line bg-surface2">
                            <Image
                                src="/avatar.jpg"
                                alt="Abi Solutions Logo"
                                width={32}
                                height={32}
                                className="h-full w-full object-cover object-center"
                            />
                        </span>
                        <h3 className="font-mono text-sm font-bold tracking-wider text-ink">
                            ABI SOLUTIONS
                        </h3>
                    </div>
                    <p className="mb-4 text-xs leading-relaxed text-ink-muted">
                        Custom software development, AI engineering, ERP
                        solutions and full stack web engineering from Wayanad,
                        Kerala — serving Kalpetta, Sulthan Bathery,
                        Mananthavady, Kozhikode, Kochi and remote clients
                        worldwide. Founded by Abhijith P A.
                    </p>
                    <div className="space-y-2 font-mono text-xs text-ink-muted">
                        <p className="flex items-center gap-2">
                            <MapPin className="h-3.5 w-3.5 shrink-0 text-accent" />
                            <span>Wayanad · Kozhikode · Kochi, Kerala</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <Mail className="h-3.5 w-3.5 shrink-0 text-accent" />
                            <span className="truncate">
                                abhijithabhijith1999@gmail.com
                            </span>
                        </p>
                        <p className="flex items-center gap-2">
                            <Phone className="h-3.5 w-3.5 shrink-0 text-accent" />
                            <span>+91 99613 16468</span>
                        </p>
                    </div>
                </div>

                {/* Column 2: Core Engineering Services */}
                <div>
                    <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
                        Engineering Services
                    </h4>
                    <ul className="space-y-2 text-xs text-ink-muted">
                        <li>
                            <Link
                                href="/services/web-development"
                                className="link-underline hover:text-ink"
                            >
                                Custom Web Development
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services/software-development"
                                className="link-underline hover:text-ink"
                            >
                                Enterprise Software Engineering
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services/full-stack-development"
                                className="link-underline hover:text-ink"
                            >
                                Full Stack React &amp; Django
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services/nextjs-development"
                                className="link-underline hover:text-ink"
                            >
                                Next.js 14 Development
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services/ai-development"
                                className="link-underline hover:text-ink"
                            >
                                AI &amp; LLM Integration
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services/erp-development"
                                className="link-underline hover:text-ink"
                            >
                                Custom ERP Systems
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/services/saas-development"
                                className="link-underline hover:text-ink"
                            >
                                SaaS Product Architecture
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Regional Hubs */}
                <div>
                    <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
                        Kerala Regional Hubs
                    </h4>
                    <ul className="space-y-2 text-xs text-ink-muted">
                        <li>
                            <Link
                                href="/web-developer-wayanad"
                                className="link-underline hover:text-ink"
                            >
                                Web Developer in Wayanad
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/locations/wayanad"
                                className="link-underline hover:text-ink"
                            >
                                Wayanad Web Developer
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/locations/kozhikode"
                                className="link-underline hover:text-ink"
                            >
                                Kozhikode (Calicut) Developer
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/locations/kochi"
                                className="link-underline hover:text-ink"
                            >
                                Ernakulam / Kochi Developer
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/locations/thrissur"
                                className="link-underline hover:text-ink"
                            >
                                Thrissur Software Developer
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/locations/malappuram"
                                className="link-underline hover:text-ink"
                            >
                                Malappuram Web Developer
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/locations/kannur"
                                className="link-underline hover:text-ink"
                            >
                                Kannur Software Agency
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/locations/thiruvananthapuram"
                                className="link-underline hover:text-ink"
                            >
                                Thiruvananthapuram Technopark
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Quick Connect & Resources */}
                <div>
                    <h4 className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.2em] text-accent">
                        Resources &amp; Connect
                    </h4>
                    <ul className="mb-6 space-y-2 text-xs text-ink-muted">
                        <li>
                            <Link
                                href="/about"
                                className="link-underline hover:text-ink"
                            >
                                About Abhijith &amp; Abi Solutions
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/projects"
                                className="link-underline hover:text-ink"
                            >
                                Client Case Studies &amp; Work
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/blog"
                                className="link-underline hover:text-ink"
                            >
                                Technical Engineering Blog
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/feed.xml"
                                target="_blank"
                                className="inline-flex items-center gap-1.5 hover:text-ink"
                            >
                                <Rss className="h-3 w-3 text-accent" />
                                <span>RSS 2.0 Feed</span>
                            </Link>
                        </li>
                    </ul>

                    <div className="border-t border-line pt-3">
                        <a
                            href="https://wa.me/919961316468?text=Hi%20Abhijith,%20I'd%20like%20to%20discuss%20a%20project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-ghost inline-flex w-full items-center justify-center gap-2 px-4 py-2.5 font-mono text-xs sm:w-auto"
                        >
                            <MessageSquare className="h-3.5 w-3.5" />
                            <span>WhatsApp (+91 99613 16468)</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-width flex flex-col items-center justify-between gap-3 border-t border-line py-6 text-center font-mono text-[10.5px] text-ink-muted sm:flex-row sm:text-left">
                <p>
                    © {new Date().getFullYear()} Abi Solutions · All rights
                    reserved.
                </p>
                <p className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald" />
                    <span>
                        Engineered with Next.js 14 · TypeScript · Tailwind CSS
                    </span>
                </p>
            </div>
        </footer>
    );
}
