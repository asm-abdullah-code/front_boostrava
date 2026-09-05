import type { PageRecord } from './content';

export type Crumb = { name: string; href: string };
export type AnswerItem = { question: string; answer: string };

const siteUrl = 'https://www.boostrava.com';
const organizationId = `${siteUrl}/#organization`;
const websiteId = `${siteUrl}/#website`;

const solutionRoutes = new Set([
  'ai-programmatic-advertising','contextual-advertising','rich-media','html5-ad-formats',
  'programmatic-infrastructure','ctv','dooh'
]);
const bangladeshRoutes = new Set([
  'programmatic-advertising-bangladesh','ai-contextual-advertising-bangladesh',
  'rich-media-html5-advertising-bangladesh','publisher-monetization-bangladesh',
  'ctv-dooh-advertising-bangladesh'
]);
const legalRoutes = new Set(['privacy-policy','terms-condition','payment-policy','cookie-policy','opt-out']);
const companyRoutes = new Set(['about','careers','our-team']);

const labels: Record<string,string> = {
  advertiser: 'Advertisers',
  publisher: 'Publishers',
  'ai-programmatic-advertising': 'AI Programmatic Advertising',
  'contextual-advertising': 'Contextual Advertising',
  'rich-media': 'Rich Media Advertising',
  'html5-ad-formats': 'HTML5 Advertising',
  'programmatic-infrastructure': 'Programmatic Infrastructure',
  ctv: 'Connected TV Advertising',
  dooh: 'DOOH Advertising',
  about: 'About Boost RAVA',
  contact: 'Contact',
  careers: 'Careers',
  'our-team': 'Our Team',
  blog: 'Blog & Insights',
  'privacy-policy': 'Privacy Policy',
  'terms-condition': 'Terms & Conditions',
  'payment-policy': 'Payment Policy',
  'cookie-policy': 'Cookie Policy',
  'opt-out': 'Advertising Privacy Choices',
  'programmatic-advertising-bangladesh': 'Programmatic Advertising in Bangladesh',
  'ai-contextual-advertising-bangladesh': 'AI & Contextual Advertising in Bangladesh',
  'rich-media-html5-advertising-bangladesh': 'Rich Media & HTML5 Advertising in Bangladesh',
  'publisher-monetization-bangladesh': 'Publisher Monetization in Bangladesh',
  'ctv-dooh-advertising-bangladesh': 'Screen Advertising in Bangladesh',
  schedule: 'Schedule a Consultation',
  'case-studies': 'Campaign Use Cases',
};

export function breadcrumbsFor(page: PageRecord): Crumb[] {
  if (!page.route) return [];
  const crumbs: Crumb[] = [{name:'Home',href:'/'}];
  if (solutionRoutes.has(page.route)) crumbs.push({name:'Solutions',href:'/advertiser/'});
  if (bangladeshRoutes.has(page.route)) crumbs.push({name:'Bangladesh',href:'/programmatic-advertising-bangladesh/'});
  if (legalRoutes.has(page.route)) crumbs.push({name:'Legal & Privacy',href:'/privacy-policy/'});
  if (companyRoutes.has(page.route)) crumbs.push({name:'Company',href:'/about/'});
  if (page.route === 'case-studies') crumbs.push({name:'Resources',href:'/blog/'});
  if (page.route === 'schedule') crumbs.push({name:'Contact',href:'/contact/'});
  if (page.route.startsWith('blog/')) {
    crumbs.push({name:'Blog & Insights',href:'/blog/'});
  }
  const fallback = page.route.split('/').pop()?.replace(/-/g,' ') || page.route;
  crumbs.push({name: labels[page.route] || page.title.split('|')[0].trim() || fallback, href: `/${page.route}/`});
  return dedupeConsecutive(crumbs);
}

function dedupeConsecutive(items:Crumb[]){
  return items.filter((item,index)=>index===0 || item.href !== items[index-1].href);
}

