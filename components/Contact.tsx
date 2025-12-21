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
    <section id="contact" className="mb-12 pb-12 border-b border-gray-200 dark:border-gray-800">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
        {t.contact.title}
      </h2>

      <div className="flex flex-wrap gap-4 mb-8">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
            >
              <Icon size={16} strokeWidth={1.5} />
              <span>{social.name}</span>
            </a>
          );
        })}
      </div>

      <p className="text-[15px] text-gray-600 dark:text-gray-400">
        Available for projects • <a href="mailto:contact@gasycoder.dev" className="text-gray-900 dark:text-gray-100 hover:underline">contact@gasycoder.dev</a>
      </p>
    </section>
  );
}
