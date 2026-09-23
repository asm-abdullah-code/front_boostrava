'use client';

import React, { useState, useMemo } from 'react';

const registerUrl = 'https://panel.boostrava.com/#/register';

const advertiserFlow = [
  { step: '01', title: 'Campaign', role: 'Objective & Flight', desc: 'Define your advertising goal—brand awareness, website traffic, or sales conversions—and set flight dates.' },
  { step: '02', title: 'Creative', role: 'Format Selection', desc: 'Upload standard IAB display banners, animated HTML5 packages, interactive rich media, or video creatives.' },
  { step: '03', title: 'Audience', role: 'Targeting Matrix', desc: 'Target your ideal audience by geography (Bangladesh & global), device, OS, browser, contextual topic, and time.' },
  { step: '04', title: 'Budget', role: 'Pacing & Bidding', desc: 'Set daily or lifetime media budgets with automated delivery pacing and maximum CPM/CPC bidding limits.' },
  { step: '05', title: 'Programmatic Delivery', role: 'Real-Time Scale', desc: 'Campaign bids in real time across verified publisher websites, mobile apps, and screens in under 100ms.' },
  { step: '06', title: 'Measurement', role: 'Transparent ROI', desc: 'Track live impressions, clicks, CTR, effective CPA, and S2S postback conversions in your advertiser dashboard.' },
];

const targetingControls = [
  { name: 'Bangladesh & Geographic Focus', desc: 'Target by country, division, and cities including Dhaka, Chattogram, Sylhet, Rajshahi, and Khulna with zero waste.' },
  { name: 'Device & Hardware Screen', desc: 'Filter delivery across smartphones, tablets, desktop computers, and connected smart TV screens.' },
  { name: 'Operating System & Browser', desc: 'Reach users specifically on Android, iOS, Windows, macOS, Chrome, Safari, and popular mobile browsers.' },
  { name: 'Contextual Topic Categories', desc: 'Align your brand with high-intent editorial content such as News, Business, Technology, Lifestyle, and Sports.' },
  { name: 'Dayparting & Time Schedules', desc: 'Activate ads during peak conversion windows, meal times, lunch breaks, or specific days of the week.' },
  { name: 'Telecom & Connection Speed', desc: 'Optimize ad delivery based on mobile carrier data (Grameenphone, Banglalink, Robi) and high-speed Wi-Fi.' },
];

const faqList = [
  {
    q: 'How do I advertise online in Bangladesh with Boost RAVA?',
    a: 'Create a free advertiser account on Boost RAVA, configure your campaign objective, choose your target audience (by Bangladesh location, device, or topic), upload your display or HTML5 creative, set your budget, and launch. Your campaign starts delivering across top publisher sites within minutes.'
  },
  {
    q: 'What is the minimum budget required to start digital advertising in Bangladesh?',
    a: 'Boost RAVA is an accessible online advertising platform for both high-growth startups and established brands. You can start with flexible daily or lifetime budgets, retaining complete control over spend with no hidden fees.'
  },
  {
    q: 'What ad formats are supported on the Boost RAVA advertiser platform?',
    a: 'Boost RAVA supports standard display banners (300×250, 728×90, 320×50, 970×250, 300×600), interactive HTML5 ads, high-impact rich media, in-stream and out-stream video ads, and connected screen placements.'
  },
  {
    q: 'How does conversion tracking work for programmatic campaigns?',
    a: 'Boost RAVA includes built-in Server-to-Server (S2S) postback conversion tracking and UTM tracking macro helpers. You can track leads, purchases, app downloads, and custom conversion events with full attribution.'
  },
  {
    q: 'How does targeted advertising in Bangladesh work on Boost RAVA?',
    a: 'Advertisers can target consumers by division, district, carrier network, smartphone brand, operating system, and content category across leading Bengali and English publisher networks.'
  },
  {
    q: 'Can I calculate estimated campaign reach and impressions before launching?',
    a: 'Yes. Boost RAVA provides a media planning calculator that estimates your expected impressions, clicks, and effective CPA based on your budget, target CPM, and format choices.'
  }
];

