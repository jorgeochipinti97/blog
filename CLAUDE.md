# CLAUDE.md

## Session State (IMPORTANT)

**At the START of every conversation**: Read `session.md` to understand current context and pending tasks.

**At the END of every response that makes progress**: Update `session.md` with:
- What was completed
- What's pending
- Any relevant notes for continuity

This enables context clearing without losing session state.

---

## Project Overview

Next.js 16 blog template with MDX support, Tailwind CSS v4, and TypeScript.

## Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Project Structure

```
app/
├── blog/
│   ├── posts/        # MDX blog content
│   ├── [slug]/       # Dynamic post pages
│   └── utils.ts      # MDX parsing logic
├── components/       # nav, footer, mdx, posts
├── og/               # Dynamic OG image generation
├── rss/              # RSS feed endpoint
└── page.tsx          # Homepage
```

## Adding Blog Posts

Create `.mdx` files in `app/blog/posts/` with frontmatter:

```mdx
---
title: 'Post Title'
publishedAt: '2024-01-01'
summary: 'Brief description'
image: '/optional-image.png'
---

Content here...
```

---

## Available Skills

Invoke skills using `/skill-name` in the conversation.

### Architecture & Design

| Skill | Command | Description |
|-------|---------|-------------|
| **Domain Modeler** | `/domain-modeler` | Model business domains using DDD patterns (entities, value objects, aggregates, domain events). Use when designing core business logic before coding. |
| **Hexagonal Architect** | `/hexagonal-architect` | Design hexagonal (ports & adapters) architecture for NestJS and other frameworks. Outputs folder structure, port interfaces, and adapter implementations. |
| **Systems Thinking** | `/systems-thinking` | Analyze products as systems with feedback loops and leverage points. Use for scalable products or identifying bottlenecks. |

### Product & Planning

| Skill | Command | Description |
|-------|---------|-------------|
| **Product Planner** | `/product-planner` | Plan product requirements with user stories, acceptance criteria, and MVP scope. Outputs PRD, user stories (Given/When/Then), and prioritized backlog. |
| **TDD Workflow** | `/tdd-workflow` | Guide test-driven development with red-green-refactor cycle. Outputs test cases from acceptance criteria, unit and integration tests. |

### Frontend & Design

| Skill | Command | Description |
|-------|---------|-------------|
| **Premium Frontend Design** | `/premium-frontend-design` | Create luxury Apple/Framer-quality interfaces with glass effects, mesh gradients, aurora backgrounds, and micro-interactions. |
| **Brand Identity** | `/brand-identity` | Define brand identity systems (color palettes, typography, spacing, UX principles). Use when starting projects that need visual identity. |
| **Brand Guidelines** | `/brand-guidelines` | Apply Anthropic's official brand colors and typography. Use when brand standards apply to artifacts. |

### Integrations

| Skill | Command | Description |
|-------|---------|-------------|
| **BIND API** | `/bind-api` | Integration with Banco Industrial (BIND) Argentina Open Banking API. Accounts, transfers (CVU/CBU), DEBIN, eCheqs. |

### Content & Writing

| Skill | Command | Description |
|-------|---------|-------------|
| **Blog Writer** | `/blog-writer` | Write blog posts in English and Spanish. Serious, professional tone without hype. Asks questions first to understand topic, key points, and target language. |

### Meta

| Skill | Command | Description |
|-------|---------|-------------|
| **Skill Creator** | `/skill-creator` | Guide for creating new skills or updating existing ones. Use when extending Claude's capabilities with specialized knowledge or workflows. |
