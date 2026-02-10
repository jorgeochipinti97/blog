import type { NextRequest } from 'next/server'

import { getBlogPosts, getPostVisibleLangs } from 'app/blog/utils'
import { isLang, messages, type Lang } from 'app/i18n'
import { baseUrl } from 'app/sitemap'
import { site } from 'app/site'

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ lang: string }> }
) {
  let { lang: rawLang } = await context.params
  if (!isLang(rawLang)) {
    return new Response('Not found', { status: 404 })
  }

  let lang: Lang = rawLang

  let t = messages[lang]

  let allBlogs = getBlogPosts(lang)

  const itemsXml = allBlogs
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1
      }
      return 1
    })
    .filter((post) => getPostVisibleLangs(post).includes(lang))
    .map(
      (post) =>
        `<item>
          <title>${post.metadata.title}</title>
          <link>${baseUrl}/${lang}/blog/${post.slug}</link>
          <description>${post.metadata.summary || ''}</description>
          <pubDate>${new Date(post.metadata.publishedAt).toUTCString()}</pubDate>
        </item>`
    )
    .join('\n')

  const rssFeed = `<?xml version="1.0" encoding="UTF-8" ?>
  <rss version="2.0">
    <channel>
        <title>${site.name} (${lang.toUpperCase()})</title>
        <link>${baseUrl}/${lang}</link>
        <description>${site.description}</description>
        ${itemsXml}
    </channel>
  </rss>`

  return new Response(rssFeed, {
    headers: {
      'Content-Type': 'text/xml',
      'X-Language': lang,
      'X-Feed-Title': t.blog.metaTitle,
    },
  })
}
