function TagFilter({ tags, activeTags, onTagChanges }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag.toLowerCase()}
          onClick={() =>
            onTagChanges(
              activeTags.includes(tag)
                ? activeTags.filter((t) => t !== tag)
                : [...activeTags, tag]
            )
          }
          className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
            activeTags.includes(tag)
              ? "border-text bg-text text-bg"
              : "border-border text-muted hover:border-muted"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}

export default TagFilter;
