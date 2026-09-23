'use client';

import React, { useMemo, useState } from 'react';
import { RichMediaFormatFinder } from '../tools/RichMediaFormatFinder';

const registerUrl = 'https://panel.boostrava.com/#/register';

const formatFamilies = [
  {
    id: 'side-banner',
    name: 'Side Banner (Desktop & Mobile Rail)',
    type: 'Format-defined edge placement',
    interaction: 'Hover / Expand / Motion',
    spec: 'Pinned to viewport edge with smooth expand-on-hover trigger.',
    useCase: 'Brand launches, automotive feature tours, high-impact retail teasers.'
  },
  {
    id: 'magic-scroller',
    name: 'Magic Scroller (Scroll-Reactive)',
    type: 'Responsive in-content unit',
    interaction: 'Scroll velocity & parallax',
    spec: 'Transitions through visual layers as user scrolls down the page.',
    useCase: 'Editorial storytelling, seasonal lookbooks, multi-product showcases.'
  },
  {
    id: 'side-folding',
    name: 'Side Folding (Accordion Expandable)',
    type: 'Edge-anchored interactive',
    interaction: 'Click / Multi-fold unfold',
    spec: 'Unfolds horizontally across content with smooth 3D CSS transform.',
    useCase: 'Interactive brochures, travel package comparisons, bank cards.'
  },
  {
    id: 'floating-footer',
    name: 'Scroller Floating / Footer Anchor',
    type: 'Viewport sticky placement',
    interaction: 'Scroll-aware slide up + CTA',
    spec: 'Remains anchored at bottom of screen with close / expand controls.',
    useCase: 'Flash sales, app download drives, event registrations.'
  },
  {
    id: 'l-shape',
    name: 'L-Shape Wrap (Synchronized Canvas)',
    type: 'Content wrapper experience',
    interaction: 'Synchronized dual-axis reveal',
    spec: 'Simultaneous vertical rail and horizontal bottom arm animation.',
    useCase: 'E-commerce mega sales, blockbuster movie releases, telecom launches.'
  },
  {
    id: 'full-page',
    name: 'Full Page Immersive Interstitial',
    type: 'Viewport takeover with timer',
    interaction: 'Touch swipe / Video auto-play',
    spec: 'Zero-distraction fullscreen canvas with polite loader and dismiss control.',
    useCase: 'Luxury perfumes, high-end electronics, game trailers.'
  }
];

const standardCanvases = [
  { size: '300×250', name: 'Medium Rectangle', devices: 'Desktop · Tablet · Mobile', env: 'In-article inline placement' },
  { size: '728×90', name: 'Leaderboard', devices: 'Desktop · Tablet', env: 'Top of page header banner' },
  { size: '970×250', name: 'Billboard', devices: 'Desktop', env: 'High-impact premium masthead' },
  { size: '300×600', name: 'Half Page / Filmstrip', devices: 'Desktop · Tablet', env: 'Engaging sidebar companion' },
  { size: '160×600', name: 'Wide Skyscraper', devices: 'Desktop', env: 'Vertical margin edge presence' },
  { size: '320×50', name: 'Mobile Leaderboard', devices: 'Mobile', env: 'In-app and mobile web sticky' },
  { size: '320×100', name: 'Large Mobile Banner', devices: 'Mobile', env: 'High-visibility mobile header' },
];

