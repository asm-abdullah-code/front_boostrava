'use client';

import React from 'react';
import Link from 'next/link';

const solutions = [
  {
    category: 'AdTech',
    categoryBg: 'bg-purple-100 text-purple-700',
    title: 'Programmatic Advertising',
    description: 'Automate media buying and selling with real-time bidding workflows and transparent performance.',
    highlights: ['OpenRTB 3.0 Real-Time Bidding', 'Prebid & Header Bidding Support', 'Global Demand & Supply Integration'],
    icon: (
      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
      </svg>
    ),
    link: '/ai-programmatic-advertising/',
    borderHover: 'hover:border-purple-300',
    btnGradient: 'from-purple-600 to-indigo-600',
  },
  {
    category: 'Analytics',
    categoryBg: 'bg-emerald-100 text-emerald-700',
    title: 'AI & Contextual Targeting',
    description: 'Match ads to relevant content and environments using contextual signals without third-party cookies.',
    highlights: ['Semantic Content Analysis', 'Tier-1 Brand Safety Verification', 'Cookie-Free Intent Matching'],
    icon: (
      <svg className="w-6 h-6 text-emerald-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    link: '/contextual-advertising/',
    borderHover: 'hover:border-emerald-300',
    btnGradient: 'from-emerald-600 to-teal-600',
  },
  {
    category: 'Interactive',
    categoryBg: 'bg-blue-100 text-blue-700',
    title: 'Rich Media Delivery',
    description: 'Deliver HTML5 interactive, video and high-impact creative experiences across web and mobile.',
    highlights: ['Parallax, Cube & Interscroller', 'Gamified Engagement Formats', 'Dynamic Creative Optimization'],
    icon: (
      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    link: '/rich-media/',
    borderHover: 'hover:border-blue-300',
    btnGradient: 'from-blue-600 to-indigo-600',
  },
  {
    category: 'Omnichannel',
    categoryBg: 'bg-amber-100 text-amber-700',
    title: 'Cross-Screen Delivery',
    description: 'Reach audiences across web, mobile in-app, Connected TV (CTV) and Digital Out-of-Home (DOOH).',
    highlights: ['Unified Cross-Device Reach', 'CTV & OTT Video Ad Insertion', 'Programmatic DOOH Geo-Targeting'],
    icon: (
      <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    link: '/ctv/',
    borderHover: 'hover:border-amber-300',
    btnGradient: 'from-amber-600 to-orange-600',
  },
];

const pillars = [
  {
    title: 'Attention',
    heading: 'Engage',
    labelTop: 'Campaign',
    labelBottom: 'engagement',
    accentBg: 'bg-purple-600 text-white',
    pillText: 'Attention',
    boxBg: 'bg-purple-50/50 border-purple-100',
    headingColor: 'text-purple-600',
    description: 'High-impact interactive formats commanding genuine user focus.',
  },
  {
    title: 'Ad Recall',
    heading: 'Recall',
    labelTop: 'Creative',
    labelBottom: 'recall',
    accentBg: 'bg-emerald-600 text-white',
    pillText: 'Ad Recall',
    boxBg: 'bg-emerald-50/50 border-emerald-100',
    headingColor: 'text-emerald-600',
    description: 'Contextually relevant messages delivering +42% higher brand retention.',
  },
  {
    title: 'View Time',
    heading: 'View',
    labelTop: 'Engaged',
    labelBottom: 'view time',
    accentBg: 'bg-amber-500 text-white',
    pillText: 'View Time',
    boxBg: 'bg-amber-50/50 border-amber-100',
    headingColor: 'text-amber-500',
    description: 'Active in-view dwell times averaging over 14.8 seconds per ad.',
  },
  {
    title: 'Brand Impact',
    heading: 'Impact',
    labelTop: 'Brand',
    labelBottom: 'impact',
    accentBg: 'bg-blue-600 text-white',
    pillText: 'Impact',
    boxBg: 'bg-blue-50/50 border-blue-100',
    headingColor: 'text-blue-600',
    description: 'Full-funnel campaign lift across all digital devices and screens.',
  },
];

export function HomeOurSolutions() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-12 sm:my-20" aria-labelledby="our-solutions-heading">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <span className="inline-block text-xs sm:text-sm font-bold tracking-wider text-indigo-600 bg-indigo-50 px-4 py-1.5 rounded-full uppercase mb-3">
          Solutions & Capabilities
        </span>
        <h2 id="our-solutions-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Our Solutions
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          End-to-end programmatic media infrastructure built for precision targeting, high brand engagement, and maximized publisher yield.
        </p>
      </div>

      {/* 4 Modern Solutions Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
        {solutions.map((item) => (
          <div
            key={item.title}
            className={`group relative bg-white rounded-3xl p-6 sm:p-7 shadow-lg hover:shadow-2xl border border-gray-100 ${item.borderHover} transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-2`}
          >
            <div>
              {/* Category Pill & Icon */}
              <div className="flex items-center justify-between mb-6">
                <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${item.categoryBg}`}>
                  {item.category}
                </span>
                <div className="w-10 h-10 rounded-2xl bg-gray-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-gray-900 mb-2.5 group-hover:text-purple-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2 mb-6 text-xs text-gray-500">
                {item.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 flex-shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn More Button */}
            <div className="pt-4 border-t border-gray-100">
              <Link
                href={item.link}
                className={`inline-flex items-center justify-between w-full text-xs sm:text-sm font-bold text-gray-700 hover:text-purple-600 transition-colors group-hover:translate-x-1 duration-200`}
              >
                <span>Learn More</span>
                <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* 4 Capsule Pillars (Attention, Recall, View, Impact) */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-100">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
            Four Core Pillars of Programmatic Impact
          </h3>
          <p className="text-xs sm:text-sm text-gray-500 mt-2">
            Every campaign is optimized around verified human attention, brand recall, and deep engagement metrics.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {pillars.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl p-5 sm:p-6 sm:py-8 flex flex-col items-center justify-between text-center border ${item.boxBg} shadow-sm hover:shadow-md transition-all duration-300 min-h-[300px] sm:min-h-[360px] group`}
            >
              {/* Vertical Capsule Pill */}
              <div className="mb-4">
                <div
                  className={`rounded-full px-3 py-6 sm:py-8 flex items-center justify-center shadow-md ${item.accentBg} group-hover:scale-105 transition-transform duration-300`}
                >
                  <span
                    className="font-bold text-xs sm:text-sm uppercase tracking-wider select-none whitespace-nowrap"
                    style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                  >
                    {item.pillText}
                  </span>
                </div>
              </div>

              {/* Big Heading */}
              <div className={`text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-2 ${item.headingColor}`}>
                {item.heading}
              </div>

              {/* Label */}
              <div>
                <div className="text-xs sm:text-sm font-medium text-gray-500">
                  {item.labelTop}
                </div>
                <div className="text-sm sm:text-base font-bold text-gray-900">
                  {item.labelBottom}
                </div>
                <p className="text-[11px] sm:text-xs text-gray-500 mt-2 hidden sm:block">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
