export const site = {
  name: 'Jorge Ochipinti',
  // Keep this intentionally short; it ends up in SEO snippets.
  description:
    'Tech + entrepreneurship. Building products, writing in English and Spanish.',
  // Canonical URL. Set this in production (e.g. GitHub Pages) via env.
  // Examples:
  // - https://jorgeochipinti.github.io/<repo>
  // - https://jorgeochipinti.com
  url:
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    'http://localhost:3000',
  links: {
    github: 'https://github.com/jorgeochipinti97',
    book: 'https://the-amazing-gentleman-programming-book.vercel.app',
    x: 'https://x.com/0xchi_j',
  },
} as const