export const answerMap: Record<string,AnswerItem[]> = {
  advertiser: [
    {question:'What is Boost RAVA for advertisers?',answer:'Boost RAVA gives advertisers a programmatic campaign workspace for campaign setup, supported targeting controls, creative production, budget and schedule configuration, delivery and reporting.'},
    {question:'How do I create and launch a campaign?',answer:'Create an advertiser account, configure the campaign, choose supported targeting, add or build the creative, set budget and schedule, review the setup and launch when the campaign is ready.'},
    {question:'What targeting options are available?',answer:'The current advertiser workflow supports location, device, operating system, browser, network and day-and-time controls. Advanced audience and remarketing options are shown only where the production data path is configured.'},
    {question:'Which advertising formats can I use?',answer:'Boost RAVA supports campaign workflows for display, video, native creative, HTML5 rich media and connected-screen experiences such as CTV and DOOH where inventory and campaign configuration support them.'},
    {question:'Can I build HTML5 and rich media creatives?',answer:'Yes. The Creative Studio includes HTML5 and rich-media workflows with formats such as carousel, parallax, expandable, interactive and 3D experiences, plus responsive sizing and preview tooling.'},
    {question:'How are campaign budgets and schedules controlled?',answer:'Advertisers can configure budget logic and campaign start and end scheduling in the campaign setup flow, keeping spend and flight timing connected to the same workflow.'},
    {question:'How does conversion tracking work?',answer:'The advertiser tracking area includes S2S postback conversion tracking. Destination URL tools also support UTM-ready tracking. Other third-party integrations are not presented as native until their production integration is verified.'},
    {question:'What campaign performance can I measure?',answer:'Reporting can surface delivery and cost metrics such as impressions, clicks, CTR and spend. Conversion, CPA, revenue and ROAS views depend on conversion tracking and the required reporting data being available.'},
    {question:'Does Boost RAVA support programmatic and auction-based delivery?',answer:'Boost RAVA is built around automated campaign buying and auction-aware delivery workflows. This page does not claim exchange-level connectivity that has not been independently verified.'},
    {question:'Can campaigns target Bangladesh and other markets?',answer:'Location targeting can be configured for campaigns. Actual delivery and scale in Bangladesh or international markets depend on available publisher inventory and the targeting selected for the campaign.'},
    {question:'How do I calculate CPM for an advertising campaign?',answer:'CPM equals total ad spend divided by impressions, multiplied by 1,000. For example, 100 dollars spent for 50,000 impressions equals a 2 dollar CPM.'},
    {question:'How many impressions can I buy with a given budget?',answer:'Estimated impressions equal budget divided by CPM, multiplied by 1,000. A 500 dollar budget at a 2.50 dollar CPM estimates about 200,000 impressions before delivery differences, fees or inventory constraints.'},
    {question:'How do I calculate CTR and CPC?',answer:'CTR equals clicks divided by impressions multiplied by 100. CPC equals total spend divided by clicks. These calculations help advertisers compare traffic efficiency across campaigns.'},
    {question:'How do I calculate CPA and ROAS?',answer:'CPA equals ad spend divided by conversions. ROAS equals attributed revenue divided by ad spend. A ROAS of 4 means four units of tracked revenue for each unit of ad spend.'}
  ],
  publisher: [
    {question:'What is eCPM?',answer:'eCPM expresses revenue per 1,000 impressions. For realized data, eCPM equals revenue divided by impressions multiplied by 1,000.'},
    {question:'How do I estimate publisher ad revenue?',answer:'A planning estimate can multiply filled impressions by eCPM and divide by 1,000, then apply the publisher revenue share if the commercial model uses one. Actual earnings depend on valid measured delivery and demand.'},
    {question:'How do I calculate fill rate?',answer:'Fill rate is filled impressions divided by eligible ad opportunities multiplied by 100. It is not a guaranteed rate.'},
    {question:'How many impressions do I need for a revenue target?',answer:'Divide the required gross revenue by eCPM and multiply by 1,000. If a publisher revenue share applies, first convert the publisher target into required gross revenue.'}
  ],
  'rich-media': [
    {question:'What rich media formats does Boost RAVA support?',answer:'The current Rich Media ad model includes Side Banner, Magic Scroller, Side Folding, Scroller Floating, Footer, L Shape, Full Page, Half Popup and Pop Banner.'},
    {question:'What rich media sizes are supported?',answer:'The Rich Media page declares seven standard canvases: 300×250, 728×90, 970×250, 300×600, 160×600, 320×50 and 320×100. Some named formats are format-defined, responsive or viewport-led rather than fixed to one pixel size.'}
  ],
  'html5-ad-formats': [
    {question:'What HTML5 ad sizes does Boost RAVA support?',answer:'Boost RAVA uses a broader standard HTML5 display-size library. When an HTML5 creative is intended for Rich Media use, the size finder limits recommendations to the seven Rich Media canvases declared on the Rich Media page.'},
    {question:'Can HTML5 ads be responsive?',answer:'HTML5 supports responsive creative behavior, but each selected campaign canvas and device context should still be previewed and validated before launch.'}
  ],
  'contextual-advertising': [
    {question:'What is contextual advertising?',answer:'Contextual advertising uses the meaning, topic, category, keywords or environment of current content as signals for advertising relevance.'},
    {question:'How should I plan contextual targeting?',answer:'Start with the product, objective, market and brand-safety requirements, then define target themes and exclusions and validate the available taxonomy, inventory and reporting before activation.'}
  ],
  about: [
    {question:'What is Boost RAVA?',answer:'Boost RAVA is an advertising technology platform for advertisers and publishers, with programmatic advertising, contextual advertising, creative formats, reporting and supported premium-screen media workflows.'},
    {question:'Who is Boost RAVA built for?',answer:'Boost RAVA is built for advertisers that need measurable digital media workflows and publishers that want to manage and monetize eligible advertising inventory.'}
  ],
  careers: [
    {question:'What kind of company is Boost RAVA?',answer:'Boost RAVA operates in advertising technology, including programmatic media, publisher monetization, creative technology and measurement.'},
    {question:'How can I explore roles at Boost RAVA?',answer:'Use the Careers page for current role information and the Contact page for a verified communication path when a suitable opening or application route is available.'}
  ],
  'our-team': [
    {question:'Who works on Boost RAVA?',answer:'The Boost RAVA team page introduces the people presented by the company for its advertising technology, product and business operations.'},
    {question:'How can I contact the Boost RAVA team?',answer:'Use the official Contact page to route advertiser, publisher, partnership, technical or general enquiries.'}
  ],
  blog: [
    {question:'What does the Boost RAVA blog cover?',answer:'The Boost RAVA blog publishes practical material about programmatic advertising, real-time bidding, publisher monetization, CTV, brand safety and related AdTech topics.'},
    {question:'Who are the insights for?',answer:'The articles are intended for advertisers, publishers, agencies and teams evaluating digital advertising technology and media strategy.'}
  ],
  'opt-out': [
    {question:'What are advertising privacy choices?',answer:'Advertising privacy choices are controls or requests that can affect how supported advertising technologies use cookies, identifiers or other signals, subject to the implementation and applicable law.'},
    {question:'Will every advertising signal disappear after a privacy choice?',answer:'Not necessarily. Some data may still be processed for security, fraud prevention, measurement, legal obligations or strictly necessary service functions where permitted.'}
  ],
  'programmatic-advertising-bangladesh': [
    {question:'What is programmatic advertising in Bangladesh?',answer:'Programmatic advertising uses software and automated decisioning to buy or deliver eligible digital advertising inventory. In Bangladesh, availability depends on publisher inventory, campaign targeting, formats and the active supply path.'},
    {question:'Can Bangladesh businesses use Boost RAVA for programmatic campaigns?',answer:'Yes. Bangladesh advertisers can plan eligible campaigns through Boost RAVA, subject to account, inventory, targeting, format and market availability.'},
    {question:'Can a Bangladesh advertiser reach international inventory?',answer:'International delivery can be explored where supported publisher or partner inventory is available; market coverage is not guaranteed for every campaign.'}
  ],
  'ai-contextual-advertising-bangladesh': [
    {question:'What is contextual advertising?',answer:'Contextual advertising matches advertising opportunities to the content or environment where an ad may appear, using signals such as topic, category, keywords or other supported contextual information.'},
    {question:'How can AI support contextual advertising?',answer:'AI can assist with content understanding, categorization, recommendations or decision support where those capabilities are implemented; it should not be interpreted as a guaranteed performance engine.'},
    {question:'Does Boost RAVA guarantee Bengali-language AI understanding?',answer:'No. Bengali or multilingual AI capability should only be treated as available when the relevant production implementation is verified.'}
  ],
  'rich-media-html5-advertising-bangladesh': [
    {question:'What is HTML5 advertising?',answer:'HTML5 advertising uses web technologies to build animated or interactive ad creatives that can adapt to supported digital placements and standard ad sizes.'},
    {question:'What is the difference between HTML5 and rich media?',answer:'HTML5 describes a creative technology, while rich media describes higher-impact interactive advertising experiences that may use HTML5 and additional interaction patterns.'},
    {question:'Can Bangladesh advertisers use these formats?',answer:'Yes, where the selected campaign, publisher inventory, creative specification and delivery environment support the requested format.'}
  ],
  'publisher-monetization-bangladesh': [
    {question:'How can publishers in Bangladesh monetize websites?',answer:'Eligible publishers can add approved properties and ad units, install supported ad-serving integrations and earn from valid monetizable advertising activity when demand is available.'},
    {question:'Is publisher revenue guaranteed?',answer:'No. Revenue depends on valid traffic, inventory quality, demand, format, placement, market conditions and policy compliance.'},
    {question:'What data should publishers expect?',answer:'Where supported, publisher reporting can include impressions, clicks, CTR, fill or delivery signals, eCPM or CPM-related metrics and revenue. Availability varies by implementation.'}
  ],
  'ctv-dooh-advertising-bangladesh': [
    {question:'What is this Bangladesh screen advertising page for?',answer:'This page explains the Bangladesh activation path for two different screen channels: partner-powered Connected TV for buyers and DOOH screen onboarding for media owners. The dedicated CTV and DOOH pages remain the deeper channel references.'},
    {question:'Can Bangladesh advertisers use CTV advertising?',answer:'Bangladesh advertisers can explore Connected TV campaigns where eligible partner-powered inventory is available. Market, format, frequency and measurement options are confirmed before activation.'},
    {question:'What does a DOOH screen need before it can be programmatic?',answer:'The screen needs a compatible digital-signage CMS or player plus a programmatic adapter or integration bridge that can identify the device, request eligible ads, cache and play media, and return supported playback evidence.'},
    {question:'What metadata is required for a DOOH screen?',answer:'Typical onboarding data includes screen and device identifiers, venue identity, latitude and longitude, venue type, resolution, aspect ratio, orientation, operating hours, supported media and measurement identifiers.'},
    {question:'Does every digital signage CMS work automatically with Boost RAVA?',answer:'No. CMS and player compatibility must be verified. If a native connector is unavailable, a Boost RAVA-compatible adapter or bridge must be configured before the screen is treated as programmatic inventory.'},
    {question:'How is DOOH playback verified?',answer:'Where supported, proof-of-play or playback logs should identify the screen, creative, timestamp and playback event. A screen should not be treated as production-ready until the integration and reporting path are tested.'},
    {question:'Where can Boost RAVA plan DOOH in Bangladesh?',answer:'Eligible screen inventory can be planned in environments such as stations and transit locations, markets and retail areas, airports and other approved high-footfall public spaces when the screen owner, venue and integration are available.'},
    {question:'Does Boost RAVA own all CTV or DOOH inventory?',answer:'No. CTV availability may be partner-powered, while DOOH inventory may come from screen owners, publishers or partners. Specific screens, reach, rates and market coverage are not guaranteed.'}
  ],
  schedule: [
    {question:'What can I discuss with Boost RAVA?',answer:'A consultation can cover advertiser campaigns, publisher monetization, programmatic infrastructure, creative formats, CTV, DOOH, partnerships or technical requirements.'},
    {question:'Does scheduling guarantee campaign inventory or pricing?',answer:'No. Inventory, pricing, targeting and delivery are confirmed separately based on the relevant campaign and available supply.'}
  ],
  'case-studies': [
    {question:'Are the examples on this page guaranteed results?',answer:'No. Planning examples and use cases illustrate possible campaign structures or measurement approaches and should not be interpreted as guaranteed performance.'},
    {question:'What should a real case study include?',answer:'A verified case study should identify the real campaign context, time period, measurement method and supported outcome data without inventing performance numbers.'}
  ]
};

