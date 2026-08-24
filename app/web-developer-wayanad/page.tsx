import type { Metadata } from "next";
import { Navbar } from "../../components/Navbar";
import { SectionWrapper } from "../../components/SectionWrapper";
import { Footer } from "../../components/Footer";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Best Web Developer in Wayanad | Abhijith P A — AlgoBiz",
    description:
        "Abhijith P A is the best web developer in Wayanad, Kerala. Full Stack Developer, React, Next.js, Django, Python, AI. Custom websites, ERP, SaaS, ecommerce, mobile apps. Serving Kalpetta, Sulthan Bathery & Mananthavady.",
    keywords: [
        "best developer in Wayanad",
        "best software developer in Wayanad",
        "best web developer in Wayanad",
        "best full stack developer in Wayanad",
        "best React developer in Wayanad",
        "best Next.js developer in Wayanad",
        "best Django developer in Wayanad",
        "best Python developer in Wayanad",
        "best frontend developer in Wayanad",
        "best backend developer in Wayanad",
        "best coder in Wayanad",
        "top developer in Wayanad",
        "top software developer in Wayanad",
        "professional web developer Wayanad",
        "freelance developer in Wayanad",
        "web developer Wayanad",
        "software company Wayanad",
        "website development Wayanad",
        "app developer Wayanad",
        "mobile app developer Wayanad",
        "custom software development Wayanad",
        "website designer Wayanad",
        "web design company Wayanad",
        "ecommerce website developer Wayanad",
        "ERP developer Wayanad",
        "React developer Wayanad",
        "Next.js developer Wayanad",
        "Node.js developer Wayanad",
        "Django developer Wayanad",
        "Python developer Wayanad",
        "MERN stack developer Wayanad",
        "hire web developer Wayanad",
        "hire software developer Wayanad",
        "website development company Wayanad",
        "affordable web developer Wayanad",
        "CRM development Wayanad",
        "ERP software developer Wayanad",
        "AI software developer Wayanad",
        "SaaS development Wayanad",
        "startup software developer Wayanad",
        "best web developer in Wayanad Kerala",
        "hire React developer in Wayanad",
        "affordable website developer in Wayanad",
        "custom software developer in Wayanad",
        "ecommerce website developer in Wayanad",
        "full stack web developer in Wayanad",
        "AI application developer in Wayanad",
        "business website developer in Wayanad",
        "website developer near Kalpetta",
        "website developer near Sulthan Bathery",
        "website developer near Mananthavady",
        "best website developer in Kalpetta",
        "software developer in Sulthan Bathery",
        "software developer in Mananthavady",
        "website redesign Wayanad",
        "SEO friendly website Wayanad",
        "responsive website developer Wayanad",
        "landing page developer Wayanad",
        "portfolio website developer Wayanad",
        "corporate website developer Wayanad",
        "travel website developer Wayanad",
        "hospital website developer Wayanad",
        "school website developer Wayanad",
        "ecommerce store development Wayanad",
        "hire best developer in Wayanad",
        "trusted web developer Wayanad",
        "experienced software developer Wayanad",
        "top rated web developer Wayanad",
        "website development services Wayanad",
        "custom software solutions Wayanad",
        "web application development Wayanad",
        "digital transformation Wayanad",
        "AI automation developer Wayanad",
        "cloud application developer Wayanad",
    ],
    alternates: { canonical: "https://abisolutions.online/web-developer-wayanad" },
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://abisolutions.online/web-developer-wayanad",
        siteName: "AlgoBiz — Wayanad",
        title: "Best Web Developer in Wayanad | Full Stack, React, Django, AI | AlgoBiz",
        description:
            "Top rated web developer in Wayanad. Custom websites, ERP, SaaS, AI automation, ecommerce. Serving Kalpetta, Sulthan Bathery & Mananthavady. Hire Abhijith P A.",
        images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Best Web Developer in Wayanad | Abhijith P A — AlgoBiz",
        description:
            "Top web developer in Wayanad. React, Django, AI. Custom websites & apps. Kalpetta, Sulthan Bathery, Mananthavady.",
        images: ["/og-image.jpg"],
    },
};

