"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { FiMail, FiCopy, FiCheck, FiSend, FiMapPin } from "react-icons/fi";
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

const field =
    "w-full rounded-2xl border-[1.5px] border-border bg-bg px-4 py-3 outline-none transition placeholder:text-muted/70 focus:border-primary focus:ring-4 focus:ring-primary/15";

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
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ type: "spring", stiffness: 140, damping: 20 }}
                        className="flex flex-col gap-5 rounded-card border-[1.5px] border-border bg-primary p-6 text-on-primary shadow-soft sm:p-8 lg:col-span-2"
                    >
                        <div>
                            <p className="text-sm text-on-primary/75">Email</p>
                            <p className="mt-1 break-all font-display text-xl font-semibold sm:text-2xl">
                                {profile.email}
                            </p>
                            <button
                                type="button"
                                onClick={copyEmail}
                                className="mt-4 inline-flex items-center gap-2 rounded-full bg-pop px-4 py-2 text-sm font-semibold text-on-pop transition-transform hover:-translate-y-0.5"
                            >
                                {copied ? <FiCheck size={16} /> : <FiCopy size={16} />}
                                {copied ? "Copied" : "Copy email"}
                            </button>
                        </div>

                        <p className="flex items-center gap-2 text-sm text-on-primary/85">
                            <FiMapPin size={16} />
                            {profile.location}
                        </p>

                        <div className="mt-auto flex gap-2.5 pt-4">
                            {socials.map(({ label, href, icon: Icon }) => (
                                <a
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    className="grid size-11 place-items-center rounded-full bg-on-primary/15 transition-all hover:-translate-y-1 hover:bg-secondary"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right: form */}
                    <motion.form
                        onSubmit={handleSubmit(onSubmit)}
                        noValidate
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            type: "spring",
                            stiffness: 140,
                            damping: 20,
                            delay: 0.08,
                        }}
                        className="rounded-card border-[1.5px] border-border bg-surface p-6 shadow-soft sm:p-8 lg:col-span-3"
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
                                    <p role="alert" className="mt-1.5 text-sm text-secondary">
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
                                    <p role="alert" className="mt-1.5 text-sm text-secondary">
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
                                rows={5}
                                placeholder="Tell me about your project or role..."
                                className={`${field} resize-y`}
                                aria-invalid={!!errors.message}
                                {...register("message")}
                            />
                            {errors.message && (
                                <p role="alert" className="mt-1.5 text-sm text-secondary">
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
                                    <span className="font-medium text-secondary">
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