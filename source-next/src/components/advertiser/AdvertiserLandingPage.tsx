import { AdvertiserMediaCalculator, AnalyticsPreview, CampaignJourney, CreativeFormatExplorer, CreativeStudioDemo, HeroDashboard, RtbAuctionDemo, TargetingExplorer } from './AdvertiserInteractions';

const registerUrl = 'https://panel.boostrava.com/#/register';
const contactUrl = '/contact/';

const whyCards = [
  ['Targeted Reach', 'Build campaigns around supported geography, device, operating-system, browser, network and schedule controls.'],
  ['Publisher Inventory', 'Connect campaign demand to publisher inventory through Boost RAVA’s advertising and monetization ecosystem.'],
  ['Programmatic Buying', 'Use automated campaign buying workflows with bidding controls and auction-aware delivery where supported.'],
  ['Campaign Analytics', 'Review delivery and performance metrics in the advertiser reporting experience instead of relying on disconnected spreadsheets.'],
  ['Flexible Budget', 'Choose daily or lifetime budget logic and control campaign start and end scheduling in the setup flow.'],
  ['Brand Controls', 'Use campaign review, targeting, placement controls and creative review workflows to keep activation intentional.'],
  ['Traffic Quality', 'Fraud-analysis and traffic-quality surfaces exist in the advertiser panel; use them alongside placement and reporting controls.'],
];

const safetyItems = [
  ['Publisher quality', 'Use approved supply and placement controls as part of campaign activation.'],
  ['Content & placement control', 'Keep targeting and placement decisions connected to the campaign rather than treating delivery as a black box.'],
  ['Block / exclusion controls', 'Exclusion patterns are available across supported targeting controls such as browser targeting.'],
  ['Invalid traffic visibility', 'The advertiser panel includes a fraud-analysis workspace for traffic-quality review.'],
  ['Ad review', 'Creative and campaign review steps help catch configuration issues before activation.'],
];

const networkFacts = [
  ['Publishers', 'Network-connected', 'Publisher inventory is part of the Boost RAVA ecosystem; no unverified publisher count is published here.'],
  ['Reach', 'Campaign-defined', 'Reach depends on selected targeting, available inventory and market coverage.'],
  ['Impressions', 'Measured', 'Impressions are reported from campaign delivery rather than replaced with a vanity total.'],
  ['Campaigns', 'Dashboard-managed', 'Advertisers create, review and manage campaigns in the advertiser workspace.'],
  ['Coverage', 'Geo-selectable', 'Location controls support campaign geography selection; delivery still depends on available supply.'],
];


