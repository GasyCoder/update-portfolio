'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header className="py-8 border-b border-white/10">
      <div className="space-y-2">
        <h1 className="text-3xl font-medium text-white">
          GasyCoder
        </h1>
        <p className="text-sm text-gray-400">
          {t.hero.role}
        </p>
        <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
          {t.hero.description}
        </p>
      </div>
    </header>
  );
}
