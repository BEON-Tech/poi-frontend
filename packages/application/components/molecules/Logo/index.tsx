import { HStack, Box, Text } from 'native-base'
import Image from 'next/image'

import poiLogo2 from '@components/atoms/Icons/logoPOI2.png'

const Logo = ({ children }: any) => (
  <HStack py="3" justifyContent="start" space={5}>
    <Box>
      <Image src={poiLogo2} alt="POI Logo" width={60} height={60} />
    </Box>
    <Text fontWeight="700" fontSize="xl">
      {children}
    </Text>
  </HStack>
)

export default Logo