export function AdvertiserLandingPage() {
  const [budget, setBudget] = useState(50000);
  const [cpm, setCpm] = useState(60);
  const [ctr, setCtr] = useState(1.5);
  const [convRate, setConvRate] = useState(2.0);

  const planner = useMemo(() => {
    const imps = cpm > 0 ? (budget / cpm) * 1000 : 0;
    const clicks = imps * (ctr / 100);
    const conversions = clicks * (convRate / 100);
    const cpc = clicks > 0 ? budget / clicks : 0;
    const cpa = conversions > 0 ? budget / conversions : 0;
    return {
      impressions: Math.round(imps).toLocaleString(),
      clicks: Math.round(clicks).toLocaleString(),
      conversions: Math.round(conversions).toLocaleString(),
      cpc: cpc.toFixed(2),
      cpa: cpa.toFixed(2)
    };
  }, [budget, cpm, ctr, convRate]);

  return (
    <div className="br-adv-root bg-white text-slate-900 font-sans antialiased overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-br from-[#071329] via-[#0d224d] to-[#250d4d] text-white">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#920dff_1px,transparent_1px)] [background-size:28px_28px]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#23d8e1]">
                <span className="w-2 h-2 rounded-full bg-[#23d8e1] animate-pulse" />
                PROGRAMMATIC ADVERTISING FOR ADVERTISERS
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                Programmatic Advertising Platform to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23d8e1] via-[#920dff] to-[#ff6900]">Plan, Launch &amp; Scale</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Advertise online in Bangladesh and global markets with unmatched targeted advertising precision. Combine automated campaign buying, interactive creative studio tools, flexible budgeting, and real-time reporting in one unified online advertising platform.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={registerUrl}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg shadow-[#920dff]/30 hover:opacity-95 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  Start Advertising Now <span className="ml-2">→</span>
                </a>
                <a
                  href="#campaign-workflow"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200"
                >
                  Campaign Workflow
                </a>
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-slate-300">
                <div>
                  <strong className="block text-white text-base font-bold">Targeted Reach</strong>
                  <span>Bangladesh &amp; International</span>
                </div>
                <div>
                  <strong className="block text-white text-base font-bold">Multi-Format</strong>
                  <span>Display, HTML5 &amp; Rich Media</span>
                </div>
                <div>
                  <strong className="block text-white text-base font-bold">Full Control</strong>
                  <span>Real-Time ROI Tracking</span>
                </div>
              </div>
            </div>

            {/* Right: Advertiser Campaign Console Mockup */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 rounded-3xl p-6 border border-white/15 shadow-2xl backdrop-blur-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 font-mono text-slate-300">advertiser.console</span>
                  </div>
                  <span className="text-[#23d8e1] font-mono text-[11px] font-bold">CAMPAIGN ACTIVE</span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-white font-bold text-sm">Bangladesh Mega Campaign</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">
                        Pacing 100%
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-300">
                      <span className="px-2 py-0.5 rounded bg-white/10">Location: Bangladesh (Nationwide)</span>
                      <span className="px-2 py-0.5 rounded bg-white/10">Device: Mobile + Desktop</span>
                      <span className="px-2 py-0.5 rounded bg-white/10">Format: HTML5 + Rich Media</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-center">
                    <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                      <span className="text-[10px] text-slate-400 block font-mono">DELIVERED IMPRESSIONS</span>
                      <strong className="text-xl font-extrabold text-white">833,330</strong>
                      <span className="text-[10px] text-emerald-400 block mt-0.5">99.8% Viewable</span>
                    </div>
                    <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                      <span className="text-[10px] text-slate-400 block font-mono">MEASURED CTR</span>
                      <strong className="text-xl font-extrabold text-[#23d8e1]">1.65%</strong>
                      <span className="text-[10px] text-slate-300 block mt-0.5">13,750 Clicks</span>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between items-center text-xs text-slate-400 font-mono">
                    <span>Conversion Attribution: Active</span>
                    <span className="text-[#ff6900] font-bold">ROAS 3.8×</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MANDATORY: ADVERTISER CAMPAIGN FLOW */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80" id="campaign-workflow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">CAMPAIGN JOURNEY</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The 6-Step Advertiser Campaign Workflow
            </h2>
            <p className="text-slate-600 text-base">
              A structured, transparent pathway from campaign objective definition to real-time ROI measurement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advertiserFlow.map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#920dff]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-mono font-bold text-[#920dff] bg-purple-100/70 px-2.5 py-0.5 rounded">
                      {s.step}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400 uppercase">{s.role}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1">{s.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Workflow Summary Flow Bar */}
          <div className="mt-10 bg-slate-900 text-white rounded-2xl p-4 text-center font-mono text-xs sm:text-sm font-bold flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <span>Campaign</span>
            <span className="text-[#23d8e1]">↓</span>
            <span>Creative</span>
            <span className="text-[#23d8e1]">↓</span>
            <span>Audience</span>
            <span className="text-[#23d8e1]">↓</span>
            <span>Budget</span>
            <span className="text-[#23d8e1]">↓</span>
            <span>Programmatic Delivery</span>
            <span className="text-[#23d8e1]">↓</span>
            <span className="text-[#ff6900]">Measurement</span>
          </div>
        </div>
      </section>

      {/* 3. TARGETED ADVERTISING CAPABILITIES */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">PRECISION TARGETING</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Targeted Advertising Across Bangladesh &amp; Beyond
            </h2>
            <p className="text-slate-600 text-base">
              Eliminate ad waste. Direct your digital advertising spend to users who match your ideal customer profile.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {targetingControls.map((t) => (
              <div
                key={t.name}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:shadow-lg hover:border-[#920dff]/40 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#920dff] font-bold flex items-center justify-center text-sm mb-3">
                  ✓
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{t.name}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MEDIA PLANNING & BUDGET CALCULATOR */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#23d8e1]">CAMPAIGN PLANNER</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Media Budget &amp; Outcome Estimator
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Estimate how many impressions, clicks, and conversions your digital advertising budget can purchase before you launch.
              </p>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
                <span className="text-white font-bold block">Calculation Transparency:</span>
                <div>• Estimated Impressions = (Budget ÷ CPM) × 1,000</div>
                <div>• Estimated Clicks = Impressions × (CTR ÷ 100)</div>
                <div>• Effective CPA = Total Budget ÷ Conversions</div>
              </div>
            </div>

            {/* Interactive Inputs */}
            <div className="lg:col-span-7">
              <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                      <span>Budget (৳ / USD)</span>
                      <span className="text-[#23d8e1]">{budget.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="5000"
                      max="500000"
                      step="5000"
                      value={budget}
                      onChange={(e) => setBudget(+e.target.value)}
                      className="w-full accent-[#920dff]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                      <span>Target CPM</span>
                      <span className="text-[#23d8e1]">৳{cpm}</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="200"
                      step="5"
                      value={cpm}
                      onChange={(e) => setCpm(+e.target.value)}
                      className="w-full accent-[#920dff]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                      <span>Assumed CTR (%)</span>
                      <span className="text-[#ff6900]">{ctr}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.3"
                      max="5.0"
                      step="0.1"
                      value={ctr}
                      onChange={(e) => setCtr(+e.target.value)}
                      className="w-full accent-[#ff6900]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                      <span>Conversion Rate (%)</span>
                      <span className="text-[#ff6900]">{convRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="8.0"
                      step="0.5"
                      value={convRate}
                      onChange={(e) => setConvRate(+e.target.value)}
                      className="w-full accent-[#ff6900]"
                    />
                  </div>
                </div>

                {/* Outputs */}
                <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="text-[11px] text-slate-400 block font-mono">EST. IMPRESSIONS</span>
                    <strong className="text-base sm:text-lg font-extrabold text-white mt-1 block">{planner.impressions}</strong>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="text-[11px] text-slate-400 block font-mono">EST. CLICKS</span>
                    <strong className="text-base sm:text-lg font-extrabold text-[#23d8e1] mt-1 block">{planner.clicks}</strong>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="text-[11px] text-slate-400 block font-mono">EST. CONVERSIONS</span>
                    <strong className="text-base sm:text-lg font-extrabold text-[#ff6900] mt-1 block">{planner.conversions}</strong>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="text-[11px] text-slate-400 block font-mono">EFFECTIVE CPA</span>
                    <strong className="text-base sm:text-lg font-extrabold text-white mt-1 block">৳{planner.cpa}</strong>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. AEO / SEARCH ENGINE FAQ */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">ADVERTISER GUIDE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Advertising Online
            </h2>
            <p className="text-slate-600 text-base">
              Key answers regarding digital advertising in Bangladesh, campaign budgets, and programmatic buying.
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
                Ready to Launch Your Advertising Campaign?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Open your advertiser account today and start reaching verified audiences across Bangladesh and international networks.
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
                href="/rich-media/"
                className="px-7 py-3 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                Creative Formats →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
