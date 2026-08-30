'use client';

import { useEffect, useState } from 'react';

const heroSlides = [
  {
    title: 'AI-Powered Contextual Targeting',
    subtitle: 'Align ads with relevant content and campaign goals.',
  },
  {
    title: 'Interactive HTML5 Rich Media',
    subtitle: 'Create parallax, carousel, cube, video and other high-impact experiences.',
  },
  {
    title: 'Cross-Screen Programmatic Delivery',
    subtitle: 'Activate campaigns across web, mobile, CTV and DOOH.',
  },
];

const networkNodes = [
  [3, 18],[8, 9],[13, 16],[18, 32],[24, 20],[29, 7],[34, 29],[39, 14],[44, 25],[49, 8],
  [54, 34],[59, 18],[64, 6],[69, 24],[74, 11],[79, 30],[84, 16],[90, 9],[96, 22],[7, 63],
  [13, 51],[20, 72],[27, 58],[34, 78],[42, 55],[49, 69],[57, 53],[64, 75],[72, 59],[80, 76],
  [88, 55],[95, 70],[11, 88],[23, 91],[39, 89],[55, 92],[70, 88],[86, 90]
];
const networkLines = [
  [0,1],[1,2],[2,3],[2,4],[4,5],[4,6],[6,7],[7,8],[8,9],[8,10],[10,11],[11,12],[11,13],
  [13,14],[13,15],[15,16],[16,17],[17,18],[19,20],[20,3],[19,21],[21,22],[22,6],[22,23],[23,24],
  [24,10],[24,25],[25,26],[26,15],[26,27],[27,28],[28,29],[29,30],[30,18],[30,31],[32,21],[32,33],
  [33,23],[33,34],[34,24],[34,35],[35,27],[35,36],[36,29],[36,37],[37,31]
];

function HeroNetworkBackground() {
  return (
    <div className="br-home-network" aria-hidden="true">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <g className="br-home-network-lines">
          {networkLines.map(([a,b], i) => (
            <line key={i} x1={networkNodes[a][0]} y1={networkNodes[a][1]} x2={networkNodes[b][0]} y2={networkNodes[b][1]} />
          ))}
        </g>
        <g className="br-home-network-dots">
          {networkNodes.map(([x,y], i) => <circle key={i} cx={x} cy={y} r={i % 5 === 0 ? .34 : .23} />)}
        </g>
      </svg>
    </div>
  );
}

export function HomepageHero() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const id = window.setInterval(() => setActive(v => (v + 1) % heroSlides.length), 6500);
    return () => window.clearInterval(id);
  }, []);
  const go = (delta:number) => setActive(v => (v + delta + heroSlides.length) % heroSlides.length);
  const slide = heroSlides[active];

  return (
    <section className="br-home-hero">
      <HeroNetworkBackground />
      <div className="br-home-hero-inner">
        <div className="br-home-hero-copy">
          <h1>AI-Powered Programmatic<br />Advertising At Scale</h1>
          <p>Contextual intelligence, rich media and cross-channel delivery<br className="br-home-desktop-break" /> for advertisers and publishers worldwide</p>
          <div className="br-home-hero-actions">
            <a href="https://panel.boostrava.com/#/register" target="_blank" rel="noopener noreferrer">Advertiser</a>
            <a href="https://panel.boostrava.com/#/register" target="_blank" rel="noopener noreferrer">Monetize</a>
          </div>
        </div>
        <div className="br-home-hero-card" aria-live="polite">
          <span className="br-home-pin" aria-hidden="true" />
          <div className="br-home-card-nav">
            <button type="button" aria-label="Previous hero feature" onClick={() => go(-1)}>←</button>
            <button type="button" aria-label="Next hero feature" onClick={() => go(1)}>→</button>
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
