"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiUser, FiMapPin, FiArrowUpRight } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import CountUp from "@/components/ui/CountUp";
import { about } from "@/data/About";
import { profile } from "@/data/profile";

// NOTE: colored cards do not use the .bento class on purpose.
// (.bento sets its own background, which would beat bg-* utilities.)
const card = "rounded-card border-[1.5px] border-border shadow-soft";

const grid = {
    hidden: {},
    show: { transition: { staggerChildren: 0.08 } },
};

const cell = {
    hidden: { opacity: 0, y: 28, scale: 0.97 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 180, damping: 22 },
    },
};

const statStyles = [
    {
        box: "bg-primary text-on-primary",
        label: "text-on-primary/80",
        blob: "bg-secondary/40",
    },
    {
        box: "bg-secondary-soft text-text",
        label: "text-muted",
        blob: "bg-pop/60",
    },
    {
        box: "bg-pop text-on-pop",
        label: "text-on-pop/75",
        blob: "bg-secondary/50",
    },
];

export default function About() {
    const [imgError, setImgError] = useState(false);

    return (
        <section id="about" className="section">
            <div className="container-x">
                <SectionHeading icon={FiUser} label="About me" />

                <motion.div
                    variants={grid}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.12 }}
                    className="mt-6 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-6"
                >
                    {/* Intro */}
                    <motion.div
                        variants={cell}
                        className={`${card} bg-surface p-6 sm:p-8 md:col-span-2 lg:col-span-4 lg:row-span-2 lg:p-10`}
                    >
                        <h2 className="max-w-xl text-2xl sm:text-3xl lg:text-4xl">
                            {about.title}
                        </h2>

                        <div className="mt-5 space-y-4 text-muted sm:text-[1.0625rem]">
                            {about.paragraphs.map((p) => (
                                <p key={p} className="max-w-prose">
                                    {p}
                                </p>
                            ))}
                        </div>

                        <ul className="mt-6 flex flex-wrap gap-2">
                            {about.focus.map((item) => (
                                <li
                                    key={item}
                                    className="rounded-full bg-surface-2 px-3.5 py-1.5 text-sm font-medium"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Photo */}
                    <motion.div
                        variants={cell}
                        whileHover={{ rotate: -1.5 }}
                        className={`${card} relative min-h-[22rem] overflow-hidden bg-primary-soft md:col-span-2 lg:col-span-2 lg:row-span-2 lg:min-h-0`}
                    >
                        {!imgError ? (
                            <Image
                                src={about.photo}
                                alt={`Portrait of ${profile.name}`}
                                fill
                                sizes="(min-width: 1024px) 30vw, 100vw"
                                className="object-cover"
                                onError={() => setImgError(true)}
                            />
                        ) : (
                            <div className="grid h-full min-h-[22rem] place-items-center">
                                <span className="font-display text-7xl font-bold text-primary">
                                    {profile.initials}
                                </span>
                            </div>
                        )}

                        <span className="sticker absolute bottom-4 left-4">
                            <FiMapPin size={14} />
                            {about.location}
                        </span>
                    </motion.div>

                    {/* Stats */}
                    {about.stats.map((stat, i) => {
                        const s = statStyles[i % statStyles.length];
                        return (
                            <motion.div
                                key={stat.label}
                                variants={cell}
                                whileHover={{ y: -4, rotate: i % 2 ? 1 : -1 }}
                                className={`${card} ${s.box} relative overflow-hidden p-6 sm:p-7 lg:col-span-3`}
                            >
                                <span
                                    className={`absolute -right-6 -top-6 size-24 rounded-full ${s.blob}`}
                                    aria-hidden="true"
                                />
                                <p className="relative font-display text-5xl font-bold tracking-tight sm:text-6xl">
                                    {typeof stat.value === "number" ? (
                                        <CountUp to={stat.value} suffix={stat.suffix} />
                                    ) : (
                                        stat.value
                                    )}
                                </p>
                                <p className={`relative mt-2 max-w-[16rem] text-sm ${s.label}`}>
                                    {stat.label}
                                </p>
                            </motion.div>
                        );
                    })}

                    {/* What I do */}
                    <motion.div
                        variants={cell}
                        className={`${card} bg-surface p-6 sm:p-8 lg:col-span-3`}
                    >
                        <h3 className="text-xl sm:text-2xl">What I do</h3>
                        <ul className="mt-5 space-y-4">
                            {about.services.map(({ icon: Icon, title, text }) => (
                                <li key={title} className="flex items-start gap-4">
                                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-primary-soft text-primary">
                                        <Icon size={20} />
                                    </span>
                                    <div>
                                        <p className="font-display font-semibold">{title}</p>
                                        <p className="text-sm text-muted">{text}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Right now */}
                    <motion.div
                        variants={cell}
                        className={`${card} flex flex-col justify-between gap-8 bg-surface-2 p-6 sm:p-8 lg:col-span-3`}
                    >
                        <div>
                            <span className="pill">
                                <span className="relative flex size-2">
                                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-secondary opacity-70" />
                                    <span className="relative inline-flex size-2 rounded-full bg-secondary" />
                                </span>
                                Right now
                            </span>
                            <h3 className="mt-4 text-xl sm:text-2xl">
                                {about.now.role} at {about.now.company}
                            </h3>
                            <p className="mt-2 text-sm text-muted">
                                Since {about.now.since}, building and improving user interfaces
                                for a live product, and open to the next challenge.
                            </p>
                        </div>

                        <a href="#contact" className="btn btn-primary btn-sm self-start">
                            Let&apos;s talk
                            <FiArrowUpRight size={16} />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}