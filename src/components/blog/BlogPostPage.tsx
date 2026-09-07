'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { BlogPostDetail, fetchBlogPostBySlug } from '@/lib/blogApi';

interface BlogPostPageProps {
  post?: BlogPostDetail | null;
  slug?: string;
}

export function BlogPostPage({ post: initialPost, slug }: BlogPostPageProps) {
  const [post, setPost] = useState<BlogPostDetail | null>(initialPost || null);
  const [loading, setLoading] = useState<boolean>(!initialPost);
  const [copied, setCopied] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    if (!post) {
      let currentSlug = slug;
      if (!currentSlug && typeof window !== 'undefined') {
        try {
          currentSlug = decodeURIComponent(window.location.pathname.replace(/^\/blog\//, '').replace(/\/$/, ''));
        } catch {
          currentSlug = window.location.pathname.replace(/^\/blog\//, '').replace(/\/$/, '');
        }
      }
      if (currentSlug) {
        setLoading(true);
        fetchBlogPostBySlug(currentSlug).then((data) => {
          if (data) setPost(data);
          setLoading(false);
        }).catch(() => setLoading(false));
      }
    }
  }, [slug, post]);

  if (loading || !post) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-10 h-10 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm text-gray-500 font-medium">Loading article...</p>
        </div>
      </div>
    );
  }

  const shareUrl = typeof window !== 'undefined' ? window.location.href : `https://www.boostrava.com/blog/${post.slug}/`;

  const handleCopyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const rawSchema = post.seo?.json_ld || post.seo?.schema_markup;
  const schemaJsonLd = Array.isArray(rawSchema)
    ? rawSchema
    : rawSchema
    ? [rawSchema]
    : [
        {
          '@context': 'https://schema.org',
          '@type': post.seo?.schema_type || 'BlogPosting',
          headline: post.title,
          description: post.short_description,
          image: post.featured_image,
          datePublished: post.published_date,
          dateModified: post.updated_date || post.published_date,
          author: {
            '@type': 'Person',
            name: post.author?.name || 'Boost RAVA Team',
          },
          publisher: {
            '@type': 'Organization',
            name: 'Boost RAVA',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.boostrava.com/assets/images/icons/icon.png',
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': post.seo?.canonical_url || `https://www.boostrava.com/blog/${post.slug}/`,
          },
        },
      ];

  return (
    <article className="min-h-screen bg-white pb-20">
      {/* Dynamic JSON-LD Injected into Page */}
      {schemaJsonLd.map((schema, i) => (
        <script
          key={`schema-${i}`}
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}


      {/* Top Header / Breadcrumb Area */}
      <header className="bg-slate-50 border-b border-gray-200 py-7 px-4">
        <div className="max-w-3xl mx-auto space-y-3">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumbs" className="flex items-center gap-1.5 text-[11px] text-gray-500 flex-wrap">
            <Link href="/" className="hover:text-purple-600 transition">Home</Link>
            <span>/</span>
            <Link href="/blog/" className="hover:text-purple-600 transition">Blog</Link>
            {post.category && (
              <>
                <span>/</span>
                <span className="text-gray-700 font-medium">{post.category.name}</span>
              </>
            )}
          </nav>

          {/* Category Pill & Reading Time */}
          <div className="flex items-center gap-2.5 pt-1">
            {post.category && (
              <span className="inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 bg-purple-100 text-purple-800 rounded-full">
                {post.category.name}
              </span>
            )}
            <span className="text-[11px] text-gray-500 font-medium">
              ⏱ {post.reading_time || '6 min read'}
            </span>
            {post.content_type && (
              <span className="text-[11px] text-gray-400 border-l border-gray-300 pl-2.5">
                {post.content_type}
              </span>
            )}
          </div>

          {/* Main H1 Title */}
          <h1 className="text-xl sm:text-3xl md:text-[34px] font-extrabold text-gray-900 tracking-tight leading-tight">
            {post.title}
          </h1>

          {/* Short Introduction */}
          <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-light">
            {post.short_description}
          </p>

          {/* Author Metadata & Social Share Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-gray-200 text-xs text-gray-600">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-xs shadow-sm">
                {post.author?.name ? post.author.name[0] : 'B'}
              </div>
              <div>
                <div className="font-bold text-gray-900 text-xs">{post.author?.name || 'Boost RAVA Team'}</div>
                <div className="text-gray-500 text-[10px]">
                  {post.author?.role || 'AdTech Strategist'} • {post.display_date || post.published_at}
                </div>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div className="flex items-center gap-2">
              <span className="text-gray-400 text-xs font-medium">Share:</span>
              <button
                onClick={handleCopyLink}
                className="px-2.5 py-1 rounded-lg border border-gray-300 hover:bg-gray-100 transition text-[11px] font-semibold flex items-center gap-1"
                title="Copy Link"
              >
                {copied ? '✓ Copied' : '🔗 Copy Link'}
              </button>
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-gray-300 hover:bg-gray-100 transition text-blue-700 text-xs"
                title="Share on LinkedIn"
              >
                in
              </a>
              <a
                href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg border border-gray-300 hover:bg-gray-100 transition text-slate-800 text-xs"
                title="Share on X"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-4 mt-6">
        {/* Featured Image */}
        <figure className="mb-8 rounded-xl overflow-hidden shadow-md border border-gray-100 bg-gray-50">
          <img
            src={post.featured_image || '/assets/images/blog/blog-hero.jpg'}
            alt={post.featured_image_alt || post.title}
            className="w-full max-h-[400px] object-cover"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).src = '/assets/images/blog/blog-hero.jpg';
            }}
          />
          {post.featured_image_alt && (
            <figcaption className="text-[11px] text-gray-400 text-center py-1.5 bg-gray-50">
              {post.featured_image_alt}
            </figcaption>
          )}
        </figure>

        {/* 1. Quick Answer (AEO Optimized) */}
        {post.quick_answer && (
          <div className="mb-6 p-4.5 sm:p-5 bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-600 rounded-r-xl shadow-sm">
            <div className="flex items-center gap-1.5 text-blue-900 font-bold text-xs uppercase tracking-wider mb-1.5">
              <span>💡</span> Quick Answer (Summary)
            </div>
            <p className="text-gray-800 text-xs sm:text-sm leading-relaxed font-medium">
              {post.quick_answer}
            </p>
          </div>
        )}

        {/* 2. Key Takeaways */}
        {post.key_takeaways && post.key_takeaways.length > 0 && (
          <div className="mb-8 p-5 bg-purple-50/70 border border-purple-200 rounded-xl shadow-sm">
            <h2 className="text-base font-bold text-purple-950 mb-2.5 flex items-center gap-2">
              <span>📌</span> Key Takeaways
            </h2>
            <ul className="space-y-1.5 text-xs sm:text-sm text-gray-700">
              {post.key_takeaways.map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-purple-600 font-bold mt-0.5">✓</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 3. Table of Contents */}
        {post.table_of_contents && post.table_of_contents.length > 0 && (
          <div className="mb-8 p-4 bg-slate-50 border border-gray-200 rounded-xl">
            <h2 className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-2.5 flex items-center gap-1.5">
              <span>📑</span> Table of Contents
            </h2>
            <ul className="space-y-1 text-xs">
              {post.table_of_contents.map((item, idx) => (
                <li key={idx} style={{ paddingLeft: item.level ? `${(item.level - 2) * 14}px` : 0 }}>
                  <a
                    href={`#${item.id}`}
                    className="text-purple-700 hover:text-purple-900 hover:underline transition"
                  >
                    {item.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* 4. Article Main Body */}
        <section
          className="prose prose-sm md:prose-base max-w-none text-gray-800 leading-relaxed space-y-4"
          dangerouslySetInnerHTML={{ __html: post.body }}
        />

        {/* 5. Contextual Call To Action */}
        <aside className="my-9 p-6 sm:p-7 bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 rounded-2xl text-white text-center space-y-3 shadow-lg">
          <span className="text-[10px] font-bold uppercase tracking-widest text-amber-300">Boost RAVA Ecosystem</span>
          <h3 className="text-xl md:text-2xl font-bold text-white">
            {post.cta?.text || 'Ready to Scale Your Programmatic Ad Revenue?'}
          </h3>
          <p className="text-xs text-purple-100 max-w-lg mx-auto leading-relaxed">
            Connect your inventory with premium DSP demand, smart floor pricing, and interactive rich media formats.
          </p>
          <div className="pt-1.5">
            <a
              href={post.cta?.link || 'https://panel.boostrava.com/#/register'}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2.5 bg-white text-purple-900 hover:bg-gray-100 font-bold rounded-full shadow-md transition-all transform hover:scale-105 text-xs"
            >
              Get Started Now →
            </a>
          </div>
        </aside>

        {/* 6. Frequently Asked Questions (FAQs) */}
        {post.faqs && post.faqs.length > 0 && (
          <section className="my-9 border-t border-gray-200 pt-6" aria-labelledby="faq-heading">
            <h2 id="faq-heading" className="text-lg sm:text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <span>❓</span> Frequently Asked Questions
            </h2>
            <div className="space-y-2.5">
              {post.faqs.map((faq, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full text-left px-4 py-3 bg-slate-50 hover:bg-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-gray-800 transition"
                  >
                    <span>{faq.question}</span>
                    <span className="text-purple-600 text-base font-mono">
                      {openFaq === idx ? '−' : '+'}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-4 py-3 bg-white text-xs sm:text-sm text-gray-700 border-t border-gray-100 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 7. Sources & References */}
        {post.sources && post.sources.length > 0 && (
          <section className="my-7 p-4.5 sm:p-5 bg-slate-50 rounded-xl border border-gray-200">
            <h3 className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2.5">
              References &amp; Authoritative Sources
            </h3>
            <ul className="space-y-1 text-xs text-gray-600 list-disc pl-4">
              {post.sources.map((src, idx) => (
                <li key={idx}>
                  {src.url ? (
                    <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                      {src.title}
                    </a>
                  ) : (
                    <span>{src.title}</span>
                  )}
                  {src.publisher ? ` — ${src.publisher}` : ''}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* 8. Author E-E-A-T Profile Box */}
        {post.author && (
          <div className="my-8 p-5 bg-purple-50/50 border border-purple-100 rounded-xl flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold text-base flex-shrink-0 shadow-sm">
              {post.author.name[0]}
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <div className="flex flex-col sm:flex-row sm:items-center gap-1.5">
                <h3 className="text-sm font-bold text-gray-900">{post.author.name}</h3>
                {post.author.role && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-100 text-purple-800 font-semibold">
                    {post.author.role}
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {post.author.bio || 'AdTech specialist and programmatic industry researcher at Boost RAVA.'}
              </p>
            </div>
          </div>
        )}

        {/* 9. Related Articles Grid */}
        {post.related_posts && post.related_posts.length > 0 && (
          <section className="my-10 border-t border-gray-200 pt-7" aria-labelledby="related-heading">
            <h2 id="related-heading" className="text-lg sm:text-xl font-bold text-gray-900 mb-4">
              Related Articles &amp; Insights
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {post.related_posts.map((rel) => (
                <article key={rel.id || rel.slug} className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-all flex flex-col justify-between">
                  <div>
                    <img
                      src={rel.featured_image || '/assets/images/blog/blog-hero.jpg'}
                      alt={rel.title}
                      className="w-full h-32 object-cover"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/assets/images/blog/blog-hero.jpg';
                      }}
                    />
                    <div className="p-3.5">
                      <span className="text-[9px] font-bold uppercase tracking-wider text-purple-700">
                        {rel.category?.name || 'AdTech'}
                      </span>
                      <h3 className="text-xs font-bold text-gray-900 group-hover:text-purple-600 transition line-clamp-2 mt-1">
                        <Link href={`/blog/${rel.slug}/`}>
                          {rel.title}
                        </Link>
                      </h3>
                    </div>
                  </div>
                  <div className="p-3.5 pt-0 text-[10px] text-gray-400">
                    {rel.display_date || rel.published_at}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </article>
  );
}
