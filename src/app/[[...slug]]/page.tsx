import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { allRoutes, getPage, PageRecord } from '@/lib/content';
import { PageRenderer } from '@/components/PageRenderer';
import { fetchBlogPostBySlug, fetchBlogPosts, fetchCategories, BlogPostDetail, BlogPostSummary, BlogCategory } from '@/lib/blogApi';

type Props = { params: Promise<{ slug?: string[] }> };
function routeFrom(slug?: string[]) {
  return (slug ?? [])
    .map((seg) => {
      try {
        return decodeURIComponent(seg);
      } catch {
        return seg;
      }
    })
    .join('/');
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const routes = allRoutes().map((route) => ({ slug: route ? route.split('/') : [] }));
  
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'https://api.boostrava.com';
    const res = await fetch(`${apiUrl}/api/blog/posts?per_page=100`, { next: { revalidate: 60 } });
    if (res.ok) {
      const json = await res.json();
      if (Array.isArray(json?.data)) {
        for (const post of json.data) {
          if (post?.slug) {
            const clean = post.slug.replace(/^\/+|\/+$/g, '');
            if (clean) {
              routes.push({ slug: ['blog', clean] });
            }
          }
        }
      }
    }
  } catch (err) {}

  return routes;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const route = routeFrom(slug);

  // Dynamic Blog Hub (/blog)
  if (route === 'blog') {
    return {
      title: 'Blog & AdTech Insights | Boost RAVA Programmatic Network',
      description: 'In-depth programmatic advertising guides, real-time bidding architectures, floor price optimization, and publisher yield strategies.',
      alternates: { canonical: 'https://www.boostrava.com/blog/' },
      openGraph: {
        title: 'Blog & AdTech Insights | Boost RAVA',
        description: 'In-depth programmatic advertising guides, real-time bidding architectures, floor price optimization, and publisher yield strategies.',
        url: 'https://www.boostrava.com/blog/',
        type: 'website',
      },
    };
  }

  // Dynamic Blog Category Hub (/blog/category/...)
  if (route.startsWith('blog/category/')) {
    const catName = route.replace('blog/category/', '').replace(/-/g, ' ').toUpperCase();
    return {
      title: `${catName} Articles & Guides | Boost RAVA Blog`,
      description: `Explore the latest ${catName} news, strategies, and tutorials from Boost RAVA AdTech experts.`,
      alternates: { canonical: `https://www.boostrava.com/${route}/` },
    };
  }

  // Dynamic Single Blog Post (/blog/slug)
  if (route.startsWith('blog/') && route !== 'blog') {
    const postSlug = route.replace(/^blog\//, '');
    const post = await fetchBlogPostBySlug(postSlug);
    if (post) {
      return {
        title: post.seo?.meta_title || `${post.title} | Boost RAVA`,
        description: post.seo?.meta_description || post.short_description,
        alternates: { canonical: post.seo?.canonical_url || `https://www.boostrava.com/blog/${post.slug}/` },
        robots: post.seo?.robots || undefined,
        openGraph: {
          title: post.seo?.og_title || post.title,
          description: post.seo?.og_description || post.short_description,
          images: post.featured_image ? [post.featured_image] : undefined,
          url: post.seo?.canonical_url || `https://www.boostrava.com/blog/${post.slug}/`,
          type: 'article',
        },
        twitter: {
          card: (post.seo?.twitter_card as any) || 'summary_large_image',
          title: post.seo?.og_title || post.title,
          description: post.seo?.og_description || post.short_description,
          images: post.featured_image ? [post.featured_image] : undefined,
        },
      };
    }
  }

  // Static Fallback Page
  const page = getPage(route);
  if (!page) return {};
  const robots = page.robots || undefined;
  return {
    title: page.title,
    description: page.description || undefined,
    alternates: page.canonical ? { canonical: page.canonical } : undefined,
    robots: robots,
    openGraph: page.ogTitle || page.ogDescription || page.ogImage ? {
      title: page.ogTitle || page.title,
      description: page.ogDescription || page.description,
      images: page.ogImage ? [page.ogImage] : undefined,
      url: page.canonical || undefined,
      type: 'website',
    } : undefined,
    twitter: page.twitterTitle || page.twitterDescription || page.twitterImage ? {
      card: (page.twitterCard === 'summary' ? 'summary' : 'summary_large_image'),
      title: page.twitterTitle || page.title,
      description: page.twitterDescription || page.description,
      images: page.twitterImage ? [page.twitterImage] : undefined,
    } : undefined,
  };
}

export default async function SitePage({ params }: Props) {
  const { slug } = await params;
  const route = routeFrom(slug);

  // 1. Dynamic Blog Hub / Category / Tag
  if (route === 'blog' || route.startsWith('blog/category/') || route.startsWith('blog/tag/')) {
    let initialPosts: BlogPostSummary[] = [];
    let initialCategories: BlogCategory[] = [];
    try {
      const listRes = await fetchBlogPosts({
        category: route.startsWith('blog/category/') ? route.replace('blog/category/', '') : undefined,
        tag: route.startsWith('blog/tag/') ? route.replace('blog/tag/', '') : undefined,
      });
      if (listRes?.data) initialPosts = listRes.data;
      const cats = await fetchCategories();
      if (cats) initialCategories = cats;
    } catch (err) {}

    const virtualBlogPage: PageRecord = {
      route,
      title: 'Blog & AdTech Insights',
      description: 'Programmatic AdTech and yield optimization guides.',
      robots: 'index, follow',
      canonical: `https://www.boostrava.com/${route}/`,
      ogTitle: '',
      ogDescription: '',
      ogImage: '',
      twitterCard: 'summary_large_image',
      twitterTitle: '',
      twitterDescription: '',
      twitterImage: '',
      bodyClass: 'brv4-blog',
      mainHtml: '',
      styles: [],
      scripts: [],
      jsonLd: [],
      lang: 'en',
    };
    return (
      <PageRenderer
        page={virtualBlogPage}
        initialPosts={initialPosts}
        initialCategories={initialCategories}
      />
    );
  }

  // 2. Dynamic Single Blog Post
  if (route.startsWith('blog/')) {
    const postSlug = route.replace(/^blog\//, '');
    const post: BlogPostDetail | null = await fetchBlogPostBySlug(postSlug);

    if (post) {
      const virtualPostPage: PageRecord = {
        route,
        title: post.title,
        description: post.short_description,
        robots: post.seo?.robots || 'index, follow',
        canonical: post.seo?.canonical_url || `https://www.boostrava.com/blog/${post.slug}/`,
        ogTitle: post.seo?.og_title || post.title,
        ogDescription: post.seo?.og_description || post.short_description,
        ogImage: post.featured_image,
        twitterCard: 'summary_large_image',
        twitterTitle: post.title,
        twitterDescription: post.short_description,
        twitterImage: post.featured_image,
        bodyClass: 'brv4-blog-post',
        mainHtml: '',
        styles: [],
        scripts: [],
        jsonLd: [],
        lang: 'en',
      };
      return <PageRenderer page={virtualPostPage} postDetail={post} />;
    }
  }

  // 3. Static Pages
  const page = getPage(route);
  if (!page) notFound();
  return <PageRenderer page={page} />;
}
