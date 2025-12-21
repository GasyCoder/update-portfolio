'use client';

import { useLanguage } from '@/lib/LanguageContext';
import ContributionGraph from './ContributionGraph';
import PinnedRepos from './PinnedRepos';
import TechStackBadges from './TechStackBadges';

export default function OverviewSection() {
  const { t } = useLanguage();

  return (
    <div className="space-y-8">
      {/* About Section */}
      <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-[#0d1117]">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
          About
        </h2>
        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
          {t.about.description}
        </p>

        <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Automation & AI
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            Building n8n workflows, CLI utilities, and LLM integration patterns. Focused on creating tools that enhance developer productivity and automate repetitive tasks.
          </p>
        </div>
      </div>

      {/* Tech Stack Badges */}
      <TechStackBadges />

      {/* Contribution Graph */}
      <ContributionGraph />

      {/* Pinned Repositories */}
      <PinnedRepos />
    </div>
  );
}