const jsonLd = [
    {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "AlgoBiz — Best Web Developer in Wayanad",
        alternateName: [
            "Best Developer in Wayanad",
            "Best Software Developer Wayanad",
            "Web Developer Wayanad",
            "AlgoBiz Wayanad",
            "Abhijith P A Developer",
        ],
        description:
            "AlgoBiz is the top web development and software company in Wayanad, Kerala. Founded by Abhijith P A, we provide custom website development, ERP systems, SaaS platforms, AI automation, mobile apps, ecommerce solutions, and digital transformation services to businesses in Kalpetta, Sulthan Bathery, Mananthavady, and across Wayanad district.",
        url: "https://abisolutions.online/web-developer-wayanad",
        image: "https://abisolutions.online/og-image.jpg",
        telephone: "+919961316468",
        email: "abhijithabhijith1999@gmail.com",
        address: {
            "@type": "PostalAddress",
            addressLocality: "Wayanad",
            addressRegion: "Kerala",
            postalCode: "673121",
            addressCountry: "IN",
        },
        geo: {
            "@type": "GeoCoordinates",
            latitude: "11.6854",
            longitude: "76.1320",
        },
        areaServed: [
            { "@type": "City", name: "Kalpetta" },
            { "@type": "City", name: "Sulthan Bathery" },
            { "@type": "City", name: "Mananthavady" },
            { "@type": "AdministrativeArea", name: "Wayanad" },
            { "@type": "State", name: "Kerala" },
        ],
        serviceType: [
            "Website Development",
            "Web Application Development",
            "Custom Software Development",
            "React Development",
            "Next.js Development",
            "Django Development",
            "Python Development",
            "ERP Development",
            "SaaS Development",
            "Ecommerce Development",
            "Mobile App Development",
            "AI Automation",
            "CRM Development",
            "SEO Friendly Website Development",
            "Cloud Application Development",
            "Digital Transformation",
        ],
        priceRange: "$$",
        openingHours: "Mo-Sa 09:00-18:00",
        founder: {
            "@type": "Person",
            "@id": "https://abisolutions.online/#person",
            name: "Abhijith P A",
            jobTitle: "Full Stack Developer & AI Engineer",
        },
        sameAs: [
            "https://abisolutions.online",
            "https://github.com/Abhijith-Abi",
            "https://www.linkedin.com/in/abhijith-pa/",
        ],
        hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Web Development Services in Wayanad",
            itemListElement: [
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Custom Website Development",
                        description: "Professional, responsive, SEO-friendly websites for businesses in Wayanad",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "ERP & Business Software",
                        description: "Custom ERP systems, CRM, HRMS, and payroll management for Wayanad businesses",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Ecommerce Store Development",
                        description: "Online stores with payment integration for shops and businesses in Wayanad",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "AI Automation & Chatbots",
                        description: "WhatsApp bots, Telegram bots, and AI automation for Wayanad businesses",
                    },
                },
                {
                    "@type": "Offer",
                    itemOffered: {
                        "@type": "Service",
                        name: "Mobile App Development",
                        description: "Cross-platform mobile applications for businesses in Wayanad",
                    },
                },
            ],
        },
    },
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://abisolutions.online" },
            { "@type": "ListItem", position: 2, name: "Web Developer Wayanad", item: "https://abisolutions.online/web-developer-wayanad" },
        ],
    },
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Who is the best web developer in Wayanad?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Abhijith P A (AlgoBiz) is one of the top-rated web developers in Wayanad, Kerala. With 4+ years of experience building production web applications using React, Next.js, Django, and AI technologies, he has delivered ERP systems, SaaS platforms, ecommerce stores, and custom websites for businesses across Kalpetta, Sulthan Bathery, and Mananthavady.",
                },
            },
            {
                "@type": "Question",
                name: "How much does website development cost in Wayanad?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Website development costs in Wayanad vary based on complexity. A basic business website starts from INR 15,000-30,000. Custom web applications and ecommerce stores range from INR 50,000-2,00,000+. ERP systems and SaaS platforms are priced based on requirements. Contact AlgoBiz for a free consultation and quote.",
                },
            },
            {
                "@type": "Question",
                name: "What services does AlgoBiz offer in Wayanad?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "AlgoBiz offers custom website development, web application development, ERP systems, SaaS platforms, ecommerce stores, mobile app development, AI automation (WhatsApp & Telegram bots), CRM development, SEO services, and digital transformation solutions for businesses in Wayanad, including Kalpetta, Sulthan Bathery, and Mananthavady.",
                },
            },
            {
                "@type": "Question",
                name: "Can I hire a freelance developer in Wayanad?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Yes, Abhijith P A is available as a freelance developer in Wayanad for web development, app development, and AI automation projects. He works with React, Next.js, Django, Python, and AWS. Contact via phone (+91 9961316468) or email (abhijithabhijith1999@gmail.com) for project discussions.",
                },
            },
            {
                "@type": "Question",
                name: "Which technologies does the best developer in Wayanad use?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Abhijith P A uses modern technologies including React.js, Next.js, TypeScript, Django, Python, PostgreSQL, AWS, Node.js, Tailwind CSS, and AI/ML tools. He builds everything from simple business websites to complex ERP systems and AI-powered automation for businesses in Wayanad.",
                },
            },
        ],
    },
];

