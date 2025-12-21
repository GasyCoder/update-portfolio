'use client';

import { useEffect, useState } from 'react';
import { ExternalLink, Github, Star, GitFork } from 'lucide-react';
import { getTopRepositories, getLanguageColor, type GitHubRepo } from '@/lib/github';

export default function PinnedRepos() {
  const [repositories, setRepositories] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadRepos() {
      try {
        const repos = await getTopRepositories(6);
        setRepositories(repos);
      } catch (error) {
        console.error('Error loading repositories:', error);
      } finally {
        setLoading(false);
      }
    }

    loadRepos();
  }, []);

  if (loading) {
    return (
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
          <Github size={20} strokeWidth={1.5} />
          Top Repositories
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 animate-pulse"
            >
              <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-3" />
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full mb-2" />
              <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
        <Github size={20} strokeWidth={1.5} />
        Top Repositories ({repositories.length})
      </h2>

      {repositories.length === 0 ? (
        <div className="p-8 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-900 text-center">
          <p className="text-gray-600 dark:text-gray-400">No repositories found</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {repositories.map((repo) => (
            <div
              key={repo.id}
              className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors bg-white dark:bg-gray-900"
            >
              <div className="flex items-start justify-between mb-2">
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold text-sm"
                >
                  <Github size={16} strokeWidth={1.5} />
                  <span className="truncate">{repo.name}</span>
                </a>
                {repo.homepage && (
                  <a
                    href={repo.homepage}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 flex-shrink-0"
                    title="Visit live site"
                  >
                    <ExternalLink size={14} strokeWidth={1.5} />
                  </a>
                )}
              </div>

              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                {repo.description || 'No description provided'}
              </p>

              <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
                {repo.language && (
                  <div className="flex items-center gap-1">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: getLanguageColor(repo.language) }}
                    />
                    <span>{repo.language}</span>
                  </div>
                )}
                <div className="flex items-center gap-1">
                  <Star size={14} strokeWidth={1.5} />
                  <span>{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork size={14} strokeWidth={1.5} />
                  <span>{repo.forks_count}</span>
                </div>
              </div>

              {/* Topics/Tags */}
              {repo.topics && repo.topics.length > 0 && (
                <div className="flex flex-wrap gap-1 mt-3">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="px-2 py-0.5 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
