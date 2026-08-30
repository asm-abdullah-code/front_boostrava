'use client';

import { useState } from 'react';

const tabs = [
  {
    key:'creatives', label:'Creatives', eyebrow:'Rich Media Creative', title:'Create experiences that move',
    bullets:['Build HTML5 display and interactive rich media.','Use parallax, carousel, cube, video and gamified formats.','Deliver responsive creative across web, mobile, CTV and DOOH.'],
    image:'/assets/images/dashboard/home/tab1img.jpg', alt:'Rich media creative example', ctas:['Gamification','Animation']
  },
  {
    key:'audiences', label:'Audiences', eyebrow:'Audience Intelligence', title:'Reach the right audience with control',
    bullets:['Combine campaign, contextual and audience signals.','Refine delivery by device, geography and campaign criteria.','Keep audience strategy aligned with measurable campaign goals.'],
    image:'/assets/images/dashboard/home/audience.jpg', alt:'Audience planning illustration', ctas:['Context','Segments']
  },
  {
    key:'people', label:'People', eyebrow:'Human-Centred Planning', title:'Design around real attention',
    bullets:['Match message, moment and screen to the user journey.','Use creative formats that make the interaction easy to understand.','Plan frequency and experience without overwhelming the audience.'],
    image:'/assets/images/dashboard/home/people.jpeg', alt:'People and audience experience illustration', ctas:['Journey','Attention']
  },
  {
    key:'supply', label:'Supply', eyebrow:'Programmatic Supply', title:'Connect campaigns to suitable inventory',
    bullets:['Work across display, video, rich media, CTV and DOOH opportunities.','Choose environments that fit campaign objectives and creative requirements.','Keep supply decisions tied to suitability, context and delivery controls.'],
    image:'/assets/images/dashboard/home/active.webp', alt:'Programmatic supply illustration', ctas:['Inventory','Screens']
  },
  {
    key:'impact', label:'Impact', eyebrow:'Measurement & Learning', title:'Understand what the campaign is doing',
    bullets:['Review delivery, interaction and outcome signals.','Use reporting to compare formats, screens and campaign phases.','Turn learnings into the next round of creative and media decisions.'],
    image:'/assets/images/dashboard/home/impact.webp', alt:'Campaign impact illustration', ctas:['Measure','Learn']
  },
  {
    key:'activation', label:'Activation', eyebrow:'Seamless Activation', title:'Launch with ease',
    bullets:['Fast onboarding and campaign setup.','Easy integration with your workflow.','Move from planning to activation with clear campaign controls.'],
    image:'/assets/images/dashboard/home/activation.webp', alt:'Campaign activation illustration', ctas:['Launch','Optimize']
  },
];

export function HomeExperienceTabs(){
  const [active,setActive]=useState(0);
  const item=tabs[active];
  return (
    <section className="br-home-tabs" aria-labelledby="br-home-tabs-title">
      <div className="br-home-tabs-shell">
        <h2 id="br-home-tabs-title" className="sr-only">Explore Boost RAVA capabilities</h2>
        <div className="br-home-tablist" role="tablist" aria-label="Platform capability categories">
          {tabs.map((tab,index)=><button
            key={tab.key}
            type="button"
            role="tab"
            aria-selected={active===index}
            aria-controls={`br-home-panel-${tab.key}`}
            id={`br-home-tab-${tab.key}`}
            tabIndex={active===index?0:-1}
            className={active===index?'is-active':''}
            onClick={()=>setActive(index)}
            onKeyDown={(event)=>{
              if(event.key==='ArrowRight'){event.preventDefault();setActive((index+1)%tabs.length)}
              if(event.key==='ArrowLeft'){event.preventDefault();setActive((index-1+tabs.length)%tabs.length)}
            }}
          >{tab.label}</button>)}
        </div>
        <div className="br-home-tabpanel" role="tabpanel" id={`br-home-panel-${item.key}`} aria-labelledby={`br-home-tab-${item.key}`} key={item.key}>
          <div className="br-home-tabcopy">
            <span>{item.eyebrow}</span>
            <h3>{item.title}</h3>
            <ul>{item.bullets.map(b=><li key={b}>{b}</li>)}</ul>
            <a href="/rich-media/">Check out formats in our ad gallery</a>
          </div>
          <div className="br-home-tabvisual">
            <img src={item.image} alt={item.alt} loading={active===0?'eager':'lazy'} decoding="async" />
            <div>{item.ctas.map(v=><span key={v}>{v}</span>)}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
