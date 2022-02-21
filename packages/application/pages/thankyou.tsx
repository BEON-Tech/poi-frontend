import type { NextPage } from 'next'
import Image from 'next/image'
import { VStack, Text, Box, HStack } from 'native-base'

import ButonPrimaryWithIcon from '../components/molecules/ButtonPrimaryWithIcon'
import LinkButton from '../components/molecules/LinkButton'
import { TwitterIcon } from '../components/atoms/Icons'
import poiLogo from '../components/atoms/Icons/logoPOI1.png'
import poiLogo2 from '../components/atoms/Icons/logoPOI2.png'

const ThankYou: NextPage = () => {
  const amount: any = '1.000'

  return (
    <VStack maxW="100vw">
      <HStack py="5" justifyContent="start" space={5} w="85%">
        <Box>
          <Image src={poiLogo2} alt="POI Logo" width={60} height={60} />
        </Box>
        <Text fontWeight="700" fontSize="xl">
          Proof of Integrity
        </Text>
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
          <ButonPrimaryWithIcon icon={TwitterIcon}>
            Share it on Twitter
          </ButonPrimaryWithIcon>
        </HStack>
      </Box>

      <HStack py="8">
        <LinkButton>Go back to Home</LinkButton>
      </HStack>
    </VStack>
  )
}

export default ThankYou
