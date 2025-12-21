'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <header className="pb-12 mb-12 border-b border-gray-200 dark:border-gray-800">
      <div className="flex gap-6 items-start">
        <div className="flex-shrink-0">
          <Image
            src="/profile.jpg"
            alt="GasyCoder Profile"
            width={80}
            height={80}
            className="rounded-full"
            priority
          />
        </div>
        <div className="flex-1 space-y-3">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
            GasyCoder
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400">
            {t.hero.role}
          </p>
          <p className="text-[15px] text-gray-700 dark:text-gray-300 leading-relaxed">
            {t.hero.description}
          </p>
        </div>
      </div>
    </header>
  );
}
