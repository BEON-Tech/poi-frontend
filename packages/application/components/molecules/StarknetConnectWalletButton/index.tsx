import { Button, Text, VStack } from 'native-base'
// eslint-disable-next-line import/no-unresolved
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack'

interface IConnectWalletButtonProps {
  containerProps?: IHStackProps
  onConnectPress?: () => void
  address?: string | null
  width: any
  height: any
}

const StarknetConnectWalletButton = ({
  containerProps = {},
  onConnectPress,
  address,
  width,
  height,
}: IConnectWalletButtonProps) => {
  const handleConnectWallet = () => {
    if (onConnectPress) onConnectPress()
  }

  return (
    <VStack {...containerProps}>
      <Button
        w={width}
        h={height}
        px={20}
        borderRadius={100}
        bg="greenColor.900"
        onPress={handleConnectWallet}
        overflow="hidden"
      >
        <Text color="white" fontSize="lg">
          {address ? `${address?.substring(0, 18)}...` : 'Connect'}
        </Text>
      </Button>
    </VStack>
  )
}

export default StarknetConnectWalletButton
