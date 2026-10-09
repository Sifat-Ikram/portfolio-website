
// Screenshots go in: public/images/projects/<name>.png
// If an image is missing, a gradient card with the project name is shown.
// If `live` or `github` is null, that button is hidden.

export const featuredProject = {
    title: "Play House",
    tagline: "Full-Stack Toy Store with an AI Shopping Assistant",
    description:
        "A full-stack toy e-commerce platform featuring AI-powered product discovery, advanced filtering, persistent carts, secure authentication, checkout, order management, wholesale pricing, and an admin dashboard.",

    image: "/images/projects/play-house.png",

    features: [
        "AI shopping assistant with natural-language product discovery",
        "Advanced search, filtering, sorting, and pagination",
        "JWT authentication with access and refresh tokens",
        "Persistent cart, checkout, and order management",
        "Wholesale pricing, product variants, and combo offers",
        "Admin dashboard for products, inventory, orders, and reviews",
        "Responsive UI with animations and reusable components",
    ],

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
};

export const projects = [
    {
        title: "ShopSphere",
        description:
            "A full-stack e-commerce platform with protected shopping, cart management, bKash and cash-on-delivery payments, user profiles, and an admin dashboard for products, users, and order fulfillment.",

        image: "/images/projects/shopsphere.png",

        tech: [
            "Next.js",
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "bKash",
        ],

        live: "https://shop-sphere-client-zeta.vercel.app/",
        github: "https://github.com/Sifat-Ikram/shop-sphere-client",
    },

    {
        title: "Spark Gear",
        description:
            "A full-stack gadgets e-commerce application with product search, filtering, sorting, detailed product pages, cart management, protected checkout, order tracking, and JWT-based authentication.",

        image: "/images/projects/spark-gear.png",

        tech: [
            "Next.js",
            "React",
            "JavaScript",
            "Tailwind CSS",
            "React Query",
            "Framer Motion",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
        ],

        live: "https://spark-gear-six.vercel.app/",
        github: "https://github.com/Sifat-Ikram/spark-gear-ecommerce",
    },
];