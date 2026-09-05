'use client';

import React from 'react';
import type { PageRecord } from '@/lib/content';
import { HomepageHero } from './HomepageHero';
import { HomeHeroMetrics } from './HomeHeroMetrics';
import { HomeTradingPlatforms } from './HomeTradingPlatforms';
import { HomeExperienceTabs } from './HomeExperienceTabs';
import { HomeOurSolutions } from './HomeOurSolutions';
import { HomeEcosystem } from './HomeEcosystem';
import { HomeGoalFinder } from './HomeGoalFinder';
import { HomeWhyChooseUs } from './HomeWhyChooseUs';
import { HomeFeaturedNews } from './HomeFeaturedNews';
import { HomeContactSection } from './HomeContactSection';

export function HomePageRenderer({ page }: { page?: PageRecord }) {
  return (
    <div className="w-full overflow-x-hidden bg-slate-50/50">
      {/* 1. Hero Section */}
      <HomepageHero />

      {/* 2. Hero Floating Stat Cards */}
      <HomeHeroMetrics />

      {/* 3. Media Trading Platforms (SSP / DSP + All Formats & Screens) */}
      <HomeTradingPlatforms />

      {/* 4. Experience & Capabilities Tabs */}
      <HomeExperienceTabs />

      {/* 5. Our Solutions & 4 Pillars (Attention, Recall, View, Impact) */}
      <HomeOurSolutions />

      {/* 6. Programmatic & Creative Tech Ecosystem Pipeline */}
      <HomeEcosystem />

      {/* 7. Interactive Goal & KPI Solution Finder */}
      <HomeGoalFinder />

      {/* 8. Why Choose Us Feature Cards */}
      <HomeWhyChooseUs />

      {/* 9. Featured News from Blog */}
      <HomeFeaturedNews />

      {/* 10. Contact & Message Section */}
      <HomeContactSection />
    </div>
  );
}
