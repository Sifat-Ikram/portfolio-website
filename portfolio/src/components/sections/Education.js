"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";
import SectionHeading from "@/components/ui/SectionHeading";
import { education } from "@/data/education";

const styles = {
    degree: { box: "bg-surface", icon: FiBookOpen },
    course: { box: "bg-pop/25", icon: FiAward },
};

export default function Education() {
    return (
        <section id="education" className="section">
            <div className="container-x">
                <SectionHeading icon={FiBookOpen} label="Education" />

                <div className="mt-6 grid gap-5 md:grid-cols-2 md:gap-6">
                    {education.map((item, i) => {
                        const s = styles[item.type] ?? styles.degree;
                        const Icon = s.icon;
                        return (
                            <motion.article
                                key={item.school}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 20,
                                    delay: i * 0.08,
                                }}
                                whileHover={{ y: -4 }}
                                className={`flex items-start gap-5 rounded-card border-[1.5px] border-border p-6 shadow-soft sm:p-8 ${s.box}`}
                            >
                                <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-primary text-on-primary">
                                    <Icon size={22} />
                                </span>
                                <div>
                                    <h3 className="text-lg sm:text-xl">{item.school}</h3>
                                    <p className="mt-1 font-medium text-primary">{item.title}</p>
                                    <p className="mt-2 text-sm text-muted">{item.period}</p>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}