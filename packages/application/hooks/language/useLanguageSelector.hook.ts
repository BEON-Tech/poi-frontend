import i18n from '@i18n'
import { useMemo } from 'react'

export interface IUseLanguageSelectorResult {
  onChange: (lang: string) => void
  currentLanguage?: string
  languages: string[]
}

const useLanguageSelector = (): IUseLanguageSelectorResult => {
  const currentLanguage = i18n.resolvedLanguage
  const onChange = (lang: string) => {
    i18n.changeLanguage(lang)
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
