import { NextResponse, type NextRequest } from 'next/server'

import { defaultLang, isLang } from 'app/i18n'

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip Next internals + static assets
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/og') ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    pathname === '/favicon.ico' ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  let first = pathname.split('/')[1] || ''
  if (isLang(first)) {
    return NextResponse.next()
  }

  let url = request.nextUrl.clone()
  url.pathname = `/${defaultLang}${pathname === '/' ? '' : pathname}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next).*)'],
}
