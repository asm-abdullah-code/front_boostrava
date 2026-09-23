'use client';

import React, { useState, useMemo } from 'react';

const registerUrl = 'https://panel.boostrava.com/#/register';

type CapabilityStatus = 'live' | 'verify' | 'roadmap';

interface Capability {
  title: string;
  desc: string;
  status: CapabilityStatus;
  statusLabel: string;
}

const aiCapabilities: Capability[] = [
  {
    title: 'Contextual Semantic Analysis',
    desc: 'Extracts article topic, content sentiment, and category taxonomy in real time to match ads without third-party cookies.',
    status: 'live',
    statusLabel: 'LIVE CORE'
  },
  {
    title: 'Rules-Based Budget Pacing',
    desc: 'Evenly distributes daily and lifetime campaign spend to avoid premature exhaustion during non-peak hours.',
    status: 'live',
    statusLabel: 'LIVE CORE'
  },
  {
    title: 'Traffic Anomaly & Fraud Filtering',
    desc: 'Surfaces suspicious click spikes, bot signatures, and invalid traffic patterns for advertiser review.',
    status: 'live',
    statusLabel: 'LIVE CORE'
  },
  {
    title: 'Predictive Bid Optimization',
    desc: 'Algorithmic bid valuation calculating the optimal clearing price for each impression based on historical win rates.',
    status: 'roadmap',
    statusLabel: 'ROADMAP / IN VERIFICATION'
  },
  {
    title: 'Dynamic Floor Price Yielding',
    desc: 'Publisher-side AI model adjusting floor prices dynamically to maximize revenue without suppressing fill rate.',
    status: 'roadmap',
    statusLabel: 'ROADMAP / IN VERIFICATION'
  },
  {
    title: 'Automated Creative A/B Generation',
    desc: 'Dynamic creative optimization (DCO) tailoring copy and layout variants based on audience engagement signals.',
    status: 'roadmap',
    statusLabel: 'ROADMAP / IN VERIFICATION'
  }
];

const intelligenceLoop = [
  { step: '01', name: 'Signal Ingestion', detail: 'Processes real-time page context, device attributes, geo-location, and time parameters.' },
  { step: '02', name: 'Context Extraction', detail: 'Determines page sentiment, editorial category, and brand safety compliance.' },
  { step: '03', name: 'Decision Engine', detail: 'Scores campaign eligibility against targeting criteria and budget pacing limits.' },
  { step: '04', name: 'Auction Execution', detail: 'Submits competitive bids to the RTB exchange in under 100 milliseconds.' },
  { step: '05', name: 'Outcome Feedback', detail: 'Logs billable impressions, clicks, viewability, and postbacks into reporting telemetry.' }
];

const faqList = [
  {
    q: 'What is AI programmatic advertising?',
    a: 'AI programmatic advertising integrates machine-assisted decision support, contextual algorithms, and automated bidding into programmatic media buying workflows, helping advertisers optimize campaign delivery and maximize media efficiency.'
  },
  {
    q: 'How does Boost RAVA use AI in its advertising platform?',
    a: 'Boost RAVA positions AI as a transparent intelligence and decision-support layer. We clearly differentiate between verified live capabilities (such as contextual classification, pacing rules, and anomaly monitoring) and roadmap capabilities (such as predictive deep-learning bidding and dynamic floor prices).'
  },
  {
    q: 'What is AI ad optimization?',
    a: 'AI ad optimization uses machine models to analyze campaign performance data and recommend improvements in budget allocation, dayparting, creative formats, and audience filters to lower effective CPA and boost engagement.'
  },
  {
    q: 'Does Boost RAVA guarantee specific AI performance or ROAS?',
    a: 'No. Boost RAVA does not make deceptive or unsupported marketing claims. Real-world campaign performance, ROAS, click-through rates, and conversion volumes always depend on market supply, advertiser creative quality, pricing, and campaign targeting.'
  },
  {
    q: 'How does AI contextual advertising work without cookies?',
    a: 'Rather than tracking individual users across the web with third-party cookies, AI contextual targeting evaluates the semantic meaning, editorial topic, and keywords of the content where the ad appears, preserving user privacy while delivering high relevance.'
  },
  {
    q: 'Can advertisers in Bangladesh benefit from AI programmatic advertising?',
    a: 'Yes. Brands and agencies in Bangladesh can use AI contextual targeting and automated pacing to reach local audiences across top Bengali news and entertainment publishers with high relevance and zero cookie dependency.'
  }
];

