import './global.css'

import { fonts, cx } from 'app/fonts'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        // Dark-first. No “flashy” black: use a deep near-black.
        'text-neutral-100 bg-[#07070a]',
        fonts.sans.variable,
        fonts.mono.variable
      )}
    >
      <body className="antialiased mx-auto flex min-h-svh w-full max-w-xl flex-col px-4 pt-8 sm:px-6">
        {children}
      </body>
    </html>
  )
}
