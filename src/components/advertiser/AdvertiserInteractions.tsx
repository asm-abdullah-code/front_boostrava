'use client';

import { useMemo, useState } from 'react';

const registerUrl = 'https://panel.boostrava.com/#/register';

type Step = {
  title: string;
  kicker: string;
  copy: string;
  bullets: string[];
  tone: string;
};

const journeySteps: Step[] = [
  {
    title: 'Create account',
    kicker: '01 · ACCESS',
    copy: 'Open the advertiser workspace and prepare the account that will own your campaigns, creatives, billing and reporting.',
    bullets: ['Advertiser workspace', 'Campaign ownership', 'Account-level controls'],
    tone: 'indigo',
  },
  {
    title: 'Create campaign',
    kicker: '02 · CAMPAIGN',
    copy: 'Start with the campaign objective and supported ad model, then move through setup without losing the context of the plan.',
    bullets: ['Campaign setup flow', 'Destination URL controls', 'Bid model selection'],
    tone: 'blue',
  },
  {
    title: 'Choose audience',
    kicker: '03 · TARGETING',
    copy: 'Apply the targeting controls that are available in the campaign UI, including geography, device, operating system, browser and day/time.',
    bullets: ['Location targeting', 'Device / OS / browser', 'Day & time controls'],
    tone: 'cyan',
  },
  {
    title: 'Build creative',
    kicker: '04 · CREATIVE',
    copy: 'Upload or build creative assets, preview supported formats, and keep the experience aligned with the inventory you plan to buy.',
    bullets: ['Creative Studio', 'HTML5 & rich media', 'Preview before launch'],
    tone: 'violet',
  },
  {
    title: 'Set budget',
    kicker: '05 · CONTROL',
    copy: 'Choose daily or lifetime budget logic, set schedule dates and use the campaign controls to define how the flight should run.',
    bullets: ['Daily / lifetime budget', 'Start & end schedule', 'Campaign pacing inputs'],
    tone: 'orange',
  },
  {
    title: 'Launch',
    kicker: '06 · DELIVERY',
    copy: 'Review the campaign before activation and use supported programmatic delivery paths for the selected format and inventory.',
    bullets: ['Final review', 'Programmatic delivery', 'Format-aware activation'],
    tone: 'pink',
  },
  {
    title: 'Track results',
    kicker: '07 · MEASURE',
    copy: 'Read delivery and performance metrics in reporting. Conversion metrics become meaningful when conversion tracking is configured.',
    bullets: ['Impressions & clicks', 'Spend / CPM / CPC', 'Conversions / CPA / ROAS when configured'],
    tone: 'emerald',
  },
];

const targetingItems = [
  { name: 'Location', status: 'Available', detail: 'Campaign location controls are present in the setup flow.', group: 'Core' },
  { name: 'Device', status: 'Available', detail: 'Target by supported device selections in campaign targeting.', group: 'Core' },
  { name: 'Operating System', status: 'Available', detail: 'Operating-system targeting is implemented in the campaign UI.', group: 'Core' },
  { name: 'Browser', status: 'Available', detail: 'Browser selection and exclusion controls are implemented.', group: 'Core' },
  { name: 'Day & Time', status: 'Available', detail: 'Schedule targeting is available in the targeting step.', group: 'Core' },
  { name: 'Network', status: 'Available', detail: 'Network targeting controls are present in the targeting step.', group: 'Core' },
  { name: 'IP Address', status: 'Available', detail: 'IP-address targeting controls are present in the campaign UI.', group: 'Advanced' },
  { name: 'Audience Signals', status: 'Configuration-dependent', detail: 'Detailed targeting exists in the panel and should be promoted only where data/backend configuration is active.', group: 'Advanced' },
  { name: 'Remarketing', status: 'Configuration-dependent', detail: 'Remarketing selections exist in the detailed-targeting UI; availability depends on the connected audience/data setup.', group: 'Advanced' },
];

