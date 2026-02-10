import { notFound } from 'next/navigation'

import { AuroraBackground, AuroraOrb } from 'app/components/aurora-background'
import { BlogPosts } from 'app/components/posts'
import { PressMentions } from 'app/components/press-mentions'
import { TwitterEmbed } from 'app/components/TwitterEmbed'
import { isLang, messages, type Lang } from 'app/i18n'

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

      <header className="relative z-10">
        <h1
          className="animate-enter-up mb-4 text-3xl font-semibold tracking-[-0.03em] text-neutral-100"
          style={{ animationDelay: '0ms' }}
        >
          {t.home.title}
        </h1>
        <p
          className="animate-enter-up mb-10 max-w-prose leading-relaxed text-neutral-300"
          style={{ animationDelay: '80ms' }}
        >
          {t.home.intro}
        </p>
      </header>

      {/* Press Mentions */}
      <div className="relative z-10 animate-enter-up mb-12" style={{ animationDelay: '120ms' }}>
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px w-8 bg-gradient-to-r from-emerald-500 to-transparent" />
          <h2 className="text-xs font-medium tracking-[0.2em] text-emerald-400/80 uppercase">
            {t.home.press}
          </h2>
        </div>
        <PressMentions lang={lang} />
      </div>

      <div className="relative z-10 animate-enter-up mb-12" style={{ animationDelay: '200ms' }}>
        <div className="mb-4 flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
          <p className="text-xs font-medium tracking-[0.14em] text-emerald-400/70 uppercase">
            {t.home.portfolio}
          </p>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent" />
        </div>
        <div className="space-y-3">
          <a
            href="https://onfit.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <article className="glass-card noise-overlay relative p-4 sm:p-5 transition-all duration-500 ease-out group-hover:border-emerald-500/20">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-sm sm:text-base font-medium text-neutral-200 group-hover:text-white transition-colors duration-300">
                  {t.home.onfit}
                </span>
                <svg
                  className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400/70 transform group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </article>
          </a>
          <a
            href="https://sport.adues.org.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <article className="glass-card noise-overlay relative p-4 sm:p-5 transition-all duration-500 ease-out group-hover:border-emerald-500/20">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 flex items-center justify-between">
                <span className="text-sm sm:text-base font-medium text-neutral-200 group-hover:text-white transition-colors duration-300">
                  {t.home.aduesSport}
                </span>
                <svg
                  className="w-4 h-4 text-neutral-500 group-hover:text-emerald-400/70 transform group-hover:translate-x-1 transition-all duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </article>
          </a>
        </div>
      </div>

      {/* Recent Posts Section */}
      <div className="relative z-10 animate-enter-up" style={{ animationDelay: '240ms' }}>
        <div className="mb-6 flex items-center gap-3">
          <div className="h-px w-8 bg-gradient-to-r from-emerald-500 to-transparent" />
          <h2 className="text-xs font-medium tracking-[0.2em] text-emerald-400/80 uppercase">
            {lang === 'es' ? 'Artículos Recientes' : 'Recent Posts'}
          </h2>
        </div>
        <BlogPosts lang={lang} />
      </div>

      {/* Decorative bottom orb */}
      <AuroraOrb size="lg" className="-bottom-32 -right-20" />
    </section>
  )
}
