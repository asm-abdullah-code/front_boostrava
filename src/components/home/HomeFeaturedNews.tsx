'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { BlogPostSummary, fetchFeaturedPosts } from '@/lib/blogApi';

const DEFAULT_FALLBACK_POSTS: BlogPostSummary[] = [
  {
    id: 1,
    title: 'The Future of Programmatic Advertising: AI-Driven Campaigns',
    slug: 'the-future-of-programmatic-advertising-ai-driven-campaigns-vvv',
    url: '/blog/the-future-of-programmatic-advertising-ai-driven-campaigns-vvv/',
    category: { name: 'Programmatic Advertising', slug: 'programmatic-advertising' },
    author: { name: 'Sarah Johnson', role: 'Principal AdTech Strategist' },
    short_description: 'Discover how artificial intelligence is reshaping programmatic advertising with sharper targeting and smarter bidding.',
    featured_image: '/assets/images/blog/blog-hero.jpg',
    featured_image_alt: 'The Future of Programmatic Advertising',
    reading_time: '8 min read',
    is_featured: true,
    content_type: 'Guide',
    published_at: 'August 20, 2026',
    published_date: '2026-08-20',
    updated_at: 'September 04, 2026',
    updated_date: '2026-09-04',
    display_date: 'September 04, 2026',
  },
  {
    id: 2,
    title: 'Smart Floor Pricing: How to Maximize Publisher Revenue',
    slug: 'smart-floor-pricing-maximize-publisher-revenue',
    url: '/blog/smart-floor-pricing-maximize-publisher-revenue/',
    category: { name: 'Publisher Monetization', slug: 'publisher-monetization' },
    author: { name: 'Emily Rodriguez', role: 'Head of Publisher Monetization' },
    short_description: 'Discover dynamic floor pricing strategies that protect publisher inventory value while maximizing yield.',
    featured_image: '/assets/images/dashboard/home/featured2.jpg',
    featured_image_alt: 'Smart Floor Pricing',
    reading_time: '6 min read',
    is_featured: true,
    content_type: 'Guide',
    published_at: 'March 12, 2024',
    published_date: '2024-03-12',
    updated_at: 'August 19, 2026',
    updated_date: '2026-08-19',
    display_date: 'August 19, 2026',
  },
  {
    id: 3,
    title: 'The Rise of Curated Advertising: A Smarter Path to Media Performance',
    slug: 'rise-of-curated-advertising-media-performance',
    url: '/blog/rise-of-curated-advertising-media-performance/',
    category: { name: 'Industry News', slug: 'industry-news' },
    author: { name: 'Michael Chen', role: 'VP of Programmatic Engineering' },
    short_description: 'Why Curated Marketplaces are Expanding and how advertisers gain direct relationships with premium publishers.',
    featured_image: '/assets/images/dashboard/home/featured3.jpg',
    featured_image_alt: 'The Rise of Curated Advertising',
    reading_time: '7 min read',
    is_featured: true,
    content_type: 'Industry Insights',
    published_at: 'March 10, 2024',
    published_date: '2024-03-10',
    updated_at: 'August 20, 2026',
    updated_date: '2026-09-20',
    display_date: 'August 20, 2026',
  }
];

export function HomeFeaturedNews({ initialPosts }: { initialPosts?: BlogPostSummary[] }) {
  const [posts, setPosts] = useState<BlogPostSummary[]>(initialPosts && initialPosts.length > 0 ? initialPosts : DEFAULT_FALLBACK_POSTS);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let isMounted = true;
    fetchFeaturedPosts().then((data) => {
      if (isMounted && data && data.length > 0) {
        setPosts(data);
      }
    }).catch((err) => {
      console.warn('Failed to fetch live featured posts:', err);
    });
    return () => { isMounted = false; };
  }, []);

  return (
    <section className="max-w-7xl mx-auto my-12 px-4" aria-labelledby="featured-news-heading">
      <div className="bg-white rounded-lg p-2 pt-6">
        <h2 id="featured-news-heading" className="text-2xl lg:text-4xl text-center font-bold mb-4 text-gray-900">
          Featured News
        </h2>
      </div>

      <div className="flex justify-center md:justify-end mb-6">
        <Link
          href="/blog/"
          className="px-7 py-2.5 bg-gradient-to-r from-purple-800 to-blue-500 hover:from-purple-700 hover:to-blue-600 cursor-pointer font-semibold rounded-lg text-white shadow-md hover:shadow-lg transition-all duration-200 inline-block text-decoration-none"
        >
          More News
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 gap-8">
        {posts.slice(0, 3).map((post) => {
          const postLink = `/blog/${post.slug}/`;
          return (
            <article
              key={post.id || post.slug}
              className="group max-w-md mx-auto w-full min-h-96 rounded-2xl p-1 bg-white hover:bg-gradient-to-tr hover:from-purple-400 hover:via-blue-400 hover:to-yellow-400 transition-all duration-500 shadow-lg hover:shadow-xl flex flex-col"
            >
              <div className="bg-white rounded-2xl h-full p-6 overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="w-full h-48 overflow-hidden rounded-lg bg-gray-100 relative">
                    <img
                      src={post.featured_image || '/assets/images/blog/blog-hero.jpg'}
                      alt={post.featured_image_alt || post.title}
                      className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback image if remote image fails to load
                        (e.currentTarget as HTMLImageElement).src = '/assets/images/blog/blog-hero.jpg';
                      }}
                    />
                  </div>

                  <div className="mt-5">
                    <span className="inline-block text-xs font-semibold px-2.5 py-1 bg-purple-50 text-purple-700 rounded-full mb-3 uppercase tracking-wider">
                      {post.category?.name || 'AdTech Insights'}
                    </span>
                    <h3 className="font-bold text-xl text-gray-800 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                      <Link href={postLink} className="hover:underline">
                        {post.title}
                      </Link>
                    </h3>
                    <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                      {post.short_description}
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                  <span>{post.display_date || post.published_at || 'Recently updated'}</span>
                  <span>{post.reading_time || '5 min read'}</span>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
