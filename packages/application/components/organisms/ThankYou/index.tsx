import Image from 'next/image'
import { useRouter } from 'next/router'
import { VStack, Text, Box, HStack, Button } from 'native-base'

import { ROUTES_NAMES } from '@constants'
import { Logo } from '@components/molecules'
import PoiLogo from '@components/atoms/Icons/logoPOI1.png'

interface IThankYouProps {
  tokenSymbol: string
  amount: number
  transactionUrl: string
}

const ThankYou = ({ tokenSymbol, amount, transactionUrl }: IThankYouProps) => {
  const router = useRouter()

  const moreDetailsHandler = () => {
    window.open(transactionUrl, '_blank')
  }

  const homeRedirectHandler = () => router.push(ROUTES_NAMES.home)

  return (
    <VStack w="100%" justifyContent="center">
      <HStack w="90%" justifyContent="start">
        <Logo />
      </HStack>
      <HStack justifyContent="center" pb="7">
        <Box>
          <Image src={PoiLogo} alt="POI Logo" width={113} height={113} />
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
            You contributed{' '}
            <strong>
              ${amount} {tokenSymbol} to our pool.
            </strong>
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
            onPress={moreDetailsHandler}
          >
            More Details
          </Button>
        </HStack>

        <HStack py="5">
          <Button w={250} py={7} fontSize="2xl">
            Continue helping
          </Button>
        </HStack>
      </Box>

      <HStack py="8">
        <Button
          variant="link"
          _text={{ fontSize: 'lg', color: 'primary.900' }}
          _hover={{ _text: { color: 'primary.800' } }}
          onPress={homeRedirectHandler}
        >
          Go back to Home
        </Button>
      </HStack>
    </VStack>
  )
}
export default ThankYou