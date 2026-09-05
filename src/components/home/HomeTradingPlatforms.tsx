'use client';

import React from 'react';

export function HomeTradingPlatforms() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 my-12 sm:my-16" aria-labelledby="trading-platforms-heading">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
        <span className="inline-block text-xs sm:text-sm font-bold tracking-wider text-purple-700 bg-purple-100/70 px-4 py-1.5 rounded-full uppercase mb-3">
          Programmatic Media Platform
        </span>
        <h2 id="trading-platforms-heading" className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
          Media Trading Platforms <br className="hidden sm:inline" />
          For Every Need
        </h2>
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Unified programmatic infrastructure connecting high-performing buyers and premium publishers across all screens and ad formats.
        </p>
      </div>

      {/* 2 Main Platform Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10">
        {/* SSP Card - Sellers */}
        <div className="group relative bg-gradient-to-br from-white via-purple-50/40 to-indigo-50/60 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl border border-purple-100 transition-all duration-300 flex flex-col justify-between overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-purple-200/40 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-extrabold tracking-wider uppercase text-purple-700 bg-purple-100 px-3.5 py-1 rounded-full">
                For Sellers
              </span>
              <div className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center font-bold text-lg shadow-sm">
                SSP
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-purple-900 mb-3 group-hover:text-purple-700 transition-colors">
              Supply Side Platform
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Monetize web, mobile and video inventory with programmatic demand, header bidding support and controls built for publisher yield.
            </p>
            <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Header Bidding & Prebid Integration</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>AI-Powered Dynamic Floor Pricing</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-purple-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Granular Brand Safety & Category Controls</span>
              </li>
            </ul>
          </div>
          <div className="relative z-10 pt-2">
            <a
              href="https://panel.boostrava.com/#/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base text-decoration-none"
            >
              Start Monetizing
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* DSP Card - Buyers */}
        <div className="group relative bg-gradient-to-br from-white via-orange-50/40 to-amber-50/60 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-2xl border border-orange-100 transition-all duration-300 flex flex-col justify-between overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-orange-200/40 rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-extrabold tracking-wider uppercase text-orange-700 bg-orange-100 px-3.5 py-1 rounded-full">
                For Buyers
              </span>
              <div className="w-10 h-10 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-bold text-lg shadow-sm">
                DSP
              </div>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-orange-950 mb-3 group-hover:text-orange-700 transition-colors">
              Demand Side Platform
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              Plan and activate campaigns with contextual targeting, interactive HTML5 rich media, video, CTV and DOOH across connected screens.
            </p>
            <ul className="space-y-2.5 mb-8 text-xs sm:text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>AI Contextual Semantic Intelligence</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Interactive Rich Media & 3D Creative Studio</span>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Omnichannel Cross-Screen Programmatic Reach</span>
              </li>
            </ul>
          </div>
          <div className="relative z-10 pt-2">
            <a
              href="https://panel.boostrava.com/#/register"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-semibold px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-sm sm:text-base text-decoration-none"
            >
              Launch Campaign
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 2 Format & Screen Ecosystem Panels */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* All Formats Card */}
        <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-center mb-6 tracking-tight">
              All Formats
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {/* HTML5 */}
              <div className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/15 rounded-2xl p-3 sm:p-4 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-white text-purple-600 flex items-center justify-center mb-2 shadow-md">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z" />
                  </svg>
                </div>
                <span className="font-bold text-sm sm:text-base">HTML5</span>
                <span className="text-[11px] text-purple-200 mt-0.5">Interactive</span>
              </div>

              {/* Video */}
              <div className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/15 rounded-2xl p-3 sm:p-4 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-white text-purple-600 flex items-center justify-center mb-2 shadow-md">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm0 394c0 3.3-2.7 6-6 6H54c-3.3 0-6-2.7-6-6V192h416v234z" />
                  </svg>
                </div>
                <span className="font-bold text-sm sm:text-base">Video</span>
                <span className="text-[11px] text-purple-200 mt-0.5">Instream / Outstream</span>
              </div>

              {/* Display */}
              <div className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/15 rounded-2xl p-3 sm:p-4 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-white text-purple-600 flex items-center justify-center mb-2 shadow-md">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M332.8 320h38.4c6.4 0 12.8-6.4 12.8-12.8V172.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v134.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V76.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v230.4c0 6.4 6.4 12.8 12.8 12.8zm-288 0h38.4c6.4 0 12.8-6.4 12.8-12.8v-70.4c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v70.4c0 6.4 6.4 12.8 12.8 12.8zm96 0h38.4c6.4 0 12.8-6.4 12.8-12.8V108.8c0-6.4-6.4-12.8-12.8-12.8h-38.4c-6.4 0-12.8 6.4-12.8 12.8v198.4c0 6.4 6.4 12.8 12.8 12.8zM496 384H64V80c0-8.84-7.16-16-16-16H16C7.16 64 0 71.16 0 80v336c0 17.67 14.33 32 32 32h464c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16z" />
                  </svg>
                </div>
                <span className="font-bold text-sm sm:text-base">Display</span>
                <span className="text-[11px] text-purple-200 mt-0.5">IAB Standard</span>
              </div>

              {/* Rich Media */}
              <div className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/15 rounded-2xl p-3 sm:p-4 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-white text-purple-600 flex items-center justify-center mb-2 shadow-md">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 640 512">
                    <path d="M608 0H160a32 32 0 0 0-32 32v96h160V64h192v320h128a32 32 0 0 0 32-32V32a32 32 0 0 0-32-32zM232 103a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm352 208a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9v-30a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm0-104a9 9 0 0 1-9 9h-30a9 9 0 0 1-9-9V73a9 9 0 0 1 9-9h30a9 9 0 0 1 9 9zm-168 57H32a32 32 0 0 0-32 32v288a32 32 0 0 0 32 32h384a32 32 0 0 0 32-32V192a32 32 0 0 0-32-32zM96 224a32 32 0 1 1-32 32 32 32 0 0 1 32-32zm288 224H64v-32l64-64 32 32 128-128 96 96z" />
                  </svg>
                </div>
                <span className="font-bold text-sm sm:text-base">Rich Media</span>
                <span className="text-[11px] text-purple-200 mt-0.5">High Impact 3D</span>
              </div>
            </div>
          </div>
        </div>

        {/* All Screens Card */}
        <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 rounded-3xl p-6 sm:p-8 text-white shadow-xl overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-center mb-6 tracking-tight">
              All Screens
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
              {/* Mobile */}
              <div className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/15 rounded-2xl p-3 sm:p-4 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-white text-orange-500 flex items-center justify-center mb-2 shadow-md">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 384 512">
                    <path d="M80 0C44.7 0 16 28.7 16 64l0 384c0 35.3 28.7 64 64 64l224 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L80 0zm80 432l64 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-64 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                  </svg>
                </div>
                <span className="font-bold text-sm sm:text-base">Mobile</span>
                <span className="text-[11px] text-orange-100 mt-0.5">iOS & Android</span>
              </div>

              {/* Desktop */}
              <div className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/15 rounded-2xl p-3 sm:p-4 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-white text-orange-500 flex items-center justify-center mb-2 shadow-md">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 576 512">
                    <path d="M64 0C28.7 0 0 28.7 0 64L0 352c0 35.3 28.7 64 64 64l176 0-10.7 32L160 448c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-69.3 0L336 416l176 0c35.3 0 64-28.7 64-64l0-288c0-35.3-28.7-64-64-64L64 0zM512 64l0 224L64 288 64 64l448 0z" />
                  </svg>
                </div>
                <span className="font-bold text-sm sm:text-base">Desktop</span>
                <span className="text-[11px] text-orange-100 mt-0.5">Web & Portals</span>
              </div>

              {/* CTV */}
              <div className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/15 rounded-2xl p-3 sm:p-4 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-white text-orange-500 flex items-center justify-center mb-2 shadow-md">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 432l96 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-96 0c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
                  </svg>
                </div>
                <span className="font-bold text-sm sm:text-base">CTV</span>
                <span className="text-[11px] text-orange-100 mt-0.5">Connected TV / OTT</span>
              </div>

              {/* DOOH */}
              <div className="bg-white/10 backdrop-blur-md hover:bg-white/20 border border-white/15 rounded-2xl p-3 sm:p-4 flex flex-col items-center text-center transition-all duration-200 hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-white text-orange-500 flex items-center justify-center mb-2 shadow-md">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 640 512">
                    <path d="M64 64l0 288 512 0 0-288L64 64zM0 64C0 28.7 28.7 0 64 0L576 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64L64 416c-35.3 0-64-28.7-64-64L0 64zM128 448l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-384 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z" />
                  </svg>
                </div>
                <span className="font-bold text-sm sm:text-base">DOOH</span>
                <span className="text-[11px] text-orange-100 mt-0.5">Digital Billboard</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
