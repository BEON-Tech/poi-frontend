import type { NextPage } from 'next'
import Image from 'next/image'
import { VStack, Text, Box, HStack, ZStack, Button } from 'native-base'

import BaseLayout from '../components/templates/BaseLayout'
import poiLogo from '../components/atoms/Icons/logoPOI1.png'

import Corner1 from '../components/atoms/Icons/Corner1.svg'
import Corner2 from '../components/atoms/Icons/Corner2.svg'
import Corner3 from '../components/atoms/Icons/Corner3.svg'
import Corner4 from '../components/atoms/Icons/Corner4.svg'

const ThankYou: NextPage = () => {
  const amount: any = '1.000'

  return (
    // <ZStack h="auto" minH="100vh">
    <BaseLayout bgColor="transparent">
      <VStack w="100%" h="100%" justifyContent="start" position="relative">
        <HStack justifyContent="center" pb="7" mt="20">
          <Box>
            <Image src={poiLogo} alt="POI Logo" width={113} height={113} />
          </Box>
        </HStack>
        <Box
          h="480"
          w="720"
          py="10"
          alignSelf="center"
          rounded="3xl"
          bg="background.100"
          alignItems="center"
        >
          <Text fontSize="8xl" fontWeight="700" color="text.800">
            Thank You!
          </Text>

          <HStack>
            <Text color="text.800" py="4" fontSize="xl">
              You contributed <strong>${amount} to our pool.</strong>
            </Text>
          </HStack>
          <HStack color="text.800">
            <Text fontSize="xl">
              We are so happy to be your partner on fighting poverty.
            </Text>
          </HStack>

          <HStack py="5">
            <Button variant="link">More Details</Button>
          </HStack>

          <HStack py="5">
            <Button>Continue helping</Button>
          </HStack>
        </Box>

        <HStack pt="8" pb="100px">
          <Button variant="link">Go back to Home</Button>
        </HStack>
        <Box top="0" left="0" zIndex="-1" position="absolute">
          <Image src={Corner1} />
        </Box>
        <Box top="0" right="0" zIndex="-1" position="absolute">
          <Image src={Corner2} />
        </Box>

        <Box bottom="0" left="0" zIndex="-1" position="absolute">
          <Image src={Corner3} />
        </Box>
        <Box bottom="0" right="0" zIndex="-1" position="absolute">
          <Image src={Corner4} />
        </Box>
      </VStack>
      {/* // </ZStack> */}
    </BaseLayout>
  )
}

export default ThankYou
