type Route =
  | 'programmatic-advertising-bangladesh'
  | 'ai-contextual-advertising-bangladesh'
  | 'rich-media-html5-advertising-bangladesh'
  | 'publisher-monetization-bangladesh'
  | 'ctv-dooh-advertising-bangladesh';

type Config = {
  eyebrow:string; title:string; subtitle:string; primary:string; secondary:string; secondaryHref:string;
  theme:string; visual:string;
  pillars:Array<[string,string]>; steps:Array<[string,string]>;
  qa:Array<[string,string]>; finalTitle:string; finalCopy:string;
};

const configs:Record<Route,Config> = {
  'programmatic-advertising-bangladesh': {
    eyebrow:'PROGRAMMATIC ADVERTISING · BANGLADESH',
    title:'Programmatic Advertising in Bangladesh',
    subtitle:'Plan digital media around campaign objectives, eligible inventory, contextual signals and creative requirements—then extend to international markets where suitable supply is available.',
    primary:'Create Account', secondary:'Talk to Boost RAVA', secondaryHref:'/contact/', theme:'blue', visual:'programmatic',
    pillars:[
      ['Outcome-led planning','Start with awareness, consideration, traffic or conversion goals before choosing channels.'],
      ['Eligible inventory','Map available display, video, HTML5, rich media, CTV or DOOH opportunities to the brief.'],
      ['Context & audience','Use supported location, device, browser, schedule and contextual controls where available.'],
      ['Measure & refine','Review delivery and campaign performance without presenting estimates as guarantees.']
    ],
    steps:[
      ['Brief the objective','Define market, audience, message, budget and timing.'],
      ['Map media','Choose formats and inventory that fit the objective.'],
      ['Prepare creative','Match creative specification to placement and device.'],
      ['Activate & measure','Launch, monitor and refine using available reporting.']
    ],
    qa:[
      ['What is programmatic advertising in Bangladesh?','It is automated digital media buying used to plan and deliver eligible advertising inventory for Bangladesh campaigns through supported targeting, creative and measurement workflows.'],
      ['Can a Bangladesh campaign expand internationally?','Yes, where suitable partner or publisher inventory is available and the campaign meets market, creative and policy requirements.'],
      ['Does Boost RAVA guarantee reach or performance?','No. Reach, inventory, CPM, clicks, conversions and other outcomes depend on campaign settings, supply and market conditions.']
    ],
    finalTitle:'Build a Bangladesh programmatic plan around the objective.',
    finalCopy:'Start with the campaign goal, then map the channels, formats and inventory that actually fit.'
  },
  'ai-contextual-advertising-bangladesh': {
    eyebrow:'AI + CONTEXTUAL · BANGLADESH',
    title:'AI & Contextual Advertising in Bangladesh',
    subtitle:'Use content meaning, campaign context and machine-assisted decision support to make media choices more relevant—without treating AI as a black-box guarantee of performance.',
    primary:'Create Account', secondary:'Explore Contextual Advertising', secondaryHref:'/contextual-advertising/', theme:'indigo', visual:'contextual',
    pillars:[
      ['Semantic context','Evaluate page topic, content theme and surrounding environment where supported.'],
      ['Campaign signals','Combine objective, creative, market, device and timing inputs for planning.'],
      ['AI-assisted insight','Use recommendations as decision support; advanced automation remains status-dependent.'],
      ['Privacy-aware relevance','Reduce unnecessary dependence on personal profiling when contextual signals can do the job.']
    ],
    steps:[
      ['Define the objective','Clarify campaign outcome and eligible audience context.'],
      ['Read the environment','Interpret content and placement signals where available.'],
      ['Score fit','Compare opportunities against campaign rules and relevance.'],
      ['Measure & adjust','Use actual campaign reporting to refine the plan.']
    ],
    qa:[
      ['What is contextual advertising?','Contextual advertising aligns ads with the topic, meaning or environment of the content around the placement instead of relying only on historical user profiles.'],
      ['Does programmatic advertising use AI?','AI can assist planning, recommendations, forecasting or optimization, but the live level of automation depends on the verified production feature and data available.'],
      ['Is AI performance guaranteed?','No. AI-assisted recommendations and forecasts are not guarantees of CTR, CPA, ROAS, revenue or any other campaign outcome.']
    ],
    finalTitle:'Use intelligence where it improves the media decision.',
    finalCopy:'Keep the campaign objective, context, controls and measurement visible from planning through optimization.'
  },
  'rich-media-html5-advertising-bangladesh': {
    eyebrow:'RICH MEDIA + HTML5 · BANGLADESH',
    title:'Rich Media & HTML5 Advertising in Bangladesh',
    subtitle:'Build interactive creative around the placement, device and campaign objective—from responsive HTML5 canvases to richer carousel, video, parallax and expandable-style experiences where supported.',
    primary:'Create Account', secondary:'Explore Rich Media', secondaryHref:'/rich-media/', theme:'violet', visual:'creative',
    pillars:[
      ['Specification first','Start with size, placement, device, file and runtime requirements.'],
      ['Interactive storytelling','Use motion or interaction only when it supports the message.'],
      ['Responsive preview','Check desktop, tablet and mobile behavior before approval.'],
      ['Programmatic delivery','Use eligible inventory and validated creative in supported campaign workflows.']
    ],
    steps:[
      ['Choose format','Select the creative pattern and supported placement.'],
      ['Build assets','Prepare HTML5, imagery, video or interaction layers.'],
      ['Preview & validate','Check size, click behavior, loading and responsiveness.'],
      ['Submit & measure','Deliver to eligible inventory and review supported metrics.']
    ],
    qa:[
      ['What is rich media advertising?','Rich media uses interactive, animated, video or multi-state creative experiences instead of relying on one static frame.'],
      ['Can HTML5 ads run in Bangladesh campaigns?','Yes, when the selected campaign, placement and inventory support the creative specification.'],
      ['Are all rich media formats available everywhere?','No. Runtime, format, placement and inventory availability must be validated for the specific campaign.']
    ],
    finalTitle:'Turn the campaign idea into an eligible interactive experience.',
    finalCopy:'Choose the interaction because it improves the message—not simply because it moves.'
  },
  'publisher-monetization-bangladesh': {
    eyebrow:'PUBLISHER MONETIZATION · BANGLADESH',
    title:'Publisher Monetization in Bangladesh',
    subtitle:'Connect eligible digital inventory to programmatic demand while protecting user experience, ad quality and reporting integrity. Revenue depends on valid traffic, demand and inventory quality—not promises.',
    primary:'Monetize With Boost RAVA', secondary:'Explore Publisher Platform', secondaryHref:'/publisher/', theme:'green', visual:'publisher',
    pillars:[
      ['Inventory mapping','Define properties, placements, formats and available ad opportunities.'],
      ['Demand access','Connect eligible inventory to supported demand and campaign paths.'],
      ['Quality controls','Protect the property with review, placement and traffic-quality controls.'],
      ['Revenue visibility','Measure valid delivery, eCPM and earnings using verified reporting data.']
    ],
    steps:[
      ['Review inventory','Identify properties, placements and supported formats.'],
      ['Set controls','Define quality, category and placement rules.'],
      ['Enable demand','Activate eligible demand and ad-serving paths.'],
      ['Review performance','Use valid reporting to refine monetization.']
    ],
    qa:[
      ['Can Bangladesh publishers use programmatic monetization?','Eligible publishers can use Boost RAVA publisher workflows subject to property approval, traffic quality, inventory requirements and current demand availability.'],
      ['Does Boost RAVA guarantee publisher revenue?','No. Revenue depends on valid traffic, demand, format, location, inventory quality, campaign competition and other market conditions.'],
      ['What should publishers optimize first?','Start with inventory quality, correct placement implementation, user experience and valid traffic before focusing on yield.']
    ],
    finalTitle:'Protect the audience experience while building monetization.',
    finalCopy:'Start with inventory quality and controls, then connect the demand paths that are actually eligible.'
  },
  'ctv-dooh-advertising-bangladesh': {
    eyebrow:'SCREEN ADVERTISING · BANGLADESH',
    title:'CTV Planning + DOOH Integration in Bangladesh',
    subtitle:'Use this page as the Bangladesh screen-advertising gateway: plan partner-powered CTV where available, and onboard DOOH screens through a compatible player/CMS adapter, verified metadata, caching and proof-of-play.',
    primary:'Plan Screen Advertising', secondary:'Talk to Boost RAVA', secondaryHref:'/contact/', theme:'screen', visual:'screen',
    pillars:[
      ['Stations & transit','Onboard eligible screens with accurate venue, device and operating metadata.'],
      ['Markets & retail','Plan screen context, timing, creative and venue-safe category controls.'],
      ['Airports','Use approved inventory and market availability; never assume universal access.'],
      ['High-footfall areas','Treat audience estimates as measurement inputs only when backed by an approved source.']
    ],
    steps:[
      ['Link the adapter','Connect the CMS/player with the required network token, API credential or device mapping.'],
      ['Describe the screen','Provide screen ID, venue, latitude/longitude, resolution, aspect ratio, orientation and operating hours.'],
      ['Create the programmatic slot','Insert the supported ad-source/programmatic placeholder and configure duration, fallback and creative rules.'],
      ['Cache, play & report','Prefetch where supported, validate playback and reconcile proof-of-play before calling the screen live.']
    ],
    qa:[
      ['Does a digital signage screen automatically support programmatic DOOH?','No. A screen typically needs a compatible CMS/player integration or adapter plus inventory metadata, request handling, creative playback and proof-of-play reporting.'],
      ['Where can Boost RAVA plan DOOH in Bangladesh?','The page is designed for eligible station, transit, market, retail, airport and high-footfall environments where inventory has been onboarded, verified and approved.'],
      ['Is CTV the same integration as DOOH?','No. CTV is a buyer-side video inventory path, while DOOH requires screen/player onboarding and venue-level integration. Availability is supply-dependent.']
    ],
    finalTitle:'Plan the campaign—or onboard the screen correctly first.',
    finalCopy:'CTV and DOOH can sit in one media plan, but they should keep separate inventory, integration and measurement logic.'
  }
};

