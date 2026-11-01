# Google Search Console Setup Guide
## Resonance Kinesiology — kinesiology.danielebuatti.com

---

## Current Status

✅ **Verification meta tag already in index.html:**
```html
<meta name="google-site-verification" content="DYPd1bslXx-JpunG6kS52-jWFOIFa6WxQeh2uSn23KI" />
```

This means **ownership is already verified** if you added this property to Search Console.

---

## Step 1: Add Property in Search Console

1. Go to **https://search.google.com/search-console/**
2. Click **"Add property"** (top-left dropdown)
3. Select **"URL prefix"** (not Domain)
4. Enter: `https://kinesiology.danielebuatti.com/`
5. Click **Continue**
6. Verification method: **HTML tag** → should auto-verify since tag is in index.html
7. If not auto-verified: copy the meta tag content and confirm it matches `DYPd1bslXx-JpunG6kS52-jWFOIFa6WxQeh2uSn23KI`

---

## Step 2: Submit Sitemap

1. In left sidebar: **Sitemaps**
2. Enter: `sitemap.xml`
3. Click **Submit**
4. Status should show "Success" within hours

**Current sitemap:** https://kinesiology.danielebuatti.com/sitemap.xml

---

## Step 3: Request Indexing for Key Pages

For each critical page, use **URL Inspection** → **Request Indexing**:

| Priority | URL | Why |
|---|---|---|
| 1 | `https://kinesiology.danielebuatti.com/` | Homepage - main conversion page |
| 2 | `https://kinesiology.danielebuatti.com/book-session` | Booking conversion page |
| 3 | `https://kinesiology.danielebuatti.com/schedule` | Embedded booking calendars |

---

## Step 4: Configure Settings

### International Targeting
- **Settings** → **International targeting** → **Australia** (or leave unlisted for global)

### Crawl Rate
- **Settings** → **Crawl rate** → "Let Google optimize for my site" (default)

### Preferred Domain
- Not needed (single domain, no www variant)

---

## Step 5: Connect Google Analytics (GA4)

Once you have GA4 set up:

1. **Admin** (gear icon) → **Property** → **Product Links** → **Google Analytics 4**
2. Link your GA4 property
3. Enables: Organic search queries in GA4, better attribution

---

## Step 6: Monitor These Reports Weekly

### Performance → Search Results
**Key metrics:**
- **Total clicks** — actual visits from Google
- **Total impressions** — how often you appear
- **Average CTR** — click-through rate (target > 2%)
- **Average position** — ranking (target top 10 for branded, top 20 for local)

**Dimensions to analyze:**
- **Queries** — what people actually search
- **Pages** — which URLs get traffic
- **Countries** — should be mostly Australia
- **Devices** — mobile vs desktop
- **Search appearance** — rich results, AMP, etc.

### Indexing → Pages
- **Indexed** vs **Not indexed** — fix "Crawled - currently not indexed"
- **Sitemaps** — confirm submitted URLs are indexed

### Experience → Page Experience
- Core Web Vitals (LCP, FID, CLS) — aim for "Good"
- HTTPS — should be valid
- Mobile usability — no errors

### Enhancements
- **FAQ** — should show your FAQPage schema (from BookSession page)
- **LocalBusiness** — should show your LocalBusiness schema
- **Service** — should show your Service schema

---

## Step 7: Fix Common Issues

### "Discovered - currently not indexed"
- Content may be thin or duplicate
- Fix: Add unique, substantial content to those pages
- Request indexing after update

### "Alternate page with proper canonical tag"
- Usually the Vercel deployment URLs
- Ensure canonical tags point to `https://kinesiology.danielebuatti.com/`

### "Redirect error" or "Server error (5xx)"
- Check Vercel deployment logs
- Usually temporary

---

## Step 8: Target Keywords to Track

**Branded (should rank #1):**
- "Resonance Kinesiology"
- "Daniele Buatti kinesiology"
- "Daniele Buatti Toorak"

**Local service (target top 3-10):**
- "kinesiology Toorak"
- "kinesiologist Toorak"
- "nervous system regulation Toorak"
- "somatic kinesiology Melbourne"
- "functional neuro health practitioner Melbourne"

**Problem-aware (target top 10-20):**
- "kinesiology for anxiety Melbourne"
- "primitive reflex integration Melbourne"
- "vocal freedom coaching Melbourne"
- "somatic therapy Toorak"

---

## Step 9: Monthly Action Checklist

| Task | Frequency |
|---|---|
| Check Performance report for new queries | Weekly |
| Request indexing for updated pages | After each deploy |
| Review Coverage errors | Weekly |
| Check Core Web Vitals | Monthly |
| Submit new URLs if added | As needed |
| Review manual actions (Security & Manual Actions) | Monthly |
| Export top queries to content plan | Monthly |

---

## Step 10: Advanced — Content Opportunities from GSC

1. **Export queries** (Performance → Export → Google Sheets)
2. **Filter:** Impressions > 10, Position > 10, CTR < 2%
3. **Create content** for those queries:
   - Blog post: "What to expect in your first kinesiology session"
   - FAQ page: Expand BookSession FAQs
   - Service pages: Dedicated pages for each modality
   - Location pages: "Kinesiology Richmond", "Kinesiology South Yarra"

---

## Quick Links

- **Search Console:** https://search.google.com/search-console/?resource_id=https%3A%2F%2Fkinesiology.danielebuatti.com%2F
- **Rich Results Test:** https://search.google.com/test/rich-results
- **URL Inspection:** In Search Console → URL Inspection tool
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **PageSpeed Insights:** https://pagespeed.web.dev/

---

## Troubleshooting

| Problem | Solution |
|---|---|
| Property not verifying | Confirm meta tag in live HTML: `curl -s https://kinesiology.danielebuatti.com/ \| grep google-site-verification` |
| Sitemap "Couldn't fetch" | Check robots.txt allows `/sitemap.xml`, check Vercel headers |
| No data after weeks | Site may be too new/low authority — focus on content + GBP |
| Manual action | Check Security & Manual Actions → fix issue → Request review |
| Sudden drop in impressions | Check Coverage for new errors, check for algorithm update dates |