import { HStack, Text, Pressable } from 'native-base'
import { useTranslation } from 'react-i18next'
import { StarknetConnectWalletButton } from '@components/molecules'
import { POILogo } from '@components/atoms/Icons'
import { keys } from '@i18n'
import { redirectToHome } from '@services/urls'
import { connect } from '@argent/get-starknet'
import { useState } from 'react'

const StarknetNavigationBar = () => {
  const [address, setAddress] = useState<string | null>(null)
  const { t } = useTranslation()

  const onConnectPress = async () => {
    const starknet = await connect()
    await starknet?.enable()
    if (starknet?.selectedAddress) {
      setAddress(starknet.selectedAddress)
    }
  }

  return (
    <HStack
      w="100%"
      justifyContent="space-between"
      alignItems="center"
      maxH="50px"
      pt="34px"
      pr="34px"
      pl="80px"
      mt="20px"
      mb="50px"
    >
      <Pressable onPress={redirectToHome}>
        <HStack space={4}>
          <POILogo size="63px" />
          <Text fontSize="xl" color="greenColor.600" bold>
            {t(keys.main.poi)}
          </Text>
        </HStack>
      </Pressable>
      <HStack>
        <StarknetConnectWalletButton
          width="250px"
          height="50px"
          onConnectPress={onConnectPress}
          address={address}
        />
      </HStack>
    </HStack>
  )
}

export default StarknetNavigationBar
