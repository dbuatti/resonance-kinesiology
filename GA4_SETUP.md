# Google Analytics 4 (GA4) Setup Guide
## Resonance Kinesiology — kinesiology.danielebuatti.com

---

## Step 1: Create GA4 Property

1. Go to **https://analytics.google.com/**
2. Sign in with `daniele.kinesiology@gmail.com`
3. **Admin** (gear icon, bottom left) → **Create** → **Property**
4. **Property name:** `Resonance Kinesiology`
5. **Reporting time zone:** `Australia/Melbourne (GMT+10)`
6. **Currency:** `Australian Dollar (AUD)`
7. **Next** → **Business details:**
   - Industry: `Healthcare` → `Alternative Medicine`
   - Business size: `Small (1-10 employees)`
   - How do you intend to use Analytics? Check all that apply
8. **Create**

---

## Step 2: Create Data Stream (Web)

1. In the new property: **Admin** → **Data Streams** → **Web**
2. **Website URL:** `https://kinesiology.danielebuatti.com/`
3. **Enhanced measurement:** **ON** (recommended)
   - Scrolls, video plays, file downloads, form interactions, site search
4. **Create stream**
5. **Copy the Measurement ID** (format: `G-XXXXXXXXXX`)

---

## Step 3: Configure the Data Stream

Click the stream you just created → **Configure tag settings**:

### Enhanced Measurement (review each)
- [x] Page views
- [x] Scrolls (90%)
- [x] Video plays
- [x] File downloads
- [x] Form interactions
- [x] Site search (query parameter: `q`, `s`, `search`, `query`)
- [ ] Outbound clicks (optional - tracks clicks to Cal.com, Acuity, Instagram)

### Settings
- **Session timeout:** 30 minutes (default)
- **Timer for engaged sessions:** 10 seconds (default)

---

## Step 4: Add Measurement ID to Your Site

### Option A: Environment Variable (Recommended)
1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Edit `.env.local`:
   ```env
   VITE_GA4_MEASUREMENT_ID=G-YOUR_ACTUAL_ID_HERE
   ```

### Option B: Direct in index.html (Quick test)
Replace `G-XXXXXXXXXX` in `index.html` with your actual ID.

---

## Step 5: Verify Installation

### Real-time Report
1. GA4 Home → **Realtime** report
2. Visit your site
3. You should see **1 active user (you)** within seconds

### DebugView (for development)
1. **Admin** → **DebugView** (under Property column)
2. Add `?debug_mode=true` to your URL or use GA Debugger Chrome extension
4. Events appear in real-time with parameters

### Network Tab Check
1. Open DevTools → Network tab
2. Filter: `gtag` or `collect`
3. Look for request to `region1.google-analytics.com/g/collect` or `www.google-analytics.com/g/collect`
4. Status 200/204 = working

---

## Step 6: Configure Events & Conversions

### Recommended Custom Events
Track these via the existing Cal.com/Acuity integration or add manually:

| Event Name | Trigger | Purpose |
|---|---|---|
| `booking_started` | Click "Book Assessment" / "Book Free Session" | Funnel start |
| `booking_completed` | Cal.com/Acuity success callback | Primary conversion |
| `contact_email_click` | Click email in footer/contact | Lead indicator |
| `phone_click` | Click phone number | Lead indicator |
| `directions_click` | Click map/address | Local intent |
| `faq_expand` | Accordion open in FAQ section | Engagement |

### Implementation (add to components)
```tsx
// Example: Track booking button clicks
const handleBookingClick = (sessionType: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', 'booking_started', {
      session_type: sessionType, // 'fnh-assessment' | 'free-access'
      page_path: window.location.pathname
    });
  }
};
```

### Mark as Conversions
1. **Admin** → **Events** → Find your events
2. Toggle **"Mark as conversion"** for:
   - `booking_completed` (primary)
   - `contact_email_click` (micro-conversion)
   - `phone_click` (micro-conversion)

---

## Step 7: Set Up Audiences (for Remarketing)

**Admin** → **Audiences** → **New audience** → **Create custom**:

