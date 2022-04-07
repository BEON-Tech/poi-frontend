import { HStack, Box, Text } from 'native-base'
import Image from 'next/image'

import poiLogo2 from '../../atoms/Icons/logoPOI2.png'

const Logo = ({ children }: any) => (
  <HStack justifyContent="start" space={{ base: 2, lg: 5 }}>
    <Box>
      <Image src={poiLogo2} alt="POI Logo" width={60} height={60} />
    </Box>
    <Text fontWeight="700" fontSize="xl">
      {children}
    </Text>
  </HStack>
)

export default Logo
