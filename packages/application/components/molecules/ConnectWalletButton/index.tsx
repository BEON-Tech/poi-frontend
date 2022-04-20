import { Button, HStack, Tooltip, Text } from 'native-base'
// eslint-disable-next-line import/no-unresolved
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack'
import { useWallet } from '../../../hooks/wallet'

interface IConnectWalletButtonProps {
  containerProps?: IHStackProps
  onConnectPress?: () => void
}

const ConnectWalletButton = ({
  containerProps = {},
  onConnectPress,
}: IConnectWalletButtonProps) => {
  const { account, activate } = useWallet()

  const handleConnectWallet = () => {
    if (onConnectPress) onConnectPress()
    activate()
  }

  const isConnected = !!account

  return (
    <HStack {...containerProps}>
      <Tooltip
        bg="indigo.500"
        label="To disconnect use MetaMask plugin"
        isDisabled={!isConnected}
        openDelay={0}
        placement="bottom"
      >
        <Button
          w="200px"
          h="50px"
          borderRadius={100}
          isDisabled={isConnected}
          onPress={handleConnectWallet}
          bg="#2d6320"
          color="white"
        >
          <Text color="white" fontSize="lg">{isConnected ? 'Disconnect' : 'Connect Wallet'}</Text>
        </Button>
      </Tooltip>
    </HStack>
  )
}

export default ConnectWalletButton