export function AIProgrammaticLandingPage() {
  const [activeLoopStep, setActiveLoopStep] = useState(2);
  const [budget, setBudget] = useState(100000);
  const [cpm, setCpm] = useState(75);
  const [ctr, setCtr] = useState(1.2);
  const [cvr, setCvr] = useState(2.0);

  const calc = useMemo(() => {
    const impressions = cpm > 0 ? (budget / cpm) * 1000 : 0;
    const clicks = impressions * (ctr / 100);
    const conversions = clicks * (cvr / 100);
    const cpc = clicks > 0 ? budget / clicks : 0;
    const cpa = conversions > 0 ? budget / conversions : 0;
    return {
      impressions: Math.round(impressions).toLocaleString(),
      clicks: Math.round(clicks).toLocaleString(),
      conversions: Math.round(conversions).toLocaleString(),
      cpc: cpc.toFixed(2),
      cpa: cpa.toFixed(2)
    };
  }, [budget, cpm, ctr, cvr]);

  return (
    <div className="br-ai-root bg-white text-slate-900 font-sans antialiased overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-br from-[#071329] via-[#101b45] to-[#2b0c54] text-white">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#920dff_1px,transparent_1px)] [background-size:28px_28px]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#23d8e1]">
                <span className="w-2 h-2 rounded-full bg-[#23d8e1] animate-pulse" />
                INTELLIGENT DECISIONING &amp; CONTEXTUAL TARGETING
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                AI Programmatic Advertising <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23d8e1] via-[#920dff] to-[#ff6900]">Without Black-Box Hype</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Supercharge campaign planning, contextual intelligence, and automated media delivery with machine-assisted precision. Transparent capabilities, honest performance models, and zero cookie dependence.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={registerUrl}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg shadow-[#920dff]/30 hover:opacity-95 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  Start Advertising <span className="ml-2">→</span>
                </a>
                <a
                  href="#capabilities"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200"
                >
                  Live vs. Roadmap Matrix
                </a>
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-slate-300">
                <div>
                  <strong className="block text-white text-base font-bold">Transparent</strong>
                  <span>Grounded Capabilities</span>
                </div>
                <div>
                  <strong className="block text-white text-base font-bold">Privacy-First</strong>
                  <span>Contextual Matching</span>
                </div>
                <div>
                  <strong className="block text-white text-base font-bold">Zero Hype</strong>
                  <span>Verified AdTech Logic</span>
                </div>
              </div>
            </div>

            {/* Right: AI Intelligence Console Visual */}
            <div className="lg:col-span-5">
              <div className="bg-slate-900/90 rounded-3xl p-6 border border-white/15 shadow-2xl backdrop-blur-xl relative">
                <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
                    <span className="ml-2 font-mono text-slate-300">ai.decision.console</span>
                  </div>
                  <span className="text-[#23d8e1] font-mono text-[11px]">TELEMETRY</span>
                </div>

                <div className="mt-5 space-y-4">
                  {/* Live Simulation Card */}
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-slate-400 font-mono">SIGNAL EVALUATION</span>
                      <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-mono text-[10px] font-bold">
                        ACTIVE CONTEXT
                      </span>
                    </div>
                    <div className="text-sm font-bold text-white">
                      Page Topic: &quot;Smart Gadgets &amp; Laptops&quot;
                    </div>
                    <div className="flex flex-wrap gap-1.5 text-[10px] text-slate-300">
                      <span className="px-2 py-0.5 rounded bg-white/10">Technology</span>
                      <span className="px-2 py-0.5 rounded bg-white/10">Electronics</span>
                      <span className="px-2 py-0.5 rounded bg-white/10">High Commercial Intent</span>
                    </div>
                  </div>

                  {/* Recommendation Stream */}
                  <div className="bg-white/5 rounded-2xl p-4 border border-white/10 space-y-2">
                    <div className="text-xs text-slate-400 font-mono">AUTOMATED PACING ADVICE</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Peak reader engagement identified between 18:00–22:00 BST. Shift 15% budget toward evening high-impact 300×600 slots.
                    </p>
                    <div className="flex justify-between items-center pt-2 text-[11px] text-slate-400">
                      <span>Status: Recommendation Only</span>
                      <span className="text-[#23d8e1] font-bold">Confidence: High</span>
                    </div>
                  </div>

                  {/* Metric Bars */}
                  <div className="pt-2 flex justify-between items-center text-xs text-slate-400 font-mono">
                    <span>Algorithm: Contextual Graph v2</span>
                    <span className="text-emerald-400">Verified Live</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. LIVE VS. ROADMAP CAPABILITY MATRIX */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80" id="capabilities">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">TRANSPARENT ADTECH</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Live Capabilities vs. Product Roadmap
            </h2>
            <p className="text-slate-600 text-base">
              We believe in total honesty. Features marked LIVE are active in production today; features in verification or roadmap are clearly demarcated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiCapabilities.map((cap) => {
              const isLive = cap.status === 'live';
              return (
                <div
                  key={cap.title}
                  className={`rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                    isLive
                      ? 'bg-white border-slate-200 shadow-sm hover:shadow-md'
                      : 'bg-slate-50/80 border-dashed border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <span className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full ${
                        isLive ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-purple-50 text-[#920dff] border border-purple-200'
                      }`}>
                        {cap.statusLabel}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{cap.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. THE 5-STAGE AI DECISION LOOP */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">INTELLIGENCE LOOP</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              The 5-Stage Machine Decision Loop
            </h2>
            <p className="text-slate-600 text-base">
              How signals flow through the Boost RAVA intelligence layer from incoming request to campaign feedback.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {intelligenceLoop.map((item, idx) => (
              <div
                key={item.step}
                onClick={() => setActiveLoopStep(idx)}
                className={`cursor-pointer rounded-2xl p-5 border transition-all duration-200 ${
                  activeLoopStep === idx
                    ? 'bg-gradient-to-b from-purple-50 to-white border-[#920dff] shadow-md ring-2 ring-[#920dff]/20'
                    : 'bg-slate-50 border-slate-200 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-bold text-[#920dff] bg-purple-100/70 px-2 py-0.5 rounded">
                    {item.step}
                  </span>
                  {activeLoopStep === idx && <span className="text-[10px] text-emerald-600 font-bold">Active</span>}
                </div>
                <h3 className="text-sm font-bold text-slate-900 mb-1.5">{item.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. TRANSPARENT CAMPAIGN PLANNING SIMULATOR */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#23d8e1]">PLANNING MATHEMATICS</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Transparent Campaign Outcome Estimator
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Test campaign assumptions with transparent arithmetic. We do not use hidden algorithms to invent fake performance guarantees—all outputs are strictly calculated from user-provided parameters.
              </p>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-2">
                <strong className="text-white block font-bold">Formulas Used:</strong>
                <div>• Estimated Impressions = (Budget ÷ CPM) × 1,000</div>
                <div>• Estimated Clicks = Impressions × (CTR ÷ 100)</div>
                <div>• Estimated Conversions = Clicks × (Conversion Rate ÷ 100)</div>
              </div>
            </div>

            {/* Interactive Calculator Controls */}
            <div className="lg:col-span-7">
              <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-2">
                      Total Campaign Budget (৳ / USD): {budget.toLocaleString()}
                    </label>
                    <input
                      type="range"
                      min="10000"
                      max="1000000"
                      step="10000"
                      value={budget}
                      onChange={(e) => setBudget(+e.target.value)}
                      className="w-full accent-[#920dff]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-2">
                      Average Target CPM: ৳{cpm}
                    </label>
                    <input
                      type="range"
                      min="20"
                      max="300"
                      step="5"
                      value={cpm}
                      onChange={(e) => setCpm(+e.target.value)}
                      className="w-full accent-[#920dff]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-2">
                      Assumed CTR (%): {ctr}%
                    </label>
                    <input
                      type="range"
                      min="0.2"
                      max="5.0"
                      step="0.1"
                      value={ctr}
                      onChange={(e) => setCtr(+e.target.value)}
                      className="w-full accent-[#23d8e1]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-2">
                      Assumed Conversion Rate (%): {cvr}%
                    </label>
                    <input
                      type="range"
                      min="0.5"
                      max="10.0"
                      step="0.5"
                      value={cvr}
                      onChange={(e) => setCvr(+e.target.value)}
                      className="w-full accent-[#ff6900]"
                    />
                  </div>
                </div>

                {/* Output Grid */}
                <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <span className="text-[11px] text-slate-400 block">Est. Impressions</span>
                    <strong className="text-lg font-extrabold text-white">{calc.impressions}</strong>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <span className="text-[11px] text-slate-400 block">Est. Clicks</span>
                    <strong className="text-lg font-extrabold text-[#23d8e1]">{calc.clicks}</strong>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <span className="text-[11px] text-slate-400 block">Est. Conversions</span>
                    <strong className="text-lg font-extrabold text-[#ff6900]">{calc.conversions}</strong>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 border border-white/5">
                    <span className="text-[11px] text-slate-400 block">Effective CPA</span>
                    <strong className="text-lg font-extrabold text-white">৳{calc.cpa}</strong>
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
              Frequently Asked Questions About AI Advertising
            </h2>
            <p className="text-slate-600 text-base">
              Clear answers regarding artificial intelligence, programmatic bidding, and machine optimization.
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
                Experience Transparent Programmatic Intelligence
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Activate data-driven campaigns with contextual precision and clear capability status.
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
                href="/contextual-advertising/"
                className="px-7 py-3 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                Explore Contextual Advertising →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
