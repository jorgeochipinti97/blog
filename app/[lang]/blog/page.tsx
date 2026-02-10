import { notFound } from 'next/navigation'

import { AuroraBackground, AuroraOrb } from 'app/components/aurora-background'
import { BlogPosts } from 'app/components/posts'
import { isLang, messages, type Lang } from 'app/i18n'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  let { lang } = await params
  if (!isLang(lang)) {
    return {}
  }

  let t = messages[lang]

  return {
    title: t.blog.metaTitle,
    description: t.blog.metaDescription,
  }
}

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  let { lang } = await params
  if (!isLang(lang)) {
    notFound()
  }

  let t = messages[lang]

  return (
    <section className="relative">
      {/* Aurora Background - Properly Diffused */}
      <AuroraBackground intensity="medium" />

      {/* Hero Section */}
      <header className="relative z-10 mb-12 sm:mb-16">
        {/* Decorative Element */}
        <div
          className="animate-enter-up mb-4 sm:mb-6 inline-flex items-center gap-2"
          style={{ animationDelay: '0ms' }}
        >
          <div className="h-px w-6 sm:w-8 bg-gradient-to-r from-emerald-500 to-transparent" />
          <span className="text-[10px] sm:text-xs font-medium tracking-[0.2em] text-emerald-400/80 uppercase">
            {lang === 'es' ? 'Artículos' : 'Articles'}
          </span>
        </div>

        <h1
          className="animate-enter-up text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-[-0.03em] text-neutral-100 mb-3 sm:mb-4"
          style={{ animationDelay: '60ms' }}
        >
          <span className="text-gradient-emerald">{t.blog.title}</span>
        </h1>

        <p
          className="animate-enter-up max-w-lg text-sm sm:text-base lg:text-lg leading-relaxed text-neutral-400"
          style={{ animationDelay: '120ms' }}
        >
          {t.blog.subtitle}
        </p>

        {/* Decorative line */}
        <div
          className="animate-enter-up mt-8 sm:mt-10 h-px bg-gradient-to-r from-emerald-500/40 via-white/10 to-transparent"
          style={{ animationDelay: '180ms' }}
        />
      </header>

      {/* Posts Grid */}
      <div
        className="relative z-10 animate-enter-up"
        style={{ animationDelay: '240ms' }}
      >
        <BlogPosts lang={lang} />
      </div>

      {/* Bottom Decorative Orb */}
      <AuroraOrb size="lg" className="-bottom-40 right-0" />
    </section>
  )
}
