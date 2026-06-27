import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ContactSection } from "../components/ContactSection";
import { WorkflowSection } from "../components/WorkflowSection";

const jsonLd = [
    // ─── Person Schema ───
    {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://abisolutions.online/#person",
        name: "Abhijith P A",
        alternateName: [
            "Abi",
            "Abhijith",
            "Abijith",
            "Abhijith PA",
            "AP Abhijith",
            "Abhijith Developer",
            "Abhijith Software Engineer",
            "Abhijith Full Stack Developer",
            "Abhijith React Developer",
            "Abhijith Next.js Developer",
            "Abhijith Django Developer",
            "Abhijith AI Developer",
            "Abhijith ERP Developer",
            "Abhijith Tegain",
            "Abhijith Kerala",
            "Abhijith Wayanad",
            "Abhijith India",
        ],
        url: "https://abisolutions.online",
        image: "https://abisolutions.online/profile.jpg",
        jobTitle: "Full Stack Developer & AI Engineer",
        description:
            "Abhijith P A is a Full Stack Developer and AI Engineer from Wayanad, Kerala, India. Founder of AlgoBiz. Specializing in React, Next.js, Django, Python, AWS, and AI-driven applications. Previously at Tegain and Ribos. Building ERP systems, SaaS platforms, HRMS, payroll management, and AI automation products.",
        email: "abhijithabhijith1999@gmail.com",
        telephone: "+919961316468",
        birthPlace: {
            "@type": "Place",
            name: "Wayanad, Kerala, India",
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: "Wayanad",
            addressRegion: "Kerala",
            addressCountry: "IN",
        },
        nationality: {
            "@type": "Country",
            name: "India",
        },
        sameAs: [
            "https://github.com/Abhijith-Abi",
            "https://www.linkedin.com/in/abhijith-pa/",
            "https://abisolutions.online",
        ],
        knowsAbout: [
            "React.js",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Django",
            "Python",
            "AWS",
            "Node.js",
            "PostgreSQL",
            "Tailwind CSS",
            "Three.js",
            "Framer Motion",
            "GSAP",
            "Firebase",
            "Docker",
            "REST APIs",
            "GraphQL",
            "AI Development",
            "Machine Learning",
            "WhatsApp Automation",
            "Telegram Automation",
            "SaaS Development",
            "ERP Development",
            "CRM Development",
            "HRMS Development",
            "Payroll Management System",
            "Attendance Management System",
            "Ecommerce Development",
        ],
        worksFor: {
            "@type": "Organization",
            "@id": "https://abisolutions.online/#organization",
            name: "AlgoBiz",
        },
        founder: {
            "@type": "Organization",
            "@id": "https://abisolutions.online/#organization",
            name: "AlgoBiz",
        },
        alumniOf: [
            {
                "@type": "Organization",
                name: "AlgoBiz",
                url: "https://algobiz.in/",
                description:
                    "Software development agency founded by Abhijith P A",
            },
            {
                "@type": "Organization",
                name: "Talrop",
                url: "https://www.talrop.com/",
                description:
                    "Technology company where Abhijith P A contributed as a Full Stack Developer",
            },
            {
                "@type": "Organization",
                name: "Tegain",
                url: "https://tegain.com",
                description:
                    "Technology company where Abhijith P A contributed as Software Engineer",
            },
            {
                "@type": "Organization",
                name: "Ribos",
                description:
                    "Software company where Abhijith P A worked on ERP and web applications",
            },
            {
                "@type": "Organization",
                name: "Steyp",
                url: "https://steyp.com",
                description:
                    "Coding education platform where Abhijith P A began his career",
            },
        ],
        hasOccupation: [
            {
                "@type": "Occupation",
                name: "Full Stack Developer",
                occupationalCategory: "15-1252.00",
                skills: "React, Next.js, TypeScript, Django, Python, AWS, Node.js, PostgreSQL, AI, Machine Learning",
                qualifications:
                    "4+ years building production web applications, ERP systems, and AI products",
            },
            {
                "@type": "Occupation",
                name: "AI Engineer",
                occupationalCategory: "15-2051.00",
                skills: "AI Automation, WhatsApp Automation, Telegram Automation, OpenAI, LLM Integration",
            },
        ],
        brand: {
            "@type": "Brand",
            name: "AlgoBiz",
            url: "https://abisolutions.online",
        },
        makesOffer: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Full Stack Web Development",
                    description:
                        "Custom web applications using React, Next.js, Django & AWS",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "ERP & SaaS Development",
                    description:
                        "Enterprise resource planning systems, HRMS, payroll & attendance management",
                },
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "AI Automation Development",
                    description:
                        "WhatsApp automation, Telegram bots, AI-driven workflows & LLM integrations",
                },
            },
        ],
    },
    // ─── Organization Schema (AlgoBiz) ───
    {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://abisolutions.online/#organization",
        name: "AlgoBiz",
        alternateName: [
            "Algobiz",
            "Algo Biz",
            "AlgoBiz LLP",
            "Algobiz LLP",
            "AlgoBiz Pvt Ltd",
            "Algobiz Pvt Ltd",
            "AlgoBiz Technologies",
            "AlgoBiz Solutions",
            "AlgoBiz Software Solutions",
            "AlgoBiz Development Company",
            "AlgoBiz Web Development",
            "AlgoBiz AI Development",
            "AlgoBiz ERP Development",
        ],
        url: "https://abisolutions.online",
        logo: "https://abisolutions.online/icon-512.png",
        image: "https://abisolutions.online/og-image.jpg",
        description:
            "AlgoBiz is a software development company founded by Abhijith P A, specializing in Full Stack Development, AI Engineering, ERP Systems, SaaS Products, HRMS, and Web Applications. Based in Kerala, India.",
        founder: {
            "@type": "Person",
            "@id": "https://abisolutions.online/#person",
            name: "Abhijith P A",
        },
        foundingLocation: {
            "@type": "Place",
            name: "Wayanad, Kerala, India",
        },
        address: {
            "@type": "PostalAddress",
            addressLocality: "Wayanad",
            addressRegion: "Kerala",
            addressCountry: "IN",
        },
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+919961316468",
            email: "abhijithabhijith1999@gmail.com",
            contactType: "customer service",
            availableLanguage: ["English", "Malayalam"],
        },
        sameAs: [
            "https://github.com/Abhijith-Abi",
            "https://www.linkedin.com/in/abhijith-pa/",
        ],
        knowsAbout: [
            "Web Development",
            "AI Development",
            "ERP Development",
            "SaaS Development",
            "React.js",
            "Next.js",
            "Django",
            "Python",
            "AWS",
            "HRMS",
            "Payroll Management",
            "WhatsApp Automation",
            "Telegram Automation",
        ],
        areaServed: {
            "@type": "GeoCircle",
            geoMidpoint: {
                "@type": "GeoCoordinates",
                latitude: 11.6854,
                longitude: 76.132,
            },
            geoRadius: "50000",
        },
        serviceArea: [
            { "@type": "Country", name: "India" },
            { "@type": "State", name: "Kerala" },
        ],
    },
    // ─── WebSite Schema ───
    {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://abisolutions.online/#website",
        name: "Abhijith P A — AlgoBiz",
        alternateName: "Abi Solutions",
        url: "https://abisolutions.online",
        description:
            "Portfolio and business website of Abhijith P A, Full Stack Developer & AI Engineer. Founder of AlgoBiz.",
        publisher: {
            "@type": "Person",
            "@id": "https://abisolutions.online/#person",
            name: "Abhijith P A",
        },
        inLanguage: "en-US",
        potentialAction: {
            "@type": "SearchAction",
            target: {
                "@type": "EntryPoint",
                urlTemplate:
                    "https://abisolutions.online/blog?q={search_term_string}",
            },
            "query-input": "required name=search_term_string",
        },
    },
    // ─── BreadcrumbList Schema ───
    {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://abisolutions.online",
            },
            {
                "@type": "ListItem",
                position: 2,
                name: "About",
                item: "https://abisolutions.online/about",
            },
            {
                "@type": "ListItem",
                position: 3,
                name: "Projects",
                item: "https://abisolutions.online/projects",
            },
            {
                "@type": "ListItem",
                position: 4,
                name: "Services",
                item: "https://abisolutions.online/services",
            },
            {
                "@type": "ListItem",
                position: 5,
                name: "Blog",
                item: "https://abisolutions.online/blog",
            },
            {
                "@type": "ListItem",
                position: 6,
                name: "Contact",
                item: "https://abisolutions.online/contact",
            },
        ],
    },
    // ─── FAQ Schema ───
    {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "Who is Abhijith P A?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Abhijith P A is a Full Stack Developer and AI Engineer from Wayanad, Kerala, India. He is the founder of AlgoBiz and has over 4 years of experience building production web applications, ERP systems, SaaS platforms, and AI automation products using React, Next.js, Django, Python, and AWS.",
                },
            },
            {
                "@type": "Question",
                name: "What is AlgoBiz?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "AlgoBiz (also known as Algobiz LLP, AlgoBiz Technologies, AlgoBiz Solutions) is a software development company founded by Abhijith P A. AlgoBiz specializes in Full Stack Web Development, AI Engineering, ERP Systems, HRMS, Payroll Management, SaaS Products, and AI Automation including WhatsApp and Telegram automation.",
                },
            },
            {
                "@type": "Question",
                name: "What technologies does Abhijith P A use?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Abhijith P A specializes in React.js, Next.js, TypeScript, Django, Python, PostgreSQL, AWS, Node.js, Tailwind CSS, Three.js, Framer Motion, GSAP, Firebase, Docker, and AI/ML technologies. He builds ERP systems, SaaS platforms, HRMS, and AI automation tools.",
                },
            },
            {
                "@type": "Question",
                name: "Where has Abhijith P A worked?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Abhijith P A has worked as a Full Stack Developer, at Tegain as a Software Engineer, at Ribos as an ERP Developer, and at Steyp as a Frontend Engineer. He is currently the founder of AlgoBiz, building AI-driven products and enterprise software.",
                },
            },
            {
                "@type": "Question",
                name: "What projects has Abhijith P A built?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Abhijith P A has built HOSFACE (healthcare platform), Finwage (payroll & HRMS), STEYP (coding education platform), Enterprise ERP (enterprise resource planning), Tegain (community hub), and various AI automation systems including WhatsApp and Telegram bots.",
                },
            },
            {
                "@type": "Question",
                name: "How to hire Abhijith P A?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "You can hire Abhijith P A through his website abisolutions.online/contact, via email at abhijithabhijith1999@gmail.com, or by phone at +91 9961316468. He is available for Full Stack Development, AI Engineering, ERP Development, and SaaS product development projects.",
                },
            },
        ],
    },
];

export default function HomePage() {
    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(jsonLd),
                }}
            />
            <Navbar />
            <Hero />
            <AboutSection />
            <SkillsSection />
            <WorkflowSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
            <footer className="relative border-t border-line">
                <div className="container-width flex flex-col items-center justify-between gap-3 py-6 font-mono text-[10px] uppercase tracking-[0.32em] text-ink/40 sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} Abhijith P A · All rights
                        reserved
                    </p>
                    <p>Built with Next · Three.js · anime.js · Framer</p>
                </div>
            </footer>
        </main>
    );
}
