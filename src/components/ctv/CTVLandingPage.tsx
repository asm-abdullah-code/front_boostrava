'use client';

import React, { useState, useMemo } from 'react';

const registerUrl = 'https://panel.boostrava.com/#/register';

const ctvMarkets = [
  { region: 'Europe', countries: 'UK · Germany · France · Italy · Spain · Netherlands', desc: 'Premium OTT and connected streaming apps across major European economies.' },
  { region: 'Middle East (GCC)', countries: 'UAE · Saudi Arabia · Qatar · Kuwait · Bahrain', desc: 'High-income streaming audiences across smart TV networks in the Gulf region.' },
  { region: 'Global & Emerging', countries: 'Southeast Asia · North America · International', desc: 'Partner-powered CTV supply available based on campaign targeting requirements.' }
];

const ctvFormats = [
  { name: 'In-Stream Pre-Roll Video', spec: '15s – 30s non-skippable HD video playing before premium TV content begins.' },
  { name: 'Mid-Roll Interactive Video', spec: 'Natural commercial break placement with high completion rates and brand recall.' },
  { name: 'Interactive Living Room Canvas', spec: 'TV screen unit with QR code scannable via viewer smartphone for instant mobile action.' },
  { name: 'Pause & Companion Screens', spec: 'High-visibility visual banner displaying when viewers pause their on-demand stream.' }
];

const faqList = [
  {
    q: 'What is Connected TV (CTV) advertising?',
    a: 'Connected TV (CTV) advertising delivers video advertisements to internet-connected televisions—including smart TVs, streaming media devices (Roku, Apple TV, Amazon Fire TV), and connected gaming consoles—during on-demand and streaming TV content.'
  },
  {
    q: 'How does CTV differ from traditional linear television?',
    a: 'Traditional TV is bought via fixed broadcasts with limited digital measurement. CTV combines the high impact of the living room big screen with digital campaign controls, programmatic frequency capping, and verified completion tracking.'
  },
  {
    q: 'Can advertisers in Bangladesh launch CTV campaigns abroad?',
    a: 'Yes. Brands and agencies based in Bangladesh can use Boost RAVA to plan and activate partner-powered CTV campaigns reaching international audiences in Europe, the Middle East, and beyond.'
  },
  {
    q: 'Does Boost RAVA own the CTV inventory?',
    a: 'No. Boost RAVA connects advertisers with verified third-party CTV, media, and programmatic supply partners rather than claiming proprietary screen ownership, ensuring honest access to premium global inventory.'
  },
  {
    q: 'What video specifications are required for CTV ads?',
    a: 'CTV video ads typically require 1920×1080 (Full HD) or 4K resolution, 16:9 aspect ratio, MP4/MOV format, 15 to 30 seconds duration, and high-quality stereo sound compliant with VAST protocols.'
  }
];

