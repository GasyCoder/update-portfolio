'use client';

import { useTheme } from '@/lib/ThemeContext';
import { useLanguage } from '@/lib/LanguageContext';
import { Sun, Moon, Languages } from 'lucide-react';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="flex justify-end gap-3 mb-8">
      <button
        onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
        className="group relative p-3 rounded-xl bg-gray-100/80 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 border border-gray-200/50 dark:border-white/10 shadow-sm hover:shadow-md"
        aria-label="Change language"
      >
        <Languages size={18} strokeWidth={1.5} className="transition-transform duration-300 group-hover:rotate-12" />
        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {language === 'fr' ? 'EN' : 'FR'}
        </span>
      </button>

      <button
        onClick={toggleTheme}
        className="group relative p-3 rounded-xl bg-gray-100/80 dark:bg-white/5 text-gray-600 dark:text-gray-300 hover:bg-gray-200/80 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110 active:scale-95 border border-gray-200/50 dark:border-white/10 shadow-sm hover:shadow-md"
        aria-label="Toggle theme"
      >
        <div className="relative w-[18px] h-[18px]">
          <Sun
            size={18}
            strokeWidth={1.5}
            className={`absolute inset-0 transition-all duration-500 ${
              theme === 'dark'
                ? 'rotate-0 scale-100 opacity-100'
                : 'rotate-90 scale-0 opacity-0'
            }`}
          />
          <Moon
            size={18}
            strokeWidth={1.5}
            className={`absolute inset-0 transition-all duration-500 ${
              theme === 'dark'
                ? '-rotate-90 scale-0 opacity-0'
                : 'rotate-0 scale-100 opacity-100'
            }`}
          />
        </div>
        <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          {theme === 'dark' ? 'Light' : 'Dark'}
        </span>
      </button>
    </nav>
  );
}
