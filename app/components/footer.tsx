import { messages, type Lang, withLang } from 'app/i18n'
import { site } from 'app/site'

function ArrowIcon() {
  return (
    <svg
      width="10"
      height="10"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="opacity-60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.24-8.23a8.2 8.2 0 0 1 5.82 2.41 8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.22-.16-.47-.28Z" />
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
              href={site.links.x}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40 group-hover:bg-emerald-400 transition-colors duration-300" />
              {t.footer.x}
              <ArrowIcon />
            </a>
          </li>
          <li>
            <a
              className="group flex items-center gap-2 text-neutral-500 hover:text-emerald-400 transition-colors duration-300"
              rel="noopener noreferrer"
              target="_blank"
              href={site.links.instagram}
            >
              <InstagramIcon />
              {t.footer.instagram}
              <ArrowIcon />
            </a>
          </li>
          <li>
            <a
              className="group flex items-center gap-2 text-neutral-500 hover:text-emerald-400 transition-colors duration-300"
              rel="noopener noreferrer"
              target="_blank"
              href={site.links.whatsapp}
            >
              <WhatsAppIcon />
              {t.footer.whatsapp}
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
