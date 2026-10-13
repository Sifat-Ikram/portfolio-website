
// Screenshots go in: public/images/projects/<name>.png
// If an image is missing, a gradient card with the project name is shown.
// If `live` or `github` is null, that button is hidden.

export const featuredProject = {
    title: "Play House",
    tagline: "Full-Stack Toy Store with an AI Shopping Assistant",
    description:
        "A full-stack toy e-commerce platform featuring AI-powered product discovery, advanced filtering, persistent carts, secure authentication, checkout, order management, wholesale pricing, and an admin dashboard.",

    image: "https://i.postimg.cc/g2DCD559/playhouse.jpg",

    challenge: "Finding the right toy in a large catalog is slow, and one store had to serve both retail and wholesale buyers with different pricing.",
    solution: "Built an AI assistant that turns natural-language requests into product searches, added advanced filtering and wholesale pricing, and secured the app with JWT access and refresh tokens.",
    result: "A complete deployed store covering browsing, cart, checkout, order management and an admin dashboard.",

    features: [
        "AI shopping assistant with natural-language product discovery",
        "Advanced search, filtering, sorting, and pagination",
        "JWT authentication with access and refresh tokens",
        "Wholesale pricing, product variants, and combo offers",
        "Admin dashboard for products, inventory, orders, and reviews",
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

        image: "https://i.postimg.cc/tCRt6MhF/shopsphere.jpg",

        challenge: "Shoppers needed both online payment (bKash) and cash on delivery, with protected accounts and a way for admins to fulfil orders.",
        solution: "Built protected shopping flows with JWT, cart and profile management, bKash and cash-on-delivery checkout, and an admin dashboard for products, users and orders.",
        result: "An end-to-end purchase flow from browsing to fulfilment, deployed and live.",

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

        image: "https://i.postimg.cc/3rgb12Mg/Screenshot-2026-10-13-181904.jpg",

        challenge: "Gadget buyers compare many products, so the catalog needed fast search, filtering and sorting.",
        solution: "Implemented search, filtering and sorting with React Query for cached data fetching, plus protected checkout and order tracking behind JWT auth.",
        result: "A complete shopping flow with order tracking, deployed and live.",

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