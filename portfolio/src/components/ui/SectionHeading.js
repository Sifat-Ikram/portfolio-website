"use client";

import { motion } from "framer-motion";

// Reusable for every section. title and description are optional.
export default function SectionHeading({ icon: Icon, label, title, description }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-2xl"
        >
            <span className="pill">
                {Icon && <Icon size={14} className="text-primary" />}
                {label}
            </span>
            {title && (
                <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl">{title}</h2>
            )}
            {description && (
                <p className="mt-3 text-muted sm:text-lg">{description}</p>
            )}
        </motion.div>
    );
}