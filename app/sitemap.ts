import { getBlogPosts } from 'app/blog/utils'

import { site } from './site'

import { languages } from 'app/i18n'
import { getPostVisibleLangs } from 'app/blog/utils'

export const baseUrl = site.url

export default async function sitemap() {
  let today = new Date().toISOString().split('T')[0]

  let routes = languages.flatMap((lang) =>
    ['', '/blog'].map((route) => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: today,
    }))
  )

  let blogs = getBlogPosts().flatMap((post) =>
    getPostVisibleLangs(post).map((lang) => ({
      url: `${baseUrl}/${lang}/blog/${post.slug}`,
      lastModified: post.metadata.publishedAt,
    }))
  )

  return [...routes, ...blogs]
}
