'use client';

import React, { useState } from 'react';

const registerUrl = 'https://panel.boostrava.com/#/register';
const publisherUrl = '/publisher/';

const workflowSteps = [
  { step: '01', title: 'Advertiser', desc: 'Brand or agency defines goals, KPI benchmarks, and media budget.', role: 'Demand Origin' },
  { step: '02', title: 'Campaign', desc: 'Sets flight dates, pacing rules, frequency caps, and targeting filters.', role: 'Configuration' },
  { step: '03', title: 'Targeting', desc: 'Evaluates geo (Bangladesh & global), device, OS, time, and context signals.', role: 'Signal Processing' },
  { step: '04', title: 'RTB Auction', desc: 'Real-time bidding evaluates eligible bids in milliseconds under floor rules.', role: 'Exchange Core' },
  { step: '05', title: 'Demand Match', desc: 'Matches optimal creative asset to eligible publisher ad units.', role: 'Decisioning' },
  { step: '06', title: 'Publisher', desc: 'Ad renders cleanly on approved premium web, mobile, or screen inventory.', role: 'Supply Delivery' },
  { step: '07', title: 'User & Feedback', desc: 'User engages; impressions, clicks, conversions, and viewability are tracked.', role: 'Measurement' },
];

const formats = [
  { title: 'Programmatic Display', desc: 'Standard IAB banners (300×250, 728×90, 320×50, 970×250) delivered instantly with dynamic optimization.', href: '/advertiser/' },
  { title: 'Interactive Rich Media', desc: 'High-impact formats including side banners, floating expandables, and scroll-reactive canvases.', href: '/rich-media/' },
  { title: 'HTML5 Animated Creative', desc: 'Responsive, code-driven creatives running smoothly across every modern browser and device.', href: '/html5-ad-formats/' },
  { title: 'Video & In-Stream Ads', desc: 'Pre-roll, mid-roll, and out-stream video storytelling engaging audiences on desktop and mobile.', href: '/ctv/' },
  { title: 'Connected TV (CTV)', desc: 'Living-room big screen digital advertising with streaming partner access across international markets.', href: '/ctv/' },
  { title: 'Digital Out-of-Home (DOOH)', desc: 'High-visibility digital billboards and urban screen networks booked with programmatic agility.', href: '/dooh/' },
];

const targetingOptions = [
  { name: 'Geographic & Bangladesh', desc: 'Precision targeting by country, division, and cities including Dhaka, Chattogram, and regional hubs.' },
  { name: 'Device & Screen', desc: 'Target mobile smartphones, tablets, desktop workstations, and smart TV screens.' },
  { name: 'OS & Browser', desc: 'Filter by Android, iOS, Windows, macOS, Chrome, Safari, Firefox, and mobile in-app browsers.' },
  { name: 'Contextual & Category', desc: 'Align campaigns with page topic, content meaning, and editorial categories without third-party cookies.' },
  { name: 'Dayparting & Schedule', desc: 'Activate ads during peak consumer hours, lunch breaks, or specific weekday campaign flights.' },
  { name: 'Connection & Network', desc: 'Optimize delivery based on carrier data, 4G/5G, and high-speed broadband connections.' },
];

const faqList = [
  {
    q: 'What is programmatic advertising?',
    a: 'Programmatic advertising is the automated buying and selling of digital ad inventory using algorithmic software and real-time bidding (RTB), rather than manual insertion orders, negotiations, and spreadsheets.'
  },
  {
    q: 'How does programmatic advertising work?',
    a: 'When a user visits a website or app, an ad request is generated. Supply-side platforms (SSPs) send bid requests containing context and device signals to demand-side platforms (DSPs). DSPs evaluate campaign parameters and submit real-time bids. The winning ad creative is served to the user in less than 100 milliseconds.'
  },
  {
    q: 'What is programmatic advertising in Bangladesh?',
    a: 'In Bangladesh, programmatic advertising enables local and multinational brands to reach over 130 million internet users across top Bengali and English news publishers, lifestyle portals, and apps with automated targeting, localized payment options, and transparent eCPM pricing.'
  },
  {
    q: 'What is RTB (Real-Time Bidding)?',
    a: 'Real-Time Bidding (RTB) is a subcategory of programmatic media buying where ad inventory is bought and sold on a per-impression basis through instantaneous programmatic auctions matching demand and supply.'
  },
  {
    q: 'Who uses programmatic advertising platforms?',
    a: 'Digital marketing agencies, direct-to-consumer (D2C) brands, e-commerce retailers, FMCG enterprises, app publishers, and performance media buyers use programmatic platforms to scale brand awareness and drive customer acquisition.'
  },
  {
    q: 'How does programmatic display compare to traditional ad networks?',
    a: 'Traditional ad networks bundle inventory with fixed rates and limited transparency. Programmatic platforms provide open auction or private marketplace access, granular targeting signals, dynamic pricing, and real-time verification.'
  },
  {
    q: 'Can I run HTML5 and Rich Media ads programmatically?',
    a: 'Yes. Boost RAVA supports programmatic delivery of interactive HTML5 banners, expandable rich media, responsive canvases, and video placements across eligible publisher supply.'
  },
  {
    q: 'How is campaign performance measured in programmatic advertising?',
    a: 'Key performance metrics include billable impressions, clicks, Click-Through Rate (CTR), Cost Per Mille (CPM), Cost Per Click (CPC), Cost Per Acquisition (CPA), conversion rates, and Return on Ad Spend (ROAS) via server-to-server (S2S) postbacks.'
  }
];

