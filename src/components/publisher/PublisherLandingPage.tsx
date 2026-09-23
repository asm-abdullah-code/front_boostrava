'use client';

import React, { useState, useMemo } from 'react';

const registerUrl = 'https://panel.boostrava.com/#/register';

const publisherSteps = [
  { step: '01', title: 'Website', role: 'Your Digital Property', desc: 'Add your website, blog, or mobile app to the publisher dashboard.' },
  { step: '02', title: 'Integration', role: 'Single JavaScript Tag', desc: 'Embed one lightweight, async ad code into your site header or ad slot.' },
  { step: '03', title: 'Ad Request', role: 'Instant Trigger', desc: 'When a reader loads a page, an ad call is automatically sent in milliseconds.' },
  { step: '04', title: 'Demand', role: 'Multiple Advertisers', desc: 'Direct brands and programmatic demand compete to purchase your ad space.' },
  { step: '05', title: 'Creative', role: 'Fast & Safe Render', desc: 'Winning display, video, or rich media ad renders smoothly without slowing down your site.' },
  { step: '06', title: 'Tracking', role: 'Transparent Analytics', desc: 'Track valid impressions, fill rates, clicks, and eCPM in real-time reporting.' },
  { step: '07', title: 'Revenue', role: 'Reliable Payouts', desc: 'Receive on-time publisher earnings via local bank transfer or global payment methods.' },
];

const publisherFormats = [
  { name: 'Standard Display Banners', size: '300×250, 728×90, 320×50', desc: 'High-fill display units supported across desktop, tablet, and mobile devices.' },
  { name: 'Interactive Rich Media', size: 'Side banners, expandables, floating bars', desc: 'Earn 2x–4x higher eCPMs with high-impact, attention-grabbing interactive formats.' },
  { name: 'Responsive HTML5 Ads', size: 'Auto-adapting screen units', desc: 'Fast-loading animated display creatives that look beautiful on every layout.' },
  { name: 'Video & In-Stream Placements', size: 'Pre-roll, mid-roll, out-stream', desc: 'Monetize video streams and articles with premium video advertising.' },
];

const publisherBenefits = [
  { title: 'One Simple Integration', desc: 'No complicated SDKs or endless header scripts. One clean JavaScript tag gives you access to a world of advertiser demand.' },
  { title: 'Multiple Demand Opportunities', desc: 'Connect with direct agencies, brand marketers, and programmatic buyers competing for your ad inventory simultaneously.' },
  { title: 'Zero Site Speed Impact', desc: 'Asynchronous, polite ad loading ensures your pages load fast, keeping readers happy and protecting SEO Core Web Vitals.' },
  { title: 'Brand Safety & Quality Ads', desc: 'Strict ad verification blocks malware, inappropriate content, and low-quality ads from appearing on your property.' },
  { title: 'High Fill Rates & Fair Yield', desc: 'Maximize unsold ad space with automated fill optimization, competitive floor prices, and dynamic buyer competition.' },
  { title: 'Prompt & Transparent Payouts', desc: 'Clear reporting on impressions, eCPM, and earnings with reliable, scheduled monthly publisher payments.' },
];

const faqList = [
  {
    q: 'How can I monetize my website with Boost RAVA?',
    a: 'Sign up for a publisher account, add your website or mobile property, choose your preferred ad unit sizes, and paste our single lightweight JavaScript tag into your website. As soon as impressions flow, you begin earning revenue from competing advertiser demand.'
  },
  {
    q: 'How does publisher monetization work?',
    a: 'When visitors browse your content, the embedded Boost RAVA tag sends an ad request. Competing advertisers place bids in real time. The highest paying, brand-safe ad is instantly served to your reader, and you earn revenue for every verified impression.'
  },
  {
    q: 'What is eCPM and how is publisher revenue calculated?',
    a: 'eCPM stands for "effective Cost Per Mille" (earnings per 1,000 impressions). Your total revenue equals: (Total Paid Impressions ÷ 1,000) × Average eCPM. Boost RAVA provides real-time dashboard analytics so you always know your exact earnings.'
  },
  {
    q: 'Will Boost RAVA ads slow down my website?',
    a: 'No. Boost RAVA uses asynchronous, lightweight JavaScript tags with polite loading. Ad creatives only load after your main editorial content renders, ensuring fast page load speeds, high Google PageSpeed scores, and smooth user experience.'
  },
  {
    q: 'What ad formats can I place on my website?',
    a: 'You can monetize standard display banners (300×250, 728×90, 320×50, 970×250, 300×600), interactive rich media units, responsive HTML5 ads, and video placements.'
  },
  {
    q: 'Can publishers in Bangladesh monetize with Boost RAVA?',
    a: 'Yes. Boost RAVA actively supports publishers in Bangladesh across news portals, blogs, forums, and entertainment websites, providing competitive local and international demand with convenient local bank transfer and electronic payout channels.'
  }
];

