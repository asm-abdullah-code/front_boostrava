'use client';

import React from 'react';

const registerUrl = 'https://panel.boostrava.com/#/register';

type Route =
  | 'programmatic-advertising-bangladesh'
  | 'ai-contextual-advertising-bangladesh'
  | 'rich-media-html5-advertising-bangladesh'
  | 'publisher-monetization-bangladesh'
  | 'ctv-dooh-advertising-bangladesh';

type Config = {
  eyebrow: string;
  title: string;
  subtitle: string;
  primary: string;
  secondary: string;
  secondaryHref: string;
  theme: string;
  visual: string;
  bengaliKeywords: string[];
  pillars: Array<[string, string]>;
  steps: Array<[string, string]>;
  qa: Array<[string, string]>;
  finalTitle: string;
  finalCopy: string;
};

const configs: Record<Route, Config> = {
  'programmatic-advertising-bangladesh': {
    eyebrow: 'PROGRAMMATIC ADVERTISING BANGLADESH',
    title: 'বাংলাদেশে প্রোগ্রাম্যাটিক বিজ্ঞাপন: Automated Media Buying at Scale',
    subtitle: 'Plan, buy, and deliver digital advertising across Bangladesh’s top news dailies, lifestyle portals, and mobile apps. Reach over 130 million internet users with real-time bidding, localized audience targeting, and transparent eCPM reporting.',
    primary: 'Start Advertising',
    secondary: 'Publisher Monetization',
    secondaryHref: '/publisher-monetization-bangladesh/',
    theme: 'blue',
    visual: 'programmatic',
    bengaliKeywords: [
      'বাংলাদেশে প্রোগ্রাম্যাটিক বিজ্ঞাপন',
      'বাংলাদেশে অনলাইন বিজ্ঞাপন',
      'বাংলাদেশে ডিজিটাল বিজ্ঞাপন',
      'বাংলাদেশি ওয়েবসাইটে বিজ্ঞাপন'
    ],
    pillars: [
      ['Outcome-Led Planning', 'Align digital marketing briefs around verified brand awareness, Consideration, or lead conversions across Bangladesh.'],
      ['Premium Local Inventory', 'Direct programmatic access to verified Bangladeshi news publishers, entertainment hubs, and mobile applications.'],
      ['Context & Regional Precision', 'Target consumers by division (Dhaka, Chattogram, Sylhet, Khulna, Rajshahi), telecom network, and device.'],
      ['Transparent Real-Time Measurement', 'Review campaign delivery, impressions, CTR, and postback events with zero vanity metrics or hidden fees.']
    ],
    steps: [
      ['Campaign Objective', 'Define your target market in Bangladesh, audience demographics, message, and media budget.'],
      ['Format Mapping', 'Select standard display banners, responsive HTML5 ads, interactive rich media, or in-stream video.'],
      ['Targeting Matrix', 'Apply location filters across Bangladesh divisions, smartphone carriers, and content categories.'],
      ['Launch & Measure', 'Activate programmatic delivery across local supply and optimize pacing using live dashboard metrics.']
    ],
    qa: [
      ['বাংলাদেশে প্রোগ্রাম্যাটিক বিজ্ঞাপন কীভাবে কাজ করে?', 'প্রোগ্রাম্যাটিক বিজ্ঞাপন হলো রিয়েল-টাইম বিডিং (RTB) অ্যালগরিদমের মাধ্যমে স্বয়ংক্রিয়ভাবে ডিজিটাল বিজ্ঞাপন ক্রয় ও বিক্রয় ব্যবস্থা। একজন ভিজিটর যখন বাংলাদেশি কোনো ওয়েবসাইটে প্রবেশ করেন, মিলি-সেকেন্ডের মধ্যে বিজ্ঞাপন নিলাম সম্পন্ন হয়ে সবচেয়ে প্রাসঙ্গিক ও সেরা মূল্যের বিজ্ঞাপনটি প্রদর্শিত হয়।'],
      ['Can brands target specific cities like Dhaka and Chattogram?', 'Yes. Advertisers can isolate specific urban centers such as Dhaka metro, Chattogram, Sylhet, or execute nationwide coverage across all 8 administrative divisions.'],
      ['What ad formats deliver the best performance in Bangladesh?', 'Interactive HTML5 banners (300×250, 320×50, 300×600) and mobile-optimized rich media formats consistently drive 2x to 4x higher engagement across local news readers.']
    ],
    finalTitle: 'বাংলাদেশে আপনার ব্র্যান্ড ক্যাম্পেইন স্কেল করুন।',
    finalCopy: 'সঠিক অডিয়েন্স, সঠিক কনটেন্ট এবং স্বচ্ছ প্রোগ্রাম্যাটিক প্রযুক্তির মাধ্যমে ফলাফল নিশ্চিত করুন।'
  },
  'ai-contextual-advertising-bangladesh': {
    eyebrow: 'AI + CONTEXTUAL ADVERTISING BANGLADESH',
    title: 'বাংলাদেশে এআই ও কনটেক্সচুয়াল বিজ্ঞাপন: Privacy-First Relevance',
    subtitle: 'Align digital ads directly with content meaning, article sentiment, and editorial themes across Bengali and English media—without third-party cookies or intrusive user tracking.',
    primary: 'Start Contextual Ads',
    secondary: 'Explore Contextual Engine',
    secondaryHref: '/contextual-advertising/',
    theme: 'indigo',
    visual: 'contextual',
    bengaliKeywords: [
      'বাংলাদেশে এআই বিজ্ঞাপন',
      'বাংলা কনটেন্টে বিজ্ঞাপন টার্গেটিং',
      'কনটেক্সচুয়াল বিজ্ঞাপন বাংলাদেশ',
      'কুকিলেস ডিজিটাল অ্যাডভারটাইজিং'
    ],
    pillars: [
      ['Bengali Semantic Analysis', 'Evaluates Bengali (বাংলা) vocabulary, news topics, and article sentiment for natural cultural relevance.'],
      ['Multi-Signal Matching', 'Combines content theme, division location, mobile device, and dayparting to optimize ad delivery.'],
      ['Brand Suitability', 'Protects brand reputation by automatically preventing ad appearance near sensitive news or negative editorial stories.'],
      ['100% Cookieless Future', 'Delivers exceptional audience relevance while fully respecting consumer privacy and international standards.']
    ],
    steps: [
      ['Define Context', 'Choose the industry categories, editorial themes, or keywords most relevant to your campaign.'],
      ['Semantic Crawl', 'Boost RAVA AI context engine evaluates publisher pages across Bangladesh in real time.'],
      ['Score Relevance', 'Calculates environmental fit between your ad message and the surrounding editorial article.'],
      ['Serve & Track', 'Delivers the ad creative at the exact moment of high reader attention and measures engagement.']
    ],
    qa: [
      ['বাংলা ভাষার ওয়েবসাইটে কনটেক্সচুয়াল বিজ্ঞাপন কীভাবে কাজ করে?', 'Boost RAVA-এর কনটেক্সচুয়াল ইঞ্জিন বাংলা ও ইংরেজি উভয় ভাষার কনটেন্ট বিশ্লেষণ করে আর্টিকেলের মূল বিষয় (যেমন: প্রযুক্তি, খেলাধুলা, ব্যবসা, লাইফস্টাইল) শনাক্ত করে স্বয়ংক্রিয়ভাবে সম্পর্কিত বিজ্ঞাপন উপস্থাপন করে।'],
      ['Does contextual advertising need third-party cookies?', 'No. Contextual targeting matches ads to page content and environment rather than tracking individual user identities, making it 100% immune to cookie deprecation.'],
      ['How does brand safety work in local news environments?', 'Dynamic negative keyword filters prevent ads from appearing alongside accidents, disasters, or controversial political commentary.']
    ],
    finalTitle: 'কনটেন্টের প্রাসঙ্গিকতা দিয়েই অডিয়েন্সের মনোযোগ আকর্ষণ করুন।',
    finalCopy: 'বাংলা ও ইংরেজি উভয় কনটেন্ট প্ল্যাটফর্মে আধুনিক এআই কনটেক্সচুয়াল টার্গেটিং চালু করুন।'
  },
  'rich-media-html5-advertising-bangladesh': {
    eyebrow: 'RICH MEDIA + HTML5 BANGLADESH',
    title: 'রিচ মিডিয়া ও HTML5 বিজ্ঞাপন বাংলাদেশ: High-Impact Display',
    subtitle: 'Engage smartphone and desktop audiences with interactive banner ads, side banners, scroll-reactive canvases, and responsive HTML5 creatives engineered for high brand recall.',
    primary: 'Build Rich Media Ad',
    secondary: 'Explore Formats',
    secondaryHref: '/rich-media/',
    theme: 'violet',
    visual: 'creative',
    bengaliKeywords: [
      'রিচ মিডিয়া বিজ্ঞাপন বাংলাদেশ',
      'HTML5 বিজ্ঞাপন বাংলাদেশ',
      'ইন্টারেক্টিভ ব্যানার অ্যাড',
      'হাই-ইমপ্যাক্ট ডিসপ্লে বিজ্ঞাপন'
    ],
    pillars: [
      ['Mobile-First Rich Media', 'Smooth touch-friendly expandable units, 360° product lookbooks, and floating interactive bars.'],
      ['Zero Site Latency', 'Polite loading protocols under 150 KB initial payload ensure lightning-fast page loading.'],
      ['Interactive Storytelling', 'Multi-frame messaging inviting user taps, swipes, and in-unit video exploration.'],
      ['Programmatic Ready', 'Fully compatible with programmatic display ad exchanges across Bangladesh.']
    ],
    steps: [
      ['Format Selection', 'Choose between Side Banner, Magic Scroller, Accordion Folding, Floating Footer, or Standard HTML5.'],
      ['Creative Design', 'Design responsive graphics, vector typography, animations, and call-to-action buttons.'],
      ['Automated QA', 'Validate polite file weights, ClickTag macros, and multi-device preview rendering.'],
      ['Campaign Launch', 'Deliver interactive ads across Bangladesh publisher inventory with deep dwell time reporting.']
    ],
    qa: [
      ['রিচ মিডিয়া বিজ্ঞাপন সাধারণ ব্যানারের চেয়ে কেন বেশি কার্যকর?', 'সাধারণ স্ট্যাটিক ব্যানারে ক্লিক-থ্রু রেট অনেক কম থাকে। রিচ মিডিয়া বিজ্ঞাপনে মোশন, ইন্টারেকশন ও এক্সপান্ডেবল ফিচার থাকার কারণে এটি পাঠকের মনোযোগ দ্রুত আকর্ষণ করে এবং ব্র্যান্ড রিকল ৩ থেকে ৫ গুণ বাড়িয়ে দেয়।'],
      ['Can HTML5 ads run smoothly on low-speed mobile connections in Bangladesh?', 'Yes. All creatives are compressed and optimized for mobile 4G and broadband connections, loading asynchronously without stalling host websites.'],
      ['What metrics are tracked for rich media campaigns?', 'In addition to impressions and clicks, we measure expansion rate, average interaction dwell time, and video completion rates.']
    ],
    finalTitle: 'আপনার ব্র্যান্ডের জন্য তৈরি করুন আকর্ষণীয় রিচ মিডিয়া অভিজ্ঞতা।',
    finalCopy: 'সাধারণ ব্যানার ছেড়ে আধুনিক ইন্টারেক্টিভ ও রেসপন্সিভ বিজ্ঞাপনে রূপান্তর করুন।'
  },
  'publisher-monetization-bangladesh': {
    eyebrow: 'PUBLISHER MONETIZATION BANGLADESH',
    title: 'ওয়েবসাইট মনিটাইজেশন বাংলাদেশ: Top Publisher Ad Network',
    subtitle: 'Monetize your Bangladeshi website or mobile app with premium programmatic demand. Maximize eCPM yield with high fill rates, clean ad tags, and reliable local bank and mobile financial payouts.',
    primary: 'Monetize Website',
    secondary: 'Publisher Platform',
    secondaryHref: '/publisher/',
    theme: 'green',
    visual: 'publisher',
    bengaliKeywords: [
      'ওয়েবসাইট মনিটাইজেশন বাংলাদেশ',
      'বাংলাদেশি publisher ad network',
      'বাংলা ব্লগে বিজ্ঞাপন বসানো',
      'ওয়েবসাইট থেকে আয় ও পেমেন্ট'
    ],
    pillars: [
      ['Single Tag Integration', 'Paste one clean, lightweight JavaScript tag to unlock access to competing global and local advertisers.'],
      ['High Local Fill Rates', 'Keep ad inventory filled with verified brand campaigns, e-commerce promotions, and programmatic demand.'],
      ['Brand-Safe Advertisers', 'Strict anti-malware and content verification prevents deceptive or inappropriate ads on your site.'],
      ['Reliable Local Payouts', 'On-time monthly publisher earnings transferred directly to Bangladeshi bank accounts.']
    ],
    steps: [
      ['Add Website', 'Register your digital publication or mobile property in the Boost RAVA publisher console.'],
      ['Configure Placements', 'Create standard 728×90 leaderboards, 300×250 rectangles, or mobile 320×50 ad slots.'],
      ['Embed Ad Tag', 'Insert our asynchronous JS tag into your website template header or widget area.'],
      ['Earn Monthly Yield', 'Track live impressions, fill rates, and eCPM in your dashboard and receive scheduled payouts.']
    ],
    qa: [
      ['বাংলাদেশি ওয়েবসাইট কীভাবে মনিটাইজ করা যায়?', 'Boost RAVA-তে পাবলিশার হিসেবে অ্যাকাউন্ট খুলে আপনার ওয়েবসাইট ভেরিফাই করুন। এরপর সাইটে অ্যাড ট্যাগ বসালেই আন্তর্জাতিক ও দেশি ব্র্যান্ডগুলোর বিজ্ঞাপন আপনার সাইটে দেখানো শুরু হবে এবং ভেরিফায়েড ইমপ্রেশনের বিপরীতে আয় শুরু হবে।'],
      ['পাবলিশারদের পেমেন্ট কীভাবে প্রদান করা হয়?', 'বাংলাদেশি পাবলিশারদের জন্য নির্ধারিত মাসিক শিডিউলে সরাসরি লোকাল ব্যাংক একাউন্টে পেমেন্ট ট্রান্সফার করা হয়।'],
      ['অ্যাড বসালে কি ওয়েবসাইটের স্পিড কমে যাবে?', 'না। Boost RAVA-এর অ্যাড ট্যাগ সম্পূর্ণ অ্যাসিনক্রোনাস (Asynchronous) ও অপ্টিমাইজড, যা আপনার মূল ওয়েবসাইট লোড হওয়ার পর অ্যাড ফেচ করে, ফলে পেজ স্পিড ও গুগলের কোর ওয়েব ভাইটালস শতভাগ সুরক্ষিত থাকে।']
    ],
    finalTitle: 'আপনার ওয়েবসাইটের ট্রাফিক থেকে নির্ভরযোগ্য আয় নিশ্চিত করুন।',
    finalCopy: 'সহজ ইন্টিগ্রেশন এবং স্বচ্ছ রিপোর্টিং নিয়ে Boost RAVA পাবলিশার নেটওয়ার্কে যুক্ত হোন।'
  },
  'ctv-dooh-advertising-bangladesh': {
    eyebrow: 'SCREEN ADVERTISING BANGLADESH',
    title: 'স্ক্রিন বিজ্ঞাপন বাংলাদেশ: DOOH বিলবোর্ড ও CTV নেটওয়ার্ক',
    subtitle: 'Dominate high-traffic urban corridors across Dhaka, Chattogram, and regional expressways with digital billboard advertising (DOOH), plus partner-powered Connected TV opportunities.',
    primary: 'Book Digital Billboard',
    secondary: 'Explore DOOH',
    secondaryHref: '/dooh/',
    theme: 'screen',
    visual: 'screen',
    bengaliKeywords: [
      'বাংলাদেশে ডিজিটাল বিলবোর্ড বিজ্ঞাপন',
      'ঢাকা ডিজিটাল স্ক্রিন বিজ্ঞাপন',
      'DOOH advertising Bangladesh',
      'আউটডোর এলইডি স্ক্রিন বুকিং'
    ],
    pillars: [
      ['Prime Urban Corridors', 'Premium roadside LED billboards located across Dhaka, Chattogram, and major expressway junctions.'],
      ['High-Footfall Malls', 'Digital signage panels inside leading shopping complexes and commercial business hubs.'],
      ['Flexible Time Slots', 'Book hourly, weekly, or monthly rotations with peak commute dayparting.'],
      ['Verified Playback', 'Proof-of-play reporting and traffic estimation models ensuring verified visibility.']
    ],
    steps: [
      ['Select Screen Venue', 'Choose roadside digital billboards, mall displays, or transit network screens in Bangladesh.'],
      ['Choose Flight Model', 'Schedule hourly peak bursts, 7-day product launch flights, or monthly branding takeovers.'],
      ['Upload Creative', 'Provide high-resolution digital visual or video creative matching screen technical specs.'],
      ['Broadcast & Verify', 'Ad broadcasts across selected LED screens with automated playback tracking and logs.']
    ],
    qa: [
      ['বাংলাদেশে ডিজিটাল বিলবোর্ড বিজ্ঞাপন কীভাবে বুক করা যায়?', 'Boost RAVA-এর মাধ্যমে ঢাকা ও অন্যান্য গুরুত্বপূর্ণ শহরের প্রধান প্রধান মোড় ও শপিং সেন্টারের এলইডি বিলবোর্ড স্ক্রিনগুলো নির্বাচন করে পছন্দের টাইম স্লটে সহজে বুকিং করা যায়।'],
      ['ডিজিটাল বিলবোর্ডের জন্য কী ধরনের কনটেন্ট প্রয়োজন?', 'স্ক্রিনের রেজোলিউশন ও অ্যাসপেক্ট রেশিও অনুযায়ী হাই-ডেফিনিশন স্ট্যাটিক ব্যানার বা ১০–১৫ সেকেন্ডের মোশন ভিডিও ফাইল প্রয়োজন হয়।'],
      ['স্ক্রিন মালিকরা কি তাদের এলইডি স্ক্রিন Boost RAVA-তে যুক্ত করতে পারেন?', 'হ্যাঁ। কমার্শিয়াল এলইডি স্ক্রিন বা ডিজিটাল সাইনেজ নেটওয়ার্কের মালিকরা তাদের স্ক্রিন Boost RAVA প্ল্যাটফর্মে তালিকাভুক্ত করে বিজ্ঞাপনদাতাদের জন্য উন্মুক্ত করতে পারেন।']
    ],
    finalTitle: 'বাস্তব পৃথিবীর বিশাল স্ক্রিনে আপনার ব্র্যান্ডকে তুলে ধরুন।',
    finalCopy: 'ডিজিটাল বিলবোর্ড ও স্ক্রিন বিজ্ঞাপনের মাধ্যমে সর্বোচ্চ সংখ্যক দর্শকের কাছে পৌঁছান।'
  }
};

