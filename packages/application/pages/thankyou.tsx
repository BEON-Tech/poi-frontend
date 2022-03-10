import type { NextPage } from 'next'
import Image from 'next/image'
import { VStack, Text, Box, HStack } from 'native-base'

import ButtonPrimary from '../components/molecules/ButtonPrimary'
import LinkButton from '../components/molecules/LinkButton'
import Logo from '../components/molecules/Logo'
import poiLogo from '../components/atoms/Icons/logoPOI1.png'

const ThankYou: NextPage = () => {
  const amount: any = '1.000'

  return (
    <VStack w="100%" justifyContent="center">
      <HStack w="90%" justifyContent="start">
        <Logo />
      </HStack>
      <HStack justifyContent="center" pb="7">
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
          <LinkButton>More Details</LinkButton>
        </HStack>

        <HStack py="5">
          <ButtonPrimary large width={250}>
            Continue helping
          </ButtonPrimary>
        </HStack>
      </Box>

      <HStack py="8">
        <LinkButton>Go back to Home</LinkButton>
      </HStack>
    </VStack>
  )
}

export default ThankYou
