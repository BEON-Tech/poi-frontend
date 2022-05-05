import React, { useState } from 'react'
import { Button, HStack, Menu, Text } from 'native-base'

import { useLanguageSelector } from '@hooks'
import Flag from '@components/atoms/Icons/Languages'
import MenuChevronIcon from '@components/atoms/MenuChevronIcon'

const TriggerMenu = ({ currentLanguage, menuOpen, ...triggerProps }: any) => (
  <Button
    minW={8}
    w={24}
    pl={3}
    pr={3}
    backgroundColor="transparent"
    overflowY="hidden"
    variant="solid"
    {...triggerProps}
    endIcon={<MenuChevronIcon size={6} isMenuOpen={menuOpen} />}
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
      {Flag(currentLanguage, 4)}
      <Text fontSize="md">{currentLanguage.toUpperCase()}</Text>
    </HStack>
  </Button>
)

const LanguageSelect = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const { currentLanguage, languages, onChange } = useLanguageSelector()
  const updateIsMenuOpen = (isOpen: boolean) => setOpenMenu(isOpen)
  const bg = { base: 'white', lg: 'transparent' }

  return (
    <Menu
      placement="bottom"
      w={24}
      pl={0}
      pr={4}
      shadow={-1}
      trigger={(triggerProps) =>
        TriggerMenu({
          currentLanguage,
          menuOpen: openMenu,
          ...triggerProps,
        })
      }
      overflow="hidden"
      onOpen={() => updateIsMenuOpen(true)}
      onClose={() => updateIsMenuOpen(false)}
      borderBottomRadius={{ base: 8, lg: 0 }}
      bg={bg}
    >
      {languages.map((lang) => (
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

export default LanguageSelect
