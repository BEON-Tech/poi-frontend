import { Button, Text, VStack } from 'native-base'
import { useTranslation } from 'react-i18next'
// eslint-disable-next-line import/no-unresolved
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack'
import { useWallet } from '@hooks/wallet'
import { keys } from '@i18n'
import { useState } from 'react'

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
  const [isEthereumProviderError, setEthereumProviderError] = useState(false)
  const { t } = useTranslation()
  const { activate, errorIsNoEthereumProviderError } = useWallet()

  const onActivateError = (error: Error) => {
    if (errorIsNoEthereumProviderError(error)) {
      setEthereumProviderError(true)
    }
  }

  const handleConnectWallet = () => {
    if (onConnectPress) onConnectPress()
    activate(onActivateError)
  }

  return (
    <VStack {...containerProps}>
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
      {isEthereumProviderError && (
        <Text position="fixed" mt={height} pt={8} fontSize="sm">
          {t(keys.donate.pleaseInstallMetamaskShort)}
        </Text>
      )}
    </VStack>
  )
}

export default ConnectWalletButton
