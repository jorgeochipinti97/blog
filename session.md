# Session

## Status

In progress

## Current task

Done — Projects vs Clients split. Sky palette for Projects, emerald for Clients. No badges on Projects (color + title differentiate).

## Last progress

- Split single Portfolio section into two: **Building** (amber badge) + **Portfolio** (emerald "Live" badge)
- **Building** (team member, in active dev): Rumen360 + Adues Sport — 2-col grid, "In progress" / "En curso" badge
- **Portfolio** (launched, built end-to-end): OnFit — full-width featured card (user plans to add more)
- Updated i18n descriptions:
  - Rumen360 → "Cattle management platform for feedlots" / "Plataforma de gestión ganadera para feedlots"
  - Adues Sport → "Sports management system for clubs and federations" / "Sistema de gestión deportiva para clubes y federaciones"
  - OnFit → "Suite for gym chains: web, backoffice, sales landings, chatbots, and payment processor" / "Suite para cadenas de gimnasios: web, backoffice, landings de venta, chatbots y procesadora de pagos"
- New i18n keys: `building`, `inProgress` (both langs)
- Animation delays shifted: Building 200ms → Portfolio 240ms → Recent Posts 280ms
- Build passes clean

## Next steps

1. Visual review on localhost (en + es) — mobile + desktop
2. Add more projects to Portfolio section as they launch
3. Commit when satisfied

## Notes

- Files modified: `app/i18n.ts`, `app/[lang]/page.tsx`
- Amber palette for Building (`amber-400/80` badge dot, `amber-500/20` hover border)
- Emerald palette stays for Portfolio (same as before)