function HeroVisual({type}:{type:string}){
  if(type==='programmatic') return <div className="bdx-visual bdx-programmatic"><div className="bdx-mini">BRIEF</div><div className="bdx-core">PROGRAMMATIC<br/><small>DECISIONING</small></div><div className="bdx-grid4"><span>DISPLAY</span><span>VIDEO</span><span>HTML5</span><span>CTV / DOOH</span></div></div>;
  if(type==='contextual') return <div className="bdx-visual bdx-contextual"><div className="bdx-page"><i/><i/><i/><b>CONTENT</b></div><div className="bdx-dots"><i/><i/><i/></div><div className="bdx-ai">AI<small>CONTEXT</small></div><div className="bdx-match">RELEVANT<br/>AD</div></div>;
  if(type==='creative') return <div className="bdx-visual bdx-creative"><div className="bdx-layer l1"/><div className="bdx-layer l2"/><div className="bdx-ad"><small>300×250</small><i/><b>INTERACTIVE</b><button>EXPLORE</button></div></div>;
  if(type==='publisher') return <div className="bdx-visual bdx-publisher"><div className="bdx-inventory"><i/><i/><i/><i/></div><div className="bdx-auction">DEMAND</div><div className="bdx-bars"><i/><i/><i/><i/><b>VALID YIELD</b></div></div>;
  return <div className="bdx-visual bdx-screen"><div className="bdx-tv">CTV</div><div className="bdx-plus">+</div><div className="bdx-board">DOOH<span/></div><div className="bdx-pin"/></div>;
}
function StatusStrip({type}:{type:string}){const items=type==='screen'?['Partner-powered CTV','CMS / player adapter','Screen metadata','Proof of play']:type==='publisher'?['Inventory quality','Demand access','Ad controls','Verified reporting']:type==='creative'?['HTML5 canvas','Rich media','Responsive preview','Eligible delivery']:type==='contextual'?['Content context','Campaign signals','AI-assisted insight','Privacy-aware planning']:['Campaign brief','Eligible media','Creative fit','Measurement'];return <div className="bdx-status">{items.map((x,i)=><span key={x}><b>{String(i+1).padStart(2,'0')}</b>{x}</span>)}</div>}
function ProcessVisual({type}:{type:string}){const a=type==='screen'?['CMS / Player','Adapter','Boost RAVA','Screen','Proof of Play']:type==='publisher'?['Inventory','Ad Request','Demand','Valid Delivery','Revenue']:type==='creative'?['Canvas','Interaction','Preview','Validation','Campaign']:type==='contextual'?['Content','Signals','Context Fit','Decision','Measure']:['Brief','Eligibility','Auction / Delivery','Creative','Report'];return <div className="bdx-processVisual">{a.map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><strong>{x}</strong>{i<a.length-1&&<i>→</i>}</div>)}</div>}
function SectionHead({eyebrow,title,copy,light=false}:{eyebrow:string;title:string;copy?:string;light?:boolean}){return <div className={`bdx-head ${light?'light':''}`}><span>{eyebrow}</span><h2>{title}</h2>{copy&&<p>{copy}</p>}</div>}
function FAQ({items}:{items:Array<[string,string]>}){return <div className="bdx-faq">{items.map(([q,a],i)=><details key={q} open={i===0}><summary>{q}<span aria-hidden="true">+</span></summary><p>{a}</p></details>)}</div>}


