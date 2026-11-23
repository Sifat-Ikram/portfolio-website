import { FaReact, FaNodeJs, FaVuejs, FaJs, FaPython } from "react-icons/fa";

import {
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiMui,
    SiShadcnui,
    SiFramer,
    SiRedux,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiFirebase,
    SiZod,
    SiReactquery,
    SiHtml5,
    SiGit,
    SiGithub,
    SiVercel,
    SiDocker,
    SiGithubactions,
    SiNestjs,
    SiPrisma,
    SiOpenrouter,
} from "react-icons/si";

import { FiServer, FiLock, FiCpu, FiGitMerge } from "react-icons/fi";

import { IoLogoCss3 } from "react-icons/io5";
import { AiFillOpenAI } from "react-icons/ai";

export const skillGroups = [
    {
        id: "frontend",
        title: "Frontend",
        note: "Building responsive, interactive user interfaces.",
        items: [
            { name: "HTML5", icon: SiHtml5 },
            { name: "CSS3", icon: IoLogoCss3 },
            { name: "JavaScript", icon: FaJs },
            { name: "React", icon: FaReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "Vue.js", icon: FaVuejs },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Material UI", icon: SiMui },
            { name: "shadcn/ui", icon: SiShadcnui },
            { name: "Framer Motion", icon: SiFramer },
            { name: "Redux", icon: SiRedux },
            { name: "Responsive Design", icon: FaReact },
            { name: "REST API Integration", icon: SiReactquery },
        ],
    },

    {
        id: "backend",
        title: "Backend",
        note: "Building APIs, authentication, and server-side functionality.",
        items: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Nest.js", icon: SiNestjs },
            { name: "Express.js", icon: SiExpress },
            { name: "REST APIs", icon: FiServer },
            { name: "JWT Auth", icon: FiLock },
            { name: "Zod", icon: SiZod },
        ],
    },

    {
        id: "database",
        title: "Database",
        note: "Working with databases and application data.",
        items: [
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Prisma", icon: SiPrisma },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Firebase", icon: SiFirebase },
        ],
    },
    {
        id: "ai",
        title: "AI & Integration",
        note: "Integrating AI models and building AI-powered features.",
        items: [
            { name: "AI Agents", icon: AiFillOpenAI },
            { name: "OpenRouter AI", icon: SiOpenrouter },
            { name: "LLM API Integration", icon: FiCpu },
        ],
    },

    {
        id: "devops",
        title: "DevOps & Tools",
        note: "Version control, containerization, CI/CD, and deployment.",
        items: [
            { name: "Git", icon: SiGit },
            { name: "GitHub", icon: SiGithub },
            { name: "Docker", icon: SiDocker },
            { name: "GitHub Actions", icon: SiGithubactions },
            { name: "CI/CD", icon: FiGitMerge },
            { name: "Vercel", icon: SiVercel },
        ],
    },
];
