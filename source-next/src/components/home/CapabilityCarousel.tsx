'use client';

import { useEffect, useState } from 'react';
import type { CSSProperties } from 'react';

type Capability = {group:string; accent:string; image:string; heading:string; bullets:string[]};

const capabilities:Capability[]=[
  {group:'Campaign Management',accent:'#38a8ff',image:'/assets/images/dashboard/home/slider/one.png',heading:'Formats',bullets:['Sponsored content','Interactive canvas ads','Responsive display banners']},
  {group:'Campaign Management',accent:'#38a8ff',image:'/assets/images/dashboard/home/slider/two.png',heading:'Trafficking',bullets:['Contextual targeting','Audience segmentation','Inventory forecasting','Creative asset management']},
  {group:'Demand Management',accent:'#ff4da1',image:'/assets/images/dashboard/home/slider/three.png',heading:'Demand Technology',bullets:['Ad exchange integrations','DSP access','Platform marketplaces','Programmatic buying']},
  {group:'Demand Management',accent:'#ff4da1',image:'/assets/images/dashboard/home/slider/four.png',heading:'Demand Control',bullets:['Ad quality monitoring','Brand-safety controls','Fraud-detection controls','Frequency controls']},
  {group:'Ad Serving System',accent:'#8a5cff',image:'/assets/images/dashboard/home/slider/five.png',heading:'In-Flight',bullets:['Real-time reporting','Creative optimization workflows','Geo-targeting controls']},
  {group:'Ad Serving System',accent:'#8a5cff',image:'/assets/images/dashboard/home/slider/six.png',heading:'Post Flight',bullets:['Conversion tracking','Attribution analysis','Performance insights','Exportable reporting']},
  {group:'Administration',accent:'#9aa2b4',image:'/assets/images/dashboard/home/slider/seven.png',heading:'Integration & Access',bullets:['Single sign-on workflows','User role management','API access controls']},
  {group:'Administration',accent:'#9aa2b4',image:'/assets/images/dashboard/home/slider/eight.png',heading:'Security & Trust',bullets:['Access safeguards','Privacy-aware controls','Operational response workflows']},
];

function relative(index:number,active:number,total:number){let d=index-active;if(d>total/2)d-=total;if(d<-total/2)d+=total;return d}

export function CapabilityCarousel(){
  const [active,setActive]=useState(7);
  const [paused,setPaused]=useState(false);
  useEffect(()=>{if(paused)return;const id=window.setInterval(()=>setActive(v=>(v+1)%capabilities.length),5200);return()=>window.clearInterval(id)},[paused]);
  const go=(delta:number)=>setActive(v=>(v+delta+capabilities.length)%capabilities.length);
  return <section className="br-capability" aria-labelledby="br-capability-title">
    <div className="br-capability-heading"><span>PLATFORM CAPABILITIES</span><h2 id="br-capability-title">From campaign setup to serving, measurement and administration</h2><p>Explore the operating layers behind Boost RAVA.</p></div>
    <div className="br-capability-stage" onMouseEnter={()=>setPaused(true)} onMouseLeave={()=>setPaused(false)}>
      <button className="br-capability-arrow br-capability-prev" type="button" aria-label="Previous capability" onClick={()=>go(-1)}>‹</button>
      <div className="br-capability-track">
        {capabilities.map((item,index)=>{
          const diff=relative(index,active,capabilities.length);
          const visible=Math.abs(diff)<=3;
          const d=Math.max(-3,Math.min(3,diff));
          const style={
            transform:`translate(-50%,-50%) translateX(${d*235}px) translateZ(${-Math.abs(d)*65}px) rotateY(${d*-9}deg) scale(${1-Math.abs(d)*0.085})`,
            zIndex:20-Math.abs(d),
            opacity:visible?1-Math.abs(d)*0.16:0,
            pointerEvents:visible?'auto':'none',
            borderColor:item.accent,
          } as CSSProperties;
          return <button type="button" key={`${item.group}-${item.heading}`} className={`br-capability-card ${diff===0?'is-active':''}`} style={style} aria-label={`${item.group}: ${item.heading}`} aria-pressed={diff===0} tabIndex={visible?0:-1} onClick={()=>setActive(index)}>
            <h3>{item.group}</h3><div className="br-capability-image"><img src={item.image} alt="" loading="lazy" decoding="async"/></div><div className="br-capability-copy"><strong>{item.heading}</strong><ul>{item.bullets.map(v=><li key={v}>{v}</li>)}</ul></div>
          </button>
        })}
      </div>
      <button className="br-capability-arrow br-capability-next" type="button" aria-label="Next capability" onClick={()=>go(1)}>›</button>
    </div>
    <div className="br-capability-dots" aria-label="Capability slides">{capabilities.map((item,index)=><button type="button" key={item.heading} aria-label={`Show ${item.heading}`} aria-current={index===active?'true':undefined} onClick={()=>setActive(index)}/>)}</div>
  </section>
}
