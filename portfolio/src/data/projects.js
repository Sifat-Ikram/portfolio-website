// Screenshots go in: public/images/projects/<name>.png
// If an image is missing, a gradient card with the project name is shown.
// If `live` or `github` is null, that button is hidden.

export const featuredProject = {
    title: "DocuMind AI",
    tagline: "Full-Stack Document Intelligence Platform",
    description:
        "A full-stack platform where you upload PDF, DOCX or TXT files and let AI summarize them, extract key points, answer questions, translate, and chat with the document. Includes versioning, sharing, collections, trash and restore, an AI document generator, and a full admin panel with analytics and monitoring.",

    image: "https://i.postimg.cc/PrZy3wWd/23-11-2026-10-46-25.png",

    challenge:
        "Long documents are slow to read and hard to search, and AI features need secure accounts, usage limits, and a way for admins to monitor cost and failures.",
    solution:
        "Built a Next.js and NestJS platform that extracts and chunks document text for AI analysis, streams chat answers over SSE, and protects accounts with JWT access tokens plus rotating refresh tokens with reuse detection. Added role-based admin guards, rate limiting, and scheduled cleanup.",
    result:
        "A complete document workflow covering upload, AI analysis, chat, versions, sharing and an admin dashboard with AI usage and system monitoring.",

    features: [
        "AI summaries, key points, Q&A, translation and action items",
        "Chat with a document using streamed (SSE) responses",
        "JWT auth with rotating refresh tokens and reuse detection",
        "Version history with diff, sharing with roles, collections, and trash",
        "Admin panel for users, documents, AI usage, analytics and monitoring",
    ],

    tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "JWT",
        "OpenRouter AI",
        "Cloudinary",
    ],

    live: "https://documind-ai-pi-nine.vercel.app/",
    github: "https://github.com/Sifat-Ikram/documind-ai",
};

export const projects = [
    {
        title: "Play House",
        description:
            "A full-stack toy e-commerce platform featuring AI-powered product discovery, advanced filtering, persistent carts, secure authentication, checkout, order management, wholesale pricing, and an admin dashboard.",

        image: "https://i.postimg.cc/g2DCD559/playhouse.jpg",

        challenge:
            "Finding the right toy in a large catalog is slow, and one store had to serve both retail and wholesale buyers with different pricing.",
        solution:
            "Built an AI assistant that turns natural-language requests into product searches, added advanced filtering and wholesale pricing, and secured the app with JWT access and refresh tokens.",
        result: "A complete deployed store covering browsing, cart, checkout, order management and an admin dashboard.",

        tech: [
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "JWT",
            "OpenRouter AI",
        ],

        live: "https://play-house-phi.vercel.app/",
        github: "https://github.com/Sifat-Ikram/play-house",
    },
    {
        title: "SaaS Service Management Platform",
        description:
            "A multi-module SaaS service management platform developed during my professional experience at Iinteca. I independently handled the frontend development from scratch, collaborating closely with a UI/UX designer to build a comprehensive dashboard and management portals.",

        image: "https://i.postimg.cc/9M9MjsrC/Screenshot-2026-11-06-040337.png",
        fit: "contain",
        challenge:
            "Service teams needed one place to manage clients, organizations and daily operations across several modules, with a clear and consistent interface.",
        solution:
            "Built the entire frontend from scratch alongside a UI/UX designer, using reusable components, React Query for cached data fetching, and Framer Motion for smooth interactions.",
        result: "A comprehensive dashboard and management portals, deployed and live.",

        tech: [
            "Next.js",
            "React",
            "JavaScript",
            "Tailwind CSS",
            "React Query",
            "Framer Motion",
        ],

        live: "https://service-management-rho.vercel.app/dashboard/organization/clientDetails",
        github: null, // private project, so the GitHub button is hidden
    },
];