'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 mt-8">
      <p className="text-sm text-gray-500 dark:text-gray-500">
        © {currentYear} GasyCoder • {t.footer.rights}
      </p>
    </footer>
  );
}
