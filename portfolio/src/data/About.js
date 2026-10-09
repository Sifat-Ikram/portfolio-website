
import { FiLayout, FiServer, FiLayers } from "react-icons/fi";

// All About-section content lives here. Edit freely.
export const about = {
    // Put your photo at: public/images/profile.jpg
    photo: "/images/profile.jpg",
    location: "Dhaka, Bangladesh",

    title: "Engineer first, with an eye for design.",

    paragraphs: [
        "I'm a Frontend Engineer with nearly 2 years of professional experience building responsive, user-focused web applications with React, Next.js, and TypeScript. Beyond crafting interfaces, I work on application features including REST API integration, authentication, state management, and backend-connected workflows. I focus on writing maintainable code, building reusable components, and creating smooth user experiences. I'm also exploring AI-powered applications and AI agent workflows, combining my frontend expertise with my growing interest in AI engineering."
    ],

    focus: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "AI Agents"
    ],

    // Three stat cards
    stats: [
        {
            value: 2,
            suffix: "+",
            label: "Years of professional experience",
        },
        {
            value: "MERN",
            label: "Full-stack capable",
        },
    ],

    services: [
        {
            icon: FiLayout,
            title: "Frontend development",
            text: "Responsive, user-focused interfaces with React, Next.js, and reusable components.",
        },
        {
            icon: FiServer,
            title: "Backend development",
            text: "REST APIs, authentication, and backend functionality with Node.js and Express.",
        },
        {
            icon: FiLayers,
            title: "Full-stack builds",
            text: "Connecting frontend interfaces, APIs, and databases to build complete application features.",
        },
    ],

    now: {
        company: "Iinteca",
        role: "Frontend Engineer",
        since: "Oct 2025",
    },
};