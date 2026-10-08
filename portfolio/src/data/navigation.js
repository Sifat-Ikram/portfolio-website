import {
    FiHome,
    FiUser,
    FiBriefcase,
    FiFolder,
    FiCpu,
    FiBookOpen,
    FiMail,
} from "react-icons/fi";

// Every `id` must match a <section id="..."> on the page
export const sections = [
    { id: "home", label: "Home", icon: FiHome },
    { id: "about", label: "About", icon: FiUser },
    { id: "experience", label: "Experience", icon: FiBriefcase },
    { id: "projects", label: "Projects", icon: FiFolder },
    { id: "skills", label: "Skills", icon: FiCpu },
    { id: "education", label: "Education", icon: FiBookOpen },
    { id: "contact", label: "Contact", icon: FiMail },
];

export const sectionIds = sections.map((s) => s.id);