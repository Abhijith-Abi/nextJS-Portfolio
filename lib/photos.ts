export type PhotoItem = {
    id: string;
    src: string;
    alt: string;
    title: string;
    caption: string;
    category: "Portraits" | "Workspace" | "Engineering" | "Founder";
    year: string;
    location: string;
    aspectRatio?: "square" | "portrait" | "landscape";
    featured?: boolean;
};

export const portfolioPhotos: PhotoItem[] = [
    {
        id: "abhijith-pa-founder-portrait",
        src: "/photos/abhijith-pa-founder-portrait.jpg",
        alt: "Abhijith P A — Full Stack Developer & AI Engineer | Founder of Abi Solutions",
        title: "Abhijith P A — Executive Portrait",
        caption: "Founder of Abi Solutions & Lead Full Stack Engineer based in Kerala, India.",
        category: "Portraits",
        year: "2026",
        location: "Kerala, India",
        aspectRatio: "portrait",
        featured: true,
    },
    {
        id: "abhijith-pa-workspace",
        src: "/photos/abhijith-pa-workspace.jpg",
        alt: "Abhijith P A — Professional Software Developer in Kerala",
        title: "Abhijith P A — Professional Profile",
        caption: "Architecting modern web platforms, Next.js applications, and AI pipelines.",
        category: "Portraits",
        year: "2025",
        location: "Wayanad, Kerala",
        aspectRatio: "square",
        featured: true,
    },
    {
        id: "abhijith-pa-software-architect",
        src: "/photos/abhijith-pa-software-architect.jpg",
        alt: "Abhijith PA — Full Stack React and Next.js Specialist",
        title: "Engineering Leadership",
        caption: "Directing UI architecture and high-performance frontend state systems.",
        category: "Engineering",
        year: "2025",
        location: "Kerala, India",
        aspectRatio: "portrait",
        featured: true,
    },
    {
        id: "abhijith-pa-ai-engineer",
        src: "/photos/abhijith-pa-ai-engineer.jpg",
        alt: "Abhijith P A — AI & Cloud Architecture Engineer",
        title: "AI Workflows & Cloud Architecture",
        caption: "Specializing in Django, Python, AWS cloud deployments, and LLM automation.",
        category: "Engineering",
        year: "2024",
        location: "Kerala, India",
        aspectRatio: "portrait",
        featured: true,
    },
    {
        id: "abhijith-pa-kerala-developer",
        src: "/photos/abhijith-pa-kerala-developer.webp",
        alt: "Abhijith P A — Senior Software Engineer at Abi Solutions",
        title: "Developer at Work",
        caption: "4+ years of shipping enterprise web software, ERPs, and SaaS tools.",
        category: "Workspace",
        year: "2024",
        location: "Wayanad, Kerala",
        aspectRatio: "portrait",
        featured: false,
    },
    {
        id: "abhijith-pa-profile",
        src: "/photos/abhijith-pa-profile.webp",
        alt: "Abhijith PA — Founder & Lead Developer at Abi Solutions",
        title: "Founder Vision & Tech Strategy",
        caption: "Building mission-critical software solutions for businesses worldwide.",
        category: "Founder",
        year: "2025",
        location: "Kerala, India",
        aspectRatio: "portrait",
        featured: false,
    },
    {
        id: "abhijith-pa-founder",
        src: "/photos/abhijith-pa-founder.webp",
        alt: "Abhijith P A — Full Stack Developer & AI Engineer Portfolio",
        title: "Product Engineering & Innovation",
        caption: "Connecting responsive design systems with robust backend microservices.",
        category: "Portraits",
        year: "2024",
        location: "Kerala, India",
        aspectRatio: "portrait",
        featured: false,
    },
    {
        id: "abhijith-pa-professional",
        src: "/photos/abhijith-pa-professional.webp",
        alt: "Abhijith PA — Developer Workspace & Media Gallery",
        title: "Modern Web Engineering",
        caption: "Developing high-converting web applications with 100/100 Core Web Vitals.",
        category: "Workspace",
        year: "2024",
        location: "Kerala, India",
        aspectRatio: "square",
        featured: false,
    },
    {
        id: "abhijith-pa-full-stack-developer",
        src: "/photos/abhijith-pa-full-stack-developer.jpg",
        alt: "Abhijith P A (Abi) — Software Engineer & Consultant",
        title: "Consulting & Enterprise Delivery",
        caption: "Collaborating with clients across healthcare, travel, and fintech.",
        category: "Founder",
        year: "2024",
        location: "Kerala, India",
        aspectRatio: "portrait",
        featured: false,
    },
    {
        id: "abhijith-pa-developer",
        src: "/photos/abhijith-pa-developer.jpg",
        alt: "Abhijith P A — Developer Profile Kerala",
        title: "Tech Innovation & Code Craft",
        caption: "Crafting intuitive web interfaces and enterprise-ready backend logic.",
        category: "Portraits",
        year: "2024",
        location: "Wayanad, Kerala",
        aspectRatio: "portrait",
        featured: false,
    },
    {
        id: "abhijith-pa-engineering-lead",
        src: "/photos/abhijith-pa-engineering-lead.jpg",
        alt: "Abhijith P A — Professional Work History & Milestones",
        title: "Engineering Milestones",
        caption: "Early development milestones and team collaboration in Kerala tech hubs.",
        category: "Workspace",
        year: "2023",
        location: "Kerala, India",
        aspectRatio: "landscape",
        featured: false,
    },
    {
        id: "abhijith-pa-tech-innovator",
        src: "/photos/abhijith-pa-tech-innovator.jpg",
        alt: "Abhijith P A — Developer Workspace in Kerala",
        title: "Active Developer Studio",
        caption: "Full stack development setup in Wayanad, Kerala.",
        category: "Workspace",
        year: "2025",
        location: "Wayanad, Kerala",
        aspectRatio: "portrait",
        featured: false,
    },
];

/**
 * Generate Schema.org ImageGallery & ImageObject structured data for all portfolio photos
 * to achieve top Google Image Search ranking and rich snippets.
 */
export function generatePhotoSchema(baseUrl = "https://abisolutions.online") {
    return {
        "@context": "https://schema.org",
        "@type": "ImageGallery",
        name: "Abhijith P A — Professional Photos & Media Gallery",
        description:
            "Official photo gallery of Abhijith P A (Abi), Full Stack Developer & AI Engineer, Founder of Abi Solutions in Kerala, India.",
        url: `${baseUrl}/abhijith-pa`,
        author: {
            "@type": "Person",
            name: "Abhijith P A",
            url: baseUrl,
        },
        image: portfolioPhotos.map((photo) => ({
            "@type": "ImageObject",
            contentUrl: `${baseUrl}${photo.src}`,
            name: photo.title,
            caption: photo.caption,
            description: photo.alt,
            representativeOfPage: photo.featured ? "True" : "False",
            author: {
                "@type": "Person",
                name: "Abhijith P A",
            },
            keywords: [
                "Abhijith P A",
                "Abhijith PA",
                "Abhijith",
                "Abi Developer",
                "Abi Solutions",
                "Full Stack Developer Kerala",
                "AI Engineer India",
                "Software Engineer Wayanad",
            ].join(", "),
        })),
    };
}
