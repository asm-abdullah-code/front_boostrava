export interface BlogCategory {
  id: number;
  name: string;
  slug: string;
  is_pillar?: boolean;
  posts_count?: number;
}

export interface BlogAuthor {
  id?: number;
  name: string;
  slug?: string;
  avatar?: string;
  role?: string;
  bio?: string;
  expertise?: string[];
  social_links?: Record<string, string>;
}

export interface BlogTag {
  id: number;
  name: string;
  slug: string;
  posts_count?: number;
}

export interface BlogPostSummary {
  id: number;
  title: string;
  slug: string;
  url: string;
  category: { name: string; slug: string } | null;
  author: BlogAuthor | null;
  short_description: string;
  featured_image: string;
  featured_image_alt: string;
  reading_time: string;
  is_featured: boolean;
  is_editors_pick?: boolean;
  content_type: string;
  published_at: string | null;
  published_date: string | null;
  updated_at: string | null;
  updated_date: string | null;
  display_date: string | null;
  display_date_iso?: string | null;
  display_date_label?: string | null;
}

export interface BlogPostDetail extends Omit<BlogPostSummary, 'author'> {
  author?: BlogAuthor | null;
  quick_answer?: string;
  key_takeaways?: string[];
  table_of_contents?: Array<{ id: string; title: string; level?: number }>;
  body: string;
  faqs?: Array<{ question: string; answer: string }>;
  sources?: Array<{ title: string; url?: string; publisher?: string }>;
  related_products?: Array<{ title: string; description?: string; link?: string }>;
  cta?: { type?: string; text?: string; link?: string };
  seo?: {
    meta_title?: string;
    meta_description?: string;
    canonical_url?: string;
    robots?: string;
    og_title?: string;
    og_description?: string;
    og_image?: string;
    twitter_card?: string;
    primary_keyword?: string;
    secondary_keywords?: string[];
    schema_markup?: any;
    schema_type?: string;
    json_ld?: any;
    breadcrumbs?: Array<{ name: string; url: string }>;
  };
  category: { name: string; slug: string } | null;
  tags?: Array<{ name: string; slug: string }>;
  related_posts?: BlogPostSummary[];
}

export interface BlogListResponse {
  data: BlogPostSummary[];
  meta: {
    current_page: number;
    last_page: number;
    per_page: number;
    total: number;
  };
  categories: BlogCategory[];
  tags: BlogTag[];
}

export function getApiBase(): string {
  if (typeof window !== 'undefined') {
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      return process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
    }
    return 'https://api.boostrava.com';
  }
  if (process.env.NODE_ENV === 'development') {
    return process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000';
  }
  return 'https://api.boostrava.com';
}

export const API_BASE = getApiBase();

