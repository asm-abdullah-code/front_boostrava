'use client';

import React, { useState } from 'react';

const ecosystemNodes = [
  {
    step: '01',
    title: 'Demand & Strategy',
    subtitle: 'Advertisers & Agencies',
    color: 'from-blue-500 to-indigo-600',
    borderColor: 'border-blue-200',
    tag: 'Buyer Layer',
    items: [
      'Self-serve & Managed DSP',
      'Audience & First-Party Data',
      'Multi-Format Media Plans',
      'Real-Time Budget Pacing',
    ],
  },
  {
    step: '02',
    title: 'AI Intelligence & Studio',
    subtitle: 'Context & Rich Media',
    color: 'from-purple-500 to-indigo-600',
    borderColor: 'border-purple-200',
    tag: 'Engine Layer',
    items: [
      'Semantic Contextual Matching',
      'HTML5 3D Creative Studio',
      'Dynamic Creative Optimization',
      'Tier-1 Brand Safety Shield',
    ],
  },
  {
    step: '03',
    title: 'Exchange & Auction',
    subtitle: 'Real-Time OpenRTB',
    color: 'from-violet-600 to-purple-700',
    borderColor: 'border-violet-200',
    tag: 'Auction Layer',
    items: [
      '<10ms Latency Auction Bidding',
      'Prebid & Header Bidding Wrapper',
      'Dynamic Machine Floor Pricing',
      'PMP Deals & Private Marketplace',
    ],
  },
  {
    step: '04',
    title: 'Supply & Screens',
    subtitle: 'Publishers & Omnichannel',
    color: 'from-orange-500 to-amber-600',
    borderColor: 'border-orange-200',
    tag: 'Delivery Layer',
    items: [
      'High-Yield Publisher SSP',
      'Mobile In-App & Responsive Web',
      'Connected TV (CTV/OTT) Streams',
      'Digital Out-of-Home (DOOH) Billboards',
    ],
  },
];

export function HomeEcosystem() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-12 sm:my-20" aria-labelledby="ecosystem-heading">
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 rounded-3xl p-6 sm:p-10 lg:p-14 text-white shadow-2xl relative overflow-hidden">
        {/* Ambient Glows */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14 relative z-10">
          <span className="inline-block text-xs sm:text-sm font-bold tracking-wider text-purple-300 bg-purple-900/60 border border-purple-700/50 px-4 py-1.5 rounded-full uppercase mb-3">
            Programmatic & Creative Technology Ecosystem
          </span>
          <h2 id="ecosystem-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            How Boost RAVA Powers the Complete AdTech Pipeline
          </h2>
          <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-2xl mx-auto">
            From buyer strategy and AI contextual matching to header bidding exchange and multi-screen delivery across web, CTV, and DOOH.
          </p>
        </div>

        {/* 4 Pipeline Stages */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative z-10 mb-8">
          {ecosystemNodes.map((node, index) => (
            <div
              key={node.step}
              onClick={() => setActiveStep(index)}
              className={`rounded-2xl p-5 sm:p-6 backdrop-blur-md transition-all duration-300 cursor-pointer border ${
                activeStep === index
                  ? 'bg-white/15 border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.3)] scale-[1.02]'
                  : 'bg-white/5 border-white/10 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-indigo-300 font-mono">
                  {node.step}
                </span>
                <span className="text-[11px] font-bold uppercase tracking-wider text-purple-200 bg-white/10 px-2.5 py-1 rounded-full border border-white/10">
                  {node.tag}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                {node.title}
              </h3>
              <p className="text-xs text-purple-200/80 mb-4 font-medium">
                {node.subtitle}
              </p>

              <ul className="space-y-2 text-xs text-gray-300">
                {node.items.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Flow Indicator Bar */}
        <div className="hidden lg:flex items-center justify-between text-xs text-purple-200/70 border-t border-white/10 pt-6 px-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            <span>Real-Time RTB Open Engine Active</span>
          </div>
          <div className="flex items-center gap-4 font-mono">
            <span>&lt;10ms Average Bid Response</span>
            <span>•</span>
            <span>99.98% Global Uptime</span>
            <span>•</span>
            <span>IAB & MRC Compliant</span>
          </div>
        </div>
      </div>
    </section>
  );
}
