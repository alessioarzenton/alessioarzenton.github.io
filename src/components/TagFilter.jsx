function TagFilter({ tags, activeTag, onTagChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <button
          key={tag.toLowerCase()}
          onClick={() => onTagChange(tag === activeTag ? null : tag)}
          className={`rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
            tag === activeTag
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
