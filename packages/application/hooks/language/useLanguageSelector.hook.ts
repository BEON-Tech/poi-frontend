import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { Languages } from '../../i18n/locales'

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
    const selected = query ? query.lang : 'en'
    const currentSelected = Languages.find(
      ({ lang } : any) => lang === selected
    ) as typeof Languages[number]
    const notSelected = Languages.filter(({ lang } : any) => lang !== selected)
    return { current: currentSelected, rest: notSelected }
  }, [query])

  return { onChange, currentLang: current, restLangs: rest }
}

export default useLanguageSelector
