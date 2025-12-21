'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import GitHubSidebar from '@/components/GitHubSidebar';
import ProfileTabs from '@/components/ProfileTabs';
import OverviewSection from '@/components/OverviewSection';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-slate-50 dark:bg-[#05060a] transition-colors">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-16 top-10 h-72 w-72 rounded-full bg-gradient-to-br from-sky-200/50 via-indigo-200/40 to-transparent blur-3xl dark:from-indigo-600/20 dark:via-sky-500/15" />
        <div className="absolute right-0 top-24 h-64 w-64 rounded-full bg-gradient-to-tr from-purple-200/60 via-sky-200/40 to-transparent blur-3xl dark:from-purple-700/20 dark:via-blue-600/15" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,#e2e8f0_1px,transparent_0)] opacity-60 [background-size:48px_48px] dark:bg-[radial-gradient(circle_at_1px_1px,#111827_1px,transparent_0)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-5xl px-6 pb-16 pt-10 md:px-8 md:pt-14">
        <div className="flex w-full flex-col gap-12 rounded-3xl border border-white/60 bg-white/80 p-6 shadow-xl shadow-slate-200/40 backdrop-blur-lg dark:border-white/5 dark:bg-white/5 dark:shadow-none md:p-10">
          <Navigation />
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Left Column */}
          <GitHubSidebar />

          {/* Main Content - Right Column */}
          <div className="flex-1 min-w-0">
            {/* Profile Tabs */}
            <ProfileTabs activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Tab Content */}
            <div>
              {activeTab === 'overview' && <OverviewSection />}
              {activeTab === 'projects' && <Projects />}
              {activeTab === 'skills' && <Skills />}
              {activeTab === 'contact' && <Contact />}
            </div>

            {/* Footer */}
            <div className="mt-12">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
