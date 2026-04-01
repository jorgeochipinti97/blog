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
      bio: 'Passionate about technology and continuous learning.',
      press: 'Press',
      readArticle: 'Read article',
      portfolio: 'Active Portfolio',
      live: 'Live',
      onfit: 'On Fit',
      onFitDesc: 'Fitness studio management platform',
      aduesSport: 'Adues Sport',
      aduesSportDesc: 'Sports club management system',
      rumen360: 'Rumen360',
      recentPosts: 'Recent Posts',
    },
    blog: {
      title: 'Writing',
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
      bio: 'Apasionado por la tecnología y el aprendizaje continuo.',
      press: 'En Prensa',
      readArticle: 'Leer artículo',
      portfolio: 'Portfolio Activo',
      live: 'Activo',
      onfit: 'On Fit',
      onFitDesc: 'Plataforma de gestión para estudios de fitness',
      aduesSport: 'Adues Sport',
      aduesSportDesc: 'Sistema de gestión para clubes deportivos',
      rumen360: 'Rumen360',
      recentPosts: 'Artículos Recientes',
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
