import { notFound } from 'next/navigation'

import { AuroraBackground, AuroraOrb } from 'app/components/aurora-background'
import { BlogPosts } from 'app/components/posts'
import { PressMentions } from 'app/components/press-mentions'
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

      {/* Hero */}
      <header className="relative z-10 mb-16 sm:mb-20">
        <h1
          className="animate-enter-up text-5xl sm:text-6xl font-semibold tracking-[-0.04em] text-gradient-emerald"
          style={{ animationDelay: '0ms' }}
        >
          {t.home.title}
        </h1>
        <div
          className="animate-enter-up mt-4 h-px w-12 bg-gradient-to-r from-emerald-500 to-transparent"
          style={{ animationDelay: '60ms' }}
        />
        <p
          className="animate-enter-up mt-4 text-xs tracking-[0.3em] uppercase text-neutral-500"
          style={{ animationDelay: '80ms' }}
        >
          {t.home.intro}
        </p>
      </header>

      {/* Press Mentions */}
      <div className="relative z-10 animate-enter-up mb-16 sm:mb-20" style={{ animationDelay: '120ms' }}>
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px w-8 bg-gradient-to-r from-emerald-500 to-transparent" />
          <h2 className="text-xs font-medium tracking-[0.2em] text-emerald-400/80 uppercase">
            {t.home.press}
          </h2>
        </div>
        <PressMentions lang={lang} />
      </div>

      {/* Portfolio */}
      <div className="relative z-10 animate-enter-up mb-16 sm:mb-20" style={{ animationDelay: '200ms' }}>
        <div className="mb-5 flex items-center gap-3">
          <div className="h-px w-8 bg-gradient-to-r from-emerald-500 to-transparent" />
          <h2 className="text-xs font-medium tracking-[0.2em] text-emerald-400/80 uppercase">
            {t.home.portfolio}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* Rumen360 — featured, full-width on desktop */}
          <a
            href="https://www.rumen360.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group block sm:col-span-2"
          >
            <article className="glass-card noise-overlay relative p-5 sm:p-6 transition-all duration-500 ease-out group-hover:border-emerald-500/20">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 sm:flex sm:items-center sm:justify-between">
                <div>
                  <div className="flex items-center gap-3">
                    <span className="text-base sm:text-lg font-semibold text-neutral-200 group-hover:text-white transition-colors duration-300">
                      {t.home.rumen360}
                    </span>
                    <span className="flex items-center gap-1.5 text-[10px] font-medium tracking-wide text-emerald-400/70 uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
                      {t.home.live}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-neutral-500">rumen360.com</p>
                </div>
                <p className="mt-2 sm:mt-0 text-xs text-neutral-500 sm:text-right">
                  {lang === 'es' ? 'Software de gestión ganadera' : 'Cattle management software'}
                </p>
              </div>
            </article>
          </a>
          <a
            href="https://onfit.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <article className="glass-card noise-overlay relative p-4 sm:p-5 transition-all duration-500 ease-out group-hover:border-emerald-500/20">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base font-medium text-neutral-200 group-hover:text-white transition-colors duration-300">
                    {t.home.onfit}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-medium tracking-wide text-emerald-400/70 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
                    {t.home.live}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-neutral-500">onfit.com.ar</p>
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
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-sm sm:text-base font-medium text-neutral-200 group-hover:text-white transition-colors duration-300">
                    {t.home.aduesSport}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-medium tracking-wide text-emerald-400/70 uppercase">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/80 animate-pulse" />
                    {t.home.live}
                  </span>
                </div>
                <p className="mt-1.5 text-xs text-neutral-500">sport.adues.org.ar</p>
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
