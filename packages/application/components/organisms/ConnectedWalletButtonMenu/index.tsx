import { useState } from 'react'
import { Button, HStack, Text, Menu } from 'native-base'
import { useWallet } from '../../../hooks/wallet'
import MenuChevronIcon from '../../atoms/MenuChevronIcon'
import { t } from '../../../i18n'
import keys from '../../../i18n/keys'

interface IConnectedWalletButtonMenuProps {
  onDisconnect?: () => void
  width: any
  height: any
  borderRadius: number
}

const TriggerMenu = ({ account, w, h, borderRadius, isMenuOpen, ...triggerProps }: any) => (
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
  borderRadius
}: IConnectedWalletButtonMenuProps) => {
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
      marginTop={0}
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
        <Button
          borderRadius={borderRadius}
          bg="#2d6320"
          onPress={handleDisconnectWallet}
        >
          <Text color="white" fontSize="lg">
            {t(keys.donate.disconnect)}
          </Text>
        </Button>
      </Menu.Item>
    </Menu>
  )
}

export default ConnectedWalletButtonMenu
