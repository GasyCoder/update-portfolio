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
    <section id="projects" className="py-6 border-b border-white/10">
      <h2 className="text-lg font-medium text-white mb-3">
        {t.projects.title}
      </h2>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <div key={index} className="border-l-2 border-white/20 pl-3">
            <h3 className="text-sm font-medium text-white">
              {project.title}
            </h3>
            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2 text-xs text-gray-600">
              {project.technologies.map((tech, techIndex) => (
                <span key={techIndex}>{tech}</span>
              ))}
            </div>
            <div className="flex gap-3 mt-2 text-xs">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-400 hover:text-white"
                >
                  <ExternalLink size={12} />
                  {t.projects.viewProject}
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-400 hover:text-white"
                >
                  <Github size={12} />
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
