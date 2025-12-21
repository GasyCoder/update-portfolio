'use client';

import { useLanguage } from '@/lib/LanguageContext';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Contact() {
  const { t } = useLanguage();

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/gasycoder', color: 'hover:bg-gray-800 dark:hover:bg-gray-700' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://linkedin.com/in/gasycoder', color: 'hover:bg-blue-600' },
    { name: 'Twitter', icon: Twitter, url: 'https://twitter.com/gasycoder', color: 'hover:bg-sky-500' },
    { name: 'Email', icon: Mail, url: 'mailto:contact@gasycoder.dev', color: 'hover:bg-purple-600' },
  ];

  return (
    <section id="contact" className="py-10 border-b border-gray-200 dark:border-white/10">
      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
        {t.contact.title}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {socialLinks.map((social, index) => {
          const Icon = social.icon;
          return (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center gap-3 p-5 bg-gradient-to-br from-gray-50 to-white dark:from-white/5 dark:to-white/10 rounded-xl border border-gray-200/50 dark:border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${social.color} hover:text-white`}
            >
              <Icon size={24} strokeWidth={1.5} className="transition-transform duration-300 group-hover:scale-110" />
              <span className="text-sm font-medium">{social.name}</span>
            </a>
          );
        })}
      </div>

      <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10 rounded-xl border border-blue-200/50 dark:border-blue-500/20">
        <p className="text-sm text-gray-700 dark:text-gray-300 text-center">
          <span className="inline-flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Available for projects • <a href="mailto:contact@gasycoder.dev" className="font-semibold text-blue-600 dark:text-blue-400 hover:underline">contact@gasycoder.dev</a>
          </span>
        </p>
      </div>
    </section>
  );
}
