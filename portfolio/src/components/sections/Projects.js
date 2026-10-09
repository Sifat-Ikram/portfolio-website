"use client";

import { useState } from "react";
import Image from "next/image";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { FiFolder, FiArrowUpRight, FiCheck, FiStar } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import { featuredProject, projects } from "@/data/projects";

const gradients = [
    "linear-gradient(135deg, var(--primary), var(--secondary))",
    "linear-gradient(135deg, var(--secondary), var(--pop))",
    "linear-gradient(135deg, #1f2a8a, #5b6bff)",
    "linear-gradient(135deg, var(--pop), var(--secondary))",
];

/* 3D tilt that follows the mouse (mouse only, not touch) */
function Tilt({ children, className = "" }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), {
        stiffness: 180,
        damping: 18,
    });
    const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), {
        stiffness: 180,
        damping: 18,
    });

    const onMove = (e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - r.left) / r.width - 0.5);
        y.set((e.clientY - r.top) / r.height - 0.5);
    };
    const reset = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            onPointerMove={onMove}
            onPointerLeave={reset}
            style={{ rotateX, rotateY, transformPerspective: 1000 }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

/* Screenshot (links to the live site) with a gradient fallback */
function Preview({ project, index = 0, className = "" }) {
    const [broken, setBroken] = useState(!project.image);

    const inner = !broken ? (
        <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover/preview:scale-105"
            onError={() => setBroken(true)}
        />
    ) : (
        <div
            className="grid size-full place-items-center p-6 text-center"
            style={{ background: gradients[index % gradients.length] }}
        >
            <span className="font-display text-3xl font-bold text-white drop-shadow sm:text-4xl">
                {project.title}
            </span>
        </div>
    );

    const base = `group/preview relative block overflow-hidden ${className}`;

    return project.live ? (
        <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="view"
            aria-label={`Open ${project.title} live site`}
            className={base}
        >
            {inner}
        </a>
    ) : (
        <div className={base}>{inner}</div>
    );
}

function TechChips({ tech }) {
    if (!tech?.length) return null;
    return (
        <ul className="mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
                <li
                    key={t}
                    className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium"
                >
                    {t}
                </li>
            ))}
        </ul>
    );
}

function Links({ project, className = "" }) {
    if (!project.live && !project.github) return null;
    return (
        <div className={`flex flex-wrap gap-2 ${className}`}>
            {project.live && (
                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                >
                    Live site
                    <FiArrowUpRight size={16} />
                </a>
            )}
            {project.github && (
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm"
                >
                    <FaGithub size={16} />
                    Code
                </a>
            )}
        </div>
    );
}

function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 140, damping: 20 }}
            className="h-full"
        >
            <Tilt className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-card border-[1.5px] border-border bg-surface shadow-soft">
                    <Preview
                        project={project}
                        index={index + 1}
                        className="aspect-[16/10] border-b-[1.5px] border-border"
                    />
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <h3 className="text-xl">{project.title}</h3>
                        <p className="mt-2 text-sm text-muted">{project.description}</p>
                        <TechChips tech={project.tech} />
                        <Links project={project} className="mt-auto pt-5" />
                    </div>
                </article>
            </Tilt>
        </motion.div>
    );
}

export default function Projects() {
    const p = featuredProject;

    return (
        <section id="projects" className="section">
            <div className="container-x">
                <SectionHeading
                    icon={FiFolder}
                    label="Projects"
                    title="Things I've built"
                    description="A selection of products and side projects. Click any preview to open the live site."
                />

                {/* Featured */}
                <motion.article
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ type: "spring", stiffness: 120, damping: 20 }}
                    className="mt-10 overflow-hidden rounded-card border-[1.5px] border-border bg-surface shadow-soft lg:grid lg:grid-cols-2"
                >
                    <Preview
                        project={p}
                        index={0}
                        className="aspect-[16/10] border-b-[1.5px] border-border lg:aspect-auto lg:min-h-[28rem] lg:border-b-0 lg:border-r-[1.5px]"
                    />

                    <div className="p-6 sm:p-8 lg:p-10">
                        <span className="sticker">
                            <FiStar size={14} />
                            Featured project
                        </span>
                        <h3 className="mt-5 text-3xl sm:text-4xl">{p.title}</h3>
                        <p className="mt-2 font-medium text-primary">{p.tagline}</p>
                        <p className="mt-4 text-muted">{p.description}</p>

                        <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                            {p.features.map((f) => (
                                <li key={f} className="flex items-start gap-2.5 text-sm">
                                    <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                                        <FiCheck size={12} />
                                    </span>
                                    {f}
                                </li>
                            ))}
                        </ul>

                        <TechChips tech={p.tech} />
                        <Links project={p} className="mt-6" />
                    </div>
                </motion.article>

                {/* More projects */}
                <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-6">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}