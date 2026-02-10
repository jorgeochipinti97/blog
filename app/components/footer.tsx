import { messages, type Lang, withLang } from 'app/i18n'
import { site } from 'app/site'

function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

export default function Footer({ lang }: { lang: Lang }) {
  let t = messages[lang]

  return (
    <footer className="mt-auto pt-16">
      {/* Gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent mb-8" />

      <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        {/* Links */}
        <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <li>
            <a
              className="group flex items-center gap-2 text-neutral-500 hover:text-emerald-400 transition-colors duration-300"
              rel="noopener noreferrer"
              target="_blank"
              href={withLang(lang, '/rss')}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 group-hover:bg-emerald-400 transition-colors duration-300" />
              {t.footer.rss}
              <ArrowIcon />
            </a>
          </li>

          <li>
            <a
              className="group flex items-center gap-2 text-neutral-500 hover:text-emerald-400 transition-colors duration-300"
              rel="noopener noreferrer"
              target="_blank"
              href={site.links.github}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 group-hover:bg-emerald-400 transition-colors duration-300" />
              {t.footer.github}
              <ArrowIcon />
            </a>
          </li>

          <li>
            <a
              className="group flex items-center gap-2 text-neutral-500 hover:text-emerald-400 transition-colors duration-300"
              rel="noopener noreferrer"
              target="_blank"
              href={site.links.x}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 group-hover:bg-emerald-400 transition-colors duration-300" />
              {t.footer.x}
              <ArrowIcon />
            </a>
          </li>
        </ul>

        {/* Copyright / Brand */}
        <div className="flex items-center gap-3 text-xs text-neutral-600">
          <span className="w-6 h-px bg-gradient-to-r from-emerald-500/30 to-transparent" />
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>

      {/* Bottom spacing with subtle orb */}
      <div className="relative h-16">
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-24 bg-emerald-500/5 rounded-full blur-3xl"
        />
      </div>
    </footer>
  )
}
