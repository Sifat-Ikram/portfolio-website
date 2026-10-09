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
} from "react-icons/si";

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
            { name: "AI Agents", icon: AiFillOpenAI },
        ],
    },

    {
        id: "backend",
        title: "Backend",
        note: "Building APIs, authentication, and server-side functionality.",
        items: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express.js", icon: SiExpress },
            { name: "Zod", icon: SiZod },
        ],
    },

    {
        id: "database",
        title: "Database",
        note: "Working with databases and application data.",
        items: [
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Firebase", icon: SiFirebase },
        ],
    },
];