const formats = [
  {
    id: 'display',
    label: 'Display',
    eyebrow: 'Core delivery',
    description: 'Standard banner inventory with multiple common web and mobile sizes plus CPC/CPM-oriented bidding controls in the campaign flow.',
    facts: ['300×250, 728×90, 970×250 and more', 'Desktop + mobile placements', 'Preview before campaign review'],
  },
  {
    id: 'video',
    label: 'Video',
    eyebrow: 'Motion',
    description: 'Video campaign setup with in-stream and out-stream categories visible in the advertiser flow.',
    facts: ['In-stream', 'Out-stream', 'Video preview workflow'],
  },
  {
    id: 'native',
    label: 'Native',
    eyebrow: 'Publisher-friendly',
    description: 'Native creative building is present in Creative Studio with sponsor, headline, body, media and CTA controls.',
    facts: ['Native content blocks', 'Media-left / media-right / hero / minimal layouts', 'Image or video media slot'],
  },
  {
    id: 'html5',
    label: 'HTML5 / Rich Media',
    eyebrow: 'Interactive',
    description: 'Interactive creative production spans parallax, folding, carousel, 3D and other rich-media behaviors available in the Creative Studio registry.',
    facts: ['Parallax & folding', '3D / carousel experiences', 'Interactive and expandable surfaces'],
  },
  {
    id: 'ctv',
    label: 'CTV',
    eyebrow: 'Connected screen',
    description: 'CTV appears as a campaign format and has a dedicated campaign/reporting area in the advertiser panel.',
    facts: ['CTV campaign path', 'Large-screen creative planning', 'Dedicated reporting area'],
  },
  {
    id: 'dooh',
    label: 'DOOH',
    eyebrow: 'Real-world screen',
    description: 'DOOH has a dedicated advertiser campaign area and reporting surface for supported digital out-of-home workflows.',
    facts: ['Dedicated DOOH campaign area', 'Screen-oriented planning', 'DOOH reporting surface'],
  },
];

const creativeModes = [
  { id: 'parallax', title: 'Parallax', copy: 'Layered creative movement tied to pointer, touch or scroll behavior depending on the selected creative engine.' },
  { id: 'carousel', title: 'Carousel', copy: 'Multiple visual items in a navigable creative surface for product, story or sequential messaging.' },
  { id: 'cube', title: '3D Cube', copy: 'A multi-face 3D creative treatment that turns standard media into a spatial interaction.' },
  { id: 'expandable', title: 'Expandable', copy: 'Collapsed-to-expanded creative experiences with controlled interaction and close behavior.' },
  { id: 'native', title: 'Native', copy: 'Publisher-friendly content blocks with sponsor, headline, body, media and CTA fields.' },
];

