import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allRoutes, getPage } from '@/lib/content';
import { PageRenderer } from '@/components/PageRenderer';

type Props = { params: Promise<{slug?: string[]}> };
function routeFrom(slug?:string[]){ return (slug ?? []).join('/'); }

export function generateStaticParams(){
  return allRoutes().map(route=>({slug: route ? route.split('/') : []}));
}
export const dynamicParams = false;

export async function generateMetadata({params}:Props):Promise<Metadata>{
  const {slug}=await params; const page=getPage(routeFrom(slug)); if(!page) return {};
  const robots = page.robots || undefined;
  return {
    title: page.title,
    description: page.description || undefined,
    alternates: page.canonical ? {canonical:page.canonical} : undefined,
    robots: robots,
    openGraph: page.ogTitle || page.ogDescription || page.ogImage ? {
      title: page.ogTitle || page.title,
      description: page.ogDescription || page.description,
      images: page.ogImage ? [page.ogImage] : undefined,
      url: page.canonical || undefined,
      type: 'website'
    } : undefined,
    twitter: page.twitterTitle || page.twitterDescription || page.twitterImage ? {
      card: (page.twitterCard === 'summary' ? 'summary' : 'summary_large_image'),
      title: page.twitterTitle || page.title,
      description: page.twitterDescription || page.description,
      images: page.twitterImage ? [page.twitterImage] : undefined,
    } : undefined,
  };
}

export default async function SitePage({params}:Props){
  const {slug}=await params; const page=getPage(routeFrom(slug)); if(!page) notFound();
  return <PageRenderer page={page} />;
}
