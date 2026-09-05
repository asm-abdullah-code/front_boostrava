'use client';

import { FormEvent, useMemo, useState } from 'react';

type Intent = 'advertiser' | 'publisher' | 'ctv-dooh' | 'partnership' | 'technical' | 'general';

const intents: Array<{key:Intent; label:string; title:string; copy:string; subject:string}> = [
  {key:'advertiser', label:'Advertiser', title:'Plan or launch a campaign', copy:'Campaign setup, formats, targeting, creative, measurement and media planning.', subject:'Advertiser inquiry'},
  {key:'publisher', label:'Publisher', title:'Monetize eligible inventory', copy:'Publisher onboarding, ad units, monetization workflow and inventory questions.', subject:'Publisher inquiry'},
  {key:'ctv-dooh', label:'CTV / DOOH', title:'Explore connected-screen media', copy:'Partner-powered CTV or available DOOH inventory, markets, booking and creative requirements.', subject:'CTV / DOOH inquiry'},
  {key:'partnership', label:'Partnership', title:'Build a commercial relationship', copy:'Media, supply, demand, publisher, technology or strategic partnership discussions.', subject:'Partnership inquiry'},
  {key:'technical', label:'Technical', title:'Talk implementation and integrations', copy:'Ad serving, programmatic infrastructure, tags, tracking or technical implementation questions.', subject:'Technical inquiry'},
  {key:'general', label:'General', title:'Start with the right team', copy:'Not sure where your question belongs? Send it here and we will route it appropriately.', subject:'General inquiry'}
];

const faqs = [
  ['Who can contact Boost RAVA?', 'Advertisers, publishers, agencies, screen owners, media partners, technology partners and businesses exploring Boost RAVA services can contact the team.'],
  ['Can I ask about advertising in Bangladesh?', 'Yes. You can ask about advertising opportunities in Bangladesh and about eligible international inventory where the relevant Boost RAVA or partner-powered service supports it.'],
  ['Can publishers contact Boost RAVA about monetization?', 'Yes. Publishers can ask about eligible inventory, ad units, monetization workflows and onboarding. Availability and commercial terms depend on the property and implementation.'],
  ['Can I ask about CTV or DOOH campaigns?', 'Yes. CTV and DOOH enquiries are welcome. Inventory, markets, formats, pricing and measurement can vary by third-party supply partner, screen partner and campaign requirements.'],
  ['Does submitting this page create a campaign automatically?', 'No. This contact experience prepares an email enquiry. Campaign creation and account registration remain separate platform actions.'],
  ['How should I describe a technical enquiry?', 'Include the product area, intended integration, relevant URL or environment, expected behavior and any non-sensitive error details that help the team understand the issue.']
];

function Icon({name}:{name:'mail'|'phone'|'pin'|'arrow'|'send'|'check'|'spark'|'shield'}){
  const common = {width:22,height:22,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.9,strokeLinecap:'round' as const,strokeLinejoin:'round' as const,'aria-hidden':true};
  if(name==='mail') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="3"/><path d="m4 7 8 6 8-6"/></svg>;
  if(name==='phone') return <svg {...common}><path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.7 19.7 0 0 1-8.59-3.07 19.4 19.4 0 0 1-6-6A19.7 19.7 0 0 1 2.16 4.18 2 2 0 0 1 4.15 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.1 9.91a16 16 0 0 0 6 6l1.28-1.28a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.9Z"/></svg>;
  if(name==='pin') return <svg {...common}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></svg>;
  if(name==='send') return <svg {...common}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>;
  if(name==='check') return <svg {...common}><path d="m5 12 4 4L19 6"/></svg>;
  if(name==='shield') return <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/><path d="m9 12 2 2 4-4"/></svg>;
  if(name==='spark') return <svg {...common}><path d="m12 3-1.4 4.1L6.5 8.5l4.1 1.4L12 14l1.4-4.1 4.1-1.4-4.1-1.4Z"/><path d="m18 15-.8 2.2L15 18l2.2.8L18 21l.8-2.2L21 18l-2.2-.8Z"/></svg>;
  return <svg {...common}><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></svg>;
}