function ToolBridge({route}:{route:Route}){
 const links:Record<Route,Array<[string,string,string]>>={
  'programmatic-advertising-bangladesh':[['Campaign Calculator','Calculate CPM, impressions, CPC, CPA and ROAS from your own assumptions.','/advertiser/#bradv-calculator-title']],
  'ai-contextual-advertising-bangladesh':[['Contextual Targeting Planner','Turn a Bangladesh campaign brief into transparent topic, exclusion and format directions.','/contextual-advertising/#contextual-planner']],
  'rich-media-html5-advertising-bangladesh':[['Rich Media Format Finder','Choose from Boost RAVA’s nine Rich Media format families and seven declared Rich Media canvases.','/rich-media/#format-finder'],['HTML5 Rich Media Size Finder','Choose HTML5 starting sizes from the same seven Rich Media canvases when the creative is intended for Rich Media use.','/html5-ad-formats/#size-finder']],
  'publisher-monetization-bangladesh':[['Publisher Revenue Calculator','Model impressions, fill, eCPM, revenue share and publisher revenue without a revenue guarantee.','/publisher/#revenue-calculator']],
  'ctv-dooh-advertising-bangladesh':[['CTV Calculator','Model budget, CPM, impressions, completion and frequency-based reach.','/ctv/#ctv-calculator'],['DOOH Planning Tools','Estimate DOOH campaign scenarios and publisher-side screen revenue with the dedicated DOOH tools.','/dooh/']]
 };
 return <div className="bdx-tools">{links[route].map(([h,p,u])=><a key={h} href={u}><small>PLANNING TOOL</small><h3>{h}</h3><p>{p}</p><span>Open tool →</span></a>)}</div>
}
export function BangladeshLandingPage({route}:{route:Route}){const c=configs[route];const register='https://panel.boostrava.com/#/register';return <div className={`bdx-root theme-${c.theme}`}><style dangerouslySetInnerHTML={{__html:CSS}}/><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:c.qa.map(([q,a])=>({'@type':'Question',name:q,acceptedAnswer:{'@type':'Answer',text:a}}))})}}/>
<section className="bdx-hero"><div className="bdx-heroGrid"/><div className="bdx-container bdx-heroIn"><div className="bdx-heroCopy"><span className="bdx-eyebrow">{c.eyebrow}</span><h1>{c.title}</h1><p>{c.subtitle}</p><div className="bdx-actions"><a className="bdx-btn primary" href={register}>{c.primary}</a><a className="bdx-btn ghost" href={c.secondaryHref}>{c.secondary}</a></div></div><div className="bdx-heroPanel"><HeroVisual type={c.visual}/><div><strong>{c.visual==='screen'?'Two channels. Separate activation logic.':'One planning layer with clear controls.'}</strong><p>{c.visual==='screen'?'CTV stays supply-led; DOOH stays integration-led.':'Use the right signal, format and inventory for the objective.'}</p></div></div></div></section>
<section className="bdx-stripSec"><div className="bdx-container"><StatusStrip type={c.visual}/></div></section>
<section className="bdx-section"><div className="bdx-container"><SectionHead eyebrow="PLANNING PRINCIPLES" title={c.visual==='screen'?'Choose the environment before the screen plan.':'Build the plan around what the campaign actually needs.'} copy="Avoid channel-first checklists. Start with the objective, then use only the signals, formats and inventory that are eligible for the campaign."/><div className="bdx-pillarGrid">{c.pillars.map(([h,p],i)=><article key={h}><span>{String(i+1).padStart(2,'0')}</span><i/><h3>{h}</h3><p>{p}</p></article>)}</div></div></section>
<section className="bdx-section bdx-soft"><div className="bdx-container bdx-split"><div><SectionHead eyebrow="HOW IT WORKS" title={c.visual==='screen'?'A screen is not live until the integration can prove playback.':'A controlled workflow from brief to measurable delivery.'} copy="Each stage should have a clear owner, valid inputs and an auditable output."/><div className="bdx-stepList">{c.steps.map(([h,p],i)=><article key={h}><b>{String(i+1).padStart(2,'0')}</b><div><h3>{h}</h3><p>{p}</p></div></article>)}</div></div><ProcessVisual type={c.visual}/></div></section>
{c.visual==='screen'&&<section className="bdx-section bdx-dark"><div className="bdx-container"><SectionHead light eyebrow="DOOH INTEGRATION" title="A separate adapter layer connects the screen to programmatic demand." copy="Digital signage playback alone is not enough. The player or CMS needs a compatible integration path that can identify the screen, request an eligible ad, cache and play the creative, and return playback evidence."/><div className="bdx-techGrid"><article><span>01</span><h3>Adapter identity</h3><p>Map account/network credentials plus device, player or screen identifiers required by the integration.</p></article><article><span>02</span><h3>Venue metadata</h3><p>Provide latitude/longitude, venue type, resolution, aspect ratio, orientation, operating hours and supported media.</p></article><article><span>03</span><h3>Programmatic slot</h3><p>Configure the ad-source placeholder, creative rules, duration, fallback behavior and category controls.</p></article><article><span>04</span><h3>Playback verification</h3><p>Use test mode where supported, inspect player logs, verify the physical screen and reconcile proof-of-play.</p></article></div><div className="bdx-settings"><div><b>Reliability</b><span>Prefetch / caching</span><span>Retry / timeout</span><span>Fallback content</span></div><div><b>Inventory control</b><span>Category rules</span><span>Dayparting</span><span>Pricing / floor policy</span></div><div><b>Measurement</b><span>Proof of play</span><span>Approved audience source</span><span>No invented multiplier</span></div></div></div></section>}
<section className="bdx-section bdx-soft"><div className="bdx-container"><SectionHead eyebrow="PLANNING TOOLS" title="Use the specialist calculator or finder instead of guessing." copy="Each tool keeps assumptions visible and links to the deeper Boost RAVA capability page."/><ToolBridge route={route}/></div></section>
<section className="bdx-section"><div className="bdx-container bdx-answerSplit"><SectionHead eyebrow="COMMON QUESTIONS" title="Clear answers before you activate." copy="These answers are written for people first and are aligned with the availability and verification rules used across Boost RAVA."/><FAQ items={c.qa}/></div></section>
<section className="bdx-final"><div className="bdx-container bdx-finalIn"><div><span className="bdx-eyebrow">READY TO MOVE?</span><h2>{c.finalTitle}</h2><p>{c.finalCopy}</p></div><div><a className="bdx-btn white" href={register}>{c.primary}</a><a className="bdx-btn outline" href="/contact/">Talk to Boost RAVA</a></div></div></section>
</div>}

