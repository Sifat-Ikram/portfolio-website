import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import ThemeProvider from "@/components/providers/ThemeProvider";
import SmoothScroll from "@/components/providers/SmoothScroll";
import SideDrawer from "@/components/layouts/SideDrawer";
import CommandPalette from "@/components/ui/CommandPalette";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MD. Sifat Ikram | Frontend Engineer & Full-Stack Developer",
    template: "%s | MD. Sifat Ikram",
  },
  description:
    "Frontend Engineer with 2 years of experience building fast, user-focused web apps with React, Next.js and the MERN stack.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "MERN Stack",
    "Portfolio",
    "Bangladesh",
  ],
  authors: [{ name: "MD. Sifat Ikram" }],
  openGraph: {
    title: "MD. Sifat Ikram | Frontend Engineer",
    description:
      "Fast, polished and user-focused web apps with React, Next.js and the MERN stack.",
    url: siteUrl,
    siteName: "MD. Sifat Ikram",
    type: "website",
    // TODO: add public/og.png (1200x630) and uncomment:
    // images: [{ url: "/og.png", width: 1200, height: 630 }],
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#faf7f2" },
    { media: "(prefers-color-scheme: dark)", color: "#14121a" },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jakarta.variable} ${inter.variable}`}
    >
      <body>
        <ThemeProvider>
          <SmoothScroll>
            <CommandPalette />
            <SideDrawer />
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}