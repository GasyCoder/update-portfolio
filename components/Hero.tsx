'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header className="py-8 border-b border-gray-200 dark:border-white/10">
      <div className="flex gap-6 items-start">
        <div className="flex-shrink-0">
          <Image
            src="/profile.svg"
            alt="GasyCoder Profile Photo"
            width={100}
            height={100}
            className="rounded-full border-2 border-blue-500 dark:border-blue-500"
            priority
          />
        </div>
        <div className="space-y-2 flex-1">
          <h1 className="text-3xl font-medium text-gray-900 dark:text-white">
            GasyCoder
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {t.hero.role}
          </p>
          <p className="text-sm text-gray-700 dark:text-gray-500 leading-relaxed max-w-2xl">
            {t.hero.description}
          </p>
        </div>
      </div>
    </header>
  );
}
