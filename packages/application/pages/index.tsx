import {
  VStack,
  Text,
  ZStack,
  Box,
  Heading,
  Stack,
  useBreakpointValue,
  Button,
} from 'native-base'
import type { NextPage } from 'next'
import Image from 'next/image'

import BaseLayout from '../components/templates/BaseLayoutSecondary'

import Footer from '../components/organisms/Footer'

import Vector1 from '../components/atoms/Icons/Vector1.svg'
import Vector2 from '../components/atoms/Icons/Vector2.svg'
import Vector3 from '../components/atoms/Icons/Vector3.svg'
import Vector4 from '../components/atoms/Icons/Vector4.svg'
import Vector5 from '../components/atoms/Icons/Vector5.svg'
import Polygon1 from '../components/atoms/Icons/Polygon1.svg'
import Polygon2 from '../components/atoms/Icons/Polygon2.svg'
import Polygon3 from '../components/atoms/Icons/Polygon3.svg'
import foto1 from '../components/atoms/Icons/foto1.png'
import foto2 from '../components/atoms/Icons/foto2.png'

const Home: NextPage = () => {
  const onRedirectToDonate = () => {}
  const onRedirectToNeedUBI = () => {}

  const v1 = useBreakpointValue({
    base: 252,
    lg: 324,
  })

  return (
    <BaseLayout bgColor="background.900" withConnect withLang>
      <ZStack
        mt="20"
        w="100%"
        overflow="hidden"
        h={{ base: '90vh', lg: 400 }}
        justifyContent="start"
        bg="background.100"
        mb={{ base: '20', lg: '20' }}
      >
        <VStack
          pt={{ base: '5', lg: '10' }}
          pb="10"
          px={{ base: '5', lg: '16' }}
          h="full"
          alignItems="start"
          w="full"
        >
          <Heading
            fontWeight="500"
            color="text.900"
            fontSize={{ base: '5xl', lg: '7xl' }}
            textAlign="left"
          >
            We certify who, you donate.
          </Heading>
          <Box w={{ base: '85%', lg: 'full' }} py="3">
            <Text color="text.900" py="3" fontWeight="300" fontSize="xl">
              We love to be your partner on changing the world.
            </Text>
            <Text color="text.900" pb="10" fontWeight="300" fontSize="xl">
              Humans in need are waiting to be crowdfunded to join Proof of
              Humanity and start getting $ubi.
            </Text>
          </Box>
          <Button
            w={{ base: 'full', lg: '140' }}
            _text={{ fontSize: '2xl' }}
            py="7"
          >
            Donate
          </Button>
        </VStack>
        <Box right="-40" display={{ base: 'none', lg: 'block' }}>
          <Image src={Vector1} height={400} />
        </Box>
        <Box bottom="-5" right="40" display={{ base: 'none', lg: 'block' }}>
          <Image src={Vector2} height={100} />
        </Box>
        <Box top="20" left="0" display={{ base: 'none', lg: 'block' }}>
          <Image src={Vector3} height={50} />
        </Box>
        <Box bottom="22rem" right="0" display={{ base: 'block', lg: 'none' }}>
          <Image src={Polygon3} height={100} />
        </Box>
        <Box top="0" left="0" display={{ base: 'block', lg: 'none' }}>
          <Image src={Vector4} height={250} width={1000} />
        </Box>
        <Box top="0" left="0" display={{ base: 'block', lg: 'none' }}>
          <Image src={Vector5} height={150} width={1000} />
        </Box>
      </ZStack>
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        maxW="full"
        space={0}
        h={{ base: '90vh', lg: 'full' }}
      >
        <Stack w={{ base: '100%', lg: '50%' }} justifyContent="start">
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            alignItems="start"
            space={5}
            px={{ base: 5, lg: 10 }}
          >
            <Box px={{ base: '0', lg: '0' }}>
              <Image src={Polygon1} height={50} />
            </Box>
            <Box w={{ base: 'full', lg: '95%' }}>
              <Text fontSize="5xl" fontWeight="500" color="text.900" pb="2">
                With POI, your donations go to the right hands.
              </Text>
              <Box pt={{ base: '5', lg: '10' }}>
                <Button variant="outline" width={{ base: 'full', lg: '350' }}>
                  Consulta Nuestro Whitepaper
                </Button>
              </Box>
            </Box>
          </Stack>
        </Stack>
        <Stack direction="row" position="relative">
          <Box
            position="absolute"
            bottom={{ base: '8rem', lg: '5rem' }}
            left={{ base: '20rem', lg: '2rem' }}
          >
            <Image src={Polygon2} height={70} />
          </Box>
          <Box
            top={{ base: '2rem', lg: '-0.5rem' }}
            left={{ base: '4rem', lg: '10rem' }}
          >
            <Image src={Polygon2} height={70} />
          </Box>
          <Box
            top={{ base: '3.5rem', lg: '1rem' }}
            left={{ base: '-3rem', lg: '3rem' }}
          >
            <Image src={foto1} height={149} width={149} />
          </Box>
          <Box
            bottom={{ base: '-11rem', lg: '2rem' }}
            left={{ base: '-2rem', lg: '6rem' }}
          >
            <Image src={foto2} height={v1} width={v1} />
          </Box>
        </Stack>
      </Stack>
      <Footer />
    </BaseLayout>
  )
}

export default Home