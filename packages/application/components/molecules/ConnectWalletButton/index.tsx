import { Button, HStack, Tooltip } from 'native-base'
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
          px={29}
          isDisabled={isConnected}
          onPress={handleConnectWallet}
          bg="primary.800"
          color="invertedText.900"
        >
          {isConnected ? 'Disconnect' : 'Connect Wallet'}
        </Button>
      </Tooltip>
    </HStack>
  )
}

export default ConnectWalletButton
