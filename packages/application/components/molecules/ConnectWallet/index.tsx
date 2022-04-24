import { Button, HStack, Tooltip } from 'native-base'
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack'
import { useTranslation } from 'react-i18next'

import { keys } from '@i18n'
import { useWallet } from '@hooks'

export interface IConnectWalletProps {
  containerProps?: IHStackProps
  onConnectPress?: () => void
}

const ConnectWallet = ({
  containerProps = {},
  onConnectPress,
}: IConnectWalletProps) => {
  const { t } = useTranslation()
  const { account, activate } = useWallet()

  const handleConnectWallet = () => {
    if (onConnectPress) onConnectPress()
    activate()
  }

  const isConnected = !!account

  const buttonLabel = isConnected
    ? keys.general.disconnectCTA
    : keys.general.connectCTA

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
          {t(buttonLabel)}
        </Button>
      </Tooltip>
    </HStack>
  )
}

export default ConnectWallet
