import { useState, useEffect } from "react";
import config from "../config";

const CACHE_KEY = "github_repos";
const CACHE_DURATION = 1000 * 60 * 15; // 15 minuti

function getCachedRepos() {
  const cached = localStorage.getItem(CACHE_KEY);
  if (!cached) return null;

  const { data, timestamp } = JSON.parse(cached);
  // Se la cache è scaduta, ritorna null
  if (Date.now() - timestamp > CACHE_DURATION) return null;

  return data;
}

function setCachedRepos(data) {
  localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
}

function mapRepos(data) {
  return data
    .filter(
      (repo) =>
        !repo.fork &&
        repo.visibility === "public" &&
        !repo.name.includes("alessioarzenton"),
    )
    .map((repo) => ({
      title: repo.name,
      description: repo.description || "No description provided.",
      tags: [...new Set(
        [repo.language, ...(repo.topics || [])].filter(Boolean).map((t) => t.toLowerCase()),
      )],
      url: repo.html_url,
    }));
}

function useGithubRepos() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Prova a leggere dalla cache
    const cached = getCachedRepos();
    if (cached) {
      setRepos(cached);
      setLoading(false);
      return;
    }

    // Se non c'è cache, fetch dall'API
    fetch(`${config.github.apiUrl}/repos?sort=updated&per_page=100`)
      .then((res) => {
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`);
        return res.json();
      })
      .then((data) => {
        const projects = mapRepos(data);
        setCachedRepos(projects);
        setRepos(projects);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { repos, loading, error };
}

export default useGithubRepos;
