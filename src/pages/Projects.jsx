import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectCardSkeleton from "../components/ProjectCardSkeleton";
import TagFilter from "../components/TagFilter";
import useGithubRepos from "../hooks/useGithubRepos";
import usePageTitle from "../hooks/usePageTitle";

function Projects() {
  usePageTitle("Projects");
  const { repos, loading, error } = useGithubRepos();
  const [activeTags, setActiveTags] = useState([]);

  const allTags = [...new Set(repos.flatMap((p) => p.tags))];

  const filteredProjects =
    activeTags.length === 0
      ? repos
      : repos.filter((p) => activeTags.some((tag) => p.tags.includes(tag)));

  if (loading) {
    return (
      <div>
        <div className="mb-3 h-9 w-48 animate-pulse rounded bg-border" />
        <div className="mb-6 h-5 w-72 animate-pulse rounded bg-border" />
        <div className="grid grid-cols-1 gap-6">
          {[...Array(4)].map((_, i) => (
            <ProjectCardSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <p className="text-muted">Failed to load projects. Try again later.</p>;
  }

  return (
    <div>
      <h1 className="mb-3 text-[2rem] font-bold text-text">Projects</h1>
      <p className="mb-6 text-[1.0625rem] leading-relaxed text-muted">
        Here are some of the projects I've worked on.
      </p>
      {allTags.length > 0 && (
        <div className="mb-6">
          <TagFilter
            tags={allTags}
            activeTags={activeTags}
            onTagChanges={setActiveTags}
          />
        </div>
      )}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title.toLowerCase()} {...project} />
          ))}
        </div>
      ) : (
        <p className="py-12 text-center text-muted">
          No projects found for "{activeTags.join(", ")}".
        </p>
      )}
    </div>
  );
}

export default Projects;
