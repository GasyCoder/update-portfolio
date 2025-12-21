'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';
import { MapPin, Briefcase, Mail, Linkedin, Twitter, Github, ExternalLink } from 'lucide-react';

export default function GitHubSidebar() {
  const { t } = useLanguage();

  return (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div className="sticky top-20 space-y-5 p-4 transition-colors duration-200">
        {/* Profile Photo */}
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/profile.jpg"
              alt="GasyCoder Profile"
              width={180}
              height={180}
              className="rounded-full border-2 border-gray-200 dark:border-gray-700 transition-all duration-200"
              priority
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-2 border-white dark:border-gray-950 flex items-center justify-center transition-colors duration-200">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Name and Username */}
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-200">
            BEZARA Florent
          </h1>
          <p className="text-base text-gray-600 dark:text-gray-400 font-medium transition-colors duration-200">
            GasyCoder
          </p>
        </div>

        {/* CEO Title */}
        <div className="flex items-center justify-center gap-2 px-3 py-1.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-md">
          <Briefcase size={16} strokeWidth={2} className="text-white" />
          <span className="text-white font-semibold text-xs">CEO & Founder at GasyCoder</span>
        </div>

        {/* Bio */}
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed text-center transition-colors duration-200">
          {t.hero.role}
        </p>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent transition-colors duration-200" />

        {/* Location */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 transition-colors duration-200">
          <MapPin size={16} strokeWidth={1.5} className="text-gray-500 dark:text-gray-500" />
          <span>Mahajanga, Madagascar</span>
        </div>

        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-900/50 rounded-md text-xs transition-all duration-200">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-green-700 dark:text-green-400 font-medium transition-colors duration-200">Open to opportunities</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent transition-colors duration-200" />

        {/* Social Links */}
        <div className="space-y-2">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2 transition-colors duration-200">
            Connect
          </h3>
          <div className="space-y-1.5">
            <a
              href="mailto:contact@gasycoder.com"
              className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Mail size={14} strokeWidth={1.5} className="flex-shrink-0" />
              <span className="truncate">contact@gasycoder.com</span>
            </a>
            <a
              href="https://github.com/GasyCoder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Github size={14} strokeWidth={1.5} className="flex-shrink-0" />
              <span className="truncate">github.com/GasyCoder</span>
            </a>
            <a
              href="https://linkedin.com/in/gasycoder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Linkedin size={14} strokeWidth={1.5} className="flex-shrink-0" />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="https://twitter.com/gasycoder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
            >
              <Twitter size={14} strokeWidth={1.5} className="flex-shrink-0" />
              <span>Twitter / X</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent transition-colors duration-200" />

        {/* Achievements */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3 transition-colors duration-200">
            Achievements
          </h3>
          <div className="flex gap-2 justify-center">
            <div className="group relative">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-md flex items-center justify-center text-xl transition-all duration-200 hover:scale-105 cursor-pointer">
                🚀
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Early Adopter
              </div>
            </div>
            <div className="group relative">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-md flex items-center justify-center text-xl transition-all duration-200 hover:scale-105 cursor-pointer">
                ⭐
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Star Creator
              </div>
            </div>
            <div className="group relative">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-md flex items-center justify-center text-xl transition-all duration-200 hover:scale-105 cursor-pointer">
                🔥
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Hot Streak
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