export default function WebDeveloperWayanadPage() {
    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <div className="pt-24">
                <SectionWrapper id="web-developer-wayanad">
                    <article className="mx-auto max-w-3xl">
                        <h1 className="font-display text-[clamp(1.8rem,5vw,3.5rem)] font-extrabold leading-[0.95] tracking-tight text-ink">
                            Best Web Developer in Wayanad
                        </h1>
                        <p className="mt-3 font-mono text-sm uppercase tracking-wide text-accent">
                            Custom Websites, ERP, SaaS, AI & Ecommerce — Kalpetta, Sulthan Bathery, Mananthavady
                        </p>

                        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/80 lg:text-lg">
                            <p>
                                Looking for the <strong>best web developer in Wayanad</strong>?{" "}
                                <Link href="/abhijith-pa" className="text-accent hover:underline">
                                    Abhijith P A
                                </Link>{" "}
                                is a Full Stack Developer and AI Engineer based in Wayanad, Kerala
                                with 4+ years of experience building production-grade websites and
                                software for businesses across <strong>Kalpetta</strong>,{" "}
                                <strong>Sulthan Bathery</strong>, and <strong>Mananthavady</strong>.
                            </p>
                            <p>
                                As the lead developer at{" "}
                                <Link href="/algobiz" className="text-accent hover:underline">
                                    AlgoBiz
                                </Link>
                                , he delivers custom website development, web applications,
                                ERP systems, SaaS platforms, ecommerce stores, mobile apps, and
                                AI automation solutions to businesses in Wayanad and across Kerala.
                            </p>
                            <p>
                                Whether you need a simple business website, a complex enterprise
                                application, or an AI-powered chatbot for WhatsApp — you get a{" "}
                                <strong>top-rated software developer in Wayanad</strong> who
                                understands modern technologies and delivers production-ready solutions.
                            </p>
                        </div>

                        <h2 className="mt-12 font-display text-2xl font-bold text-ink">
                            Services Available in Wayanad
                        </h2>
                        <ul className="mt-5 space-y-3 text-base text-ink/80">
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                <span>
                                    <strong>Custom Website Development</strong> — Business websites,
                                    portfolios, corporate sites, landing pages
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                <span>
                                    <strong>Ecommerce Development</strong> — Online stores with
                                    payment gateway, inventory management, and order tracking
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                <span>
                                    <strong>ERP & Business Software</strong> — Inventory, finance, HR,
                                    CRM, and payroll management systems
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                <span>
                                    <strong>Web Applications</strong> — Custom dashboards, booking
                                    systems, management platforms, SaaS products
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                <span>
                                    <strong>AI Automation</strong> — WhatsApp bots, Telegram bots,
                                    chatbots, workflow automation for local businesses
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                <span>
                                    <strong>Mobile App Development</strong> — Cross-platform apps for
                                    Android and iOS
                                </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent" />
                                <span>
                                    <strong>SEO & Digital Marketing</strong> — Search engine
                                    optimization, Google ranking, and online presence
                                </span>
                            </li>
                        </ul>

                        <h2 className="mt-12 font-display text-2xl font-bold text-ink">
                            Technology Stack
                        </h2>
                        <div className="mt-5 flex flex-wrap gap-2">
                            {[
                                "React.js",
                                "Next.js",
                                "TypeScript",
                                "Django",
                                "Python",
                                "Node.js",
                                "PostgreSQL",
                                "AWS",
                                "Tailwind CSS",
                                "Firebase",
                                "Docker",
                                "AI / LLM",
                                "WordPress",
                                "Shopify",
                            ].map((tech) => (
                                <span
                                    key={tech}
                                    className="rounded-md border border-line bg-surface px-3 py-1 font-mono text-xs text-ink/80"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <h2 className="mt-12 font-display text-2xl font-bold text-ink">
                            Areas Served in Wayanad
                        </h2>
                        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {[
                                "Kalpetta",
                                "Sulthan Bathery",
                                "Mananthavady",
                                "Meenangadi",
                                "Pulpally",
                                "Ambalavayal",
                                "Vythiri",
                                "Panamaram",
                                "Thirunelly",
                            ].map((area) => (
                                <div
                                    key={area}
                                    className="rounded-lg border border-line bg-surface/50 px-3 py-2 text-center text-sm text-ink/80"
                                >
                                    {area}
                                </div>
                            ))}
                        </div>

                        <h2 className="mt-12 font-display text-2xl font-bold text-ink">
                            Why Choose AlgoBiz for Web Development in Wayanad?
                        </h2>
                        <div className="mt-5 space-y-4 text-base text-ink/80">
                            <p>
                                <strong>4+ years of professional experience</strong> — Not a
                                beginner. Worked at Talrop, Steyp, Tegain, Ribos, and multiple
                                companies building real production software.
                            </p>
                            <p>
                                <strong>Modern technology stack</strong> — React, Next.js, Django,
                                Python, AWS. Your website will be fast, secure, and scalable.
                            </p>
                            <p>
                                <strong>Local presence in Wayanad</strong> — Based right here in
                                Wayanad. Face-to-face meetings, quick communication, and
                                understanding of local business needs.
                            </p>
                            <p>
                                <strong>End-to-end delivery</strong> — From design to development to
                                deployment and maintenance. One developer handles everything.
                            </p>
                            <p>
                                <strong>Affordable pricing</strong> — Competitive rates for Wayanad
                                businesses. Quality development without Bangalore/Kochi pricing.
                            </p>
                        </div>

                        <h2 className="mt-12 font-display text-2xl font-bold text-ink">
                            Projects Delivered
                        </h2>
                        <div className="mt-5 space-y-3 text-base text-ink/80">
                            <p><strong>Talrop ERP</strong> — Enterprise resource planning with inventory, finance & HR</p>
                            <p><strong>HOSFACE</strong> — Healthcare platform connecting doctors and investors</p>
                            <p><strong>Finwage</strong> — Payroll & HRMS with attendance management</p>
                            <p><strong>STEYP</strong> — Coding education platform with 10,000+ users</p>
                            <p><strong>Somans Travels</strong> — Travel booking and operations management</p>
                            <p><strong>Tegain</strong> — Community platform with recruitment features</p>
                        </div>

                        <div className="mt-12 rounded-2xl border border-accent/20 bg-accent/5 p-6 sm:p-8">
                            <h3 className="font-display text-xl font-bold text-ink">
                                Ready to build your website?
                            </h3>
                            <p className="mt-2 text-sm text-ink/70">
                                Get a free consultation for your web development project in Wayanad.
                                Call or WhatsApp for immediate response.
                            </p>
                            <div className="mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
                                <a
                                    href="tel:+919961316468"
                                    className="btn-primary rounded-xl px-5 py-2.5 text-sm font-semibold text-center"
                                >
                                    Call: +91 99613 16468
                                </a>
                                <Link
                                    href="/contact"
                                    className="btn-ghost rounded-xl px-5 py-2.5 text-sm font-medium text-center"
                                >
                                    Send a Message
                                </Link>
                            </div>
                        </div>
                    </article>
                </SectionWrapper>
                <Footer />
            </div>
        </main>
    );
}
