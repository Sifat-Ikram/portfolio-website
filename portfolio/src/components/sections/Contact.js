"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import {
    FiMail,
    FiCopy,
    FiCheck,
    FiSend,
    FiMapPin,
    FiPhone,
    FiArrowUpRight,
} from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";
import { fireConfetti } from "@/lib/confetti";

const schema = z.object({
    name: z.string().min(2, "Please enter your name"),
    email: z.string().email("Enter a valid email address"),
    message: z.string().min(10, "Message should be at least 10 characters"),
    company: z.string().optional(), // honeypot, real people leave it empty
});

const socials = [
    { label: "GitHub", href: profile.socials.github, icon: FaGithub },
    { label: "LinkedIn", href: profile.socials.linkedin, icon: FaLinkedinIn },
    { label: "Facebook", href: profile.socials.facebook, icon: FaFacebookF },
];

// "https://www.linkedin.com/in/me/" -> "linkedin.com/in/me"
const displayUrl = (url) =>
    url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

// "+880 1718-837796" -> "+8801718837796" (for the tel: link)
const telHref = (phone) => `tel:${String(phone).replace(/[^\d+]/g, "")}`;

const field =
    "w-full rounded-2xl border-[1.5px] border-border bg-bg px-4 py-3 outline-none transition placeholder:text-muted/70 aria-[invalid=true]:border-red-500";

// validation errors are red, so they are not confused with the teal brand color
const errorText = "mt-1.5 text-sm text-red-600 dark:text-red-400";

export default function Contact() {
    const [status, setStatus] = useState("idle"); // idle | sending | success | error
    const [copied, setCopied] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({ resolver: zodResolver(schema) });

    const onSubmit = async (values) => {
        setStatus("sending");
        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            });
            if (!res.ok) throw new Error("Request failed");
            setStatus("success");
            reset();
            fireConfetti();
        } catch {
            setStatus("error");
        }
    };

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(profile.email);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            /* clipboard not available */
        }
    };

    return (
        <section id="contact" className="section">
            <div className="container-x">
                <SectionHeading
                    icon={FiMail}
                    label="Contact"
                    title="Let's work together"
                    description="Have a role or a project in mind? Send a message and I'll get back to you as soon as I can."
                />

                <div className="mt-10 grid gap-6 lg:grid-cols-5 lg:gap-8">
                    {/* Left: quick contact */}
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ type: "spring", stiffness: 140, damping: 20 }}
                        className="flex flex-col gap-6 rounded-card border-[1.5px] border-border bg-primary p-6 text-on-primary shadow-soft sm:p-8 lg:col-span-2"
                    >
                        {/* Email */}
                        <div>
                            <p className="text-sm text-on-primary/75">Email</p>
                            <Link
                                href={`mailto:${profile.email}`}
                                className="mt-1 block break-all font-display text-xl font-semibold underline-offset-4 hover:underline sm:text-2xl"
                            >
                                {profile.email}
                            </Link>
                        </div>

                        {/* Phone (hidden if profile.phone is empty) */}
                        {profile.phone && (
                            <div>
                                <p className="text-sm text-on-primary/75">Phone / WhatsApp</p>
                                <Link
                                    href={telHref(profile.phone)}
                                    className="mt-1 inline-flex items-center gap-2.5 font-display text-lg font-semibold underline-offset-4 hover:underline sm:text-xl"
                                >
                                    <FiPhone size={18} className="shrink-0" />
                                    {profile.phone}
                                </Link>
                            </div>
                        )}

                        {/* Availability */}
                        <div className="flex items-start gap-3 rounded-2xl bg-on-primary/10 p-4 text-sm">
                            <span className="relative mt-1 flex size-2.5 shrink-0">
                                <span className="absolute inline-flex size-full animate-ping rounded-full bg-pop opacity-70" />
                                <span className="relative inline-flex size-2.5 rounded-full bg-pop" />
                            </span>
                            <p className="text-on-primary/90">
                                Open to new opportunities. I usually reply within a day or two.
                            </p>
                        </div>

                        {/* Social links */}
                        <div>
                            <p className="mb-3 text-sm text-on-primary/75">Find me on</p>
                            <ul className="space-y-2.5">
                                {socials.map(({ label, href, icon: Icon }) => (
                                    <li key={label}>
                                        <Link
                                            href={href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`${label} profile`}
                                            className="group flex items-center gap-3 rounded-2xl bg-on-primary/10 p-3 transition-colors hover:bg-on-primary/20"
                                        >
                                            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-on-primary/15">
                                                <Icon size={17} />
                                            </span>
                                            <span className="min-w-0 flex-1">
                                                <span className="block text-sm font-semibold">
                                                    {label}
                                                </span>
                                                <span className="block truncate text-xs text-on-primary/75">
                                                    {displayUrl(href)}
                                                </span>
                                            </span>
                                            <FiArrowUpRight
                                                size={18}
                                                className="shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <p className="mt-auto flex items-center gap-2 text-sm text-on-primary/85">
                            <FiMapPin size={16} />
                            {profile.location}
                        </p>
                    </motion.div>

                    {/* Right: form */}
                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{
                            type: "spring",
                            stiffness: 140,
                            damping: 20,
                            delay: 0.08,
                        }}
                        className="relative rounded-card border-[1.5px] border-border bg-surface p-6 shadow-soft sm:p-8 lg:col-span-3 flex flex-col justify-between"
                    >
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="mb-2 block text-sm font-medium">
                                    Full name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    autoComplete="name"
                                    placeholder="John Doe"
                                    className={field}
                                    aria-invalid={!!errors.name}
                                    {...register("name")}
                                />
                                {errors.name && (
                                    <p role="alert" className={errorText}>
                                        {errors.name.message}
                                    </p>
                                )}
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-medium">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder="you@email.com"
                                    className={field}
                                    aria-invalid={!!errors.email}
                                    {...register("email")}
                                />
                                {errors.email && (
                                    <p role="alert" className={errorText}>
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="mt-5">
                            <label htmlFor="message" className="mb-2 block text-sm font-medium">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows={8}
                                placeholder="Tell me about your project or role..."
                                className={`${field} resize-y`}
                                aria-invalid={!!errors.message}
                                {...register("message")}
                            />
                            {errors.message && (
                                <p role="alert" className={errorText}>
                                    {errors.message.message}
                                </p>
                            )}
                        </div>

                        {/* honeypot */}
                        <input
                            type="text"
                            tabIndex={-1}
                            autoComplete="off"
                            aria-hidden="true"
                            className="absolute -left-[9999px] h-0 w-0 opacity-0"
                            {...register("company")}
                        />

                        <div className="mt-6 flex flex-wrap items-center gap-4">
                            <button
                                type="submit"
                                disabled={status === "sending"}
                                className="btn btn-primary disabled:opacity-70"
                            >
                                {status === "sending" ? "Sending..." : "Send message"}
                                <FiSend size={17} />
                            </button>

                            <p aria-live="polite" className="text-sm">
                                {status === "success" && (
                                    <span className="font-medium text-primary">
                                        Thanks! Your message is on its way.
                                    </span>
                                )}
                                {status === "error" && (
                                    <span className="font-medium text-red-600 dark:text-red-400">
                                        Something went wrong. Please email me directly.
                                    </span>
                                )}
                            </p>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}