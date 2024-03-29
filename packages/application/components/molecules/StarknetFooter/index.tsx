import { Box, Button, VStack } from 'native-base'
import { CornerPublicAudit } from '@components/atoms'
import { useRouter } from 'next/router'

interface IStarknetFooter {
  hideButton?: boolean
  buttonText?: string
  buttonAction?: () => void
}

const StarknetFooter = ({
  hideButton,
  buttonText = 'Add Edition',
  buttonAction = undefined,
}: IStarknetFooter) => {
  const { push } = useRouter()

  const addEditionOnPress = () => {
    if (buttonAction) {
      buttonAction()
    } else {
      push('/starknet/add')
    }
  }

  return (
    <VStack w="full" justifyContent="flex-end" flex={1}>
      <VStack w="full">
        <Box
          top={{ base: '120px', lg: '0' }}
          left="0"
          zIndex="-1"
          position="absolute"
          w={{ base: '50px', lg: '80px' }}
          h={{ base: '200px', lg: '308px' }}
        >
          <CornerPublicAudit position="bottom1" />
        </Box>
        <Box
          bottom="0"
          left="0"
          zIndex="-1"
          position="absolute"
          w={{ base: '138px', lg: '206px' }}
          h={{ base: '94px', lg: '112px' }}
        >
          <CornerPublicAudit position="bottom2" />
        </Box>
        <VStack height={360}>
          {!hideButton && (
            <Button
              px={10}
              py={7}
              _text={{ fontSize: 20 }}
              alignSelf="center"
              onPress={addEditionOnPress}
            >
              {buttonText}
            </Button>
          )}
        </VStack>
        <Box
          bottom="0"
          right={{ base: '80px', lg: '200px' }}
          zIndex="-1"
          position="absolute"
          w={{ base: '216px', lg: '330px' }}
          h={{ base: '70px', lg: '74px' }}
        >
          <CornerPublicAudit position="bottom3" />
        </Box>
        <Box
          bottom={{ base: '120px', lg: '40px' }}
          right="0"
          zIndex="-1"
          position="absolute"
          w={{ base: '56px', lg: '100px' }}
          h={{ base: '140px', lg: '250px' }}
        >
          <CornerPublicAudit position="bottom4" />
        </Box>
      </VStack>
    </VStack>
  )
}

export default StarknetFooter
