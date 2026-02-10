import { type Lang, messages } from 'app/i18n'

export const pressItems = [
  {
    outlet: 'Diario Canning',
    title: 'Diario Canning estrenó el sistema de biomotricidad para el control del juego',
    url: 'https://www.diariocanning.com/deportes/diario-canning-estreno-el-sistema-de-biomotricidad-para-el-control-del-juego',
  },
  {
    outlet: 'Forbes Argentina',
    title: 'De Bizarrap a tu propio tune: cómo tres argentinos crearon Vibra Music para democratizar la creación y producción musical con IA',
    url: 'https://www.forbesargentina.com/daily-cover/de-bizzarap-tu-propio-tune-como-tres-argentinos-crearon-vibra-music-democratizar-creacion-produccion-musical-ia-n62617',
  },
  {
    outlet: 'Billboard Argentina',
    title: 'Vibra Music: la plataforma creada para productores y artistas que busca revolucionar el mercado',
    url: 'https://billboard.ar/industria/vibra-music-la-plataforma-creada-para-productores-y-artistas-que-busca-revolucionar-el-mercado/',
  },
]

export function PressMentions({ lang }: { lang: Lang }) {
  let t = messages[lang]

  return (
    <div className="space-y-3">
      {pressItems.map((item) => (
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <article className="glass-card noise-overlay relative p-4 sm:p-5 transition-all duration-500 ease-out group-hover:border-emerald-500/20">
            {/* Subtle gradient overlay on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            {/* Content */}
            <div className="relative z-10">
              {/* Outlet badge */}
              <div className="mb-3 flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-medium tracking-wide text-emerald-400/80 uppercase">
                  <span className="w-1 h-1 rounded-full bg-emerald-400/60" />
                  {item.outlet}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-sm sm:text-base font-medium text-neutral-200 leading-relaxed group-hover:text-white transition-colors duration-300 line-clamp-2">
                {item.title}
              </h3>

              {/* Read more indicator */}
              <div className="mt-3 flex items-center gap-2 text-xs text-neutral-500 group-hover:text-emerald-400/70 transition-colors duration-300">
                <span>{t.home.readArticle}</span>
                <svg
                  className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>

            {/* Corner accent */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-emerald-500/[0.08] rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          </article>
        </a>
      ))}
    </div>
  )
}
