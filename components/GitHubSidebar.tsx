'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';
import { MapPin, Briefcase, Mail, Linkedin, Twitter, Github, ExternalLink } from 'lucide-react';

export default function GitHubSidebar() {
  const { t } = useLanguage();

  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="sticky top-8 space-y-4">
        {/* Profile Photo */}
        <div className="relative">
          <Image
            src="/profile.jpg"
            alt="GasyCoder Profile"
            width={260}
            height={260}
            className="rounded-full w-full border-2 border-gray-200 dark:border-gray-800"
            priority
          />
        </div>

        {/* Name and Username */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            BEZARA Florent
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            GasyCoder
          </p>
        </div>

        {/* Bio */}
        <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
          {t.hero.role}
        </p>

        {/* Location and Status */}
        <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <Briefcase size={16} strokeWidth={1.5} />
            <span>Full Stack Developer</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} strokeWidth={1.5} />
            <span>Mahajanga, Madagascar</span>
          </div>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-2 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-md text-sm">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-700 dark:text-green-400">Open to opportunities</span>
        </div>

        {/* Social Links */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
          <div className="space-y-2">
            <a
              href="mailto:contact@gasycoder.com"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Mail size={16} strokeWidth={1.5} />
              <span>contact@gasycoder.com</span>
            </a>
            <a
              href="https://github.com/GasyCoder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Github size={16} strokeWidth={1.5} />
              <span>github.com/GasyCoder</span>
            </a>
            <a
              href="https://linkedin.com/in/gasycoder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin size={16} strokeWidth={1.5} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://twitter.com/gasycoder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Twitter size={16} strokeWidth={1.5} />
              <span>Twitter</span>
            </a>
          </div>
        </div>

        {/* Achievements */}
        <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-3">
            Achievements
          </h3>
          <div className="flex gap-2">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center text-white text-2xl font-bold">
              🚀
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md flex items-center justify-center text-white text-2xl font-bold">
              ⭐
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-md flex items-center justify-center text-white text-2xl font-bold">
              🔥
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