const advertiserQuestions = [
  ['What is Boost RAVA for advertisers?', 'Boost RAVA gives advertisers a programmatic campaign workspace for campaign setup, supported targeting controls, creative production, budget and schedule configuration, delivery and reporting.'],
  ['How do I create and launch a campaign?', 'Create an advertiser account, configure the campaign, choose supported targeting, add or build the creative, set budget and schedule, review the setup and launch when the campaign is ready.'],
  ['What targeting options are available?', 'The current advertiser workflow supports location, device, operating system, browser, network and day-and-time controls. Advanced audience and remarketing options are shown only where the production data path is configured.'],
  ['Which advertising formats can I use?', 'Boost RAVA supports campaign workflows for display, video, native creative, HTML5 rich media and connected-screen experiences such as CTV and DOOH where inventory and campaign configuration support them.'],
  ['Can I build HTML5 and rich media creatives?', 'Yes. The Creative Studio includes HTML5 and rich-media workflows with formats such as carousel, parallax, expandable, interactive and 3D experiences, plus responsive sizing and preview tooling.'],
  ['How are campaign budgets and schedules controlled?', 'Advertisers can configure budget logic and campaign start and end scheduling in the campaign setup flow, keeping spend and flight timing connected to the same workflow.'],
  ['How does conversion tracking work?', 'The advertiser tracking area includes S2S postback conversion tracking. Destination URL tools also support UTM-ready tracking. Other third-party integrations are not presented as native until their production integration is verified.'],
  ['What campaign performance can I measure?', 'Reporting can surface delivery and cost metrics such as impressions, clicks, CTR and spend. Conversion, CPA, revenue and ROAS views depend on conversion tracking and the required reporting data being available.'],
  ['Does Boost RAVA support programmatic and auction-based delivery?', 'Boost RAVA is built around automated campaign buying and auction-aware delivery workflows. This page does not claim exchange-level connectivity that has not been independently verified.'],
  ['Can campaigns target Bangladesh and other markets?', 'Location targeting can be configured for campaigns. Actual delivery and scale in Bangladesh or international markets depend on available publisher inventory and the targeting selected for the campaign.'],
  ['How do I calculate CPM for an advertising campaign?', 'CPM is calculated as total ad spend divided by impressions, multiplied by 1,000. For example, $100 spent for 50,000 impressions equals a $2 CPM.'],
  ['How many impressions can I buy with a given budget?', 'Estimated impressions equal budget divided by CPM, multiplied by 1,000. A $500 budget at a $2.50 CPM estimates about 200,000 impressions before delivery differences, fees or inventory constraints.'],
  ['How do I calculate CTR and CPC?', 'CTR equals clicks divided by impressions multiplied by 100. CPC equals total spend divided by clicks. These calculations help advertisers compare traffic efficiency across campaigns.'],
  ['How do I calculate CPA and ROAS?', 'CPA equals ad spend divided by conversions. ROAS equals attributed revenue divided by ad spend. A ROAS of 4 means four units of tracked revenue for each unit of ad spend.'],
];

const trackingItems = [
  { title: 'S2S Postback', state: 'Available', copy: 'The advertiser tracking area includes a reusable S2S postback URL flow for conversion tracking.' },
  { title: 'Conversion dataset / event tracking', state: 'Panel flow', copy: 'Campaign tracking UI includes dataset and conversion-event selection concepts for campaign measurement.' },
  { title: 'Purchase / lead outcomes', state: 'Data-dependent', copy: 'Outcome naming and attribution depend on the event data configured by the advertiser or tracker.' },
  { title: 'UTM parameters', state: 'Available', copy: 'Destination URL tooling includes UTM-ready tracking assistance and tracking macros.' },
  { title: 'GA4', state: 'UTM-ready, not claimed as native integration', copy: 'The campaign URL helper is GA4/UTM-ready. This page does not claim a native GA4 API integration without backend verification.' },
  { title: 'GTM', state: 'Verify before promotion', copy: 'Not presented as an active native integration until the production integration is verified.' },
  { title: 'Facebook CAPI', state: 'Verify before promotion', copy: 'Not presented as active until server-side integration is verified.' },
  { title: 'Google Ads integration', state: 'Verify before promotion', copy: 'Not presented as active until account/API integration is verified.' },
];

