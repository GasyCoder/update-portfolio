'use client';

import { useLanguage } from '@/lib/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 mt-6 text-center text-xs text-gray-600">
      © {currentYear} GasyCoder • {t.footer.rights}
    </footer>
  );
}
