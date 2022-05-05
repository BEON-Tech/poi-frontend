import type { NextPage } from 'next'
import Image from 'next/image'
import {
  useBreakpointValue,
  Box,
  Stack,
  ZStack,
  VStack,
  Heading,
  Button,
  Text,
} from 'native-base'

import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'

import { SecondaryLayout } from '@components/templates'
import { NavigationBar, Footer } from '@components/organisms'
import home_photo1 from '@assets/images/home_photo1.svg'
import home_photo2 from '@assets/images/home_photo2.svg'
import home_corner1 from '@assets/images/home_corner1.svg'
import home_corner2 from '@assets/images/home_corner2.svg'
import home_polygon1 from '@assets/images/home_polygon1.svg'
import home_polygon2 from '@assets/images/home_polygon2.svg'
import home_corner1_resp from '@assets/images/home_corner1_resp.svg'
import home_corner2_resp from '@assets/images/home_corner2_resp.svg'
import home_polygon_resp from '@assets/images/home_polygon_resp.svg'

const Home: NextPage = () => {
  const v1 = useBreakpointValue({
    base: 252,
    lg: 324,
  })
  const { t } = useTranslation()

  return (
    <SecondaryLayout>
      <NavigationBar />
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
            {t(keys.home.heading)}
          </Heading>
          <Box w={{ base: '85%', lg: 'full' }} py="3">
            <Text color="text.900" py="3" fontWeight="300" fontSize="xl">
              {t(keys.home.weLoveTo)}
            </Text>
            <Text color="text.900" pb="10" fontWeight="300" fontSize="xl">
              {t(keys.home.humansInNeed)}
            </Text>
          </Box>
          <Button
            w={{ base: 'full', lg: '140' }}
            _text={{ fontSize: '2xl' }}
            py="7"
          >
            {t(keys.home.donate)}
          </Button>
        </VStack>
        <Box right="-40" display={{ base: 'none', lg: 'block' }}>
          <Image src={home_polygon1} height={400} />
        </Box>
        <Box bottom="-5" right="40" display={{ base: 'none', lg: 'block' }}>
          <Image src={home_corner2} height={100} />
        </Box>
        <Box top="20" left="0" display={{ base: 'none', lg: 'block' }}>
          <Image src={home_corner1} height={50} />
        </Box>
        <Box bottom="22rem" right="0" display={{ base: 'block', lg: 'none' }}>
          <Image src={home_polygon_resp} height={100} />
        </Box>
        <Box top="0" left="0" display={{ base: 'block', lg: 'none' }}>
          <Image src={home_corner1_resp} height={250} width={1000} />
        </Box>
        <Box top="0" left="0" display={{ base: 'block', lg: 'none' }}>
          <Image src={home_corner2_resp} height={150} width={1000} />
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
              <Image src={home_polygon1} height={50} />
            </Box>
            <Box w={{ base: 'full', lg: '95%' }}>
              <Text fontSize="5xl" fontWeight="500" color="text.900" pb="2">
                {t(keys.home.withPOI)}
              </Text>
              <Box pt={{ base: '5', lg: '10' }}>
                <Button variant="outline" width={{ base: 'full', lg: '350' }}>
                  {t(keys.home.whitepaper)}
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
            <Image src={home_polygon2} height={70} />
          </Box>
          <Box
            top={{ base: '2rem', lg: '-0.5rem' }}
            left={{ base: '4rem', lg: '10rem' }}
          >
            <Image src={home_polygon2} height={70} />
          </Box>
          <Box
            top={{ base: '3.5rem', lg: '1rem' }}
            left={{ base: '-3rem', lg: '3rem' }}
          >
            <Image src={home_photo2} height={149} width={149} />
          </Box>
          <Box
            bottom={{ base: '-11rem', lg: '2rem' }}
            left={{ base: '-2rem', lg: '6rem' }}
          >
            <Image src={home_photo1} height={v1} width={v1} />
          </Box>
        </Stack>
      </Stack>
      <Footer />
    </SecondaryLayout>
  )
}

export default Home
