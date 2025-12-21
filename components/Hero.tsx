'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header className="py-12 border-b border-gray-200 dark:border-white/10">
      <div className="flex gap-8 items-start">
        <div className="flex-shrink-0 group">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
            <Image
              src="/profile.svg"
              alt="GasyCoder Profile Photo"
              width={120}
              height={120}
              className="rounded-full border-3 border-blue-500 dark:border-blue-400 relative z-10 transform group-hover:scale-105 transition-transform duration-300 shadow-lg"
              priority
            />
          </div>
        </div>
        <div className="space-y-3 flex-1">
          <h1 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
            GasyCoder
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 font-medium">
            {t.hero.role}
          </p>
          <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl">
            {t.hero.description}
          </p>
        </div>
      </div>
    </header>
  );
}
