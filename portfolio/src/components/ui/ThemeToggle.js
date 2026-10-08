"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { useTheme } from "next-themes";
import { AnimatePresence, motion } from "framer-motion";
import { FiMoon, FiSun } from "react-icons/fi";

// `className` controls size and look (passing one replaces the default)
export default function ThemeToggle({
    className = "size-10 border-[1.5px] border-border bg-surface hover:bg-secondary-soft",
}) {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const buttonRef = useRef(null);

    useEffect(() => setMounted(true), []);

    const isDark = resolvedTheme === "dark";

    const toggle = async () => {
        const next = isDark ? "light" : "dark";

        const canAnimate =
            typeof document.startViewTransition === "function" &&
            !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        if (!canAnimate || !buttonRef.current) {
            setTheme(next);
            return;
        }

        const rect = buttonRef.current.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        const radius = Math.hypot(
            Math.max(x, window.innerWidth - x),
            Math.max(y, window.innerHeight - y)
        );

        const transition = document.startViewTransition(() => {
            flushSync(() => setTheme(next));
        });

        try {
            await transition.ready;
            document.documentElement.animate(
                {
                    clipPath: [
                        `circle(0px at ${x}px ${y}px)`,
                        `circle(${radius}px at ${x}px ${y}px)`,
                    ],
                },
                {
                    duration: 650,
                    easing: "ease-in-out",
                    pseudoElement: "::view-transition-new(root)",
                }
            );
        } catch {
            /* transition skipped, theme is already changed */
        }
    };

    return (
        <button
            ref={buttonRef}
            type="button"
            onClick={toggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className={`grid shrink-0 place-items-center overflow-hidden rounded-full text-text transition-colors ${className}`}
        >
            {mounted && (
                <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                        key={isDark ? "moon" : "sun"}
                        initial={{ rotate: -90, scale: 0.4, opacity: 0 }}
                        animate={{ rotate: 0, scale: 1, opacity: 1 }}
                        exit={{ rotate: 90, scale: 0.4, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="grid place-items-center"
                    >
                        {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
                    </motion.span>
                </AnimatePresence>
            )}
        </button>
    );
}