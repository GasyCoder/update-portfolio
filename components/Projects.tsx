'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export default function Projects() {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform with real-time inventory management and payment integration',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/gasycoder/project1',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates and team features',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/gasycoder/project2',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern and minimal portfolio website with dark mode and multi-language support',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      githubUrl: 'https://github.com/gasycoder/portfolio',
    },
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather dashboard with location-based forecasts and interactive maps',
      technologies: ['React', 'OpenWeather API', 'Leaflet'],
      liveUrl: 'https://example.com',
      githubUrl: 'https://github.com/gasycoder/weather-app',
    },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        {t.projects.title}
      </h2>

      <div className="grid grid-cols-1 gap-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-colors bg-white dark:bg-[#0d1117]"
          >
            <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-3">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="text-xs text-blue-700 dark:text-blue-400 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 rounded border border-blue-300 dark:border-blue-800"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-sm">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <ExternalLink size={14} />
                  <span>{t.projects.viewProject}</span>
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github size={14} />
                  <span>{t.projects.viewCode}</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
