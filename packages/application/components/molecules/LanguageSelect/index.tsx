import React, { useState } from 'react'
import {
  Button,
  IButtonProps,
  ChevronDownIcon,
  Divider,
  HStack,
  Menu,
  Text,
} from 'native-base'

import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack'
import { IVStackProps } from 'native-base/lib/typescript/components/primitives/Stack/VStack'
import { useLanguageSelector } from '../../../hooks/language'
import Flag from '../../atoms/Icons/Languages'
import MenuChevronIcon from '../../atoms/MenuChevronIcon'

type ILanguageItemProps = IButtonProps & {
  onPress: () => void
  label: string
  selected?: boolean
  iconName: string
}

type ILanguageSelectProps = IVStackProps | IHStackProps

const isLast = (index: number, length: number) => index === length - 1

const TriggerMenu = ({ currentLang, menuOpen, ...triggerProps }: any) => (
  <Button
    minW={8}
    w={24}
    pl={3}
    pr={3}
    backgroundColor="#f2e4e3"
    overflowY="hidden"
    variant="solid"
    {...triggerProps}
    endIcon={MenuChevronIcon(4, menuOpen)}
    _stack={{
      width: '100%',
      justifyContent: 'space-between',
      alignContent: 'center',
    }}
    _hover={{
      textDecorationLine: 'underline'
    }}
  >
    <HStack w="auto" space={2}>
      {Flag(currentLang, 4)}
      <Text fontSize="md">{currentLang.toUpperCase()}</Text>
    </HStack>
  </Button>
)

const LanguageItem = ({
  onPress,
  iconName,
  label,
  selected = false,
  ...props
}: ILanguageItemProps) => {
  //const { isDesktop } = useBreakpoint()
  const isDesktop = true
  const ImageComponent = Flag(iconName, 4)
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
      leftIcon={ImageComponent}
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

const LanguageSelectDesktop = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const { currentLang, restLangs, onChange } = useLanguageSelector()
  const updateIsMenuOpen = (isOpen: boolean) => setOpenMenu(isOpen)
  return (
    <Menu
      placement="bottom"
      w={24}
      bg="#f2e4e3"
      pl={0}
      pr={4}
      shadow={-1}
      // eslint-disable-next-line react/no-unstable-nested-components
      trigger={(triggerProps) =>
        TriggerMenu({
          currentLang: currentLang.lang,
          menuOpen: openMenu,
          ...triggerProps,
        })
      }
      onOpen={() => updateIsMenuOpen(true)}
      onClose={() => updateIsMenuOpen(false)}
    >
      {restLangs.map(({ lang }) => (
        <Menu.Item
          key={lang}
          onPress={() => onChange(lang)}
          pl={0}
          background="#f2e4e3"
          _hover={{
            textDecorationLine: 'underline'
          }}
        >
          <HStack w="auto" space={2} bg="#f2e4e3">
            {Flag(lang, 4)}
            <Text fontSize="md">{lang.toUpperCase()}</Text>
          </HStack>
        </Menu.Item>
      ))}
    </Menu>
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
  //const { isDesktop } = useBreakpoint()
  const isDesktop = true
  return isDesktop ? (
    <LanguageSelectDesktop />
  ) : (
    <LanguageSelectMobile {...props} />
  )
}

export default LanguageSelect
