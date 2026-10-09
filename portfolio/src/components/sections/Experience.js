"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { FiBriefcase, FiCheck, FiTrendingUp } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/experience";

export default function Experience() {
    const ref = useRef(null);

    // the colored line draws itself as you scroll through the timeline
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 75%", "end 60%"],
    });
    const scaleY = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 28,
        restDelta: 0.001,
    });

    return (
        <section id="experience" className="section">
            <div className="container-x">
                <SectionHeading
                    icon={FiBriefcase}
                    label="Experience"
                    title="Where I've worked"
                    description="Two product teams, one focus: interfaces that are fast, clean and easy to use."
                />

                <div ref={ref} className="relative mt-10 sm:mt-12">
                    {/* track */}
                    <div className="absolute bottom-0 left-[11px] top-0 w-0.5 rounded bg-border md:left-[15px]" />
                    {/* progress line */}
                    <motion.div
                        style={{ scaleY }}
                        className="absolute bottom-0 left-[11px] top-0 w-0.5 origin-top rounded bg-primary md:left-[15px]"
                    />

                    <ul className="space-y-6 md:space-y-8">
                        {experience.map((job) => (
                            <li key={job.company} className="relative pl-10 md:pl-14">
                                {/* dot */}
                                <span
                                    className={`absolute left-0 top-7 grid size-6 place-items-center rounded-full border-4 border-bg md:size-8 ${job.current ? "bg-secondary" : "bg-primary"
                                        }`}
                                >
                                    {job.current && (
                                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-secondary opacity-50" />
                                    )}
                                </span>

                                <motion.article
                                    initial={{ opacity: 0, x: 28 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, amount: 0.25 }}
                                    transition={{ type: "spring", stiffness: 140, damping: 20 }}
                                    className="rounded-card border-[1.5px] border-border bg-surface p-6 shadow-soft sm:p-8"
                                >
                                    <div className="flex flex-wrap items-start justify-between gap-3">
                                        <div>
                                            <h3 className="text-xl sm:text-2xl">{job.company}</h3>
                                            <p className="mt-1 font-medium text-primary">{job.role}</p>
                                        </div>
                                        <span
                                            className={`pill ${job.current ? "!bg-secondary-soft" : ""
                                                }`}
                                        >
                                            {job.period}
                                        </span>
                                    </div>

                                    <ul className="mt-5 space-y-3">
                                        {job.bullets.map((b) => (
                                            <li key={b} className="flex items-start gap-3 text-muted">
                                                <span className="mt-1 grid size-5 shrink-0 place-items-center rounded-full bg-primary-soft text-primary">
                                                    <FiCheck size={12} />
                                                </span>
                                                <span>{b}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {job.impact && (
                                        <p className="mt-5 flex items-start gap-2 rounded-2xl bg-pop/30 px-4 py-3 text-sm font-semibold">
                                            <FiTrendingUp className="mt-0.5 shrink-0" size={16} />
                                            {job.impact}
                                        </p>
                                    )}

                                    <ul className="mt-5 flex flex-wrap gap-2">
                                        {job.tech.map((t) => (
                                            <li
                                                key={t}
                                                className="rounded-full bg-surface-2 px-3 py-1 text-xs font-medium"
                                            >
                                                {t}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.article>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}