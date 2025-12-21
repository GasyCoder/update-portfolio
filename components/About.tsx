'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  const stats = [
    { value: '3+', label: t.about.experience },
    { value: '50+', label: t.about.projectsCompleted },
    { value: '20+', label: t.about.technologies },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          {t.about.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image/Avatar */}
          <div className="relative group">
            <div className="w-full max-w-md mx-auto aspect-square rounded-2xl bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 animate-glow">
              <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                <div className="text-9xl">👨‍💻</div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500/20 rounded-full blur-xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500/20 rounded-full blur-xl animate-pulse-slow" />
          </div>

          {/* Right side - Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t.about.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-shadow neon-border"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Info */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <span className="text-2xl">📍</span>
                <span className="text-gray-700 dark:text-gray-300">Madagascar</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <span className="text-2xl">💼</span>
                <span className="text-gray-700 dark:text-gray-300">Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-pink-100 dark:bg-pink-900/30 rounded-lg">
                <span className="text-2xl">🎯</span>
                <span className="text-gray-700 dark:text-gray-300">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
