import React, { useState } from 'react'
import {
  Button,
  IButtonProps,
  ChevronDownIcon,
  View,
  Divider,
  HStack,
  VStack,
} from 'native-base'

import { useLanguageSelector, useBreakpoint } from '@hooks'
import Images, { IComponentKeys } from '@components/atoms/Images'
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack'
import { IVStackProps } from 'native-base/lib/typescript/components/primitives/Stack/VStack'

type ILanguageItemProps = IButtonProps & {
  onPress: () => void
  label: string
  selected?: boolean
  iconName: IComponentKeys
}

type ILanguageSelectProps = IVStackProps | IHStackProps

const isLast = (index: number, length: number) => index === length - 1

const LanguageItem = ({
  onPress,
  iconName,
  label,
  selected = false,
  ...props
}: ILanguageItemProps) => {
  const { isDesktop } = useBreakpoint()
  const ImageComponent = Images[iconName]
  const selectedProps = isDesktop
    ? {
        rightIcon: <ChevronDownIcon w="20px" color="general.900" />,
      }
    : {
        borderColor: 'general.100',
        variant: 'outline',
        rightIcon: undefined,
      }
  const extraProps = selected ? selectedProps : {}
  return (
    <Button
      leftIcon={ImageComponent ? <ImageComponent /> : undefined}
      variant="link"
      onPress={onPress}
      {...extraProps}
      {...props}
      zIndex={2}
    >
      {label}
    </Button>
  )
}

const LanguageSelectDesktop = (props: ILanguageSelectProps) => {
  const [openMenu, setOpenMenu] = useState(false)
  const { currentLang, restLangs, onChange } = useLanguageSelector()
  return (
    <VStack w="100px" position="relative" zIndex="1" {...props}>
      <LanguageItem
        iconName={currentLang.iconName as any}
        label={currentLang.lang.toUpperCase()}
        onPress={() => setOpenMenu(!openMenu)}
        selected
      />
      {openMenu && (
        <VStack w="100%" position="absolute" mt="55px">
          {restLangs.map(({ lang, iconName }) => (
            <LanguageItem
              rightIcon={<View w={lang === 'es' ? '34px' : '30px'} />}
              key={lang}
              iconName={iconName as any}
              label={lang.toUpperCase()}
              onPress={() => {
                onChange(lang)
                setOpenMenu(false)
              }}
            />
          ))}
        </VStack>
      )}
    </VStack>
  )
}

const LanguageSelectMobile = (props: ILanguageSelectProps) => {
  const { currentLang, restLangs, onChange } = useLanguageSelector()
  const langs = [currentLang, ...restLangs]

  return (
    <HStack w="100%" justifyContent="center" alignItems="center" {...props}>
      {langs.map(({ lang, iconName }, index) => (
        <>
          <LanguageItem
            selected={lang === currentLang.lang}
            key={lang}
            iconName={iconName as any}
            label={lang.toUpperCase()}
            onPress={() => {
              onChange(lang)
            }}
          />
          {!isLast(index, langs.length) && (
            <Divider
              mx="20px"
              bg="general.200"
              orientation="vertical"
              height="30px"
            />
          )}
        </>
      ))}
    </HStack>
  )
}

const LanguageSelect = (props: ILanguageSelectProps) => {
  const { isDesktop } = useBreakpoint()
  return isDesktop ? (
    <LanguageSelectDesktop {...props} />
  ) : (
    <LanguageSelectMobile {...props} />
  )
}

export default LanguageSelect
