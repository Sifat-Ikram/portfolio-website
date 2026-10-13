import { FiLayout, FiServer, FiLayers } from "react-icons/fi";

// All About-section content lives here. Edit freely.
export const about = {
    // Put your photo at: public/images/profile.jpg
    photo: "https://i.postimg.cc/sgScfrV5/MY-IMG-20220306-201333.jpg",
    location: "Dhaka, Bangladesh",

    title: "Engineer first, with an eye for design.",

    paragraphs: [
        "I'm a Frontend Engineer with 2 years of professional experience building responsive, user-focused web applications with React, Next.js, and TypeScript. My frontend work is backed by professional-level backend skills: I design REST APIs, implement JWT authentication, and model data in MongoDB and PostgreSQL, so I understand how an application works end to end.",
        "I focus on writing maintainable code, building reusable components, and creating smooth user experiences. Because I know both sides of an API, I collaborate easily with backend teams and can take a feature from the UI all the way to the database when a project needs it.",
    ],

    goal: "Looking to build my career in frontend engineering, bringing strong full-stack expertise to deliver complete, high-quality products.",
    
    focus: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "AI Agents"
    ],

    // Stat cards
    stats: [
        {
            value: 2,
            suffix: "+",
            label: "Years of professional experience",
        },
        {
            // CHANGED: was "MERN"
            value: "Full-Stack",
            label: "Frontend, APIs and databases",
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
        company: "Iinteca", // check the spelling: Iinteca or Linteca?
        role: "Frontend Engineer",
        since: "Oct 2025",
    },
};