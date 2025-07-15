# 🦊 Foxiz News

**Foxiz News** is a modern, category-based news platform built with Next.js, delivering real-time and static content using ISR (Incremental Static Regeneration) and dynamic API routes. Stay updated with trending topics across Entertainment, Technology, Sports, Science, and more — all wrapped in a fast, SEO-optimized experience.

![Foxiz News Screenshot](https://github.com/neuro-tx/foxiz-news/blob/main/public/imgs/main.png?raw=true)

---

## 🎨 Customization

Foxiz News is built with flexibility in mind. You can easily tailor the app to match your brand or personal style:

- **Color Themes** — Tweak Tailwind configuration or use CSS variables to update color palettes.
- **Layout Options** — Switch between grid, list, or card views with minimal code changes.
- **Component Swapping** — Replace or extend components like `NewsCard`, `Navbar`, or `Footer` to match your UX needs.
- **Dark Mode** — Fully supported out-of-the-box via Tailwind’s `dark:` class system.

![Foxiz News Screenshot](https://github.com/neuro-tx/foxiz-news/blob/main/public/imgs/layout.png?raw=true)

---

## 🚀 Features

- ⚡ **Dynamic Category Routing** — Navigate through `/news/[category]` pages powered by dynamic segments.
- 🧠 **ISR (Incremental Static Regeneration)** — Ensures fresh content with blazing speed.
- 🌐 **SEO-Optimized Metadata** — Dynamic titles, descriptions, and OG images per page.
- 💡 **Custom News API Integration** — Fetches data per category using serverless functions.
- 🧩 **Reusable UI Components** — Clean card design, dark mode friendly, and fully responsive.
- 🎯 **Loading UI Support** — Seamless UX with route-level loading indicators.

---

## 🛠️ Tech Stack

- **Next.js 14 (App Router)**
- **Tailwind CSS**
- **TypeScript**
- **Dynamic API Routes (Route Handlers)**
- **SEO Metadata API**
- **NewsAPI / NewsData.io Integration**

---

### 📌 Supported Categories

Foxiz News supports multiple categories of news content to keep you updated on your interests:

- 📰 **General**
- 🔬 **Science**
- 💻 **Technology**
- 🏅 **Sports**
- 🎭 **Entertainment**
- 💼 **Business**
- 🏥 **Health**

You can access category-specific pages by navigating to:
- `api/news/science`
- `api/news/technology`
- `api/news/entertainment`

---

## 📦 Getting Started
**1. Clone the repository**

```bash
git clone https://github.com/neuro-tx/foxiz-news.git
cd foxiz-news
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

```bash
NEXT_PUBLIC_NEWSAPI_KEY
NEXT_PUBLIC_GNEWS_KEY
NEXT_PUBLIC_THENEWSAPI_KEY

NEXT_PUBLIC_BASE_URL
```

**4. Run the app**

```bash
npm run start
```


