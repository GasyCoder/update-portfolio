'use client';

import { useLanguage } from '@/lib/LanguageContext';
import Image from 'next/image';
import { MapPin, Briefcase, Mail, Linkedin, Twitter, Github, ExternalLink } from 'lucide-react';

export default function GitHubSidebar() {
  const { t } = useLanguage();

  return (
    <aside className="w-full lg:w-80 flex-shrink-0">
      <div className="sticky top-8 space-y-5 bg-white dark:bg-gray-950 p-6 rounded-lg border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-gray-900/50 transition-colors duration-200">
        {/* Profile Photo */}
        <div className="flex justify-center">
          <div className="relative">
            <Image
              src="/profile.jpg"
              alt="GasyCoder Profile"
              width={200}
              height={200}
              className="rounded-full border-4 border-gray-100 dark:border-gray-800 shadow-lg dark:shadow-gray-900/50 transition-all duration-200"
              priority
            />
            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white dark:border-gray-950 flex items-center justify-center shadow-lg transition-colors duration-200">
              <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
            </div>
          </div>
        </div>

        {/* Name and Username */}
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-200">
            BEZARA Florent
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-medium transition-colors duration-200">
            GasyCoder
          </p>
        </div>

        {/* CEO Title */}
        <div className="flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md">
          <Briefcase size={18} strokeWidth={2} className="text-white" />
          <span className="text-white font-semibold text-sm">CEO & Founder at GasyCoder</span>
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
        <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-green-50 dark:bg-green-950/40 border border-green-200 dark:border-green-900/50 rounded-lg text-sm shadow-sm transition-all duration-200">
          <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-500/50" />
          <span className="text-green-700 dark:text-green-400 font-medium transition-colors duration-200">Open to opportunities</span>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent transition-colors duration-200" />

        {/* Social Links */}
        <div className="space-y-3">
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-3 transition-colors duration-200">
            Connect
          </h3>
          <div className="space-y-2.5">
            <a
              href="mailto:contact@gasycoder.com"
              className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900/50"
            >
              <Mail size={18} strokeWidth={1.5} className="flex-shrink-0" />
              <span className="truncate">contact@gasycoder.com</span>
            </a>
            <a
              href="https://github.com/GasyCoder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900/50"
            >
              <Github size={18} strokeWidth={1.5} className="flex-shrink-0" />
              <span className="truncate">github.com/GasyCoder</span>
            </a>
            <a
              href="https://linkedin.com/in/gasycoder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900/50"
            >
              <Linkedin size={18} strokeWidth={1.5} className="flex-shrink-0" />
              <span>LinkedIn Profile</span>
            </a>
            <a
              href="https://twitter.com/gasycoder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-900/50"
            >
              <Twitter size={18} strokeWidth={1.5} className="flex-shrink-0" />
              <span>Twitter / X</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent transition-colors duration-200" />

        {/* Achievements */}
        <div>
          <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4 transition-colors duration-200">
            Achievements
          </h3>
          <div className="flex gap-3 justify-center">
            <div className="group relative">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-2xl shadow-md hover:shadow-xl transition-all duration-200 hover:scale-110 cursor-pointer">
                🚀
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Early Adopter
              </div>
            </div>
            <div className="group relative">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center text-2xl shadow-md hover:shadow-xl transition-all duration-200 hover:scale-110 cursor-pointer">
                ⭐
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-700 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                Star Creator
              </div>
            </div>
            <div className="group relative">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-2xl shadow-md hover:shadow-xl transition-all duration-200 hover:scale-110 cursor-pointer">
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
