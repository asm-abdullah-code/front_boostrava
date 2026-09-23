'use client';

import React, { useState } from 'react';

const registerUrl = 'https://panel.boostrava.com/#/register';

const standardSizes = [
  { size: '300×250', name: 'Medium Rectangle (MREC)', cat: 'Universal', desc: 'The most popular display size globally, supported across all mobile and desktop layouts.' },
  { size: '728×90', name: 'Leaderboard', cat: 'Desktop', desc: 'Prominent horizontal banner positioned above or within primary page content.' },
  { size: '300×600', name: 'Half Page (Filmstrip)', cat: 'Desktop', desc: 'High-impact vertical canvas with ample space for rich storytelling and animation.' },
  { size: '320×50', name: 'Mobile Banner', cat: 'Mobile', desc: 'Standard mobile web and in-app sticky banner designed for quick touch impressions.' },
  { size: '320×100', name: 'Large Mobile Banner', cat: 'Mobile', desc: 'Double-height mobile format offering 2x visual real estate for bold branding.' },
  { size: '970×250', name: 'Billboard Masthead', cat: 'Desktop', desc: 'Expansive premium header placement capturing immediate attention upon page entry.' },
  { size: '160×600', name: 'Wide Skyscraper', cat: 'Desktop', desc: 'Tall vertical sidebar banner ideal for sticky scrolling and step-by-step messaging.' },
  { size: '336×280', name: 'Large Rectangle', cat: 'Universal', desc: 'Enhanced inline rectangle format frequently outperforming standard MREC in CTR.' },
];

const comparisonData = [
  {
    dimension: 'Primary Objective',
    html5: 'High-efficiency brand awareness, fast load times, and reliable click-throughs.',
    richMedia: 'Immersive brand storytelling, multi-state user interaction, and attention recall.',
  },
  {
    dimension: 'Typical File Weight',
    html5: 'Lightweight (150 KB initial load, max 300 KB polite).',
    richMedia: 'Polite sub-loaded (200 KB initial, up to 2.5 MB sub-streamed video/assets).',
  },
  {
    dimension: 'User Interaction',
    html5: 'Hover effects, smooth CSS/JS animation sequences, and single-click landing URLs.',
    richMedia: 'Expandable canvases, 360° product rotations, in-unit games, multi-tab carousels.',
  },
  {
    dimension: 'Placement Type',
    html5: 'Standard fixed IAB slots (300×250, 728×90, 320×50, 970×250, etc.).',
    richMedia: 'Custom format-defined units: Side banners, floating footers, L-shapes, interstitials.',
  },
  {
    dimension: 'Inventory Reach',
    html5: '100% universal compatibility across every programmatic exchange and SSP.',
    richMedia: 'Runs on rich media-enabled publisher inventory and approved partner networks.',
  },
  {
    dimension: 'Cost / Pricing Model',
    html5: 'Standard programmatic CPM; highly cost-efficient at high impression scale.',
    richMedia: 'Premium eCPM reflecting high attention, custom creative design, and higher recall.',
  },
  {
    dimension: 'Analytics Captured',
    html5: 'Impressions, clicks, CTR, viewability, and post-click conversions.',
    richMedia: 'Dwell time, expand rates, video completion quartiles, slide views, engagement rate.',
  },
];

const faqList = [
  {
    q: 'What are HTML5 ads?',
    a: 'HTML5 ads are digital advertising banners built using modern web standards—HTML, CSS, and JavaScript. They deliver responsive, animated, and interactive display creative that runs smoothly across desktop, tablet, and mobile devices without requiring third-party plugins.'
  },
  {
    q: 'HTML5 vs Rich Media: What is the difference?',
    a: 'HTML5 is the underlying technology standard used to create lightweight, animated banner ads that fit standard IAB dimensions (e.g. 300×250). Rich Media is a broader format category that leverages HTML5 to deliver high-impact, expandable, multi-screen, or video-heavy interactive experiences.'
  },
  {
    q: 'Why should I choose HTML5 banner ads over static images?',
    a: 'Static image banners (PNG/JPEG) are prone to banner blindness and have low CTR. HTML5 banner ads incorporate motion, dynamic typography, and responsive transitions, delivering higher attention, stronger brand recall, and up to 3x higher click-through rates while maintaining light file weights.'
  },
  {
    q: 'Can HTML5 display ads be served programmatically in Bangladesh?',
    a: 'Yes. Boost RAVA supports programmatic buying and delivery of HTML5 display ads across top Bangladeshi news websites, lifestyle portals, and mobile apps with real-time bidding, frequency capping, and audience targeting.'
  },
  {
    q: 'What are the technical file size limits for HTML5 ad creatives?',
    a: 'Industry standard IAB guidelines recommend an initial file payload of 150 KB (compressed ZIP containing HTML, CSS, JS, and optimized SVG/images). Host-initiated sub-loads can load additional assets up to 300 KB–500 KB after the primary publisher page finishes rendering.'
  },
  {
    q: 'How does Boost RAVA validate HTML5 ad creatives?',
    a: 'Boost RAVA Creative Studio validates HTML5 ads against strict QA standards: ClickTag macro verification, initial and sub-load file weight checks, SSL/HTTPS asset security, CPU utilization limits, and cross-browser responsive rendering.'
  }
];

