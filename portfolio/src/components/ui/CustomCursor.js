"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Dot + ring cursor. Only on devices with a mouse. Grows with "View" on
// elements that have data-cursor="view", and grows a little over links/buttons.
export default function CustomCursor() {
    const [enabled, setEnabled] = useState(false);
    const [visible, setVisible] = useState(false);
    const [mode, setMode] = useState("default"); // default | link | view

    const x = useMotionValue(-100);
    const y = useMotionValue(-100);
    const ringX = useSpring(x, { stiffness: 420, damping: 38, mass: 0.5 });
    const ringY = useSpring(y, { stiffness: 420, damping: 38, mass: 0.5 });

    useEffect(() => {
        const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!fine || reduce) return;

        setEnabled(true);
        document.body.classList.add("has-custom-cursor");

        const onMove = (e) => {
            x.set(e.clientX);
            y.set(e.clientY);
            setVisible(true);
        };
        const onOver = (e) => {
            const t = e.target;
            if (!(t instanceof Element)) return;
            if (t.closest("[data-cursor='view']")) setMode("view");
            else if (t.closest("a, button, [role='button'], input, textarea, label"))
                setMode("link");
            else setMode("default");
        };
        const onLeave = () => setVisible(false);

        window.addEventListener("mousemove", onMove);
        window.addEventListener("mouseover", onOver);
        document.documentElement.addEventListener("mouseleave", onLeave);

        return () => {
            window.removeEventListener("mousemove", onMove);
            window.removeEventListener("mouseover", onOver);
            document.documentElement.removeEventListener("mouseleave", onLeave);
            document.body.classList.remove("has-custom-cursor");
        };
    }, [x, y]);

    if (!enabled) return null;

    const ring =
        mode === "view"
            ? { size: 84, bg: "var(--primary)", border: "var(--primary)" }
            : mode === "link"
                ? { size: 54, bg: "rgba(255,138,107,0.22)", border: "var(--secondary)" }
                : { size: 34, bg: "transparent", border: "var(--text)" };

    return (
        <>
            {/* ring */}
            <motion.div
                aria-hidden="true"
                style={{ x: ringX, y: ringY }}
                className="pointer-events-none fixed left-0 top-0 z-[100]"
            >
                <motion.div
                    animate={{
                        width: ring.size,
                        height: ring.size,
                        opacity: visible ? 1 : 0,
                        backgroundColor: ring.bg,
                        borderColor: ring.border,
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 24 }}
                    className="-translate-x-1/2 -translate-y-1/2 grid place-items-center rounded-full border-[1.5px]"
                >
                    <span
                        className={`text-sm font-semibold text-on-primary transition-opacity duration-150 ${mode === "view" ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        View
                    </span>
                </motion.div>
            </motion.div>

            {/* dot */}
            <motion.div
                aria-hidden="true"
                style={{ x, y }}
                className="pointer-events-none fixed left-0 top-0 z-[100]"
            >
                <div
                    className={`-translate-x-1/2 -translate-y-1/2 size-1.5 rounded-full bg-secondary transition-opacity duration-150 ${visible && mode !== "view" ? "opacity-100" : "opacity-0"
                        }`}
                />
            </motion.div>
        </>
    );
}