const CSS=String.raw`
.bdx-root{--ink:#101b33;--muted:#5d6d87;--line:#dce5f4;font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;color:var(--ink);background:#fff;overflow:hidden}.bdx-root *{box-sizing:border-box}.bdx-container{width:min(1180px,calc(100% - 40px));margin:auto}.bdx-hero{position:relative;isolation:isolate;padding:86px 0 78px;background:radial-gradient(circle at 80% 16%,rgba(123,72,255,.42),transparent 31%),linear-gradient(125deg,#071a4d,#183ca5 52%,#4d249d);color:#fff}.theme-green .bdx-hero{background:radial-gradient(circle at 78% 15%,rgba(48,220,164,.22),transparent 30%),linear-gradient(125deg,#071b3f,#123d68 55%,#14533f)}.theme-screen .bdx-hero{background:radial-gradient(circle at 82% 14%,rgba(88,204,255,.24),transparent 31%),linear-gradient(125deg,#071530,#153d82 54%,#4a257e)}.bdx-heroGrid{position:absolute;inset:0;z-index:-1;opacity:.22;background-image:linear-gradient(rgba(255,255,255,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.06) 1px,transparent 1px);background-size:56px 56px;mask-image:linear-gradient(#000,transparent)}.bdx-heroIn{display:grid;grid-template-columns:1.04fr .96fr;gap:64px;align-items:center}.bdx-eyebrow{display:inline-flex;align-items:center;gap:10px;color:#c7d9ff;font-size:11px;font-weight:900;letter-spacing:.17em}.bdx-eyebrow:before{content:"";width:26px;height:2px;background:#7ce3ff}.bdx-hero h1{margin:16px 0 22px;color:#fff!important;font-size:clamp(54px,6.2vw,82px);line-height:.98;letter-spacing:-.055em}.bdx-heroCopy>p{margin:0;max-width:720px;color:#dbe7ff!important;font-size:18px;line-height:1.75}.bdx-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.bdx-btn{display:inline-flex;align-items:center;justify-content:center;min-height:52px;padding:0 22px;border-radius:14px;text-decoration:none;font-weight:850;transition:transform .2s ease,box-shadow .2s ease}.bdx-btn:hover{transform:translateY(-2px)}.bdx-btn.primary,.bdx-btn.white{background:#fff;color:#253b9a;box-shadow:0 14px 34px rgba(0,0,0,.18)}.bdx-btn.ghost,.bdx-btn.outline{color:#fff;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.07)}.bdx-heroPanel{border:1px solid rgba(255,255,255,.18);border-radius:28px;padding:22px;background:linear-gradient(145deg,rgba(255,255,255,.13),rgba(255,255,255,.055));box-shadow:0 30px 80px rgba(5,13,54,.34);backdrop-filter:blur(10px)}.bdx-heroPanel>div:last-child{padding:18px 6px 2px}.bdx-heroPanel strong{color:#fff;font-size:20px}.bdx-heroPanel p{color:#cbd8f4!important;line-height:1.6;margin:8px 0 0}.bdx-visual{position:relative;min-height:260px;border-radius:21px;border:1px solid rgba(255,255,255,.16);background:rgba(7,18,57,.24);overflow:hidden}.bdx-visual:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px);background-size:24px 24px}.bdx-programmatic{display:grid;grid-template-columns:82px 1fr 132px;align-items:center;gap:13px;padding:24px}.bdx-mini,.bdx-core,.bdx-grid4{position:relative;z-index:2}.bdx-mini{display:grid;place-items:center;height:60px;border-radius:15px;background:#fff;color:#1f2c59;font-size:10px;font-weight:900;letter-spacing:.12em}.bdx-core{padding:22px 10px;text-align:center;border-radius:18px;background:linear-gradient(135deg,#3275ff,#7d50ff);color:#fff;font-weight:900;box-shadow:0 18px 38px rgba(39,62,200,.35)}.bdx-core small{font-size:8px;letter-spacing:.12em;opacity:.85}.bdx-grid4{display:grid;grid-template-columns:1fr 1fr;gap:8px}.bdx-grid4 span{min-height:43px;border:1px solid rgba(255,255,255,.15);border-radius:12px;display:grid;place-items:center;color:#fff;font-size:8px;font-weight:850;background:rgba(255,255,255,.08);text-align:center}.bdx-contextual{display:grid;grid-template-columns:92px 30px 96px 1fr;gap:10px;align-items:center;padding:24px}.bdx-page{position:relative;z-index:2;height:142px;border-radius:16px;background:#fff;padding:18px 12px;color:#1a2b57}.bdx-page i{display:block;height:6px;border-radius:8px;background:#dfe6f8;margin:9px 0}.bdx-page i:nth-child(2){background:#79decf;width:78%}.bdx-page i:nth-child(3){width:58%}.bdx-page b{font-size:9px;letter-spacing:.12em}.bdx-dots{display:grid;gap:9px;position:relative;z-index:2}.bdx-dots i{width:8px;height:8px;border-radius:50%;background:#5ed8ff;box-shadow:0 0 0 5px rgba(94,216,255,.08)}.bdx-ai{position:relative;z-index:2;height:96px;border-radius:50%;display:grid;place-items:center;text-align:center;background:radial-gradient(circle at 35% 30%,#57dfff,#416cff 48%,#7b4de8);color:#fff;font-size:24px;font-weight:900}.bdx-ai small{display:block;font-size:7px;letter-spacing:.12em}.bdx-match{position:relative;z-index:2;border:1px solid rgba(255,255,255,.17);border-radius:16px;padding:22px 10px;text-align:center;color:#fff;font-size:11px;font-weight:900;line-height:1.7;background:rgba(255,255,255,.08)}.bdx-creative{display:grid;place-items:center;padding:20px}.bdx-ad,.bdx-layer{position:absolute;width:172px;aspect-ratio:300/250;border-radius:15px}.bdx-layer.l1{background:rgba(94,89,255,.22);transform:translate(22px,-13px) rotate(7deg)}.bdx-layer.l2{background:rgba(64,210,255,.15);transform:translate(-26px,17px) rotate(-7deg)}.bdx-ad{position:relative;background:linear-gradient(145deg,#fff,#eaf0ff);z-index:3;box-shadow:0 22px 44px rgba(0,0,0,.24);padding:13px;color:#33405e}.bdx-ad small{font-size:8px;font-weight:900}.bdx-ad i{display:block;width:56px;height:56px;border-radius:14px;margin:14px 0;background:linear-gradient(135deg,#4668ff,#9948ee)}.bdx-ad b{display:block;font-size:9px}.bdx-ad button{position:absolute;left:13px;bottom:13px;border:0;border-radius:999px;background:#ff7b36;color:#fff;font-size:7px;font-weight:900;padding:7px 10px}.bdx-publisher{display:grid;grid-template-columns:90px 86px 1fr;gap:14px;align-items:center;padding:24px}.bdx-inventory{display:grid;grid-template-columns:1fr 1fr;gap:7px;position:relative;z-index:2}.bdx-inventory i{height:50px;border-radius:11px;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.08)}.bdx-inventory i:nth-child(2){background:rgba(74,214,176,.22)}.bdx-auction{position:relative;z-index:2;height:80px;border-radius:50%;display:grid;place-items:center;background:linear-gradient(135deg,#2d7cff,#6657ec);color:#fff;font-size:8px;font-weight:900;letter-spacing:.1em}.bdx-bars{height:144px;display:flex;align-items:end;gap:7px;padding:8px 8px 25px;border-left:1px solid rgba(255,255,255,.15);border-bottom:1px solid rgba(255,255,255,.15);position:relative;z-index:2}.bdx-bars i{flex:1;border-radius:6px 6px 2px 2px;background:linear-gradient(#67e0b9,#26a177)}.bdx-bars i:nth-child(1){height:38%}.bdx-bars i:nth-child(2){height:56%}.bdx-bars i:nth-child(3){height:72%}.bdx-bars i:nth-child(4){height:88%}.bdx-bars b{position:absolute;left:8px;bottom:6px;color:#bde9d9;font-size:7px;letter-spacing:.12em}.bdx-screen{display:grid;grid-template-columns:1fr 30px 1fr;align-items:center;gap:9px;padding:24px}.bdx-tv,.bdx-board{position:relative;z-index:2;border:4px solid #d8e1ff;border-radius:12px;background:linear-gradient(145deg,#173777,#7148d6);aspect-ratio:16/9;display:grid;place-items:center;color:#fff;font-weight:900}.bdx-tv:after{content:"";position:absolute;left:38%;right:38%;bottom:-13px;height:9px;border-bottom:3px solid #d8e1ff}.bdx-plus{position:relative;z-index:2;color:#7edcff;font-size:24px;font-weight:900;text-align:center}.bdx-board{border-radius:7px;aspect-ratio:16/10;background:linear-gradient(135deg,#112349,#2f61c5 55%,#8b50e3)}.bdx-board span{position:absolute;left:48%;bottom:-32px;width:7px;height:30px;background:#d8e1ff}.bdx-pin{position:absolute;right:31px;top:23px;width:18px;height:24px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);background:#ff8148;z-index:3}.bdx-stripSec{padding:0;background:#fff}.bdx-status{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid #e1e7f2;border-top:0;border-radius:0 0 20px 20px;overflow:hidden;box-shadow:0 14px 36px rgba(21,40,92,.06)}.bdx-status span{display:flex;align-items:center;gap:10px;padding:17px 18px;color:#52627c;font-size:12px;font-weight:750;border-right:1px solid #e7ebf3}.bdx-status span:last-child{border-right:0}.bdx-status b{color:#5369d9;font-size:9px}.bdx-section{padding:96px 0}.bdx-soft{background:linear-gradient(180deg,#f7f9ff,#f1f5ff)}.bdx-head{max-width:780px;margin-bottom:40px}.bdx-head>span{font-size:10px;font-weight:900;letter-spacing:.16em;color:#5264d7}.bdx-head h2{margin:10px 0 14px;color:var(--ink)!important;font-size:clamp(36px,4vw,56px);line-height:1.04;letter-spacing:-.045em}.bdx-head p{margin:0;color:var(--muted)!important;line-height:1.72;font-size:17px}.bdx-pillarGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}.bdx-pillarGrid article{position:relative;border:1px solid var(--line);border-radius:20px;padding:23px;background:#fff;box-shadow:0 14px 32px rgba(29,47,97,.045);overflow:hidden}.bdx-pillarGrid article>span{float:right;color:#909db0;font-size:9px;font-weight:900}.bdx-pillarGrid article>i{display:block;width:42px;height:42px;border-radius:13px;background:linear-gradient(135deg,#e9efff,#f0eaff);margin-bottom:17px}.theme-green .bdx-pillarGrid article>i{background:linear-gradient(135deg,#e6f8f2,#e7f5ff)}.bdx-pillarGrid h3{color:#17233d!important;margin:9px 0;font-size:18px}.bdx-pillarGrid p{color:#637087!important;line-height:1.65;margin:0;font-size:13px}.bdx-split{display:grid;grid-template-columns:1fr .92fr;gap:56px;align-items:center}.bdx-stepList{display:grid;gap:11px}.bdx-stepList article{display:grid;grid-template-columns:52px 1fr;gap:14px;padding:17px;border:1px solid #dce4f2;border-radius:16px;background:#fff}.bdx-stepList article>b{width:42px;height:42px;border-radius:12px;display:grid;place-items:center;background:#eef2ff;color:#435bd1;font-size:10px}.bdx-stepList h3{margin:0 0 5px;color:#16223b!important;font-size:15px}.bdx-stepList p{margin:0;color:#647189!important;line-height:1.55;font-size:12px}.bdx-processVisual{border-radius:26px;padding:28px;background:linear-gradient(145deg,#0b1b45,#203e96 58%,#552a91);box-shadow:0 26px 65px rgba(18,42,116,.18);display:grid;gap:9px}.bdx-processVisual>div{display:grid;grid-template-columns:38px 1fr 22px;align-items:center;min-height:64px;border:1px solid rgba(255,255,255,.12);border-radius:14px;background:rgba(255,255,255,.06);padding:10px 13px;color:#fff}.bdx-processVisual span{font-size:8px;color:#7edcff}.bdx-processVisual strong{font-size:12px}.bdx-processVisual i{font-style:normal;color:#8ddfff}.bdx-dark{background:radial-gradient(circle at 85% 10%,rgba(99,77,255,.25),transparent 30%),linear-gradient(135deg,#06152f,#11275a 55%,#36196b);color:#fff}.bdx-head.light h2{color:#fff!important}.bdx-head.light>span{color:#81dbff}.bdx-head.light p{color:#cbd8ee!important}.bdx-techGrid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.bdx-techGrid article{border:1px solid rgba(255,255,255,.13);border-radius:18px;padding:21px;background:rgba(255,255,255,.055)}.bdx-techGrid span{color:#83dcff;font-size:9px;font-weight:900}.bdx-techGrid h3{color:#fff!important;margin:10px 0 8px}.bdx-techGrid p{color:#cbd8ee!important;font-size:13px;line-height:1.6;margin:0}.bdx-settings{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px}.bdx-settings>div{border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:18px;background:rgba(255,255,255,.04);display:flex;flex-wrap:wrap;gap:7px}.bdx-settings b{width:100%;color:#fff;margin-bottom:6px}.bdx-settings span{padding:7px 9px;border-radius:999px;background:rgba(255,255,255,.08);color:#dbe5f7;font-size:10px}.bdx-answerSplit{display:grid;grid-template-columns:.8fr 1.2fr;gap:56px;align-items:start}.bdx-faq{display:grid;gap:10px}.bdx-faq details{border:1px solid var(--line);border-radius:16px;background:#fff;box-shadow:0 10px 30px rgba(24,42,90,.045);overflow:hidden}.bdx-faq summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;gap:18px;padding:18px 20px;color:#15213b;font-size:14px;font-weight:850}.bdx-faq summary::-webkit-details-marker{display:none}.bdx-faq summary span{color:#5364d4;font-size:20px;line-height:1}.bdx-faq details[open] summary span{transform:rotate(45deg)}.bdx-faq p{margin:0;padding:0 20px 20px;color:#647189!important;line-height:1.7;font-size:13px}.bdx-final{padding:80px 0;background:radial-gradient(circle at 80% 10%,rgba(99,224,255,.2),transparent 28%),linear-gradient(135deg,#10195a,#2944b4 58%,#6f2ba1);color:#fff}.bdx-finalIn{display:grid;grid-template-columns:1fr auto;gap:50px;align-items:center}.bdx-final h2{color:#fff!important;margin:12px 0;font-size:clamp(38px,4.8vw,62px);line-height:1;letter-spacing:-.05em}.bdx-final p{color:#dce5fb!important;line-height:1.65;max-width:740px}.bdx-finalIn>div:last-child{display:flex;flex-direction:column;gap:10px;min-width:240px}
.bdx-tools{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}.bdx-tools a{display:block;border:1px solid var(--line);border-radius:20px;padding:22px;background:#fff;text-decoration:none;color:#17233d;box-shadow:0 12px 30px rgba(24,42,90,.05)}.bdx-tools small{font-size:9px;font-weight:900;letter-spacing:.12em;color:#5364d4}.bdx-tools h3{margin:8px 0;font-size:20px}.bdx-tools p{margin:0;color:#647189!important;line-height:1.65;font-size:13px}.bdx-tools span{display:inline-block;margin-top:14px;color:#435bd1;font-weight:850;font-size:12px}
@media(max-width:980px){.bdx-heroIn,.bdx-split,.bdx-answerSplit{grid-template-columns:1fr}.bdx-heroIn{gap:36px}.bdx-pillarGrid,.bdx-techGrid{grid-template-columns:1fr 1fr}.bdx-status{grid-template-columns:1fr 1fr}.bdx-status span:nth-child(2){border-right:0}.bdx-finalIn{grid-template-columns:1fr}.bdx-finalIn>div:last-child{min-width:0;flex-direction:row}.bdx-btn{flex:1}.bdx-contextual{grid-template-columns:80px 24px 82px 1fr}}
.bdx-tools{grid-template-columns:1fr}
@media(max-width:680px){.bdx-container{width:min(100% - 28px,1180px)}.bdx-hero{padding:66px 0 58px}.bdx-hero h1{font-size:clamp(44px,13vw,60px)}.bdx-heroCopy>p{font-size:16px}.bdx-actions,.bdx-finalIn>div:last-child{flex-direction:column}.bdx-pillarGrid,.bdx-techGrid,.bdx-settings,.bdx-status{grid-template-columns:1fr}.bdx-status span{border-right:0;border-bottom:1px solid #e7ebf3}.bdx-status span:last-child{border-bottom:0}.bdx-section{padding:72px 0}.bdx-programmatic{grid-template-columns:64px 1fr 94px;padding:14px}.bdx-contextual{grid-template-columns:68px 18px 68px 1fr;padding:14px}.bdx-page{height:112px;padding:12px 8px}.bdx-ai{height:68px;font-size:17px}.bdx-match{padding:14px 6px;font-size:8px}.bdx-publisher{grid-template-columns:70px 64px 1fr;padding:14px}.bdx-auction{height:64px;font-size:7px}.bdx-bars{height:112px}.bdx-screen{padding:14px}.bdx-btn{width:100%}}
@media(prefers-reduced-motion:reduce){.bdx-root *{transition:none!important;animation:none!important}}
`;
