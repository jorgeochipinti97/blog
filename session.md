# Session State

Last updated: 2026-02-10

## Status

✅ Completado

## Sesión Completa - Blog Setup

### Posts de Blog

**Post 1: El arte de fracasar**
- Files: `app/blog/posts/el-arte-de-fracasar-es.mdx`, `app/blog/posts/the-art-of-failing-en.mdx`
- Date: 2026-01-21
- Theme: Presentación exitosa de software deportivo, fracasos previos (Vibra Music, burnout), el equipo, lección sobre persistencia

**Post 2: Terminal first**
- Files: `app/blog/posts/terminal-first-es.mdx`, `app/blog/posts/terminal-first-en.mdx`
- Date: 2026-01-19
- Theme: Neovim, dejar IDE, Claude Code, skills de Anthropic, control total de proyectos
- Includes embedded tweet (ID: 2014589940269543522)

**Post 3: Elegir** ✨ NUEVO
- Files: `app/blog/posts/elegir-es.mdx`, `app/blog/posts/elegir-en.mdx`
- Date: 2026-02-10
- Theme: Elegir tu camino vs expectativas de otros, romper el círculo, alejarse, ser autodidacta, soltar el control
- Tono: Reflexivo, introspectivo, sin polémica, sin autobombo
- Iteraciones: Múltiples ajustes de tono y contenido para evitar autobombo y lenguaje de coach

**Post 4: Quien más sabe, más hace** ✨ NUEVO
- Files: `app/blog/posts/la-ia-amplifica-es.mdx`, `app/blog/posts/la-ia-amplifica-en.mdx`
- Date: 2026-01-27
- Theme: IA como multiplicador de conocimiento (no democratiza), Claude + arquitectura, Remotion + motion graphics, IAs generativas + composición
- Tono: Directo, técnico pero accesible, contra-narrativo del hype

### Features Agregadas

**Press Mentions**
- Diario Canning (sistema de biomotricidad - reconocimiento facial, real-time scores) ✨ NUEVO
- Forbes Argentina, Billboard AR (Vibra Music)

**Home Page**
- Sección "Update" → "Portfolio Activo" ✨ NUEVO
  - Quitado TwitterEmbed
  - Agregado: Gentleman's Book → Quitado
  - Agregado: Onfit (onfit.com.ar)
  - Agregado: Adues Sport (sport.adues.org.ar)
  - GitHub quitado de Resources (ya está en navbar/footer)

**Footer**
- Agregado link a X (@0xchi_j) ✨ NUEVO
- Quitado RSS ✨ NUEVO
- Links: GitHub, X

**Navigation**
- Language switcher mejorado: al cambiar idioma en un post, te mantiene en el mismo post (convierte slug -es ↔ -en) ✨ NUEVO
- Fix: Navbar wrapped in Suspense boundary para useSearchParams() ✨ NUEVO

**Meta Tags & SEO**
- ✅ Open Graph images dinámicas (ya configurado)
- ✅ Twitter Cards (ya configurado)
- ✅ JSON-LD structured data (ya configurado)
- ✅ Sitemap (ya configurado)

**README** ✨ NUEVO
- Creado README.md profesional y completo
- Incluye: instalación, estructura, guía de posts, configuración, deployment
- Badges de tecnologías
- Listo para que otros clonen el proyecto

### Fixes Técnicos ✨ NUEVO

**Mobile**
- Fix scroll horizontal: overflow-x: hidden en html/body
- Aurora orbs responsivos: min(600px, 80vw)
- Overflow-visible → overflow-hidden en aurora background

**Safari/iOS/Instagram Browser**
- Mejorado backdrop-filter con saturate(180%)
- Agregado fallback background-color
- Agregado backfaceVisibility: 'hidden' para performance
- Más prefijos -webkit- para compatibilidad

**Build Fixes**
- Navbar wrapped in Suspense con skeleton loader (fix para useSearchParams en static pages)

### Git & Deployment

- Configurado SSH para GitHub
- Remote: git@github.com:jorgeochipinti97/blog.git
- Todos los cambios pusheados a main
- Vercel deployments funcionando

## Archivos Modificados (Esta Sesión)

- `app/blog/posts/elegir-es.mdx` (nuevo)
- `app/blog/posts/elegir-en.mdx` (nuevo)
- `app/blog/posts/la-ia-amplifica-es.mdx` (nuevo)
- `app/blog/posts/la-ia-amplifica-en.mdx` (nuevo)
- `app/components/press-mentions.tsx` (agregado Diario Canning)
- `app/components/nav.tsx` (Suspense boundary, language switcher fix)
- `app/components/footer.tsx` (agregado X, quitado RSS)
- `app/[lang]/page.tsx` (Portfolio Activo con Onfit y Adues Sport)
- `app/global.css` (mobile fixes, Safari compatibility)
- `app/components/aurora-background.tsx` (responsive orbs, overflow fix)
- `app/i18n.ts` (traducciones Portfolio Activo, recursos, etc.)
- `app/site.ts` (agregado link de X)
- `README.md` (creado nuevo README profesional)

## Notas Técnicas

- Blog posts usan sufijo `-es.mdx` para español, `-en.mdx` para inglés
- Style: Short (~500 words), narrative structure, no vendehumo, technical but accessible
- OG images: generadas dinámicamente en `/og?title=...`
- Base URL debe estar configurada en producción: NEXT_PUBLIC_SITE_URL
- Next.js 16 con App Router
- Tailwind CSS v4
- TypeScript
- MDX para contenido

## Último progreso

- Corregido título Diario Canning → "sistema biométrico" (antes decía "biomotricidad")
- Agregada nota de Filo News (Vibra Music) debajo de Forbes en press-mentions

## Próximos Pasos

- Verificar que mobile fixes funcionen en Safari/Instagram browser
- Verificar que OG images se vean bien al compartir en Twitter/X
- Considerar agregar más posts de blog
