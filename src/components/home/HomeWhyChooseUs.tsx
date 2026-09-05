'use client';

import React from 'react';

const reasons = [
  {
    title: 'Contextual Relevance',
    description: 'Align ads with relevant content and campaign context with cookie-free semantic intelligence.',
    highlights: ['AI Natural Language Analysis', 'Cookie-Free Targeting', 'High Brand Affinity'],
    icon: (
      <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    borderAccent: 'border-purple-200 hover:border-purple-400',
    iconBg: 'bg-purple-50',
  },
  {
    title: 'Brand-Safe Controls',
    description: 'Use delivery controls and fraud detection filters designed for safer, high-quality media environments.',
    highlights: ['Tier-1 Fraud Protection', 'Domain & Keyword Blocking', 'MRC & IAB Compliance'],
    icon: (
      <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    borderAccent: 'border-indigo-200 hover:border-indigo-400',
    iconBg: 'bg-indigo-50',
  },
  {
    title: 'Flexible Activation',
    description: 'Launch across display, rich media, video, CTV and DOOH workflows with rapid onboarding and live reporting.',
    highlights: ['Cross-Screen Reach', 'Self-Serve & Managed Desk', 'Dedicated AdTech Support'],
    icon: (
      <svg className="w-8 h-8 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    borderAccent: 'border-amber-200 hover:border-amber-400',
    iconBg: 'bg-amber-50',
  },
];

export function HomeWhyChooseUs() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-12 sm:my-20" aria-labelledby="why-choose-us-heading">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
        <span className="inline-block text-xs sm:text-sm font-bold tracking-wider text-purple-700 bg-purple-100 px-4 py-1.5 rounded-full uppercase mb-3">
          Why Boost RAVA
        </span>
        <h2 id="why-choose-us-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
          Why Choose Us?
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Trusted by leading brands, media agencies, and publishers for transparent programmatic efficiency and creative excellence.
        </p>
      </div>

      {/* 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
        {reasons.map((item) => (
          <div
            key={item.title}
            className={`group bg-white rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-2xl border-2 ${item.borderAccent} transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-2`}
          >
            <div>
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl ${item.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {item.icon}
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                {item.description}
              </p>

              {/* Highlights */}
              <ul className="space-y-2.5 text-xs sm:text-sm text-gray-500">
                {item.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
