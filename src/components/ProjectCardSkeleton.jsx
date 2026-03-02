function ProjectCardSkeleton() {
  return (
    <div className="rounded-lg border border-border bg-surface p-6">
      <div className="mb-3 h-5 w-2/5 animate-pulse rounded bg-border" />
      <div className="mb-2 h-3 w-full animate-pulse rounded bg-border" />
      <div className="mb-4 h-3 w-3/4 animate-pulse rounded bg-border" />
      <div className="flex gap-2">
        <div className="h-5 w-14 animate-pulse rounded-full bg-border" />
        <div className="h-5 w-16 animate-pulse rounded-full bg-border" />
        <div className="h-5 w-12 animate-pulse rounded-full bg-border" />
      </div>
    </div>
  );
}

export default ProjectCardSkeleton;
