'use client';

import React, { useState } from 'react';

const registerUrl = 'https://panel.boostrava.com/#/register';

const flowStages = [
  { step: '01', title: 'Content', role: 'Editorial Ingestion', desc: 'Publisher page text, headlines, and articles are scanned in real time.' },
  { step: '02', title: 'Context', role: 'Semantic Extraction', desc: 'Determines page meaning, sentiment, and IAB content categories.' },
  { step: '03', title: 'Signals', role: 'Multi-Vector Scoring', desc: 'Combines location, device, language, and timing parameters.' },
  { step: '04', title: 'Relevance', role: 'Match Engine', desc: 'Evaluates campaign alignment without inspecting individual user cookies.' },
  { step: '05', title: 'Ad Delivery', role: 'Eligible Placement', desc: 'Serves contextually relevant creative that complements the reader’s mindset.' },
];

const targetingSignals = [
  {
    name: '1. Content Context',
    badge: 'Core Signal',
    desc: 'Deep semantic analysis evaluating page keywords, article topics, editorial sentiment, and brand suitability categories.',
    example: 'A reader exploring a smartphone review sees mobile accessory and telecom ads.'
  },
  {
    name: '2. Location & Geography',
    badge: 'Geo Precision',
    desc: 'Targeting by country, division, and cities (such as Dhaka, Chattogram, Sylhet) using IP and network signals without tracking GPS history.',
    example: 'Deliver hyperlocal restaurant or retail promos strictly to Dhaka metro readers.'
  },
  {
    name: '3. Device & Screen Type',
    badge: 'Hardware Adaptive',
    desc: 'Differentiates between mobile touchscreens, tablets, desktop monitors, and connected smart TVs to adapt creative layouts.',
    example: 'Serve thumb-friendly mobile rich media to smartphone users and mastheads to desktop.'
  },
  {
    name: '4. Content Language',
    badge: 'Bilingual Support',
    desc: 'Accurately distinguishes between English, Bengali (বাংলা), and mixed Banglish content environments for natural cultural alignment.',
    example: 'Serve Bengali-copy creatives on Bengali news dailies and English copy on business portals.'
  },
  {
    name: '5. Time & Dayparting',
    badge: 'Temporal Focus',
    desc: 'Activates ad delivery during peak reader attention hours, commuting slots, weekend leisure, or specific flight schedules.',
    example: 'Promote breakfast snacks from 7 AM–10 AM and dinner deliveries from 6 PM–9 PM.'
  },
  {
    name: '6. Audience Intent Segments',
    badge: 'Privacy Preserved',
    desc: 'Groups readers into contextual interest cohorts (e.g. Auto Enthusiasts, Tech Buyers, Home Chefs) based on active reading patterns.',
    example: 'Engage serious business decision-makers reading financial and corporate news.'
  }
];

const demoTopics = [
  {
    id: 'tech',
    label: 'Tech & Gadgets',
    article: 'Top 5 Flagship Smartphones for Photography and Battery Life in 2026',
    signals: ['Electronics', 'Photography', 'Mobile', 'High Intent'],
    adMatch: 'Pro Camera Phone 5G with Zero Downpayment',
    adFormat: '300×250 Interactive Rich Media'
  },
  {
    id: 'travel',
    label: 'Travel & Tourism',
    article: 'Scenic Winter Resorts and Weekend Getaways Around Sylhet and Cox’s Bazar',
    signals: ['Hospitality', 'Vacation', 'Domestic Travel', 'Leisure'],
    adMatch: 'Luxury Resort Special 30% Off Weekend Booking',
    adFormat: '728×90 Leaderboard Masthead'
  },
  {
    id: 'finance',
    label: 'Finance & Banking',
    article: 'How to Build an Emergency Savings Portfolio and Manage Digital Payments',
    signals: ['Banking', 'Fintech', 'Investments', 'Personal Finance'],
    adMatch: 'Digital Savings Account with 8.5% High Yield Profit',
    adFormat: '300×600 Half Page Filmstrip'
  }
];

