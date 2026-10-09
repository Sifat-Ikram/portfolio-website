import { FaReact, FaNodeJs, FaVuejs, FaJs } from "react-icons/fa";
import {
    SiTypescript,
    SiNextdotjs,
    SiTailwindcss,
    SiMui,
    SiShadcnui, // if your react-icons version lacks this, swap with SiRadixui
    SiFramer,
    SiRedux,
    SiExpress,
    SiMongodb,
    SiPostgresql,
    SiFirebase,
} from "react-icons/si";

export const skillGroups = [
    {
        id: "frontend",
        title: "Frontend",
        note: "What I build interfaces with, every day.",
        items: [
            { name: "JavaScript", icon: FaJs },
            { name: "TypeScript", icon: SiTypescript },
            { name: "React", icon: FaReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Vue.js", icon: FaVuejs },
            { name: "Tailwind CSS", icon: SiTailwindcss },
            { name: "Material UI", icon: SiMui },
            { name: "Shadcn UI", icon: SiShadcnui },
            { name: "Framer Motion", icon: SiFramer },
            { name: "Redux", icon: SiRedux },
        ],
    },
    {
        id: "backend",
        title: "Backend",
        note: "APIs, auth and server logic.",
        items: [
            { name: "Node.js", icon: FaNodeJs },
            { name: "Express.js", icon: SiExpress },
        ],
    },
    {
        id: "database",
        title: "Database",
        note: "Where the data lives.",
        items: [
            { name: "MongoDB", icon: SiMongodb },
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "Firebase", icon: SiFirebase },
        ],
    },
];