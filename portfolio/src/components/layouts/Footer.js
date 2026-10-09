import { FiArrowUp } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { profile } from "@/data/profile";

const socials = [
    { label: "GitHub", href: profile.socials.github, icon: FaGithub },
    { label: "LinkedIn", href: profile.socials.linkedin, icon: FaLinkedinIn },
    { label: "Facebook", href: profile.socials.facebook, icon: FaFacebookF },
];

export default function Footer() {
    return (
        <footer className="glow-bg relative overflow-hidden border-t-[1.5px] border-border pt-12">
            <div className="container-x">
                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                    <div className="flex gap-2.5">
                        {socials.map(({ label, href, icon: Icon }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="grid size-11 place-items-center rounded-full border-[1.5px] border-border bg-surface transition-all hover:-translate-y-1 hover:bg-secondary-soft"
                            >
                                <Icon size={17} />
                            </a>
                        ))}
                    </div>

                    <a href="#home" className="btn btn-ghost btn-sm">
                        Back to top
                        <FiArrowUp size={16} />
                    </a>
                </div>

                <p className="mt-8 text-sm text-muted">
                    © {new Date().getFullYear()} {profile.name}. Designed and built with
                    Next.js, Tailwind CSS and Framer Motion.
                </p>
            </div>

            {/* big faded wordmark */}
            <p
                aria-hidden="true"
                className="pointer-events-none mt-6 select-none whitespace-nowrap text-center font-display text-[17vw] font-bold leading-[0.8] tracking-tighter text-primary/10 sm:text-[15vw]"
            >
                {profile.shortName}
            </p>
        </footer>
    );
}