import { Link } from "react-router-dom";

const stack = [
  { label: "Backend", items: ["PHP", "WordPress", "Laravel", "MySQL"] },
  { label: "Frontend", items: ["React", "Tailwind CSS", "Alpine.js", "Blade"] },
  { label: "WordPress", items: ["Roots Bedrock", "Roots Sage"] },
  { label: "Tools", items: ["Git", "Docker", "Vite", "Composer"] },
  { label: "AI", items: ["Claude Code", "AI Agents"] },
];

function Home() {
  return (
    <>
      <section className="mb-12">
        <h1 className="mb-2 text-[2rem] font-bold text-text">
          Hi, I'm Alessio
        </h1>
        <p className="mb-4 text-lg text-muted">Web Developer</p>
        <p className="mb-6 leading-relaxed text-muted">
          I work for a software development company, building custom web
          solutions with PHP, WordPress and Laravel. I use Claude Code and AI
          agents daily as development support tools.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center rounded-lg bg-accent px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
        >
          About Me
        </Link>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          Stack
        </h2>
        <div className="flex flex-col gap-3">
          {stack.map(({ label, items }) => (
            <div className="flex items-baseline gap-3" key={label}>
              <span className="min-w-[100px] shrink-0 text-[0.8125rem] font-medium text-muted">
                {label}
              </span>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    className="rounded-md border border-border bg-surface px-3 py-1 text-sm text-text"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;
