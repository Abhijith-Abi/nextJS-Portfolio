import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ContactSection } from "../components/ContactSection";

export default function HomePage() {
    return (
        <main className="min-h-screen">
            <Navbar />
            <Hero />
            <AboutSection />
            <SkillsSection />
            <ProjectsSection />
            <ExperienceSection />
            <ContactSection />
            <footer className="border-t border-slate-800/80 bg-slate-950/80">
                <div className="container-width flex flex-col items-center justify-between gap-3 py-4 text-[11px] text-muted sm:flex-row">
                    <p>
                        © {new Date().getFullYear()} Abhijith P A. All rights
                        reserved.
                    </p>
                    <p>Built with Next.js, Tailwind CSS, GSAP, and Recharts.</p>
                </div>
            </footer>
        </main>
    );
}
