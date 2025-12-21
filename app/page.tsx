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
    <main className="min-h-screen w-full bg-gray-50 dark:bg-[#0d1117] transition-colors">
      {/* Top Navigation */}
      <div className="sticky top-0 z-10 bg-white dark:bg-[#0d1117] border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
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
