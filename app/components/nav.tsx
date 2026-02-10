'use client'

import Link from 'next/link'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import * as React from 'react'

import { RadioGroup, RadioGroupItem } from 'app/components/ui/radio-group'
import {
  getLangFromPathname,
  languages,
  messages,
  type Lang,
  withLang,
} from 'app/i18n'
import { site } from 'app/site'

export function Navbar() {
  return (
    <React.Suspense fallback={<NavbarSkeleton />}>
      <NavbarContent />
    </React.Suspense>
  )
}

function NavbarSkeleton() {
  return (
    <aside className="animate-enter-up mb-12 sm:mb-16 tracking-tight relative z-50">
      <div className="lg:sticky lg:top-6">
        <nav
          className="glass-card noise-overlay flex flex-row items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3"
          id="nav"
        >
          <div className="flex flex-row items-center gap-1">
            <div className="h-8 w-32 bg-white/5 rounded animate-pulse" />
          </div>
          <div className="h-8 w-20 bg-white/5 rounded-full animate-pulse" />
        </nav>
      </div>
    </aside>
  )
}

function NavbarContent() {
  let router = useRouter()
  let pathname = usePathname() || '/'
  let searchParams = useSearchParams()

  let lang = React.useMemo(() => getLangFromPathname(pathname), [pathname])
  let t = messages[lang]

  let onLangChange = React.useCallback(
    (next: string) => {
      if (!languages.includes(next as Lang)) {
        return
      }

      let segments = pathname.split('/')
      segments[1] = next

      // If on a blog post (e.g., /es/blog/post-slug), convert slug to other language
      let isOnBlogPost = segments.length >= 4 && segments[2] === 'blog'
      if (isOnBlogPost && segments[3]) {
        // Convert slug from one language to another (e.g., post-es -> post-en)
        let currentSlug = segments[3]
        if (next === 'es' && currentSlug.endsWith('-en')) {
          segments[3] = currentSlug.replace(/-en$/, '-es')
        } else if (next === 'en' && currentSlug.endsWith('-es')) {
          segments[3] = currentSlug.replace(/-es$/, '-en')
        }
      }

      let nextPath = segments.join('/') || '/'
      let qs = isOnBlogPost ? '' : searchParams?.toString()

      let href = qs ? `${nextPath}?${qs}` : nextPath

      let push = () => router.push(href)
      let doc = document as unknown as {
        startViewTransition?: (cb: () => void) => void
      }

      if (typeof doc.startViewTransition === 'function') {
        doc.startViewTransition(push)
        return
      }

      push()
    },
    [pathname, router, searchParams]
  )

  // Check if link is active
  let isActive = (path: string) => {
    let langPath = withLang(lang, path)
    if (path === '/') {
      return pathname === langPath
    }
    return pathname.startsWith(langPath)
  }

  return (
    <aside className="animate-enter-up mb-12 sm:mb-16 tracking-tight relative z-50">
      <div className="lg:sticky lg:top-6">
        <nav
          className="glass-card noise-overlay flex flex-row items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3"
          id="nav"
        >
          {/* Navigation Links */}
          <div className="flex flex-row items-center gap-1">
            <NavLink href="/" active={isActive('/')} lang={lang}>
              {t.nav.home}
            </NavLink>
            <NavLink href="/blog" active={isActive('/blog')} lang={lang}>
              {t.nav.blog}
            </NavLink>
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-3 py-1.5 text-sm text-neutral-400 hover:text-white transition-colors duration-300"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                {t.nav.github}
                <svg
                  className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            </a>
          </div>

          {/* Language Switcher */}
          <div className="relative inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/5 p-1 backdrop-blur shadow-[0_0_20px_-12px_rgba(16,185,129,0.5)]">
            <span
              aria-hidden
              className={
                'pointer-events-none absolute inset-y-1 left-1 w-[calc(50%-4px)] rounded-full ' +
                'bg-gradient-to-r from-emerald-500/20 to-emerald-400/10 shadow-[0_0_12px_-4px_rgba(16,185,129,0.6)] ' +
                'transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ' +
                (lang === 'es' ? 'translate-x-full' : 'translate-x-0')
              }
            />
            <RadioGroup
              value={lang}
              onValueChange={onLangChange}
              aria-label="Language"
              className="relative grid grid-cols-2 gap-0"
            >
              <RadioGroupItem value="en">EN</RadioGroupItem>
              <RadioGroupItem value="es">ES</RadioGroupItem>
            </RadioGroup>
          </div>
        </nav>
      </div>
    </aside>
  )
}

function NavLink({
  href,
  active,
  lang,
  children,
}: {
  href: string
  active: boolean
  lang: Lang
  children: React.ReactNode
}) {
  return (
    <Link
      href={withLang(lang, href)}
      className={`
        group relative px-3 py-1.5 text-sm transition-colors duration-300
        ${active ? 'text-white' : 'text-neutral-400 hover:text-white'}
      `}
    >
      {/* Active indicator */}
      {active && (
        <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/15 to-emerald-400/5 border border-emerald-500/20" />
      )}

      {/* Hover glow */}
      <span className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/[0.03]" />

      <span className="relative z-10">{children}</span>

      {/* Active dot */}
      {active && (
        <span className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
      )}
    </Link>
  )
}

export { NavbarContent }
