import { Box, HStack } from 'native-base'
import { BulletedTitle, CornerPublicAudit } from '@components/atoms'

interface StarknetHeaderProps {
  title: string
}

const StarknetHeader = ({ title }: StarknetHeaderProps) => (
  <HStack w="full" justifyContent={{ base: 'flex-start', lg: 'center' }}>
    <Box
      left="0"
      zIndex="-1"
      position="absolute"
      w="183px"
      h="183px"
      display={{ base: 'none', lg: 'block' }}
    >
      <CornerPublicAudit position="topLeft" />
    </Box>
    <BulletedTitle
      polygonName="homePolygon1"
      title={title}
      showSmall
      ml={{ base: 6, lg: 0 }}
    />
    <Box
      right="0"
      zIndex="-1"
      position="absolute"
      w="75px"
      h="183px"
      display={{ base: 'none', lg: 'block' }}
    >
      <CornerPublicAudit position="topRight" />
    </Box>
  </HStack>
)

export default StarknetHeader
