import { useRouter } from 'next/router'
import { useMemo } from 'react'
import { Languages } from '@i18n'

export interface IUseLanguageSelectorResult {
  onChange: (lang: string) => void
  currentLang?: string
  restLangs: Array<string>
}

const useLanguageSelector = (): IUseLanguageSelectorResult => {
  const router = useRouter()
  const query = {lang: 'lang' in router.query ? router.query.lang : 'en'} 
  
  const onChange = (lang: string) => {
    router.push({ ...router, query: { ...router.query, lang } })
  }

  const { current, rest } = useMemo(() => {
    const selected = query ? query.lang : 'en'
    const availableLanguages = Object.keys(Languages)
    const currentSelected = availableLanguages.find(lang => lang === selected)
    const notSelected = availableLanguages.filter(lang => lang !== selected)    
    return { current: currentSelected, rest: notSelected }
  }, [query])

  return { onChange, currentLang: current, restLangs: rest }
}

export default useLanguageSelector
