import { Languages } from '@i18n/keys'
import { defaultLang } from '@i18n'

import { useLanguageQuery } from 'next-export-i18n'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

export interface IUseLanguageSelectorResult {
  onChange: (lang: string) => void
  currentLang: typeof Languages[number]
  restLangs: typeof Languages
}

export const useLanguageSelector = (): IUseLanguageSelectorResult => {
  const [query] = useLanguageQuery()
  const router = useRouter()

  const onChange = (lang: string) => {
    router.push({ ...router, query: { ...router.query, lang } })
  }

  const { current, rest } = useMemo(() => {
    const selected = query ? query.lang : defaultLang
    const currentSelected = Languages.find(
      ({ lang }) => lang === selected
    ) as typeof Languages[number]
    const notSelected = Languages.filter(({ lang }) => lang !== selected)
    return { current: currentSelected, rest: notSelected }
  }, [query])

  return { onChange, currentLang: current, restLangs: rest }
}
