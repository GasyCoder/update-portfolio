'use client';

import { useTheme } from '@/lib/ThemeContext';
import { useLanguage } from '@/lib/LanguageContext';
import { Sun, Moon, Languages } from 'lucide-react';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="flex justify-end gap-2 mb-12">
      <button
        onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
        className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
        aria-label="Change language"
      >
        <Languages size={20} strokeWidth={1.5} />
      </button>

      <button
        onClick={toggleTheme}
        className="p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
        aria-label="Toggle theme"
      >
        <div className="relative w-5 h-5">
          <Sun
            size={20}
            strokeWidth={1.5}
            className={`absolute inset-0 transition-all duration-300 ${
              theme === 'dark'
                ? 'rotate-0 scale-100 opacity-100'
                : 'rotate-90 scale-0 opacity-0'
            }`}
          />
          <Moon
            size={20}
            strokeWidth={1.5}
            className={`absolute inset-0 transition-all duration-300 ${
              theme === 'dark'
                ? '-rotate-90 scale-0 opacity-0'
                : 'rotate-0 scale-100 opacity-100'
            }`}
          />
        </div>
      </button>
    </nav>
  );
}
