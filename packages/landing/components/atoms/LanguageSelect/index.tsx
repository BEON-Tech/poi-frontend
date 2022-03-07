import { Select } from 'native-base'
import { useLanguageQuery } from 'next-export-i18n'
import { useRouter } from 'next/router'
import { Languages } from '@i18n/keys'
import { defaultLang } from '@i18n'

const LanguageSelect = () => {
  const [query] = useLanguageQuery()
  const router = useRouter()

  const onPress = (lang: string) => {
    router.push({ ...router, query: { ...router.query, lang } })
  }

  return (
    <Select
      defaultValue={query ? query.lang : defaultLang}
      onValueChange={(newLangValue) => onPress(newLangValue)}
    >
      {Languages.map(({ lang, name }) => (
        <Select.Item key={lang} value={lang} label={name} />
      ))}
    </Select>
  )
}

export default LanguageSelect
