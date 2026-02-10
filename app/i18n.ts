export const languages = ['en', 'es'] as const

export type Lang = (typeof languages)[number]

export const defaultLang: Lang = 'en'

export function isLang(value: string): value is Lang {
  return (languages as readonly string[]).includes(value)
}

export function getLangFromPathname(pathname: string): Lang {
  let first = pathname.split('/')[1] || ''
  return isLang(first) ? first : defaultLang
}

export function withLang(lang: Lang, path: string): string {
  if (!path || path === '/') {
    return `/${lang}`
  }

  if (!path.startsWith('/')) {
    path = `/${path}`
  }

  return `/${lang}${path}`
}

export const messages = {
  en: {
    nav: {
      home: 'home',
      blog: 'blog',
      github: 'github',
    },
    home: {
      title: 'Jorge Ochipinti',
      intro: 'never back down',
      press: 'Press',
      readArticle: 'Read article',
      portfolio: 'Active Portfolio',
      onfit: 'Onfit',
      aduesSport: 'Adues Sport',
    },
    blog: {
      title: 'My Blog',
      subtitle: 'Tech + entrepreneurship. Notes, essays, and learnings.',
      metaTitle: 'Blog',
      metaDescription: 'Read my blog.',
    },
    footer: {
      rss: 'rss',
      github: 'github',
      x: 'x',
      copyright: '©',
    },
  },
  es: {
    nav: {
      home: 'inicio',
      blog: 'blog',
      github: 'github',
    },
    home: {
      title: 'Jorge Ochipinti',
      intro: 'never back down',
      press: 'En Prensa',
      readArticle: 'Leer artículo',
      portfolio: 'Portfolio Activo',
      onfit: 'Onfit',
      aduesSport: 'Adues Sport',
    },
    blog: {
      title: 'Blog',
      subtitle: 'Tecnología + emprendedurismo. Ideas, aprendizajes y experiencias.',
      metaTitle: 'Blog',
      metaDescription: 'Leé mis posts.',
    },
    footer: {
      rss: 'rss',
      github: 'github',
      x: 'x',
      copyright: '©',
    },
  },
} as const
