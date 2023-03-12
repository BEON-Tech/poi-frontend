import { HStack, Text, Pressable } from 'native-base'
import { useTranslation } from 'react-i18next'
import { StarknetConnectWalletButton } from '@components/molecules'
import { POILogo } from '@components/atoms/Icons'
import { keys } from '@i18n'
import { redirectToHome } from '@services/urls'
import { useEffect, useState } from 'react'
import {
  addWalletChangeListener,
  chainId,
  connectWallet,
  networkId,
  removeWalletChangeListener,
  silentConnectWallet,
} from '@services/starknet/wallet.service'

const StarknetNavigationBar = () => {
  const [address, setAddress] = useState<string>()
  const [chain, setChain] = useState(chainId())
  const [isConnected, setConnected] = useState(false)

  const { t } = useTranslation()

  useEffect(() => {
    const handler = async () => {
      const wallet = await silentConnectWallet()
      setAddress(wallet?.selectedAddress)
      setChain(chainId())
      setConnected(!!wallet?.isConnected)
    }

    ;(async () => {
      await handler()
      addWalletChangeListener(handler)
    })()

    return () => {
      removeWalletChangeListener(handler)
    }
  }, [])

  const handleConnectClick = async () => {
    if (isConnected) {
      return
    }

    const wallet = await connectWallet()
    setAddress(wallet?.selectedAddress)
    setChain(chainId())
    setConnected(!!wallet?.isConnected)
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
        <HStack space={4}>
          {chain && <Text>Network: {networkId()}</Text>}
          <StarknetConnectWalletButton
            width="250px"
            height="50px"
            onConnectPress={handleConnectClick}
            address={address}
          />
        </HStack>
      </HStack>
    </HStack>
  )
}

export default StarknetNavigationBar
