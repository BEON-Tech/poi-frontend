import type { NextPage } from 'next'
import { Box, Stack, ZStack, VStack, Heading, Button, Text } from 'native-base'

import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'

import { SecondaryLayout } from '@components/templates'
import { NavigationBar, Footer } from '@components/organisms'
import { HomeCorner, HomePolygon, HomePhotoIcon } from '@components/atoms/Icons'
import { MAX_WIDTH } from '@constants'

const Home: NextPage = () => {
  const { t } = useTranslation()
  return (
    <SecondaryLayout>
      <NavigationBar />
      <ZStack
        w="100%"
        overflow="hidden"
        h={{ base: '90vh', lg: 400 }}
        justifyContent="start"
        bg="background.100"
        mb={{ base: '20', lg: '20' }}
      >
        <VStack
          maxW={MAX_WIDTH}
          w="100%"
          h="100%"
          pt={{ base: '5', lg: '10' }}
          pb="10"
          px={{ base: '5', lg: '16' }}
          alignSelf="center"
          alignItems="start"
        >
          <Heading
            fontWeight="600"
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
        <HomeCorner
          right={0}
          w={130}
          h="100%"
          zIndex={-1}
          display={{ base: 'none', lg: 'block' }}
          iconPosition="corner1Big"
        />
        <HomeCorner
          bottom={0}
          right={140}
          w={483}
          h={85}
          zIndex={-1}
          display={{ base: 'none', lg: 'block' }}
          iconPosition="corner2Big"
        />
        <HomePolygon
          top={16}
          left={-24}
          w={54}
          h={53}
          display={{ base: 'none', lg: 'block' }}
          polygon="homePolygon1"
        />
        <HomePolygon
          bottom="22rem"
          right={0}
          w={73}
          h={94}
          display={{ base: 'block', lg: 'none' }}
          polygon="homePolygonResp"
        />
        <HomeCorner
          top={0}
          width="100%"
          height={24}
          display={{ base: 'block', lg: 'none' }}
          iconPosition="corner1Small"
        />
        <HomeCorner
          top={0}
          w="100%"
          h={20}
          display={{ base: 'block', lg: 'none' }}
          iconPosition="corner2Small"
        />
      </ZStack>
      <Stack
        maxW={MAX_WIDTH}
        w="100%"
        h={{ base: '90vh', lg: 'full' }}
        alignSelf="center"
        direction={{ base: 'column', lg: 'row' }}
        space={0}
        mb={{ base: 64, sm: 0,  lg: 12 }}
      >
        <Stack w={{ base: '100%', lg: '50%' }} justifyContent="start">
          <Stack
            direction={{ base: 'column', lg: 'row' }}
            alignItems="start"
            space={5}
            px={{ base: 5, lg: 10 }}
          >
            <HomePolygon
              px={{ base: '0', lg: '0' }}
              w={54}
              h={53}
              polygon="homePolygon1"
            />
            <Box w={{ base: 'full',  lg: '95%' }}>
              <Text fontSize="5xl" fontWeight="600" color="text.900" pb="2">
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
          <HomePolygon
            position="absolute"
            bottom={{ base: '8rem', lg: '5rem' }}
            left={{ base: '20rem', lg: '2rem' }}
            w={73}
            h={73}
            polygon="homePolygon2"
          />
          <HomePolygon
            top={{ base: '2rem', lg: '-0.5rem' }}
            left={{ base: '4rem', lg: '10rem' }}
            w={70}
            h={70}
            polygon="homePolygon2"
          />
          <HomePhotoIcon
            top={{ base: '3.5rem', lg: '1rem' }}
            left={{ base: '-3rem', lg: '3rem' }}
            h={149}
            w={149}
            photo="homePhoto1"
          />
          <HomePhotoIcon
            bottom={{ base: '-11rem', lg: '2rem' }}
            left={{ base: '-2rem', lg: '6rem' }}
            h={{ base: 252, lg: 324 }}
            w={{ base: 252, lg: 324 }}
            photo="homePhoto2"
          />
        </Stack>
      </Stack>
      <Footer />
    </SecondaryLayout>
  )
}

export default Home
