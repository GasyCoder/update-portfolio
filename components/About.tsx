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
    <section id="about" className="py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-light text-white mb-20">
          {t.about.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Left side - Content */}
          <div className="space-y-8">
            <p className="text-base text-gray-400 leading-relaxed">
              {t.about.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="border-l border-white/10 pl-4">
                  <div className="text-2xl font-light text-white">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="flex flex-col gap-3 pt-4">
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <MapPin size={16} strokeWidth={1.5} />
                <span>Madagascar</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Briefcase size={16} strokeWidth={1.5} />
                <span>Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <Target size={16} strokeWidth={1.5} />
                <span>Open to opportunities</span>
              </div>
            </div>
          </div>

          {/* Right side - Placeholder */}
          <div className="hidden md:block">
            <div className="aspect-square bg-white/5 border border-white/10" />
          </div>
        </div>
      </div>
    </section>
  );
}
