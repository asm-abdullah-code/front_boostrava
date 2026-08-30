import { SharedHeader } from './SharedHeader';
import { SharedFooter } from './SharedFooter';
import { PageScripts } from './PageScripts';
import type { PageRecord } from '@/lib/content';
import { HomePageRenderer } from './home/HomePageRenderer';
import { AdvertiserLandingPage } from './advertiser/AdvertiserLandingPage';
import { PublisherLandingPage } from './publisher/PublisherLandingPage';
import { RichMediaLandingPage } from './richmedia/RichMediaLandingPage';
import { AIProgrammaticLandingPage } from './AIProgrammaticLandingPage';
import { HTML5LandingPage } from './html5/HTML5LandingPage';
import { ContextualLandingPage } from './contextual/ContextualLandingPage';
import { ProgrammaticInfrastructureLandingPage } from './infrastructure/ProgrammaticInfrastructureLandingPage';
import { CTVLandingPage } from './ctv/CTVLandingPage';
import { DOOHLandingPage } from './dooh/DOOHLandingPage';
import { ContactLandingPage } from './contact/ContactLandingPage';
import { LegalPolicyPage } from './legal/LegalPolicyPage';
import { AnswerEnginePanel, SiteBreadcrumbs, SupplementalSchema } from './SeoEnhancements';
import { BangladeshLandingPage } from './bangladesh/BangladeshLandingPage';

export function PageRenderer({page}:{page:PageRecord}){
  const legalNative = ['privacy-policy','terms-condition','payment-policy','cookie-policy'].includes(page.route);
  const bangladeshNative = ['programmatic-advertising-bangladesh','ai-contextual-advertising-bangladesh','rich-media-html5-advertising-bangladesh','publisher-monetization-bangladesh','ctv-dooh-advertising-bangladesh'].includes(page.route);
  const sourceNative = legalNative || bangladeshNative || page.route === 'advertiser' || page.route === 'publisher' || page.route === 'rich-media' || page.route === 'ai-programmatic-advertising' || page.route === 'html5-ad-formats' || page.route === 'contextual-advertising' || page.route === 'programmatic-infrastructure' || page.route === 'ctv' || page.route === 'dooh' || page.route === 'contact';
  return <div className={`page-shell ${page.bodyClass}`} data-source-reconstructed="true" data-page-route={page.route || 'home'}>
    {!sourceNative && page.styles.map((css,i)=><style key={i} dangerouslySetInnerHTML={{__html:css}} />)}
    {page.jsonLd.map((raw,i)=><script key={`ld-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{__html:raw}} />)}
    <SupplementalSchema page={page} />
    <SharedHeader />
    {page.route !== '' && <SiteBreadcrumbs page={page} />}
    <main>{page.route === '' ? <HomePageRenderer page={page} /> : page.route === 'advertiser' ? <AdvertiserLandingPage /> : page.route === 'publisher' ? <PublisherLandingPage /> : page.route === 'rich-media' ? <RichMediaLandingPage /> : page.route === 'ai-programmatic-advertising' ? <AIProgrammaticLandingPage /> : page.route === 'html5-ad-formats' ? <HTML5LandingPage /> : page.route === 'contextual-advertising' ? <ContextualLandingPage /> : page.route === 'programmatic-infrastructure' ? <ProgrammaticInfrastructureLandingPage /> : page.route === 'ctv' ? <CTVLandingPage /> : page.route === 'dooh' ? <DOOHLandingPage /> : page.route === 'contact' ? <ContactLandingPage /> : bangladeshNative ? <BangladeshLandingPage route={page.route as 'programmatic-advertising-bangladesh'|'ai-contextual-advertising-bangladesh'|'rich-media-html5-advertising-bangladesh'|'publisher-monetization-bangladesh'|'ctv-dooh-advertising-bangladesh'} /> : legalNative ? <LegalPolicyPage route={page.route} /> : <div dangerouslySetInnerHTML={{__html:page.mainHtml}} />}{page.route !== '' && !sourceNative && <AnswerEnginePanel page={page} />}
    </main>
    <SharedFooter />
    {!sourceNative && <PageScripts scripts={page.scripts} />}
  </div>;
}
