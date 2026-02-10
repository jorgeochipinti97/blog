# Agent Instructions (next-blog)
Next.js (App Router) blog with MDX posts, Tailwind v4, TypeScript.

You are an agentic coding tool in *this* repo: read the code, follow the style,
keep changes small + reviewable. Also read `CLAUDE.md`.

## Repo map
- `app/page.tsx` – homepage
- `app/blog/page.tsx` + `app/blog/[slug]/page.tsx` – blog index + post page
- `app/blog/posts/*.mdx` – content
- `app/components/*` – navbar/footer/mdx/posts list
- `app/og/route.tsx` – dynamic OG images
- `app/rss/route.ts` – RSS endpoint
- `app/robots.ts`, `app/sitemap.ts`
- `app/site.ts` – site constants (name/url/links)

## Commands (build / lint / test)
Package manager: prefer `pnpm` (lockfile `pnpm-lock.yaml`). Don’t mix with npm.

```bash
pnpm install
pnpm dev
pnpm build
pnpm start

# explicit typecheck
pnpm exec tsc --noEmit
```

Linting: **not configured** (no `lint` script; no ESLint/Prettier/Biome).

Testing: **not configured** (no Jest/Vitest/Playwright). If you add one, update
this file + `package.json`.

Running a single test (only after adding a runner):
- Vitest: `pnpm vitest path/to/test-file.test.ts` or `pnpm vitest -t "name"`
- Jest: `pnpm jest path/to/test-file.test.ts` or `pnpm jest -t "name"`
- Playwright: `pnpm playwright test path/to/spec` or `pnpm playwright test -g "name"`

## Environment / config
- Canonical URL is used for `metadataBase`, sitemap, RSS, OG:
  - `NEXT_PUBLIC_SITE_URL` (preferred) or `SITE_URL`
  - fallback: `http://localhost:3000`

Example:
```bash
NEXT_PUBLIC_SITE_URL="https://<your-domain>" pnpm build
```

Keep config in `app/site.ts`. Don’t scatter constants.

## Code style

### Formatting
- No semicolons
- Single quotes
- 2-space indentation
- Trailing commas where already used

### Imports
Order (top → bottom):
1) Node built-ins (`fs`, `path`)
2) Next.js (`next/link`, `next/navigation`, `next/og`)
3) External libs (`next-mdx-remote`, `sugar-high`)
4) App absolute imports (`app/...` via tsconfig `baseUrl: .`)
5) Relative imports

Rules:
- Prefer `app/...` over long `../..` chains
- Don’t import from `.next/`
- Don’t add barrel files unless there’s a real payoff

### Naming / file conventions
- Components: `PascalCase`
- Functions/vars: `camelCase`
- Routes:
  - `page.tsx` default export: `Page()` (or a clear name)
  - `route.ts(x)`: `export async function GET()` / `POST()` etc
- MDX slugs: kebab-case filenames (`my-post.mdx`)

### TypeScript
- Current config: `strict: false`, `strictNullChecks: true`
- Don’t introduce `any` in new code; type props/boundaries
- Prefer explicit return types for exported utilities
- Keep server-only code server-only (`fs/path` belong in server contexts)

### React / Next.js conventions
- App Router defaults to **Server Components**. Add `'use client'` only when you
  truly need client-side state/effects/event handlers.
- Prefer `next/link` for internal navigation and `next/image` for images.
- Route handlers (`app/**/route.ts(x)`) should be small, deterministic, and
  return proper `Response` objects with correct `Content-Type`.
- Don’t pull Node-only modules into client components (it will explode at build
  time).

### Components & composition
- Keep components small and boring. This is a blog, not a framework.
- Prefer “container/presentation” separation when logic grows.
- Avoid adding global state for no reason; most pages can stay static.
- Don’t introduce heavy UI libraries casually; Tailwind is already enough.

### Error handling / edge cases
- Missing blog post: call `notFound()` (see `app/blog/[slug]/page.tsx`)
- Use guard clauses; don’t swallow errors
- Validate env vars; provide safe fallbacks (`app/site.ts`)

### SEO / metadata
- Root metadata: `app/layout.tsx`
- Per-post metadata: `app/blog/[slug]/page.tsx`
- Keep URLs consistent with `baseUrl` from `app/sitemap.ts`

### MDX
- Posts require frontmatter: `title`, `publishedAt` (YYYY-MM-DD), `summary`, optional `image`
- Rendering: `app/components/mdx.tsx`
- `dangerouslySetInnerHTML` exists (syntax highlight + JSON-LD). Don’t expand its usage casually.

#### Writing posts (practical rules)
- Keep frontmatter keys simple (no YAML nesting; parser is intentionally naive).
- `publishedAt` must be a valid date string; sorting relies on it.
- Filenames are the canonical slug (kebab-case).
- Bilingual content: keep it simple.
  - Option A (recommended): write the post in one language, and add a sibling
    post with a `-es` or `-en` suffix.
  - Option B: single post, but clearly separate sections (don’t mix paragraphs).
  - If you introduce a `lang` field, you must update the parser + list filters.

### Styling
- Tailwind v4 via `@import 'tailwindcss';` in `app/global.css`
- Prefer Tailwind utilities; keep `.prose` typography consistent

### Security / correctness
- External links must use `rel="noopener noreferrer"` when `target="_blank"`.
- Don’t interpolate untrusted content into HTML/JSON-LD without escaping.
- Treat RSS/XML as output encoding land: don’t inject raw user input.

### Performance
- Keep client JS minimal (again: Server Components by default).
- Don’t add large dependencies just to render a heading.
- Prefer static generation where possible (blog posts already are).

### SEO checks when adding pages
- Add/adjust metadata (title/description).
- If a new route is canonical, ensure it’s included in sitemap.
- If it’s not for indexing, handle `robots` intentionally.

## Git hygiene
- Never commit: `.next/`, `out/`, `node_modules/`
- Commit `pnpm-lock.yaml` when deps change
- Keep PRs focused (no drive-by formatting refactors)

## Quality bar (don’t be mediocre)
- If you change behavior, explain *why* in the PR/commit message.
- If you add a feature, cover edge cases (missing post, empty list, bad dates).
- Don’t ship broken typing just because TS is not strict.

## Cursor / Copilot rules
No Cursor rules found (`.cursor/rules/` or `.cursorrules`).
No Copilot instructions found (`.github/copilot-instructions.md`).

## Repo skills (Claude)
This repo includes reusable “skills” under `.claude/skills/<skill>/SKILL.md`.
Use them when relevant instead of improvising process.

Available skills: `premium-frontend-design`, `brand-identity`, `brand-guidelines`,
`product-planner`, `domain-modeler`, `hexagonal-architect`, `tdd-workflow`,
`systems-thinking`, `bind-api`, `skill-creator`.
