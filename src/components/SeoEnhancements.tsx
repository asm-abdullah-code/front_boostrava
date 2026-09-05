import type { PageRecord } from '@/lib/content';
import { answerMap, breadcrumbsFor, supplementalSchema } from '@/lib/seo';

export function SupplementalSchema({page}:{page:PageRecord}){
  return <>{supplementalSchema(page).map((node,i)=><script key={`supp-schema-${i}`} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(node)}} />)}</>;
}

export function SiteBreadcrumbs({page}:{page:PageRecord}){
  const crumbs=breadcrumbsFor(page);
  if(!crumbs.length) return null;
  return <nav className="brseo-breadcrumb" aria-label="Breadcrumb">
    <ol>{crumbs.map((crumb,i)=><li key={`${crumb.href}-${i}`}>
      {i<crumbs.length-1 ? <a href={crumb.href}>{crumb.name}</a> : <span aria-current="page">{crumb.name}</span>}
    </li>)}</ol>
  </nav>;
}

export function AnswerEnginePanel({page}:{page:PageRecord}){
  const answers=answerMap[page.route];
  if(!answers?.length) return null;
  return <section className="brseo-answers" aria-labelledby={`quick-answers-${page.route}`}>
    <div className="brseo-answers-inner">
      <div className="brseo-answers-head">
        <span>Helpful answers</span>
        <h2 id={`quick-answers-${page.route}`}>Questions people ask about this topic</h2>
        <p>Concise answers based on Boost RAVA&apos;s stated services and availability rules.</p>
      </div>
      <div className="brseo-answer-grid">{answers.map((item,i)=><article key={i}>
        <h3>{item.question}</h3><p>{item.answer}</p>
      </article>)}</div>
    </div>
  </section>;
}
