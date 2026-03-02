import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";
import config from "../config";

const stack = [
  { label: "Backend", items: ["PHP", "WordPress", "Laravel", "MySQL", "Python"] },
  { label: "Frontend", items: ["React", "Tailwind CSS", "Alpine.js", "Blade"] },
  { label: "WordPress", items: ["Roots Bedrock", "Roots Sage"] },
  { label: "Tools", items: ["Git", "Docker", "Vite", "Composer", "n8n"] },
  { label: "AI", items: ["Claude Code", "LLM / RAG", "Qdrant", "Prompt Engineering"] },
];

function Home() {
  usePageTitle(null);
  return (
    <>
      <section className="mb-12">
        <h1 className="mb-2 text-[2rem] font-bold text-text">
          Hi, I'm Alessio
        </h1>
        <p className="mb-4 text-lg text-muted">Full Stack Web Developer</p>
        <p className="mb-6 leading-relaxed text-muted">
          I build custom web solutions with React, PHP, WordPress and Laravel.
          Currently working at{" "}
          <span className="text-text">Net7 Srl</span>, where I also develop
          AI-powered features using LLMs, RAG pipelines and workflow automation.
        </p>
        <div className="flex gap-3">
          <Link
            to="/projects"
            className="rounded-lg bg-text px-4 py-2 text-sm font-medium text-bg transition-opacity hover:opacity-90"
          >
            View Projects
          </Link>
          <Link
            to="/about"
            className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-text transition-colors hover:border-muted"
          >
            About Me
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          Currently
        </h2>
        <div className="rounded-lg border border-border bg-surface p-5">
          <p className="text-sm font-medium text-text">Full Stack Developer @ Net7 Srl</p>
          <p className="mt-1 text-sm text-muted">
            React, Python, WordPress, LLMs, RAG with Qdrant, n8n automation
          </p>
        </div>
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

      <section className="mb-12">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          Connect
        </h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/alessioarzenton/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            LinkedIn
          </a>
          <a
            href={config.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            GitHub
          </a>
          <a
            href="mailto:aless.arzenton@gmail.com"
            className="text-sm text-muted transition-colors hover:text-text"
          >
            Email
          </a>
        </div>
      </section>
    </>
  );
}

export default Home;
