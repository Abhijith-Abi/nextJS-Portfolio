export interface LocationFAQ {
    question: string;
    answer: string;
}

export interface LocationInfo {
    slug: string; // e.g. "kochi", "thiruvananthapuram", "kozhikode", "wayanad", "thrissur", "malappuram", "kottayam", "alappuzha", "kollam", "palakkad", "kannur", "kasaragod", "idukki", "pathanamthitta"
    routeSlug: string; // e.g. "developer-kochi"
    name: string; // e.g. "Kochi / Ernakulam"
    shortName: string; // e.g. "Kochi"
    district: string; // e.g. "Ernakulam"
    postalCode: string;
    geoCoordinates: {
        latitude: string;
        longitude: string;
    };
    tagline: string;
    heroSubtitle: string;
    nearbyCities: string[]; // e.g. ["Kakkanad", "Edappally", "Aluva", "Fort Kochi"]
    primaryKeywords: string[];
    techKeywords: string[];
    highIntentKeywords: string[];
    metaTitle: string;
    metaDescription: string;
    industryFocus: string[];
    faqs: LocationFAQ[];
}

export const locationsData: Record<string, LocationInfo> = {
    "thiruvananthapuram": {
        slug: "thiruvananthapuram",
        routeSlug: "developer-thiruvananthapuram",
        name: "Thiruvananthapuram (Trivandrum)",
        shortName: "Thiruvananthapuram",
        district: "Thiruvananthapuram",
        postalCode: "695001",
        geoCoordinates: { latitude: "8.5241", longitude: "76.9366" },
        tagline: "Best Web Developer & Software Development Company in Thiruvananthapuram",
        heroSubtitle: "Transforming capital city businesses, Technopark startups, and enterprises with high-performance React, Next.js, Django, Python, and AI software solutions.",
        nearbyCities: ["Technopark", "Kazhakkoottam", "Kowdiar", "Pattom", "East Fort", "Nemom", "Attingal"],
        primaryKeywords: [
            "Best Developer in Thiruvananthapuram",
            "Best Web Developer in Thiruvananthapuram",
            "Software Developer Thiruvananthapuram",
            "Website Development Company Thiruvananthapuram",
            "Full Stack Developer Thiruvananthapuram",
            "Web Developer Technopark Trivandrum",
            "Software Company Kazhakkoottam"
        ],
        techKeywords: [
            "Best React Developer Kerala",
            "Best Next.js Developer Kerala",
            "Best Python Developer Kerala",
            "Best Django Developer Kerala",
            "AI Software Developer Kerala",
            "ERP Software Developer Kerala"
        ],
        highIntentKeywords: [
            "Hire Web Developer Thiruvananthapuram",
            "Hire Software Developer Trivandrum",
            "Custom Software Development Thiruvananthapuram",
            "Affordable Web Developer Thiruvananthapuram"
        ],
        metaTitle: "Best Web Developer in Thiruvananthapuram | Abhijith P A — AlgoBiz",
        metaDescription: "Top rated web developer & software developer in Thiruvananthapuram (Trivandrum). Full Stack Developer specializing in React, Next.js, Python, Django, ERP, SaaS & AI.",
        industryFocus: ["IT & Technopark Startups", "Government & Enterprise Systems", "Healthcare & Telemedicine", "E-commerce & Retail"],
        faqs: [
            {
                question: "Who is the best web developer in Thiruvananthapuram?",
                answer: "Abhijith P A (AlgoBiz) is a premier full stack web developer serving businesses and Technopark startups in Thiruvananthapuram. Specializing in React, Next.js, Django, Python, and AI, he delivers enterprise-grade ERPs, mobile apps, and custom web applications."
            },
            {
                question: "Do you offer web development services for Technopark startups in Trivandrum?",
                answer: "Yes! We specialize in MVP development, custom SaaS platforms, and enterprise web solutions for tech startups and IT companies in Technopark, Kazhakkoottam, and across Thiruvananthapuram."
            },
            {
                question: "How long does it take to develop a custom software in Thiruvananthapuram?",
                answer: "Timeline varies based on scale. A business website takes 1–2 weeks, while custom SaaS platforms or ERP systems take 4–8 weeks depending on requirements."
            }
        ]
    },

    "kollam": {
        slug: "kollam",
        routeSlug: "developer-kollam",
        name: "Kollam",
        shortName: "Kollam",
        district: "Kollam",
        postalCode: "691001",
        geoCoordinates: { latitude: "8.8932", longitude: "76.6141" },
        tagline: "Best Developer & Software Company in Kollam",
        heroSubtitle: "Empowering businesses in Kollam, Karunagappally, Kottarakkara, and Punalur with modern web applications, ecommerce stores, and custom software.",
        nearbyCities: ["Karunagappally", "Kottarakkara", "Punalur", "Paravur", "Chavara"],
        primaryKeywords: [
            "Best Developer in Kollam",
            "Web Developer Kollam",
            "Software Company Kollam",
            "Website Designer Kollam",
            "App Developer Kollam",
            "Freelance Developer Kollam"
        ],
        techKeywords: [
            "React Developer Kollam",
            "Python Developer Kollam",
            "Ecommerce Website Developer Kerala",
            "MERN Stack Developer Kerala"
        ],
        highIntentKeywords: [
            "Hire Web Developer Kollam",
            "Custom Software Development Kollam",
            "Affordable Website Designer Kollam"
        ],
        metaTitle: "Best Developer in Kollam | Web & App Development | AlgoBiz",
        metaDescription: "Looking for the best web developer in Kollam? Abhijith P A provides custom web design, mobile apps, ERP software, and ecommerce solutions in Kollam & Kottarakkara.",
        industryFocus: ["Cashew & Trading Export Businesses", "Retail & Commerce", "Healthcare", "Educational Institutions"],
        faqs: [
            {
                question: "Who is the top web developer in Kollam?",
                answer: "Abhijith P A is a leading software developer and website designer serving Kollam, Kottarakkara, Karunagappally, and Punalur, building modern, high-performing websites and web applications."
            },
            {
                question: "Can you build ecommerce websites for businesses in Kollam?",
                answer: "Absolutely! We build custom ecommerce stores with integrated UPI/credit card payment gateways, inventory management, and fast mobile responsiveness."
            }
        ]
    },

    "pathanamthitta": {
        slug: "pathanamthitta",
        routeSlug: "developer-pathanamthitta",
        name: "Pathanamthitta",
        shortName: "Pathanamthitta",
        district: "Pathanamthitta",
        postalCode: "689645",
        geoCoordinates: { latitude: "9.2648", longitude: "76.7870" },
        tagline: "Best Developer & Web Design in Pathanamthitta",
        heroSubtitle: "Delivering modern web development, mobile apps, and enterprise software for Thiruvalla, Adoor, Ranni, Pandalam, and Pathanamthitta.",
        nearbyCities: ["Thiruvalla", "Adoor", "Ranni", "Pandalam", "Kozhencherry", "Mallapally"],
        primaryKeywords: [
            "Best Developer in Pathanamthitta",
            "Website Developer Pathanamthitta",
            "Software Developer Pathanamthitta",
            "Web Design Pathanamthitta",
            "Full Stack Developer Pathanamthitta",
            "Web Developer Thiruvalla"
        ],
        techKeywords: [
            "Best Full Stack Developer Kerala",
            "Django Developer Kerala",
            "React Developer Pathanamthitta"
        ],
        highIntentKeywords: [
            "Hire Software Developer Pathanamthitta",
            "Custom Web Application Pathanamthitta"
        ],
        metaTitle: "Best Web Developer in Pathanamthitta & Thiruvalla | AlgoBiz",
        metaDescription: "Top web developer in Pathanamthitta & Thiruvalla. Custom web design, software development, React, Next.js, Python, and business ERP solutions.",
        industryFocus: ["NRI & Diaspora Services", "Hospitality & Tourism", "Education & Colleges", "Retail Stores"],
        faqs: [
            {
                question: "Looking for a reliable web developer in Thiruvalla or Pathanamthitta?",
                answer: "Abhijith P A offers end-to-end full stack development, creating custom websites, cloud web apps, and management systems tailored to Thiruvalla and Pathanamthitta region clients."
            }
        ]
    },

    "alappuzha": {
        slug: "alappuzha",
        routeSlug: "developer-alappuzha",
        name: "Alappuzha",
        shortName: "Alappuzha",
        district: "Alappuzha",
        postalCode: "688001",
        geoCoordinates: { latitude: "9.4981", longitude: "76.3388" },
        tagline: "Best Web Developer & Software Company in Alappuzha",
        heroSubtitle: "Building digital platforms for tourism, hospitality, houseboats, trade, and retail businesses in Alappuzha, Cherthala, and Kayamkulam.",
        nearbyCities: ["Cherthala", "Kayamkulam", "Haripad", "Ambalappuzha", "Kuttanad"],
        primaryKeywords: [
            "Best Developer in Alappuzha",
            "Web Developer Alappuzha",
            "Website Designer Alappuzha",
            "Software Company Alappuzha",
            "App Development Alappuzha",
            "Web Developer Cherthala"
        ],
        techKeywords: [
            "Next.js Developer Kerala",
            "Ecommerce Website Developer Alappuzha",
            "Python Developer Alappuzha"
        ],
        highIntentKeywords: [
            "Hire Web Developer Alappuzha",
            "Best Website Designer Alappuzha"
        ],
        metaTitle: "Best Web Developer in Alappuzha | Website Designer | AlgoBiz",
        metaDescription: "Top web developer in Alappuzha, Cherthala, and Kayamkulam. Specializing in tourism booking sites, custom web applications, mobile apps, and SEO.",
        industryFocus: ["Tourism & Resort Booking", "Coir & Seafood Exports", "Local Retail", "Healthcare"],
        faqs: [
            {
                question: "Do you build booking systems for resorts and houseboats in Alappuzha?",
                answer: "Yes! We specialize in custom online booking engines, resort websites, and reservation management portals for tourism businesses in Alappuzha."
            }
        ]
    },

    "kottayam": {
        slug: "kottayam",
        routeSlug: "developer-kottayam",
        name: "Kottayam",
        shortName: "Kottayam",
        district: "Kottayam",
        postalCode: "686001",
        geoCoordinates: { latitude: "9.5916", longitude: "76.5222" },
        tagline: "Best Web Developer & Software Developer in Kottayam",
        heroSubtitle: "High-performance website development, React, Python, and custom business software for Kottayam, Pala, Changanassery, and Kanjirappally.",
        nearbyCities: ["Pala", "Changanassery", "Kanjirappally", "Ettumanoor", "Vaikom"],
        primaryKeywords: [
            "Best Developer in Kottayam",
            "Website Development Kottayam",
            "Software Developer Kottayam",
            "React Developer Kottayam",
            "Python Developer Kottayam",
            "Web Developer Pala",
            "Software Company Changanassery"
        ],
        techKeywords: [
            "Best React Developer Kerala",
            "Best Python Developer Kerala",
            "FastAPI Developer Kerala",
            "ERP Software Developer Kottayam"
        ],
        highIntentKeywords: [
            "Hire Web Developer Kottayam",
            "Professional Web Developer Kottayam"
        ],
        metaTitle: "Best Web Developer in Kottayam, Pala & Changanassery | AlgoBiz",
        metaDescription: "Top software developer in Kottayam. Expert in React, Python, Next.js, Django, ERP systems, ecommerce, and custom business software.",
        industryFocus: ["Publishing & Media", "Rubber & Agro-Industries", "Educational Institutions", "Healthcare"],
        faqs: [
            {
                question: "Who is the top React and Python developer in Kottayam?",
                answer: "Abhijith P A is a senior full stack developer with expertise in React, Next.js, Django, and Python, offering tailored web and software development services in Kottayam, Pala, and Changanassery."
            }
        ]
    },

    "idukki": {
        slug: "idukki",
        routeSlug: "developer-idukki",
        name: "Idukki",
        shortName: "Idukki",
        district: "Idukki",
        postalCode: "685602",
        geoCoordinates: { latitude: "9.8494", longitude: "76.9810" },
        tagline: "Best Developer & Web Design in Idukki",
        heroSubtitle: "Crafting digital experiences for tourism, resorts, agriculture, and local enterprises in Thodupuzha, Kattappana, Munnar, and Adimali.",
        nearbyCities: ["Thodupuzha", "Kattappana", "Munnar", "Adimali", "Nedumkandam"],
        primaryKeywords: [
            "Best Developer in Idukki",
            "Website Developer Idukki",
            "Web Design Idukki",
            "Software Developer Idukki",
            "App Developer Idukki",
            "Web Developer Thodupuzha",
            "Web Developer Munnar"
        ],
        techKeywords: [
            "E-commerce Website Developer Kerala",
            "Mobile App Developer Kerala",
            "React Developer Idukki"
        ],
        highIntentKeywords: [
            "Hire Software Developer Idukki",
            "Custom Web Developer Thodupuzha"
        ],
        metaTitle: "Best Web Developer in Idukki & Thodupuzha | AlgoBiz",
        metaDescription: "Looking for the best web developer in Idukki? Custom resort booking engines, eco-tourism websites, ecommerce, and software development in Thodupuzha & Munnar.",
        industryFocus: ["Eco-Tourism & Munnar Resorts", "Spices & Plantation Industry", "Local Commerce"],
        faqs: [
            {
                question: "Can you create travel and resort websites in Munnar and Idukki?",
                answer: "Yes! We build high-converting resort websites with direct online booking, multilingual support, and SEO optimization for Idukki and Munnar tourism businesses."
            }
        ]
    },

    "kochi": {
        slug: "kochi",
        routeSlug: "developer-kochi",
        name: "Ernakulam / Kochi",
        shortName: "Kochi",
        district: "Ernakulam",
        postalCode: "682011",
        geoCoordinates: { latitude: "9.9312", longitude: "76.2673" },
        tagline: "Best Web Developer & AI Engineer in Kochi / Ernakulam",
        heroSubtitle: "Powering tech startups, Infopark firms, fintech, and commercial enterprises in Kakkanad, Edappally, Aluva, Fort Kochi, and greater Ernakulam.",
        nearbyCities: ["Kakkanad", "Edappally", "Aluva", "Fort Kochi", "Kalamassery", "Tripunithura", "InfoPark"],
        primaryKeywords: [
            "Best Developer in Kochi",
            "Best Developer in Ernakulam",
            "Best Web Developer Kochi",
            "Software Company Kochi",
            "Full Stack Developer Kochi",
            "React Developer Kochi",
            "Python Developer Kochi",
            "AI Developer Kochi",
            "Website Development Kochi",
            "Web Developer Kakkanad",
            "Software Developer InfoPark Kochi"
        ],
        techKeywords: [
            "Best React Developer Kerala",
            "Best Next.js Developer Kerala",
            "Best Python Developer Kerala",
            "Best Django Developer Kerala",
            "Best FastAPI Developer Kerala",
            "Best MERN Stack Developer Kerala",
            "AI Software Developer Kerala",
            "SaaS Developer Kerala",
            "ERP Software Developer Kerala"
        ],
        highIntentKeywords: [
            "Hire Web Developer Kochi",
            "Hire Software Developer Kerala",
            "Website Development Company Kochi",
            "Custom Software Development Ernakulam",
            "Startup Software Developer Kochi"
        ],
        metaTitle: "Best Web Developer in Kochi & Ernakulam | Full Stack & AI | AlgoBiz",
        metaDescription: "Top rated web developer in Kochi / Ernakulam. React, Next.js, Python, Django, AI, ERP, SaaS, mobile apps. Serving InfoPark, Kakkanad, Edappally, and Aluva.",
        industryFocus: ["Fintech & Tech Startups (Infopark)", "E-commerce & Logistics", "Real Estate & Maritime", "Healthcare"],
        faqs: [
            {
                question: "Who is the best web developer in Kochi / Ernakulam?",
                answer: "Abhijith P A (AlgoBiz) is a leading Full Stack Web Developer and AI Engineer in Kochi. He specializes in React, Next.js, Python, Django, SaaS platforms, and enterprise ERP systems for clients in Kakkanad, Infopark, Edappally, and across Ernakulam."
            },
            {
                question: "Do you develop AI solutions and WhatsApp bots for Kochi startups?",
                answer: "Yes! We build AI agents, LLM integrations, custom chatbots, and workflow automation tailored for startups and businesses in Kochi."
            },
            {
                question: "What technologies do you use for website and SaaS development in Kochi?",
                answer: "We use modern frameworks like Next.js, React, Tailwind CSS, TypeScript, Node.js, Python, Django, FastAPI, PostgreSQL, and Docker."
            }
        ]
    },

    "thrissur": {
        slug: "thrissur",
        routeSlug: "developer-thrissur",
        name: "Thrissur",
        shortName: "Thrissur",
        district: "Thrissur",
        postalCode: "680001",
        geoCoordinates: { latitude: "10.5276", longitude: "76.2144" },
        tagline: "Best Web Developer & Software Company in Thrissur",
        heroSubtitle: "Empowering gold jewelers, retail chains, healthcare hubs, and businesses in Thrissur, Kunnamkulam, Guruvayur, and Chalakudy.",
        nearbyCities: ["Kunnamkulam", "Guruvayur", "Chalakudy", "Kodungallur", "Irinjalakuda", "Wadakkanchery"],
        primaryKeywords: [
            "Best Developer in Thrissur",
            "Web Developer Thrissur",
            "Website Development Thrissur",
            "Software Company Thrissur",
            "App Developer Thrissur",
            "Best Developer Kunnamkulam",
            "Best Developer Guruvayur"
        ],
        techKeywords: [
            "Best MERN Stack Developer Kerala",
            "ERP Software Developer Kerala",
            "Ecommerce Website Developer Kerala"
        ],
        highIntentKeywords: [
            "Hire Web Developer Thrissur",
            "Website Development Company Thrissur",
            "Custom Software Development Thrissur"
        ],
        metaTitle: "Best Web Developer in Thrissur, Guruvayur & Kunnamkulam | AlgoBiz",
        metaDescription: "Top software developer in Thrissur. Expert in custom ecommerce, jewellery retail ERPs, business websites, React, Next.js, and mobile app development.",
        industryFocus: ["Gold Jewellery & Retail Chains", "Banking & Finance", "Healthcare & Hospitals", "Temple & Pilgrimage Tourism"],
        faqs: [
            {
                question: "Who is the top web developer in Thrissur?",
                answer: "Abhijith P A provides top-tier web design and custom software development in Thrissur, Guruvayur, and Kunnamkulam, specializing in high-speed web apps and business automation."
            }
        ]
    },

    "palakkad": {
        slug: "palakkad",
        routeSlug: "developer-palakkad",
        name: "Palakkad",
        shortName: "Palakkad",
        district: "Palakkad",
        postalCode: "678001",
        geoCoordinates: { latitude: "10.7867", longitude: "76.6548" },
        tagline: "Best Developer & Software Development in Palakkad",
        heroSubtitle: "Innovative web design, custom software, and digital solutions for industrial and agricultural businesses in Palakkad, Ottapalam, and Mannarkkad.",
        nearbyCities: ["Ottapalam", "Chittur", "Mannarkkad", "Pattambi", "Cherpulassery"],
        primaryKeywords: [
            "Best Developer in Palakkad",
            "Website Developer Palakkad",
            "Web Designer Palakkad",
            "Software Development Palakkad",
            "React Developer Palakkad",
            "Web Developer Ottapalam"
        ],
        techKeywords: [
            "React Developer Palakkad",
            "Python Developer Palakkad",
            "Full Stack Developer Kerala"
        ],
        highIntentKeywords: [
            "Hire Software Developer Palakkad",
            "Affordable Web Developer Palakkad"
        ],
        metaTitle: "Best Web Developer in Palakkad & Ottapalam | AlgoBiz",
        metaDescription: "Top website developer and software engineer in Palakkad. Full stack development using React, Next.js, Python, and custom ERP systems.",
        industryFocus: ["Industrial Manufacturing (KINFRA)", "Agro-processing", "Logistics & Transport"],
        faqs: [
            {
                question: "Looking for an experienced web developer in Palakkad?",
                answer: "Abhijith P A brings 4+ years of experience delivering robust web applications, enterprise software, and mobile apps for Palakkad and Ottapalam enterprises."
            }
        ]
    },

    "malappuram": {
        slug: "malappuram",
        routeSlug: "developer-malappuram",
        name: "Malappuram",
        shortName: "Malappuram",
        district: "Malappuram",
        postalCode: "676505",
        geoCoordinates: { latitude: "11.0732", longitude: "76.0740" },
        tagline: "Best Web Developer & Software Company in Malappuram",
        heroSubtitle: "Building digital ecosystems for retail giants, Gulf exporters, educational hubs, and enterprises in Tirur, Kottakkal, Perinthalmanna, and Malappuram.",
        nearbyCities: ["Tirur", "Kottakkal", "Perinthalmanna", "Manjeri", "Ponnani", "Nilambur"],
        primaryKeywords: [
            "Best Developer in Malappuram",
            "Web Developer Malappuram",
            "Website Development Malappuram",
            "Software Company Malappuram",
            "Full Stack Developer Malappuram",
            "Best Developer Tirur",
            "Best Developer Kottakkal",
            "Best Developer Perinthalmanna"
        ],
        techKeywords: [
            "Best Full Stack Developer Kerala",
            "MERN Stack Developer Malappuram",
            "Ecommerce Website Developer Kerala"
        ],
        highIntentKeywords: [
            "Hire Web Developer Malappuram",
            "Website Development Company Malappuram",
            "Custom Software Development Malappuram"
        ],
        metaTitle: "Best Web Developer in Malappuram, Tirur & Kottakkal | AlgoBiz",
        metaDescription: "Top web developer in Malappuram, Tirur, Kottakkal, and Perinthalmanna. Custom e-commerce, Ayurveda software, mobile apps, React, Next.js, and Python.",
        industryFocus: ["Ayurveda & Healthcare (Kottakkal)", "Retail & Supermarket Chains", "Educational Institutions", "Gulf Trade & Commerce"],
        faqs: [
            {
                question: "Who is the best software developer in Malappuram district?",
                answer: "Abhijith P A (AlgoBiz) is a premier full stack developer serving clients in Malappuram, Tirur, Kottakkal, and Perinthalmanna, specializing in e-commerce, custom ERP, and web applications."
            }
        ]
    },

    "kozhikode": {
        slug: "kozhikode",
        routeSlug: "developer-kozhikode",
        name: "Kozhikode (Calicut)",
        shortName: "Kozhikode",
        district: "Kozhikode",
        postalCode: "673001",
        geoCoordinates: { latitude: "11.2588", longitude: "75.7804" },
        tagline: "Best Web Developer & AI Engineer in Kozhikode (Calicut)",
        heroSubtitle: "Leading web development, AI solutions, Cyberpark tech stack, and enterprise software for Calicut city, Vadakara, and Koyilandy.",
        nearbyCities: ["Cyberpark", "Vadakara", "Koyilandy", "Ramanattukara", "Feroke", "Koduvally"],
        primaryKeywords: [
            "Best Developer in Kozhikode",
            "Best Coder in Kozhikode",
            "Best Web Developer Kozhikode",
            "Software Developer Kozhikode",
            "Website Development Kozhikode",
            "React Developer Kozhikode",
            "Django Developer Kozhikode",
            "Python Developer Kozhikode",
            "AI Developer Kozhikode"
        ],
        techKeywords: [
            "Best React Developer Kerala",
            "Best Next.js Developer Kerala",
            "Best Python Developer Kerala",
            "Best Django Developer Kerala",
            "AI Software Developer Kerala",
            "SaaS Developer Kerala"
        ],
        highIntentKeywords: [
            "Hire Web Developer Kozhikode",
            "Website Development Company Kozhikode",
            "Custom Software Development Calicut",
            "Startup Software Developer Kozhikode"
        ],
        metaTitle: "Best Web Developer in Kozhikode (Calicut) | Full Stack & AI | AlgoBiz",
        metaDescription: "Top rated web developer & coder in Kozhikode (Calicut). Expert in React, Next.js, Django, Python, AI apps, custom websites, and ERP software.",
        industryFocus: ["Cyberpark & Tech Startups", "Hospitality & Food Chains", "Retail & Commerce", "Healthcare Hubs"],
        faqs: [
            {
                question: "Who is the best web developer and coder in Kozhikode (Calicut)?",
                answer: "Abhijith P A is widely recognized as one of the best web developers and coders in Kozhikode. With deep expertise in React, Next.js, Django, Python, and AI, he crafts enterprise-grade digital platforms for Cyberpark startups and Calicut businesses."
            },
            {
                question: "Do you provide custom website development for businesses in Calicut?",
                answer: "Yes! We build high-speed, SEO-optimized, mobile-responsive websites and web apps tailored for Kozhikode businesses."
            }
        ]
    },

    "wayanad": {
        slug: "wayanad",
        routeSlug: "developer-wayanad",
        name: "Wayanad",
        shortName: "Wayanad",
        district: "Wayanad",
        postalCode: "673121",
        geoCoordinates: { latitude: "11.6854", longitude: "76.1320" },
        tagline: "Best Developer & Software Company in Wayanad",
        heroSubtitle: "Transforming Wayanad businesses, resorts, plantations, and startups in Kalpetta, Sulthan Bathery, and Mananthavady with modern web software.",
        nearbyCities: ["Kalpetta", "Sulthan Bathery", "Mananthavady", "Vythiri", "Meppadi"],
        primaryKeywords: [
            "Best Developer in Wayanad",
            "Best Coder in Wayanad",
            "Best Web Developer Wayanad",
            "Website Developer Wayanad",
            "Software Company Wayanad",
            "React Developer Wayanad",
            "Next.js Developer Wayanad",
            "Django Developer Wayanad",
            "Python Developer Wayanad",
            "AI Developer Wayanad",
            "Best Developer Kalpetta",
            "Best Developer Sulthan Bathery",
            "Best Developer Mananthavady"
        ],
        techKeywords: [
            "Best React Developer Kerala",
            "Best Next.js Developer Kerala",
            "Best Python Developer Kerala",
            "Best Django Developer Kerala",
            "AI Software Developer Kerala"
        ],
        highIntentKeywords: [
            "Hire Web Developer Wayanad",
            "Website Development Company Wayanad",
            "Affordable Web Developer Wayanad"
        ],
        metaTitle: "Best Web Developer in Wayanad | Kalpetta, Bathery, Mananthavady | AlgoBiz",
        metaDescription: "Abhijith P A is the top web developer in Wayanad. Full Stack, React, Next.js, Django, AI. Custom websites, ERP, SaaS, resort booking systems in Kalpetta & Bathery.",
        industryFocus: ["Resorts & Tourism", "Spices & Agriculture", "Retail & Services", "EdTech"],
        faqs: [
            {
                question: "Who is the best web developer in Wayanad?",
                answer: "Abhijith P A (AlgoBiz) is the leading web developer in Wayanad, serving Kalpetta, Sulthan Bathery, and Mananthavady with custom React, Next.js, Django, and AI solutions."
            }
        ]
    },

    "kannur": {
        slug: "kannur",
        routeSlug: "developer-kannur",
        name: "Kannur",
        shortName: "Kannur",
        district: "Kannur",
        postalCode: "670001",
        geoCoordinates: { latitude: "11.8745", longitude: "75.3704" },
        tagline: "Best Developer & Web Design in Kannur",
        heroSubtitle: "Building digital platforms for textile exporters, NRI enterprises, and local businesses in Kannur, Payyannur, Taliparamba, and Thalassery.",
        nearbyCities: ["Payyannur", "Taliparamba", "Thalassery", "Mattannur", "Payyambalam"],
        primaryKeywords: [
            "Best Developer in Kannur",
            "Website Developer Kannur",
            "Software Developer Kannur",
            "Web Design Kannur",
            "App Developer Kannur",
            "Best Developer Payyannur",
            "Best Developer Taliparamba"
        ],
        techKeywords: [
            "React Developer Kannur",
            "Next.js Developer Kannur",
            "MERN Stack Developer Kerala"
        ],
        highIntentKeywords: [
            "Hire Web Developer Kannur",
            "Custom Software Development Kannur"
        ],
        metaTitle: "Best Web Developer in Kannur, Payyannur & Thalassery | AlgoBiz",
        metaDescription: "Top software developer in Kannur. Custom website design, mobile apps, React, Next.js, Python, and ERP systems for Kannur & Payyannur businesses.",
        industryFocus: ["Handloom & Textile Industry", "Aviation & Logistics (Kannur Airport)", "NRI Commerce"],
        faqs: [
            {
                question: "Who is the best website developer in Kannur?",
                answer: "Abhijith P A delivers modern web development, e-commerce, and software services across Kannur, Thalassery, Payyannur, and Taliparamba."
            }
        ]
    },

    "kasaragod": {
        slug: "kasaragod",
        routeSlug: "developer-kasaragod",
        name: "Kasaragod",
        shortName: "Kasaragod",
        district: "Kasaragod",
        postalCode: "671121",
        geoCoordinates: { latitude: "12.4996", longitude: "74.9869" },
        tagline: "Best Web Developer & Software Company in Kasaragod",
        heroSubtitle: "Empowering businesses in Kasaragod, Kanhangad, and Nileshwaram with modern web apps, e-commerce, and cross-platform mobile solutions.",
        nearbyCities: ["Kanhangad", "Nileshwaram", "Uppala", "Manjeshwar", "Cheruvathur"],
        primaryKeywords: [
            "Best Developer in Kasaragod",
            "Website Development Kasaragod",
            "Web Developer Kasaragod",
            "Software Company Kasaragod",
            "Full Stack Developer Kasaragod",
            "Web Developer Kanhangad"
        ],
        techKeywords: [
            "Best Full Stack Developer Kerala",
            "React Developer Kasaragod",
            "Ecommerce Website Developer Kasaragod"
        ],
        highIntentKeywords: [
            "Hire Web Developer Kasaragod",
            "Affordable Web Developer Kasaragod"
        ],
        metaTitle: "Best Web Developer in Kasaragod & Kanhangad | AlgoBiz",
        metaDescription: "Top website developer in Kasaragod and Kanhangad. Full stack web development, React, Next.js, Python, mobile apps, and business management software.",
        industryFocus: ["Cross-Border Commerce", "Agro Industries", "Education & NRI Services"],
        faqs: [
            {
                question: "Looking for a top software developer in Kasaragod or Kanhangad?",
                answer: "Abhijith P A provides fast, modern, and SEO-optimized web development and custom software solutions for clients in Kasaragod and Kanhangad."
            }
        ]
    }
};

