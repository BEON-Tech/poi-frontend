import {
  Modal,
  Text,
  View,
  VStack,
  HStack,
  Heading,
  CloseIcon,
  CheckIcon,
} from 'native-base'

import { useEffect } from 'react'
import { ConnectWallet } from '@components/molecules'
import { useIsRegisteredPoH, useWallet, useIsMounted } from '@hooks'
import { RegisterOnPoHLink } from '@components/atoms'

const CLOSE_MODAL_SECONDS = 3

export interface ICheckHumanModalProps {
  onClose: () => void
}

// al validar mostrar el tick
const CheckHumanModal = ({ onClose }: ICheckHumanModalProps) => {
  const isMounted = useIsMounted()
  const { active } = useWallet()
  const { isRegistered } = useIsRegisteredPoH()

  useEffect(() => {
    if (isRegistered) {
      setTimeout(() => {
        if (isMounted) onClose()
      }, CLOSE_MODAL_SECONDS * 1000)
    }
  }, [isRegistered])

  return (
    <Modal
      isOpen
      animationPreset="fade"
      backdropVisible
      _backdrop={{
        bg: '#000',
        opacity: 0.65,
      }}
    >
      <Modal.Content h="500" w="400" p="5">
        <Heading
          fontSize="2xl"
          color="secondary.900"
          fontWeight="regular"
          mb="5"
        >
          Connect your Wallet to continue
        </Heading>
        <ConnectWallet />
        <VStack mt="5" alignItems="flex-start" justifyContent="center">
          <HStack mb="10" w="100%" space={2}>
            <View flex={1} justifyContent="center" alignItems="center">
              {active ? (
                <CheckIcon color="success.600" />
              ) : (
                <CloseIcon size="5" color="error.600" />
              )}
            </View>
            <Text flex={5}>Connecting to your wallet</Text>
          </HStack>
          <HStack w="100%" space={2}>
            <View flex={1} justifyContent="center" alignItems="center">
              {isRegistered ? (
                <CheckIcon color="success.600" />
              ) : (
                <CloseIcon size="5" color="error.600" />
              )}
            </View>
            <Text flex={5}>
              Checking you are registered in Proof of Humanity
            </Text>
          </HStack>
          <RegisterOnPoHLink />
        </VStack>
        {isRegistered && (
          <Text fontSize="xs" bottom={5} position="absolute">
            This modal will close in {CLOSE_MODAL_SECONDS} seconds
          </Text>
        )}
      </Modal.Content>
    </Modal>
  )
}

export default CheckHumanModal