export function CampaignJourney() {
  const [active, setActive] = useState(0);
  const step = journeySteps[active];

  return (
    <div className="bradv-journey" data-tone={step.tone}>
      <div className="bradv-step-list" role="tablist" aria-label="Advertiser campaign journey">
        {journeySteps.map((item, index) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-selected={index === active}
            className={index === active ? 'is-active' : ''}
            onClick={() => setActive(index)}
          >
            <span>{String(index + 1).padStart(2, '0')}</span>
            {item.title}
          </button>
        ))}
      </div>
      <div className="bradv-step-stage" role="tabpanel">
        <div className="bradv-step-copy">
          <span className="bradv-micro-label">{step.kicker}</span>
          <h3>{step.title}</h3>
          <p>{step.copy}</p>
          <ul>
            {step.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
          </ul>
        </div>
        <div className="bradv-step-ui" aria-hidden="true">
          <div className="bradv-ui-topline"><i /><i /><i /><span>Boost RAVA campaign workspace</span></div>
          <div className="bradv-ui-grid">
            <div className="bradv-ui-sidebar">
              {journeySteps.map((item, index) => <span key={item.title} className={index <= active ? 'is-done' : ''}>{index + 1}</span>)}
            </div>
            <div className="bradv-ui-main">
              <div className="bradv-ui-kicker">{step.kicker}</div>
              <div className="bradv-ui-heading">{step.title}</div>
              <div className="bradv-ui-lines"><i /><i /><i /></div>
              <div className="bradv-ui-controls"><b /><b /><b /></div>
              <div className="bradv-ui-progress"><span style={{ width: `${((active + 1) / journeySteps.length) * 100}%` }} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TargetingExplorer() {
  const [active, setActive] = useState(targetingItems[0].name);
  const item = targetingItems.find((entry) => entry.name === active) ?? targetingItems[0];

  return (
    <div className="bradv-targeting-explorer">
      <div className="bradv-targeting-map">
        {targetingItems.map((entry) => (
          <button
            type="button"
            key={entry.name}
            className={entry.name === active ? 'is-active' : ''}
            onClick={() => setActive(entry.name)}
          >
            <span className="bradv-target-dot" />
            <strong>{entry.name}</strong>
            <small>{entry.status}</small>
          </button>
        ))}
      </div>
      <aside className="bradv-target-detail" aria-live="polite">
        <span className="bradv-micro-label">{item.group} targeting</span>
        <h3>{item.name}</h3>
        <p>{item.detail}</p>
        <div className={`bradv-status ${item.status === 'Available' ? 'is-live' : 'is-dependent'}`}>
          <span /> {item.status}
        </div>
        <p className="bradv-trust-note">Only capabilities verified in the advertiser panel are presented as available. Data-dependent controls stay clearly labeled.</p>
      </aside>
    </div>
  );
}

export function CreativeFormatExplorer() {
  const [active, setActive] = useState(formats[0].id);
  const item = formats.find((entry) => entry.id === active) ?? formats[0];

  return (
    <div className="bradv-format-explorer">
      <div className="bradv-format-tabs" role="tablist" aria-label="Advertising formats">
        {formats.map((format) => (
          <button
            type="button"
            role="tab"
            aria-selected={format.id === active}
            key={format.id}
            className={format.id === active ? 'is-active' : ''}
            onClick={() => setActive(format.id)}
          >
            {format.label}
          </button>
        ))}
      </div>
      <div className="bradv-format-stage">
        <div>
          <span className="bradv-micro-label">{item.eyebrow}</span>
          <h3>{item.label}</h3>
          <p>{item.description}</p>
          <ul>{item.facts.map((fact) => <li key={fact}>{fact}</li>)}</ul>
          <a href="/html5-ad-formats/">Explore format capabilities <span aria-hidden="true">→</span></a>
        </div>
        <div className={`bradv-format-preview preview-${item.id}`} aria-hidden="true">
          <div className="bradv-preview-browser">
            <div className="bradv-preview-bar"><i /><i /><i /><span>publisher.example / placement</span></div>
            <div className="bradv-preview-page">
              <div className="bradv-preview-copy"><b /><i /><i /><i /></div>
              <div className="bradv-preview-ad">
                <span>{item.label}</span>
                <strong>Creative preview</strong>
                <em>Interactive concept</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CreativeStudioDemo() {
  const [mode, setMode] = useState(creativeModes[0].id);
  const current = creativeModes.find((entry) => entry.id === mode) ?? creativeModes[0];

  return (
    <div className="bradv-studio-demo">
      <div className="bradv-studio-toolbar">
        {creativeModes.map((entry) => (
          <button type="button" key={entry.id} className={entry.id === mode ? 'is-active' : ''} onClick={() => setMode(entry.id)}>{entry.title}</button>
        ))}
      </div>
      <div className="bradv-studio-workspace">
        <div className="bradv-studio-left" aria-hidden="true">
          <span>LAYERS</span>
          <i className="is-on" /><i /><i /><i />
        </div>
        <div className={`bradv-canvas studio-${mode}`} aria-live="polite">
          <div className="bradv-canvas-orbit" />
          <div className="bradv-canvas-card">
            <span>{current.title}</span>
            <strong>Build. Preview. Refine.</strong>
            <small>{current.copy}</small>
          </div>
        </div>
        <div className="bradv-studio-right">
          <span>INSPECTOR</span>
          <label>Format <b>{current.title}</b></label>
          <label>Preview <b>Responsive</b></label>
          <label>Interaction <b>Enabled</b></label>
          <label>Output <b>Campaign-ready</b></label>
        </div>
      </div>
    </div>
  );
}

const sampleMetrics = [
  { key: 'impressions', label: 'Impressions', value: 'Sample view' },
  { key: 'clicks', label: 'Clicks', value: 'Sample view' },
  { key: 'ctr', label: 'CTR', value: 'Derived' },
  { key: 'spend', label: 'Spend', value: 'Measured' },
  { key: 'cpm', label: 'CPM', value: 'Derived' },
  { key: 'cpc', label: 'CPC', value: 'Derived' },
  { key: 'conversions', label: 'Conversions', value: 'When tracked' },
  { key: 'cpa', label: 'CPA', value: 'When tracked' },
  { key: 'revenue', label: 'Revenue', value: 'When provided' },
  { key: 'roas', label: 'ROAS', value: 'When tracked' },
];

export function AnalyticsPreview() {
  const [active, setActive] = useState('impressions');
  const chartPoints = useMemo(() => {
    const sets: Record<string, number[]> = {
      impressions: [24, 31, 28, 44, 39, 58, 62, 71, 66, 79, 86, 82],
      clicks: [16, 21, 20, 28, 26, 34, 38, 46, 43, 51, 58, 55],
      ctr: [31, 28, 35, 33, 40, 45, 42, 52, 48, 57, 54, 61],
      spend: [18, 24, 29, 34, 37, 43, 49, 55, 59, 66, 72, 77],
    };
    return sets[active] ?? sets.impressions;
  }, [active]);
  const points = chartPoints.map((value, index) => `${(index / (chartPoints.length - 1)) * 100},${100 - value}`).join(' ');

  return (
    <div className="bradv-analytics-panel">
      <div className="bradv-analytics-head">
        <div>
          <span className="bradv-micro-label">SAMPLE INTERFACE · NOT LIVE CAMPAIGN DATA</span>
          <h3>Read performance without guessing</h3>
        </div>
        <span className="bradv-live-pill"><i /> Reporting workspace</span>
      </div>
      <div className="bradv-metric-grid">
        {sampleMetrics.map((metric) => (
          <button type="button" key={metric.key} className={metric.key === active ? 'is-active' : ''} onClick={() => setActive(metric.key)}>
            <small>{metric.label}</small><strong>{metric.value}</strong>
          </button>
        ))}
      </div>
      <div className="bradv-chart-card">
        <div className="bradv-chart-meta"><span>{sampleMetrics.find((metric) => metric.key === active)?.label ?? 'Impressions'} trend</span><small>Illustrative chart shape only</small></div>
        <svg viewBox="0 0 100 100" role="img" aria-label="Illustrative analytics trend chart">
          <defs><linearGradient id="bradvChart" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="#7c5cff" stopOpacity=".34"/><stop offset="1" stopColor="#7c5cff" stopOpacity="0"/></linearGradient></defs>
          <line x1="0" y1="25" x2="100" y2="25"/><line x1="0" y1="50" x2="100" y2="50"/><line x1="0" y1="75" x2="100" y2="75"/>
          <polygon points={`0,100 ${points} 100,100`} fill="url(#bradvChart)" stroke="none" />
          <polyline points={points} fill="none" stroke="#7c5cff" strokeWidth="2.4" vectorEffect="non-scaling-stroke" />
        </svg>
      </div>
      <p className="bradv-trust-note">Conversion, CPA, revenue and ROAS views depend on conversion tracking and the data available to the reporting API. No fabricated campaign numbers are shown here.</p>
    </div>
  );
}

export function RtbAuctionDemo() {
  const [stage, setStage] = useState(0);
  const stages = ['Ad request', 'Eligibility', 'Bid / auction', 'Win decision', 'Creative delivery'];
  return (
    <div className="bradv-rtb-demo">
      <div className="bradv-rtb-track" aria-label="Illustrative programmatic auction flow">
        {stages.map((name, index) => (
          <button type="button" key={name} className={index === stage ? 'is-active' : index < stage ? 'is-past' : ''} onClick={() => setStage(index)}>
            <span>{index + 1}</span><strong>{name}</strong>
          </button>
        ))}
      </div>
      <div className="bradv-rtb-copy" aria-live="polite">
        <span className="bradv-micro-label">PROGRAMMATIC FLOW</span>
        <h3>{stages[stage]}</h3>
        <p>{[
          'A publisher placement creates an opportunity for an eligible campaign to be considered.',
          'Campaign rules and targeting determine whether the impression is relevant to the active plan.',
          'Where auction delivery is enabled, bidding logic participates according to the campaign setup and available supply path.',
          'The delivery system resolves the eligible outcome for the available inventory.',
          'The selected creative is rendered in the supported placement and reporting begins collecting delivery signals.',
        ][stage]}</p>
        <div className="bradv-rtb-actions">
          <button type="button" onClick={() => setStage((stage + stages.length - 1) % stages.length)} aria-label="Previous programmatic step">←</button>
          <button type="button" onClick={() => setStage((stage + 1) % stages.length)} aria-label="Next programmatic step">→</button>
        </div>
      </div>
    </div>
  );
}

export function HeroDashboard() {
  const [mode, setMode] = useState<'overview' | 'targeting' | 'creative'>('overview');
  return (
    <div className="bradv-hero-dashboard" aria-label="Illustrative Boost RAVA advertiser dashboard preview">
      <div className="bradv-dashboard-top"><div className="bradv-dashboard-brand"><span>BR</span><strong>Advertiser Workspace</strong></div><div className="bradv-dashboard-status"><i /> Campaign draft</div></div>
      <div className="bradv-dashboard-tabs" role="tablist" aria-label="Dashboard preview tabs">
        {(['overview', 'targeting', 'creative'] as const).map((item) => <button type="button" role="tab" aria-selected={mode === item} key={item} className={mode === item ? 'is-active' : ''} onClick={() => setMode(item)}>{item}</button>)}
      </div>
      <div className="bradv-dashboard-body">
        <aside aria-hidden="true"><i className="is-on"/><i/><i/><i/><i/></aside>
        <div className="bradv-dashboard-main">
          {mode === 'overview' && <>
            <div className="bradv-dashboard-kpis"><span><small>Budget</small><b>Set in campaign</b></span><span><small>Delivery</small><b>Programmatic</b></span><span><small>Reporting</small><b>Campaign metrics</b></span></div>
            <div className="bradv-dashboard-chart"><div/><svg viewBox="0 0 100 40"><polyline points="0,33 10,29 20,31 30,23 40,25 50,17 60,20 70,12 80,15 90,8 100,10" fill="none" stroke="currentColor" strokeWidth="2"/></svg></div>
          </>}
          {mode === 'targeting' && <div className="bradv-dashboard-targets">{['Location','Device','OS','Browser','Day & time','Network'].map((item) => <span key={item}><i/>{item}</span>)}</div>}
          {mode === 'creative' && <div className="bradv-dashboard-creative"><div className="bradv-mini-ad"><span>HTML5 / Rich Media</span><strong>Preview creative</strong><i/></div><div className="bradv-mini-layers"><b/><b/><b/><b/></div></div>}
        </div>
      </div>
      <div className="bradv-dashboard-foot"><span>Illustrative interface</span><a href={registerUrl}>Create advertiser account →</a></div>
    </div>
  );
}

export function AdvertiserMediaCalculator() {
  const [budget, setBudget] = useState(1000);
  const [cpm, setCpm] = useState(2.5);
  const [ctr, setCtr] = useState(0.8);
  const [conversionRate, setConversionRate] = useState(3);
  const [revenuePerConversion, setRevenuePerConversion] = useState(40);
  const [targetConversions, setTargetConversions] = useState(100);
  const [targetCpa, setTargetCpa] = useState(12);

  const safe = (value: number, min = 0, max = 1_000_000_000) => Number.isFinite(value) ? Math.min(max, Math.max(min, value)) : min;
  const forecast = useMemo(() => {
    const b = safe(budget);
    const m = safe(cpm, 0.01);
    const clickRate = safe(ctr, 0, 100) / 100;
    const cvr = safe(conversionRate, 0, 100) / 100;
    const rpc = safe(revenuePerConversion);
    const impressions = (b / m) * 1000;
    const clicks = impressions * clickRate;
    const conversions = clicks * cvr;
    const cpc = clicks > 0 ? b / clicks : 0;
    const cpa = conversions > 0 ? b / conversions : 0;
    const revenue = conversions * rpc;
    const roas = b > 0 ? revenue / b : 0;
    return { impressions, clicks, conversions, cpc, cpa, revenue, roas };
  }, [budget, cpm, ctr, conversionRate, revenuePerConversion]);

  const goalBudget = safe(targetConversions) * safe(targetCpa);
  const money = (value: number) => {
    const num = safe(value);
    return `$${num.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  };
  const number = (value: number) => {
    const num = safe(value);
    return num.toLocaleString('en-US', { maximumFractionDigits: num >= 1000 ? 0 : 2 });
  };

  const numberInput = (label: string, value: number, setValue: (n:number)=>void, suffix?: string, step = '0.1') => (
    <label className="bradv-calc-field">
      <span>{label}</span>
      <div><input type="number" min="0" step={step} value={value} onChange={(event) => setValue(safe(Number(event.target.value)))} inputMode="decimal" />{suffix && <b>{suffix}</b>}</div>
    </label>
  );

  return (
    <div className="bradv-calc-shell">
      <div className="bradv-calc-inputs">
        <div className="bradv-calc-heading"><span>FORECAST FROM BUDGET</span><h3>Campaign planning inputs</h3><p>Adjust the assumptions to estimate media outcomes. Values are planning math, not a guarantee of inventory or performance.</p></div>
        <div className="bradv-calc-fields">
          {numberInput('Media budget', budget, setBudget, '$', '10')}
          {numberInput('Expected CPM', cpm, setCpm, '$')}
          {numberInput('Expected CTR', ctr, setCtr, '%')}
          {numberInput('Click-to-conversion rate', conversionRate, setConversionRate, '%')}
          {numberInput('Revenue per conversion', revenuePerConversion, setRevenuePerConversion, '$', '1')}
        </div>
      </div>
      <div className="bradv-calc-results" aria-live="polite">
        <span className="bradv-micro-label">ESTIMATED MEDIA OUTCOMES</span>
        <div className="bradv-calc-result-grid" suppressHydrationWarning>
          <article suppressHydrationWarning><small>Impressions</small><strong suppressHydrationWarning>{number(forecast.impressions)}</strong><em>Budget ÷ CPM × 1,000</em></article>
          <article suppressHydrationWarning><small>Clicks</small><strong suppressHydrationWarning>{number(forecast.clicks)}</strong><em>Impressions × CTR</em></article>
          <article suppressHydrationWarning><small>Estimated CPC</small><strong suppressHydrationWarning>{money(forecast.cpc)}</strong><em>Spend ÷ clicks</em></article>
          <article suppressHydrationWarning><small>Conversions</small><strong suppressHydrationWarning>{number(forecast.conversions)}</strong><em>Clicks × conversion rate</em></article>
          <article suppressHydrationWarning><small>Estimated CPA</small><strong suppressHydrationWarning>{money(forecast.cpa)}</strong><em>Spend ÷ conversions</em></article>
          <article suppressHydrationWarning><small>Attributed revenue</small><strong suppressHydrationWarning>{money(forecast.revenue)}</strong><em>Conversions × revenue/conversion</em></article>
          <article className="is-roas" suppressHydrationWarning><small>Estimated ROAS</small><strong suppressHydrationWarning>{number(forecast.roas)}×</strong><em>Revenue ÷ spend</em></article>
        </div>
        <div className="bradv-goal-planner">
          <div><span>REVERSE BUDGET PLANNER</span><h4>How much budget do I need?</h4><p>Plan from a conversion goal and target CPA.</p></div>
          <div className="bradv-goal-fields">
            {numberInput('Target conversions', targetConversions, setTargetConversions, undefined, '1')}
            {numberInput('Target CPA', targetCpa, setTargetCpa, '$', '1')}
          </div>
          <div className="bradv-goal-result" suppressHydrationWarning><small>Planning budget</small><strong suppressHydrationWarning>{money(goalBudget)}</strong><span suppressHydrationWarning>{number(targetConversions)} conversions × {money(targetCpa)} target CPA</span></div>
        </div>
      </div>
    </div>
  );
}
