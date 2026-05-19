import Link from 'next/link'
import { formatDate, getRelatedPosts } from 'app/blog/utils'
import { messages, withLang, type Lang } from 'app/i18n'

export function RelatedPosts({
  currentSlug,
  lang,
  limit = 3,
}: {
  currentSlug: string
  lang: Lang
  limit?: number
}) {
  let relatedPosts = getRelatedPosts(currentSlug, lang, limit)

  if (relatedPosts.length === 0) {
    return null
  }

  let t = messages[lang]

  return (
    <section className="relative z-10 mt-12 sm:mt-16">
      <div className="mb-5 flex items-center gap-3">
        <div className="h-px w-8 bg-gradient-to-r from-emerald-500 to-transparent" />
        <h2 className="text-xs font-medium tracking-[0.2em] text-emerald-400/80 uppercase">
          {t.blog.relatedPosts}
        </h2>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {relatedPosts.map((post) => (
          <Link
            key={post.slug}
            href={withLang(lang, `/blog/${post.slug}`)}
            className="group block"
          >
            <article className="blog-card glass-card noise-overlay p-4 sm:p-5 lg:p-6">
              <div className="absolute top-0 left-4 right-4 sm:left-6 sm:right-6 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-sm sm:text-base lg:text-lg font-medium tracking-tight text-neutral-100 group-hover:text-white transition-colors duration-300 sm:flex-1">
                  <span className="link-underline">
                    {post.metadata.title}
                  </span>
                </h3>

                <div className="flex items-center gap-2 sm:gap-3 sm:flex-shrink-0">
                  <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-emerald-500/60 group-hover:bg-emerald-400 transition-colors duration-300 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  <time className="text-xs sm:text-sm tabular-nums text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">
                    {formatDate(post.metadata.publishedAt, lang, false)}
                  </time>
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </section>
  )
}
