'use client';

import React, { useState } from 'react';

interface Recommendation {
  title: string;
  summary: string;
  actionText: string;
  actionUrl: string;
  badge: string;
}

const recommendationsMap: Record<string, Record<string, Recommendation>> = {
  Publisher: {
    'Maximize Yield & Fill Rates': {
      title: 'Supply Side Platform & Dynamic Floor Pricing',
      summary: 'Integrate our lightweight Prebid header bidding wrapper with AI dynamic floor pricing to boost CPMs and fill rates across all ad slots.',
      actionText: 'Monetize as Publisher',
      actionUrl: 'https://panel.boostrava.com/#/register',
      badge: 'Boost RAVA SSP',
    },
    'Rich Media & 3D Formats': {
      title: 'High-Impact Rich Media Ad Units for Publishers',
      summary: 'Unlock premium direct and programmatic rich media inventory (parallax, interscrollers, skins) that command 3x-5x higher CPMs without slowing page load.',
      actionText: 'Explore Rich Media Formats',
      actionUrl: '/rich-media/',
      badge: 'Ad Gallery',
    },
    'Direct Demand Partnerships': {
      title: 'Curated PMP & Guaranteed Deals',
      summary: 'Connect directly to Tier-1 global and regional agency demand through Curated Marketplaces and Private Marketplace deals.',
      actionText: 'Start Publisher Onboarding',
      actionUrl: '/publisher/',
      badge: 'Publisher Solutions',
    },
  },
  Advertiser: {
    'High CTR Leads & Conversions': {
      title: 'AI Contextual Targeting & Intent Matching',
      summary: 'Reach ready-to-buy consumers across brand-safe environments with semantic keyword targeting and real-time bid optimization.',
      actionText: 'Launch Campaign Now',
      actionUrl: 'https://panel.boostrava.com/#/register',
      badge: 'Demand Side Platform',
    },
    'Brand Awareness & Recall': {
      title: 'Interactive HTML5 & Video Storytelling',
      summary: 'Deploy responsive gamified units, 3D cubes, and instream video ads that capture over 14.8 seconds of active attention and drive brand recall.',
      actionText: 'Discover Creative Formats',
      actionUrl: '/rich-media/',
      badge: 'Creative Studio',
    },
    'CTV & DOOH Omnichannel Reach': {
      title: 'Connected TV & Digital Out-of-Home Programmatic',
      summary: 'Extend your campaign seamlessly from mobile and desktop to living room smart TVs and premium high-traffic digital billboards.',
      actionText: 'Explore CTV & DOOH',
      actionUrl: '/ctv/',
      badge: 'Omnichannel DSP',
    },
  },
  Agency: {
    'High CTR Leads & Conversions': {
      title: 'Multi-Seat DSP & White-Label Infrastructure',
      summary: 'Empower your media planners and traders with enterprise bid management, custom audience creation, and real-time transparent reporting.',
      actionText: 'Request Agency Demo',
      actionUrl: '/contact/',
      badge: 'Agency Partner',
    },
    'Brand Awareness & Recall': {
      title: 'Custom Rich Media Creative Production',
      summary: 'Utilize our fast-turnaround creative studio for turnkey HTML5, 3D parallax, and responsive interactive formats tailored to your brand clients.',
      actionText: 'Talk with Creative Team',
      actionUrl: '/contact/',
      badge: 'Creative Solutions',
    },
    'Direct Demand Partnerships': {
      title: 'Private Marketplace (PMP) Curation Hub',
      summary: 'Curate bespoke publisher deal IDs with guaranteed brand safety, verified viewability thresholds, and flexible commercial terms.',
      actionText: 'Connect with Media Desk',
      actionUrl: '/advertiser/',
      badge: 'PMP Curation',
    },
  },
};

