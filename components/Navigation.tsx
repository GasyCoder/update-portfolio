'use client';

import { useTheme } from '@/lib/ThemeContext';
import { useLanguage } from '@/lib/LanguageContext';
import { Sun, Moon, Languages } from 'lucide-react';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="flex justify-end gap-2 mb-6">
      <button
        onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
        className="p-1.5 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors text-xs"
        aria-label="Change language"
      >
        <Languages size={14} strokeWidth={1.5} />
      </button>

      <button
        onClick={toggleTheme}
        className="p-1.5 text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors text-xs"
        aria-label="Toggle theme"
      >
        {theme === 'dark' ? <Sun size={14} strokeWidth={1.5} /> : <Moon size={14} strokeWidth={1.5} />}
      </button>
    </nav>
  );
}
