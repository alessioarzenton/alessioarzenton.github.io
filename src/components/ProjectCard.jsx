function ProjectCard({ title, description, tags, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg border border-border bg-surface p-6 transition-colors hover:border-muted"
    >
      <h2 className="mb-2 text-lg font-bold text-text">{title}</h2>
      <p className="mb-4 text-sm leading-relaxed text-muted">{description}</p>
      {tags && (
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag.toLowerCase()}
              className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  );
}

export default ProjectCard;
