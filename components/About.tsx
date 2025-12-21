'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { MapPin, Briefcase, Target } from 'lucide-react';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-800">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
        {t.about.title}
      </h2>

      <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        {t.about.description}
      </p>

      <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin size={16} strokeWidth={1.5} />
          <span>Madagascar</span>
        </div>
        <span className="text-gray-300 dark:text-gray-700">•</span>
        <div className="flex items-center gap-2">
          <Briefcase size={16} strokeWidth={1.5} />
          <span>Full Stack Developer</span>
        </div>
        <span className="text-gray-300 dark:text-gray-700">•</span>
        <div className="flex items-center gap-2">
          <Target size={16} strokeWidth={1.5} />
          <span>Open to opportunities</span>
        </div>
      </div>
    </section>
  );
}
