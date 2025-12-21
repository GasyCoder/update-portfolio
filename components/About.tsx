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
    <section id="about" className="py-6 border-b border-white/10">
      <h2 className="text-lg font-medium text-white mb-3">
        {t.about.title}
      </h2>

      <p className="text-sm text-gray-400 leading-relaxed mb-4">
        {t.about.description}
      </p>

      <div className="flex gap-6 text-xs text-gray-500 mb-3">
        <div className="flex items-center gap-2">
          <MapPin size={14} strokeWidth={1.5} />
          <span>Madagascar</span>
        </div>
        <div className="flex items-center gap-2">
          <Briefcase size={14} strokeWidth={1.5} />
          <span>Full Stack Developer</span>
        </div>
        <div className="flex items-center gap-2">
          <Target size={14} strokeWidth={1.5} />
          <span>Open to opportunities</span>
        </div>
      </div>

      <div className="flex gap-6 text-xs">
        {stats.map((stat, index) => (
          <div key={index}>
            <span className="text-white font-medium">{stat.value}</span>
            <span className="text-gray-500 ml-1">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