const faqItems = [
  {
    q: 'What are rich media ads?',
    a: 'Rich media ads are advanced digital advertising formats that include interactive, animated, video, or multi-state features—such as expandable panels, 360-degree product views, gamified interactions, and audio-video streams—that encourage active viewer engagement beyond a static click.'
  },
  {
    q: 'How are rich media ads different from standard banner ads?',
    a: 'Standard banner ads are static images (JPEG, PNG) or simple loops with a single destination URL. Rich media ads use HTML5, CSS3, WebGL, and JavaScript to deliver dynamic user interactions, polite video loading, multi-frame product carousels, and in-unit lead capture.'
  },
  {
    q: 'Can rich media advertising run programmatically in Bangladesh?',
    a: 'Yes. Boost RAVA supports programmatic rich media advertising across top Bangladesh publishers and mobile apps, enabling advertisers to buy interactive banner ads with automated targeting and real-time verification.'
  },
  {
    q: 'What are interactive ads and how do they improve campaign performance?',
    a: 'Interactive advertising invites user participation (e.g. tap to expand, swipe to view products, scratch to reveal discounts). By turning passive viewers into active participants, interactive ads achieve 3x to 5x higher attention time, stronger brand recall, and higher conversion rates than static banners.'
  },
  {
    q: 'What rich media formats does Boost RAVA Creative Studio support?',
    a: 'Boost RAVA Creative Studio supports nine core format families: Side Banner, Magic Scroller, Side Folding, Scroller Floating, Footer Bar, L-Shape, Full Page, Half Popup, and Pop Banner, along with responsive HTML5 resizing and preview tools.'
  },
  {
    q: 'Can rich media ads be displayed smoothly on mobile devices?',
    a: 'Yes. All Boost RAVA rich media creatives are built mobile-first, utilizing GPU-accelerated CSS transforms, touch-friendly tap/swipe listeners, lightweight asset compression, and polite loading to ensure zero impact on host website speed.'
  },
  {
    q: 'How is user interaction measured in rich media campaigns?',
    a: 'In addition to standard impressions and clicks, rich media analytics measure interaction rate, average dwell/engagement time, expansion rate, video completion rate (25%, 50%, 75%, 100%), carousel slide views, and custom CTA interactions.'
  }
];

