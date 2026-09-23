'use client';

import React, { useState, useMemo } from 'react';

const registerUrl = 'https://panel.boostrava.com/#/register';

type TechStatus = 'live' | 'integration' | 'verify' | 'roadmap';

interface TechComponent {
  name: string;
  category: string;
  role: string;
  status: TechStatus;
  statusText: string;
  desc: string;
}

const techComponents: TechComponent[] = [
  {
    name: '1. Ad Serving Core',
    category: 'Decision & Delivery',
    role: 'Central Decisioning Layer',
    status: 'live',
    statusText: 'LIVE CORE',
    desc: 'Receives ad requests, validates targeting eligibility, evaluates flight schedules, enforces frequency caps, serves winning creative, and logs billable events.'
  },
  {
    name: '2. Real-Time Bidding (RTB)',
    category: 'Auction Dynamics',
    role: 'Auction Evaluation Engine',
    status: 'live',
    statusText: 'LIVE CORE',
    desc: 'Instantaneous multi-party auction evaluating competing bids within 100 milliseconds under configured floor price and priority rules.'
  },
  {
    name: '3. OpenRTB Protocol',
    category: 'Standardized Messaging',
    role: 'Bid Request / Response Transport',
    status: 'verify',
    statusText: 'PROTOCOL VERIFIED',
    desc: 'Industry-standardized JSON protocol defining structured bid requests (impressions, device, geo, content) and bid responses (price, creative, ad markup).'
  },
  {
    name: '4. Prebid Framework',
    category: 'Header Bidding Wrapper',
    role: 'Client & Server-Side Integration',
    status: 'integration',
    statusText: 'INTEGRATION READY',
    desc: 'Open-source header bidding ecosystem allowing publisher pages to solicit bids from multiple programmatic demand partners prior to the primary ad server call.'
  },
  {
    name: '5. Header Bidding Architecture',
    category: 'Publisher Monetization',
    role: 'Simultaneous Competition',
    status: 'verify',
    statusText: 'PRE-AUCTION PATH',
    desc: 'Eliminates traditional waterfall inefficiency by giving external programmatic demand equal opportunity to compete against direct campaigns.'
  },
  {
    name: '6. Demand Side (DSP & Direct)',
    category: 'Advertiser Buying',
    role: 'Demand Ingestion',
    status: 'live',
    statusText: 'LIVE CORE',
    desc: 'Ingests advertiser campaigns, audience criteria, creative payloads, and budget rules into the programmatic decisioning pipeline.'
  },
  {
    name: '7. Supply Side (SSP & Inventory)',
    category: 'Publisher Inventory',
    role: 'Ad Opportunity Aggregator',
    status: 'live',
    statusText: 'LIVE CORE',
    desc: 'Aggregates publisher properties, ad units, and placement slots into structured inventory with format, device, and floor attributes.'
  },
  {
    name: '8. Ad Exchange Marketplace',
    category: 'Liquidity Layer',
    role: 'Matching Engine',
    status: 'verify',
    statusText: 'EXCHANGE INTEGRATION',
    desc: 'Neutral programmatic marketplace connecting supply and demand with clear transaction rules, auction clearing, and deduplication.'
  },
  {
    name: '9. Telemetry & Measurement',
    category: 'Verification & Quality',
    role: 'Audit & Analytics',
    status: 'live',
    statusText: 'LIVE CORE',
    desc: 'Logs raw impression requests, valid render events, click verification, latency monitoring, and S2S postback conversion attribution.'
  }
];

const faqList = [
  {
    q: 'What is the difference between an ad server and an SSP?',
    a: 'An ad server is the primary management and delivery engine that decides which ad serves on a publisher’s website based on priority, direct campaign orders, and inventory rules. An SSP (Supply-Side Platform) is a monetization layer designed specifically to connect that inventory to external programmatic demand, DSPs, and ad exchanges.'
  },
  {
    q: 'What is OpenRTB and how does Boost RAVA utilize it?',
    a: 'OpenRTB is an IAB-maintained protocol that standardizes the structure of bid requests and bid responses across programmatic participants. It ensures that device signals, floor prices, creative attributes, and auction rules are transmitted reliably between demand and supply in milliseconds.'
  },
  {
    q: 'What is the role of Prebid in programmatic infrastructure?',
    a: 'Prebid is an open-source framework used by publishers to run header bidding auctions directly on the browser (Prebid.js) or via server-to-server wrappers (Prebid Server), maximizing bid density before the ad server makes its final decision.'
  },
  {
    q: 'How does header bidding differ from traditional waterfall setups?',
    a: 'In a traditional waterfall, ad calls cascade sequentially from one ad network to the next based on historical average rates, resulting in latency and lost revenue. Header bidding allows multiple demand sources to bid simultaneously on the exact same impression, driving true market competition.'
  },
  {
    q: 'How does Boost RAVA handle latency and auction timeouts?',
    a: 'Boost RAVA applies strict timeout thresholds (typically 80ms–150ms). If a demand partner does not respond within the allocated window, the auction closes gracefully, ensuring that publisher page load speeds and Core Web Vitals remain completely unimpacted.'
  }
];

