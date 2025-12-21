'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-6">
          <p className="text-sm text-gray-500 tracking-wide">
            {t.hero.greeting}
          </p>

          <h1 className="text-6xl md:text-7xl font-light tracking-tight text-white">
            GasyCoder
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-400 font-light">
            {t.hero.role}
          </h2>

          <p className="text-base text-gray-500 max-w-xl leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-2.5 bg-white text-black text-sm font-medium hover:bg-gray-200 transition-colors"
            >
              {t.hero.cta}
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors"
            >
              {t.hero.downloadCV}
            </a>
          </div>
        </div>

        {/* Minimal scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <ArrowDown size={20} className="text-gray-600 animate-bounce" strokeWidth={1} />
        </div>
      </div>
    </section>
  );
}
