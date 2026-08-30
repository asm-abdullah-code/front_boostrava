'use client';

import { useMemo, useState } from 'react';

const flow = [
  ['Create account','Open a publisher account and enter the basic business/property details.'],
  ['Add website','Add the website or property you want to monetize.'],
  ['Verify property','Complete the verification or review step before inventory is activated.'],
  ['Create ad units','Define the placement, size and format for the inventory you want to expose.'],
  ['Install integration','Place the available integration code or approved connection method.'],
  ['Serve eligible ads','Once approved and connected, eligible demand can compete for supported inventory.'],
  ['Track performance','Use reporting, earnings and payout surfaces to understand inventory performance.'],
];

export function PublisherJourney(){
  const [active,setActive]=useState(0);
  return <div className="brpub-journey">
    <div className="brpub-step-tabs" role="tablist" aria-label="Publisher monetization journey">
      {flow.map((item,i)=><button key={item[0]} type="button" role="tab" aria-selected={i===active} onClick={()=>setActive(i)} className={i===active?'is-active':''}><span>{String(i+1).padStart(2,'0')}</span>{item[0]}</button>)}
    </div>
    <div className="brpub-step-stage" role="tabpanel">
      <div><span className="brpub-micro">STEP {String(active+1).padStart(2,'0')}</span><h3>{flow[active][0]}</h3><p>{flow[active][1]}</p><div className="brpub-flow-line" aria-hidden="true"><i style={{width:`${((active+1)/flow.length)*100}%`}}/></div></div>
      <div className="brpub-mini-site" aria-hidden="true"><div className="brpub-browser"><i/><i/><i/><span>publisher.example</span></div><div className="brpub-site-body"><div className="brpub-site-copy"><b/><b/><b/></div><div className="brpub-ad-slot">AD UNIT<br/><small>{active<3?'setup':active<5?'connected':'eligible demand'}</small></div></div></div>
    </div>
  </div>
}

const formats = [
  {id:'display',label:'Display',status:'LIVE',copy:'Standard display inventory and common banner sizes can be represented in publisher ad-unit workflows.',sizes:['300×250','336×280','728×90','970×250','300×600','160×600']},
  {id:'mobile',label:'Mobile',status:'LIVE',copy:'Mobile banner placements can use supported compact and responsive ad-unit patterns.',sizes:['320×50','320×100','Responsive']},
  {id:'native',label:'Native',status:'LIVE',copy:'Native inventory can be represented where the publisher workflow and creative path support it.',sizes:['Content-led','Responsive','Publisher-aware']},
  {id:'html5',label:'HTML5 / Rich Media',status:'LIVE',copy:'Interactive HTML5 and rich-media demand can be served into eligible placements when the campaign and placement support the format.',sizes:['HTML5','Rich Media','Interactive']},
  {id:'video',label:'Video',status:'LIVE',copy:'Video inventory is supported in the publisher ecosystem where the configured ad unit and demand path allow it.',sizes:['Video','In-page','Eligible placements']},
];

export function PublisherFormatExplorer(){
  const [active,setActive]=useState(formats[0].id); const item=formats.find(x=>x.id===active)??formats[0];
  return <div className="brpub-format-explorer">
    <div className="brpub-format-tabs" role="tablist" aria-label="Publisher ad formats">{formats.map(x=><button key={x.id} type="button" role="tab" aria-selected={x.id===active} className={x.id===active?'is-active':''} onClick={()=>setActive(x.id)}>{x.label}<small>{x.status}</small></button>)}</div>
    <div className="brpub-format-stage"><div><span className="brpub-micro">SUPPORTED INVENTORY</span><h3>{item.label}</h3><p>{item.copy}</p><div className="brpub-size-chips">{item.sizes.map(s=><span key={s}>{s}</span>)}</div></div><div className={`brpub-format-visual is-${item.id}`} aria-hidden="true"><div className="brpub-page-wire"><div className="brpub-wire-head"/><div className="brpub-wire-copy"><i/><i/><i/></div><div className="brpub-wire-ad"><strong>{item.label}</strong><span>ad placement</span></div></div></div></div>
  </div>
}

