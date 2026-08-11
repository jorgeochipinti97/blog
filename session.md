# Session

## Status

In progress

## Current task

Done — Post personal "Tears in Heaven" (es+en), 2026-08-11. Archivos: `tears-in-heaven-es.mdx`, `tears-in-heaven-en.mdx`. Aprobado por Jorge y commiteado.

Tesis: la conducta es el centro. Las emociones son estados que van y vienen; lo que construye es la decisión convertida en regla de comportamiento. Aplica igual a un proyecto y a dos personas.

Restricciones duras del autor (respetarlas en cualquier edición futura de este post o de otros personales):
- NO nombrar a la persona, el evento, ni el vínculo. NO anclaje temporal.
- NO cursi ni sentimental. NO rol de víctima. NO resentimiento.
- NO egolatría — no abrir con logro en primera persona ni cerrar con lección.
- NO secciones defensivas tipo "lo que esto no es" (el texto explicándose antes de que lo acusen).
- NO detalles concretos inventados (rechazó "un martes", "hace un año").
- El título lo elige él: "Tears in Heaven" es decisión suya. NO cambiarlo. Descartados por él o por mí: Cumplir, Sin testigos, Voluntad, Conducta.

Aprendizaje del proceso: escribió varias versiones descartadas por resentimiento (poner la decisión CONTRA las personas: "las personas se mueven", "cuando no haya nadie más"). La versión que funcionó pone la decisión contra el propio ánimo, no contra nadie. La sección de dolor en silencio se descartó entera — cualquier mención al sufrimiento propio le suena a víctima.

Nota — press item de biomotricidad: la URL ya apunta a eldiariosur (`press-mentions.tsx:7`), no había cambio pendiente. Sigue desalineado el `outlet: 'Diario Canning'` vs dominio eldiariosur.com — sin decisión del usuario.

Prev — Added "Tribuna" to Projects section. Sports management media platform. i18n keys tribuna/tribunaDesc in en+es. Static card (no URL). Grid now 5 items (3 rows on mobile, 2x2+1 on desktop). tsc clean.

Prev — Updated biomotricidad press item URL → eldiariosur source (was diariocanning.com). Committed + pushed (b5c740a).

Prev — Added project "Katch" → katch.com.ar (Projects section). Logistics platform with real-time geolocation, optimized routes and pickup points. i18n keys katch/katchDesc in en+es. Projects grid now uniform 2x2 (removed sm:col-span-2 from Katch + CMS AI Boosted) — single col on mobile, 2 cols desktop. tsc clean.

Prev — Added project "CMS AI Boosted" (Projects section, full-width, no link by user request) + client "Multimedios Canning" → diariocanning.com (Clients section, Live badge). i18n keys cmsAiBoosted/Desc + multimediosCanning/Desc in en+es. tsc clean.

Prev — Added Instagram (jorgeochipinti_) + WhatsApp (5491126932788) links to footer. site.ts links, i18n footer keys (en+es), footer.tsx. tsc clean.

Prev — Projects vs Clients split. Sky palette for Projects, emerald for Clients. No badges on Projects (color + title differentiate).

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
