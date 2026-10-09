"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiArrowRight, FiDownload } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiMongodb } from "react-icons/si";
import { profile } from "@/data/profile";
import { fireConfetti } from "@/lib/confetti";

const roles = [
    "Frontend Engineer",
    "Full-Stack Developer",
    "React & Next.js Specialist",
];

const nameWords = profile.name.split(" ");

const wordVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.035, delayChildren: 0.15 } },
};

const letterVariants = {
    hidden: { y: 44, opacity: 0 },
    show: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 260, damping: 20 },
    },
};

function RotatingRole() {
    const [i, setI] = useState(0);

    useEffect(() => {
        const t = setInterval(() => setI((v) => (v + 1) % roles.length), 2600);
        return () => clearInterval(t);
    }, []);

    return (
        <p className="mt-5 flex items-center gap-3 font-display text-xl font-semibold text-primary sm:text-2xl">
            <span className="h-0.5 w-8 shrink-0 rounded bg-secondary" />
            <span className="relative inline-flex h-[1.5em] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={roles[i]}
                        initial={{ y: "100%", opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: "-100%", opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeOut" }}
                        className="block whitespace-nowrap"
                    >
                        {roles[i]}
                    </motion.span>
                </AnimatePresence>
            </span>
        </p>
    );
}

function HeroVisual() {
    const reduce = useReducedMotion();
    const clicks = useRef(0);

    // click the big circle 5 times for a surprise
    const onSpark = () => {
        clicks.current += 1;
        if (clicks.current >= 5) {
            clicks.current = 0;
            fireConfetti();
        }
    };

    const chips = [
        { label: "React", icon: FaReact, pos: "left-0 top-[10%]", delay: 0 },
        { label: "Next.js", icon: SiNextdotjs, pos: "right-0 top-[20%]", delay: 0.6 },
        { label: "Node.js", icon: FaNodeJs, pos: "bottom-[14%] left-[3%]", delay: 1.2 },
        { label: "MongoDB", icon: SiMongodb, pos: "bottom-[7%] right-[5%]", delay: 1.8 },
    ];

    return (
        <div className="relative mx-auto aspect-square w-full max-w-[20rem] sm:max-w-md lg:max-w-none">
            {/* rotating text ring */}
            <motion.svg
                viewBox="0 0 200 200"
                className="absolute inset-0 size-full text-text"
                animate={reduce ? undefined : { rotate: 360 }}
                transition={{ duration: 26, ease: "linear", repeat: Infinity }}
                aria-hidden="true"
            >
                <defs>
                    <path
                        id="hero-ring"
                        d="M100,100 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0"
                    />
                </defs>
                <text
                    fontSize="10.5"
                    fontWeight="600"
                    fill="currentColor"
                    className="font-display"
                >
                    <textPath
                        href="#hero-ring"
                        textLength="508"
                        lengthAdjust="spacing"
                    >
                        Open to work • Frontend Engineer • Dhaka, Bangladesh •{" "}
                    </textPath>
                </text>
            </motion.svg>

            {/* decorative dots */}
            <span className="absolute left-[42%] top-[1%] size-9 rounded-full bg-pop" />
            <span className="absolute bottom-[3%] left-[40%] size-5 rounded-full bg-secondary" />

            {/* main circle */}
            <motion.button
                type="button"
                onClick={onSpark}
                aria-label="Decorative badge"
                whileHover={{ scale: 1.04, rotate: -3 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-[16%] grid place-items-center rounded-full bg-primary text-on-primary shadow-pop"
            >
                <span className="absolute inset-3 rounded-full border-2 border-dashed border-on-primary/30" />
                <span className="font-display text-6xl font-bold sm:text-7xl 2xl:text-8xl">
                    {profile.initials}
                </span>
            </motion.button>

            {/* floating tech chips */}
            {chips.map(({ label, icon: Icon, pos, delay }) => (
                <motion.div
                    key={label}
                    animate={reduce ? undefined : { y: [0, -12, 0] }}
                    transition={{
                        duration: 4,
                        ease: "easeInOut",
                        repeat: Infinity,
                        delay,
                    }}
                    className={`absolute ${pos} flex items-center gap-2 rounded-full border-[1.5px] border-border bg-surface px-3.5 py-2 text-sm font-semibold shadow-soft`}
                >
                    <Icon size={18} className="text-primary" />
                    {label}
                </motion.div>
            ))}
        </div>
    );
}

export default function Hero() {
    return (
        <section
            id="home"
            className="glow-bg relative flex min-h-svh items-center overflow-hidden pb-16 pt-24"
        >
            <div className="container-x grid items-center gap-12 lg:grid-cols-12">
                <div className="lg:col-span-7">
                    <motion.span
                        initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                        animate={{ opacity: 1, scale: 1, rotate: -3 }}
                        transition={{ type: "spring", stiffness: 260, damping: 16 }}
                        className="sticker"
                        style={{ transform: undefined }}
                    >
                        <span className="relative flex size-2">
                            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                            <span className="relative inline-flex size-2 rounded-full bg-primary" />
                        </span>
                        Open to work
                    </motion.span>

                    <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl lg:text-7xl 2xl:text-8xl">
                        <span className="block text-2xl font-semibold text-muted sm:text-3xl">
                            Hi, I&apos;m
                        </span>
                        <span className="sr-only">{profile.name}</span>
                        <motion.span
                            variants={wordVariants}
                            initial="hidden"
                            animate="show"
                            className="mt-2 block"
                            aria-hidden="true"
                        >
                            {nameWords.map((word, wi) => (
                                <span
                                    key={wi}
                                    className="mr-[0.22em] inline-block whitespace-nowrap"
                                >
                                    {word.split("").map((ch, i) => (
                                        <motion.span
                                            key={i}
                                            variants={letterVariants}
                                            whileHover={{
                                                y: -10,
                                                rotate: i % 2 ? 5 : -5,
                                                transition: { type: "spring", stiffness: 400, damping: 12 },
                                            }}
                                            className="inline-block cursor-default transition-colors duration-150 hover:text-secondary"
                                        >
                                            {ch}
                                        </motion.span>
                                    ))}
                                </span>
                            ))}
                        </motion.span>
                    </h1>

                    <RotatingRole />

                    <p className="mt-5 max-w-xl text-base text-muted sm:text-lg">
                        I build fast, reliable and well-crafted web products with React and
                        Next.js, and I&apos;m comfortable across the stack with Node.js,
                        Express and MongoDB.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a href="#projects" className="btn btn-primary">
                            View projects
                            <FiArrowRight size={18} />
                        </a>
                        <a href={profile.resume} download className="btn btn-ghost">
                            <FiDownload size={18} />
                            Resume
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => window.dispatchEvent(new Event("open-palette"))}
                        className="mt-6 hidden items-center gap-2 text-sm text-muted transition-colors hover:text-primary [@media(hover:hover)]:inline-flex"
                    >
                        Press
                        <kbd className="rounded-md border-[1.5px] border-border bg-surface px-1.5 py-0.5 font-sans text-xs font-semibold text-text">
                            Ctrl K
                        </kbd>
                        or
                        <kbd className="rounded-md border-[1.5px] border-border bg-surface px-1.5 py-0.5 font-sans text-xs font-semibold text-text">
                            ⌘ K
                        </kbd>
                        to jump anywhere
                    </button>
                </div>

                <div className="lg:col-span-5">
                    <HeroVisual />
                </div>
            </div>
        </section>
    );
}