// Also support common alias slugs (e.g., 'ernakulam' -> 'kochi', 'calicut' -> 'kozhikode', 'trivandrum' -> 'thiruvananthapuram')
export const locationAliases: Record<string, string> = {
    "ernakulam": "kochi",
    "calicut": "kozhikode",
    "trivandrum": "thiruvananthapuram"
};

export const exactKeywordAliases: Record<string, string> = {
    // Wayanad Tech Stack Queries
    "coder-in-wayanad": "wayanad",
    "developer-in-wayanad": "wayanad",
    "best-developer-in-wayanad": "wayanad",
    "web-developer-wayanad": "wayanad",
    "developer-wayanad": "wayanad",
    "full-stack-developer-wayanad": "wayanad",
    "best-full-stack-developer-in-wayanad": "wayanad",
    "react-developer-wayanad": "wayanad",
    "best-react-developer-in-wayanad": "wayanad",
    "python-developer-wayanad": "wayanad",
    "django-developer-wayanad": "wayanad",
    "devops-engineer-wayanad": "wayanad",
    "devops-developer-wayanad": "wayanad",
    "frontend-developer-wayanad": "wayanad",
    "html-css-developer-wayanad": "wayanad",
    
    // Kozhikode / Calicut Tech Stack Queries
    "coder-in-kozhikode": "kozhikode",
    "developer-in-kozhikode": "kozhikode",
    "best-developer-in-kozhikode": "kozhikode",
    "web-developer-kozhikode": "kozhikode",
    "coder-in-calicut": "kozhikode",
    "developer-in-calicut": "kozhikode",
    "developer-kozhikode": "kozhikode",
    "full-stack-developer-kozhikode": "kozhikode",
    "best-full-stack-developer-in-kozhikode": "kozhikode",
    "react-developer-kozhikode": "kozhikode",
    "best-react-developer-in-kozhikode": "kozhikode",
    "python-developer-kozhikode": "kozhikode",
    "django-developer-kozhikode": "kozhikode",
    "devops-engineer-kozhikode": "kozhikode",
    "devops-developer-kozhikode": "kozhikode",
    "frontend-developer-kozhikode": "kozhikode",
    "html-css-developer-kozhikode": "kozhikode",
    
    // Kochi / Ernakulam Tech Stack Queries
    "developer-in-kochi": "kochi",
    "web-developer-kochi": "kochi",
    "best-developer-in-kochi": "kochi",
    "react-developer-kochi": "kochi",
    "best-react-developer-in-kochi": "kochi",
    "developer-in-ernakulam": "kochi",
    "developer-kochi": "kochi",
    "full-stack-developer-kochi": "kochi",
    "best-full-stack-developer-in-kochi": "kochi",
    "python-developer-kochi": "kochi",
    "django-developer-kochi": "kochi",
    "devops-engineer-kochi": "kochi",
    "devops-developer-kochi": "kochi",
    "frontend-developer-kochi": "kochi",
    "html-css-developer-kochi": "kochi",
    
    // Malappuram Tech Stack Queries
    "developer-in-malappuram": "malappuram",
    "web-developer-malappuram": "malappuram",
    "best-developer-in-malappuram": "malappuram",
    "developer-malappuram": "malappuram",
    "full-stack-developer-malappuram": "malappuram",
    "react-developer-malappuram": "malappuram",
    "python-developer-malappuram": "malappuram",
    "django-developer-malappuram": "malappuram",
    "devops-engineer-malappuram": "malappuram",
    
    // Thrissur Tech Stack Queries
    "developer-in-thrissur": "thrissur",
    "web-developer-thrissur": "thrissur",
    "developer-thrissur": "thrissur",
    "full-stack-developer-thrissur": "thrissur",
    "react-developer-thrissur": "thrissur",
    "python-developer-thrissur": "thrissur",
    "django-developer-thrissur": "thrissur",
    
    // Thiruvananthapuram / Trivandrum Tech Stack Queries
    "developer-in-thiruvananthapuram": "thiruvananthapuram",
    "web-developer-thiruvananthapuram": "thiruvananthapuram",
    "developer-in-trivandrum": "thiruvananthapuram",
    "developer-thiruvananthapuram": "thiruvananthapuram",
    "full-stack-developer-thiruvananthapuram": "thiruvananthapuram",
    "react-developer-thiruvananthapuram": "thiruvananthapuram",
    "python-developer-thiruvananthapuram": "thiruvananthapuram",
    "django-developer-thiruvananthapuram": "thiruvananthapuram",
    "devops-engineer-thiruvananthapuram": "thiruvananthapuram",
    
    // State Level Tech Stack Queries (Kerala)
    "best-full-stack-developer-kerala": "kochi",
    "best-react-developer-kerala": "kochi",
    "best-python-developer-kerala": "kozhikode",
    "best-django-developer-kerala": "kozhikode",
    "best-devops-engineer-kerala": "kochi",
    "best-frontend-developer-kerala": "wayanad",
    "best-backend-developer-kerala": "kozhikode",
    
    // Other districts
    "developer-in-kannur": "kannur",
    "developer-kannur": "kannur",
    "full-stack-developer-kannur": "kannur",
    "react-developer-kannur": "kannur",
    "developer-in-kottayam": "kottayam",
    "developer-kottayam": "kottayam",
    "full-stack-developer-kottayam": "kottayam",
    "react-developer-kottayam": "kottayam",
    "developer-in-palakkad": "palakkad",
    "developer-palakkad": "palakkad",
    "full-stack-developer-palakkad": "palakkad",
    "react-developer-palakkad": "palakkad",
    "developer-in-kasaragod": "kasaragod",
    "developer-kasaragod": "kasaragod",
    "full-stack-developer-kasaragod": "kasaragod",
    "developer-in-alappuzha": "alappuzha",
    "developer-alappuzha": "alappuzha",
    "developer-in-kollam": "kollam",
    "developer-kollam": "kollam",
    "developer-in-idukki": "idukki",
    "developer-idukki": "idukki",
    "developer-in-pathanamthitta": "pathanamthitta",
    "developer-pathanamthitta": "pathanamthitta"
};

export function getLocationData(slug?: string): LocationInfo | null {
    if (!slug || typeof slug !== "string") return null;
    const normalized = slug.toLowerCase().trim();
    if (exactKeywordAliases[normalized]) {
        return locationsData[exactKeywordAliases[normalized]] || null;
    }
    const cleanSlug = normalized.replace(/^developer-/, "");
    const mappedSlug = locationAliases[cleanSlug] || cleanSlug;
    return locationsData[mappedSlug] || null;
}
