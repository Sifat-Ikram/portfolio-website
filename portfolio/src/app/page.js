import About from "@/components/sections/About";

const placeholders = [
  { id: "experience", title: "Experience", note: "Animated timeline" },
  { id: "projects", title: "Projects", note: "Play House and more, with live links" },
  { id: "skills", title: "Skills", note: "Frontend, Backend and Database groups" },
  { id: "education", title: "Education", note: "Short and clean" },
];

export default function Home() {
  return (
    <main>
      <section
        id="home"
        className="glow-bg flex min-h-svh items-center pb-16 pt-24"
      >
        <div className="container-x">
          <span className="sticker">Open to work</span>

          <h1 className="mt-6 max-w-4xl text-4xl sm:text-5xl lg:text-6xl 2xl:text-7xl">
            Frontend Engineer building fast, reliable and{" "}
            <span className="text-gradient">well-crafted</span> web products.
          </h1>

          <p className="mt-5 max-w-2xl text-base text-muted sm:text-lg">
            2 years of professional experience with React and Next.js, plus
            full-stack skills across Node.js, Express and MongoDB.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="btn btn-primary">
              View projects
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact me
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <About />

      {/* PLACEHOLDERS */}
      {placeholders.map(({ id, title, note }) => (
        <section key={id} id={id} className="section min-h-[80svh]">
          <div className="container-x">
            <span className="pill">{title}</span>
            <div className="bento mt-6 p-6 sm:p-10">
              <h2 className="text-3xl sm:text-4xl">{title}</h2>
              <p className="mt-3 text-muted">{note}</p>
            </div>
          </div>
        </section>
      ))}

      {/* CONTACT */}
      <section id="contact" className="section min-h-[80svh]">
        <div className="container-x">
          <span className="pill">Contact</span>
          <div className="bento mt-6 p-6 sm:p-10">
            <h2 className="text-3xl sm:text-4xl">Let&apos;s work together</h2>
            <p className="mt-3 text-muted">Form, email copy and social links</p>
          </div>
        </div>
      </section>
    </main>
  );
}