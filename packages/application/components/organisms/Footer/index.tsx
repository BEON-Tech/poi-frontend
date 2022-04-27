import {
  HStack,
  VStack,
  Text,
  Stack,
  Button,
  useBreakpointValue,
} from 'native-base'
import Image from 'next/image'

import poiLogo2 from '@components/atoms/Icons/logoPOI2.png'

const Footer = () => {
  const display = useBreakpointValue({
    base: 'flex',
    lg: 'none',
  })

  return (
    <Stack
      direction={{ base: 'column', lg: 'row' }}
      bg="background.100"
      w="100%"
      h={{ base: '60vh', lg: 300 }}
      mt="20"
      px={{ base: '5', lg: '20' }}
      space={{ base: 20, lg: 0 }}
    >
      <HStack pt="16" display={display} space={5}>
        <Button>ES</Button>
        <Button>EN</Button>
      </HStack>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        alignItems={{ base: 'start', lg: 'flex-end' }}
        justifyContent="space-between"
        pb="16"
        w="full"
      >
        <VStack alignItems="start" space={2}>
          <Image src={poiLogo2} width={85} height={85} />
          <Text mt="3" color="greenColor.600" fontSize="2xl" fontWeight={700}>
            Proof Of Integrity
          </Text>
          <Text color="text.700" fontWeight={300}>
            Proof Of Integrity is a non profit project.
          </Text>
        </VStack>

        <Text color="text.600" fontWeight={300} mt={{ base: '8', lg: '20' }}>
          Designed by Latin American talent at BEON Tech Studio
        </Text>
      </Stack>
    </Stack>
  )
}

export default Footer
