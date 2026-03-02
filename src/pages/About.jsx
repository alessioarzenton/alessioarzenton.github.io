import usePageTitle from "../hooks/usePageTitle";
import { experience, education, skills } from "../data/resume";

function TimelineItem({ period, title, company, description, tags }) {
  return (
    <div className="relative border-l border-border pl-6 pb-8 last:pb-0">
      <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full border-2 border-border bg-bg" />
      <span className="text-xs text-muted">{period}</span>
      <h3 className="mt-1 text-base font-semibold text-text">{title}</h3>
      <p className="text-sm text-muted">{company}</p>
      <p className="mt-2 text-sm leading-relaxed text-text">{description}</p>
      {tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag.toLowerCase()}
              className="rounded-full border border-border px-2 py-0.5 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function About() {
  usePageTitle("About");
  return (
    <>
      <section className="mb-10">
        <h1 className="mb-3 text-[2rem] font-bold text-text">About Me</h1>
        <p className="text-[1.0625rem] leading-relaxed text-muted">
          Full Stack Web Developer with experience building custom websites and
          applications, with a focus on performance, scalability and best
          practices.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-wide text-muted">
          Experience
        </h2>
        {experience.map((item) => (
          <TimelineItem key={item.title + item.company} {...item} />
        ))}
      </section>

      <section className="mb-10">
        <h2 className="mb-5 text-sm font-semibold uppercase tracking-wide text-muted">
          Education
        </h2>
        {education.map((item) => (
          <TimelineItem key={item.title + item.company} {...item} />
        ))}
      </section>

      <section className="mb-10">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          Skills
        </h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill.toLowerCase()}
              className="rounded-full border border-border px-3 py-1 text-xs font-medium text-text"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      <section className="mb-8">
        <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted">
          Contact
        </h2>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/alessioarzenton/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[18px] w-[18px]"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/alessioarzenton"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-[18px] w-[18px]"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </a>
          <a
            href="mailto:aless.arzenton@gmail.com"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:border-accent"
          >
            Email
          </a>
        </div>
      </section>
    </>
  );
}

export default About;
