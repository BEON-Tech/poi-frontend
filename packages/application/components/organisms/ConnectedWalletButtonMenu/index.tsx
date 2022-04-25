import MenuChevronIcon from 'components/atoms/MenuChevronIcon'
import { Button, HStack, Text } from 'native-base'
import { useWallet } from '../../../hooks/wallet'
import { t } from '../../../i18n'
import keys from '../../../i18n/keys'

interface IConnectedWalletButtonMenuProps {
  onConnectPress?: () => void
  width: any
  height: any
}

const ConnectedWalletButtonMenu = ({
  onConnectPress,
  width,
  height,
}: IConnectedWalletButtonMenuProps) => {
  const { account, deactivate } = useWallet()

  const handleDisconnectWallet = () => {
    if (onConnectPress) onConnectPress()
    deactivate()
  }

  return (
    <Button
      w={width}
      h={height}
      borderRadius={100}
      borderWidth={1}
      borderColor="#2d6320"
      backgroundColor="white"
      onPress={handleDisconnectWallet}      
      _stack={{
        maxW: "100%",
        overflowX: "hidden",
      }}
    >
      <HStack pl={12} w="80%">
        <Text color="#2d6320" fontSize="lg" maxW="50%" isTruncated>
          {account}
        </Text>
        <MenuChevronIcon size={4} isMenuOpen />
      </HStack>
    </Button>
  )
}

export default ConnectedWalletButtonMenu