const faqList = [
  {
    q: 'What is contextual advertising?',
    a: 'Contextual advertising is an automated marketing method that aligns ads with the actual content, topic, and environment of the webpage being viewed, rather than tracking individual users across the internet.'
  },
  {
    q: 'How does contextual advertising differ from behavioral targeting?',
    a: 'Behavioral targeting relies on cookies, device identifiers, and historical tracking to predict user interests. Contextual advertising matches ads based entirely on the active page environment (topic, location, language, time), ensuring 100% compliance with modern privacy regulations.'
  },
  {
    q: 'How does the visual flow Content → Context → Signal → Relevance → Ad work?',
    a: 'First, Content is ingested from the publisher page. Second, natural language processing extracts the Context (topic, category, sentiment). Third, non-personal Signals (location, device, language, time) are evaluated. Fourth, the Relevance engine scores matching campaigns. Finally, the optimal Ad creative is served in milliseconds.'
  },
  {
    q: 'Can contextual advertising work with Bengali and local Bangladesh content?',
    a: 'Yes. Boost RAVA supports contextual classification across Bengali (বাংলা) and English media in Bangladesh, identifying news topics, sports commentary, and lifestyle themes for hyper-relevant campaign placement.'
  },
  {
    q: 'Does contextual targeting support brand safety and suitability?',
    a: 'Yes. Contextual advertising actively prevents ads from appearing alongside sensitive news, disasters, political controversy, or inappropriate content through negative keyword filters and category exclusions.'
  }
];

