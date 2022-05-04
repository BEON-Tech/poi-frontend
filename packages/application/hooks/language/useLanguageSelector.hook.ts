import i18n from '@i18n'
import { useRouter } from 'next/router'
import { useMemo } from 'react'

export interface IUseLanguageSelectorResult {
  onChange: (lang: string) => void
  currentLanguage?: string
  languages: string[]
}

const useLanguageSelector = (): IUseLanguageSelectorResult => {
  const router = useRouter()
  const currentLanguage = i18n.resolvedLanguage

  const onChange = async (lang: string) => {
    await i18n.changeLanguage(lang)
    router.push(router.asPath, undefined, { locale: lang })
  }

  const languages = useMemo(() => {
    const availableLanguages = Object.keys(i18n.options.resources || {})
    const notSelected = availableLanguages.filter(
      (lang) => lang !== currentLanguage
    )
    return notSelected
  }, [currentLanguage])

  return { onChange, currentLanguage, languages }
}

export default useLanguageSelector
