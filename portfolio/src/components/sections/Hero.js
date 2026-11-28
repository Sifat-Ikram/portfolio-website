"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import { profile } from "@/data/profile";
import { fireConfetti } from "@/lib/confetti";
import { AiFillOpenAI } from "react-icons/ai";
import { FaReact, FaNodeJs, FaLayerGroup } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { BiLogoPostgresql } from "react-icons/bi";
import { DiMongodb } from "react-icons/di";
import { RiNextjsLine } from "react-icons/ri";
import Link from "next/link";
import { SiNestjs } from "react-icons/si";

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
        { label: "JavaScript", icon: IoLogoJavascript },
        { label: "TypeScript", icon: TbBrandTypescript },
        { label: "React", icon: FaReact },
        { label: "Next.js", icon: RiNextjsLine },
        { label: "Node.js", icon: FaNodeJs },
        { label: "Nest.js", icon: SiNestjs },
        { label: "PostgreSQL", icon: BiLogoPostgresql },
        { label: "MongoDB", icon: DiMongodb },
        { label: "AI Agents", icon: AiFillOpenAI },
    ];

    const RADIUS = 37;

    return (
        <div className="relative mx-auto aspect-square w-full max-w-[20rem] sm:max-w-md lg:max-w-none">
            {/* rotating text ring */}
            <motion.svg
                viewBox="0 0 200 200"
                className="absolute left-[4.9%] top-[4.9%] size-[90.2%] text-text"
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

            {/* main circle */}
            <motion.button
                type="button"
                onClick={onSpark}
                aria-label="Decorative badge"
                whileHover={{ scale: 1.04, rotate: -3 }}
                whileTap={{ scale: 0.95 }}
                className="absolute inset-[20%] grid place-items-center rounded-full bg-primary text-on-primary shadow-pop"
            >
                <span className="absolute inset-3 rounded-full border-2 border-dashed border-on-primary/30" />
                <span className="font-display text-6xl font-bold sm:text-7xl 2xl:text-8xl">
                    {profile.initials}
                </span>
            </motion.button>

            {/* floating tech chips, evenly spaced on a circle */}
            {chips.map(({ label, icon: Icon }, i) => {
                const angle = ((-90 + (360 / chips.length) * i) * Math.PI) / 180;
                const cos = Math.cos(angle);
                const sin = Math.sin(angle);
                const left = (50 + RADIUS * cos).toFixed(2);
                const top = (50 + RADIUS * sin).toFixed(2);
                const isLeft = cos < -0.1;

                return (
                    <div
                        key={label}
                        className="absolute"
                        style={{
                            left: `${left}%`,
                            top: `${top}%`,
                            transform: `translate(${(-50 + cos * 50).toFixed(2)}%, ${(-50 + sin * 50).toFixed(2)}%)`,
                        }}
                    >
                        <motion.div
                            animate={reduce ? undefined : { y: [0, -12, 0] }}
                            transition={{
                                duration: 4,
                                ease: "easeInOut",
                                repeat: Infinity,
                                delay: i * 0.5,
                            }}
                            className={`flex items-center gap-2 whitespace-nowrap rounded-full border-[1.5px] border-border bg-surface px-3.5 py-2 text-sm font-semibold shadow-soft ${isLeft ? "flex-row-reverse" : ""
                                }`}
                        >
                            <Icon size={18} className="text-primary" />
                            {label}
                        </motion.div>
                    </div>
                );
            })}
        </div>
    );
}

export default function Hero() {
    return (
        <section
            id="home"
            className="glow-bg relative flex min-h-svh items-center overflow-hidden"
        >
            <div className="container-x grid items-center gap-12 lg:grid-cols-12">
                <div className="lg:col-span-7">
                    <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl 2xl:text-7xl">
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
                        I build modern, responsive web applications using React, Next.js, and TypeScript. I focus on creating scalable frontend experiences, reusable components, and intuitive user interfaces, with hands-on experience in backend development, API integration, and AI-powered features.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                        <a
                            href="/CV of Md Sifat Ikram.pdf"
                            download="Frontend Engineer - Md. Sifat Ikram.pdf"
                            className="btn btn-primary"
                        >
                            <FiDownload size={18} />
                            Download Resume
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