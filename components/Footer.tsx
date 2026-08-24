import Link from "next/link";
import Image from "next/image";
import { MessageSquare, ArrowUpRight, Rss, MapPin, Mail, Phone } from "lucide-react";

export function Footer() {
    return (
        <footer className="relative border-t border-white/[0.08] bg-surface/80 backdrop-blur-2xl pt-12 sm:pt-16 pb-10 sm:pb-12 font-sans text-sm">
            <div className="container-width grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">
                {/* Column 1: Company Profile */}
                <div>
                    <div className="flex items-center gap-2.5 mb-3.5 sm:mb-4">
                        <span className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full border border-accent/50 bg-surface2 shadow-glow-sm">
                            <Image
                                src="/avatar.jpg"
                                alt="Abi Solutions Logo"
                                width={32}
                                height={32}
                                className="h-full w-full object-cover object-center"
                            />
                        </span>
                        <h3 className="text-sm sm:text-base font-bold text-ink font-mono tracking-wider">
                            ABI SOLUTIONS
                        </h3>
                    </div>
                    <p className="text-xs text-ink-muted leading-relaxed mb-4">
                        Premier custom software development, AI engineering, ERP solutions, and full stack web engineering agency based in Kerala, India. Founded by Abhijith P A.
                    </p>
                    <div className="text-xs text-ink-muted space-y-2 font-mono">
                        <p className="flex items-center gap-2">
                            <MapPin className="h-3.5 w-3.5 text-accent shrink-0" />
                            <span>Wayanad · Kozhikode · Kochi, Kerala</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <Mail className="h-3.5 w-3.5 text-accent shrink-0" />
                            <span className="truncate">abhijithabhijith1999@gmail.com</span>
                        </p>
                        <p className="flex items-center gap-2">
                            <Phone className="h-3.5 w-3.5 text-accent shrink-0" />
                            <span>+91 99613 16468</span>
                        </p>
                    </div>
                </div>

                {/* Column 2: Core Engineering Services */}
                <div>
                    <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3.5 sm:mb-4 font-bold">
                        Engineering Services
                    </h4>
                    <ul className="space-y-2 text-xs text-ink-muted">
                        <li>
                            <Link href="/services/web-development" className="hover:text-accent transition-colors">
                                Custom Web Development
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/software-development" className="hover:text-accent transition-colors">
                                Enterprise Software Engineering
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/full-stack-development" className="hover:text-accent transition-colors">
                                Full Stack React & Django
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/nextjs-development" className="hover:text-accent transition-colors">
                                Next.js 14 Development
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/ai-development" className="hover:text-accent transition-colors">
                                Artificial Intelligence & LLM RAG
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/erp-development" className="hover:text-accent transition-colors">
                                Custom ERP Systems
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/saas-development" className="hover:text-accent transition-colors">
                                SaaS Product Architecture
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Regional Hubs */}
                <div>
                    <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3.5 sm:mb-4 font-bold">
                        Kerala Regional Hubs
                    </h4>
                    <ul className="space-y-2 text-xs text-ink-muted">
                        <li>
                            <Link href="/locations/wayanad" className="hover:text-accent transition-colors">
                                Wayanad Web Developer
                            </Link>
                        </li>
                        <li>
                            <Link href="/locations/kozhikode" className="hover:text-accent transition-colors">
                                Kozhikode (Calicut) Developer
                            </Link>
                        </li>
                        <li>
                            <Link href="/locations/kochi" className="hover:text-accent transition-colors">
                                Ernakulam / Kochi Developer
                            </Link>
                        </li>
                        <li>
                            <Link href="/locations/thrissur" className="hover:text-accent transition-colors">
                                Thrissur Software Developer
                            </Link>
                        </li>
                        <li>
                            <Link href="/locations/malappuram" className="hover:text-accent transition-colors">
                                Malappuram Web Developer
                            </Link>
                        </li>
                        <li>
                            <Link href="/locations/kannur" className="hover:text-accent transition-colors">
                                Kannur Software Agency
                            </Link>
                        </li>
                        <li>
                            <Link href="/locations/thiruvananthapuram" className="hover:text-accent transition-colors">
                                Thiruvananthapuram Technopark
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Quick Connect & Resources */}
                <div>
                    <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-accent mb-3.5 sm:mb-4 font-bold">
                        Resources & Connect
                    </h4>
                    <ul className="space-y-2 text-xs text-ink-muted mb-5 sm:mb-6">
                        <li>
                            <Link href="/about" className="hover:text-accent transition-colors">
                                About Abhijith & Abi Solutions
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects" className="hover:text-accent transition-colors">
                                Client Case Studies & Work
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" className="hover:text-accent transition-colors">
                                Technical Engineering Blog
                            </Link>
                        </li>
                        <li>
                            <Link href="/feed.xml" target="_blank" className="hover:text-accent transition-colors inline-flex items-center gap-1.5">
                                <Rss className="h-3 w-3 text-orange-400" />
                                <span>RSS 2.0 Feed</span>
                            </Link>
                        </li>
                    </ul>

                    <div className="pt-3 border-t border-white/[0.08]">
                        <a
                            href="https://wa.me/919961316468?text=Hi%20Abhijith,%20I'd%20like%20to%20discuss%20a%20project"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-4 py-2.5 rounded-xl bg-accent/10 border border-accent/30 text-accent font-mono text-xs hover:bg-accent hover:text-white transition-all duration-200"
                        >
                            <MessageSquare className="h-3.5 w-3.5" />
                            <span>WhatsApp (+91 99613 16468)</span>
                        </a>
                    </div>
                </div>
            </div>

            <div className="container-width border-t border-white/[0.08] pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 font-mono text-[10.5px] sm:text-[11px] text-ink-muted text-center sm:text-left">
                <p>© {new Date().getFullYear()} Abi Solutions · All rights reserved.</p>
                <p className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent-emerald" />
                    <span>Engineered with Next.js 14 · TypeScript · Tailwind CSS</span>
                </p>
            </div>
        </footer>
    );
}
