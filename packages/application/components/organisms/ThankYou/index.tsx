import type { NextPage } from 'next'
import Image from 'next/image'
import { VStack, Text, Box, HStack, Button } from 'native-base'

import Logo from '../../molecules/Logo'
import poiLogo from '../../atoms/Icons/logoPOI1.png'

const ThankYou: NextPage = ({ tokenSymbol, amount, transactionUrl }: any) => (
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
            You contributed <strong>${amount} {tokenSymbol} to our pool.</strong>
          </Text>
        </HStack>
        <HStack color="text.800">
          <Text fontSize="xl">
            We are so happy to be your partner on fighting poverty.
          </Text>
        </HStack>

        <HStack py="5">
          <Button
            variant="link"
            _text={{ fontSize: 'lg', color: 'primary.900' }}
            _hover={{ _text: { color: 'primary.800' } }}
          >
            More Details
          </Button>
        </HStack>

        <HStack py="5">
          <Button
            w={250}
            py={7}
            fontSize="2xl"
          >
            Continue helping
          </Button>
        </HStack>
      </Box>

      <HStack py="8">
        <Button
          variant="link"
          _text={{ fontSize: 'lg', color: 'primary.900' }}
          _hover={{ _text: { color: 'primary.800' } }}
        >
          Go back to Home
        </Button>
      </HStack>
    </VStack>
  )

export default ThankYou