async function safeJsonFetch(endpoint: string): Promise<any | null> {
  const base = getApiBase();
  const url = endpoint.startsWith('http://') || endpoint.startsWith('https://')
    ? endpoint
    : `${base}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;

  try {
    const res = await fetch(url);
    if (!res.ok) {
      if (url.includes('127.0.0.1:8000') || url.includes('localhost:8000')) {
        const liveUrl = url.replace(/http:\/\/(127\.0\.0\.1|localhost):8000/, 'https://api.boostrava.com');
        const fallbackRes = await fetch(liveUrl).catch(() => null);
        if (fallbackRes && fallbackRes.ok) return await fallbackRes.json();
      }
      return null;
    }
    return await res.json();
  } catch (err) {
    if (url.includes('127.0.0.1:8000') || url.includes('localhost:8000')) {
      try {
        const liveUrl = url.replace(/http:\/\/(127\.0\.0\.1|localhost):8000/, 'https://api.boostrava.com');
        const fallbackRes = await fetch(liveUrl);
        if (fallbackRes.ok) return await fallbackRes.json();
      } catch {}
    }
    return null;
  }
}

export function normalizeImageUrl(url?: string | null): string {
  if (!url) return '/assets/images/blog/blog-hero.jpg';
  const cleaned = String(url).trim();
  if (cleaned.startsWith('http://') || cleaned.startsWith('https://')) {
    return cleaned;
  }
  if (cleaned.startsWith('/')) {
    return cleaned;
  }
  return `/${cleaned}`;
}

function normalizePost<T extends BlogPostSummary>(post: T): T {
  if (!post) return post;
  return {
    ...post,
    featured_image: normalizeImageUrl(post.featured_image),
    author: post.author
      ? {
          ...post.author,
          avatar: post.author.avatar ? normalizeImageUrl(post.author.avatar) : undefined,
        }
      : null,
  };
}

export async function fetchFeaturedPosts(): Promise<BlogPostSummary[]> {
  try {
    const json = await safeJsonFetch('/api/blog/featured');
    const posts: BlogPostSummary[] = json?.data || [];
    return posts.map(normalizePost);
  } catch (err) {
    return [];
  }
}

export async function fetchBlogPosts(params?: {
  page?: number;
  category?: string;
  tag?: string;
  search?: string;
  content_type?: string;
  sort?: string;
  per_page?: number;
}): Promise<BlogListResponse | null> {
  try {
    const query = new URLSearchParams();
    if (params?.page) query.set('page', String(params.page));
    if (params?.per_page) query.set('per_page', String(params.per_page));
    if (params?.category) query.set('category', params.category);
    if (params?.tag) query.set('tag', params.tag);
    if (params?.search) query.set('search', params.search);
    if (params?.content_type) query.set('content_type', params.content_type);
    if (params?.sort) query.set('sort', params.sort);

    const qs = query.toString();
    const endpoint = qs ? `/api/blog/posts?${qs}` : '/api/blog/posts';
    const res: BlogListResponse | null = await safeJsonFetch(endpoint);
    if (res && Array.isArray(res.data)) {
      res.data = res.data.map(normalizePost);
    }
    return res;
  } catch (err) {
    return null;
  }
}

export async function fetchBlogPostBySlug(slug: string): Promise<BlogPostDetail | null> {
  try {
    let cleanSlug = String(slug || '').replace(/^\/|\/$/g, '').replace(/^blog\//, '');
    try {
      cleanSlug = decodeURIComponent(cleanSlug);
    } catch {}
    cleanSlug = cleanSlug.trim();
    if (!cleanSlug) return null;

    const encodedEndpoint = `/api/blog/posts/${encodeURIComponent(cleanSlug)}`;
    const json = await safeJsonFetch(encodedEndpoint);
    if (json?.data) {
      const detail: BlogPostDetail = normalizePost(json.data);
      if (detail.related_posts && Array.isArray(detail.related_posts)) {
        detail.related_posts = detail.related_posts.map(normalizePost);
      }
      return detail;
    }

    if (cleanSlug.includes(' ')) {
      const rawEndpoint = `/api/blog/posts/${cleanSlug}`;
      const rawJson = await safeJsonFetch(rawEndpoint);
      if (rawJson?.data) {
        const detail: BlogPostDetail = normalizePost(rawJson.data);
        if (detail.related_posts && Array.isArray(detail.related_posts)) {
          detail.related_posts = detail.related_posts.map(normalizePost);
        }
        return detail;
      }
    }

    return null;
  } catch (err) {
    return null;
  }
}

export async function fetchCategories(): Promise<BlogCategory[]> {
  try {
    const json = await safeJsonFetch('/api/blog/categories');
    return json?.data || [];
  } catch (err) {
    return [];
  }
}

export async function fetchTags(): Promise<BlogTag[]> {
  try {
    const json = await safeJsonFetch('/api/blog/tags');
    return json?.data || [];
  } catch (err) {
    return [];
  }
}

export async function subscribeNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  try {
    const base = getApiBase();
    const res = await fetch(`${base}/api/blog/subscribe`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const text = await res.text();
    let json: any = {};
    try {
      json = text ? JSON.parse(text) : {};
    } catch {}
    return {
      success: json.success ?? res.ok,
      message: json.message || (res.ok ? 'Subscribed successfully!' : 'Subscription failed.'),
    };
  } catch (err) {
    return { success: false, message: 'Network error. Please try again.' };
  }
}

