'use client';

import React, { useState, useEffect } from 'react';

const heroSlides = [
  {
    title: 'AI-Powered Contextual Targeting',
    subtitle: 'Align ads with relevant content and campaign goals.',
  },
  {
    title: 'Interactive HTML5 Rich Media',
    subtitle: 'Create parallax, carousel, cube, video and gamified formats.',
  },
  {
    title: 'Cross-Screen Programmatic Delivery',
    subtitle: 'Activate multi-channel campaigns across web, mobile, CTV and DOOH.',
  },
];

export function HomepageHero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((v) => (v + 1) % heroSlides.length);
    }, 5000);
    return () => window.clearInterval(id);
  }, []);

  const slide = heroSlides[active];

  return (
    <section className="br-home-hero">
      <div className="br-home-network" aria-hidden="true">
        <svg viewBox="0 0 100 100" preserveAspectRatio="none">
          <g className="br-home-network-lines">
            <line x1="3" y1="18" x2="8" y2="9"></line>
            <line x1="8" y1="9" x2="13" y2="16"></line>
            <line x1="13" y1="16" x2="18" y2="32"></line>
            <line x1="13" y1="16" x2="24" y2="20"></line>
            <line x1="24" y1="20" x2="29" y2="7"></line>
            <line x1="24" y1="20" x2="34" y2="29"></line>
            <line x1="34" y1="29" x2="39" y2="14"></line>
            <line x1="39" y1="14" x2="44" y2="25"></line>
            <line x1="44" y1="25" x2="49" y2="8"></line>
            <line x1="44" y1="25" x2="54" y2="34"></line>
            <line x1="54" y1="34" x2="59" y2="18"></line>
            <line x1="59" y1="18" x2="64" y2="6"></line>
            <line x1="59" y1="18" x2="69" y2="24"></line>
            <line x1="69" y1="24" x2="74" y2="11"></line>
            <line x1="69" y1="24" x2="79" y2="30"></line>
            <line x1="79" y1="30" x2="84" y2="16"></line>
            <line x1="84" y1="16" x2="90" y2="9"></line>
            <line x1="90" y1="9" x2="96" y2="22"></line>
            <line x1="7" y1="63" x2="13" y2="51"></line>
            <line x1="13" y1="51" x2="18" y2="32"></line>
            <line x1="7" y1="63" x2="20" y2="72"></line>
            <line x1="20" y1="72" x2="27" y2="58"></line>
            <line x1="27" y1="58" x2="34" y2="29"></line>
            <line x1="27" y1="58" x2="34" y2="78"></line>
            <line x1="34" y1="78" x2="42" y2="55"></line>
            <line x1="42" y1="55" x2="54" y2="34"></line>
            <line x1="42" y1="55" x2="49" y2="69"></line>
            <line x1="49" y1="69" x2="57" y2="53"></line>
            <line x1="57" y1="53" x2="79" y2="30"></line>
            <line x1="57" y1="53" x2="64" y2="75"></line>
            <line x1="64" y1="75" x2="72" y2="59"></line>
            <line x1="72" y1="59" x2="80" y2="76"></line>
            <line x1="80" y1="76" x2="88" y2="55"></line>
            <line x1="88" y1="55" x2="96" y2="22"></line>
            <line x1="88" y1="55" x2="95" y2="70"></line>
            <line x1="11" y1="88" x2="20" y2="72"></line>
            <line x1="11" y1="88" x2="23" y2="91"></line>
            <line x1="23" y1="91" x2="34" y2="78"></line>
            <line x1="23" y1="91" x2="39" y2="89"></line>
            <line x1="39" y1="89" x2="42" y2="55"></line>
            <line x1="39" y1="89" x2="55" y2="92"></line>
            <line x1="55" y1="92" x2="64" y2="75"></line>
            <line x1="55" y1="92" x2="70" y2="88"></line>
            <line x1="70" y1="88" x2="80" y2="76"></line>
            <line x1="70" y1="88" x2="86" y2="90"></line>
            <line x1="86" y1="90" x2="95" y2="70"></line>
          </g>
          <g className="br-home-network-dots">
            <circle cx="3" cy="18" r="0.34"></circle>
            <circle cx="8" cy="9" r="0.23"></circle>
            <circle cx="13" cy="16" r="0.23"></circle>
            <circle cx="18" cy="32" r="0.23"></circle>
            <circle cx="24" cy="20" r="0.23"></circle>
            <circle cx="29" cy="7" r="0.34"></circle>
            <circle cx="34" cy="29" r="0.23"></circle>
            <circle cx="39" cy="14" r="0.23"></circle>
            <circle cx="44" cy="25" r="0.23"></circle>
            <circle cx="49" cy="8" r="0.23"></circle>
            <circle cx="54" cy="34" r="0.34"></circle>
            <circle cx="59" cy="18" r="0.23"></circle>
            <circle cx="64" cy="6" r="0.23"></circle>
            <circle cx="69" cy="24" r="0.23"></circle>
            <circle cx="74" cy="11" r="0.23"></circle>
            <circle cx="79" cy="30" r="0.34"></circle>
            <circle cx="84" cy="16" r="0.23"></circle>
            <circle cx="90" cy="9" r="0.23"></circle>
            <circle cx="96" cy="22" r="0.23"></circle>
            <circle cx="7" cy="63" r="0.23"></circle>
            <circle cx="13" cy="51" r="0.34"></circle>
            <circle cx="20" cy="72" r="0.23"></circle>
            <circle cx="27" cy="58" r="0.23"></circle>
            <circle cx="34" cy="78" r="0.23"></circle>
            <circle cx="42" cy="55" r="0.23"></circle>
            <circle cx="49" cy="69" r="0.34"></circle>
            <circle cx="57" cy="53" r="0.23"></circle>
            <circle cx="64" cy="75" r="0.23"></circle>
            <circle cx="72" cy="59" r="0.23"></circle>
            <circle cx="80" cy="76" r="0.23"></circle>
            <circle cx="88" cy="55" r="0.34"></circle>
            <circle cx="95" cy="70" r="0.23"></circle>
            <circle cx="11" cy="88" r="0.23"></circle>
            <circle cx="23" cy="91" r="0.23"></circle>
            <circle cx="39" cy="89" r="0.23"></circle>
            <circle cx="55" cy="92" r="0.34"></circle>
            <circle cx="70" cy="88" r="0.23"></circle>
            <circle cx="86" cy="90" r="0.23"></circle>
          </g>
        </svg>
      </div>
      <div className="br-home-hero-inner">
        <div className="br-home-hero-copy">
          <h1>
            AI-Powered Programmatic<br />
            Advertising At Scale
          </h1>
          <p>
            Contextual intelligence, rich media and cross-channel delivery<br className="br-home-desktop-break" />
            {' '}for advertisers and publishers worldwide
          </p>
          <div className="br-home-hero-actions">
            <a href="https://panel.boostrava.com/#/register" target="_blank" rel="noopener noreferrer">
              Advertiser
            </a>
            <a href="https://panel.boostrava.com/#/register" target="_blank" rel="noopener noreferrer">
              Monetize
            </a>
          </div>
        </div>
        <div className="br-home-hero-card" aria-live="polite">
          <span className="br-home-pin" aria-hidden="true" />
          <div className="br-home-card-nav">
            <button
              type="button"
              aria-label="Previous hero feature"
              onClick={() => setActive((v) => (v - 1 + heroSlides.length) % heroSlides.length)}
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Next hero feature"
              onClick={() => setActive((v) => (v + 1) % heroSlides.length)}
            >
              →
            </button>
          </div>
          <div className="br-home-card-copy" key={active}>
            <strong>{slide.title}</strong>
            <p>{slide.subtitle}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
