# Next.js Blog Template

A modern, bilingual blog template built with Next.js 16, featuring premium design, i18n support, and dynamic OG images.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## ✨ Features

- 🌍 **Bilingual Support** - English & Spanish with seamless language switching
- 📝 **MDX-powered Blog** - Write posts in Markdown with React components
- 🎨 **Premium UI** - Dark theme with aurora gradients and glass morphism
- 🖼️ **Dynamic OG Images** - Auto-generated social media cards for each post
- 📱 **Fully Responsive** - Mobile-first design that works everywhere
- ⚡ **Optimized Performance** - Built on Next.js 16 with App Router
- 🔍 **SEO Ready** - Meta tags, structured data, and sitemap included
- 📰 **RSS Feed** - Automatic RSS generation for subscribers
- 🎯 **TypeScript** - Fully typed for better DX

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/next-blog.git
cd next-blog
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
next-blog/
├── app/
│   ├── [lang]/              # Internationalized routes
│   │   ├── blog/
│   │   │   ├── [slug]/      # Individual blog posts
│   │   │   └── page.tsx     # Blog listing
│   │   └── page.tsx         # Homepage
│   ├── blog/
│   │   ├── posts/           # MDX blog content
│   │   └── utils.ts         # Blog utilities
│   ├── components/          # React components
│   ├── og/                  # OG image generator
│   ├── rss/                 # RSS feed endpoint
│   └── site.ts              # Site configuration
├── public/                  # Static assets
└── README.md
```

## ✍️ Writing Blog Posts

### 1. Create a new MDX file

Create a new `.mdx` file in `app/blog/posts/`:

```
app/blog/posts/
├── my-post-en.mdx    # English version
└── my-post-es.mdx    # Spanish version
```

### 2. Add frontmatter

Each post requires frontmatter metadata:

```mdx
---
title: 'Your Post Title'
publishedAt: '2026-02-10'
summary: 'A brief description of your post for meta tags and previews'
---

Your content here...
```

### 3. Write content

Use standard Markdown with MDX enhancements:

```mdx
## Heading

Regular **markdown** _formatting_.

<Tweet tweetId="123456789" />

Code blocks with syntax highlighting:

\`\`\`typescript
const greeting = "Hello, World!"
\`\`\`
```

### 4. Language-specific slugs

Use suffixes to identify language:
- English: `post-name-en.mdx`
- Spanish: `post-name-es.mdx`

The language switcher will automatically convert between them.

## ⚙️ Configuration

### Site Settings

Edit `app/site.ts`:

```typescript
export const site = {
  name: 'Your Name',
  description: 'Your site description',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  links: {
    github: 'https://github.com/yourusername',
    x: 'https://x.com/yourusername',
  },
}
```

### Internationalization

Edit `app/i18n.ts` to customize translations:

```typescript
export const messages = {
  en: {
    nav: { home: 'home', blog: 'blog' },
    home: { title: 'Your Name', intro: 'Your tagline' },
    // ...
  },
  es: {
    nav: { home: 'inicio', blog: 'blog' },
    home: { title: 'Tu Nombre', intro: 'Tu eslogan' },
    // ...
  },
}
```

### Environment Variables

For production, set:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 🎨 Customization

### Colors

The theme uses Tailwind CSS with emerald as the accent color. To change it, update `tailwind.config.ts` and replace `emerald` references throughout the codebase.

### OG Images

Customize the Open Graph image generator in `app/og/route.tsx`. The current design features:
- Dark background (#07070a)
- Aurora gradient orbs
- Dynamic title sizing
- Brand badge

### Components

Key components to customize:
- `app/components/nav.tsx` - Navigation bar
- `app/components/footer.tsx` - Footer
- `app/components/aurora-background.tsx` - Background effects
- `app/components/press-mentions.tsx` - Press section

## 📦 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import on [Vercel](https://vercel.com)
3. Set environment variables
4. Deploy

### Other Platforms

Build the production bundle:

```bash
pnpm build
pnpm start
```

The app will be ready in `.next/`

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com)
- **Content**: [MDX](https://mdxjs.com)
- **Deployment**: [Vercel](https://vercel.com) (recommended)

## 📄 License

MIT License - feel free to use this template for your own projects.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📞 Support

If you have questions or need help:
- Open an issue on GitHub
- Check the [Next.js documentation](https://nextjs.org/docs)
- Review the code comments

---

Built with ❤️ using Next.js
