'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/gasycoder' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/gasycoder' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/gasycoder' },
    { name: 'Email', icon: Mail, url: 'mailto:contact@gasycoder.dev' },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
        {t.contact.title}
      </h2>

      <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-[#0d1117]">
        <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Let's Connect
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 border border-gray-200 dark:border-gray-800 rounded-md hover:border-blue-500 dark:hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all group"
              >
                <Icon size={20} strokeWidth={1.5} className="text-gray-600 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">{social.name}</span>
              </a>
            );
          })}
        </div>

        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
            💼 Open to opportunities
          </p>
          <p className="text-sm">
            <a
              href="mailto:contact@gasycoder.dev"
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
            >
              contact@gasycoder.dev
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
