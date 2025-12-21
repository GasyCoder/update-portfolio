'use client';

import { useTheme } from '@/lib/ThemeContext';
import { useLanguage } from '@/lib/LanguageContext';
import { Sun, Moon, Languages } from 'lucide-react';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();

  return (
    <nav className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200/70 bg-white/70 p-3 shadow-sm backdrop-blur-md dark:border-white/5 dark:bg-white/5">
      <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300">
        <span className="h-2 w-2 rounded-full bg-gradient-to-br from-sky-500 to-indigo-500" />
        GasyCoder
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
          className="flex items-center gap-2 rounded-xl border border-slate-200/70 bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-indigo-200 hover:text-indigo-700 dark:border-white/5 dark:bg-white/5 dark:text-slate-200 dark:hover:border-indigo-500/40 dark:hover:text-white"
          aria-label="Change language"
        >
          <Languages size={18} strokeWidth={1.5} />
          <span className="hidden sm:inline">{language === 'fr' ? 'FR' : 'EN'}</span>
        </button>

        <button
          onClick={toggleTheme}
          className="group relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border border-slate-200/70 bg-white/70 transition hover:-translate-y-0.5 hover:border-indigo-200 dark:border-white/5 dark:bg-white/5 dark:hover:border-indigo-500/40"
          aria-label="Toggle theme"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-white to-indigo-100 opacity-0 transition group-hover:opacity-100 dark:from-sky-500/20 dark:via-white/5 dark:to-indigo-600/20" />
          <div className="relative">
            <Sun
              size={18}
              strokeWidth={1.5}
              className={`absolute inset-0 transition-all duration-300 ${theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'}`}
            />
            <Moon
              size={18}
              strokeWidth={1.5}
              className={`absolute inset-0 transition-all duration-300 ${theme === 'dark' ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`}
            />
          </div>
        </button>
      </div>
    </nav>
  );
}