function schemaTypes(page:PageRecord): Set<string>{
  const set = new Set<string>();
  for(const raw of page.jsonLd || []){
    try{
      const json=JSON.parse(raw);
      const nodes=Array.isArray(json?.['@graph'])?json['@graph']:[json];
      for(const node of nodes){
        const t=node?.['@type'];
        if(Array.isArray(t)) t.forEach((x:string)=>set.add(x)); else if(typeof t==='string') set.add(t);
      }
    }catch{}
  }
  return set;
}

export function supplementalSchema(page:PageRecord): object[]{
  if(!page.route) return [];
  const types=schemaTypes(page);
  const nodes:object[]=[];
  if(!types.has('Organization')) nodes.push({
    '@context':'https://schema.org','@type':'Organization','@id':organizationId,
    name:'Boost RAVA',url:`${siteUrl}/`,logo:`${siteUrl}/assets/images/logo/Logo-03.png`,
    description:'Boost RAVA is an advertising technology platform for advertisers and publishers.'
  });
  if(!types.has('WebSite')) nodes.push({
    '@context':'https://schema.org','@type':'WebSite','@id':websiteId,
    url:`${siteUrl}/`,name:'Boost RAVA',publisher:{'@id':organizationId},inLanguage:'en'
  });
  if(!types.has('BreadcrumbList')){
    const crumbs=breadcrumbsFor(page);
    nodes.push({
      '@context':'https://schema.org','@type':'BreadcrumbList',
      itemListElement:crumbs.map((c,i)=>({'@type':'ListItem',position:i+1,name:c.name,item:`${siteUrl}${c.href}`}))
    });
  }
  const answers=answerMap[page.route];
  if(answers?.length && !bangladeshRoutes.has(page.route) && !types.has('FAQPage')) nodes.push({
    '@context':'https://schema.org','@type':'FAQPage',
    mainEntity:answers.map(item=>({'@type':'Question',name:item.question,acceptedAnswer:{'@type':'Answer',text:item.answer}}))
  });
  if(page.route === 'advertiser' && !types.has('WebApplication')) nodes.push({
    '@context':'https://schema.org','@type':'WebApplication',
    name:'Boost RAVA Programmatic Advertising Calculator',
    url:`${siteUrl}/advertiser/#bradv-calculator-title`,
    applicationCategory:'BusinessApplication',
    operatingSystem:'Web',
    browserRequirements:'Requires a modern web browser with JavaScript enabled',
    description:'A programmatic advertising planning calculator for CPM, impressions, CTR, clicks, CPC, conversions, CPA, revenue, ROAS and conversion-goal budget estimates.',
    featureList:['CPM calculation','Impression estimate from budget and CPM','Click and CPC estimate','Conversion and CPA estimate','Revenue and ROAS estimate','Reverse budget planning from target conversions and CPA'],
    publisher:{'@id':organizationId}
  });
  const toolSchemas: Record<string,{name:string,url:string,description:string,features:string[]}> = {
    publisher:{name:'Boost RAVA Publisher Revenue Calculator',url:`${siteUrl}/publisher/#revenue-calculator`,description:'A publisher planning calculator for ad opportunities, eligible impressions, fill rate, eCPM, gross revenue, publisher revenue, pageview RPM and reverse revenue-target planning.',features:['Ad opportunity estimate','Fill-rate modeling','eCPM revenue estimate','Publisher revenue-share estimate','Revenue per 1,000 pageviews','Reverse filled-impression planning']},
    'rich-media':{name:'Boost RAVA Rich Media Format Finder',url:`${siteUrl}/rich-media/#format-finder`,description:'A Rich Media format finder using the format families and seven standard Rich Media canvases declared by Boost RAVA.',features:['Device-aware Rich Media canvas suggestions','Rich Media format-family suggestions','Format-defined and viewport-led qualification']},
    'html5-ad-formats':{name:'Boost RAVA HTML5 Rich Media Size Finder',url:`${siteUrl}/html5-ad-formats/#size-finder`,description:'An HTML5 size finder that limits Rich Media-oriented recommendations to Boost RAVA’s declared Rich Media canvas set.',features:['Desktop Rich Media canvas suggestions','Tablet Rich Media canvas suggestions','Mobile Rich Media canvas suggestions']},
    'contextual-advertising':{name:'Boost RAVA Contextual Targeting Planner',url:`${siteUrl}/contextual-advertising/#contextual-planner`,description:'A transparent rule-based contextual planning tool for campaign themes, exclusions, market and creative direction.',features:['Topic planning','Brand-safety exclusions','Market selection','Campaign-objective planning','Format direction']}
  };
  const tool=toolSchemas[page.route];
  if(tool && !types.has('WebApplication')) nodes.push({'@context':'https://schema.org','@type':'WebApplication',name:tool.name,url:tool.url,applicationCategory:'BusinessApplication',operatingSystem:'Web',browserRequirements:'Requires a modern web browser with JavaScript enabled',description:tool.description,featureList:tool.features,publisher:{'@id':organizationId}});
  return nodes;
}

export const defaultSocialImage = '/assets/images/seo/boost-rava-social-default.png';
