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
    <section id="projects" className="py-10 border-b border-gray-200 dark:border-white/10">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        {t.projects.title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group p-5 bg-gradient-to-br from-gray-50 to-white dark:from-white/5 dark:to-white/10 rounded-xl border border-gray-200/50 dark:border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-3">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="px-2.5 py-1 text-xs bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 rounded-md border border-blue-200/50 dark:border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <ExternalLink size={14} />
                  {t.projects.viewProject}
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Github size={14} />
                  {t.projects.viewCode}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