export function ContactLandingPage(){
  const [intent,setIntent] = useState<Intent>('advertiser');
  const [name,setName] = useState('');
  const [email,setEmail] = useState('');
  const [company,setCompany] = useState('');
  const [message,setMessage] = useState('');
  const selected = useMemo(()=>intents.find(x=>x.key===intent) ?? intents[0],[intent]);

  const submit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`${selected.subject}${company ? ` — ${company}` : ''}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nCompany: ${company || 'Not provided'}\nInquiry type: ${selected.label}\n\nMessage:\n${message}`);
    window.location.href = `mailto:contact@boostrava.com?subject=${subject}&body=${body}`;
  };

  return <div className="br-contact">
    <style>{`
      .br-contact{--navy:#071226;--navy2:#0b1d3a;--ink:#10182b;--muted:#60708c;--blue:#2767ff;--blue2:#5b43ff;--cyan:#2dd4ff;--line:#dce6f5;--soft:#f5f8ff;--green:#0a9c71;background:#fff;color:var(--ink);font-family:inherit;overflow:hidden}
      .br-contact *{box-sizing:border-box}.br-contact a{text-decoration:none}.br-contact button,.br-contact input,.br-contact textarea{font:inherit}
      .brc-wrap{width:min(1180px,calc(100% - 40px));margin:0 auto}.brc-hero{position:relative;padding:92px 0 72px;background:radial-gradient(circle at 80% 15%,rgba(45,212,255,.17),transparent 30%),radial-gradient(circle at 20% 0,rgba(91,67,255,.26),transparent 32%),linear-gradient(135deg,#061124 0%,#0a1b37 58%,#101b4c 100%);color:#fff}
      .brc-hero:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:42px 42px;mask-image:linear-gradient(to bottom,#000,transparent 80%);pointer-events:none}
      .brc-hero-grid{position:relative;display:grid;grid-template-columns:1.05fr .95fr;gap:64px;align-items:center}.brc-kicker{display:inline-flex;align-items:center;gap:9px;padding:8px 12px;border:1px solid rgba(125,176,255,.28);background:rgba(255,255,255,.06);border-radius:999px;color:#cce1ff;font-size:12px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}.brc-kicker i{width:7px;height:7px;border-radius:50%;background:var(--cyan);box-shadow:0 0 16px var(--cyan)}
      .brc-hero h1{font-size:clamp(43px,6vw,72px);line-height:1.02;letter-spacing:-.045em;margin:22px 0 20px;max-width:760px}.brc-hero h1 span{background:linear-gradient(90deg,#fff 5%,#84dfff 52%,#9b8cff);background-clip:text;color:transparent}.brc-lead{font-size:18px;line-height:1.75;color:#c5d3e9;max-width:680px;margin:0}.brc-actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.brc-btn{display:inline-flex;align-items:center;justify-content:center;gap:9px;min-height:48px;padding:0 19px;border-radius:12px;border:1px solid transparent;font-weight:800;transition:transform .2s ease,box-shadow .2s ease,background .2s ease}.brc-btn:hover{transform:translateY(-2px)}.brc-btn.primary{background:linear-gradient(135deg,#2b6cff,#6549ff);color:#fff;box-shadow:0 13px 34px rgba(39,103,255,.28)}.brc-btn.ghost{color:#e9f3ff;border-color:rgba(255,255,255,.2);background:rgba(255,255,255,.06)}
      .brc-console{border:1px solid rgba(141,181,255,.22);background:linear-gradient(180deg,rgba(13,31,64,.92),rgba(5,18,39,.95));border-radius:24px;box-shadow:0 30px 80px rgba(0,0,0,.34);overflow:hidden}.brc-console-top{padding:14px 16px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(255,255,255,.09);font-size:12px;color:#9eb3d2}.brc-dots{display:flex;gap:6px}.brc-dots i{width:7px;height:7px;border-radius:50%;background:#3e5373}.brc-route{padding:18px}.brc-route-label{font-size:11px;text-transform:uppercase;letter-spacing:.12em;color:#7794ba;font-weight:800;margin-bottom:11px}.brc-route-card{display:flex;gap:12px;align-items:center;padding:14px;border:1px solid rgba(255,255,255,.09);border-radius:15px;background:rgba(255,255,255,.04);margin-bottom:10px}.brc-route-icon{width:40px;height:40px;display:grid;place-items:center;border-radius:12px;background:linear-gradient(135deg,rgba(39,103,255,.28),rgba(91,67,255,.28));color:#79ddff}.brc-route-card strong{display:block;font-size:14px;color:#f7fbff}.brc-route-card small{display:block;color:#8fa7c8;margin-top:3px;line-height:1.4}.brc-live{display:inline-flex;gap:7px;align-items:center;font-size:11px;color:#8eeac9;margin-top:7px}.brc-live i{width:7px;height:7px;background:#23d49b;border-radius:50%}
      .brc-section{padding:82px 0}.brc-section.soft{background:var(--soft)}.brc-section.dark{background:linear-gradient(135deg,#071226,#0b1a35);color:#fff}.brc-eyebrow{color:var(--blue);font-size:12px;font-weight:900;letter-spacing:.13em;text-transform:uppercase;margin-bottom:12px}.dark .brc-eyebrow{color:#65dcff}.brc-section h2{font-size:clamp(32px,4.4vw,50px);line-height:1.08;letter-spacing:-.035em;margin:0 0 16px}.brc-intro{font-size:17px;line-height:1.75;color:var(--muted);max-width:760px;margin:0}.dark .brc-intro{color:#b7c7df}.brc-grid3{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:34px}.brc-contact-card{background:#fff;border:1px solid var(--line);border-radius:20px;padding:24px;box-shadow:0 14px 42px rgba(12,35,75,.07);transition:transform .2s ease,box-shadow .2s ease}.brc-contact-card:hover{transform:translateY(-4px);box-shadow:0 20px 50px rgba(12,35,75,.11)}.brc-icon{width:48px;height:48px;display:grid;place-items:center;border-radius:14px;background:linear-gradient(135deg,#eaf3ff,#efebff);color:var(--blue);margin-bottom:18px}.brc-contact-card h3{font-size:20px;margin:0 0 8px}.brc-contact-card p{color:var(--muted);line-height:1.65;margin:0 0 14px}.brc-contact-card a{color:var(--blue);font-weight:800;overflow-wrap:anywhere}.brc-address{font-weight:700;color:#273752;line-height:1.55}
      .brc-intent-layout{display:grid;grid-template-columns:.82fr 1.18fr;gap:26px;align-items:start;margin-top:34px}.brc-intents{display:grid;gap:10px}.brc-intent{width:100%;text-align:left;border:1px solid var(--line);background:#fff;border-radius:16px;padding:16px;cursor:pointer;color:var(--ink);transition:.2s ease}.brc-intent:hover,.brc-intent.active{border-color:#8faeff;box-shadow:0 9px 28px rgba(39,103,255,.1);transform:translateY(-1px)}.brc-intent.active{background:linear-gradient(135deg,#f6f9ff,#f0efff)}.brc-intent strong{display:block;font-size:15px}.brc-intent span{display:block;font-size:13px;color:var(--muted);margin-top:4px;line-height:1.5}
      .brc-form-shell{background:#fff;border:1px solid var(--line);border-radius:24px;box-shadow:0 20px 65px rgba(16,41,86,.11);overflow:hidden}.brc-form-head{padding:24px 26px;background:linear-gradient(135deg,#0a1b38,#102553);color:#fff}.brc-form-head span{font-size:12px;color:#78dcff;font-weight:900;letter-spacing:.11em;text-transform:uppercase}.brc-form-head h3{font-size:27px;margin:7px 0}.brc-form-head p{color:#bbcae1;margin:0;line-height:1.6}.brc-form{padding:26px}.brc-fields{display:grid;grid-template-columns:1fr 1fr;gap:16px}.brc-field{display:grid;gap:7px}.brc-field.full{grid-column:1/-1}.brc-field label{font-size:13px;font-weight:800;color:#263753}.brc-field input,.brc-field textarea{width:100%;border:1px solid #d7e2f1;background:#fbfdff;color:#111b2e;border-radius:12px;padding:12px 13px;outline:none;transition:border-color .2s,box-shadow .2s}.brc-field input:focus,.brc-field textarea:focus{border-color:#6f8fff;box-shadow:0 0 0 4px rgba(39,103,255,.1)}.brc-field textarea{min-height:146px;resize:vertical}.brc-form-note{display:flex;align-items:flex-start;gap:9px;color:#667793;font-size:12px;line-height:1.5;margin:14px 0 18px}.brc-form-note svg{flex:0 0 auto;color:var(--green);margin-top:1px}.brc-submit{border:0;cursor:pointer;width:100%}
      .brc-trust-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:34px}.brc-trust{border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.045);border-radius:17px;padding:19px}.brc-trust svg{color:#64dcff}.brc-trust h3{font-size:16px;margin:13px 0 7px;color:#fff}.brc-trust p{font-size:13px;line-height:1.6;color:#aebfda;margin:0}
      .brc-links{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:30px}.brc-link-card{border:1px solid var(--line);border-radius:18px;padding:20px;background:#fff;color:var(--ink);transition:.2s ease}.brc-link-card:hover{transform:translateY(-3px);border-color:#a1b6ff;box-shadow:0 14px 32px rgba(22,52,104,.09)}.brc-link-card small{color:var(--blue);font-weight:900;letter-spacing:.08em;text-transform:uppercase}.brc-link-card strong{display:block;font-size:17px;margin:7px 0}.brc-link-card p{font-size:13px;color:var(--muted);line-height:1.55;margin:0}.brc-link-card .arr{display:inline-flex;margin-top:12px;color:var(--blue)}
      .brc-faq{display:grid;grid-template-columns:.72fr 1.28fr;gap:42px;margin-top:34px}.brc-faq-list{display:grid;gap:10px}.brc-faq details{background:#fff;border:1px solid var(--line);border-radius:15px;padding:0 18px}.brc-faq summary{list-style:none;cursor:pointer;font-weight:800;padding:17px 30px 17px 0;position:relative}.brc-faq summary::-webkit-details-marker{display:none}.brc-faq summary:after{content:"+";position:absolute;right:0;top:14px;font-size:22px;color:var(--blue)}.brc-faq details[open] summary:after{content:"–"}.brc-faq details p{color:var(--muted);line-height:1.7;margin:0 0 18px}
      .brc-final{position:relative;padding:74px 0;background:linear-gradient(135deg,#244fff,#6748f5);color:#fff}.brc-final-grid{display:flex;align-items:center;justify-content:space-between;gap:30px}.brc-final h2{font-size:clamp(31px,4.2vw,48px);margin:0 0 10px;letter-spacing:-.035em}.brc-final p{margin:0;color:#e7ebff;max-width:650px;line-height:1.65}.brc-final .brc-btn.primary{background:#fff;color:#173b91;box-shadow:none}.brc-final .brc-btn.ghost{border-color:rgba(255,255,255,.38)}
      .br-contact :focus-visible{outline:3px solid rgba(45,212,255,.7);outline-offset:3px}
      @media(max-width:900px){.brc-hero-grid,.brc-intent-layout,.brc-faq{grid-template-columns:1fr}.brc-hero{padding-top:70px}.brc-grid3,.brc-links{grid-template-columns:1fr 1fr}.brc-trust-grid{grid-template-columns:1fr 1fr}.brc-console{max-width:650px}.brc-final-grid{align-items:flex-start;flex-direction:column}}
      @media(max-width:620px){.brc-wrap{width:min(100% - 28px,1180px)}.brc-section{padding:64px 0}.brc-hero{padding:60px 0 56px}.brc-grid3,.brc-links,.brc-trust-grid,.brc-fields{grid-template-columns:1fr}.brc-field.full{grid-column:auto}.brc-actions{flex-direction:column}.brc-btn{width:100%}.brc-form,.brc-form-head{padding:20px}.brc-contact-card{padding:20px}}
      @media(prefers-reduced-motion:reduce){.br-contact *{scroll-behavior:auto!important;transition:none!important;animation:none!important}}
    `}</style>

    <section className="brc-hero">
      <div className="brc-wrap brc-hero-grid">
        <div>
          <div className="brc-kicker"><i/>Contact Boost RAVA</div>
          <h1>Talk to the team behind <span>your next advertising move.</span></h1>
          <p className="brc-lead">Whether you are planning a campaign, monetizing inventory, exploring CTV or DOOH, discussing a partnership, or solving a technical question, start with the right conversation.</p>
          <div className="brc-actions">
            <a className="brc-btn primary" href="#contact-form">Choose Your Inquiry <Icon name="arrow"/></a>
            <a className="brc-btn ghost" href="https://panel.boostrava.com/#/register">Create an Account</a>
          </div>
        </div>
        <div className="brc-console" aria-label="Contact routing preview">
          <div className="brc-console-top"><div className="brc-dots"><i/><i/><i/></div><span>Boost RAVA / Contact Router</span></div>
          <div className="brc-route">
            <div className="brc-route-label">Select the right path</div>
            <div className="brc-route-card"><div className="brc-route-icon"><Icon name="spark"/></div><div><strong>Advertiser & campaign</strong><small>Planning, formats, targeting, creative and measurement.</small></div></div>
            <div className="brc-route-card"><div className="brc-route-icon"><Icon name="shield"/></div><div><strong>Publisher & partner</strong><small>Monetization, inventory, supply and strategic relationships.</small></div></div>
            <div className="brc-route-card"><div className="brc-route-icon"><Icon name="send"/></div><div><strong>Technical & platform</strong><small>Ad serving, programmatic infrastructure, tracking and implementation.</small></div></div>
            <div className="brc-live"><i/>Human-first contact experience</div>
          </div>
        </div>
      </div>
    </section>

    <section className="brc-section">
      <div className="brc-wrap">
        <div className="brc-eyebrow">Direct contact</div>
        <h2>Reach Boost RAVA the way that works for you.</h2>
        <p className="brc-intro">Use the details currently published by Boost RAVA, or route your enquiry through the guided form below.</p>
        <div className="brc-grid3">
          <article className="brc-contact-card"><div className="brc-icon"><Icon name="mail"/></div><h3>Email</h3><p>Best for campaign briefs, partnership notes and technical context.</p><a href="mailto:contact@boostrava.com">contact@boostrava.com</a></article>
          <article className="brc-contact-card"><div className="brc-icon"><Icon name="phone"/></div><h3>Phone</h3><p>Call during normal business hours for direct enquiries.</p><a href="tel:+8801713426386">+88 01713-426386</a></article>
          <article className="brc-contact-card"><div className="brc-icon"><Icon name="pin"/></div><h3>Dhaka office</h3><p>Office address currently listed on the Boost RAVA contact page.</p><div className="brc-address">STITBD, Lake Circus Road, Level-2, 25/2, Kalabagan, Dhanmondi, Dhaka-1205</div></article>
        </div>
      </div>
    </section>

    <section className="brc-section soft" id="contact-form">
      <div className="brc-wrap">
        <div className="brc-eyebrow">Guided enquiry</div>
        <h2>Tell us what you are trying to accomplish.</h2>
        <p className="brc-intro">Pick a route first. The form will prepare a structured email so your enquiry arrives with useful context without pretending a backend ticketing integration exists.</p>
        <div className="brc-intent-layout">
          <div className="brc-intents" role="tablist" aria-label="Inquiry type">
            {intents.map(item=><button key={item.key} type="button" role="tab" aria-selected={intent===item.key} className={`brc-intent ${intent===item.key?'active':''}`} onClick={()=>setIntent(item.key)}><strong>{item.label}</strong><span>{item.copy}</span></button>)}
          </div>
          <div className="brc-form-shell">
            <div className="brc-form-head"><span>{selected.label} inquiry</span><h3>{selected.title}</h3><p>{selected.copy}</p></div>
            <form className="brc-form" onSubmit={submit}>
              <div className="brc-fields">
                <div className="brc-field"><label htmlFor="brc-name">Full name *</label><input id="brc-name" value={name} onChange={e=>setName(e.target.value)} autoComplete="name" required placeholder="Your name"/></div>
                <div className="brc-field"><label htmlFor="brc-email">Email *</label><input id="brc-email" value={email} onChange={e=>setEmail(e.target.value)} type="email" autoComplete="email" required placeholder="you@company.com"/></div>
                <div className="brc-field full"><label htmlFor="brc-company">Company / organization</label><input id="brc-company" value={company} onChange={e=>setCompany(e.target.value)} autoComplete="organization" placeholder="Company name"/></div>
                <div className="brc-field full"><label htmlFor="brc-message">What do you need help with? *</label><textarea id="brc-message" value={message} onChange={e=>setMessage(e.target.value)} required placeholder={`Describe your ${selected.label.toLowerCase()} requirement, market, timeline or technical context.`}/></div>
              </div>
              <div className="brc-form-note"><Icon name="check"/><span>This form opens your email app with the enquiry pre-filled and sends nothing automatically. Do not include passwords, secret keys or other sensitive credentials.</span></div>
              <button className="brc-btn primary brc-submit" type="submit">Prepare Email to Boost RAVA <Icon name="send"/></button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <section className="brc-section dark">
      <div className="brc-wrap">
        <div className="brc-eyebrow">A clearer first conversation</div>
        <h2>Useful context helps the right team respond faster.</h2>
        <p className="brc-intro">Share enough detail to understand the business or technical goal, while keeping confidential credentials out of the message.</p>
        <div className="brc-trust-grid">
          <article className="brc-trust"><Icon name="check"/><h3>Campaign enquiries</h3><p>Include objective, target market, format, approximate timing and any known inventory requirement.</p></article>
          <article className="brc-trust"><Icon name="check"/><h3>Publisher enquiries</h3><p>Include property or inventory type, market and what you want to monetize or integrate.</p></article>
          <article className="brc-trust"><Icon name="check"/><h3>CTV / DOOH</h3><p>Include markets, campaign dates and whether you need partner-powered CTV or screen-based DOOH inventory.</p></article>
          <article className="brc-trust"><Icon name="shield"/><h3>Technical safety</h3><p>Share non-sensitive logs or error context only. Never send credentials or private keys through a general enquiry.</p></article>
        </div>
      </div>
    </section>

    <section className="brc-section">
      <div className="brc-wrap">
        <div className="brc-eyebrow">Explore before you contact</div>
        <h2>Go directly to the product area you need.</h2>
        <p className="brc-intro">These links keep the contact page useful without duplicating the detailed product pages.</p>
        <div className="brc-links">
          <a className="brc-link-card" href="/advertiser/"><small>Advertisers</small><strong>Campaign platform</strong><p>Plan, build and manage advertising campaigns.</p><span className="arr"><Icon name="arrow"/></span></a>
          <a className="brc-link-card" href="/publisher/"><small>Publishers</small><strong>Monetization</strong><p>Explore publisher inventory and monetization workflows.</p><span className="arr"><Icon name="arrow"/></span></a>
          <a className="brc-link-card" href="/ai-programmatic-advertising/"><small>AI Programmatic</small><strong>Intelligence layer</strong><p>See the AI programmatic planning and optimization positioning.</p><span className="arr"><Icon name="arrow"/></span></a>
          <a className="brc-link-card" href="/programmatic-infrastructure/"><small>Infrastructure</small><strong>Ad serving & RTB</strong><p>Explore programmatic infrastructure and technical architecture.</p><span className="arr"><Icon name="arrow"/></span></a>
          <a className="brc-link-card" href="/ctv/"><small>CTV</small><strong>Connected TV</strong><p>Explore partner-powered CTV opportunities by available market.</p><span className="arr"><Icon name="arrow"/></span></a>
          <a className="brc-link-card" href="/dooh/"><small>DOOH</small><strong>Digital out-of-home</strong><p>Explore digital screen and DOOH campaign concepts.</p><span className="arr"><Icon name="arrow"/></span></a>
        </div>
      </div>
    </section>

    <section className="brc-section soft">
      <div className="brc-wrap brc-faq">
        <div><div className="brc-eyebrow">Questions before you contact</div><h2>Quick answers for common enquiries.</h2><p className="brc-intro">Short, factual answers help you choose the right Boost RAVA contact path before sending an enquiry.</p></div>
        <div className="brc-faq-list">{faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div>
    </section>

    <section className="brc-final">
      <div className="brc-wrap brc-final-grid">
        <div><h2>Ready to turn the conversation into a campaign?</h2><p>Create an advertiser account when you are ready to move from questions to campaign setup, or email the team when you need guidance first.</p></div>
        <div className="brc-actions"><a className="brc-btn primary" href="https://panel.boostrava.com/#/register">Create Advertiser Account</a><a className="brc-btn ghost" href="mailto:contact@boostrava.com">Email Boost RAVA</a></div>
      </div>
    </section>
  </div>;
}
