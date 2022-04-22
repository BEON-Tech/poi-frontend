import React, { useState } from 'react'
import {
  Button,
  HStack,
  Menu,
  Text
} from 'native-base'

import { useLanguageSelector } from '../../../hooks/language'
import Flag from '../../atoms/Icons/Languages'
import MenuChevronIcon from '../../atoms/MenuChevronIcon'
import { useBreakpoint } from '../../../hooks/device'

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


const LanguageSelect = () => {
  const { isDesktop } = useBreakpoint()
  return isDesktop ? (
    <LanguageSelectDesktop />
  ) : (
    <LanguageSelectDesktop />
  )
}

export default LanguageSelect
