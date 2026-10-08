"use client";

import { useEffect, useState } from "react";
import { ReactLenis } from "lenis/react";

export default function SmoothScroll({ children }) {
    const [enabled, setEnabled] = useState(true);

    // Turn smooth scroll off for people who prefer reduced motion
    useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        setEnabled(!mq.matches);
        const onChange = (e) => setEnabled(!e.matches);
        mq.addEventListener("change", onChange);
        return () => mq.removeEventListener("change", onChange);
    }, []);

    if (!enabled) return <>{children}</>;

    return (
        <ReactLenis
            root
            options={{
                lerp: 0.09,
                wheelMultiplier: 1,
                smoothWheel: true,
                anchors: true, // <a href="#contact"> scrolls smoothly too
            }}
        >
            {children}
        </ReactLenis>
    );
}