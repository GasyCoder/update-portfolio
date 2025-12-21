'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { MapPin, Briefcase, Target } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { value: '3+', label: t.about.experience },
    { value: '50+', label: t.about.projectsCompleted },
    { value: '20+', label: t.about.technologies },
  ];

  return (
    <section id="about" className="py-10 border-b border-gray-200 dark:border-white/10">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-5">
        {t.about.title}
      </h2>

      <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
        {t.about.description}
      </p>

      <div className="flex flex-wrap gap-4 text-sm text-gray-700 dark:text-gray-400 mb-6">
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100/80 dark:bg-white/5 rounded-lg border border-gray-200/50 dark:border-white/10 hover:bg-gray-200/80 dark:hover:bg-white/10 transition-colors duration-300">
          <MapPin size={16} strokeWidth={1.5} className="text-blue-500 dark:text-blue-400" />
          <span>Madagascar</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100/80 dark:bg-white/5 rounded-lg border border-gray-200/50 dark:border-white/10 hover:bg-gray-200/80 dark:hover:bg-white/10 transition-colors duration-300">
          <Briefcase size={16} strokeWidth={1.5} className="text-blue-500 dark:text-blue-400" />
          <span>Full Stack Developer</span>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 bg-gray-100/80 dark:bg-white/5 rounded-lg border border-gray-200/50 dark:border-white/10 hover:bg-gray-200/80 dark:hover:bg-white/10 transition-colors duration-300">
          <Target size={16} strokeWidth={1.5} className="text-green-500 dark:text-green-400" />
          <span>Open to opportunities</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6 text-sm">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-white/5 dark:to-white/10 rounded-xl border border-gray-200/50 dark:border-white/10 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
            <div className="text-xs text-gray-600 dark:text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
