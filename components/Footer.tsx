import Link from "next/link";

export function Footer() {
    return (
        <footer className="relative border-t border-border/60 bg-card/30 backdrop-blur-md pt-16 pb-12 font-sans text-sm">
            <div className="container-width grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
                {/* Column 1: Company Profile */}
                <div>
                    <h3 className="text-base font-bold text-foreground mb-3 font-mono tracking-wider">
                        ALGOBIZ INNOVATIONS LLP
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                        Premier custom software development, AI engineering, ERP solutions, and full stack web development company in Kerala, India. Founded by Abhijith P A.
                    </p>
                    <div className="text-xs text-muted-foreground space-y-1 font-mono">
                        <p>📍 Kozhikode · Kochi · Wayanad, Kerala</p>
                        <p>✉️ abhijithabhijith1999@gmail.com</p>
                        <p>📞 +91 9961316468</p>
                    </div>
                </div>

                {/* Column 2: Core Engineering Services */}
                <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-accent mb-4 font-bold">
                        Software Engineering Services
                    </h4>
                    <ul className="space-y-2 text-xs text-muted-foreground">
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
                                Full Stack Development
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/react-development" className="hover:text-accent transition-colors">
                                React.js Development
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/nextjs-development" className="hover:text-accent transition-colors">
                                Next.js 14 Development
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/python-development" className="hover:text-accent transition-colors">
                                Python & Data Development
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/django-development" className="hover:text-accent transition-colors">
                                Python Django Framework
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/ai-development" className="hover:text-accent transition-colors">
                                Artificial Intelligence & RAG
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/erp-development" className="hover:text-accent transition-colors">
                                Custom ERP Systems
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/crm-development" className="hover:text-accent transition-colors">
                                Custom CRM Solutions
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/saas-development" className="hover:text-accent transition-colors">
                                SaaS Product Engineering
                            </Link>
                        </li>
                        <li>
                            <Link href="/services/ecommerce-development" className="hover:text-accent transition-colors">
                                Headless E-Commerce
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 3: Kerala Regional Location Hubs */}
                <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-accent mb-4 font-bold">
                        Kerala District Hubs
                    </h4>
                    <ul className="space-y-2 text-xs text-muted-foreground">
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
                            <Link href="/locations/wayanad" className="hover:text-accent transition-colors">
                                Wayanad Web Developer
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
                                Kannur Software Company
                            </Link>
                        </li>
                        <li>
                            <Link href="/locations/thiruvananthapuram" className="hover:text-accent transition-colors">
                                Thiruvananthapuram Technopark
                            </Link>
                        </li>
                        <li>
                            <Link href="/locations/kottayam" className="hover:text-accent transition-colors">
                                Kottayam Software Developer
                            </Link>
                        </li>
                        <li>
                            <Link href="/locations/palakkad" className="hover:text-accent transition-colors">
                                Palakkad Software Engineering
                            </Link>
                        </li>
                        <li>
                            <Link href="/locations/kasaragod" className="hover:text-accent transition-colors">
                                Kasaragod Developer
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Column 4: Resources & Indexing */}
                <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-accent mb-4 font-bold">
                        Company & Resources
                    </h4>
                    <ul className="space-y-2 text-xs text-muted-foreground mb-6">
                        <li>
                            <Link href="/about" className="hover:text-accent transition-colors">
                                About Abhijith P A & Algobiz
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
                            <Link href="/contact" className="hover:text-accent transition-colors">
                                Contact & Get Project Quote
                            </Link>
                        </li>
                        <li>
                            <Link href="/feed.xml" target="_blank" className="hover:text-accent transition-colors flex items-center gap-1">
                                <span>RSS 2.0 Feed</span>
                                <svg className="w-3 h-3 text-orange-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M6.503 20.752c0 1.242-1.007 2.248-2.249 2.248-1.242 0-2.248-1.006-2.248-2.248 0-1.242 1.006-2.249 2.248-2.249 1.242 0 2.249 1.007 2.249 2.249zm6.002 2.248h-3.664c0-4.606-3.747-8.353-8.353-8.353v-3.664c6.626 0 12.017 5.391 12.017 12.017zm6.012 0h-3.661c0-7.922-6.444-14.366-14.366-14.366v-3.663c9.943 0 18.027 8.084 18.027 18.029z" />
                                </svg>
                            </Link>
                        </li>
                        <li>
                            <Link href="/sitemap.xml" target="_blank" className="hover:text-accent transition-colors">
                                XML Sitemap Index
                            </Link>
                        </li>
                    </ul>

                    <div className="pt-4 border-t border-border/40">
                        <Link
                            href="https://wa.me/919961316468?text=Hi%20Algobiz,%20I'd%20like%20to%20discuss%20a%20project"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent/10 border border-accent/30 text-accent font-mono text-xs hover:bg-accent hover:text-black transition-all"
                        >
                            <span>WhatsApp Direct (+91 9961316468)</span>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container-width border-t border-border/40 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-muted-foreground">
                <p>© {new Date().getFullYear()} Algobiz Innovations LLP · All rights reserved.</p>
                <p>Engineered with Next.js 14 · TypeScript · Tailwind · Schema.org</p>
            </div>
        </footer>
    );
}
