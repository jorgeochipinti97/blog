import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'

export const fonts = {
  sans: GeistSans,
  mono: GeistMono,
}

export function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ')
}
