import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import {
  Button,
  Flex,
  IButtonProps,
  Text,
  VStack,
  ChevronDownIcon,
  View,
} from 'native-base'
import { useLanguageQuery } from 'next-export-i18n'

import { Languages } from '@i18n/keys'
import { defaultLang } from '@i18n'
import Images, { IComponentKeys } from '../Images'

interface ILanguageItemProps extends IButtonProps {
  onPress: () => void
  label: string
  selected?: boolean
  iconName: IComponentKeys
}

const LanguageItem = ({
  onPress,
  iconName,
  label,
  selected = false,
  ...props
}: ILanguageItemProps) => {
  const ImageComponent = Images[iconName]
  return (
    <Button
      leftIcon={ImageComponent ? <ImageComponent /> : undefined}
      variant="link"
      onPress={onPress}
      rightIcon={
        selected ? <ChevronDownIcon w="20px" color="general.900" /> : undefined
      }
      {...props}
      zIndex={2}
    >
      <Text>{label}</Text>
    </Button>
  )
}

const LanguageSelect = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const [query] = useLanguageQuery()
  const router = useRouter()

  const onPress = (lang: string) => {
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

  // useEffect(() => {
  //   const handleClickOutsideMenu = () => setOpenMenu(false)
  //   window.addEventListener('click', handleClickOutsideMenu)
  //   return () => window.removeEventListener('click', handleClickOutsideMenu)
  // }, [])

  // <Select
  //   defaultValue={query ? query.lang : defaultLang}
  //   onValueChange={(newLangValue) => onPress(newLangValue)}
  // >
  //   {Languages.map(({ lang, name, Icon }) => (
  //     <Select.Item key={lang} value={lang} label={name} leftIcon={<Icon />} />
  //   ))}
  // </Select>

  return (
    <Flex
      flexDirection={{ base: 'row', md: 'column' }}
      w="100px"
      position="relative"
      zIndex="1"
    >
      <LanguageItem
        iconName={current.iconName as any}
        label={current.lang.toUpperCase()}
        onPress={() => setOpenMenu(!openMenu)}
        selected
      />
      {openMenu && (
        <VStack bg="amber.100" w="100%" position="absolute" mt="55px">
          {rest.map(({ lang, iconName }) => (
            <LanguageItem
              rightIcon={<View w="20px" />}
              key={lang}
              iconName={iconName as any}
              label={lang.toUpperCase()}
              onPress={() => {
                console.log('here')
                onPress(lang)
                setOpenMenu(false)
              }}
            />
          ))}
        </VStack>
      )}
    </Flex>
  )
}

export default LanguageSelect