export function PublisherLandingPage() {
  const [pageviews, setPageviews] = useState(500000);
  const [adUnits, setAdUnits] = useState(3);
  const [ecpm, setEcpm] = useState(55);

  const estimatedEarnings = useMemo(() => {
    const totalImpressions = pageviews * adUnits;
    const filledImpressions = totalImpressions * 0.75; // 75% average fill
    const grossRevenue = (filledImpressions / 1000) * ecpm;
    return {
      totalImpressions: Math.round(totalImpressions).toLocaleString(),
      filledImpressions: Math.round(filledImpressions).toLocaleString(),
      revenue: Math.round(grossRevenue).toLocaleString()
    };
  }, [pageviews, adUnits, ecpm]);

  return (
    <div className="br-pub-root bg-white text-slate-900 font-sans antialiased overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-br from-[#071329] via-[#0d2654] to-[#250d4d] text-white">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#920dff_1px,transparent_1px)] [background-size:28px_28px]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#23d8e1]">
                <span className="w-2 h-2 rounded-full bg-[#23d8e1] animate-pulse" />
                SMART PUBLISHER MONETIZATION
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                One Simple Integration. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23d8e1] via-[#920dff] to-[#ff6900]">Multiple Demand Opportunities.</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Turn your website traffic into dependable revenue. Connect your publisher inventory to top advertisers and programmatic demand with a single, lightweight tag—no complex setup, no site slowdown.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={registerUrl}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg shadow-[#920dff]/30 hover:opacity-95 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  Start Monetizing <span className="ml-2">→</span>
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200"
                >
                  See Publisher Workflow
                </a>
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-slate-300">
                <div>
                  <strong className="block text-white text-base font-bold">1 Tag Setup</strong>
                  <span>Fast, Clean Integration</span>
                </div>
                <div>
                  <strong className="block text-white text-base font-bold">High Fill Rate</strong>
                  <span>Multi-Buyer Competition</span>
                </div>
                <div>
                  <strong className="block text-white text-base font-bold">On-Time Pay</strong>
                  <span>Transparent Earnings</span>
                </div>
              </div>
            </div>

            {/* Right: Publisher Dashboard Mockup */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 rounded-3xl p-6 border border-white/15 shadow-2xl backdrop-blur-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 font-mono text-slate-300">publisher.overview</span>
                  </div>
                  <span className="text-emerald-400 font-mono text-[11px] font-bold">LIVE EARNINGS</span>
                </div>

                <div className="mt-5 space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                      <span className="text-[11px] text-slate-400 block font-mono">ESTIMATED REVENUE</span>
                      <strong className="text-2xl font-extrabold text-[#23d8e1]">৳42,850</strong>
                      <span className="text-[10px] text-emerald-400 font-semibold block mt-1">+14.2% vs last week</span>
                    </div>
                    <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                      <span className="text-[11px] text-slate-400 block font-mono">AVERAGE eCPM</span>
                      <strong className="text-2xl font-extrabold text-[#ff6900]">৳68.40</strong>
                      <span className="text-[10px] text-slate-400 block mt-1">Multi-demand auction</span>
                    </div>
                  </div>

                  <div className="bg-white/5 p-4 rounded-xl border border-white/5 space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-300 font-bold">Active Ad Units</span>
                      <span className="text-emerald-400 font-mono text-[11px]">3 / 3 Healthy</span>
                    </div>
                    <div className="space-y-1.5 text-xs text-slate-400">
                      <div className="flex justify-between">
                        <span>728×90 Header Masthead</span>
                        <span className="text-white font-mono">92% Fill</span>
                      </div>
                      <div className="flex justify-between">
                        <span>300×250 Sidebar Rectangle</span>
                        <span className="text-white font-mono">88% Fill</span>
                      </div>
                      <div className="flex justify-between">
                        <span>320×50 Mobile Sticky Banner</span>
                        <span className="text-white font-mono">94% Fill</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 flex justify-between items-center text-xs text-slate-400 font-mono">
                    <span>Payout Schedule: Monthly Net-30</span>
                    <span className="text-emerald-400 font-bold">Payment Verified</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MANDATORY: 7-STEP PUBLISHER WORKFLOW */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">SIMPLE &amp; CLEAR</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The 7-Step Publisher Journey
            </h2>
            <p className="text-slate-600 text-base">
              From signing up to receiving verified monthly earnings, our publisher workflow is straightforward and transparent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {publisherSteps.slice(0, 4).map((s) => (
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

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {publisherSteps.slice(4).map((s) => (
              <div
                key={s.step}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#ff6900]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-mono font-bold text-[#ff6900] bg-orange-100/70 px-2.5 py-0.5 rounded">
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

          {/* Clean Workflow Summary Bar */}
          <div className="mt-10 bg-slate-900 text-white rounded-2xl p-4 text-center font-mono text-xs sm:text-sm font-bold flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <span>Website</span>
            <span className="text-[#23d8e1]">↓</span>
            <span>Integration</span>
            <span className="text-[#23d8e1]">↓</span>
            <span>Ad Request</span>
            <span className="text-[#23d8e1]">↓</span>
            <span>Demand</span>
            <span className="text-[#23d8e1]">↓</span>
            <span>Creative</span>
            <span className="text-[#23d8e1]">↓</span>
            <span>Tracking</span>
            <span className="text-[#23d8e1]">↓</span>
            <span className="text-emerald-400">Revenue</span>
          </div>
        </div>
      </section>

      {/* 3. WHY PUBLISHERS CHOOSE BOOST RAVA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">PUBLISHER ADVANTAGES</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Monetize With Boost RAVA?
            </h2>
            <p className="text-slate-600 text-base">
              Designed to help website owners maximize advertising yield without compromising editorial integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publisherBenefits.map((b) => (
              <div
                key={b.title}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:shadow-lg hover:border-[#920dff]/40 transition-all"
              >
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#920dff] font-bold flex items-center justify-center text-sm mb-3">
                  ✓
                </div>
                <h3 className="font-bold text-slate-900 text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. REVENUE CALCULATOR */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#23d8e1]">ESTIMATE EARNINGS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Publisher Revenue Calculator
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Estimate your monthly earnings based on monthly pageviews, ad units per page, and average eCPM.
              </p>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
                <span className="text-white font-bold block">Planning Basis:</span>
                <div>Formula: (Monthly Pageviews × Units × 75% Fill) ÷ 1,000 × eCPM</div>
                <span className="text-slate-400 text-[11px] block mt-1">Actual revenue depends on traffic quality and active advertiser demand.</span>
              </div>
            </div>

            {/* Calculator Inputs */}
            <div className="lg:col-span-7">
              <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl space-y-6">
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                      <span>Monthly Pageviews</span>
                      <span className="text-[#23d8e1]">{pageviews.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="50000"
                      max="5000000"
                      step="50000"
                      value={pageviews}
                      onChange={(e) => setPageviews(+e.target.value)}
                      className="w-full accent-[#920dff]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                      <span>Ad Slots Per Page</span>
                      <span className="text-[#23d8e1]">{adUnits} Placements</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="6"
                      step="1"
                      value={adUnits}
                      onChange={(e) => setAdUnits(+e.target.value)}
                      className="w-full accent-[#23d8e1]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                      <span>Expected Average eCPM</span>
                      <span className="text-[#ff6900]">৳{ecpm}</span>
                    </div>
                    <input
                      type="range"
                      min="20"
                      max="150"
                      step="5"
                      value={ecpm}
                      onChange={(e) => setEcpm(+e.target.value)}
                      className="w-full accent-[#ff6900]"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                    <span className="text-xs text-slate-400 block">Est. Paid Impressions</span>
                    <strong className="text-xl font-extrabold text-white mt-1 block">{estimatedEarnings.filledImpressions}</strong>
                  </div>
                  <div className="bg-gradient-to-br from-[#920dff]/30 to-[#6a32ff]/30 rounded-xl p-4 border border-[#920dff]/50">
                    <span className="text-xs text-[#23d8e1] block font-bold">Estimated Monthly Yield</span>
                    <strong className="text-2xl font-extrabold text-white mt-1 block">৳{estimatedEarnings.revenue}</strong>
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
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">PUBLISHER FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Website Monetization
            </h2>
            <p className="text-slate-600 text-base">
              Clear answers regarding publisher approval, ad tags, fill rates, and payments.
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
                Ready to Monetize Your Website?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Join Boost RAVA as a publisher today and connect with high-paying advertiser demand.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href={registerUrl}
                className="px-7 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg hover:opacity-95 hover:scale-[1.02] transition-all"
              >
                Become a Publisher
              </a>
              <a
                href="/programmatic-infrastructure/"
                className="px-7 py-3 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                Technical Infrastructure →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
