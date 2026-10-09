"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "next-themes";
import {
    FiSearch,
    FiSun,
    FiDownload,
    FiCopy,
    FiGithub,
    FiLinkedin,
} from "react-icons/fi";
import { sections } from "@/data/navigation";
import { profile } from "@/data/profile";
import useScrollTo from "@/hooks/useScrollTo";

const groupClass =
    "[&_[cmdk-group-heading]]:px-3 [&_[cmdk-group-heading]]:py-2 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-semibold [&_[cmdk-group-heading]]:text-muted";

const itemClass =
    "flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium data-[selected=true]:bg-primary-soft data-[selected=true]:text-primary";

export default function CommandPalette() {
    const [open, setOpen] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const scrollTo = useScrollTo();

    useEffect(() => {
        const onKey = (e) => {
            if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
                e.preventDefault();
                setOpen((o) => !o);
            }
            if (e.key === "Escape") setOpen(false);
        };
        const onOpen = () => setOpen(true);

        window.addEventListener("keydown", onKey);
        window.addEventListener("open-palette", onOpen);
        return () => {
            window.removeEventListener("keydown", onKey);
            window.removeEventListener("open-palette", onOpen);
        };
    }, []);

    // run an action after the palette has closed
    const run = (fn) => {
        setOpen(false);
        window.setTimeout(fn, 220);
    };

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onMouseDown={(e) => {
                        if (e.target === e.currentTarget) setOpen(false);
                    }}
                    className="fixed inset-0 z-[90] flex items-start justify-center bg-[#14121a]/50 px-4 pt-[14vh] backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ y: -16, scale: 0.97, opacity: 0 }}
                        animate={{ y: 0, scale: 1, opacity: 1 }}
                        exit={{ y: -10, scale: 0.97, opacity: 0 }}
                        transition={{ type: "spring", stiffness: 320, damping: 28 }}
                        className="w-full max-w-xl overflow-hidden rounded-3xl border-[1.5px] border-border bg-bg shadow-soft"
                    >
                        <Command label="Command menu" loop>
                            <div className="flex items-center gap-3 border-b-[1.5px] border-border px-5">
                                <FiSearch className="shrink-0 text-muted" size={18} />
                                <Command.Input
                                    autoFocus
                                    placeholder="Search sections and actions..."
                                    className="h-14 w-full bg-transparent text-base outline-none placeholder:text-muted"
                                />
                            </div>

                            <Command.List
                                data-lenis-prevent
                                className="max-h-[55vh] overflow-y-auto p-2"
                            >
                                <Command.Empty className="px-4 py-8 text-center text-sm text-muted">
                                    No results found.
                                </Command.Empty>

                                <Command.Group heading="Go to" className={groupClass}>
                                    {sections.map(({ id, label, icon: Icon }) => (
                                        <Command.Item
                                            key={id}
                                            value={`Go to ${label}`}
                                            onSelect={() => run(() => scrollTo(id))}
                                            className={itemClass}
                                        >
                                            <Icon size={18} />
                                            {label}
                                        </Command.Item>
                                    ))}
                                </Command.Group>

                                <Command.Group heading="Actions" className={groupClass}>
                                    <Command.Item
                                        value="Toggle theme dark light"
                                        onSelect={() =>
                                            run(() =>
                                                setTheme(resolvedTheme === "dark" ? "light" : "dark")
                                            )
                                        }
                                        className={itemClass}
                                    >
                                        <FiSun size={18} />
                                        Toggle theme
                                    </Command.Item>
                                    <Command.Item
                                        value="Download resume cv"
                                        onSelect={() =>
                                            run(() => {
                                                const a = document.createElement("a");
                                                a.href = profile.resume;
                                                a.download = "";
                                                a.click();
                                            })
                                        }
                                        className={itemClass}
                                    >
                                        <FiDownload size={18} />
                                        Download resume
                                    </Command.Item>
                                    <Command.Item
                                        value="Copy email address"
                                        onSelect={() =>
                                            run(() => navigator.clipboard?.writeText(profile.email))
                                        }
                                        className={itemClass}
                                    >
                                        <FiCopy size={18} />
                                        Copy email address
                                    </Command.Item>
                                    <Command.Item
                                        value="Open GitHub"
                                        onSelect={() =>
                                            run(() => window.open(profile.socials.github, "_blank"))
                                        }
                                        className={itemClass}
                                    >
                                        <FiGithub size={18} />
                                        Open GitHub
                                    </Command.Item>
                                    <Command.Item
                                        value="Open LinkedIn"
                                        onSelect={() =>
                                            run(() => window.open(profile.socials.linkedin, "_blank"))
                                        }
                                        className={itemClass}
                                    >
                                        <FiLinkedin size={18} />
                                        Open LinkedIn
                                    </Command.Item>
                                </Command.Group>
                            </Command.List>

                            <div className="flex items-center justify-between border-t-[1.5px] border-border px-5 py-3 text-xs text-muted">
                                <span>↑ ↓ to move, Enter to select</span>
                                <span>Esc to close</span>
                            </div>
                        </Command>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}