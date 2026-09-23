'use client';

import React, { useState, useMemo } from 'react';

const registerUrl = 'https://panel.boostrava.com/#/register';

const screenEnvironments = [
  {
    id: 'roadside',
    name: 'Highway & Roadside LED Billboards',
    desc: 'High-luminance outdoor LED displays capturing vehicle traffic and pedestrian attention across major urban avenues.',
    locations: 'Major intersections, highways, and expressways',
    peak: 'Morning & evening commute peak hours'
  },
  {
    id: 'mall',
    name: 'Shopping Mall Atrium & Retail Displays',
    desc: 'Premium indoor digital screens positioned directly at point-of-sale environments in leading commercial centers.',
    locations: 'Shopping malls, lifestyle complexes, food courts',
    peak: 'Afternoon & weekend family shopping hours'
  },
  {
    id: 'transit',
    name: 'Transit Hubs, Airports & Metro Screens',
    desc: 'High-frequency digital displays reaching mobile professionals and daily commuters during transit waiting periods.',
    locations: 'Airports, central stations, metro terminals',
    peak: 'Continuous high footfall throughout business days'
  }
];

const bookingModels = [
  { title: 'Hourly Flight Booking', desc: 'Activate displays for targeted multi-hour bursts (e.g. 3-hour evening sales promotions or event announcements).' },
  { title: 'Weekly Targeted Flight', desc: 'Secure high-frequency screen rotations across selected city screens for 7-day product launches.' },
  { title: 'Monthly Brand Takeover', desc: 'Long-term brand dominance with continuous daily presence, custom slot rotation, and prime visibility.' },
  { title: 'Programmatic Triggers', desc: 'Activate screens dynamically based on weather conditions, daytime triggers, or special live events.' },
];

const faqList = [
  {
    q: 'What is DOOH (Digital Out-of-Home) advertising?',
    a: 'Digital Out-of-Home (DOOH) advertising uses digital billboard displays, outdoor LED screens, shopping mall panels, and transit network screens to deliver dynamic digital ads to consumers in public spaces.'
  },
  {
    q: 'How does DOOH booking work on Boost RAVA?',
    a: 'Advertisers browse available screen inventory by location, choose their preferred time slots (hourly, weekly, monthly, or programmatic dayparting), upload approved high-resolution creative, and schedule the broadcast.'
  },
  {
    q: 'Can screen owners list their LED billboards on Boost RAVA?',
    a: 'Yes. Authorized digital screen owners, media networks, and billboard operators can apply to connect their inventory with Boost RAVA to monetize unsold screen slots with verified advertisers.'
  },
  {
    q: 'How is audience reach estimated for digital billboards?',
    a: 'DOOH audience delivery uses third-party vehicular traffic data, footfall sensors, camera-verified view counts, and screen dwell time modeling rather than personal device tracking.'
  },
  {
    q: 'Can I advertise across multiple cities simultaneously?',
    a: 'Yes. Boost RAVA allows centralized multi-screen campaign management, enabling advertisers to book digital screens across Dhaka, Chattogram, and partner networks simultaneously from one interface.'
  }
];

