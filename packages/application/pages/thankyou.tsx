import type { NextPage } from 'next'
import Image from 'next/image'
import {
  VStack,
  Text,
  Box,
  HStack,
  Button,
  useBreakpointValue,
} from 'native-base'

import BaseLayout from '../components/templates/BaseLayoutSecondary'
import poiLogo from '../components/atoms/Icons/logoPOI1.png'
import closeIcon from '../components/atoms/Icons/closeIcon.svg'
import Corner1 from '../components/atoms/Icons/Corner1.svg'
import Corner2 from '../components/atoms/Icons/Corner2.svg'
import Corner3 from '../components/atoms/Icons/Corner3.svg'
import Corner4 from '../components/atoms/Icons/Corner4.svg'

const ThankYou: NextPage = () => {
  const amount: any = '1.000'

  const linkText = useBreakpointValue({
    base: 'See more details in Etherscan',
    lg: 'More Details',
  })
  const iconSize = useBreakpointValue({
    base: '70px',
    lg: '130px',
  })

  return (
    // <ZStack h="auto" minH="100vh">
    <BaseLayout bgColor="transparent" display={{ base: 'none', lg: 'flex' }}>
      <HStack
        position="static"
        top="0"
        left="0"
        h="7vh"
        w="100%"
        justifyContent="space-between"
        zIndex="10"
        px="5"
        display={{ base: 'flex', lg: 'none' }}
      >
        <Text fontSize="2xl">Donation</Text>
        <Image src={closeIcon} />
      </HStack>
      <VStack
        w="100%"
        h={{ base: '93vh', lg: '100%' }}
        minH="100vh"
        justifyContent="start"
        position="relative"
        overflowY="hidden"
      >
        <HStack justifyContent="center" pb="7" mt="20">
          <Box>
            <Image
              src={poiLogo}
              alt="POI Logo"
              width={iconSize}
              height={iconSize}
            />
          </Box>
        </HStack>
        <Box
          h={{ base: '400', lg: '480' }}
          w={{ base: '340', lg: '720' }}
          py="10"
          alignSelf="center"
          rounded="3xl"
          bg="background.100"
          alignItems="center"
        >
          <Text
            fontSize={{ base: '5xl', lg: '8xl' }}
            fontWeight="700"
            color="text.800"
            py="2"
          >
            Thank You!
          </Text>

          <VStack
            space={{ base: 0, lg: 4 }}
            px={{ base: 4, lg: 4 }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Text color="text.800" fontSize={{ base: 'lg', lg: 'xl' }}>
              You contributed <strong>${amount} to our pool.</strong>
            </Text>
            <Text color="text.800" fontSize={{ base: 'lg', lg: 'xl' }}>
              We are so happy to be your partner on fighting poverty.
            </Text>
          </VStack>

          <HStack py="5">
            <Button variant="link">{linkText}</Button>
          </HStack>

          <HStack py="5">
            <Button>Continue helping</Button>
          </HStack>
        </Box>

        <HStack pt="8" pb="100px">
          <Button variant="link">Go back to Home</Button>
        </HStack>
        <Box
          top="0"
          left="0"
          zIndex="-1"
          position="absolute"
          w={{ base: '6rem', lg: '9rem' }}
        >
          <Image src={Corner1} />
        </Box>
        <Box
          top="0"
          right="0"
          zIndex="-1"
          position="absolute"
          w={{ base: '12rem', lg: '20rem' }}
        >
          <Image src={Corner2} />
        </Box>

        <Box
          bottom="0"
          left="0"
          zIndex="-1"
          position="absolute"
          w={{ base: '7rem', lg: '18rem' }}
        >
          <Image src={Corner3} />
        </Box>
        <Box
          bottom="0"
          right="0"
          zIndex="-1"
          position="absolute"
          w={{ base: '11rem', lg: '28rem' }}
        >
          <Image src={Corner4} />
        </Box>
      </VStack>
      {/* // </ZStack> */}
    </BaseLayout>
  )
}

export default ThankYou
