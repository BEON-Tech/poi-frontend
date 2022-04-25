import { useState } from 'react'
import { Button, Text, View, HStack } from 'native-base'

import { t } from '../../../i18n'
import keys from '../../../i18n/keys'
import { useWallet } from '../../../hooks/wallet'
import MetamaskIcon from '../../atoms/Icons/Metamask'

const CheckConnection = () => {
  const [isHover, updateHover] = useState(false)
  const hoverStart = () => updateHover(true)
  const hoverEnd = () => updateHover(false)

  const { activate } = useWallet()

  const handleConnectWallet = () => {
    activate()
  }

  return (
    <View
      mt={{
        base: 10,
        sm: 10,
        lg: 10,
        xl: 20,
      }}
      display="flex"
      alignItems="center"
    >
      <Button
        borderRadius={100}
        onPress={handleConnectWallet}
        padding={6}
        backgroundColor={isHover ? '#2d6320' : 'white'}
        borderColor="#2d6320"
        borderWidth={1}
        onHoverIn={hoverStart}
        onHoverOut={hoverEnd}
        onTouchStart={hoverStart}
        onTouchEnd={hoverEnd}
      >
        <HStack w="100%" space={3}>
          <MetamaskIcon />
          <Text
            color={isHover ? 'white' : '#2d6320'}
            fontSize="lg"
            bold
          >
            {t(keys.donate.metamask)}
          </Text>
        </HStack>
      </Button>
      <Text
        maxW="80%"
        mt={5}
        textAlign="center"
        fontSize={{
          base: 'sm',
          sm: 'sm',
          lg: 'sm',
          xl: 'xl',
        }}
      >
        {t(keys.donate.checkConnection)}
      </Text>
    </View>
  )
}

export default CheckConnection