export function CTVLandingPage() {
  const [activeMarket, setActiveMarket] = useState(0);
  const [budget, setBudget] = useState(15000); // USD
  const [cpm, setCpm] = useState(20);
  const [compRate, setCompRate] = useState(85);

  const planner = useMemo(() => {
    const imps = cpm > 0 ? (budget / cpm) * 1000 : 0;
    const completedViews = imps * (compRate / 100);
    return {
      impressions: Math.round(imps).toLocaleString(),
      completedViews: Math.round(completedViews).toLocaleString()
    };
  }, [budget, cpm, compRate]);

  return (
    <div className="br-ctv-root bg-white text-slate-900 font-sans antialiased overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 bg-gradient-to-br from-[#061022] via-[#0b1b42] to-[#1c0c3b] text-white">
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#920dff_1px,transparent_1px)] [background-size:28px_28px]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-semibold uppercase tracking-wider text-[#23d8e1]">
                <span className="w-2 h-2 rounded-full bg-[#23d8e1] animate-pulse" />
                CONNECTED TV &amp; STREAMING VIDEO ADVERTISING
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.08] text-white">
                Bring Your Brand to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#23d8e1] via-[#920dff] to-[#ff6900]">Biggest Screen in the Room</span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl">
                Deliver unskippable, cinema-quality video storytelling across Connected TV and streaming environments. Reach highly engaged living room audiences in Europe, the Middle East, and global markets via partner-powered CTV supply.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={registerUrl}
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg shadow-[#920dff]/30 hover:opacity-95 hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
                >
                  Start a CTV Campaign <span className="ml-2">→</span>
                </a>
                <a
                  href="#how-it-works"
                  className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/15 hover:border-white/30 backdrop-blur-md transition-all duration-200"
                >
                  Explore TV Formats
                </a>
              </div>

              <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 text-xs text-slate-300">
                <div>
                  <strong className="block text-white text-base font-bold">Living Room</strong>
                  <span>Lean-Back Immersion</span>
                </div>
                <div>
                  <strong className="block text-white text-base font-bold">85%+</strong>
                  <span>High Completion Rate</span>
                </div>
                <div>
                  <strong className="block text-white text-base font-bold">Verified Partners</strong>
                  <span>Europe &amp; Middle East</span>
                </div>
              </div>
            </div>

            {/* Right: Living-Room Smart TV Screen Visualization */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950 rounded-3xl p-6 border border-white/15 shadow-2xl relative">
                
                {/* TV Mockup Frame */}
                <div className="bg-slate-900 rounded-2xl p-4 border-4 border-slate-700 shadow-2xl relative overflow-hidden">
                  
                  {/* Streaming TV Screen */}
                  <div className="aspect-video bg-gradient-to-br from-[#0c1630] via-[#14234d] to-[#250d4d] rounded-lg relative overflow-hidden flex flex-col justify-between p-4">
                    <div className="flex justify-between items-center text-[10px] text-slate-300">
                      <span className="font-mono bg-black/50 px-2 py-0.5 rounded text-[#23d8e1]">STREAMING HD VIDEO</span>
                      <span className="bg-red-600/80 px-2 py-0.5 rounded text-white font-bold">LIVE AD</span>
                    </div>

                    <div className="space-y-1 my-auto text-center py-2">
                      <span className="text-[10px] font-mono tracking-wider text-[#ff6900] uppercase block">PREMIUM OTT CAMPAIGN</span>
                      <h4 className="text-base sm:text-lg font-extrabold text-white">Full-Screen Living Room Impact</h4>
                      <p className="text-[11px] text-slate-300 max-w-xs mx-auto">Non-skippable video with high audio viewability.</p>
                    </div>

                    {/* Progress Bar & Audio Indicators */}
                    <div className="space-y-1">
                      <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#23d8e1] to-[#920dff] w-3/4 rounded-full" />
                      </div>
                      <div className="flex justify-between items-center text-[9px] text-slate-400 font-mono">
                        <span>00:22 / 00:30</span>
                        <span>Sound: ON (Stereo)</span>
                      </div>
                    </div>
                  </div>

                  {/* TV Stand Legs */}
                  <div className="w-16 h-2 bg-slate-700 mx-auto mt-2 rounded-b" />
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center text-xs text-slate-400 font-mono">
                  <span>Environment: Connected TV</span>
                  <span className="text-emerald-400 font-bold">VAST 4.2 Verified</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. REGIONAL INVENTORY & PARTNER ACCESS */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80" id="markets">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">GLOBAL COVERAGE</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Partner-Powered Connected TV Supply
            </h2>
            <p className="text-slate-600 text-base">
              Activate international streaming campaigns across top regional markets through verified supply partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ctvMarkets.map((m, idx) => (
              <div
                key={m.region}
                onClick={() => setActiveMarket(idx)}
                className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  activeMarket === idx
                    ? 'bg-white border-[#920dff] shadow-lg ring-2 ring-[#920dff]/20'
                    : 'bg-white/80 border-slate-200 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-mono font-bold text-[#920dff] bg-purple-100/70 px-2.5 py-0.5 rounded">
                      0{idx + 1}
                    </span>
                    <span className="text-[10px] font-semibold text-emerald-600">Supply Verified</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{m.region}</h3>
                  <div className="text-xs font-bold text-[#ff6900] mb-3">{m.countries}</div>
                  <p className="text-sm text-slate-600 leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TV AD FORMATS */}
      <section className="py-20 bg-white" id="how-it-works">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#920dff]">AD FORMATS</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Connected TV Formats Built for Attention
            </h2>
            <p className="text-slate-600 text-base">
              From standard in-stream commercial breaks to interactive living-room QR experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ctvFormats.map((f) => (
              <div key={f.name} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:shadow-md transition-all">
                <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#920dff] font-bold flex items-center justify-center text-sm mb-3">
                  ❖
                </div>
                <h3 className="font-bold text-slate-900 text-base mb-2">{f.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{f.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. BUDGET & VIEW ESTIMATOR */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-[#23d8e1]">ESTIMATE CAMPAIGN</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                CTV Media Budget Estimator
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                Estimate expected television impressions and completed video views based on budget assumptions.
              </p>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 space-y-1">
                <strong className="text-white block font-bold">Planning Basis:</strong>
                <div>• Estimated Impressions = (Budget ÷ CPM) × 1,000</div>
                <div>• Completed Views = Impressions × Completion Rate %</div>
              </div>
            </div>

            {/* Interactive Calculator */}
            <div className="lg:col-span-7">
              <div className="bg-slate-950 rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl space-y-6">
                
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                      <span>CTV Budget (USD)</span>
                      <span className="text-[#23d8e1]">${budget.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="2000"
                      max="100000"
                      step="1000"
                      value={budget}
                      onChange={(e) => setBudget(+e.target.value)}
                      className="w-full accent-[#920dff]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                      <span>Target Video CPM ($)</span>
                      <span className="text-[#23d8e1]">${cpm}</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="50"
                      step="1"
                      value={cpm}
                      onChange={(e) => setCpm(+e.target.value)}
                      className="w-full accent-[#23d8e1]"
                    />
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold text-slate-300 mb-2">
                      <span>Expected Completion Rate (%)</span>
                      <span className="text-[#ff6900]">{compRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="60"
                      max="98"
                      step="1"
                      value={compRate}
                      onChange={(e) => setCompRate(+e.target.value)}
                      className="w-full accent-[#ff6900]"
                    />
                  </div>
                </div>

                <div className="pt-6 border-t border-white/10 grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                    <span className="text-xs text-slate-400 block font-mono">ESTIMATED IMPRESSIONS</span>
                    <strong className="text-xl font-extrabold text-white mt-1 block">{planner.impressions}</strong>
                  </div>
                  <div className="bg-gradient-to-br from-[#920dff]/30 to-[#6a32ff]/30 p-4 rounded-xl border border-[#920dff]/50">
                    <span className="text-xs text-[#23d8e1] block font-mono font-bold">COMPLETED VIDEO VIEWS</span>
                    <strong className="text-xl font-extrabold text-white mt-1 block">{planner.completedViews}</strong>
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
              Frequently Asked Questions About Connected TV
            </h2>
            <p className="text-slate-600 text-base">
              Clear answers regarding global streaming advertising, CTV supply, and measurement.
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
                Ready to Launch a Connected TV Campaign?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Connect with our programmatic media planning team to explore partner CTV inventory.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href={registerUrl}
                className="px-7 py-3 rounded-full font-bold text-sm bg-gradient-to-r from-[#920dff] to-[#6a32ff] text-white shadow-lg hover:opacity-95 hover:scale-[1.02] transition-all"
              >
                Start Campaign Setup
              </a>
              <a
                href="/dooh/"
                className="px-7 py-3 rounded-full font-bold text-sm bg-white/10 text-white border border-white/20 hover:bg-white/20 transition-all"
              >
                DOOH Advertising →
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
