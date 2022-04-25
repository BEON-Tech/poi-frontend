import {
  Button,
  Text,
  View,
  HStack
} from 'native-base'

import { t } from '../../../i18n'
import keys from '../../../i18n/keys'
import { useWallet } from '../../../hooks/wallet'

import MetamaskIcon from '../../atoms/Icons/Metamask'

const CheckConnection = () => {
  const { activate } = useWallet()

  const handleConnectWallet = () => {
    activate()
  }

  return (
    <View mt={60} display="flex" alignItems="center">
      <Button
        borderRadius={100}
        onPress={handleConnectWallet}
        padding={6}
      >
        <HStack w="100%">
          <MetamaskIcon />
          <Text ml={2} color="white" fontSize="lg">{t(keys.donate.metamask)}</Text>
        </HStack>
      </Button>
      <Text mt={5}>{t(keys.donate.checkConnection)}</Text>
    </View>
  )
}

export default CheckConnection
