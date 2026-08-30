import type { PageRecord } from '@/lib/content';
import { HomepageHero } from './HomepageHero';
import { HomeExperienceTabs } from './HomeExperienceTabs';
import { CapabilityCarousel } from './CapabilityCarousel';
import { HomePlanningTools } from './HomePlanningTools';

export function HomePageRenderer({page}:{page:PageRecord}) {
  return (
    <>
      <HomepageHero />
      <div className="br-home-body">
        {page.homePreTabsHtml ? <div dangerouslySetInnerHTML={{__html: page.homePreTabsHtml}} /> : null}
        <HomeExperienceTabs />
        {page.homePostTabsHtml ? <div dangerouslySetInnerHTML={{__html: page.homePostTabsHtml}} /> : null}
        <CapabilityCarousel />
        <HomePlanningTools />
        {page.homeAfterHtml ? <div dangerouslySetInnerHTML={{__html: page.homeAfterHtml}} /> : null}
      </div>
    </>
  );
}
