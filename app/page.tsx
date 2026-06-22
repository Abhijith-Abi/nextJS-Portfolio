import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ContactSection } from "../components/ContactSection";
import { WorkflowSection } from "../components/WorkflowSection";

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Abhijith P A",
    alternateName: [
        "Abi",
        "Abhijith",
        "Abijith",
        "Abhijith PA",
        "AP Abhijith",
        "Abi Solutions",
        "Abisolutions",
        "Abhisolutions",
        "Abhijith Steyp",
        "Abhijith Algobiz",
        "Abhijith Talrop",
    ],
    url: "https://abisolutions.online",
    image: "https://abisolutions.online/profile.jpg",
    jobTitle: "Full Stack Developer",
    description:
        "Abhijith P A (Abi) is a Full Stack Developer specializing in React, Next.js, Django, AWS, and AI-driven web applications. Frontend Engineer at Algobiz, formerly at Talrop and Steyp. Founder of Abi Solutions.",
    email: "abhijithabhijith1999@gmail.com",
    telephone: "+919961316468",
    address: {
        "@type": "PostalAddress",
        addressLocality: "Kerala",
        addressRegion: "Kerala",
        addressCountry: "IN",
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
        "Tailwind CSS",
        "Three.js",
        "Framer Motion",
        "GSAP",
        "Firebase",
        "PostgreSQL",
        "Docker",
        "REST APIs",
        "SaaS Development",
        "ERP Development",
        "CRM Development",
        "Ecommerce Development",
    ],
    worksFor: {
        "@type": "Organization",
        name: "Algobiz",
        url: "https://algobiz.com",
    },
    alumniOf: [
        { "@type": "Organization", name: "Talrop", url: "https://talrop.com" },
        { "@type": "Organization", name: "Steyp", url: "https://steyp.com" },
    ],
    brand: {
        "@type": "Brand",
        name: "Abi Solutions",
        url: "https://abisolutions.online",
    },
    hasOccupation: [
        {
            "@type": "Occupation",
            name: "Full Stack Developer",
            occupationalCategory: "Software Developer",
            skills: "React, Next.js, TypeScript, Django, Python, AWS, Node.js, Tailwind CSS, GSAP, Framer Motion",
        },
    ],
    nationality: {
        "@type": "Country",
        name: "India",
    },
};

export default function HomePage() {
    return (
        <main className="relative min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
