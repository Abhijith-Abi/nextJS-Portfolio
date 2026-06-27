/**
 * Auto Blog Generator using Groq API
 *
 * Generates a blog post and automatically adds it to:
 *   - lib/blog.ts (blog data)
 *   - app/sitemap.ts (SEO sitemap)
 *
 * Usage:
 *   npm run blog:generate                          → random trending topic
 *   npm run blog:generate -- --topic "Your Topic"  → specific topic
 *   npm run blog:topics                            → list 20 topic ideas
 */

import * as fs from "fs";
import * as path from "path";

const GROQ_API_KEY = process.env.GROQ_API_KEY || "";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";

const ROOT = path.resolve(__dirname, "..");
const BLOG_FILE = path.join(ROOT, "lib", "blog.ts");
const SITEMAP_FILE = path.join(ROOT, "app", "sitemap.ts");

interface BlogOutput {
    title: string;
    description: string;
    slug: string;
    keywords: string[];
    tags: string[];
    readTime: string;
    imagePrompt: string;
    content: Array<{
        type: "paragraph" | "heading" | "list" | "code";
        content: string;
        items?: string[];
        language?: string;
    }>;
}

const SYSTEM_PROMPT = `You are a Senior Software Engineer, Technical Writer, SEO Specialist, and Developer Advocate.

Generate a high-quality technical blog article.

Target Audience: React Developers, Next.js Developers, Frontend Engineers, Full Stack Developers, Django Developers, AWS Engineers, SaaS Founders, AI Developers.

Blog Structure:
- Introduction (problem + hook)
- Problem Statement
- Solution with explanation
- Code examples where relevant
- Best Practices (as list)
- Common Mistakes (as list)
- Performance Considerations
- Real World Use Cases
- Conclusion

Requirements:
- 1500-2500 words equivalent content
- Human readable, engaging tone
- Google SEO optimized
- AI Search optimized (ChatGPT, Gemini, Perplexity)
- Include semantic and long-tail keywords naturally
- Use latest 2026 industry practices
- Written from the perspective of Abhijith P A, Full Stack Developer at Algobiz, ex-Talrop & Steyp
- slug must be lowercase, hyphenated, URL-safe

Return ONLY valid JSON matching this exact schema:
{
  "title": "SEO title (50-60 chars)",
  "description": "Meta description (140-160 chars)",
  "slug": "url-friendly-slug",
  "keywords": ["keyword1", "keyword2", "keyword3", "keyword4", "keyword5"],
  "tags": ["Tag1", "Tag2", "Tag3", "Tag4"],
  "readTime": "X min read",
  "imagePrompt": "A modern, premium tech blog cover image prompt. Ultra modern, dark theme, glassmorphism, neon, developer workspace, no text, 16:9, Vercel/Linear/Stripe inspired.",
  "content": [
    { "type": "paragraph", "content": "..." },
    { "type": "heading", "content": "..." },
    { "type": "list", "content": "optional intro text", "items": ["item1", "item2"] },
    { "type": "code", "content": "code here", "language": "typescript" }
  ]
}`;

async function callGroq(
    messages: Array<{ role: string; content: string }>,
): Promise<string> {
    const response = await fetch(GROQ_URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${GROQ_API_KEY}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages,
            temperature: 0.7,
            max_tokens: 4096,
            response_format: { type: "json_object" },
        }),
    });

    if (!response.ok) {
        const err = await response.text();
        throw new Error(`Groq API error: ${response.status} — ${err}`);
    }

    const data = await response.json();
    return data.choices[0].message.content;
}

async function generateBlog(topic?: string): Promise<BlogOutput> {
    const userPrompt = topic
        ? `Generate a comprehensive technical blog article about: "${topic}"`
        : `Generate a trending technical blog article. Pick from: React Server Components, Next.js App Router patterns, TypeScript 5.x features, AI agents with LangChain, Groq API usage, Vercel Edge Functions, AWS Lambda optimization, Django REST best practices, SaaS billing with Stripe, Agentic AI patterns, MCP servers, Tailwind CSS v4. Choose something with high SEO potential and developer interest in 2026.`;

    const content = await callGroq([
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: userPrompt },
    ]);

    return JSON.parse(content) as BlogOutput;
}

