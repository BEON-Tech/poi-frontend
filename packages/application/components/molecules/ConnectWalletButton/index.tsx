import { Button, HStack, Text } from 'native-base'
// eslint-disable-next-line import/no-unresolved
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack'
import { useWallet } from '../../../hooks/wallet'
import { t } from '../../../i18n'
import keys from '../../../i18n/keys'

interface IConnectWalletButtonProps {
  containerProps?: IHStackProps
  onConnectPress?: () => void
}

const ConnectWalletButton = ({
  containerProps = {},
  onConnectPress,
}: IConnectWalletButtonProps) => {
  const { account, activate, deactivate } = useWallet()

  const isConnected = !!account

  const handleConnectWallet = () => {
    if (onConnectPress) onConnectPress()
    
    if (isConnected) {
      deactivate()
    } else {
      activate()
    }
  }

  

  return (
    <HStack {...containerProps}>
      <Button
        w="200px"
        h="50px"
        borderRadius={100}
        onPress={handleConnectWallet}
        bg="#2d6320"
        color="white"
      >
        <Text color="white" fontSize="lg">
          {t(keys.donate.connectWallet)}
        </Text>
      </Button>
    </HStack>
  )
}

export default ConnectWalletButton
