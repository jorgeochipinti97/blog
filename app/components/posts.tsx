import Link from 'next/link'
import { formatDate, getBlogPosts } from 'app/blog/utils'
import { withLang, type Lang } from 'app/i18n'

export function BlogPosts({ lang }: { lang: Lang }) {
  let allBlogs = getBlogPosts(lang)

  return (
    <div className="stagger-children space-y-3 sm:space-y-4">
      {allBlogs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1
          }
          return 1
        })
        .map((post) => (
          <Link
            key={post.slug}
            href={withLang(lang, `/blog/${post.slug}`)}
            className="group block"
          >
            <article className="blog-card glass-card noise-overlay p-4 sm:p-5 lg:p-6">
              {/* Gradient accent line */}
              <div className="absolute top-0 left-4 right-4 sm:left-6 sm:right-6 h-px bg-gradient-to-r from-transparent via-emerald-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative flex flex-col gap-2 sm:gap-3 sm:flex-row sm:items-center sm:justify-between">
                {/* Title - always first on mobile */}
                <h3 className="text-sm sm:text-base lg:text-lg font-medium tracking-tight text-neutral-100 group-hover:text-white transition-colors duration-300 sm:order-2 sm:text-right sm:flex-1">
                  <span className="link-underline">
                    {post.metadata.title}
                  </span>
                </h3>

                {/* Date with emerald accent */}
                <div className="flex items-center gap-2 sm:gap-3 sm:order-1 sm:flex-shrink-0">
                  <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-emerald-500/60 group-hover:bg-emerald-400 transition-colors duration-300 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.6)]" />
                  <time className="text-xs sm:text-sm tabular-nums text-neutral-500 group-hover:text-neutral-400 transition-colors duration-300">
                    {formatDate(post.metadata.publishedAt, lang, false)}
                  </time>
                </div>
              </div>

              {/* Summary - hidden on mobile, shown on hover for larger screens */}
              {post.metadata.summary && (
                <p className="hidden sm:block mt-3 text-sm text-neutral-400 leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-20 overflow-hidden">
                  {post.metadata.summary}
                </p>
              )}

              {/* Hover indicator - hidden on mobile */}
              <div className="hidden sm:block absolute bottom-4 right-5 lg:right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                <svg
                  className="w-4 h-4 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>

              {/* Mobile tap indicator */}
              <div className="sm:hidden absolute top-1/2 -translate-y-1/2 right-4 text-neutral-600 group-active:text-emerald-400 transition-colors">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </article>
          </Link>
        ))}

      {allBlogs.length === 0 && (
        <div className="glass-card noise-overlay p-6 sm:p-8 text-center">
          <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full bg-emerald-500/10 flex items-center justify-center">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          </div>
          <p className="text-neutral-400 text-xs sm:text-sm">
            {lang === 'es' ? 'No hay artículos aún. Vuelve pronto.' : 'No posts yet. Check back soon.'}
          </p>
        </div>
      )}
    </div>
  )
}