| Audience Name | Condition | Use Case |
|---|---|---|
| `Booking Page Visitors` | `page_path` contains `/book-session` | Remarketing to interested |
| `High Intent` | `event_name` = `booking_started` | High-value remarketing |
| `Local Visitors` | `geo.region` = `Victoria` AND `page_path` = `/` | Local awareness |
| `Engaged Readers` | `engagement_time_msec` > 60000 | Content consumers |

---

## Step 8: Link Google Ads (if running ads)

1. **Admin** → **Product Links** → **Google Ads**
2. Link your Google Ads account
3. Enables: Import GA4 conversions to Ads, audience sharing

---

## Step 9: Data Retention & Privacy

**Admin** → **Data Settings** → **Data Retention**:
- **Event data retention:** 14 months (max for free)
- **Reset user data on new activity:** ON

**Admin** → **Data Settings** → **Data Collection**:
- **Google signals:** ON (enables demographics, cross-device)
- **Acknowledge user data collection:** Required for Australia

---

## Step 10: Consent Mode (Australia Privacy Act)

Australia's Privacy Act 1988 + APPs require consent for analytics cookies.

### Quick Implementation (Google Consent Mode v2)
Add to `index.html` **before** gtag script:

```html
<!-- Google Consent Mode v2 -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'analytics_storage': 'granted', // analytics OK without explicit consent in AU
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'wait_for_update': 500
  });
</script>
```

Then your existing gtag config loads after.

### Better: Cookie Banner
Use a consent management platform (CMP) like:
- **CookieYes** (free tier)
- **Cookiebot** (paid)
- **OneTrust** (enterprise)

---

## Step 11: Reports to Build (Explore Tab)

### 1. Acquisition Overview
- Session source/medium vs. conversions
- Organic search → booking_completed

### 2. Local Traffic Report
- Filter: Country = Australia, Region = Victoria
- Pages: /, /book-session, /schedule

### 3. Conversion Funnel
```
Page View (/) 
  → Page View (/book-session) 
    → Event: booking_started 
      → Event: booking_completed
```

### 4. Content Performance
- Landing page + engagement time + scroll depth
- Identify content to expand

### 5. Device & Browser Tech
- Mobile vs Desktop conversion rates
- Fix mobile UX issues first

---

## Step 12: Monthly Dashboard Checklist

| Metric | Target | Action if Below |
|---|---|---|
| Sessions | > 100/mo | Content + SEO + GBP |
| Organic Sessions | > 30/mo | SEO improvements |
| Booking Started | > 10/mo | CRO on booking page |
| Booking Completed | > 5/mo | Follow up leads |
| Avg Engagement Time | > 60 sec | Better content/UX |
| Bounce Rate | < 60% | Improve page relevance |
| Mobile Conversion Rate | > Desktop | Fix mobile UX |

---

## Quick Links

- **GA4 Home:** https://analytics.google.com/
- **Admin:** https://analytics.google.com/analytics/web/?hl=en#/admin/
- **DebugView:** https://analytics.google.com/analytics/web/?hl=en#/debugview/
- **Realtime:** https://analytics.google.com/analytics/web/?hl=en#/realtime/
- **Explore:** https://analytics.google.com/analytics/web/?hl=en#/explore/
- **GA4 Demo Account:** https://support.google.com/analytics/answer/6367342 (for learning)

---

## Vercel Environment Variables

Add in **Vercel Dashboard** → **Settings** → **Environment Variables**:

| Name | Value | Environment |
|---|---|---|
| `VITE_GA4_MEASUREMENT_ID` | `G-XXXXXXXXXX` | Production, Preview, Development |

Then redeploy.

---

## Troubleshooting

| Issue | Fix |
|---|---|
| No data in Realtime | Check Measurement ID matches, check ad blockers, try incognito |
| "Not set" for page_title | Ensure `<title>` is set before gtag loads (React Helmet or index.html) |
| Double page views | SPA tracking + gtag page_view both firing → disable `send_page_view: false` in config (already done) |
| Missing conversions | Check event names match exactly, mark as conversion in Admin |
| Cross-domain (Cal.com/Acuity) | Add `gtag('config', 'G-XXXXXXXXXX', { 'linker': { 'domains': ['cal.com', 'acuityscheduling.com'] } });` |
| Vercel Preview deployments tracking | Use different GA4 property or filter by hostname in reports |