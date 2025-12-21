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
    <section id="contact" className="py-6 border-b border-gray-200 dark:border-white/10">
      <h2 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
        {t.contact.title}
      </h2>

      <div className="flex gap-4 text-xs text-gray-600 dark:text-gray-400 mb-3">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Icon size={12} strokeWidth={1.5} />
              <span>{social.name}</span>
            </a>
          );
        })}
      </div>

      <p className="text-xs text-gray-700 dark:text-gray-500">
        Available for projects • contact@gasycoder.dev
      </p>
    </section>
  );
}
