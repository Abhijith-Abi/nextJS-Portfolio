import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ExperienceSection } from "../components/ExperienceSection";
import { ContactSection } from "../components/ContactSection";
import { WorkflowSection } from "../components/WorkflowSection";

export default function HomePage() {
    return (
        <main className="relative min-h-screen">
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