export function ProgrammaticAdvertisingLandingPage() {
  const [activeStep, setActiveStep] = useState(3); // Default to RTB Auction

  return (
    <div className="br-prog-root bg-white text-slate-900 font-sans antialiased overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-br from-[#071329] via-[#0d224d] to-[#250d4d] text-white">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#920dff_1px,transparent_1px)] [background-size:28px_28px]" aria-hidden="true" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#23d8e1]">
                <span className="w-2 h-2 rounded-full bg-[#23d8e1] animate-pulse" />
                AUTOMATED MEDIA BUYING &amp; REAL-TIME BIDDING
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                Programmatic Advertising Platform for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23d8e1] via-[#920dff] to-[#ff6900]">Modern Brands</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Scale digital media buying with real-time bidding, multi-screen delivery, and contextual precision. Connect with audiences across Bangladesh and global publisher inventory through one unified programmatic advertising platform.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={registerUrl}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg shadow-[#920dff]/30 hover:opacity-95 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  Start Advertising <span className="ml-2 font-normal">→</span>
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200"
                >
                  Explore How It Works
                </a>
              </div>

              {/* Key Trust Signals */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-slate-300">
                <div>
                  <strong className="block text-white text-base font-bold">100ms</strong>
                  <span>Auction Speed</span>
                </div>
                <div>
                  <strong className="block text-white text-base font-bold">Cross-Screen</strong>
                  <span>Display, Video, CTV &amp; DOOH</span>
                </div>
                <div>
                  <strong className="block text-white text-base font-bold">Bangladesh + Global</strong>
                  <span>Verified Supply Access</span>
                </div>
              </div>
            </div>

            {/* Right: Custom Animated Loop Visual */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 rounded-3xl p-6 border border-white/15 shadow-2xl backdrop-blur-xl relative overflow-hidden">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 font-mono text-slate-300">rtb.engine.live</span>
                  </div>
                  <span className="text-[#23d8e1] font-mono">LIVE LOOP</span>
                </div>

                <div className="mt-5 space-y-2.5">
                  {workflowSteps.map((s, idx) => {
                    const isActive = activeStep === idx;
                    return (
                      <div
                        key={s.step}
                        onClick={() => setActiveStep(idx)}
                        className={`cursor-pointer rounded-xl p-3 transition-all duration-200 flex items-center justify-between ${
                          isActive
                            ? 'bg-gradient-to-r from-[#920dff]/30 to-[#23d8e1]/20 border border-[#920dff]/50 shadow-md'
                            : 'bg-white/5 border border-white/5 hover:bg-white/10'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-7 h-7 rounded-lg flex items-center justify-center font-mono text-xs font-bold ${
                            isActive ? 'bg-[#920dff] text-white shadow-sm' : 'bg-white/10 text-slate-400'
                          }`}>
                            {s.step}
                          </span>
                          <div>
                            <div className="text-sm font-bold text-white flex items-center gap-2">
                              {s.title}
                              {isActive && <span className="text-[10px] text-[#23d8e1] font-normal uppercase tracking-wider">Processing</span>}
                            </div>
                            <div className="text-xs text-slate-300 line-clamp-1">{s.desc}</div>
                          </div>
                        </div>
                        <span className="text-[11px] font-mono text-slate-400 hidden sm:inline-block">
                          {s.role}
                        </span>
                      </div>
                    );
                  })}
                </div>

                {/* Animated Pipeline Footer */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-300 font-mono">
                  <span>Latency: ~45ms</span>
                  <span className="text-[#ff6900] font-semibold">Active: {workflowSteps[activeStep].title}</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. WHAT IS PROGRAMMATIC ADVERTISING? */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">FOUNDATION EXPLAINED</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                What is Programmatic Advertising?
              </h2>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Programmatic advertising refers to the automated, algorithm-driven buying and selling of digital media in real time. Rather than relying on static rate cards and protracted manual negotiations, programmatic technology evaluates individual impression opportunities within fractions of a second.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Advertisers set their target audience criteria, budget limits, creative assets, and bid rules. When an eligible consumer loads a web page, mobile app, or connected screen, the programmatic platform connects the advertiser&apos;s demand directly to publisher supply via instantaneous Real-Time Bidding (RTB).
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                  <div className="text-2xl font-extrabold text-[#920dff]">Precision</div>
                  <p className="text-xs text-slate-600 mt-1">Serve ads to verified audiences across location, device, and contextual topics.</p>
                </div>
                <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm">
                  <div className="text-2xl font-extrabold text-[#ff6900]">Efficiency</div>
                  <p className="text-xs text-slate-600 mt-1">Eliminate wasted ad spend with real-time budget pacing and dynamic price optimization.</p>
                </div>
              </div>
            </div>

            {/* Interactive Architecture Flow Diagram */}
            <div className="lg:col-span-6">
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Programmatic Ecosystem Pipeline</span>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">End-to-End</span>
                </div>

                <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-gradient-to-b before:from-[#920dff] via-[#23d8e1] to-[#ff6900]">
                  <div className="relative">
                    <span className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-white border-2 border-[#920dff]" />
                    <h3 className="font-bold text-slate-900 text-sm">1. Demand Side (Advertisers &amp; DSPs)</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Campaign brief, audience targeting filters, and budget limits are injected into the buying engine.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-white border-2 border-[#6a32ff]" />
                    <h3 className="font-bold text-slate-900 text-sm">2. Real-Time Bidding &amp; Exchange (RTB)</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Ad exchanges and SSPs auction eligible ad slots among competing advertisers in under 100 milliseconds.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-white border-2 border-[#23d8e1]" />
                    <h3 className="font-bold text-slate-900 text-sm">3. Supply Side (Publishers &amp; Screens)</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Winning creative is delivered seamlessly to news websites, mobile apps, video streams, or digital billboards.</p>
                  </div>
                  <div className="relative">
                    <span className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-white border-2 border-[#ff6900]" />
                    <h3 className="font-bold text-slate-900 text-sm">4. Measurement &amp; Attribution</h3>
                    <p className="text-xs text-slate-600 mt-0.5">Real-time reporting tracks billable impressions, viewability, clicks, and postback conversion events.</p>
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center text-xs text-slate-500">
                  <span>Protected by Brand Safety</span>
                  <a href="/programmatic-infrastructure/" className="font-bold text-[#920dff] hover:underline">
                    View Technical Architecture →
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (VISUAL WORKFLOW) */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">EXECUTION BLUEPRINT</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The 7-Stage Programmatic Workflow
            </h2>
            <p className="text-slate-600 text-base">
              From initial campaign definition to verified impression delivery, programmatic media buying operates in a structured, transparent continuum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.slice(0, 4).map((s) => (
              <div key={s.step} className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#920dff] bg-purple-100/70 px-2.5 py-1 rounded-md">{s.step}</span>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase">{s.role}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {workflowSteps.slice(4).map((s) => (
              <div key={s.step} className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#ff6900] bg-orange-100/70 px-2.5 py-1 rounded-md">{s.step}</span>
                    <span className="text-[11px] font-semibold text-slate-500 uppercase">{s.role}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MULTI-FORMAT PROGRAMMATIC DELIVERY */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#23d8e1]">FORMAT SPECTRUM</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                One Platform. Every Digital Ad Format.
              </h2>
              <p className="text-slate-300 text-base">
                Activate cross-channel programmatic media buying with full creative compatibility across standard banners, interactive units, video, and connected screens.
              </p>
            </div>
            <a
              href="/rich-media/"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#23d8e1] hover:underline"
            >
              Explore Rich Media Formats →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formats.map((f) => (
              <div
                key={f.title}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:border-[#920dff]/50 hover:bg-white/[0.08] transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#920dff]/30 to-[#23d8e1]/30 flex items-center justify-center text-[#23d8e1] font-bold text-lg mb-4">
                    ◆
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed">{f.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <a href={f.href} className="text-xs font-bold text-[#23d8e1] hover:underline inline-flex items-center gap-1">
                    Format specifications <span>→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. PRECISION TARGETING CAPABILITIES */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">GRANULAR CONTROL</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Target Audiences Where Attention Lives
            </h2>
            <p className="text-slate-600 text-base">
              Filter and deliver impressions through multi-dimensional criteria tailored for Bangladesh and international campaigns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetingOptions.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200">
                <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#920dff] font-bold flex items-center justify-center text-sm mb-3">
                  ✓
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-1.5">{t.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-slate-900">Programmatic Advertising in Bangladesh</h3>
              <p className="text-sm text-slate-600">
                Target local audiences with regional contextual relevance across Dhaka, Chattogram, Sylhet, and nationwide publisher networks.
              </p>
            </div>
            <a
              href="/programmatic-advertising-bangladesh/"
              className="px-6 py-2.5 rounded-full font-bold text-sm bg-purple-100 text-[#920dff] hover:bg-purple-200 transition-colors whitespace-nowrap"
            >
              Bangladesh Market Guide →
            </a>
          </div>
        </div>
      </section>

      {/* 5B. TOPIC CLUSTER & CONNECTED ARCHITECTURE */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#23d8e1]">ECOSYSTEM CLUSTER</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Interconnected Programmatic Solutions
            </h2>
            <p className="text-slate-400 text-base">
              Navigate across Boost RAVA&apos;s modular AdTech stack from creative delivery to technical infrastructure and market hubs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: 'Programmatic Infrastructure',
                tag: 'Technical Architecture',
                desc: 'Ad serving core, OpenRTB protocols, Prebid header bidding, and exchange telemetry.',
                href: '/programmatic-infrastructure/'
              },
              {
                title: 'Publisher Monetization',
                tag: 'Supply & Yield',
                desc: 'Automated demand integration, floor price management, and publisher ad units.',
                href: '/publisher/'
              },
              {
                title: 'Advertiser Platform',
                tag: 'Demand & Buying',
                desc: 'DSP campaign configuration, audience targeting, pacing controls, and reporting.',
                href: '/advertiser/'
              },
              {
                title: 'Rich Media Advertising',
                tag: 'Interactive Formats',
                desc: 'High-impact expandable banners, floating canvases, side skins, and creative studio.',
                href: '/rich-media/'
              },
              {
                title: 'HTML5 Ad Formats',
                tag: 'Responsive Creative',
                desc: 'Code-driven banner formats, multi-device canvas testing, and IAB compliance.',
                href: '/html5-ad-formats/'
              },
              {
                title: 'AI & Contextual Targeting',
                tag: 'Signal Intelligence',
                desc: 'Cookieless content parsing, semantic relevance, and machine optimization.',
                href: '/ai-programmatic-advertising/'
              },
              {
                title: 'Connected TV (CTV)',
                tag: 'Streaming Screens',
                desc: 'Living room streaming video placements across international partner TV apps.',
                href: '/ctv/'
              },
              {
                title: 'Digital Out-of-Home',
                tag: 'Outdoor Billboards',
                desc: 'Programmatic digital billboard and urban transit screens with dayparting.',
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
                  <span>Explore Module</span>
                  <span>→</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 6. AEO / SEARCH ENGINE FAQ SECTION */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">KNOWLEDGE BASE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-slate-600 text-base">
              Clear, factual answers to help advertisers and publishers understand programmatic media buying.
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

      {/* 7. CTA BANNER */}
      <section className="py-16 bg-gradient-to-r from-[#0d224d] via-[#250d4d] to-[#071329] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Ready to Scale Your Programmatic Media Buying?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Open your advertiser account or connect your publisher inventory with Boost RAVA&apos;s programmatic ecosystem today.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href={registerUrl}
                className="px-7 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg hover:opacity-95 hover:scale-[1.02] transition-all"
              >
                Create Advertiser Account
              </a>
              <a
                href={publisherUrl}
                className="px-7 py-3 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                Monetize as Publisher
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
