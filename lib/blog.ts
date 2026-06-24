export type BlogPost = {
    slug: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    tags: string[];
    keywords: string[];
    coverImage?: string;
    imagePrompt?: string;
    content: BlogSection[];
};

export type BlogSection = {
    type: "paragraph" | "heading" | "list" | "code";
    content: string;
    items?: string[];
    language?: string;
};

export const blogPosts: BlogPost[] = [
    {
        slug: "how-i-built-talrop-erp-with-nextjs",
        title: "How I Built Talrop ERP with Next.js & TypeScript",
        description:
            "A deep dive into building the Talrop ERP frontend with Next.js, TypeScript, Zustand & Recharts. Architecture decisions, state management, and performance optimization.",
        date: "2026-06-20",
        readTime: "8 min read",
        tags: ["Next.js", "TypeScript", "ERP", "Zustand", "Recharts"],
        keywords: [
            "Talrop ERP",
            "Next.js ERP",
            "Build ERP with React",
            "TypeScript ERP development",
            "Enterprise React application",
        ],
        content: [
            {
                type: "paragraph",
                content:
                    "Building an enterprise resource planning system with 15+ modules taught me more about React architecture than any tutorial ever could. Here's what I learned.",
            },
            { type: "heading", content: "The Challenge" },
            {
                type: "paragraph",
                content:
                    "Talrop needed an ERP that unified inventory management, financial tracking, and HR operations into a single platform. The frontend had to handle complex data relationships, real-time updates, and granular role-based permissions — all while remaining fast and maintainable.",
            },
            { type: "heading", content: "Architecture Decisions" },
            {
                type: "paragraph",
                content:
                    "I chose Next.js for its hybrid rendering model. Some pages need SSR for SEO (public-facing), while internal dashboards use client-side rendering for interactivity.",
            },
            {
                type: "paragraph",
                content:
                    "TypeScript was non-negotiable for an ERP. With 15+ modules sharing data types, strict typing caught countless bugs before they reached production.",
            },
            {
                type: "paragraph",
                content:
                    "Zustand over Redux was a deliberate choice. ERP modules are mostly independent — each manages its own state slice. Zustand's minimal API made it faster to develop.",
            },
            { type: "heading", content: "Performance at Scale" },
            {
                type: "list",
                content: "We solved performance issues with:",
                items: [
                    "Data windowing — only render visible chart segments",
                    "Memoization of computed values with useMemo",
                    "Lazy loading of module bundles with dynamic imports",
                    "API response caching with stale-while-revalidate",
                ],
            },
            { type: "heading", content: "Key Takeaways" },
            {
                type: "list",
                content: "",
                items: [
                    "TypeScript pays for itself in enterprise apps",
                    "Zustand scales beautifully for modular architectures",
                    "Design systems are mandatory for multi-module products",
                    "Performance optimization should be built in from day one",
                ],
            },
        ],
    },
    {
        slug: "deploying-nextjs-on-vercel",
        title: "Deploying Next.js on Vercel — Complete Guide 2026",
        description:
            "Step-by-step guide to deploying Next.js applications on Vercel. Custom domains, environment variables, CI/CD, performance optimization, and SEO.",
        date: "2026-06-18",
        readTime: "6 min read",
        tags: ["Next.js", "Vercel", "Deployment", "CI/CD"],
        keywords: [
            "Deploy Next.js Vercel",
            "Next.js deployment guide",
            "Vercel deployment tutorial",
            "Custom domain Vercel",
            "Next.js SEO Vercel",
        ],
        content: [
            {
                type: "paragraph",
                content:
                    "After deploying 20+ Next.js apps on Vercel, here's my production-ready workflow covering everything from initial setup to performance monitoring.",
            },
            { type: "heading", content: "Why Vercel for Next.js" },
            {
                type: "paragraph",
                content:
                    "Vercel is built by the same team that creates Next.js, so the integration is seamless. You get automatic ISR, edge functions, and zero-config deployments.",
            },
            { type: "heading", content: "Step 1: Project Setup" },
            {
                type: "paragraph",
                content:
                    "Connect your GitHub repo to Vercel. Every push to main triggers a production deployment. Feature branches get preview URLs automatically.",
            },
            { type: "heading", content: "Step 2: Environment Variables" },
            {
                type: "paragraph",
                content:
                    "Add env vars in the Vercel dashboard under Settings. Use separate values for Production, Preview, and Development. Never commit secrets to your repo.",
            },
            { type: "heading", content: "Step 3: Custom Domain" },
            {
                type: "paragraph",
                content:
                    "Add your domain in Project Settings → Domains. Vercel provisions an SSL certificate automatically. Point your DNS to Vercel's servers.",
            },
            { type: "heading", content: "Performance & SEO Checklist" },
            {
                type: "list",
                content: "",
                items: [
                    "Enable ISR for pages that change periodically",
                    "Use next/image for automatic image optimization",
                    "Add sitemap.ts and robots.ts in your app directory",
                    "Set metadataBase in your root layout",
                    "Verify your domain in Google Search Console",
                ],
            },
        ],
    },
    {
        slug: "react-state-management-zustand-vs-redux",
        title: "Zustand vs Redux — React State Management in 2026",
        description:
            "Comparing Zustand and Redux for React state management. When to use each, performance differences, and real-world patterns from building ERP and SaaS applications.",
        date: "2026-06-15",
        readTime: "7 min read",
        tags: ["React", "Zustand", "Redux", "State Management"],
        keywords: [
            "Zustand vs Redux",
            "React state management",
            "Zustand tutorial",
            "Redux alternative",
            "Best state management React",
        ],
        content: [
            {
                type: "paragraph",
                content:
                    "I've used both extensively — Redux at Steyp, Zustand at Talrop. Here's when each makes sense and why I switched.",
            },
            { type: "heading", content: "When to Use Redux" },
            {
                type: "list",
                content: "",
                items: [
                    "You need time-travel debugging and action replay",
                    "Your team already knows Redux and has established patterns",
                    "You need middleware-heavy architectures (sagas, thunks)",
                    "Complex data normalization requirements",
                ],
            },
            { type: "heading", content: "When to Use Zustand" },
            {
                type: "list",
                content: "",
                items: [
                    "You want minimal boilerplate and fast iteration",
                    "Your app has multiple independent state slices",
                    "You need state accessible outside React components",
                    "Bundle size matters (Zustand ~1KB vs Redux + Toolkit ~40KB)",
                ],
            },
            { type: "heading", content: "My Verdict for 2026" },
            {
                type: "paragraph",
                content:
                    "For new projects, I default to Zustand. It's faster to set up, easier to maintain, smaller in bundle size, and performs better out of the box. Redux still has its place in very large teams with complex middleware needs.",
            },
        ],
    },
    {
        slug: "building-saas-platform-with-react-django",
        title: "Building a SaaS Platform with React & Django",
        description:
            "How to build a SaaS platform using React frontend and Django backend. Authentication, multi-tenancy, billing, and deployment strategies.",
        date: "2026-06-12",
        readTime: "10 min read",
        tags: ["React", "Django", "SaaS", "AWS", "Python"],
        keywords: [
            "Build SaaS React Django",
            "SaaS platform tutorial",
            "React Django SaaS",
            "Multi-tenant application",
            "Django AWS deployment",
        ],
        content: [
            {
                type: "paragraph",
                content:
                    "A practical guide to architecting a multi-tenant SaaS application with React on the frontend and Django REST Framework on the backend.",
            },
            { type: "heading", content: "The Stack" },
            {
                type: "list",
                content: "Recommended SaaS stack for 2026:",
                items: [
                    "Frontend: Next.js + TypeScript + Tailwind CSS",
                    "Backend: Django REST Framework + PostgreSQL",
                    "Auth: JWT with refresh tokens",
                    "Deploy: AWS EC2 + RDS + S3 + CloudFront",
                    "CI/CD: GitHub Actions",
                ],
            },
            { type: "heading", content: "Multi-Tenancy Strategy" },
            {
                type: "paragraph",
                content:
                    "Shared database with tenant isolation via foreign keys is the sweet spot. Each request includes a tenant context, and Django middleware automatically scopes all queries.",
            },
            { type: "heading", content: "Authentication Flow" },
            {
                type: "paragraph",
                content:
                    "Use short-lived access tokens (15 minutes) with longer refresh tokens (7 days). Store access token in memory and refresh token in an httpOnly cookie.",
            },
            { type: "heading", content: "Lessons from Production" },
            {
                type: "list",
                content: "",
                items: [
                    "Design your data model for multi-tenancy from day one",
                    "Rate limiting and abuse prevention are not optional",
                    "Monitoring (Sentry + CloudWatch) saves you from silent failures",
                    "Start with a monolith, extract services only when needed",
                ],
            },
        ],
    },
    {
        slug: "react-server-components-best-practices-2026",
        title: "React Server Components Best Practices 2026",
        description:
            "Learn the best practices for implementing React Server Components in 2026, with expert guidance on performance optimization, security, and scalability for Next.js and React apps.",
        date: "2026-06-22",
        readTime: "20 min read",
        tags: [
            "React",
            "Next.js",
            "Server Components",
            "Full Stack Development",
            "Performance Optimization",
        ],
        keywords: [
            "React Server Components",
            "Next.js",
            "React performance optimization",
            "server-side rendering",
            "full stack development",
        ],
        imagePrompt:
            "A modern, premium tech blog cover image featuring a dark-themed developer workspace with neon accents, a large screen displaying React code, and a futuristic glassmorphic design inspired by Vercel, Linear, and Stripe.",
        content: [
            {
                type: "paragraph",
                content:
                    "As a full stack developer, keeping up with the latest advancements in React and Next.js is crucial for building high-performance, scalable, and secure applications. One of the most significant recent developments in the React ecosystem is the introduction of Server Components, which enable developers to render React components on the server-side. In this article, we'll explore the best practices for implementing React Server Components in 2026, covering topics such as performance optimization, security, and scalability.",
            },
            {
                type: "heading",
                content: "Introduction to React Server Components",
            },
            {
                type: "paragraph",
                content:
                    "React Server Components are a new way of building React applications, allowing developers to render components on the server-side using a technology called server-side rendering (SSR). This approach provides several benefits, including improved SEO, faster page loads, and enhanced security. With React Server Components, developers can create reusable, modular components that can be easily shared across different parts of an application.",
            },
            {
                type: "heading",
                content: "Problem Statement",
            },
            {
                type: "paragraph",
                content:
                    "While React Server Components offer numerous advantages, they also introduce new challenges, such as managing server-side state, handling errors, and optimizing performance. Moreover, integrating Server Components with existing React applications can be complex, requiring significant changes to the application architecture. In this article, we'll address these challenges and provide guidance on how to overcome them.",
            },
            {
                type: "heading",
                content: "Solution with Explanation",
            },
            {
                type: "paragraph",
                content:
                    "To implement React Server Components effectively, developers should follow a set of best practices, including using a modular architecture, managing server-side state, and optimizing performance. One key approach is to use a framework like Next.js, which provides built-in support for Server Components and simplifies the development process. Additionally, developers should leverage caching mechanisms, such as Redis or Memcached, to reduce the load on the server and improve response times.",
            },
            {
                type: "code",
                content:
                    "import { useState, useEffect } from 'react';\nimport { ServerComponent } from 'next/server';\n\nconst MyServerComponent = () => {\n  const [data, setData] = useState([]);\n  useEffect(() => {\n    fetch('/api/data')\n      .then(response => response.json())\n      .then(data => setData(data));\n  }, []);\n  return (\n    <div>\n      {data.map(item => (\n        <div key={item.id}>{item.name}</div>\n      ))}\n    </div>\n  );\n};\n\nexport default MyServerComponent;",
                language: "typescript",
            },
            {
                type: "heading",
                content: "Best Practices",
            },
            {
                type: "list",
                content:
                    "To get the most out of React Server Components, follow these best practices:",
                items: [
                    "Use a modular architecture to organize your code and simplify maintenance",
                    "Manage server-side state using a library like Redux or MobX",
                    "Optimize performance by leveraging caching mechanisms and minimizing database queries",
                    "Use a framework like Next.js to simplify the development process",
                    "Implement error handling and logging mechanisms to ensure application reliability",
                ],
            },
            {
                type: "heading",
                content: "Common Mistakes",
            },
            {
                type: "list",
                content:
                    "When working with React Server Components, avoid these common mistakes:",
                items: [
                    "Not handling server-side errors properly",
                    "Failing to optimize performance",
                    "Not using a modular architecture",
                    "Not managing server-side state effectively",
                    "Not implementing caching mechanisms",
                ],
            },
            {
                type: "heading",
                content: "Performance Considerations",
            },
            {
                type: "paragraph",
                content:
                    "When using React Server Components, it's essential to consider performance optimization techniques, such as caching, code splitting, and minimizing database queries. By leveraging these techniques, developers can significantly improve the performance of their applications and provide a better user experience.",
            },
            {
                type: "heading",
                content: "Real World Use Cases",
            },
            {
                type: "paragraph",
                content:
                    "React Server Components have numerous real-world use cases, including building high-performance e-commerce applications, creating scalable blogging platforms, and developing complex enterprise software. By following the best practices outlined in this article, developers can create fast, secure, and scalable applications that meet the needs of their users.",
            },
            {
                type: "heading",
                content: "Conclusion",
            },
            {
                type: "paragraph",
                content:
                    "In conclusion, React Server Components offer a powerful way to build high-performance, scalable, and secure applications. By following the best practices outlined in this article, developers can create fast, reliable, and maintainable applications that meet the needs of their users. Whether you're building a simple blog or a complex enterprise software, React Server Components are an essential tool in your toolkit.",
            },
        ],
    },
    {
        slug: "react-best-practices-2026",
        title: "React.js Best Practices in 2026 — Architecture, Performance & Patterns",
        description:
            "A comprehensive guide to React.js best practices in 2026 covering component architecture, performance optimization, state management, TypeScript patterns, and production-ready code from real projects at AlgoBiz, Talrop & Tegain.",
        date: "2026-06-24",
        readTime: "12 min read",
        tags: [
            "React",
            "TypeScript",
            "Performance",
            "Architecture",
            "Best Practices",
        ],
        keywords: [
            "React best practices 2026",
            "React.js best practices",
            "React performance optimization",
            "React architecture patterns",
            "React TypeScript",
            "React component design",
            "React state management 2026",
            "React developer India",
            "Abhijith P A React",
            "AlgoBiz React development",
        ],
        content: [
            {
                type: "paragraph",
                content:
                    "After 3+ years of shipping React applications at AlgoBiz, Talrop, Steyp, and Tegain, I've developed strong opinions on what actually matters in production React codebases. This isn't a beginner guide — it's the patterns and practices that have saved me from bugs, performance issues, and maintenance nightmares across 20+ production builds.",
            },
            {
                type: "heading",
                content: "1. Component Architecture That Scales",
            },
            {
                type: "paragraph",
                content:
                    "The single biggest mistake I see in React projects is treating components as page-level monoliths. Every component should have a single responsibility. I structure projects into three layers: UI primitives (buttons, inputs, cards), composed components (forms, data tables, modals), and feature modules (complete business logic units). This pattern scaled beautifully across the Talrop ERP with its 15+ modules.",
            },
            {
                type: "code",
                language: "typescript",
                content:
                    "// Feature module pattern\\n// features/inventory/\\n//   components/  — UI specific to this feature\\n//   hooks/       — Business logic hooks\\n//   types.ts     — Feature-scoped types\\n//   index.ts     — Public API\\n\\n// Only export what other features need\\nexport { InventoryDashboard } from './components/InventoryDashboard';\\nexport { useInventoryStats } from './hooks/useInventoryStats';\\nexport type { InventoryItem } from './types';",
            },
            {
                type: "heading",
                content: "2. TypeScript — Strict Mode or Nothing",
            },
            {
                type: "paragraph",
                content:
                    "In 2026, there's no excuse for loose TypeScript. Enable strict mode, avoid 'any' like the plague, and use discriminated unions for state machines. At AlgoBiz, we enforce this with ESLint rules that flag any type assertions. The upfront investment pays for itself within weeks when refactoring complex ERP modules.",
            },
            {
                type: "code",
                language: "typescript",
                content:
                    "// Discriminated union for async state\\ntype AsyncState<T> =\\n  | { status: 'idle' }\\n  | { status: 'loading' }\\n  | { status: 'success'; data: T }\\n  | { status: 'error'; error: Error };\\n\\n// Usage — TypeScript narrows automatically\\nfunction renderState<T>(state: AsyncState<T>) {\\n  switch (state.status) {\\n    case 'loading': return <Spinner />;\\n    case 'error': return <ErrorCard error={state.error} />;\\n    case 'success': return <DataView data={state.data} />;\\n    default: return null;\\n  }\\n}",
            },
            {
                type: "heading",
                content: "3. State Management — Keep It Simple",
            },
            {
                type: "paragraph",
                content:
                    "Redux is overkill for 90% of applications in 2026. Here's my decision tree: Local UI state → useState. Shared component state → Context or Zustand. Server state → TanStack Query (React Query). Global app state → Zustand with slices. At Talrop ERP, each module manages its own Zustand store independently. No god-store, no prop drilling across modules.",
            },
            {
                type: "heading",
                content: "4. Performance — Measure Before Optimizing",
            },
            {
                type: "list",
                content:
                    "Performance patterns that actually matter in production:",
                items: [
                    "React.memo only when you've profiled and confirmed unnecessary re-renders",
                    "useMemo for expensive computations (not for object references)",
                    "Code splitting with dynamic imports at the route and feature level",
                    "Virtual scrolling for lists with 100+ items (we use Tanstack Virtual)",
                    "Image optimization with next/image — lazy loading, proper sizes attribute",
                    "Debounce search inputs and API calls (300ms is the sweet spot)",
                ],
            },
            {
                type: "heading",
                content: "5. Server Components & Client Boundaries",
            },
            {
                type: "paragraph",
                content:
                    "In Next.js App Router, the biggest win is keeping most components as Server Components. Only add 'use client' when you need interactivity, browser APIs, or React hooks. I draw the boundary at the leaf level — an interactive button inside a server-rendered page, not the entire page as a client component.",
            },
            { type: "heading", content: "6. Error Boundaries & Resilience" },
            {
                type: "paragraph",
                content:
                    "Every production app needs error boundaries at the feature level. If the inventory module crashes, the HR module should still work. We wrap each major feature in an ErrorBoundary with a fallback UI and error reporting. This pattern saved us multiple times during the Talrop ERP rollout.",
            },
            { type: "heading", content: "7. Testing Strategy" },
            {
                type: "paragraph",
                content:
                    "Testing philosophy: integration tests > unit tests > E2E tests. Test behavior, not implementation. Use React Testing Library with user-event. Mock at the network boundary (MSW), not at the component level. For critical flows (payments, auth), add Playwright E2E tests. Skip snapshot tests — they create noise without catching real bugs.",
            },
            { type: "heading", content: "Key Takeaways" },
            {
                type: "list",
                content: "",
                items: [
                    "Structure by feature, not by file type",
                    "TypeScript strict mode is non-negotiable in 2026",
                    "Choose the right state tool for each layer",
                    "Profile before optimizing — React DevTools Profiler is your friend",
                    "Server Components by default, client only when needed",
                    "Error boundaries at feature boundaries",
                    "Test behavior, not implementation details",
                ],
            },
        ],
    },
    {
        slug: "how-i-built-finwage-payroll-hrms",
        title: "How I Built Finwage — Payroll & HRMS with React and Django",
        description:
            "A deep dive into building Finwage, a payroll management system and HRMS using React, Django, PostgreSQL & AWS. Architecture decisions, salary calculations, attendance tracking, and lessons learned at AlgoBiz.",
        date: "2026-06-25",
        readTime: "15 min read",
        tags: [
            "React",
            "Django",
            "PostgreSQL",
            "ERP",
            "HRMS",
            "Payroll",
            "AlgoBiz",
        ],
        keywords: [
            "Finwage",
            "Finwage payroll",
            "HRMS system",
            "payroll management system",
            "attendance management system",
            "build HRMS with React",
            "Django payroll system",
            "ERP development",
            "AlgoBiz Finwage",
            "Abhijith P A Finwage",
            "React Django ERP",
            "HRMS Kerala",
        ],
        content: [
            {
                type: "paragraph",
                content:
                    "Finwage started as a simple payroll calculator and grew into a full HRMS handling attendance, leave management, salary processing, tax deductions, and employee self-service for multiple organizations. Here's how I built it at AlgoBiz using React, Django, PostgreSQL, and AWS.",
            },
            { type: "heading", content: "The Problem" },
            {
                type: "paragraph",
                content:
                    "Most businesses in Kerala still manage payroll on spreadsheets. They track attendance manually, calculate salaries by hand, and forget about tax compliance until the deadline. We needed a system that handles the entire lifecycle: attendance in → salary calculation → tax deduction → payslip generation → bank disbursement file.",
            },
            { type: "heading", content: "Architecture Overview" },
            {
                type: "paragraph",
                content:
                    "Finwage is a multi-tenant SaaS — each company gets isolated data with shared infrastructure. The frontend is React with TypeScript and Tailwind CSS for the dashboard. The backend is Django REST Framework with PostgreSQL for transactional data. AWS handles hosting (EC2), file storage (S3 for payslips), and email notifications (SES).",
            },
            {
                type: "code",
                language: "text",
                content:
                    "Frontend: React + TypeScript + Tailwind CSS\\nBackend: Django REST Framework + Python 3.12\\nDatabase: PostgreSQL 16 (multi-tenant with schema isolation)\\nQueue: Celery + Redis (for payroll batch processing)\\nStorage: AWS S3 (payslips, documents)\\nHosting: AWS EC2 + RDS + CloudFront\\nCI/CD: GitHub Actions → Docker → ECR → ECS",
            },
            { type: "heading", content: "Attendance Management" },
            {
                type: "paragraph",
                content:
                    "Attendance is the foundation of payroll. Finwage supports multiple clock-in methods: biometric device integration (via API), mobile GPS check-in, and manual entry with approval workflows. The tricky part is handling shift patterns — rotational shifts, split shifts, overtime calculation, and half-day logic. I modeled shifts as PostgreSQL JSONB columns with validation at the Django serializer level.",
            },
            { type: "heading", content: "Salary Calculation Engine" },
            {
                type: "paragraph",
                content:
                    "Salary calculation looks simple until you account for Indian payroll complexity: PF (Provident Fund), ESI (Employee State Insurance), Professional Tax (state-specific), TDS (Tax Deducted at Source), LOP (Loss of Pay), overtime, bonuses, and reimbursements. I built a rule engine where each component is a Python class with a calculate() method. Components can depend on other components (PF depends on basic salary), so I use topological sorting to determine calculation order.",
            },
            {
                type: "code",
                language: "python",
                content:
                    "class SalaryComponent(ABC):\\n    @abstractmethod\\n    def calculate(self, context: PayrollContext) -> Decimal:\\n        pass\\n\\nclass BasicSalary(SalaryComponent):\\n    def calculate(self, ctx: PayrollContext) -> Decimal:\\n        working_days = ctx.attendance.working_days\\n        total_days = ctx.period.total_days\\n        return (ctx.employee.ctc_basic * working_days) / total_days\\n\\nclass PFContribution(SalaryComponent):\\n    depends_on = ['basic_salary']\\n    \\n    def calculate(self, ctx: PayrollContext) -> Decimal:\\n        basic = ctx.computed['basic_salary']\\n        return min(basic * Decimal('0.12'), Decimal('1800'))",
            },
            { type: "heading", content: "Payslip Generation" },
            {
                type: "paragraph",
                content:
                    "Payslips are generated as PDFs using WeasyPrint (HTML/CSS to PDF) with Jinja2 templates. Each company can customize their payslip template — logo, layout, which components to show. The generation runs as a Celery batch job because processing 500+ employees' payslips synchronously would timeout. We generate them, upload to S3, and email links to employees.",
            },
            { type: "heading", content: "Multi-Tenant Architecture" },
            {
                type: "paragraph",
                content:
                    "Multi-tenancy in Django is tricky. I chose PostgreSQL schema-based isolation using django-tenants. Each company gets its own schema with identical table structures. Shared data (plans, billing) lives in the public schema. This gives us true data isolation (a bug in one tenant's query can never leak another tenant's data) while keeping infrastructure costs manageable.",
            },
            { type: "heading", content: "Frontend Dashboard" },
            {
                type: "paragraph",
                content:
                    "The React dashboard is where HR managers spend their time. It shows attendance summaries, pending approvals, salary status, and compliance alerts. I used Recharts for salary trend visualizations and TanStack Table for the employee data grid (sorting, filtering, pagination on 1000+ rows). The calendar view for attendance uses a custom component built with date-fns.",
            },
            { type: "heading", content: "Lessons Learned" },
            {
                type: "list",
                content: "",
                items: [
                    "Indian payroll has edge cases that no documentation covers — you learn by getting it wrong",
                    "Multi-tenant schema isolation is worth the complexity for financial data",
                    "Batch processing with Celery prevents timeout issues on payroll runs",
                    "Always store monetary values as Decimal, never float",
                    "Generate audit logs for every salary calculation — compliance requires it",
                    "PDF generation is slow — always do it async and cache the result",
                    "Test with real payroll data (anonymized) — synthetic data misses edge cases",
                ],
            },
            { type: "heading", content: "What's Next" },
            {
                type: "paragraph",
                content:
                    "We're adding AI-powered anomaly detection for attendance (flagging unusual patterns), automated tax filing integration, and a mobile app for employee self-service. Finwage started as a side project and now handles real payroll for multiple companies — the most rewarding kind of software to build.",
            },
        ],
    },
];

export function getBlogPost(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
    return blogPosts.map((post) => post.slug);
}
