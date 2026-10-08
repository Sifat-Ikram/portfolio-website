import { FiLayout, FiServer, FiLayers } from "react-icons/fi";

// All About-section content lives here. Edit freely.
export const about = {
    // put your photo at: public/images/profile.jpg
    photo: "/images/profile.jpg",
    location: "Dhaka, Bangladesh",

    title: "Engineer first, with an eye for design.",
    paragraphs: [
        "I'm a frontend engineer with two years of professional experience building responsive, maintainable web applications with React and Next.js. I work closely with designers and backend teams to turn ideas into production-ready interfaces, from reusable components to REST API and authentication flows.",
        "Outside of work I build full-stack projects on the MERN stack, covering database design, JWT authentication and deployment, so I understand what happens on both sides of an API call. I care about clean code, interfaces that feel effortless, and performance users can feel.",
    ],
    focus: ["React", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"],

    // 3 stat cards. A number animates (count-up), a string is shown as it is.
    stats: [
        { value: 2, suffix: "+", label: "Years of professional experience" },
        { value: 5, suffix: "", label: "Projects built end to end" }, // TODO: set your real number
        { value: "MERN", label: "Full-stack capable" },
    ],

    services: [
        {
            icon: FiLayout,
            title: "Frontend development",
            text: "Fast, responsive interfaces with React and Next.js.",
        },
        {
            icon: FiServer,
            title: "Backend development",
            text: "REST APIs with Node.js, Express and JWT auth.",
        },
        {
            icon: FiLayers,
            title: "Full-stack builds",
            text: "From database design to deployment.",
        },
    ],

    now: {
        company: "Linteca",
        role: "Junior Frontend Developer",
        since: "Oct 2025",
    },
};