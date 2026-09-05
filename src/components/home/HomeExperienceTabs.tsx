'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const tabs = [
  {
    key: 'creatives',
    label: 'Creatives',
    eyebrow: 'Rich Media Creative',
    title: 'Create experiences that move',
    bullets: [
      'Build HTML5 display and interactive rich media formats with ease.',
      'Use parallax, carousel, 3D cube, video interscroller and gamified units.',
      'Deliver responsive creative seamlessly across web, mobile, CTV and DOOH.',
    ],
    image: '/assets/images/dashboard/home/tab1img.jpg',
    alt: 'Rich media creative showcase',
    ctas: ['Gamification', '3D Animation', 'Parallax'],
    link: '/rich-media/',
    linkText: 'Explore ad formats in gallery →',
  },
  {
    key: 'audiences',
    label: 'Audiences',
    eyebrow: 'Audience Intelligence',
    title: 'Reach the right audience with precision',
    bullets: [
      'Combine campaign, contextual and audience signals without third-party cookies.',
      'Refine delivery by device type, real-time geography, and domain criteria.',
      'Keep audience strategy continuously aligned with measurable performance KPIs.',
    ],
    image: '/assets/images/dashboard/home/audience.jpg',
    alt: 'Audience planning illustration',
    ctas: ['Contextual AI', 'Audience Segments', 'Geo-Targeting'],
    link: '/contextual-advertising/',
    linkText: 'Learn about contextual targeting →',
  },
  {
    key: 'people',
    label: 'People',
    eyebrow: 'Human-Centred Planning',
    title: 'Design around genuine attention',
    bullets: [
      'Match message, moment and screen to the real consumer journey.',
      'Use creative formats that make ad interaction natural and engaging.',
      'Control frequency and pacing without overwhelming target audiences.',
    ],
    image: '/assets/images/dashboard/home/people.jpeg',
    alt: 'People and audience experience illustration',
    ctas: ['User Journey', 'Attention Signals', 'Frequency Cap'],
    link: '/advertiser/',
    linkText: 'Discover advertiser solutions →',
  },
  {
    key: 'supply',
    label: 'Supply',
    eyebrow: 'Programmatic Supply',
    title: 'Connect campaigns to verified inventory',
    bullets: [
      'Access top-tier supply across display, video, rich media, CTV and DOOH.',
      'Choose environments that strictly fit campaign safety and creative needs.',
      'Keep supply decisions tied to brand suitability and publisher yield controls.',
    ],
    image: '/assets/images/dashboard/home/active.webp',
    alt: 'Programmatic supply illustration',
    ctas: ['Direct SSP', 'PMP Deals', 'Header Bidding'],
    link: '/publisher/',
    linkText: 'Explore publisher monetization →',
  },
  {
    key: 'impact',
    label: 'Impact',
    eyebrow: 'Measurement & Learning',
    title: 'Understand real campaign performance',
    bullets: [
      'Track real-time delivery, interaction time, viewability and conversion signals.',
      'Use multi-dimensional reporting to compare formats, screens and placements.',
      'Turn actionable insights into continuous optimization for higher ROI.',
    ],
    image: '/assets/images/dashboard/home/impact.webp',
    alt: 'Campaign impact illustration',
    ctas: ['Viewability', 'Engagement Time', 'Full Analytics'],
    link: '/ai-programmatic-advertising/',
    linkText: 'See AI programmatic analytics →',
  },
  {
    key: 'activation',
    label: 'Activation',
    eyebrow: 'Seamless Activation',
    title: 'Launch campaigns with confidence',
    bullets: [
      'Rapid onboarding and streamlined campaign setup across all digital channels.',
      'Direct API integrations with existing enterprise DSP, SSP and AdTech stacks.',
      'Move effortlessly from media planning to real-time activation with total control.',
    ],
    image: '/assets/images/dashboard/home/activation.webp',
    alt: 'Campaign activation illustration',
    ctas: ['Fast Launch', 'Self-Serve DSP', 'Managed Service'],
    link: '/contact/',
    linkText: 'Get started with our team →',
  },
];

export function HomeExperienceTabs() {
  const [active, setActive] = useState(0);
  const item = tabs[active];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-12 sm:my-16" aria-labelledby="experience-tabs-title">
      <div className="bg-white rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl border border-gray-100">
        <h2 id="experience-tabs-title" className="sr-only">
          Explore Boost RAVA capabilities
        </h2>

        {/* Tab Buttons Strip */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar gap-2 sm:gap-3">
          {tabs.map((tab, index) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls={`br-home-panel-${tab.key}`}
              id={`br-home-tab-${tab.key}`}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap transition-all duration-200 cursor-pointer ${
                active === index
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md shadow-purple-500/20 scale-105'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Panel */}
        <div
          role="tabpanel"
          id={`br-home-panel-${item.key}`}
          aria-labelledby={`br-home-tab-${item.key}`}
          key={item.key}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center animate-fadeIn"
        >
          {/* Copy Side */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-purple-600 mb-2">
              {item.eyebrow}
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4 sm:mb-6">
              {item.title}
            </h3>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 text-sm sm:text-base text-gray-600">
              {item.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
            <div>
              <Link
                href={item.link}
                className="inline-flex items-center gap-2 font-bold text-purple-600 hover:text-purple-800 transition-colors text-sm sm:text-base group"
              >
                {item.linkText}
              </Link>
            </div>
          </div>

          {/* Visual Showcase Side */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-tr from-purple-900 via-indigo-900 to-slate-900 p-2 sm:p-3 group">
              <div className="relative overflow-hidden rounded-xl bg-gray-900 aspect-video flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.alt}
                  loading={active === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Graceful fallback to rich media banner
                    (e.currentTarget as HTMLImageElement).src = '/assets/images/dashboard/home/tab1img.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
              {/* Feature Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 mt-3 pt-1">
                {item.ctas.map((v) => (
                  <span
                    key={v}
                    className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-white/20 text-white backdrop-blur-md border border-white/20 hover:bg-white/30 transition-colors"
                  >
                    {v}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
