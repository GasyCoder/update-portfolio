'use client';

import { useState, useEffect } from 'react';
import { useTheme } from '@/lib/ThemeContext';
import { useLanguage } from '@/lib/LanguageContext';
import { Sun, Moon, Languages } from 'lucide-react';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-black/80 backdrop-blur-sm border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-sm font-medium tracking-tight text-white">
            GC
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {t.nav.home}
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {t.nav.about}
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {t.nav.projects}
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {t.nav.skills}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-sm text-gray-400 hover:text-white transition-colors"
            >
              {t.nav.contact}
            </button>
          </div>

          {/* Theme & Language Toggle */}
          <div className="flex items-center gap-2">
            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Change language"
            >
              <Languages size={18} strokeWidth={1.5} />
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 text-gray-400 hover:text-white transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={18} strokeWidth={1.5} /> : <Moon size={18} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
