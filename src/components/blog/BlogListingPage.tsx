'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  BlogPostSummary,
  BlogCategory,
  fetchBlogPosts,
  fetchCategories,
  subscribeNewsletter
} from '@/lib/blogApi';

interface BlogListingProps {
  initialCategory?: string;
  initialTag?: string;
  initialPosts?: BlogPostSummary[];
  initialCategories?: BlogCategory[];
}

export function BlogListingPage({
  initialCategory,
  initialTag,
  initialPosts = [],
  initialCategories = []
}: BlogListingProps) {
  const [posts, setPosts] = useState<BlogPostSummary[]>(initialPosts);
  const [categories, setCategories] = useState<BlogCategory[]>(initialCategories);
  const [activeCategory, setActiveCategory] = useState<string>(initialCategory || '');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedType, setSelectedType] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('latest');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(initialPosts.length === 0);

  // Newsletter state
  const [subscriberEmail, setSubscriberEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState<{ msg: string; success?: boolean } | null>(null);
  const [subscribing, setSubscribing] = useState(false);

  // Fetch categories on mount if not provided
  useEffect(() => {
    if (categories.length === 0) {
      fetchCategories().then((cats) => {
        if (cats && cats.length > 0) setCategories(cats);
      });
    }
  }, [categories.length]);

  // Fetch posts whenever filters change
  useEffect(() => {
    // If we already have initial data on first mount with no search/filters, skip refetch
    if (initialPosts.length > 0 && currentPage === 1 && !activeCategory && !searchQuery && !selectedType && sortBy === 'latest' && posts.length > 0) {
      return;
    }

    let isMounted = true;
    setLoading(true);

    fetchBlogPosts({
      page: currentPage,
      category: activeCategory || undefined,
      tag: initialTag || undefined,
      search: searchQuery || undefined,
      content_type: selectedType || undefined,
      sort: sortBy,
    }).then((res) => {
      if (!isMounted) return;
      if (res && res.data) {
        setPosts(res.data);
        setTotalPages(res.meta?.last_page || 1);
      }
      setLoading(false);
    }).catch(() => {
      if (isMounted) setLoading(false);
    });

    return () => { isMounted = false; };
  }, [activeCategory, initialTag, searchQuery, selectedType, sortBy, currentPage]);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subscriberEmail || subscribing) return;
    setSubscribing(true);
    const res = await subscribeNewsletter(subscriberEmail);
    setNewsletterStatus({ msg: res.message, success: res.success });
    if (res.success) setSubscriberEmail('');
    setSubscribing(false);
  };

  const featuredPost = posts.length > 0 ? posts[0] : null;
  const standardPosts = posts.length > 1 ? posts.slice(1) : [];

  return (
    <div className="min-h-screen bg-slate-50/50 pb-16">
      {/* Blog Hub Hero with Guaranteed Dark Purple Gradient */}
      <header
        style={{
          backgroundColor: '#12082b',
          backgroundImage: 'linear-gradient(135deg, #100826 0%, #1a1040 50%, #271052 100%)',
          color: '#ffffff',
          padding: '2.75rem 1rem',
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(147, 51, 234, 0.4)',
        }}
        className="relative text-white py-11 px-4 overflow-hidden border-b border-purple-900/40"
      >
        <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-3">
          <div
            style={{
              backgroundColor: 'rgba(168, 85, 247, 0.15)',
              borderColor: 'rgba(192, 132, 252, 0.3)',
              color: '#d8b4fe',
            }}
            className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full border text-[11px] font-semibold uppercase tracking-wider mb-1"
          >
            <span>⚡</span> Boost RAVA Knowledge Hub
          </div>

          <h1
            style={{ color: '#ffffff' }}
            className="text-2xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight leading-tight"
          >
            AdTech &amp; Programmatic <br className="hidden sm:inline" />
            <span
              style={{
                background: 'linear-gradient(90deg, #60a5fa 0%, #d8b4fe 50%, #fcd34d 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block',
              }}
            >
              Yield Intelligence
            </span>
          </h1>

          <p
            style={{ color: '#e2e8f0' }}
            className="max-w-xl mx-auto text-xs sm:text-sm font-light leading-relaxed"
          >
            In-depth engineering guides, real-time bidding architectures, floor price optimization strategies, and media performance insights.
          </p>

          {/* Search & Filter Bar */}
          <div className="max-w-xl mx-auto mt-6 flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-300 text-xs">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                placeholder="Search articles, programmatic topics, DSP, SSP..."
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.14)',
                  borderColor: 'rgba(255, 255, 255, 0.28)',
                  color: '#ffffff',
                }}
                className="w-full pl-9 pr-3.5 py-2.5 rounded-lg text-xs border focus:outline-none transition placeholder-gray-300"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            <select
              value={selectedType}
              onChange={(e) => {
                setSelectedType(e.target.value);
                setCurrentPage(1);
              }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.14)',
                borderColor: 'rgba(255, 255, 255, 0.28)',
                color: '#ffffff',
              }}
              className="rounded-lg px-3 py-2.5 text-xs border focus:outline-none"
            >
              <option value="" style={{ background: '#1e1b4b', color: '#fff' }}>All Types</option>
              <option value="Guide" style={{ background: '#1e1b4b', color: '#fff' }}>Guide</option>
              <option value="Industry Insights" style={{ background: '#1e1b4b', color: '#fff' }}>Industry Insights</option>
              <option value="Case Study" style={{ background: '#1e1b4b', color: '#fff' }}>Case Study</option>
              <option value="Research" style={{ background: '#1e1b4b', color: '#fff' }}>Research</option>
            </select>
          </div>
        </div>
      </header>

      {/* Category Pills Navigation */}
      <nav className="sticky top-[74px] max-lg:top-[66px] z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-2 px-3">
        <div
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          className="max-w-6xl mx-auto flex items-center justify-start sm:justify-center overflow-x-auto gap-2 scrollbar-none no-scrollbar"
        >
          <button
            onClick={() => { setActiveCategory(''); setCurrentPage(1); }}
            className={`px-3.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all ${
              activeCategory === ''
                ? 'bg-purple-600 text-white shadow-sm'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            All Articles
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setActiveCategory(cat.slug); setCurrentPage(1); }}
              className={`px-3.5 py-1 rounded-full text-[11px] font-semibold whitespace-nowrap transition-all flex items-center gap-1 ${
                activeCategory === cat.slug
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {cat.is_pillar ? '★ ' : ''}{cat.name}
              {cat.posts_count ? <span className="opacity-70 text-[10px]">({cat.posts_count})</span> : null}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="max-w-6xl mx-auto px-4 mt-8">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-12">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-pulse space-y-3">
                <div className="w-full h-40 bg-gray-200 rounded-lg" />
                <div className="h-3.5 bg-gray-200 rounded w-1/3" />
                <div className="h-5 bg-gray-200 rounded w-3/4" />
                <div className="h-3.5 bg-gray-200 rounded w-full" />
              </div>
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="bg-white rounded-2xl p-10 text-center border border-gray-200 shadow-sm max-w-md mx-auto my-10">
            <div className="text-3xl mb-3">📑</div>
            <h3 className="text-lg font-bold text-gray-800 mb-1.5">No articles found</h3>
            <p className="text-gray-500 text-xs mb-5">
              {searchQuery ? `No results for "${searchQuery}". Try a different keyword.` : 'No articles match the selected category.'}
            </p>
            <button
              onClick={() => { setSearchQuery(''); setActiveCategory(''); setSelectedType(''); }}
              className="px-5 py-2 bg-purple-600 text-white text-xs font-semibold rounded-lg hover:bg-purple-700 transition"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Featured Hero Article Card (Page 1 Only) */}
            {currentPage === 1 && featuredPost && (
              <article className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-purple-100/60 hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="lg:col-span-7 relative h-60 lg:h-auto overflow-hidden bg-gray-900">
                  <img
                    src={featuredPost.featured_image || '/assets/images/blog/blog-hero.jpg'}
                    alt={featuredPost.featured_image_alt || featuredPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/assets/images/blog/blog-hero.jpg';
                    }}
                  />
                  <span className="absolute top-3.5 left-3.5 bg-gradient-to-r from-amber-500 to-orange-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md">
                    Featured Insight
                  </span>
                </div>
                <div className="lg:col-span-5 p-6 lg:p-7 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2.5">
                      <span className="text-[10px] font-bold text-purple-700 uppercase tracking-wider bg-purple-50 px-2 py-0.5 rounded-md">
                        {featuredPost.category?.name || 'Programmatic'}
                      </span>
                      <span className="text-gray-400 text-xs">•</span>
                      <span className="text-gray-500 text-[11px]">{featuredPost.reading_time || '7 min read'}</span>
                    </div>

                    <h2 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors leading-snug mb-3">
                      <Link href={`/blog/${featuredPost.slug}/`}>
                        {featuredPost.title}
                      </Link>
                    </h2>

                    <p className="text-gray-600 text-xs leading-relaxed line-clamp-3 mb-4">
                      {featuredPost.short_description}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-[11px]">
                        {featuredPost.author?.name ? featuredPost.author.name[0] : 'B'}
                      </div>
                      <div>
                        <div className="text-[11px] font-bold text-gray-800">{featuredPost.author?.name || 'Boost RAVA Team'}</div>
                        <div className="text-[10px] text-gray-400">{featuredPost.display_date || featuredPost.published_at}</div>
                      </div>
                    </div>

                    <Link
                      href={`/blog/${featuredPost.slug}/`}
                      className="inline-flex items-center gap-1 text-xs font-bold text-purple-600 group-hover:text-purple-800 transition"
                    >
                      Read Article →
                    </Link>
                  </div>
                </div>
              </article>
            )}

            {/* Grid of Other Articles */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(currentPage === 1 ? standardPosts : posts).map((post) => (
                <article
                  key={post.id || post.slug}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="relative h-40 sm:h-44 overflow-hidden bg-gray-100">
                      <img
                        src={post.featured_image || '/assets/images/blog/blog-hero.jpg'}
                        alt={post.featured_image_alt || post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          (e.currentTarget as HTMLImageElement).src = '/assets/images/blog/blog-hero.jpg';
                        }}
                      />
                      <span className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md text-purple-700 text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                        {post.category?.name || 'AdTech'}
                      </span>
                    </div>

                    <div className="p-4 sm:p-5">
                      <div className="flex items-center gap-1.5 text-[11px] text-gray-400 mb-2">
                        <span>{post.content_type || 'Article'}</span>
                        <span>•</span>
                        <span>{post.reading_time || '5 min read'}</span>
                      </div>

                      <h3 className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-purple-600 transition-colors line-clamp-2 leading-snug mb-2">
                        <Link href={`/blog/${post.slug}/`}>
                          {post.title}
                        </Link>
                      </h3>

                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                        {post.short_description}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 sm:p-5 pt-0 border-t border-gray-50 mt-3 flex items-center justify-between text-[11px] text-gray-400">
                    <span>{post.display_date || post.published_at}</span>
                    <Link href={`/blog/${post.slug}/`} className="font-semibold text-purple-600 hover:underline">
                      Read →
                    </Link>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination Controls */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-1.5 pt-4">
                <button
                  disabled={currentPage <= 1}
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-40 transition"
                >
                  ← Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pg) => (
                  <button
                    key={pg}
                    onClick={() => setCurrentPage(pg)}
                    className={`w-8 h-8 text-xs font-bold rounded-lg transition ${
                      currentPage === pg
                        ? 'bg-purple-600 text-white shadow-sm'
                        : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {pg}
                  </button>
                ))}
                <button
                  disabled={currentPage >= totalPages}
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  className="px-3.5 py-1.5 text-xs font-semibold rounded-lg border border-gray-300 bg-white hover:bg-gray-50 disabled:opacity-40 transition"
                >
                  Next →
                </button>
              </div>
            )}
          </div>
        )}

        {/* Newsletter Subscription Box */}
        <section className="mt-12 rounded-2xl p-6 md:p-9 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white shadow-xl relative overflow-hidden">
          <div className="max-w-xl mx-auto text-center space-y-3 relative z-10">
            <span className="text-[11px] font-bold uppercase tracking-widest text-amber-300">Stay Ahead of AdTech</span>
            <h2 className="text-xl md:text-2xl font-bold text-white">Subscribe to Boost RAVA Insights</h2>
            <p className="text-xs sm:text-sm text-gray-300 font-light max-w-md mx-auto">
              Get weekly programmatic revenue strategies, CTV playbooks, and algorithm updates delivered straight to your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5 max-w-sm mx-auto pt-2.5">
              <input
                type="email"
                required
                value={subscriberEmail}
                onChange={(e) => setSubscriberEmail(e.target.value)}
                placeholder="Enter your work email"
                className="flex-1 px-3.5 py-2.5 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 text-xs focus:outline-none focus:ring-2 focus:ring-amber-300 backdrop-blur-md"
              />
              <button
                type="submit"
                disabled={subscribing}
                className="px-5 py-2.5 bg-gradient-to-r from-amber-400 to-orange-500 hover:from-amber-300 hover:to-orange-400 text-slate-950 font-bold text-xs rounded-lg shadow-md transition disabled:opacity-60"
              >
                {subscribing ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>

            {newsletterStatus && (
              <p className={`text-[11px] mt-2 font-medium ${newsletterStatus.success ? 'text-green-300' : 'text-red-300'}`}>
                {newsletterStatus.msg}
              </p>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