export function HomeGoalFinder() {
  const [role, setRole] = useState<string>('Advertiser');
  const [goal, setGoal] = useState<string>('High CTR Leads & Conversions');

  // Fallback recommendation
  const currentRec: Recommendation = recommendationsMap[role]?.[goal] || {
    title: 'Tailored Programmatic Strategy',
    summary: 'Our AdTech strategists will create a bespoke campaign or monetization plan aligned with your specific KPIs.',
    actionText: 'Get Started with Boost RAVA',
    actionUrl: 'https://panel.boostrava.com/#/register',
    badge: 'Boost RAVA Platform',
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-12 sm:my-20" aria-labelledby="goal-finder-heading">
      <div className="relative rounded-3xl p-6 sm:p-10 lg:p-14 bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white shadow-2xl overflow-hidden">
        {/* Floating Ambient Circles */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 relative z-10">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-wider text-purple-200 bg-white/15 px-4 py-1.5 rounded-full uppercase mb-3 backdrop-blur-md border border-white/10">
            Interactive Solution Finder
          </span>
          <h2 id="goal-finder-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight">
            Programmatic Solutions for Your <br className="hidden sm:inline" />
            Individual Goals &amp; KPI. Let's Find It!
          </h2>
          <p className="mt-2 text-sm sm:text-base text-purple-100/90">
            Select your role and campaign objective to see our recommended programmatic path.
          </p>
        </div>

        {/* Selectors Bar */}
        <div className="max-w-4xl mx-auto relative z-10 mb-8 sm:mb-10">
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 sm:p-6 border border-white/20 flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6">
            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="text-sm sm:text-base font-bold whitespace-nowrap text-purple-100">
                I am a:
              </span>
              <div className="relative flex-1 md:w-48">
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full appearance-none bg-white text-gray-900 font-semibold text-xs sm:text-sm rounded-full px-4 py-2.5 pr-8 shadow-md border-0 focus:ring-2 focus:ring-purple-400 cursor-pointer"
                  aria-label="Select your role"
                >
                  <option value="Advertiser">Advertiser / Brand</option>
                  <option value="Publisher">Publisher / Media Owner</option>
                  <option value="Agency">Media Agency</option>
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">
                  ▼
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <span className="text-sm sm:text-base font-bold whitespace-nowrap text-purple-100">
                looking for:
              </span>
              <div className="relative flex-1 md:w-72">
                <select
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  className="w-full appearance-none bg-white text-gray-900 font-semibold text-xs sm:text-sm rounded-full px-4 py-2.5 pr-8 shadow-md border-0 focus:ring-2 focus:ring-purple-400 cursor-pointer"
                  aria-label="Select your goal"
                >
                  {role === 'Publisher' ? (
                    <>
                      <option value="Maximize Yield & Fill Rates">Maximize Yield &amp; Fill Rates</option>
                      <option value="Rich Media & 3D Formats">Rich Media &amp; 3D Ad Formats</option>
                      <option value="Direct Demand Partnerships">Direct Demand &amp; PMP Deals</option>
                    </>
                  ) : (
                    <>
                      <option value="High CTR Leads & Conversions">High CTR Leads &amp; Conversions</option>
                      <option value="Brand Awareness & Recall">Brand Awareness &amp; High Attention</option>
                      <option value="CTV & DOOH Omnichannel Reach">CTV &amp; DOOH Omnichannel Reach</option>
                    </>
                  )}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 text-xs">
                  ▼
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Solution Recommendation Box */}
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="bg-white rounded-2xl p-6 sm:p-8 text-gray-900 shadow-xl border border-white/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex-1 text-center sm:text-left">
              <div className="inline-block text-xs font-extrabold uppercase tracking-wider text-purple-700 bg-purple-100 px-3 py-1 rounded-full mb-2">
                {currentRec.badge}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {currentRec.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                {currentRec.summary}
              </p>
            </div>

            <div className="flex-shrink-0 w-full sm:w-auto">
              <a
                href={currentRec.actionUrl}
                target={currentRec.actionUrl.startsWith('http') ? '_blank' : '_self'}
                rel={currentRec.actionUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-8 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 text-sm sm:text-base text-decoration-none whitespace-nowrap"
              >
                {currentRec.actionText}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
