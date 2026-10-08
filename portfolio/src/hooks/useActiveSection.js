"use client";

import { useEffect, useState } from "react";

// Pass a stable array (module-level constant) of section ids
export default function useActiveSection(ids) {
    const [active, setActive] = useState(ids[0]);

    useEffect(() => {
        const elements = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean);
        if (!elements.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            // a thin band in the middle of the viewport decides the active section
            { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
        );

        elements.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, [ids]);

    return active;
}