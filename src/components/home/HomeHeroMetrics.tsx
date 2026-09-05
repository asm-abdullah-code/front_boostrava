'use client';

import React from 'react';

const metrics = [
  {
    label: 'Total Page Views',
    value: '89,400',
    change: '21% more',
    icon: (
      <svg className="w-7 h-7 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M3 12s4-8 9-8 9 8 9 8-4 8-9 8-9-8-9-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    badgeBg: 'bg-blue-50',
    delay: '0',
  },
  {
    label: 'Unique Users',
    value: '12,300',
    change: '8% more',
    icon: (
      <svg className="w-7 h-7 text-emerald-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <circle cx="12" cy="7" r="4" />
        <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
      </svg>
    ),
    badgeBg: 'bg-emerald-50',
    delay: '150',
  },
  {
    label: 'Ad Clicks',
    value: '34,200',
    change: '15% more',
    icon: (
      <svg className="w-7 h-7 text-purple-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 19V6M5 12l7-7 7 7" />
      </svg>
    ),
    badgeBg: 'bg-purple-50',
    delay: '300',
  },
  {
    label: 'Revenue',
    value: '$7,800',
    change: '12% more',
    icon: (
      <svg className="w-7 h-7 text-amber-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path d="M12 8c-4.418 0-8 1.79-8 4s3.582 4 8 4 8-1.79 8-4-3.582-4-8-4z" />
        <path d="M12 12v4" />
      </svg>
    ),
    badgeBg: 'bg-amber-50',
    delay: '450',
  },
];

export function HomeHeroMetrics() {
  return (
    <section className="relative z-20 max-w-5xl mx-auto px-4 -mt-10 sm:-mt-14 mb-12">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
        {metrics.map((item) => (
          <div
            key={item.label}
            className="group relative bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-[0_10px_30px_rgba(30,40,90,0.08)] hover:shadow-[0_20px_40px_rgba(30,40,90,0.14)] border border-indigo-50/80 hover:border-indigo-200 transition-all duration-300 flex flex-col items-center text-center transform hover:-translate-y-1.5 cursor-default"
          >
            <div className={`p-2.5 sm:p-3 rounded-xl ${item.badgeBg} mb-2.5 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
              {item.icon}
            </div>
            <span className="text-gray-500 text-xs sm:text-sm font-medium tracking-tight mb-1">
              {item.label}
            </span>
            <span className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-1">
              {item.value}
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] sm:text-xs font-semibold text-emerald-600 bg-emerald-50/80 px-2 py-0.5 rounded-full">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
