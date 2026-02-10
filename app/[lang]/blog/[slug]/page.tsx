import Link from 'next/link'
import { notFound } from 'next/navigation'

import { AuroraBackground } from 'app/components/aurora-background'
import { CustomMDX } from 'app/components/mdx'
import {
  formatDate,
  getBlogPosts,
  getPostLang,
  getPostVisibleLangs,
} from 'app/blog/utils'
import { isLang, type Lang, withLang, messages } from 'app/i18n'
import { baseUrl } from 'app/sitemap'

export async function generateStaticParams() {
  let posts = getBlogPosts()

  return posts.flatMap((post) => {
    let langs = getPostVisibleLangs(post)
    return langs.map((lang) => ({ lang, slug: post.slug }))
  })
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  let { lang, slug } = await params
  if (!isLang(lang)) {
    return
  }

  let post = getBlogPosts().find((p) => p.slug === slug)
  if (!post) {
    return
  }

  let postLang = getPostLang(post)
  if (postLang && postLang !== lang) {
    return
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata

  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${baseUrl}/${lang}/blog/${post.slug}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  }
}

export default async function Blog({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>
}) {
  let { lang, slug } = await params
  if (!isLang(lang)) {
    notFound()
  }

  let post = getBlogPosts().find((p) => p.slug === slug)
  if (!post) {
    notFound()
  }

  let postLang = getPostLang(post)
  if (postLang && postLang !== lang) {
    notFound()
  }

  let t = messages[lang]

  return (
    <section className="relative">
      {/* Aurora Background - Subtle for reading */}
      <AuroraBackground intensity="subtle" />

      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${baseUrl}${post.metadata.image}`
              : `/og?title=${encodeURIComponent(post.metadata.title)}`,
            url: `${baseUrl}/${lang}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Jorge Ochipinti',
            },
          }),
        }}
      />

      {/* Back Link */}
      <Link
        href={withLang(lang, '/blog')}
        className="relative z-10 animate-enter-up group inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-emerald-400 transition-colors duration-300 mb-6 sm:mb-8"
        style={{ animationDelay: '0ms' }}
      >
        <svg
          className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform duration-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
        </svg>
        <span>{lang === 'es' ? 'Volver al blog' : 'Back to blog'}</span>
      </Link>

      {/* Article Header */}
      <header className="relative z-10 mb-10 sm:mb-12">
        {/* Category Badge */}
        <div
          className="animate-enter-up mb-3 sm:mb-4"
          style={{ animationDelay: '60ms' }}
        >
          <span className="inline-flex items-center gap-2 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] sm:text-xs font-medium text-emerald-400">
            <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse" />
            {lang === 'es' ? 'Artículo' : 'Article'}
          </span>
        </div>

        {/* Title */}
        <h1
          className="animate-enter-up title text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] text-neutral-100 mb-4 sm:mb-6"
          style={{ animationDelay: '120ms' }}
        >
          {post.metadata.title}
        </h1>

        {/* Meta Info */}
        <div
          className="animate-enter-up flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-neutral-500"
          style={{ animationDelay: '180ms' }}
        >
          <div className="flex items-center gap-2">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
              />
            </svg>
            <time>{formatDate(post.metadata.publishedAt, lang)}</time>
          </div>

          <span className="text-neutral-700 hidden sm:inline">|</span>

          <div className="flex items-center gap-2">
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-500/60"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>{lang === 'es' ? '5 min lectura' : '5 min read'}</span>
          </div>
        </div>

        {/* Decorative Line */}
        <div
          className="animate-enter-up mt-6 sm:mt-8 h-px bg-gradient-to-r from-emerald-500/40 via-white/10 to-transparent"
          style={{ animationDelay: '240ms' }}
        />
      </header>

      {/* Article Content */}
      <article
        className="relative z-10 animate-enter-up prose prose-invert prose-emerald"
        style={{ animationDelay: '300ms' }}
      >
        <CustomMDX source={post.content} />
      </article>

      {/* Bottom Navigation */}
      <footer
        className="relative z-10 animate-enter-up mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-white/10"
        style={{ animationDelay: '360ms' }}
      >
        <Link
          href={withLang(lang, '/blog')}
          className="group glass-card inline-flex items-center gap-3 px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm text-neutral-300 hover:text-white transition-colors duration-300"
        >
          <svg
            className="w-3.5 h-3.5 sm:w-4 sm:h-4 transform group-hover:-translate-x-1 transition-transform duration-300 text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
          </svg>
          <span>{lang === 'es' ? 'Ver todos los artículos' : 'View all articles'}</span>
        </Link>
      </footer>
    </section>
  )
}
