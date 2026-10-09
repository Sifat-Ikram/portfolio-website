// Screenshots go in: public/images/projects/<name>.png (16:10 looks best).
// If an image is missing, a gradient card with the project name is shown.
// If `live` or `github` is null, that button is hidden.

export const featuredProject = {
    title: "Play House",
    tagline: "A full-stack toy store with an AI shopping assistant",
    description:
        "An e-commerce platform for toys and games with a smart shopping assistant, flexible product discovery, and separate retail and wholesale buying.",
    image: "/images/projects/play-house.png",
    features: [
        "AI shopping assistant",
        "Shop by category, brand, interest and occasion",
        "Authentication (login and register)",
        "Wholesale ordering",
        "Combo offers and deals",
        "Responsive, mobile-first UI",
    ],
    tech: ["Next.js", "React"], // TODO: add the rest of your stack (Tailwind, Node.js, MongoDB, ...)
    live: "https://play-house-phi.vercel.app/",
    github: null, // TODO: add repo link
};

export const projects = [
    {
        title: "Spark Gear",
        description:
            "Gadgets storefront with search, category browsing and a bold, conversion-focused landing page.",
        image: "/images/projects/spark-gear.png",
        tech: ["React", "Tailwind CSS"], // TODO
        live: null, // TODO
        github: null, // TODO
    },
    {
        title: "ShopSphere",
        description:
            "Modern e-commerce storefront with featured categories, new arrivals and a clean shopping flow.",
        image: "/images/projects/shopsphere.png",
        tech: ["React", "Tailwind CSS"], // TODO
        live: null, // TODO
        github: null, // TODO
    },
    {
        title: "TasteTrail",
        description:
            "Restaurant website with menu browsing, promo offers and a warm, appetising visual style.",
        image: "/images/projects/tastetrail.png",
        tech: ["React", "Tailwind CSS"], // TODO
        live: null, // TODO
        github: null, // TODO
    },
    {
        title: "Linteca",
        description:
            "Authentication and onboarding screens with testimonials for a SaaS platform (company work).",
        image: "/images/projects/linteca.png",
        tech: ["React", "Tailwind CSS"], // TODO
        live: null, // TODO
        github: null,
    },
];