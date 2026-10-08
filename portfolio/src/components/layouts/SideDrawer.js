"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { FiMenu, FiX, FiDownload } from "react-icons/fi";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { sections, sectionIds } from "@/data/navigation";
import { profile } from "@/data/profile";
import useActiveSection from "@/hooks/useActiveSection";
import useScrollTo from "@/hooks/useScrollTo";

const railVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.04, delayChildren: 0.05 } },
};

const iconVariants = {
    hidden: { opacity: 0, x: 28 },
    show: {
        opacity: 1,
        x: 0,
        transition: { type: "spring", stiffness: 380, damping: 26 },
    },
};

// Label bubble shown on the left of an icon (desktop hover / keyboard focus)
function Tip({ children }) {
    return (
        <span className="pointer-events-none absolute right-full top-1/2 mr-3 hidden -translate-y-1/2 whitespace-nowrap rounded-full bg-text px-3 py-1.5 text-xs font-semibold text-bg opacity-0 shadow-soft transition-opacity duration-150 group-hover:opacity-100 group-has-[:focus-visible]:opacity-100 md:block">
            {children}
        </span>
    );
}

const iconBtn =
    "relative grid size-11 place-items-center rounded-full transition-colors max-[700px]:size-10";

export default function SideDrawer() {
    const [open, setOpen] = useState(false);
    const closeRef = useRef(null);
    const mountedOnce = useRef(false);
    const scrollTo = useScrollTo();
    const active = useActiveSection(sectionIds);

    // scroll progress ring around the menu button
    const { scrollYProgress } = useScroll();
    const progress = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 30,
        restDelta: 0.001,
    });

    useEffect(() => {
        mountedOnce.current = true;
    }, []);

    // focus the close button when the dock opens
    useEffect(() => {
        if (open) closeRef.current?.focus();
    }, [open]);

    // close on Escape
    useEffect(() => {
        const onKey = (e) => e.key === "Escape" && setOpen(false);
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const handleSelect = (id) => {
        setOpen(false);
        window.setTimeout(() => scrollTo(id), 250);
    };

    return (
        <>
            {/* invisible layer: click outside the dock to close it */}
            {open && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setOpen(false)}
                    aria-hidden="true"
                />
            )}

            <div className="fixed right-3 top-1/2 z-50 -translate-y-1/2 sm:right-5 2xl:right-8">
                <AnimatePresence mode="wait">
                    {!open ? (
                        /* ---------- closed: round menu button ---------- */
                        <motion.button
                            key="menu"
                            type="button"
                            onClick={() => setOpen(true)}
                            aria-label="Open section menu"
                            aria-expanded={false}
                            initial={{ scale: 0, rotate: -45 }}
                            animate={{ scale: 1, rotate: 0 }}
                            exit={{ x: 40, opacity: 0, transition: { duration: 0.15 } }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 18,
                                delay: mountedOnce.current ? 0 : 0.5,
                            }}
                            whileHover={{ scale: 1.08, rotate: -6 }}
                            whileTap={{ scale: 0.92 }}
                            className="group relative block size-14 sm:size-16"
                        >
                            <svg
                                viewBox="0 0 64 64"
                                className="absolute inset-0 size-full -rotate-90"
                                aria-hidden="true"
                            >
                                <circle
                                    cx="32"
                                    cy="32"
                                    r="29"
                                    fill="none"
                                    stroke="var(--border)"
                                    strokeWidth="3"
                                />
                                <motion.circle
                                    cx="32"
                                    cy="32"
                                    r="29"
                                    fill="none"
                                    stroke="var(--secondary)"
                                    strokeWidth="3"
                                    strokeLinecap="round"
                                    style={{ pathLength: progress }}
                                />
                            </svg>
                            <span className="absolute inset-[6px] grid place-items-center rounded-full bg-primary text-on-primary shadow-pop">
                                <FiMenu size={22} />
                            </span>
                            <Tip>Menu</Tip>
                        </motion.button>
                    ) : (
                        /* ---------- open: slim icon-only dock ---------- */
                        <motion.nav
                            key="dock"
                            aria-label="Sections"
                            initial={{ x: "160%", opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{
                                x: "160%",
                                opacity: 0,
                                transition: { duration: 0.22, ease: "easeIn" },
                            }}
                            transition={{ type: "spring", stiffness: 260, damping: 26 }}
                            data-lenis-prevent
                            className="rounded-full border-[1.5px] border-border bg-surface/90 p-1.5 shadow-soft backdrop-blur-xl max-h-[calc(100dvh-1.5rem)] [@media(max-height:560px)]:overflow-y-auto"
                        >
                            <motion.ul
                                variants={railVariants}
                                initial="hidden"
                                animate="show"
                                className="flex flex-col items-center gap-1"
                            >
                                {/* close */}
                                <motion.li variants={iconVariants} className="group relative">
                                    <button
                                        ref={closeRef}
                                        type="button"
                                        onClick={() => setOpen(false)}
                                        aria-label="Close menu"
                                        className={`${iconBtn} bg-text text-bg hover:bg-secondary hover:text-on-pop`}
                                    >
                                        <FiX size={20} />
                                    </button>
                                    <Tip>Close</Tip>
                                </motion.li>

                                <li
                                    role="separator"
                                    aria-hidden="true"
                                    className="my-1 h-px w-6 bg-border"
                                />

                                {/* sections */}
                                {sections.map(({ id, label, icon: Icon }) => {
                                    const isActive = active === id;
                                    return (
                                        <motion.li
                                            key={id}
                                            variants={iconVariants}
                                            className="group relative"
                                        >
                                            <button
                                                type="button"
                                                onClick={() => handleSelect(id)}
                                                aria-label={label}
                                                aria-current={isActive ? "true" : undefined}
                                                className={`${iconBtn} ${isActive
                                                    ? "text-on-primary"
                                                    : "text-text hover:bg-secondary-soft"
                                                    }`}
                                            >
                                                {isActive && (
                                                    <motion.span
                                                        layoutId="dock-active"
                                                        transition={{
                                                            type: "spring",
                                                            stiffness: 380,
                                                            damping: 30,
                                                        }}
                                                        className="absolute inset-0 rounded-full bg-primary"
                                                    />
                                                )}
                                                <Icon size={20} className="relative z-10" />
                                                {isActive && (
                                                    <span className="absolute right-0.5 top-0.5 z-10 size-2.5 rounded-full border-2 border-surface bg-pop" />
                                                )}
                                            </button>
                                            <Tip>{label}</Tip>
                                        </motion.li>
                                    );
                                })}

                                <li
                                    role="separator"
                                    aria-hidden="true"
                                    className="my-1 h-px w-6 bg-border"
                                />

                                {/* theme toggle (inside the dock) */}
                                <motion.li variants={iconVariants} className="group relative">
                                    <ThemeToggle className="size-11 hover:bg-secondary-soft max-[700px]:size-10" />
                                    <Tip>Switch theme</Tip>
                                </motion.li>

                                {/* resume */}
                                <motion.li variants={iconVariants} className="group relative">
                                    <a
                                        href={profile.resume}
                                        download
                                        aria-label="Download resume"
                                        className={`${iconBtn} bg-pop text-on-pop hover:brightness-95`}
                                    >
                                        <FiDownload size={20} />
                                    </a>
                                    <Tip>Resume</Tip>
                                </motion.li>
                            </motion.ul>
                        </motion.nav>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
}