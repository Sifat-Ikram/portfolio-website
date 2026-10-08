"use client";

import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { FiDownload } from "react-icons/fi";
import ThemeToggle from "@/components/ui/ThemeToggle";
import useScrollTo from "@/hooks/useScrollTo";
import { profile } from "@/data/profile";

export default function Navbar() {
    const { scrollY } = useScroll();
    const scrollTo = useScrollTo();
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // hide while scrolling down, show while scrolling up
    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() ?? 0;
        setHidden(latest > previous && latest > 160);
        setScrolled(latest > 24);
    });

    return (
        <motion.header
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: hidden ? "-140%" : 0, opacity: 1 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-x-0 top-0 z-40 flex justify-center"
        >
            <nav
                aria-label="Top bar"
                className={`flex w-full items-center justify-between gap-2 border-[1.5px] border-border bg-surface/80 p-1.5 backdrop-blur-xl transition-shadow duration-300 ${scrolled ? "shadow-soft" : ""
                    }`}
            >
                {/* Logo */}
                <a
                    href="#home"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollTo("home");
                    }}
                    className="flex items-center gap-2.5 rounded-full pr-3"
                    aria-label="Go to top"
                >
                    <span className="relative grid size-10 place-items-center rounded-full bg-primary font-display text-sm font-bold text-on-primary">
                        {profile.initials}
                        <span className="absolute -right-0.5 -top-0.5 size-3 rounded-full border-2 border-surface bg-pop" />
                    </span>
                    <span className="hidden leading-tight min-[380px]:block">
                        <span className="block font-display text-[15px] font-bold">
                            {profile.shortName}
                        </span>
                        <span className="hidden text-xs text-muted md:block">
                            {profile.role}
                        </span>
                    </span>
                </a>

                {/* Actions */}
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <a
                        href={profile.resume}
                        download
                        aria-label="Download resume"
                        className="btn btn-primary btn-sm"
                    >
                        <FiDownload size={16} />
                        <span className="hidden sm:inline">Resume</span>
                    </a>
                </div>
            </nav>
        </motion.header>
    );
}