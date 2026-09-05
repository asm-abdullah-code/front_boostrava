import fs from 'node:fs';
import path from 'node:path';

export type PageRecord = {
  route:string; title:string; description:string; robots:string; canonical:string;
  ogTitle:string; ogDescription:string; ogImage:string; twitterCard:string;
  twitterTitle:string; twitterDescription:string; twitterImage:string;
  bodyClass:string; mainHtml:string; homeBeforeHtml?:string; homePreTabsHtml?:string; homePostTabsHtml?:string; homeAfterHtml?:string; styles:string[]; scripts:string[]; jsonLd:string[]; lang:string;
};

type PageMap = Record<string, PageRecord>;
let cache: PageMap | null = null;
export function getPages(): PageMap {
  if (cache) return cache;
  const file = path.join(process.cwd(), 'content', 'pages.json');
  cache = JSON.parse(fs.readFileSync(file, 'utf8')) as PageMap;
  return cache;
}
export function getPage(route:string): PageRecord | null { return getPages()[route] ?? null; }
export function allRoutes(): string[] { return Object.keys(getPages()); }
export function readShared(name:'header'|'footer'): string {
  return fs.readFileSync(path.join(process.cwd(),'content','shared',`${name}.html`),'utf8');
}
