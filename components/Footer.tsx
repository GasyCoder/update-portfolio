'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Brand */}
          <div>
            <div className="text-sm font-medium text-white mb-2">
              GasyCoder
            </div>
            <p className="text-xs text-gray-600">
              © {currentYear} {t.footer.rights}
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#home" className="hover:text-gray-400 transition-colors">
              {t.nav.home}
            </a>
            <a href="#about" className="hover:text-gray-400 transition-colors">
              {t.nav.about}
            </a>
            <a href="#projects" className="hover:text-gray-400 transition-colors">
              {t.nav.projects}
            </a>
            <a href="#skills" className="hover:text-gray-400 transition-colors">
              {t.nav.skills}
            </a>
            <a href="#contact" className="hover:text-gray-400 transition-colors">
              {t.nav.contact}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
