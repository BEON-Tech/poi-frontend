import React, { useState } from 'react'
import { Button, HStack, Menu, Text } from 'native-base'

import { useLanguageSelector, useBreakpoint } from '@hooks'
import Flag from '@components/atoms/Icons/Languages'
import MenuChevronIcon from '@components/atoms/MenuChevronIcon'

const TriggerMenu = ({ currentLang, menuOpen, ...triggerProps }: any) => (
  <Button
    minW={8}
    w={24}
    pl={3}
    pr={3}
    backgroundColor="transparent"
    overflowY="hidden"
    variant="solid"
    {...triggerProps}
    endIcon={<MenuChevronIcon size={4} isMenuOpen={menuOpen} />}
    _stack={{
      width: '100%',
      justifyContent: 'space-between',
      alignContent: 'center',
    }}
    _hover={{
      textDecorationLine: 'underline',
    }}
  >
    <HStack w="auto" space={2}>
      {Flag(currentLang, 4)}
      <Text fontSize="md">{currentLang.toUpperCase()}</Text>
    </HStack>
  </Button>
)

const LanguageMenu = ({ bg, withBorderRadius = false }: any) => {
  const [openMenu, setOpenMenu] = useState(false)
  const { currentLang, restLangs, onChange } = useLanguageSelector()
  const updateIsMenuOpen = (isOpen: boolean) => setOpenMenu(isOpen)
  return (
    <Menu
      placement="bottom"
      w={24}
      bg={bg}
      pl={0}
      pr={4}
      shadow={-1}
      trigger={(triggerProps) =>
        TriggerMenu({
          currentLang: currentLang.lang,
          menuOpen: openMenu,
          ...triggerProps,
        })
      }
      onOpen={() => updateIsMenuOpen(true)}
      onClose={() => updateIsMenuOpen(false)}
      borderBottomRadius={withBorderRadius ? 8 : 0}
      overflow="hidden"
    >
      {restLangs.map(({ lang } : any) => (
        <Menu.Item
          key={lang}
          onPress={() => onChange(lang)}
          pl={0}
          background={bg}
          _hover={{
            textDecorationLine: 'underline',
          }}
        >
          <HStack w="auto" space={2} bg={bg}>
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
    <LanguageMenu bg="transparent" />
  ) : (
    <LanguageMenu bg="white" withBorderRadius />
  )
}

export default LanguageSelect
