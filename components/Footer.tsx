'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Heart } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 mt-8 text-center border-t border-gray-200 dark:border-white/10">
      <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 mb-2">
        <span>Made with</span>
        <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
        <span>by GasyCoder</span>
      </div>
      <p className="text-xs text-gray-500 dark:text-gray-500">
        © {currentYear} GasyCoder • {t.footer.rights}
      </p>
    </footer>
  );
}