export function DOOHLandingPage() {
  const [activeEnv, setActiveEnv] = useState<'roadside' | 'mall' | 'transit'>('roadside');
  const [timeSlot, setTimeSlot] = useState<'morning' | 'afternoon' | 'evening'>('evening');
  const [screensCount, setScreensCount] = useState(4);
  const [bookingType, setBookingType] = useState<'hourly' | 'weekly' | 'monthly'>('weekly');

  const selectedEnv = screenEnvironments.find((e) => e.id === activeEnv) || screenEnvironments[0];

  const estimatedCost = useMemo(() => {
    const baseRatePerScreen = bookingType === 'hourly' ? 1200 : bookingType === 'weekly' ? 35000 : 120000; // in BDT
    const total = screensCount * baseRatePerScreen;
    return {
      total: total.toLocaleString(),
      estImpressions: (screensCount * (bookingType === 'hourly' ? 15000 : bookingType === 'weekly' ? 350000 : 1500000)).toLocaleString()
    };
  }, [screensCount, bookingType]);

  return (
    <div className="br-dooh-root bg-white text-slate-900 font-sans antialiased overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-br from-[#061022] via-[#101b45] to-[#2b0c54] text-white">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#920dff_1px,transparent_1px)] [background-size:28px_28px]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#23d8e1]">
                <span className="w-2 h-2 rounded-full bg-[#23d8e1] animate-pulse" />
                DIGITAL OUT-OF-HOME &amp; LED SCREEN BOOKING
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                DOOH Advertising: <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23d8e1] via-[#920dff] to-[#ff6900]">High-Visibility Urban Screens</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Capture unmissable real-world attention. Book digital billboards, outdoor LED displays, and premium shopping mall screens with programmatic flexibility and granular dayparting.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={registerUrl}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg shadow-[#920dff]/30 hover:opacity-95 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  Book DOOH Screen <span className="ml-2">→</span>
                </a>
                <a
                  href="#planner"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200"
                >
                  Screen Booking Planner
                </a>
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-slate-300">
                <div>
                  <strong className="block text-white text-base font-bold">100% Physical</strong>
                  <span>High Footfall Visibility</span>
                </div>
                <div>
                  <strong className="block text-white text-base font-bold">Dayparting</strong>
                  <span>Peak Hours Targeting</span>
                </div>
                <div>
                  <strong className="block text-white text-base font-bold">Flexible Booking</strong>
                  <span>Hourly, Weekly, Monthly</span>
                </div>
              </div>
            </div>

            {/* Right: Custom Urban Digital Billboard Visualization (Distinct from CTV!) */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 rounded-3xl p-6 border border-white/15 shadow-2xl relative">
                
                {/* Urban Billboard Architectural Mockup */}
                <div className="bg-slate-900 rounded-2xl p-4 border border-white/10 relative overflow-hidden">
                  
                  {/* Environment Switcher Tabs */}
                  <div className="flex justify-between items-center pb-3 border-b border-white/10 text-xs">
                    <span className="font-mono text-[#23d8e1] text-[11px]">DOOH SIMULATOR</span>
                    <div className="flex gap-1">
                      {(['roadside', 'mall', 'transit'] as const).map((env) => (
                        <button
                          key={env}
                          onClick={() => setActiveEnv(env)}
                          className={`px-2 py-0.5 rounded text-[10px] capitalize font-semibold transition-all ${
                            activeEnv === env ? 'bg-[#920dff] text-white' : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {env}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Simulated Billboard Stand with Night Glow */}
                  <div className="my-4 relative bg-slate-950 rounded-xl p-5 border border-white/20 shadow-2xl overflow-hidden min-h-[220px] flex flex-col justify-between">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    
                    <div className="flex justify-between items-center text-[10px] text-slate-300 relative z-10">
                      <span className="bg-[#920dff]/80 px-2 py-0.5 rounded text-white font-mono font-bold">
                        {selectedEnv.name.split(' ')[0].toUpperCase()} LED
                      </span>
                      <span className="font-mono text-emerald-400 bg-white/10 px-2 py-0.5 rounded">
                        BROADCAST ACTIVE
                      </span>
                    </div>

                    <div className="my-auto space-y-1 text-center relative z-10 py-3">
                      <h4 className="text-xl font-extrabold text-white tracking-tight">YOUR BRAND BILLBOARD</h4>
                      <p className="text-xs text-slate-300 font-mono">Location: Dhaka City Express Corridor</p>
                      <div className="text-[10px] text-[#ff6900] font-semibold mt-1">
                        Active Window: {timeSlot.toUpperCase()} PEAK
                      </div>
                    </div>

                    <div className="flex justify-between items-center text-[10px] text-slate-400 font-mono pt-2 border-t border-white/10 relative z-10">
                      <span>Brightness: 8000 Nits</span>
                      <span>Loop: 10s / 60s Slot</span>
                    </div>
                  </div>

                  {/* Dayparting Controls */}
                  <div className="pt-2 flex justify-between items-center text-xs">
                    <span className="text-slate-400 font-mono text-[11px]">Time Slot:</span>
                    <div className="flex gap-1">
                      {(['morning', 'afternoon', 'evening'] as const).map((t) => (
                        <button
                          key={t}
                          onClick={() => setTimeSlot(t)}
                          className={`px-2 py-0.5 rounded text-[10px] capitalize font-mono ${
                            timeSlot === t ? 'bg-[#ff6900] text-white font-bold' : 'bg-white/5 text-slate-400'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-xs text-slate-400 font-mono">
                  <span>Display Status: Premium Verified</span>
                  <span className="text-emerald-400 font-bold">Available Now</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. SCREEN ENVIRONMENTS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">SCREEN NETWORKS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Three Distinct DOOH Environments
            </h2>
            <p className="text-slate-600 text-base">
              Match your brand message to where high-value consumers walk, commute, and shop.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {screenEnvironments.map((env, idx) => (
              <div
                key={env.id}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#920dff]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-mono font-bold text-[#920dff] bg-purple-100/70 px-2.5 py-0.5 rounded">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400">DOOH Asset</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{env.name}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{env.desc}</p>
                </div>
                <div className="space-y-1.5 pt-3 border-t border-slate-100 text-xs text-slate-500">
                  <div><strong className="text-slate-700">Prime Locations:</strong> {env.locations}</div>
                  <div><strong className="text-slate-700">Peak Window:</strong> {env.peak}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BOOKING MODELS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">FLEXIBILITY</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Flexible Digital Screen Booking Models
            </h2>
            <p className="text-slate-600 text-base">
              Move beyond rigid multi-month billboard contracts with agile digital booking options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingModels.map((m) => (
              <div key={m.title} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#920dff] font-bold flex items-center justify-center text-sm mb-3">
                  ❖
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{m.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. DOOH BOOKING PLANNER */}
      <section className="py-20 bg-slate-900 text-white" id="planner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#23d8e1]">PLANNING ESTIMATE</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                DOOH Screen Booking Planner
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Estimate package rates and pedestrian/vehicular impression exposure for your screen campaign.
              </p>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
                <strong className="text-white block font-bold">Planning Basis:</strong>
                <div>Pricing estimates vary based on screen location, dimensions, and peak holiday demand.</div>
              </div>
            </div>

            {/* Planner Form */}
            <div className="lg:col-span-7">
              <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl space-y-6">
                
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-2">Booking Flight Duration</label>
                    <div className="grid grid-cols-3 gap-2">
                      {(['hourly', 'weekly', 'monthly'] as const).map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setBookingType(t)}
                          className={`py-2 px-3 rounded-xl text-xs font-bold capitalize transition-all ${
                            bookingType === t ? 'bg-[#920dff] text-white shadow-md' : 'bg-white/5 text-slate-400 hover:text-white'
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                      <span>Number of Screen Locations</span>
                      <span className="text-[#23d8e1]">{screensCount} Screens</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      step="1"
                      value={screensCount}
                      onChange={(e) => setScreensCount(+e.target.value)}
                      className="w-full accent-[#920dff]"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <span className="text-xs text-slate-400 block font-mono">EST. IMPRESSION FOOTFALL</span>
                    <strong className="text-xl font-extrabold text-white mt-1 block">{estimatedCost.estImpressions}</strong>
                  </div>
                  <div className="bg-gradient-to-br from-[#920dff]/30 to-[#6a32ff]/30 p-4 rounded-xl border border-[#920dff]/50">
                    <span className="text-xs text-[#23d8e1] block font-mono font-bold">ESTIMATED FLIGHT BUDGET</span>
                    <strong className="text-2xl font-extrabold text-white mt-1 block">৳{estimatedCost.total}</strong>
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">KNOWLEDGE BASE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About DOOH Advertising
            </h2>
            <p className="text-slate-600 text-base">
              Clear answers regarding digital billboards, screen booking, and audience estimation.
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
                Ready to Dominate Urban Screens with DOOH?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Book digital billboard slots or list your commercial LED screens on Boost RAVA.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href={registerUrl}
                className="px-7 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg hover:opacity-95 hover:scale-[1.02] transition-all"
              >
                Book a Screen Now
              </a>
              <a
                href="/ctv/"
                className="px-7 py-3 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                CTV Advertising →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