export function BangladeshLandingPage({ route }: { route: Route }) {
  const c = configs[route];

  return (
    <div className={`br-bd-root bg-white text-slate-900 font-sans antialiased overflow-hidden theme-${c.theme}`}>
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-br from-[#071329] via-[#0d224d] to-[#250d4d] text-white">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#920dff_1px,transparent_1px)] [background-size:28px_28px]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#23d8e1]">
                <span className="w-2 h-2 rounded-full bg-[#23d8e1] animate-pulse" />
                {c.eyebrow}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.12] text-white">
                {c.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                {c.subtitle}
              </p>

              {/* Natural Bengali Search Keywords Pills */}
              <div className="flex flex-wrap gap-2 pt-1">
                {c.bengaliKeywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/15 text-slate-200 backdrop-blur-sm"
                  >
                    #{kw}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-3">
                <a
                  href={registerUrl}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg shadow-[#920dff]/30 hover:opacity-95 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  {c.primary} <span className="ml-2">→</span>
                </a>
                <a
                  href={c.secondaryHref}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200"
                >
                  {c.secondary}
                </a>
              </div>
            </div>

            {/* Right: Bangladesh Ecosystem Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 rounded-3xl p-6 border border-white/15 shadow-2xl backdrop-blur-xl relative space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400">
                  <span className="font-mono text-slate-300">bangladesh.market.status</span>
                  <span className="text-[#23d8e1] font-mono text-[11px] font-bold">130M+ CONNECTED</span>
                </div>

                <div className="bg-white/5 p-4 rounded-2xl border border-white/10 space-y-2">
                  <div className="text-xs text-[#23d8e1] font-mono uppercase font-bold">LOCAL MARKET ADVANTAGE</div>
                  <h4 className="text-base font-bold text-white leading-snug">
                    Verified Digital Advertising Infrastructure in Bangladesh
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Connecting top local brands, advertising agencies, and verified publishers across Dhaka, Chattogram, and nationwide internet audiences.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] text-slate-400 block font-mono">LANGUAGE SUPPORT</span>
                    <strong className="text-base font-extrabold text-white mt-0.5 block">বাংলা + English</strong>
                  </div>
                  <div className="bg-white/5 p-3 rounded-xl border border-white/5">
                    <span className="text-[10px] text-slate-400 block font-mono">PAYMENT CHANNELS</span>
                    <strong className="text-base font-extrabold text-[#23d8e1] mt-0.5 block">Bank / Direct</strong>
                  </div>
                </div>

                <div className="pt-2 flex justify-between items-center text-xs text-slate-400 font-mono">
                  <span>Coverage: All 8 Divisions</span>
                  <span className="text-emerald-400 font-bold">Active Inventory</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. PILLARS / PRINCIPLES */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">CORE CAPABILITIES</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Designed for the Bangladesh Digital Media Landscape
            </h2>
            <p className="text-slate-600 text-base">
              Engineered with deep understanding of local consumer habits, device penetration, and publisher ecosystems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.pillars.map(([h, p], idx) => (
              <div
                key={h}
                className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-[#920dff]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#920dff] bg-purple-100/70 px-2.5 py-0.5 rounded inline-block mb-3">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{h}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. STEP-BY-STEP WORKFLOW */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">HOW IT WORKS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Clear &amp; Controlled Execution Blueprint
            </h2>
            <p className="text-slate-600 text-base">
              A structured operational pathway from initial campaign brief to auditable measurement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {c.steps.map(([h, p], idx) => (
              <div
                key={h}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 hover:shadow-lg hover:border-[#920dff]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#ff6900] bg-orange-100/70 px-2.5 py-0.5 rounded inline-block mb-3">
                    Step 0{idx + 1}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{h}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. AEO / BILINGUAL SEARCH FAQ */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">BILINGUAL KNOWLEDGE BASE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              সচরাচর জিজ্ঞাসিত প্রশ্নাবলী (FAQ)
            </h2>
            <p className="text-slate-600 text-base">
              Clear answers to common questions asked by advertisers, digital agencies, and publishers in Bangladesh.
            </p>
          </div>

          <div className="space-y-4">
            {c.qa.map(([q, a], idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl border border-slate-200 p-5 transition-all duration-200 open:shadow-md open:border-[#920dff]/40"
              >
                <summary className="font-bold text-slate-900 text-base cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{q}</span>
                  <span className="w-6 h-6 rounded-full bg-slate-100 group-open:bg-[#920dff] group-open:text-white flex items-center justify-center text-xs transition-colors shrink-0">
                    +
                  </span>
                </summary>
                <p className="text-sm text-slate-600 leading-relaxed mt-4 pt-3 border-t border-slate-100">
                  {a}
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
                {c.finalTitle}
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                {c.finalCopy}
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href={registerUrl}
                className="px-7 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg hover:opacity-95 hover:scale-[1.02] transition-all"
              >
                {c.primary}
              </a>
              <a
                href="/contact/"
                className="px-7 py-3 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                Talk to Boost RAVA →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
