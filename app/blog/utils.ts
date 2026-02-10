import fs from 'fs'
import path from 'path'

import { isLang, languages, type Lang } from 'app/i18n'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
  lang?: Lang
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()
    value = value.replace(/^['"](.*)['"]$/, '$1') // Remove quotes

    let k = key.trim() as keyof Metadata
    if (k === 'lang') {
      if (isLang(value)) {
        metadata.lang = value
      }
      return
    }

    metadata[k] = value as Metadata[typeof k]
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir) {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export type BlogPost = {
  metadata: Metadata
  slug: string
  content: string
}

export function getPostLang(post: Pick<BlogPost, 'metadata' | 'slug'>) {
  let metaLang = post.metadata.lang
  if (metaLang && languages.includes(metaLang)) {
    return metaLang
  }

  if (post.slug.endsWith('-es')) return 'es'
  if (post.slug.endsWith('-en')) return 'en'

  return undefined
}

export function getPostVisibleLangs(post: Pick<BlogPost, 'metadata' | 'slug'>) {
  let postLang = getPostLang(post)
  return postLang ? [postLang] : [...languages]
}

export function getBlogPosts(lang?: Lang): BlogPost[] {
  let posts = getMDXData(
    path.join(process.cwd(), 'app', 'blog', 'posts')
  ) as BlogPost[]

  if (!lang) {
    return posts
  }

  return posts.filter((post) => getPostVisibleLangs(post).includes(lang))
}

export function formatDate(date: string, lang: Lang, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate =
      lang === 'es' ? `hace ${yearsAgo} año${yearsAgo === 1 ? '' : 's'}` : `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate =
      lang === 'es' ? `hace ${monthsAgo} mes${monthsAgo === 1 ? '' : 'es'}` : `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = lang === 'es' ? `hace ${daysAgo} día${daysAgo === 1 ? '' : 's'}` : `${daysAgo}d ago`
  } else {
    formattedDate = lang === 'es' ? 'Hoy' : 'Today'
  }

  let fullDate = targetDate.toLocaleString(lang === 'es' ? 'es-AR' : 'en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}
