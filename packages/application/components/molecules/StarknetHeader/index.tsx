import { Box, HStack, Heading, VStack } from 'native-base'
import { BulletedTitle, CornerPublicAudit } from '@components/atoms'

interface StarknetHeaderProps {
  title: string
  subtitles?: string[]
  hidePolygon?: boolean
}

const StarknetHeader = ({
  title,
  subtitles,
  hidePolygon = false,
}: StarknetHeaderProps) => (
  <HStack w="full" justifyContent={{ base: 'center', lg: 'center' }}>
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
    <VStack>
      <BulletedTitle
        polygonName="homePolygon1"
        title={title}
        showSmall
        hidePolygon={hidePolygon}
        ml={{ base: 6, lg: 0 }}
      />
      {subtitles &&
        subtitles?.map((subtitle) => (
          <Heading
            fontWeight="600"
            color="text.900"
            fontSize={{ base: '2xl', lg: '4xl' }}
          >
            {subtitle}
          </Heading>
        ))}
    </VStack>
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
