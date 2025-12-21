'use client';

import { useState } from 'react';
import { useLanguage } from '@/lib/LanguageContext';
import { BookOpen, Code, Layers, Mail } from 'lucide-react';

interface ProfileTabsProps {
  onTabChange: (tab: string) => void;
  activeTab: string;
}

export default function ProfileTabs({ onTabChange, activeTab }: ProfileTabsProps) {
  const { t } = useLanguage();

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'projects', label: t.projects.title, icon: Code },
    { id: 'skills', label: t.skills.title, icon: Layers },
    { id: 'contact', label: t.contact.title, icon: Mail },
  ];

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 mb-8">
      <div className="flex gap-2 overflow-x-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`
                flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap
                border-b-2 transition-colors
                ${
                  activeTab === tab.id
                    ? 'border-orange-500 text-gray-900 dark:text-gray-100'
                    : 'border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:border-gray-300 dark:hover:border-gray-700'
                }
              `}
            >
              <Icon size={16} strokeWidth={1.5} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
