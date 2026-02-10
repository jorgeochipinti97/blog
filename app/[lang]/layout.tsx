import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

import Footer from 'app/components/footer'
import { Navbar } from 'app/components/nav'
import { isLang, messages } from 'app/i18n'
import { site } from 'app/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}): Promise<Metadata> {
  let { lang } = await params

  if (!isLang(lang)) {
    return {}
  }

  let t = messages[lang]
  let locale = lang === 'es' ? 'es_AR' : 'en_US'

  return {
    metadataBase: new URL(site.url),
    title: {
      default: site.name,
      template: `%s | ${site.name}`,
    },
    description: site.description,
    openGraph: {
      title: site.name,
      description: site.description,
      url: site.url,
      siteName: site.name,
      locale,
      type: 'website',
    },
    alternates: {
      languages: {
        en: `${site.url}/en`,
        es: `${site.url}/es`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    // Keep robots global (root robots.ts).
    other: {
      'x-lang': lang,
      'x-title': t.home.title,
    },
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  let { lang } = await params

  if (!isLang(lang)) {
    notFound()
  }

  return (
    <main className="flex min-w-0 flex-1 flex-col pb-16 pt-6">
      <Navbar />
      {children}
      <Footer lang={lang} />
    </main>
  )
}
