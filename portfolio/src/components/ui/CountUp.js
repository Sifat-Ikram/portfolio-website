"use client";

import { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";

export default function CountUp({ to, duration = 1.4, suffix = "" }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-15% 0px" });

    useEffect(() => {
        if (!inView || !ref.current) return;

        const reduceMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (reduceMotion) {
            ref.current.textContent = `${to}${suffix}`;
            return;
        }

        const controls = animate(0, to, {
            duration,
            ease: "easeOut",
            onUpdate: (v) => {
                if (ref.current) ref.current.textContent = `${Math.round(v)}${suffix}`;
            },
        });
        return () => controls.stop();
    }, [inView, to, duration, suffix]);

    return <span ref={ref}>{`0${suffix}`}</span>;
}