export function InventoryControlDemo(){
  const [slot,setSlot]=useState('article');
  const labels:{[k:string]:string}={top:'Top banner',article:'In-content',rail:'Right rail',footer:'Sticky footer'};
  return <div className="brpub-inventory-demo">
    <div className="brpub-control-list" role="group" aria-label="Ad placement preview">{Object.entries(labels).map(([id,label])=><button type="button" key={id} className={slot===id?'is-active':''} onClick={()=>setSlot(id)}>{label}</button>)}</div>
    <div className={`brpub-placement-site slot-${slot}`} aria-live="polite"><div className="brpub-placement-head"><span>Publisher website</span><i/><i/></div><div className="brpub-placement-content"><div className="brpub-placement-copy"><b/><b/><b/><b/><b/></div><div className="slot top">728×90</div><div className="slot article">300×250</div><div className="slot rail">300×600</div><div className="slot footer">Responsive</div></div></div>
  </div>
}

const demandModes = [
  {id:'header',label:'Header bidding / Prebid',status:'ROADMAP · VERIFY',copy:'This architecture can support a competitive pre-auction pattern, but the public page should not call it live until the production integration is verified.',nodes:['User visit','Impression request','Pre-auction layer','Eligible demand','Auction','Winning eligible bid','Ad served']},
  {id:'gam',label:'Google Ad Manager',status:'ROADMAP · VERIFY',copy:'GAM connectivity should be described only after the exact supported integration mode is verified in production.',nodes:['Publisher site','GAM','Boost RAVA','Eligible demand','Ad decision','Winning ad']},
  {id:'openrtb',label:'OpenRTB',status:'ROADMAP · VERIFY',copy:'OpenRTB is a standard protocol for programmatic bid requests and responses. Exchange-level connectivity is not presented as live until verified.',nodes:['Publisher inventory','Boost RAVA','OpenRTB path','DSP / demand','Real-time auction','Winning bid','Ad served']},
];

export function DemandArchitecture(){
  const [active,setActive]=useState(demandModes[0].id); const item=demandModes.find(x=>x.id===active)??demandModes[0];
  return <div className="brpub-demand-architecture">
    <div className="brpub-demand-tabs" role="tablist" aria-label="Publisher demand architecture">{demandModes.map(x=><button key={x.id} type="button" role="tab" aria-selected={x.id===active} className={x.id===active?'is-active':''} onClick={()=>setActive(x.id)}>{x.label}<small>{x.status}</small></button>)}</div>
    <div className="brpub-demand-stage"><div><span className="brpub-micro">INTEGRATION STATUS MATTERS</span><h3>{item.label}</h3><p>{item.copy}</p><span className="brpub-status roadmap">{item.status}</span></div><div className="brpub-node-flow" aria-label={`${item.label} explanatory flow`}>{item.nodes.map((n,i)=><div key={n}><span>{String(i+1).padStart(2,'0')}</span><strong>{n}</strong>{i<item.nodes.length-1&&<i aria-hidden="true">→</i>}</div>)}</div></div>
  </div>
}

const periods=['Today','7 Days','14 Days','30 Days'];
export function PublisherDashboardPreview(){
  const [period,setPeriod]=useState('7 Days');
  const bars=useMemo(()=>period==='Today'?[32,55,44,76,68,84,62]:period==='14 Days'?[42,58,63,71,55,79,88]:period==='30 Days'?[37,48,57,61,68,76,83]:[28,46,61,54,74,82,70],[period]);
  return <div className="brpub-dashboard"><div className="brpub-dash-head"><div><span className="brpub-micro">SAMPLE DASHBOARD VIEW</span><strong>Publisher performance</strong></div><div className="brpub-periods">{periods.map(p=><button key={p} type="button" className={period===p?'is-active':''} onClick={()=>setPeriod(p)}>{p}</button>)}</div></div><div className="brpub-dash-metrics"><article><span>Impressions</span><strong>Reporting metric</strong></article><article><span>Fill rate</span><strong>Data-dependent</strong></article><article><span>eCPM</span><strong>Revenue metric</strong></article><article><span>Revenue</span><strong>Account data</strong></article></div><div className="brpub-chart" aria-label={`Illustrative ${period} chart, not real network data`}>{bars.map((h,i)=><i key={i} style={{height:`${h}%`}}/> )}</div><p className="brpub-sample-note">Illustrative interface only. No fake publisher earnings or network-scale numbers are shown.</p></div>
}
