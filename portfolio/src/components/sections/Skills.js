"use client";

import { motion } from "framer-motion";
import { FiCpu } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillGroups } from "@/data/skills";

const card = "rounded-card border-[1.5px] border-border shadow-soft";

// each group gets its own surface color and grid position
const layout = {
    frontend: "bg-surface lg:col-span-2 lg:row-span-2",
    backend: "bg-primary-soft",
    database: "bg-secondary-soft",
};

const gridVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 28 },
    show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 150, damping: 20 },
    },
};

const chipsVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.04, delayChildren: 0.2 } },
};

const chipVariants = {
    hidden: { opacity: 0, scale: 0.7 },
    show: {
        opacity: 1,
        scale: 1,
        transition: { type: "spring", stiffness: 320, damping: 20 },
    },
};

export default function Skills() {
    return (
        <section id="skills" className="section">
            <div className="container-x">
                <SectionHeading
                    icon={FiCpu}
                    label="Skills"
                    title="Tools I work with"
                    description="Frontend is my home base, backed by enough backend and database experience to ship complete products."
                />

                <motion.div
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                    className="mt-10 grid gap-5 md:gap-6 lg:grid-cols-3"
                >
                    {skillGroups.map((group) => (
                        <motion.div
                            key={group.id}
                            variants={cardVariants}
                            className={`${card} ${layout[group.id]} p-6 sm:p-8`}
                        >
                            <h3 className="text-xl sm:text-2xl">{group.title}</h3>
                            <p className="mt-1 text-sm text-muted">{group.note}</p>

                            <motion.ul
                                variants={chipsVariants}
                                className="mt-6 flex flex-wrap gap-2.5"
                            >
                                {group.items.map(({ name, icon: Icon }) => (
                                    <motion.li
                                        key={name}
                                        variants={chipVariants}
                                        whileHover={{ y: -4, rotate: -2 }}
                                        className="flex items-center gap-2.5 rounded-2xl border-[1.5px] border-border bg-bg/70 px-3.5 py-2.5 text-sm font-medium"
                                    >
                                        <Icon size={18} className="shrink-0 text-primary" />
                                        {name}
                                    </motion.li>
                                ))}
                            </motion.ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}