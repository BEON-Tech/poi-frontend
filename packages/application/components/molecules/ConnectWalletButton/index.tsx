import { Button, HStack, Text } from 'native-base'
import { useTranslation } from 'react-i18next'
// eslint-disable-next-line import/no-unresolved
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack'
import { useWallet } from '@hooks/wallet'
import { keys } from '@i18n'

interface IConnectWalletButtonProps {
  containerProps?: IHStackProps
  onConnectPress?: () => void
  width: any
  height: any
}

const ConnectWalletButton = ({
  containerProps = {},
  onConnectPress,
  width,
  height,
}: IConnectWalletButtonProps) => {
  const { t } = useTranslation()
  const { activate } = useWallet()

  const handleConnectWallet = () => {
    if (onConnectPress) onConnectPress()
    activate()
  }

  return (
    <HStack {...containerProps}>
      <Button
        w={width}
        h={height}
        borderRadius={100}
        bg="greenColor.900"
        onPress={handleConnectWallet}
      >
        <Text color="white" fontSize="lg">
          {t(keys.donate.connectWallet)}
        </Text>
      </Button>
    </HStack>
  )
}

export default ConnectWalletButton