export function HTML5LandingPage() {
  const [activeDevice, setActiveDevice] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [isPlaying, setIsPlaying] = useState(true);
  const [activeSlide, setActiveSlide] = useState(0);

  const previewWidth = activeDevice === 'desktop' ? '100%' : activeDevice === 'tablet' ? '70%' : '45%';

  return (
    <div className="br-html5-root bg-white text-slate-900 font-sans antialiased overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-br from-[#071329] via-[#0d2352] to-[#250d4d] text-white">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#920dff_1px,transparent_1px)] [background-size:28px_28px]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#23d8e1]">
                <span className="w-2 h-2 rounded-full bg-[#23d8e1] animate-pulse" />
                RESPONSIVE DISPLAY &amp; CREATIVE TECHNOLOGY
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                HTML5 Advertising Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23d8e1] via-[#920dff] to-[#ff6900]">Modern Web &amp; Mobile</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Deliver responsive, animated HTML5 ads that load instantly, captivate viewers, and run flawlessly across every screen. Discover standard display banners, interactive creatives, and programmatic delivery across Bangladesh and international supply.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={registerUrl}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg shadow-[#920dff]/30 hover:opacity-95 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  Build HTML5 Creatives <span className="ml-2">→</span>
                </a>
                <a
                  href="#comparison"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200"
                >
                  HTML5 vs. Rich Media
                </a>
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-slate-300">
                <div>
                  <strong className="block text-white text-base font-bold">150 KB</strong>
                  <span>Lightweight Initial Load</span>
                </div>
                <div>
                  <strong className="block text-white text-base font-bold">Universal</strong>
                  <span>100% Exchange Compatible</span>
                </div>
                <div>
                  <strong className="block text-white text-base font-bold">60 FPS</strong>
                  <span>Smooth Hardware Render</span>
                </div>
              </div>
            </div>

            {/* Right: Live Responsive Previewer */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 rounded-3xl p-6 border border-white/15 shadow-2xl backdrop-blur-xl relative">
                
                {/* Device Selector */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 font-mono text-slate-300">html5.sandbox</span>
                  </div>
                  <div className="flex gap-1 bg-white/5 p-1 rounded-lg">
                    {(['desktop', 'tablet', 'mobile'] as const).map((d) => (
                      <button
                        key={d}
                        onClick={() => setActiveDevice(d)}
                        className={`px-2 py-0.5 rounded text-[11px] font-semibold capitalize transition-all ${
                          activeDevice === d ? 'bg-[#920dff] text-white' : 'text-slate-400 hover:text-white'
                        }`}
                      >
                        {d}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulated Canvas with Responsive Frame */}
                <div className="mt-5 p-4 rounded-2xl bg-slate-950 border border-white/10 min-h-[340px] flex flex-col justify-between items-center">
                  
                  {/* Outer Frame */}
                  <div
                    style={{ width: previewWidth }}
                    className="transition-all duration-300 bg-gradient-to-br from-[#121833] to-[#070b18] rounded-xl p-5 border border-white/20 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[220px]"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#23d8e1] bg-white/10 px-2 py-0.5 rounded">
                        HTML5 BANNERS
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {isPlaying ? '60 FPS ANIMATING' : 'PAUSED'}
                      </span>
                    </div>

                    <div className="my-auto space-y-2 text-center py-4">
                      <h3 className="text-lg sm:text-xl font-extrabold text-white">
                        {['Fast. Responsive. Beautiful.', 'Engineered for Real-Time Bidding', 'Unmatched Display Impact'][activeSlide]}
                      </h3>
                      <p className="text-xs text-slate-300">
                        Smooth vector animation, dynamic text fitting, and standardized ClickTag macros.
                      </p>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <span className="text-[10px] text-slate-400 font-mono">ClickTAG Verified</span>
                      <button
                        type="button"
                        onClick={() => setActiveSlide((activeSlide + 1) % 3)}
                        className="px-3 py-1 rounded-full text-xs font-bold bg-[#920dff] text-white hover:bg-[#ff6900] transition-colors"
                      >
                        Next Frame ↗
                      </button>
                    </div>
                  </div>

                  {/* Playback Controls */}
                  <div className="w-full mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
                      >
                        {isPlaying ? 'Ⅱ' : '▶'}
                      </button>
                      <span>00:0{activeSlide * 2 + 1}s / 00:08s</span>
                    </div>
                    <span className="text-[#23d8e1]">Device: {activeDevice}</span>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. MANDATORY: HTML5 VS RICH MEDIA COMPARISON SECTION */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80" id="comparison">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">IN-DEPTH COMPARISON</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              HTML5 Ads vs. Rich Media: What&apos;s the Difference?
            </h2>
            <p className="text-slate-600 text-base">
              While both formats run on modern web technology, they serve different marketing objectives, placement types, and attention levels.
            </p>
          </div>

          {/* Side-by-Side Comparison Table */}
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider w-1/4">Evaluation Dimension</th>
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider w-[37.5%] bg-slate-800 text-[#23d8e1]">
                      Standard HTML5 Ads
                    </th>
                    <th className="py-4 px-6 text-sm font-bold uppercase tracking-wider w-[37.5%] text-[#ff6900]">
                      High-Impact Rich Media Ads
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {comparisonData.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                      <td className="py-4 px-6 font-bold text-slate-900">{row.dimension}</td>
                      <td className="py-4 px-6 text-slate-700 bg-slate-50/40 leading-relaxed">{row.html5}</td>
                      <td className="py-4 px-6 text-slate-700 leading-relaxed">{row.richMedia}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-600">
              <span>Both formats are fully supported within the Boost RAVA programmatic campaign workflow.</span>
              <div className="flex gap-4">
                <a href="/rich-media/" className="font-bold text-[#920dff] hover:underline">
                  View Rich Media Formats →
                </a>
                <a href="/advertiser/" className="font-bold text-[#920dff] hover:underline">
                  Launch Advertiser Campaign →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. STANDARD AD SIZES & FORMAT SPECTRUM */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">CANVAS SPECIFICATIONS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Standard HTML5 Ad Sizes
              </h2>
              <p className="text-slate-600 text-base">
                Deploy responsive display creatives across the world&apos;s most widely adopted IAB standard canvas dimensions.
              </p>
            </div>
            <a
              href={registerUrl}
              className="px-6 py-2.5 rounded-full font-bold text-sm bg-purple-50 text-[#920dff] hover:bg-purple-100 transition-colors whitespace-nowrap"
            >
              Start Creative Setup →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {standardSizes.map((s) => (
              <div
                key={s.size}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:shadow-lg hover:border-[#920dff]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-lg font-extrabold text-slate-900">{s.size}</span>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-200/70 text-slate-700">
                      {s.cat}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#920dff] mb-2">{s.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CREATIVE VALIDATION & QA WORKFLOW */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#23d8e1]">QUALITY ASSURANCE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Automated HTML5 Creative Validation
            </h2>
            <p className="text-slate-300 text-base">
              Every creative uploaded to Boost RAVA passes through automated checks to ensure seamless ad exchange delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: 'ClickTAG Macro Check', desc: 'Ensures destination URLs are dynamic and fully compatible with programmatic tracking macros.' },
              { title: 'Payload Weight Limit', desc: 'Validates that initial zipped payload remains strictly under 150 KB for instant render speed.' },
              { title: 'SSL / HTTPS Assets', desc: 'Verifies all embedded fonts, images, and external scripts are securely served over HTTPS.' },
              { title: 'CPU & FPS Optimization', desc: 'Checks that CSS animations and canvas scripts run smoothly without exhausting device batteries.' },
              { title: 'Polite Sub-Loading', desc: 'Ensures secondary heavy media loads only after publisher web content has completely rendered.' },
              { title: 'Mobile Viewport Scaling', desc: 'Tests responsive viewport meta tags to prevent accidental clipping or horizontal overflow.' },
            ].map((check, idx) => (
              <div key={idx} className="bg-white/5 rounded-2xl p-6 border border-white/10 hover:bg-white/[0.08] transition-all">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 font-bold flex items-center justify-center text-sm mb-3">
                  ✓
                </div>
                <h3 className="font-bold text-white text-base mb-1.5">{check.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{check.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. AEO / SEARCH ENGINE FAQ */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">SEARCH OPTIMIZED FAQ</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About HTML5 Ads
            </h2>
            <p className="text-slate-600 text-base">
              Key technical and commercial answers for marketers and digital designers.
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
                Ready to Launch High-Performing HTML5 Ads?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Open an advertiser account and upload your HTML5 creative packages for programmatic activation today.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href={registerUrl}
                className="px-7 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg hover:opacity-95 hover:scale-[1.02] transition-all"
              >
                Start Advertising
              </a>
              <a
                href="/rich-media/"
                className="px-7 py-3 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                Explore Rich Media →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
