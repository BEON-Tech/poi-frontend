import { Box, VStack } from 'native-base'
import { CornerPublicAudit } from '@components/atoms'

const StarknetFooter = () => (
  <VStack w="full" mb={{ base: 20, lg: 0 }}>
    <Box
      top="0"
      left="0"
      zIndex="-1"
      position="absolute"
      w={{ base: '50px', lg: '80px' }}
      h={{ base: '450px', lg: '308px' }}
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
    <VStack height={360}>&nbsp;</VStack>
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
      bottom="40px"
      right="0"
      zIndex="-1"
      position="absolute"
      w={{ base: '56px', lg: '100px' }}
      h={{ base: '140px', lg: '250px' }}
    >
      <CornerPublicAudit position="bottom4" />
    </Box>
  </VStack>
)

export default StarknetFooter
