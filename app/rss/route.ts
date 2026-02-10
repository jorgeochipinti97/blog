import { NextResponse } from 'next/server'

import { defaultLang } from 'app/i18n'

export async function GET(request: Request) {
  return NextResponse.redirect(new URL(`/${defaultLang}/rss`, request.url))
}
