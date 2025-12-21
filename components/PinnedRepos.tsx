'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { ExternalLink, Github, Star } from 'lucide-react';

interface Repository {
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  githubUrl: string;
  liveUrl?: string;
}

export default function PinnedRepos() {
  const { t } = useLanguage();

  const repositories: Repository[] = [
    {
      name: 'e-commerce-platform',
      description: 'A modern e-commerce platform with real-time inventory management and payment integration',
      language: 'TypeScript',
      languageColor: '#3178c6',
      stars: 42,
      githubUrl: 'https://github.com/gasycoder/ecommerce-platform',
      liveUrl: 'https://example.com',
    },
    {
      name: 'task-management-app',
      description: 'Collaborative task management application with real-time updates and team features',
      language: 'JavaScript',
      languageColor: '#f1e05a',
      stars: 28,
      githubUrl: 'https://github.com/gasycoder/task-manager',
      liveUrl: 'https://example.com',
    },
    {
      name: 'portfolio-website',
      description: 'Modern and minimal portfolio website with dark mode and multi-language support',
      language: 'TypeScript',
      languageColor: '#3178c6',
      stars: 15,
      githubUrl: 'https://github.com/gasycoder/portfolio',
    },
    {
      name: 'weather-dashboard',
      description: 'Real-time weather dashboard with location-based forecasts and interactive maps',
      language: 'React',
      languageColor: '#61dafb',
      stars: 33,
      githubUrl: 'https://github.com/gasycoder/weather-app',
      liveUrl: 'https://example.com',
    },
    {
      name: 'ai-content-generator',
      description: 'AI-powered content generation tool using GPT-4 with custom templates and workflows',
      language: 'Python',
      languageColor: '#3572A5',
      stars: 67,
      githubUrl: 'https://github.com/gasycoder/ai-content-gen',
    },
    {
      name: 'api-gateway',
      description: 'Scalable API gateway with rate limiting, caching, and authentication',
      language: 'Node.js',
      languageColor: '#68a063',
      stars: 51,
      githubUrl: 'https://github.com/gasycoder/api-gateway',
    },
  ];

  return (
    <div>
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4 flex items-center gap-2">
        <Github size={20} strokeWidth={1.5} />
        Pinned Repositories
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {repositories.map((repo, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors bg-white dark:bg-gray-900"
          >
            <div className="flex items-start justify-between mb-2">
              <a
                href={repo.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline font-semibold text-sm"
              >
                <Github size={16} strokeWidth={1.5} />
                <span>{repo.name}</span>
              </a>
              {repo.liveUrl && (
                <a
                  href={repo.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <ExternalLink size={14} strokeWidth={1.5} />
                </a>
              )}
            </div>

            <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
              {repo.description}
            </p>

            <div className="flex items-center gap-4 text-xs text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-1">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: repo.languageColor }}
                />
                <span>{repo.language}</span>
              </div>
              <div className="flex items-center gap-1">
                <Star size={14} strokeWidth={1.5} />
                <span>{repo.stars}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
