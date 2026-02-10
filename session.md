# Session State

Last updated: 2026-02-10

## Current Task

Posts de blog completados. ✅

## Completed

### Post 1: El arte de fracasar
- Files: `app/blog/posts/el-arte-de-fracasar-es.mdx`, `app/blog/posts/the-art-of-failing-en.mdx`
- Date: 2026-01-21
- Theme: Presentación exitosa de software deportivo, fracasos previos (Vibra Music, burnout), el equipo, lección sobre persistencia

### Post 2: Terminal first
- Files: `app/blog/posts/terminal-first-es.mdx`, `app/blog/posts/terminal-first-en.mdx`
- Date: 2026-01-19
- Theme: Neovim, dejar IDE, Claude Code, skills de Anthropic, control total de proyectos
- Includes embedded tweet (ID: 2014589940269543522)

### Post 3: Elegir
- Files: `app/blog/posts/elegir-es.mdx`, `app/blog/posts/elegir-en.mdx`
- Date: 2026-02-10
- Theme: Elegir tu camino vs expectativas de otros, romper el círculo, alejarse, ser autodidacta, soltar el control
- Tono: Reflexivo, introspectivo, sin polémica, sin autobombo

### Post 4: Quien más sabe, más hace
- Files: `app/blog/posts/la-ia-amplifica-es.mdx`, `app/blog/posts/la-ia-amplifica-en.mdx`
- Date: 2026-01-27
- Theme: IA como multiplicador de conocimiento (no democratiza), Claude + arquitectura, Remotion + motion graphics, IAs generativas + composición
- Tono: Directo, técnico pero accesible, contra-narrativo del hype

### Features added
- Press mentions section on home
  - Diario Canning (biomotricidad system for soccer match management - facial recognition, real-time scores)
  - Forbes Argentina, Billboard AR (Vibra Music)
- Tweet embed support in MDX (`<Tweet tweetId="..." />`)
- Fixed language switcher 404 on blog posts (redirects to /blog when changing lang from a post)
- Moved blog-writer skill to correct location
- Updated i18n with new translations (press, readArticle, blog.subtitle)
- Home intro changed to "never back down" (both languages)
- **Premium OG images** - Dark theme with aurora orbs, emerald accents, dynamic titles, glass badge. Matches brand identity for Twitter/WhatsApp shares.

## Pending

- Nothing pending for now

## Notes

- Blog posts use suffix convention: `-es.mdx` for Spanish, `-en.mdx` for English
- Use `/blog-writer` skill for creating posts
- Style: Short (~500 words), narrative structure, no vendehumo, technical but accessible
- Images go in `public/blog/[post-name]/`