function addToBlogData(blog: BlogOutput): void {
    const blogData = fs.readFileSync(BLOG_FILE, "utf-8");

    // Build the new entry string
    const today = new Date().toISOString().split("T")[0];
    const entry = `    {
        slug: "${blog.slug}",
        title: ${JSON.stringify(blog.title)},
        description: ${JSON.stringify(blog.description)},
        date: "${today}",
        readTime: "${blog.readTime}",
        tags: ${JSON.stringify(blog.tags)},
        keywords: ${JSON.stringify(blog.keywords)},
        imagePrompt: ${JSON.stringify(blog.imagePrompt)},
        content: ${JSON.stringify(blog.content, null, 12)
            .split("\n")
            .map((line, i) => (i === 0 ? line : "        " + line))
            .join("\n")},
    }`;

    // Insert before the closing bracket of blogPosts array
    const insertPoint = blogData.lastIndexOf("];");
    if (insertPoint === -1) {
        throw new Error("Could not find blogPosts array end in lib/blog.ts");
    }

    const newBlogData =
        blogData.slice(0, insertPoint) +
        entry +
        ",\n" +
        blogData.slice(insertPoint);

    fs.writeFileSync(BLOG_FILE, newBlogData, "utf-8");
    console.log("✅ Added to lib/blog.ts");
}

function addToSitemap(slug: string): void {
    const sitemapData = fs.readFileSync(SITEMAP_FILE, "utf-8");

    const newEntry = `        {
            url: \`\${baseUrl}/blog/${slug}\`,
            lastModified: new Date("${new Date().toISOString().split("T")[0]}"),
            changeFrequency: "yearly",
            priority: 0.7,
        },`;

    // Insert before the last closing bracket of the return array
    const insertPoint = sitemapData.lastIndexOf("    ];");
    if (insertPoint === -1) {
        throw new Error("Could not find sitemap array end in app/sitemap.ts");
    }

    const newSitemapData =
        sitemapData.slice(0, insertPoint) +
        newEntry +
        "\n" +
        sitemapData.slice(insertPoint);

    fs.writeFileSync(SITEMAP_FILE, newSitemapData, "utf-8");
    console.log("✅ Added to app/sitemap.ts");
}

async function generateTopics(): Promise<void> {
    console.log("📋 Generating 20 trending blog topics...\n");

    const content = await callGroq([
        {
            role: "system",
            content:
                'Generate 20 trending blog topics for developers in 2026. Return JSON: { "topics": [{ "title": "", "difficulty": "beginner|intermediate|advanced", "seoPotential": "high|medium", "keywords": [] }] }',
        },
        {
            role: "user",
            content:
                "Generate 20 trending developer blog topics for 2026. Categories: React.js, Next.js, Tailwind CSS, TypeScript, AI, Groq, OpenAI, Vercel, AWS, Django, PostgreSQL, SaaS, Agentic AI, MCP, Full Stack Development.",
        },
    ]);

    const data = JSON.parse(content);
    const topics = data.topics || data;

    console.log("🔥 Trending Blog Topics for 2026:\n");
    (Array.isArray(topics) ? topics : []).forEach((t: any, i: number) => {
        console.log(
            `  ${String(i + 1).padStart(2, "0")}. [${t.difficulty}] ${t.title}`,
        );
        console.log(
            `      SEO: ${t.seoPotential} | Keywords: ${t.keywords?.join(", ")}`,
        );
        console.log("");
    });

    console.log('\n💡 Usage: npm run blog:generate -- --topic "Topic Name"');
}

async function main() {
    const args = process.argv.slice(2);

    if (args.includes("--topics")) {
        await generateTopics();
        return;
    }

    const topicIndex = args.indexOf("--topic");
    const topic = topicIndex !== -1 ? args[topicIndex + 1] : undefined;

    console.log("\n🚀 Auto-generating blog post...");
    if (topic) console.log(`📝 Topic: ${topic}`);
    console.log("");

    try {
        const blog = await generateBlog(topic);

        console.log(`📄 Title: ${blog.title}`);
        console.log(`🔗 Slug: /blog/${blog.slug}`);
        console.log(`🏷️  Tags: ${blog.tags.join(", ")}`);
        console.log(`⏱️  Read Time: ${blog.readTime}`);
        console.log(`🖼️  Image Prompt: ${blog.imagePrompt.slice(0, 80)}...`);
        console.log("");

        // Auto-write to files
        addToBlogData(blog);
        addToSitemap(blog.slug);

        console.log("");
        console.log("🎉 Blog post generated and added automatically!");
        console.log("");
        console.log("📌 Next steps:");
        console.log("   1. npm run build   (verify it builds)");
        console.log("   2. Deploy to see the new post live at:");
        console.log(`      https://abisolutions.online/blog/${blog.slug}`);
        console.log("");
    } catch (error) {
        console.error("❌ Error:", error);
        process.exit(1);
    }
}

main();
