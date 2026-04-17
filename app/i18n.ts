export const languages = ['en', 'es'] as const

export type Lang = (typeof languages)[number]

export const defaultLang: Lang = 'es'

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
      language: 'Language',
    },
    home: {
      title: 'Jorge Ochipinti',
      intro: 'never back down',
      bio: 'Passionate about technology and continuous learning.',
      press: 'Press',
      readArticle: 'Read article',
      projects: 'Projects',
      clients: 'Clients',
      live: 'Live',
      onfit: 'On Fit',
      onFitDesc: 'Suite for gym chains: web, backoffice, sales landings, chatbots, and payment processor',
      aduesSport: 'Adues Sport',
      aduesSportDesc: 'Sports management system for clubs and federations',
      rumen360: 'Rumen360',
      rumen360Desc: 'Cattle management platform for feedlots',
      recentPosts: 'Recent Posts',
    },
    blog: {
      title: 'Writing',
      subtitle: 'Tech + entrepreneurship. Notes, essays, and learnings.',
      metaTitle: 'Blog',
      metaDescription: 'Read my blog.',
      backToBlog: 'Back to blog',
      article: 'Article',
      readTime: '5 min read',
      viewAll: 'View all articles',
      relatedPosts: 'Related Posts',
    },
    posts: {
      empty: 'No posts yet. Check back soon.',
    },
    notFound: {
      title: '404 - Page not found',
      message: 'The page you are looking for does not exist.',
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
      language: 'Idioma',
    },
    home: {
      title: 'Jorge Ochipinti',
      intro: 'never back down',
      bio: 'Apasionado por la tecnología y el aprendizaje continuo.',
      press: 'En Prensa',
      readArticle: 'Leer artículo',
      projects: 'Proyectos',
      clients: 'Clientes',
      live: 'Activo',
      onfit: 'On Fit',
      onFitDesc: 'Suite para cadenas de gimnasios: web, backoffice, landings de venta, chatbots y procesadora de pagos',
      aduesSport: 'Adues Sport',
      aduesSportDesc: 'Sistema de gestión deportiva para clubes y federaciones',
      rumen360: 'Rumen360',
      rumen360Desc: 'Plataforma de gestión ganadera para feedlots',
      recentPosts: 'Artículos Recientes',
    },
    blog: {
      title: 'Blog',
      subtitle: 'Tecnología + emprendedurismo. Ideas, aprendizajes y experiencias.',
      metaTitle: 'Blog',
      metaDescription: 'Leé mis posts.',
      backToBlog: 'Volver al blog',
      article: 'Artículo',
      readTime: '5 min lectura',
      viewAll: 'Ver todos los artículos',
      relatedPosts: 'Artículos Relacionados',
    },
    posts: {
      empty: 'No hay artículos aún. Vuelve pronto.',
    },
    notFound: {
      title: '404 - Página no encontrada',
      message: 'La página que estás buscando no existe.',
    },
    footer: {
      rss: 'rss',
      github: 'github',
      x: 'x',
      copyright: '©',
    },
  },
} as const