export function ContextualLandingPage() {
  const [selectedTopic, setSelectedTopic] = useState(0);
  const activeDemo = demoTopics[selectedTopic];

  return (
    <div className="br-cx-root bg-white text-slate-900 font-sans antialiased overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-br from-[#071329] via-[#0b1b42] to-[#1f0d45] text-white">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#920dff_1px,transparent_1px)] [background-size:28px_28px]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#23d8e1]">
                <span className="w-2 h-2 rounded-full bg-[#23d8e1] animate-pulse" />
                PRIVACY-FIRST RELEVANCE ENGINE
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                Contextual Advertising: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23d8e1] via-[#920dff] to-[#ff6900]">Content-Led Relevance</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Reach consumers when their intent and attention are highest. Match digital ads directly to page content, environment, and moment—without depending on invasive third-party cookie tracking.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={registerUrl}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg shadow-[#920dff]/30 hover:opacity-95 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  Start Contextual Advertising <span className="ml-2">→</span>
                </a>
                <a
                  href="#visual-flow"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200"
                >
                  See the Visual Flow
                </a>
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-slate-300">
                <div>
                  <strong className="block text-white text-base font-bold">100% Cookieless</strong>
                  <span>Future-Proof Privacy</span>
                </div>
                <div>
                  <strong className="block text-white text-base font-bold">Bilingual</strong>
                  <span>English &amp; Bengali Context</span>
                </div>
                <div>
                  <strong className="block text-white text-base font-bold">Brand Safe</strong>
                  <span>Dynamic Content Filters</span>
                </div>
              </div>
            </div>

            {/* Right: Live Interactive Context Matching Demo */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 rounded-3xl p-6 border border-white/15 shadow-2xl backdrop-blur-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 font-mono text-slate-300">context.analyzer.live</span>
                  </div>
                  <span className="text-[#23d8e1] font-mono text-[11px]">ACTIVE MATCH</span>
                </div>

                <div className="mt-5 space-y-4">
                  {/* Topic Selector Tabs */}
                  <div className="flex gap-1.5 bg-white/5 p-1 rounded-xl">
                    {demoTopics.map((t, idx) => (
                      <button
                        key={t.id}
                        onClick={() => setSelectedTopic(idx)}
                        className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-semibold transition-all ${
                          selectedTopic === idx ? 'bg-[#920dff] text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>

                  {/* Article Ingestion Mockup */}
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2">
                    <span className="text-[10px] font-mono text-slate-400 uppercase">Page Content Ingested</span>
                    <h4 className="text-sm font-bold text-white leading-snug">{activeDemo.article}</h4>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {activeDemo.signals.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-[#23d8e1]">
                          #{s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Flow Arrow */}
                  <div className="flex justify-center text-xs text-slate-400 font-mono">
                    <span>↓ Semantic Signals → Ad Match</span>
                  </div>

                  {/* Matched Ad Unit */}
                  <div className="bg-gradient-to-r from-[#920dff]/20 to-[#23d8e1]/20 rounded-2xl p-4 border border-[#920dff]/40 space-y-1.5">
                    <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono">
                      <span>MATCHED AD CREATIVE</span>
                      <span className="text-emerald-400 font-bold">98.4% Relevance Score</span>
                    </div>
                    <div className="text-sm font-bold text-white">{activeDemo.adMatch}</div>
                    <div className="text-[11px] text-slate-300 font-mono">Format: {activeDemo.adFormat}</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MANDATORY: VISUAL FLOW (Content → Context → Signal → Relevance → Ad) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80" id="visual-flow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">ARCHITECTURE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The 5-Step Visual Flow: Content to Ad
            </h2>
            <p className="text-slate-600 text-base">
              Explore how raw article text is converted into real-time advertising relevance in milliseconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {flowStages.map((stage, idx) => (
              <div
                key={stage.step}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#920dff]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#920dff] bg-purple-100/70 px-2 py-0.5 rounded">
                      {stage.step}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase">Step {idx + 1}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{stage.title}</h3>
                  <div className="text-xs font-semibold text-[#ff6900] mb-2">{stage.role}</div>
                  <p className="text-xs text-slate-600 leading-relaxed">{stage.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Flow Banner */}
          <div className="mt-8 bg-slate-900 text-white rounded-2xl p-4 text-center font-mono text-xs sm:text-sm font-bold flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span className="text-white">Content</span>
            <span className="text-[#23d8e1]">→</span>
            <span className="text-white">Context</span>
            <span className="text-[#23d8e1]">→</span>
            <span className="text-white">Signal</span>
            <span className="text-[#23d8e1]">→</span>
            <span className="text-white">Relevance</span>
            <span className="text-[#23d8e1]">→</span>
            <span className="text-[#ff6900]">Ad Delivered</span>
          </div>
        </div>
      </section>

      {/* 3. THE 6 TARGETING SIGNALS EXPLAINED SIMPLY */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">SIX VECTORS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The 6 Core Contextual Targeting Signals
            </h2>
            <p className="text-slate-600 text-base">
              Combining environmental, temporal, and semantic indicators to make media decisions precise without relying on personal user data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetingSignals.map((sig) => (
              <div
                key={sig.name}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:shadow-lg hover:border-[#920dff]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-purple-100 text-[#920dff]">
                      {sig.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{sig.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{sig.desc}</p>
                </div>
                <div className="pt-3 border-t border-slate-200 text-xs text-slate-500">
                  <strong className="text-slate-700">Real Example:</strong> {sig.example}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AEO / SEARCH ENGINE FAQ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">KNOWLEDGE BASE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Contextual Ads
            </h2>
            <p className="text-slate-600 text-base">
              Clear answers on semantic matching, privacy preservation, and brand suitability.
            </p>
          </div>

          <div className="space-y-4">
            {faqList.map((item, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl border border-slate-200 p-5 transition-all duration-200 open:shadow-md open:border-[#920dff]/40"
              >
                <summary className="font-bold text-slate-900 text-base cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{item.q}</span>
                  <span className="w-6 h-6 rounded-full bg-slate-100 group-open:bg-[#920dff] group-open:text-white flex items-center justify-center text-xs transition-colors shrink-0">
                    +
                  </span>
                </summary>
                <p className="text-sm text-slate-600 leading-relaxed mt-4 pt-3 border-t border-slate-100">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-[#0d224d] via-[#250d4d] to-[#071329] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Embrace Privacy-First Contextual Advertising
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Deliver relevant advertising that respects consumer privacy and elevates brand recall.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href={registerUrl}
                className="px-7 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg hover:opacity-95 hover:scale-[1.02] transition-all"
              >
                Launch Contextual Campaign
              </a>
              <a
                href="/ai-programmatic-advertising/"
                className="px-7 py-3 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                AI Programmatic →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