export function RichMediaLandingPage() {
  const [activeFormat, setActiveFormat] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState<'preview' | 'specs' | 'analytics'>('preview');
  const [selectedCanvas, setSelectedCanvas] = useState(0);

  const currentFmt = formatFamilies[activeFormat];

  return (
    <div className="br-rm-root bg-white text-slate-900 font-sans antialiased overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-br from-[#071329] via-[#12224d] to-[#3b126d] text-white">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#920dff_1px,transparent_1px)] [background-size:28px_28px]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#23d8e1]">
                <span className="w-2 h-2 rounded-full bg-[#23d8e1] animate-pulse" />
                HIGH-IMPACT INTERACTIVE ADVERTISING
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                Rich Media Ads That Turn Impressions into <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23d8e1] via-[#920dff] to-[#ff6900]">Experiences</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-xl">
                Move beyond flat banners. Captivate attention with interactive ads, expandable rich media, parallax storytelling, and immersive advertising formats built for web, mobile, and programmatic scale in Bangladesh and global markets.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={registerUrl}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg shadow-[#920dff]/30 hover:opacity-95 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  Create Rich Media Ad <span className="ml-2">→</span>
                </a>
                <a
                  href="#ad-showcase"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200"
                >
                  Live Interactive Showcase
                </a>
              </div>

              <div className="pt-6 border-t border-white/10 flex flex-wrap gap-6 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>3× Higher Brand Recall</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>4.5× Engagement Dwell Time</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Programmatic Delivery Ready</span>
                </div>
              </div>
            </div>

            {/* Right: Real-Looking Interactive Ad Creative Showcase */}
            <div className="lg:col-span-6" id="ad-showcase">
              <div className="bg-slate-900/90 rounded-3xl p-6 border border-white/15 shadow-2xl backdrop-blur-xl relative">
                
                {/* Header Chrome */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 font-mono text-slate-400">interactive.creative.preview</span>
                  </div>
                  <span className="text-[#23d8e1] font-mono text-[11px] bg-white/5 px-2 py-0.5 rounded">HOVER / EXPAND READY</span>
                </div>

                {/* Simulated Web Article & Ad Sandbox */}
                <div className="mt-5 relative bg-slate-950 rounded-2xl p-4 border border-white/10 overflow-hidden min-h-[380px] flex flex-col justify-between">
                  
                  {/* Fake Page Background Content */}
                  <div className="space-y-2 opacity-30 select-none pointer-events-none">
                    <div className="h-3 w-1/3 bg-slate-400 rounded" />
                    <div className="h-2 w-full bg-slate-600 rounded" />
                    <div className="h-2 w-4/5 bg-slate-600 rounded" />
                    <div className="h-2 w-2/3 bg-slate-600 rounded" />
                  </div>

                  {/* Real-Looking Expandable Ad Creative */}
                  <div
                    onMouseEnter={() => setIsExpanded(true)}
                    onMouseLeave={() => setIsExpanded(false)}
                    className={`transition-all duration-500 ease-out mx-auto rounded-2xl p-5 shadow-2xl relative cursor-pointer border ${
                      isExpanded
                        ? 'w-full min-h-[290px] bg-gradient-to-br from-[#190d3d] via-[#2a0e5c] to-[#071329] border-[#920dff] scale-[1.01]'
                        : 'w-[90%] max-w-[340px] min-h-[170px] bg-gradient-to-br from-[#1a1c38] to-[#0e1124] border-white/20'
                    }`}
                  >
                    {/* Badge */}
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#920dff]/40 text-[#23d8e1] border border-[#920dff]/50">
                        {currentFmt.name.split('(')[0]}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {isExpanded ? 'EXPANDED STATE' : 'COLLAPSED (HOVER TO EXPAND)'}
                      </span>
                    </div>

                    {/* Creative Body */}
                    <div className="space-y-2">
                      <h3 className="text-lg sm:text-xl font-extrabold text-white">
                        {isExpanded ? 'Unleash Immersive Visual Storytelling' : 'Interactive Banner Ads'}
                      </h3>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {isExpanded
                          ? 'This creative has expanded smoothly. Users can now explore 360° product angles, watch HD video trailers, or navigate interactive tabs.'
                          : 'Hover over or tap this creative to experience dynamic expansion and multi-frame engagement.'}
                      </p>
                    </div>

                    {/* Expanded Interactive Layer */}
                    {isExpanded && (
                      <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-3 gap-2">
                        <div className="bg-white/10 rounded-lg p-2 text-center">
                          <div className="text-[#23d8e1] text-xs font-bold">360° View</div>
                          <span className="text-[9px] text-slate-300">Rotate product</span>
                        </div>
                        <div className="bg-white/10 rounded-lg p-2 text-center">
                          <div className="text-[#ff6900] text-xs font-bold">HD Video</div>
                          <span className="text-[9px] text-slate-300">In-unit stream</span>
                        </div>
                        <div className="bg-white/10 rounded-lg p-2 text-center">
                          <div className="text-[#920dff] text-xs font-bold">CTA Action</div>
                          <span className="text-[9px] text-slate-300">Direct booking</span>
                        </div>
                      </div>
                    )}

                    {/* Button */}
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-[11px] text-slate-400">
                        {isExpanded ? 'Click action tracked' : 'Hover anywhere'}
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsExpanded(!isExpanded);
                        }}
                        className="px-3 py-1 rounded-full text-xs font-bold bg-[#920dff] text-white hover:bg-[#ff6900] transition-colors"
                      >
                        {isExpanded ? 'Collapse ↑' : 'Expand Demo ↗'}
                      </button>
                    </div>
                  </div>

                  {/* Bottom Format Switcher */}
                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400">
                    <span className="font-mono">Format: {currentFmt.id}</span>
                    <button
                      type="button"
                      onClick={() => setActiveFormat((activeFormat + 1) % formatFamilies.length)}
                      className="text-[#23d8e1] hover:underline font-semibold"
                    >
                      Next Format ({activeFormat + 1}/{formatFamilies.length}) →
                    </button>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE RICH MEDIA DIFFERENCE (COMPARISON MATRIX) */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">VALUE PROPOSITION</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Standard Banners vs. High-Impact Rich Media Ads
            </h2>
            <p className="text-slate-600 text-base">
              Why leading advertisers in Bangladesh and international markets are upgrading from flat display ads to interactive rich media.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Standard Display */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="text-xl font-bold text-slate-700">Standard Display Banners</h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-slate-100 text-slate-600">Static / Simple GIF</span>
              </div>
              <ul className="space-y-3.5 text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Limited Message Space:</strong> One static image or short 15-second looped animation.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Banner Blindness:</strong> Standard placements frequently ignored by modern consumers.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Binary Click Only:</strong> Measurement limited strictly to clicks and raw impressions.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">✕</span>
                  <span><strong>Low Engagement:</strong> Industry average CTR remains below 0.15%.</span>
                </li>
              </ul>
            </div>

            {/* Rich Media */}
            <div className="bg-gradient-to-br from-white to-purple-50/50 rounded-3xl p-8 border-2 border-[#920dff]/40 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-purple-100">
                <h3 className="text-xl font-bold text-slate-900">Boost RAVA Rich Media</h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-purple-100 text-[#920dff]">Interactive &amp; Immersive</span>
              </div>
              <ul className="space-y-3.5 text-sm text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>Multi-State Storytelling:</strong> Expandable canvases, product catalogs, and video in a single unit.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>Attention Capture:</strong> Scroll-reactive parallax, 3D cubes, and side folding drive memorable recall.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>Deep Telemetry:</strong> Track hover duration, dwell time, video completion rate, and tap sequences.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <span><strong>Elevated Performance:</strong> Delivers 3× to 5× higher engagement and dwell time than standard banners.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FORMAT FAMILIES & EXPLORER */}
      <section className="py-20 bg-white" id="format-explorer">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">PORTFOLIO</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                9 Rich Media Formats for High-Impact Delivery
              </h2>
              <p className="text-slate-600 text-base">
                Engineered for maximum attention without sacrificing web page load performance.
              </p>
            </div>
            <a
              href="/html5-ad-formats/"
              className="text-sm font-bold text-[#920dff] hover:underline inline-flex items-center gap-1"
            >
              Compare with Standard HTML5 Ads →
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {formatFamilies.map((fmt, idx) => (
              <div
                key={fmt.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-lg hover:border-[#920dff]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-[#920dff] bg-purple-100/70 px-2.5 py-0.5 rounded">0{idx + 1}</span>
                    <span className="text-[11px] font-semibold text-slate-500">{fmt.interaction}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1.5">{fmt.name}</h3>
                  <p className="text-xs text-slate-500 font-mono mb-3">{fmt.type}</p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{fmt.spec}</p>
                </div>
                <div className="pt-3 border-t border-slate-200/80 text-xs text-slate-500">
                  <strong className="text-slate-700">Best for:</strong> {fmt.useCase}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CREATIVE STUDIO SUITE (WORKFLOW & PREVIEW) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#23d8e1]">CREATIVE STUDIO</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Build Interactive Rich Media Creatives with Speed
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Boost RAVA Creative Studio gives advertisers and creative designers an intuitive workspace to compose, preview, and test interactive display creatives before pushing to programmatic campaigns.
              </p>
              
              <div className="space-y-3">
                {[
                  ['Multi-Layer Animation', 'Combine vector shapes, photography, headlines, and call-to-action buttons.'],
                  ['Interaction Triggers', 'Configure hover, tap, swipe, and timer-based responsive states.'],
                  ['Instant Responsive Testing', 'Simulate mobile, tablet, and desktop viewports in real time.'],
                  ['Automated Creative QA', 'Validates polite file weight, IAB compliance, and asset loading latency.'],
                ].map(([title, desc]) => (
                  <div key={title} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#920dff] text-white flex items-center justify-center text-xs shrink-0 mt-0.5">✓</span>
                    <div>
                      <strong className="text-sm text-white block">{title}</strong>
                      <span className="text-xs text-slate-400">{desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <a
                  href={registerUrl}
                  className="px-6 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg hover:opacity-95 transition-all inline-block"
                >
                  Explore Creative Studio →
                </a>
              </div>
            </div>

            {/* Studio Interface Mockup */}
            <div className="lg:col-span-7">
              <div className="bg-slate-950 rounded-3xl p-6 border border-white/15 shadow-2xl">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-600 inline-block" />
                    <span className="font-mono text-slate-300">Boost RAVA Creative Studio v2.4</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => setActiveTab('preview')}
                      className={`px-2.5 py-1 rounded text-xs font-semibold ${activeTab === 'preview' ? 'bg-[#920dff] text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                      Canvas Preview
                    </button>
                    <button
                      onClick={() => setActiveTab('specs')}
                      className={`px-2.5 py-1 rounded text-xs font-semibold ${activeTab === 'specs' ? 'bg-[#920dff] text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                      Format Specs
                    </button>
                    <button
                      onClick={() => setActiveTab('analytics')}
                      className={`px-2.5 py-1 rounded text-xs font-semibold ${activeTab === 'analytics' ? 'bg-[#920dff] text-white' : 'text-slate-400 hover:text-white'}`}
                    >
                      Engagement Telemetry
                    </button>
                  </div>
                </div>

                <div className="mt-6 p-6 rounded-2xl bg-slate-900 border border-white/10 min-h-[300px] flex flex-col justify-center items-center text-center">
                  {activeTab === 'preview' && (
                    <div className="space-y-4 max-w-md">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#920dff] to-[#23d8e1] flex items-center justify-center text-2xl mx-auto shadow-lg">
                        ❖
                      </div>
                      <h4 className="text-lg font-bold text-white">Live Creative Sandbox</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        Designers can drag-and-drop assets, configure 3D cube rotations, establish video autoplay rules, and ensure polite loading under 200 KB initial file weight.
                      </p>
                      <div className="flex justify-center gap-2 pt-2">
                        <span className="px-2.5 py-1 rounded bg-white/10 text-[10px] font-mono">HTML5 / WebGL</span>
                        <span className="px-2.5 py-1 rounded bg-white/10 text-[10px] font-mono">60 FPS Render</span>
                        <span className="px-2.5 py-1 rounded bg-white/10 text-[10px] font-mono">VAST / VPAID Video</span>
                      </div>
                    </div>
                  )}

                  {activeTab === 'specs' && (
                    <div className="text-left w-full space-y-3">
                      <h4 className="text-sm font-bold text-white border-b border-white/10 pb-2">Technical Delivery Rules</h4>
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-2.5 bg-white/5 rounded-lg">
                          <span className="text-slate-400 block">Initial File Load</span>
                          <strong className="text-white">Max 200 KB (polite)</strong>
                        </div>
                        <div className="p-2.5 bg-white/5 rounded-lg">
                          <span className="text-slate-400 block">Sub-Load Stream</span>
                          <strong className="text-white">Up to 2.2 MB polite video</strong>
                        </div>
                        <div className="p-2.5 bg-white/5 rounded-lg">
                          <span className="text-slate-400 block">Animation Frame Rate</span>
                          <strong className="text-white">60 FPS recommended</strong>
                        </div>
                        <div className="p-2.5 bg-white/5 rounded-lg">
                          <span className="text-slate-400 block">Close / Dismiss</span>
                          <strong className="text-white">Mandatory clear control</strong>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === 'analytics' && (
                    <div className="text-left w-full space-y-3">
                      <h4 className="text-sm font-bold text-white border-b border-white/10 pb-2">Measured Interaction Events</h4>
                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between p-2 bg-white/5 rounded">
                          <span className="text-slate-300">Expand Event Rate</span>
                          <span className="text-[#23d8e1] font-mono font-bold">Tracked via Runtime</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white/5 rounded">
                          <span className="text-slate-300">Dwell / Active Attention Time</span>
                          <span className="text-[#23d8e1] font-mono font-bold">Logged in Seconds</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white/5 rounded">
                          <span className="text-slate-300">Video Quartiles (25%, 50%, 75%, 100%)</span>
                          <span className="text-[#23d8e1] font-mono font-bold">VAST Compliant</span>
                        </div>
                        <div className="flex justify-between p-2 bg-white/5 rounded">
                          <span className="text-slate-300">Outbound Exit Click URL</span>
                          <span className="text-[#23d8e1] font-mono font-bold">UTM Macro Supported</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. STANDARD AD SIZES EXPLORER */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">CANVAS LIBRARY</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Standard Display Canvases for Rich Media
            </h2>
            <p className="text-slate-600 text-base">
              Rich media experiences can be built directly inside standard IAB containers or configured as format-defined viewports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {standardCanvases.map((c, idx) => (
              <div
                key={c.size}
                onClick={() => setSelectedCanvas(idx)}
                className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 ${
                  selectedCanvas === idx
                    ? 'bg-white border-[#920dff] shadow-md ring-2 ring-[#920dff]/20'
                    : 'bg-white/80 border-slate-200 hover:bg-white hover:border-slate-300'
                }`}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-base font-extrabold text-slate-900">{c.size}</span>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    {c.devices.split('·')[0]}
                  </span>
                </div>
                <h4 className="text-xs font-bold text-[#920dff] mb-1">{c.name}</h4>
                <p className="text-xs text-slate-500">{c.env}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ SECTION (AEO/GEO) */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">FAQ &amp; ADTECH GUIDE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions About Rich Media Ads
            </h2>
            <p className="text-slate-600 text-base">
              Clear answers to help marketing teams plan high-impact rich media campaigns.
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((item, idx) => (
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

      {/* 7. CTA FOOTER SECTION */}
      <section className="py-16 bg-gradient-to-r from-[#0d224d] via-[#250d4d] to-[#071329] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Don&apos;t Just Show an Ad. Create an Experience.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Build high-impact interactive ads that drive measurable attention, brand recall, and verified customer engagement.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href={registerUrl}
                className="px-7 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg hover:opacity-95 hover:scale-[1.02] transition-all"
              >
                Create a Rich Media Ad
              </a>
              <a
                href="/advertiser/"
                className="px-7 py-3 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                Advertiser Platform →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
