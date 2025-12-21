'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

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
    <section id="projects" className="rounded-3xl border border-slate-200/70 bg-white/70 p-6 shadow-md shadow-slate-200/30 backdrop-blur-xl dark:border-white/5 dark:bg-white/5 md:p-10">
      <div className="flex items-start gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
        <ArrowUpRight size={14} />
        {t.projects.title}
      </div>

      <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white/90 via-white/70 to-slate-50/70 p-5 shadow-lg shadow-slate-200/25 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-200/40 dark:border-white/5 dark:from-white/10 dark:via-white/5 dark:to-slate-950"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-sky-500/5 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="relative flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/70 bg-white/70 text-slate-600 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-indigo-500/40"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200/70 bg-white/70 text-slate-600 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-indigo-500/40"
                    >
                      <Github size={16} />
                    </a>
                  )}
                </div>
              </div>
              <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-100"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