export function AdvertiserLandingPage() {
  return (
    <div className="bradv br-advertiser-landing">
      <section className="bradv-hero" aria-labelledby="bradv-hero-title">
        <div className="bradv-hero-grid-bg" aria-hidden="true" />
        <div className="bradv-orb bradv-orb-a" aria-hidden="true" /><div className="bradv-orb bradv-orb-b" aria-hidden="true" />
        <div className="bradv-container bradv-hero-inner">
          <div className="bradv-hero-copy">
            <span className="bradv-eyebrow">PROGRAMMATIC ADVERTISING FOR ADVERTISERS</span>
            <h1 id="bradv-hero-title">Programmatic Advertising Platform to Plan, Build and Launch Smarter Campaigns</h1>
            <p>Bring campaign setup, supported audience controls, creative production, budget and scheduling, programmatic delivery and measurement into one advertiser workflow—built for advertisers in Bangladesh and international markets where supported publisher inventory is available.</p>
            <div className="bradv-hero-actions">
              <a className="bradv-btn bradv-btn-primary" href={registerUrl}>Start Advertising <span aria-hidden="true">→</span></a>
              <a className="bradv-btn bradv-btn-ghost" href={registerUrl}>Create Campaign</a>
            </div>
            <div className="bradv-hero-proof" aria-label="Verified advertiser capabilities">
              <span><i /> Campaign setup</span><span><i /> Creative Studio</span><span><i /> Targeting controls</span><span><i /> Reporting</span>
            </div>
          </div>
          <HeroDashboard />
        </div>
      </section>

      <section className="bradv-network bradv-section" aria-labelledby="bradv-network-title">
        <div className="bradv-container">
          <div className="bradv-section-head bradv-section-head-split">
            <div><span className="bradv-eyebrow">NETWORK SIGNALS WITHOUT VANITY NUMBERS</span><h2 id="bradv-network-title">Use verified campaign data—not made-up scale claims</h2></div>
            <p>Boost RAVA does not need fake publisher, reach or impression totals to look credible. The page separates platform capability from live network data, so real figures can be connected later when a verified API or reporting source is available.</p>
          </div>
          <div className="bradv-network-grid">
            {networkFacts.map(([title, value, copy]) => <article key={title}><span>{title}</span><strong>{value}</strong><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="bradv-section bradv-why" aria-labelledby="bradv-why-title">
        <div className="bradv-container">
          <div className="bradv-section-head"><span className="bradv-eyebrow">WHY BOOST RAVA</span><h2 id="bradv-why-title">More control between the idea and the impression</h2><p>Programmatic buying is useful only when the advertiser can understand what is being targeted, what is being delivered and how the campaign is performing.</p></div>
          <div className="bradv-why-grid">{whyCards.map(([title, copy], index) => <article key={title}><span className="bradv-card-number">0{index + 1}</span><div className="bradv-feature-icon" aria-hidden="true"><i /></div><h3>{title}</h3><p>{copy}</p></article>)}</div>
        </div>
      </section>

      <section className="bradv-section bradv-how" aria-labelledby="bradv-how-title">
        <div className="bradv-container">
          <div className="bradv-section-head bradv-section-head-split"><div><span className="bradv-eyebrow">CAMPAIGN JOURNEY</span><h2 id="bradv-how-title">From account to measurable delivery</h2></div><p>Explore the campaign path. The interface below is explanatory; it mirrors verified areas of the advertiser workflow without pretending to be a live campaign forecast.</p></div>
          <CampaignJourney />
        </div>
      </section>

      <section className="bradv-section bradv-solutions" aria-labelledby="bradv-solutions-title">
        <div className="bradv-container">
          <div className="bradv-section-head"><span className="bradv-eyebrow">ADVERTISING SOLUTIONS</span><h2 id="bradv-solutions-title">Choose the creative and screen that fit the campaign</h2><p>Display, video, native creative, HTML5 rich media, CTV and DOOH capabilities are represented from the advertiser and Creative Studio source. Availability still depends on the campaign path and inventory.</p></div>
          <CreativeFormatExplorer />
        </div>
      </section>

      <section className="bradv-section bradv-targeting" aria-labelledby="bradv-targeting-title">
        <div className="bradv-container">
          <div className="bradv-section-head bradv-section-head-split"><div><span className="bradv-eyebrow">AUDIENCE & DELIVERY CONTROLS</span><h2 id="bradv-targeting-title">Target what the campaign UI can actually control</h2></div><p>Core targeting is shown as available only where it is implemented in the current advertiser panel. Advanced audience and remarketing concepts stay explicitly configuration-dependent until the production data path is verified.</p></div>
          <TargetingExplorer />
        </div>
      </section>

      <section className="bradv-section bradv-studio" aria-labelledby="bradv-studio-title">
        <div className="bradv-container">
          <div className="bradv-section-head bradv-section-head-split"><div><span className="bradv-eyebrow">CREATIVE STUDIO</span><h2 id="bradv-studio-title">Build beyond a flat banner</h2></div><p>The Creative Studio source includes native blocks, rich-media engines, 3D, parallax, carousel, expandable and interactive experiences, responsive sizing and preview tooling. The public site should demonstrate that depth rather than hide it behind a feature list.</p></div>
          <CreativeStudioDemo />
          <div className="bradv-inline-features" aria-label="Creative Studio capabilities"><span>HTML5 builder</span><span>Templates</span><span>Animation</span><span>Carousel</span><span>Parallax</span><span>Interactive layers</span><span>Multiple sizes</span><span>Preview</span></div>
        </div>
      </section>

      <section className="bradv-section bradv-calculator" aria-labelledby="bradv-calculator-title">
        <div className="bradv-container">
          <div className="bradv-section-head bradv-section-head-split">
            <div><span className="bradv-eyebrow">PROGRAMMATIC ADVERTISING CALCULATOR</span><h2 id="bradv-calculator-title">Calculate CPM, impressions, clicks, CPC, conversions, CPA and ROAS</h2></div>
            <p>Turn a media budget and performance assumptions into a transparent planning estimate. The calculator uses standard advertising formulas and does not promise delivery, conversion volume or return.</p>
          </div>
          <AdvertiserMediaCalculator />
          <div className="bradv-formula-grid" aria-label="Advertising calculation formulas">
            <article><h3>CPM formula</h3><p><strong>CPM = Spend ÷ Impressions × 1,000</strong></p><p>Use CPM to understand the cost of one thousand delivered impressions.</p></article>
            <article><h3>Impressions from budget</h3><p><strong>Impressions = Budget ÷ CPM × 1,000</strong></p><p>Use this for a planning estimate when budget and expected CPM are known.</p></article>
            <article><h3>CTR and CPC formulas</h3><p><strong>CTR = Clicks ÷ Impressions × 100</strong><br/><strong>CPC = Spend ÷ Clicks</strong></p><p>CTR measures click rate; CPC measures the average paid cost per click.</p></article>
            <article><h3>CPA and ROAS formulas</h3><p><strong>CPA = Spend ÷ Conversions</strong><br/><strong>ROAS = Revenue ÷ Spend</strong></p><p>These outcome metrics require reliable conversion and revenue tracking.</p></article>
          </div>
        </div>
      </section>

      <section className="bradv-section bradv-analytics" aria-labelledby="bradv-analytics-title">
        <div className="bradv-container bradv-analytics-grid">
          <div className="bradv-section-head bradv-section-head-left"><span className="bradv-eyebrow">CAMPAIGN ANALYTICS</span><h2 id="bradv-analytics-title">See delivery, cost and outcomes in context</h2><p>The reporting source supports delivery metrics such as impressions, clicks, CTR, spend and cost metrics. Conversion, CPA, revenue and ROAS views depend on conversion tracking and reporting data being available.</p><a className="bradv-text-link" href={registerUrl}>Open an advertiser account <span aria-hidden="true">→</span></a></div>
          <AnalyticsPreview />
        </div>
      </section>

      <section className="bradv-section bradv-tracking" aria-labelledby="bradv-tracking-title">
        <div className="bradv-container">
          <div className="bradv-section-head"><span className="bradv-eyebrow">CONVERSION TRACKING</span><h2 id="bradv-tracking-title">Connect the campaign to the outcome</h2><p>The strongest verified conversion feature in the current advertiser source is S2S postback tracking. Other integrations are labeled by their real implementation status instead of being presented as finished because they sound familiar.</p></div>
          <div className="bradv-tracking-grid">
            <article className="bradv-postback-card"><div className="bradv-postback-head"><span className="bradv-status is-live"><i /> Available</span><strong>S2S Postback</strong></div><div className="bradv-code-line"><span>POSTBACK</span><code>.../conversion?click_id={'{clickId}'}</code></div><p>Use a generated postback URL with a tracker or CPA network to send conversion events back to the campaign measurement flow.</p></article>
            <div className="bradv-tracking-list">{trackingItems.map((item) => <article key={item.title}><div><strong>{item.title}</strong><span>{item.state}</span></div><p>{item.copy}</p></article>)}</div>
          </div>
        </div>
      </section>

      <section className="bradv-section bradv-rtb" aria-labelledby="bradv-rtb-title">
        <div className="bradv-container">
          <div className="bradv-section-head bradv-section-head-split"><div><span className="bradv-eyebrow">PROGRAMMATIC DELIVERY</span><h2 id="bradv-rtb-title">Understand the auction path, not just the acronym</h2></div><p>Campaign setup includes auction-aware bidding controls and reporting contains an RTB/auction view when enabled for an account. This section explains the programmatic flow without claiming exchange-level OpenRTB connectivity that has not been independently verified here.</p></div>
          <RtbAuctionDemo />
        </div>
      </section>

      <section className="bradv-section bradv-safety" aria-labelledby="bradv-safety-title">
        <div className="bradv-container bradv-safety-grid">
          <div className="bradv-safety-copy"><span className="bradv-eyebrow">BRAND SAFETY & TRAFFIC QUALITY</span><h2 id="bradv-safety-title">Put controls around where and how a campaign runs</h2><p>Trust comes from visible controls and measurable signals—not a made-up “99.9% safe” badge. Boost RAVA’s advertiser experience includes review, targeting, reporting and fraud-analysis surfaces that can support safer campaign operations.</p><a className="bradv-text-link" href="/contact/">Discuss campaign controls <span aria-hidden="true">→</span></a></div>
          <div className="bradv-safety-stack">{safetyItems.map(([title, copy]) => <article key={title}><div className="bradv-shield" aria-hidden="true"><i /></div><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
        </div>
      </section>

      <section className="bradv-section bradv-questions" aria-labelledby="bradv-answer-title">
        <div className="bradv-container">
          <div className="bradv-section-head bradv-section-head-split">
            <div><span className="bradv-eyebrow">BEFORE YOU LAUNCH</span><h2 id="bradv-answer-title">Questions advertisers ask before starting a campaign</h2></div>
            <p>Clear answers help media buyers understand the workflow before creating an account. Every answer below reflects supported or explicitly qualified Boost RAVA capabilities—without invented scale or integration claims.</p>
          </div>
          <div className="bradv-question-grid">
            {advertiserQuestions.map(([question, answer], index) => <details className="bradv-question" key={question} open={index === 0}><summary><span>{question}</span><i aria-hidden="true" /></summary><p>{answer}</p></details>)}
          </div>
          <div className="bradv-answer-links" aria-label="Explore advertiser capabilities"><a href="/ai-programmatic-advertising/">AI programmatic advertising</a><a href="/contextual-advertising/">Contextual advertising</a><a href="/programmatic-advertising-bangladesh/">Programmatic advertising in Bangladesh</a><a href="/rich-media/">Rich media</a><a href="/html5-ad-formats/">HTML5 formats</a><a href="/ctv/">CTV advertising</a><a href="/dooh/">DOOH advertising</a></div>
        </div>
      </section>

      <section className="bradv-final-cta" aria-labelledby="bradv-cta-title">
        <div className="bradv-final-grid" aria-hidden="true" />
        <div className="bradv-container bradv-final-inner">
          <div><span className="bradv-eyebrow">READY TO BUILD A CAMPAIGN?</span><h2 id="bradv-cta-title">Turn your next media plan into a controlled, measurable workflow</h2><p>Create an advertiser account, build the campaign, choose supported targeting and creative controls, and measure what happens after launch.</p></div>
          <div className="bradv-final-actions"><a className="bradv-btn bradv-btn-light" href={registerUrl}>Start Advertising</a><a className="bradv-btn bradv-btn-outline-light" href={registerUrl}>Create Your First Campaign</a><a className="bradv-talk" href={contactUrl}>Talk to Our Team →</a></div>
        </div>
      </section>
    </div>
  );
}
