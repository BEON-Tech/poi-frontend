import { useState } from 'react'
import { Button, HStack, Text, Menu } from 'native-base'
import { useTranslation } from 'react-i18next'
import { useWallet } from '@hooks'
import { keys } from '@i18n'
import MenuChevronIcon from '@components/atoms/MenuChevronIcon'

interface IConnectedWalletButtonMenuProps {
  onDisconnect?: () => void
  width: any
  height: any
  borderRadius: number
}

const TriggerMenu = ({
  account,
  w,
  h,
  borderRadius,
  isMenuOpen,
  ...triggerProps
}: any) => (
  <Button
    w={w}
    h={h}
    borderTopRadius={borderRadius}
    borderBottomRadius={isMenuOpen ? 0 : borderRadius}
    borderWidth={1}
    borderBottomWidth={isMenuOpen ? 0 : 1}
    borderColor="#2d6320"
    backgroundColor="white"
    overflowX="hidden"
    {...triggerProps}
    _stack={{
      width: '100%',
      display: 'block',
    }}
  >
    <HStack px={2} w="100%" space={2}>
      <Text width="80%" color="#2d6320" fontSize="lg" bold isTruncated>
        {account}
      </Text>
      <MenuChevronIcon size={4} isMenuOpen={isMenuOpen} />
    </HStack>
  </Button>
)

const ConnectedWalletButtonMenu = ({
  onDisconnect,
  width,
  height,
  borderRadius,
}: IConnectedWalletButtonMenuProps) => {
  const { t } = useTranslation()
  const { account, deactivate } = useWallet()
  const [isMenuOpen, setOpenMenu] = useState(false)
  const updateIsMenuOpen = (isOpen: boolean) => setOpenMenu(isOpen)

  const handleDisconnectWallet = () => {
    if (onDisconnect) onDisconnect()
    deactivate()
  }

  return (
    <Menu
      placement="bottom"
      w={width}
      bg="white"
      shadow={-1}
      borderBottomRadius={borderRadius}
      borderColor="#2d6320"
      borderWidth={1}
      borderTopRadius={0}
      borderTopWidth={0}
      top="-1px"
      overflow="hidden"
      trigger={(triggerProps) =>
        TriggerMenu({
          account,
          width,
          height,
          borderRadius,
          handleDisconnectWallet,
          isMenuOpen,
          ...triggerProps,
        })
      }
      onOpen={() => updateIsMenuOpen(true)}
      onClose={() => updateIsMenuOpen(false)}
    >
      <Menu.Item background="white">
        <Button variant="solid" onPress={handleDisconnectWallet}>
          {t(keys.donate.disconnect)}
        </Button>
      </Menu.Item>
    </Menu>
  )
}

export default ConnectedWalletButtonMenu
