import { useRouter } from 'next/router'
import { useMemo } from 'react'

import { i18n } from '../../i18n'
import { Languages } from '../../i18n/keys'

export interface IUseLanguageSelectorResult {
  onChange: (lang: string) => void
  currentLang: typeof Languages[number]
  restLangs: typeof Languages
}

const useLanguageSelector = (): IUseLanguageSelectorResult => {
  const router = useRouter()
  const query = {lang: 'lang' in router.query ? router.query.lang : 'en'} 
  
  const onChange = (lang: string) => {
    router.push({ ...router, query: { ...router.query, lang } })
  }

  const { current, rest } = useMemo(() => {
    const selected = query ? query.lang : i18n.defaultLang
    const currentSelected = Languages.find(
      ({ lang }) => lang === selected
    ) as typeof Languages[number]
    const notSelected = Languages.filter(({ lang }) => lang !== selected)
    return { current: currentSelected, rest: notSelected }
  }, [query])

  return { onChange, currentLang: current, restLangs: rest }
}

export default useLanguageSelector
