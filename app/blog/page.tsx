import { redirect } from 'next/navigation'

import { defaultLang } from 'app/i18n'

export default function Page() {
  redirect(`/${defaultLang}/blog`)
}
