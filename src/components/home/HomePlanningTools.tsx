const tools = [
  {
    eyebrow: 'ADVERTISER',
    title: 'Campaign Calculator',
    description: 'Calculate CPM, impressions, clicks, CPC, conversions, CPA and ROAS from your own campaign assumptions.',
    href: '/advertiser/#bradv-calculator-title',
    action: 'Calculate campaign math',
  },
  {
    eyebrow: 'PUBLISHER',
    title: 'Revenue & eCPM Calculator',
    description: 'Model ad opportunities, fill rate, eCPM, revenue share and estimated publisher revenue.',
    href: '/publisher/#revenue-calculator',
    action: 'Estimate publisher revenue',
  },
  {
    eyebrow: 'RICH MEDIA',
    title: 'Rich Media Format Finder',
    description: 'Match campaign objectives and devices to Boost RAVA Rich Media format families and the declared Rich Media canvas set.',
    href: '/rich-media/#format-finder',
    action: 'Find a Rich Media format',
  },
  {
    eyebrow: 'HTML5',
    title: 'HTML5 Rich Media Size Finder',
    description: 'Choose a starting HTML5 canvas from the same seven sizes declared for Boost RAVA Rich Media use.',
    href: '/html5-ad-formats/#size-finder',
    action: 'Find an HTML5 size',
  },
  {
    eyebrow: 'CONTEXTUAL',
    title: 'Contextual Targeting Planner',
    description: 'Turn a campaign objective, market and brand-safety preference into an explainable contextual planning starting point.',
    href: '/contextual-advertising/#contextual-planner',
    action: 'Build a targeting plan',
  },
  {
    eyebrow: 'CTV',
    title: 'CTV Planning Calculator',
    description: 'Model budget, CPM, impressions, completed views and frequency-based reach using transparent assumptions.',
    href: '/ctv/#ctv-calculator',
    action: 'Model a CTV scenario',
  },
  {
    eyebrow: 'DOOH',
    title: 'DOOH Planning Tools',
    description: 'Estimate campaign booking scenarios or screen-owner revenue using the dedicated DOOH planning tools.',
    href: '/dooh/',
    action: 'Open DOOH planning tools',
  },
] as const;

const schema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Boost RAVA advertising planning tools',
  itemListElement: tools.map((tool, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: tool.title,
    url: `https://www.boostrava.com${tool.href}`,
  })),
};

export function HomePlanningTools() {
  return (
    <section className="br-home-tools" aria-labelledby="br-home-tools-title">
      <style>{`
        .br-home-tools{padding:72px 24px;background:#fff;color:#172033}
        .br-home-tools__inner{width:min(1180px,100%);margin:0 auto}
        .br-home-tools__head{text-align:center;max-width:780px;margin:0 auto 38px}
        .br-home-tools__eyebrow{display:block;margin-bottom:10px;color:#6d46d9;font-size:12px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}
        .br-home-tools__head h2{margin:0;font-size:clamp(30px,3.4vw,48px);line-height:1.12;letter-spacing:-.025em;color:#172033}
        .br-home-tools__head p{margin:16px auto 0;color:#5e6677;font-size:16px;line-height:1.7;max-width:700px}
        .br-home-tools__grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:20px}
        .br-home-tools__card{min-width:0;display:flex;flex-direction:column;align-items:flex-start;min-height:238px;padding:26px;border:1px solid #e5e8f0;border-radius:20px;background:#fff;text-decoration:none;color:inherit;transition:transform .2s ease,border-color .2s ease,box-shadow .2s ease}
        .br-home-tools__card:hover{transform:translateY(-3px);border-color:#cfc5f4;box-shadow:0 16px 38px rgba(25,35,65,.09)}
        .br-home-tools__card:focus-visible{outline:3px solid rgba(109,70,217,.3);outline-offset:3px}
        .br-home-tools__card small{color:#6d46d9;font-size:11px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
        .br-home-tools__card h3{margin:12px 0 10px;font-size:21px;line-height:1.25;color:#20283a}
        .br-home-tools__card p{margin:0 0 22px;color:#626b7c;font-size:14px;line-height:1.65}
        .br-home-tools__action{margin-top:auto;color:#5d37c8;font-size:14px;font-weight:800}
        .br-home-tools__action::after{content:' →';display:inline-block;transition:transform .2s ease}
        .br-home-tools__card:hover .br-home-tools__action::after{transform:translateX(3px)}
        @media(max-width:900px){.br-home-tools{padding:60px 20px}.br-home-tools__grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
        @media(max-width:600px){.br-home-tools{padding:52px 16px}.br-home-tools__head{margin-bottom:28px}.br-home-tools__grid{grid-template-columns:1fr;gap:14px}.br-home-tools__card{min-height:0;padding:22px}.br-home-tools__card h3{font-size:20px}}
      `}</style>
      <div className="br-home-tools__inner">
        <div className="br-home-tools__head">
          <span className="br-home-tools__eyebrow">ADVERTISING PLANNING TOOLS</span>
          <h2 id="br-home-tools-title">Calculate, compare and plan before you launch.</h2>
          <p>Use transparent Boost RAVA calculators and decision tools for campaign planning, publisher monetization, Rich Media, HTML5, contextual advertising, CTV and DOOH.</p>
        </div>
        <div className="br-home-tools__grid">
          {tools.map((tool) => (
            <a className="br-home-tools__card" href={tool.href} key={tool.title}>
              <small>{tool.eyebrow}</small>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
              <span className="br-home-tools__action">{tool.action}</span>
            </a>
          ))}
        </div>
      </div>
      <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}} />
    </section>
  );
}
