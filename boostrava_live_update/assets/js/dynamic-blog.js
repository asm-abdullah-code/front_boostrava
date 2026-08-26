/**
 * BoostRAVA Dynamic Blog Engine (SEO, AEO, GEO & Dynamic API Hydration)
 * Connects http://localhost:3000 frontend to Laravel API on http://127.0.0.1:8000/api/blog
 */

(function () {
    const isLocal = typeof window !== 'undefined' && (
        window.location.hostname === 'localhost' ||
        window.location.hostname === '127.0.0.1'
    );

    const API_ROOT = isLocal ? 'http://127.0.0.1:8000' : 'https://api.boostrava.com';
    const API_BASE = `${API_ROOT}/api/blog`;
    const FALLBACK_ICON = '/assets/images/icons/icon.png';

    // Global delegate: Clicking any "More News" button or link opens /blog/
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('button, a, div');
        if (btn && btn.textContent && btn.textContent.trim().toLowerCase() === 'more news') {
            e.preventDefault();
            window.location.href = '/blog/';
        }
    });

    function bootstrap() {
        // 1. Check if Homepage (Featured News)
        const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html' || window.location.pathname === '';
        if (isHomePage) {
            initHomepageFeaturedNews();
        }

        // 2. Check if Blog Listing Page
        const isBlogListing = window.location.pathname === '/blog' || window.location.pathname === '/blog/' || window.location.pathname === '/blog/index.html';
        if (isBlogListing) {
            initBlogListing();
        }

        // 3. Check if Blog Detail Page
        if (window.location.pathname.startsWith('/blog/') && !isBlogListing) {
            initBlogDetail();
        }

        // Global: Bind newsletter widgets if present
        initNewsletterForms();
    }

    // Run on multiple lifecycle hooks for robust hydration
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        bootstrap();
    } else {
        document.addEventListener('DOMContentLoaded', bootstrap);
    }
    window.addEventListener('load', bootstrap);
    setTimeout(bootstrap, 300);
    setTimeout(bootstrap, 1000);


    function resolveImageUrl(url) {
        if (!url) return FALLBACK_ICON;
        if (url.startsWith('http://') || url.startsWith('https://')) return url;
        if (url.startsWith('/uploads/')) return `${API_ROOT}${url}`;
        return url;
    }

    /**
     * 1. Homepage "Featured News" helper & dynamic hydration
     */
    async function initHomepageFeaturedNews() {
        try {
            const headings = Array.from(document.querySelectorAll('h2'));
            const featuredHeading = headings.find(h => h.textContent.trim().toLowerCase() === 'featured news');
            if (!featuredHeading) return;

            const sectionContainer = featuredHeading.closest('.max-w-7xl') || featuredHeading.parentElement.parentElement;
            if (!sectionContainer) return;

            const moreNewsBtn = sectionContainer.querySelector('button, a');
            if (moreNewsBtn && !moreNewsBtn.onclick) {
                moreNewsBtn.onclick = () => window.location.href = '/blog/';
            }

            const cardsContainer = sectionContainer.querySelector('.grid');
            if (!cardsContainer) return;

            const res = await fetch(`${API_BASE}/featured`);
            const json = await res.json();
            if (!json.success || !json.data || json.data.length === 0) return;

            cardsContainer.innerHTML = json.data.map(item => `
                <div class="max-w-md mx-auto min-h-96 rounded-2xl p-1 hover:bg-gradient-to-tr from-purple-400 via-blue-400 to-yellow-400 transition-all duration-500 shadow-lg cursor-pointer w-full" onclick="window.location.href='${item.url || '/blog/'}'">
                    <div class="bg-white rounded-2xl min-h-full min-w-full p-6 overflow-hidden flex flex-col justify-between">
                        <img src="${resolveImageUrl(item.featured_image)}" onerror="this.onerror=null;this.src='${FALLBACK_ICON}'" alt="${escapeHtml(item.title || '')}" class="w-full h-48 object-cover rounded-lg"/>
                        <div class="p-2 mt-4 flex-1 flex flex-col justify-between">
                            <div>
                                <span class="block text-purple-600 text-sm font-semibold mb-2">${escapeHtml(item.category ? item.category.name : 'AdTech')}</span>
                                <h2 class="font-bold text-lg md:text-xl text-gray-800 leading-snug line-clamp-2">${escapeHtml(item.title || '')}</h2>
                            </div>
                            <div class="mt-4 flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
                                <span>${escapeHtml(item.author ? item.author.name : 'BoostRAVA Team')}</span>
                                <span class="text-purple-600 font-semibold">Read &rarr;</span>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('');
        } catch (err) {
            console.warn('[BoostRAVA Dynamic Blog] Error:', err);
        }
    }

    /**
     * 2. Blog Listing Page dynamic search, categories, tags & articles
     */
    let currentPage = 1;
    let currentCategory = '';
    let currentTag = '';
    let currentSearch = '';

    async function initBlogListing() {
        bindSearchInput();
        bindCategoryFilters();
        await loadTaxonomies();
        await fetchBlogPosts();
    }

    function bindSearchInput() {
        const searchInput = document.querySelector('input[placeholder*="Search articles"]');
        if (!searchInput) return;

        let debounceTimer;
        searchInput.addEventListener('input', (e) => {
            clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                currentSearch = e.target.value.trim();
                currentPage = 1;
                fetchBlogPosts();
            }, 350);
        });
    }

    function bindCategoryFilters() {
        const categoryButtons = document.querySelectorAll('section button');
        categoryButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                categoryButtons.forEach(b => {
                    b.className = 'rounded-full border px-5 py-2 text-sm font-medium transition-colors border-border bg-background text-foreground hover:border-primary hover:text-primary';
                });
                btn.className = 'rounded-full border px-5 py-2 text-sm font-medium transition-colors border-primary bg-primary text-primary-foreground text-white';

                const catText = btn.textContent.trim().toLowerCase();
                currentCategory = (catText === 'all articles') ? '' : catText.replace(/\s+/g, '-');
                currentPage = 1;
                fetchBlogPosts();
            });
        });
    }

    async function loadTaxonomies() {
        try {
            const [catRes, tagRes] = await Promise.all([
                fetch(`${API_BASE}/categories`),
                fetch(`${API_BASE}/tags`)
            ]);
            const catJson = await catRes.json();
            const tagJson = await tagRes.json();

            // 1. Top Category Bar
            const topFilterContainer = document.querySelector('.container-section .flex.flex-wrap.gap-3');
            if (topFilterContainer && catJson.success) {
                const activeCats = catJson.data.slice(0, 6);
                topFilterContainer.innerHTML = `
                    <button type="button" class="rounded-full border px-5 py-2 text-sm font-medium transition-colors ${!currentCategory ? 'border-primary bg-primary text-white' : 'border-border bg-background text-foreground hover:border-primary hover:text-primary'}" data-category="">
                        All Articles
                    </button>
                    ${activeCats.map(c => `
                        <button type="button" class="rounded-full border px-5 py-2 text-sm font-medium transition-colors ${currentCategory === c.slug ? 'border-primary bg-primary text-white' : 'border-border bg-background text-foreground hover:border-primary hover:text-primary'}" data-category="${c.slug}">
                            ${escapeHtml(c.name)}
                        </button>
                    `).join('')}
                `;

                topFilterContainer.querySelectorAll('button').forEach(btn => {
                    btn.addEventListener('click', () => {
                        currentCategory = btn.getAttribute('data-category') || '';
                        currentPage = 1;
                        loadTaxonomies();
                        fetchBlogPosts();
                    });
                });
            }

            // 2. Sidebar Categories Widget
            const sidebarCatHeading = Array.from(document.querySelectorAll('aside h3')).find(h => h.textContent.includes('Categories'));
            if (sidebarCatHeading && catJson.success) {
                const container = sidebarCatHeading.parentElement.parentElement.querySelector('.space-y-2');
                if (container) {
                    container.innerHTML = catJson.data.slice(0, 6).map(c => `
                        <button class="w-full flex items-center justify-between p-3 rounded-lg hover:bg-purple-50 transition-colors text-left ${currentCategory === c.slug ? 'bg-purple-100 font-bold text-primary' : 'text-gray-700'}" data-cat="${c.slug}">
                            <span>${escapeHtml(c.name)}</span>
                            <span class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-semibold bg-gray-100">${c.posts_count}</span>
                        </button>
                    `).join('');

                    container.querySelectorAll('button[data-cat]').forEach(btn => {
                        btn.addEventListener('click', () => {
                            currentCategory = btn.getAttribute('data-cat');
                            currentPage = 1;
                            loadTaxonomies();
                            fetchBlogPosts();
                        });
                    });
                }
            }

            // 3. Sidebar Popular Tags Widget
            const tagsHeading = Array.from(document.querySelectorAll('aside h3')).find(h => h.textContent.includes('Popular Tags'));
            if (tagsHeading && tagJson.success) {
                const tagsContainer = tagsHeading.parentElement.parentElement.querySelector('.flex-wrap');
                if (tagsContainer) {
                    tagsContainer.innerHTML = tagJson.data.map(t => `
                        <span class="cursor-pointer inline-flex items-center justify-center rounded-md border px-2.5 py-1 text-xs font-medium transition-colors ${currentTag === t.slug ? 'bg-primary text-white' : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-primary'}" data-tag="${t.slug}">
                            #${escapeHtml(t.name)}
                        </span>
                    `).join('');

                    tagsContainer.querySelectorAll('span[data-tag]').forEach(span => {
                        span.addEventListener('click', () => {
                            currentTag = span.getAttribute('data-tag');
                            currentPage = 1;
                            fetchBlogPosts();
                        });
                    });
                }
            }
        } catch (e) {
            console.warn('[BoostRAVA] Error loading categories & tags:', e);
        }
    }

    async function fetchBlogPosts() {
        try {
            const url = new URL(`${API_BASE}/posts`);
            if (currentCategory) url.searchParams.set('category', currentCategory);
            if (currentTag) url.searchParams.set('tag', currentTag);
            if (currentSearch) url.searchParams.set('search', currentSearch);
            url.searchParams.set('page', currentPage);
            url.searchParams.set('per_page', 9);

            const res = await fetch(url.toString());
            const json = await res.json();
            if (!json.success) return;

            renderBlogArticles(json.data, json.meta);
        } catch (e) {
            console.warn('[BoostRAVA] Error loading blog posts:', e);
        }
    }

    function renderBlogArticles(posts, meta) {
        const mainContentCol = document.querySelector('.lg\\:col-span-2');
        if (!mainContentCol) return;

        const featuredHero = mainContentCol.querySelector('.h-\\[580px\\], .h-\\[540px\\]')?.closest('.mb-8');
        const secondaryGrid = mainContentCol.querySelector('.grid.grid-cols-1.md\\:grid-cols-2');

        if (!posts || posts.length === 0) {
            if (featuredHero) featuredHero.style.display = 'none';
            if (secondaryGrid) {
                secondaryGrid.innerHTML = `
                    <div class="col-span-2 py-16 text-center">
                        <div class="text-gray-400 text-5xl mb-3">🔍</div>
                        <h3 class="text-xl font-bold text-gray-700 mb-2">No articles found</h3>
                        <p class="text-gray-500 text-sm">Try searching for different keywords, categories, or clearing your filters.</p>
                        <button onclick="window.location.reload()" class="mt-4 px-5 py-2 bg-primary text-white rounded-full text-sm font-semibold">Reset Filters</button>
                    </div>
                `;
            }
            return;
        }

        const [firstPost, ...remainingPosts] = posts;

        if (featuredHero && currentPage === 1 && !currentSearch) {
            featuredHero.style.display = 'block';
            featuredHero.innerHTML = `
                <div class="relative h-[540px] rounded-3xl overflow-hidden group shadow-lg">
                    <img src="${resolveImageUrl(firstPost.featured_image)}" onerror="this.onerror=null;this.src='${FALLBACK_ICON}'" alt="${escapeHtml(firstPost.title)}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 right-0 p-8 md:p-10">
                        <span class="inline-flex items-center justify-center rounded-md border px-2.5 py-1 text-xs font-semibold bg-primary text-white mb-4">${escapeHtml(firstPost.category ? firstPost.category.name : 'Featured')}</span>
                        <h1 class="text-2xl md:text-4xl font-bold text-foreground mb-4 max-w-3xl leading-tight">${escapeHtml(firstPost.title)}</h1>
                        <p class="text-sm md:text-base text-muted-foreground mb-6 max-w-2xl">${escapeHtml(firstPost.short_description || '')}</p>
                        <div class="flex items-center gap-6 mb-6 text-sm text-muted-foreground">
                            <span>By ${escapeHtml(firstPost.author ? firstPost.author.name : 'BoostRAVA Team')}</span>
                            <span>${firstPost.reading_time || '5 min read'}</span>
                            <span>${firstPost.published_at || ''}</span>
                        </div>
                        <a href="${firstPost.url}" class="cursor-pointer inline-flex items-center justify-center gap-2 rounded-full font-semibold bg-primary text-white hover:bg-purple-700 text-base px-6 py-2.5 group text-decoration-none">
                            Read Article &rarr;
                        </a>
                    </div>
                </div>
            `;
        } else if (featuredHero) {
            featuredHero.style.display = 'none';
        }

        const renderList = (featuredHero && currentPage === 1 && !currentSearch) ? remainingPosts : posts;

        if (secondaryGrid) {
            secondaryGrid.innerHTML = renderList.map(post => `
                <div>
                    <a class="group block h-full text-decoration-none" href="${post.url}">
                        <div class="bg-card text-card-foreground flex flex-col gap-4 rounded-2xl border py-4 group overflow-hidden border-border shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 h-full bg-white">
                            <div class="relative overflow-hidden h-48">
                                <img src="${resolveImageUrl(post.featured_image)}" onerror="this.onerror=null;this.src='${FALLBACK_ICON}'" alt="${escapeHtml(post.title)}" class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"/>
                                <div class="absolute top-4 left-4">
                                    <span class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-semibold bg-primary text-white">${escapeHtml(post.category ? post.category.name : 'AdTech')}</span>
                                </div>
                            </div>
                            <div class="p-5 flex flex-1 flex-col justify-between">
                                <div>
                                    <h3 class="text-lg font-bold mb-2 group-hover:text-primary transition-colors text-gray-800 leading-snug">${escapeHtml(post.title)}</h3>
                                    <p class="text-xs md:text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed text-gray-500">${escapeHtml(post.short_description || '')}</p>
                                </div>
                                <div class="flex items-center justify-between text-xs text-muted-foreground border-t border-border pt-3">
                                    <div class="flex items-center gap-3">
                                        <span>${escapeHtml(post.author ? post.author.name : 'BoostRAVA Team')}</span>
                                        <span>&bull;</span>
                                        <span>${post.published_at || ''}</span>
                                    </div>
                                    <span class="text-primary font-semibold group-hover:translate-x-1 transition-transform">&rarr;</span>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
            `).join('');
        }
    }

    /**
     * 3. Blog Detail Page Dynamic Hydrator
     */
    async function initBlogDetail() {
        const segments = window.location.pathname.split('/').filter(Boolean);
        if (segments.length < 2 || segments[0] !== 'blog') return;
        const slug = segments[1];

        try {
            const res = await fetch(`${API_BASE}/posts/${slug}`);
            const json = await res.json();
            if (!json.success || !json.data) return;

            const post = json.data;

            // Update Page Meta & SEO
            if (post.seo) {
                if (post.seo.meta_title) document.title = post.seo.meta_title;
                setMetaTag('description', post.seo.meta_description);
                setMetaProperty('og:title', post.seo.og_title);
                setMetaProperty('og:description', post.seo.og_description);
                setMetaProperty('og:image', resolveImageUrl(post.seo.og_image));
                setMetaTag('twitter:title', post.seo.og_title);
                setMetaTag('twitter:description', post.seo.og_description);
                setMetaTag('twitter:image', resolveImageUrl(post.seo.og_image));

                // Inject Structured Data JSON-LD Schema
                if (post.seo.json_ld && Array.isArray(post.seo.json_ld)) {
                    post.seo.json_ld.forEach(schemaObj => {
                        const script = document.createElement('script');
                        script.type = 'application/ld+json';
                        script.text = JSON.stringify(schemaObj);
                        document.head.appendChild(script);
                    });
                }
            }

            // Update Article Headings & Text
            const h1 = document.querySelector('article h1');
            if (h1) h1.innerText = post.title;

            const categoryBadge = document.querySelector('article [data-slot="badge"]');
            if (categoryBadge && post.category) categoryBadge.innerText = post.category.name;

            const leadDesc = document.querySelector('article p.text-muted-foreground');
            if (leadDesc && post.short_description) leadDesc.innerText = post.short_description;

            // Update Hero Image
            const heroImg = document.querySelector('article .relative.overflow-hidden.rounded-3xl img');
            if (heroImg && post.featured_image) {
                heroImg.src = resolveImageUrl(post.featured_image);
                heroImg.onerror = () => { heroImg.src = FALLBACK_ICON; };
                heroImg.alt = post.featured_image_alt || post.title;
            }

            // Update Author & Date Info
            const authorSpan = document.querySelector('article .lucide-user')?.parentElement;
            if (authorSpan && post.author) {
                authorSpan.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                    <span>${escapeHtml(post.author.name)}</span>
                `;
            }

            const dateSpan = document.querySelector('article .lucide-calendar-days')?.parentElement;
            if (dateSpan && post.published_at) {
                dateSpan.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-calendar-days"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect width="18" height="18" x="3" y="4" rx="2"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
                    <span>${post.published_at}</span>
                `;
            }

            const timeSpan = document.querySelector('article .lucide-clock')?.parentElement;
            if (timeSpan && post.reading_time) {
                timeSpan.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    <span>${post.reading_time}</span>
                `;
            }

            // Update Main Body Content
            if (post.content) {
                const contentContainer = document.querySelector('article .space-y-10.text-\\[15px\\], article .space-y-10');
                if (contentContainer) {
                    contentContainer.innerHTML = post.content;
                }
            }

            // Update Key Takeaways
            if (post.key_takeaways && post.key_takeaways.length > 0) {
                const takeawaysUl = document.querySelector('article [data-slot="card"] ul.space-y-3');
                if (takeawaysUl) {
                    takeawaysUl.innerHTML = post.key_takeaways.map(k => `
                        <li class="flex items-start gap-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-check text-primary mt-0.5 shrink-0"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                            <span>${escapeHtml(k)}</span>
                        </li>
                    `).join('');
                }
            }

            // Update Sidebar Details
            const articleDetailsCard = Array.from(document.querySelectorAll('aside [data-slot="card"]')).find(c => c.textContent.includes('Article details') || c.textContent.includes('ARTICLE DETAILS'));
            if (articleDetailsCard) {
                const spaceDiv = articleDetailsCard.querySelector('.space-y-4');
                if (spaceDiv) {
                    const catName = post.category ? post.category.name : 'General';
                    const authorName = post.author ? post.author.name : 'BoostRAVA Team';
                    const authorRole = post.author ? (post.author.role || 'Editorial Team') : 'Editorial Team';
                    const pubDate = post.published_at || 'Recently';
                    const readTime = post.reading_time || '5 min read';
                    spaceDiv.innerHTML = `
                        <p>Category: ${escapeHtml(catName)}</p>
                        <p>Author: ${escapeHtml(authorName)}</p>
                        <p>Role: ${escapeHtml(authorRole)}</p>
                        <p>Published: ${escapeHtml(pubDate)}</p>
                        <p>Read time: ${escapeHtml(readTime)}</p>
                    `;
                }
            }

            // Update Sidebar Topics / Tags
            const topicsCard = Array.from(document.querySelectorAll('aside [data-slot="card"]')).find(c => c.textContent.includes('Topics covered') || c.textContent.includes('TOPICS COVERED'));
            if (topicsCard) {
                const tagsContainer = topicsCard.querySelector('.flex-wrap');
                if (tagsContainer) {
                    if (post.tags && post.tags.length > 0) {
                        tagsContainer.innerHTML = post.tags.map(t => `
                            <span data-slot="badge" class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 border-transparent bg-secondary text-secondary-foreground">
                                ${escapeHtml(t.name)}
                            </span>
                        `).join('');
                    } else if (post.category) {
                        tagsContainer.innerHTML = `
                            <span data-slot="badge" class="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 border-transparent bg-secondary text-secondary-foreground">
                                ${escapeHtml(post.category.name)}
                            </span>
                        `;
                    }
                }
            }

            // Update FAQs if present
            if (post.faqs && post.faqs.length > 0) {
                const faqSection = Array.from(document.querySelectorAll('article section')).find(s => s.textContent.includes('Frequently asked questions'));
                if (faqSection) {
                    const faqCardsContainer = faqSection.querySelector('.space-y-4');
                    if (faqCardsContainer) {
                        faqCardsContainer.innerHTML = post.faqs.map(f => `
                            <div data-slot="card" class="bg-card text-card-foreground flex flex-col gap-6 rounded-xl border shadow-sm p-6">
                                <h3 class="text-lg font-semibold mb-2">${escapeHtml(f.question)}</h3>
                                <p class="text-muted-foreground leading-7">${escapeHtml(f.answer)}</p>
                            </div>
                        `).join('');
                    }
                }
            }

            // If AEO Quick Answer exists, make sure it renders
            if (post.quick_answer) {
                const existingAeo = document.getElementById('boostrava-aeo-box');
                if (!existingAeo) {
                    const heroImgContainer = document.querySelector('article .relative.overflow-hidden.rounded-3xl');
                    if (heroImgContainer) {
                        const aeoBox = document.createElement('div');
                        aeoBox.id = 'boostrava-aeo-box';
                        aeoBox.className = 'my-6 p-6 rounded-2xl border-l-4 border-primary bg-primary/5 text-foreground shadow-sm';
                        aeoBox.innerHTML = `
                            <div class="flex items-center gap-2 text-xs font-bold text-primary uppercase tracking-wider mb-2">
                                <span>⚡ Direct Quick Answer (AEO)</span>
                            </div>
                            <p class="text-base font-medium leading-relaxed">${escapeHtml(post.quick_answer)}</p>
                        `;
                        heroImgContainer.insertAdjacentElement('afterend', aeoBox);
                    }
                }
            }
        } catch (e) {
            console.warn('[BoostRAVA] Error hydrating blog detail:', e);
        }
    }

    /**
     * 4. Newsletter Subscription Form Handler
     */
    function initNewsletterForms() {
        const stayUpdatedHeading = Array.from(document.querySelectorAll('h3')).find(h => h.textContent.includes('Stay Updated'));
        if (stayUpdatedHeading) {
            const container = stayUpdatedHeading.parentElement;
            const input = container.querySelector('input');
            const button = container.querySelector('button');

            if (input && button && !button._bound) {
                button._bound = true;
                button.addEventListener('click', async () => {
                    const email = input.value.trim();
                    if (!email || !email.includes('@')) {
                        alert('Please enter a valid email address.');
                        return;
                    }

                    button.disabled = true;
                    button.innerText = 'Subscribing...';

                    try {
                        const res = await fetch(`${API_BASE}/subscribe`, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ email })
                        });
                        const data = await res.json();
                        if (data.success) {
                            input.value = '';
                            button.innerText = 'Subscribed!';
                            alert('Thank you for subscribing to BoostRAVA AdTech insights!');
                        } else {
                            button.innerText = 'Subscribe';
                            button.disabled = false;
                        }
                    } catch (err) {
                        button.innerText = 'Subscribe';
                        button.disabled = false;
                    }
                });
            }
        }
    }

    // Helper functions
    function escapeHtml(text) {
        if (!text) return '';
        const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
        return text.toString().replace(/[&<>"']/g, m => map[m]);
    }

    function setMetaTag(name, content) {
        if (!content) return;
        let tag = document.querySelector(`meta[name="${name}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            tag.name = name;
            document.head.appendChild(tag);
        }
        tag.content = content;
    }

    function setMetaProperty(property, content) {
        if (!content) return;
        let tag = document.querySelector(`meta[property="${property}"]`);
        if (!tag) {
            tag = document.createElement('meta');
            tag.setAttribute('property', property);
            document.head.appendChild(tag);
        }
        tag.content = content;
    }
})();
