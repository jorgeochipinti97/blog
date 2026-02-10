import { redirect } from 'next/navigation'

import { defaultLang } from 'app/i18n'

export default function Page({ params }: { params: { slug: string } }) {
  redirect(`/${defaultLang}/blog/${params.slug}`)
}