export function ProgrammaticInfrastructureLandingPage() {
  const [activeTab, setActiveTab] = useState<'architecture' | 'openrtb' | 'yield'>('architecture');
  const [impressions, setImpressions] = useState(1000000);
  const [fillRate, setFillRate] = useState(70);
  const [floorEcpm, setFloorEcpm] = useState(65);

  const yieldCalc = useMemo(() => {
    const paidImps = impressions * (fillRate / 100);
    const grossRev = (paidImps / 1000) * floorEcpm;
    return {
      paidImps: Math.round(paidImps).toLocaleString(),
      grossRev: Math.round(grossRev).toLocaleString(),
      avgCpm: floorEcpm.toFixed(2)
    };
  }, [impressions, fillRate, floorEcpm]);

  return (
    <div className="br-infra-root bg-white text-slate-900 font-sans antialiased overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-br from-[#061022] via-[#091738] to-[#1a0c3b] text-white">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#920dff_1px,transparent_1px)] [background-size:28px_28px]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#23d8e1]">
                <span className="w-2 h-2 rounded-full bg-[#23d8e1] animate-pulse" />
                AD SERVING, RTB, PREBID &amp; OPENRTB ARCHITECTURE
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                Programmatic Infrastructure: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23d8e1] via-[#920dff] to-[#ff6900]">The Engine of Digital Media</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Explore the technical architecture powering ad serving, real-time auctions, header bidding, OpenRTB protocols, and multi-demand liquidity. Built with modular clarity and transparent status indicators.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={registerUrl}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg shadow-[#920dff]/30 hover:opacity-95 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  Build With Boost RAVA <span className="ml-2">→</span>
                </a>
                <a
                  href="#tech-stack"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200"
                >
                  Technical Architecture
                </a>
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-slate-300">
                <div>
                  <strong className="block text-white text-base font-bold">&lt; 100ms</strong>
                  <span>Bid Decision Window</span>
                </div>
                <div>
                  <strong className="block text-white text-base font-bold">OpenRTB 2.5+</strong>
                  <span>Protocol Compliant</span>
                </div>
                <div>
                  <strong className="block text-white text-base font-bold">Prebid Ready</strong>
                  <span>Header Bidding Support</span>
                </div>
              </div>
            </div>

            {/* Right: Technical Architecture Terminal Mockup */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/95 rounded-3xl p-6 border border-white/15 shadow-2xl backdrop-blur-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 font-mono text-slate-300">adserver.pipeline.telemetry</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px]">ACTIVE ENGINE</span>
                </div>

                <div className="mt-5 space-y-3 font-mono text-xs">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
                    <div className="text-[#23d8e1] font-bold">01. INCOMING BID REQUEST (OpenRTB)</div>
                    <div className="text-slate-300 text-[11px] truncate">
                      {`{ "id": "req-89a2", "imp": [{ "id": "1", "banner": { "w": 300, "h": 250 } }] }`}
                    </div>
                  </div>

                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
                    <div className="text-[#920dff] font-bold">02. PREBID &amp; HEADER BIDDING</div>
                    <div className="text-slate-300 text-[11px]">
                      Soliciting bids from competing demand endpoints...
                    </div>
                  </div>

                  <div className="p-3 bg-white/5 rounded-xl border border-white/5 space-y-1">
                    <div className="text-[#ff6900] font-bold">03. DECISION &amp; CLEARING AUCTION</div>
                    <div className="text-slate-300 text-[11px]">
                      Winning Bid: ৳72.50 CPM · Latency: 42ms · Rule: Verified
                    </div>
                  </div>

                  <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 space-y-1">
                    <div className="text-emerald-400 font-bold">04. AD DELIVERY &amp; S2S LOGGING</div>
                    <div className="text-slate-300 text-[11px]">
                      Render complete · Impression recorded · VAST/HTML5 validated
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE 9 CORE ARCHITECTURAL COMPONENTS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80" id="tech-stack">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">SYSTEM BREAKDOWN</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The 9 Pillars of Programmatic Infrastructure
            </h2>
            <p className="text-slate-600 text-base">
              A premium infrastructure demands clear distinction: we avoid conflating ad servers, header bidding, OpenRTB, SSPs, and DSPs as synonyms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techComponents.map((comp) => {
              const isLive = comp.status === 'live';
              return (
                <div
                  key={comp.name}
                  className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#920dff]/40 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full ${
                        isLive ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-purple-50 text-[#920dff] border border-purple-200'
                      }`}>
                        {comp.statusText}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-400">{comp.category}</span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-1">{comp.name}</h3>
                    <div className="text-xs font-semibold text-[#ff6900] mb-2">{comp.role}</div>
                    <p className="text-sm text-slate-600 leading-relaxed">{comp.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. INTERACTIVE ARCHITECTURE FLOW */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#23d8e1]">INTERCONNECTION DIAGRAM</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Complete End-to-End Programmatic Stack
            </h2>
            <p className="text-slate-300 text-base">
              From advertiser brief to publisher impression rendering in under 100 milliseconds.
            </p>
          </div>

          {/* Interactive Stack Flow */}
          <div className="bg-slate-950 rounded-3xl p-8 border border-white/15 shadow-2xl space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center font-mono">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] text-slate-400 block mb-1">DEMAND LAYER</span>
                <strong className="text-sm text-white block">Advertisers &amp; DSPs</strong>
                <span className="text-xs text-slate-400">Campaigns &amp; Budgets</span>
              </div>
              <div className="p-4 rounded-xl bg-gradient-to-br from-[#920dff]/20 to-[#6a32ff]/20 border border-[#920dff]/40">
                <span className="text-[10px] text-[#23d8e1] block mb-1">TRANSACTION PROTOCOL</span>
                <strong className="text-sm text-white block">OpenRTB &amp; Exchange</strong>
                <span className="text-xs text-slate-300">Auction Engine &amp; Bids</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] text-slate-400 block mb-1">PRE-AUCTION COMPETITION</span>
                <strong className="text-sm text-white block">Prebid Header Bidding</strong>
                <span className="text-xs text-slate-400">Yield Optimization</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-[10px] text-slate-400 block mb-1">SUPPLY LAYER</span>
                <strong className="text-sm text-white block">Publishers &amp; Screens</strong>
                <span className="text-xs text-slate-400">Web, Mobile &amp; DOOH</span>
              </div>
            </div>

            {/* Connecting Arrows */}
            <div className="flex justify-between items-center px-8 text-xs text-slate-400 font-mono hidden md:flex">
              <span>Demand Origination ──►</span>
              <span>Bid Exchange (RTB) ──►</span>
              <span>Prebid Wrapper ──►</span>
              <span>Impression Render</span>
            </div>

            <div className="p-4 bg-white/5 rounded-xl border border-white/5 text-xs text-slate-300 flex flex-col sm:flex-row justify-between items-center gap-3">
              <span>All external demand connectors and Prebid modules are subject to verified production deployment.</span>
              <a href="/publisher/" className="text-[#23d8e1] hover:underline font-bold whitespace-nowrap">
                Explore Publisher Integration →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PUBLISHER YIELD & REVENUE SIMULATOR */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">YIELD MATHEMATICS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Publisher Revenue &amp; Floor Price Modeling
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Estimate publisher ad inventory yield based on expected monthly pageviews, fill rate competition, and average eCPM floor prices.
              </p>
              <div className="p-4 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-1.5 shadow-sm">
                <strong className="text-slate-900 block font-bold">Planning Formula:</strong>
                <div>Gross Revenue = (Monthly Impressions × Fill Rate %) ÷ 1,000 × eCPM</div>
              </div>
            </div>

            {/* Interactive Calculator */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2">
                      Monthly Ad Impressions: {impressions.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="100000"
                      max="10000000"
                      step="100000"
                      value={impressions}
                      onChange={(e) => setImpressions(+e.target.value)}
                      className="w-full accent-[#920dff]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2">
                      Expected Fill Rate: {fillRate}%
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="100"
                      step="5"
                      value={fillRate}
                      onChange={(e) => setFillRate(+e.target.value)}
                      className="w-full accent-[#23d8e1]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-2">
                      Average eCPM (৳): ৳{floorEcpm}
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="250"
                      step="5"
                      value={floorEcpm}
                      onChange={(e) => setFloorEcpm(+e.target.value)}
                      className="w-full accent-[#ff6900]"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100">
                    <span className="text-xs text-slate-500 block">Paid Impressions</span>
                    <strong className="text-base sm:text-lg font-extrabold text-slate-900">{yieldCalc.paidImps}</strong>
                  </div>
                  <div className="bg-purple-50 rounded-xl p-3 border border-purple-100">
                    <span className="text-xs text-[#920dff] block font-semibold">Estimated Gross Yield</span>
                    <strong className="text-base sm:text-lg font-extrabold text-[#920dff]">৳{yieldCalc.grossRev}</strong>
                  </div>
                  <div className="bg-slate-50 rounded-xl p-3 border border-slate-100 col-span-2 sm:col-span-1">
                    <span className="text-xs text-slate-500 block">Average eCPM</span>
                    <strong className="text-base sm:text-lg font-extrabold text-slate-900">৳{yieldCalc.avgCpm}</strong>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4B. INTERCONNECTED ADTECH ECOSYSTEM */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#23d8e1]">CONNECTED STACK</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Programmatic Ecosystem Solutions
            </h2>
            <p className="text-slate-400 text-base">
              Explore how our infrastructure powers advertiser buying, publisher yield, and rich interactive experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Programmatic Advertising',
                tag: 'Media Buying Core',
                desc: 'RTB auction mechanics, automated pacing, and end-to-end campaign execution.',
                href: '/programmatic-advertising/'
              },
              {
                title: 'Publisher Monetization',
                tag: 'SSP & Floor Control',
                desc: 'Header bidding, Prebid adapters, floor yield optimization, and monetization.',
                href: '/publisher/'
              },
              {
                title: 'Advertiser Platform',
                tag: 'DSP & Campaigns',
                desc: 'Targeted display, rich media, video, and programmatic reach across premium sites.',
                href: '/advertiser/'
              },
              {
                title: 'Rich Media Delivery',
                tag: 'High-Impact Canvas',
                desc: 'Expandables, sticky anchors, side skins, and interactive creative engine.',
                href: '/rich-media/'
              },
              {
                title: 'HTML5 Formats',
                tag: 'IAB Responsive',
                desc: 'Code-driven creatives with multi-device QA checklist and lightweight payloads.',
                href: '/html5-ad-formats/'
              },
              {
                title: 'AI & Contextual Engine',
                tag: 'Signal Intelligence',
                desc: 'Semantic context parsing, zero-cookie signal scoring, and privacy-first matching.',
                href: '/ai-programmatic-advertising/'
              },
              {
                title: 'Connected TV (CTV)',
                tag: 'Living Room Screens',
                desc: 'Big screen digital streaming delivery across international CTV inventory partners.',
                href: '/ctv/'
              },
              {
                title: 'Digital Out-of-Home',
                tag: 'Urban Billboards',
                desc: 'DOOH highway and mall screen inventory booked with programmatic dayparting.',
                href: '/dooh/'
              }
            ].map((sol) => (
              <a
                key={sol.title}
                href={sol.href}
                className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#920dff]/50 hover:bg-white/10 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#23d8e1] block mb-2">{sol.tag}</span>
                  <h3 className="text-lg font-bold text-white group-hover:text-[#23d8e1] transition-colors mb-2">{sol.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{sol.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-[#920dff] group-hover:text-white transition-colors">
                  <span>View Documentation</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AEO / SEARCH ENGINE FAQ */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">KNOWLEDGE BASE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions on AdTech Infrastructure
            </h2>
            <p className="text-slate-600 text-base">
              Clear technical definitions for ad engineers, media planners, and programmatic buyers.
            </p>
          </div>

          <div className="space-y-4">
            {faqList.map((item, idx) => (
              <details
                key={idx}
                className="group bg-slate-50 rounded-2xl border border-slate-200/80 p-5 transition-all duration-200 open:bg-white open:shadow-md open:border-[#920dff]/40"
              >
                <summary className="font-bold text-slate-900 text-base cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{item.q}</span>
                  <span className="w-6 h-6 rounded-full bg-slate-200 group-open:bg-[#920dff] group-open:text-white flex items-center justify-center text-xs transition-colors shrink-0">
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

      {/* 6. CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-[#0d224d] via-[#250d4d] to-[#071329] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Integrate With Boost RAVA&apos;s Programmatic Infrastructure
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Whether deploying advertiser campaigns or monetizing publisher ad slots, our infrastructure connects you to programmatic scale.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href={registerUrl}
                className="px-7 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg hover:opacity-95 hover:scale-[1.02] transition-all"
              >
                Create Account
              </a>
              <a
                href="/advertiser/"
                className="px-7 py-3 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                Advertiser Solutions →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
