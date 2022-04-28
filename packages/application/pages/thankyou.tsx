import type { NextPage } from 'next'
import {
  VStack,
  Text,
  Box,
  HStack,
  Button,
  useBreakpointValue,
} from 'native-base'
import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'
import BaseLayout from '@components/templates/BaseLayoutSecondary'
import { Corner, POILogo2 } from '@components/atoms/Icons'

const ThankYou: NextPage = () => {
  const { t } = useTranslation()
  const amount: any = '1.000'

  const iconSize = useBreakpointValue({
    base: '70px',
    lg: '130px',
  })

  return (
    <BaseLayout bgColor="transparent" display={{ base: 'none', lg: 'flex' }}>
      <VStack
        w="100%"
        h={{ base: '93vh', lg: '100%' }}
        minH="100vh"
        justifyContent="start"
        position="relative"
        overflowY="hidden"
      >
        <HStack justifyContent="center" pb={7} mt={32}>
          <Box>
            <POILogo2 size={iconSize} />
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
            {t(keys.thankYou.thankYou)}
          </Text>

          <VStack
            space={{ base: 0, lg: 4 }}
            px={{ base: 4, lg: 4 }}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Text color="text.800" fontSize={{ base: 'lg', lg: 'xl' }}>
              {t(keys.thankYou.youContributed)} <strong>${amount} {t(keys.thankYou.toOurPool)}</strong>
            </Text>
            <Text color="text.800" fontSize={{ base: 'lg', lg: 'xl' }}>
              {t(keys.thankYou.weAreHappy)}
            </Text>
          </VStack>

          <HStack py="5">
            <Button variant="link">{t(keys.thankYou.moreDetails)}</Button>
          </HStack>

          <HStack py="5">
            <Button>{t(keys.thankYou.continueHelping)}</Button>
          </HStack>
        </Box>

        <HStack pt="8" pb="100px">
          <Button variant="link">{t(keys.thankYou.goBackToHome)}</Button>
        </HStack>
        <Box
          top="0"
          left="0"
          zIndex="-1"
          position="absolute"
          w={{ base: '6rem', lg: '9rem' }}
        >
          <Corner position="leftup" />
        </Box>
        <Box
          top="0"
          right="0"
          zIndex="-1"
          position="absolute"
          w={{ base: '12rem', lg: '20rem' }}
        >
          <Corner position="rightup" />
        </Box>

        <Box
          bottom="0"
          left="0"
          zIndex="-1"
          position="absolute"
          w={{ base: '7rem', lg: '18rem' }}
        >
          <Corner position="leftdown" />
        </Box>
        <Box
          bottom="0"
          right="0"
          zIndex="-1"
          position="absolute"
          w={{ base: '11rem', lg: '28rem' }}
        >
          <Corner position="rightdown" />
        </Box>
      </VStack>
    </BaseLayout>
  )
}

export default ThankYou
