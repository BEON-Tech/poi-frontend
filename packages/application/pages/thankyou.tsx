import type { NextPage } from 'next'
import { useRouter } from 'next/router'
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
import { SecondaryLayout } from '@components/templates'
import { NavigationBar } from '@components/organisms'
import { Corner, POILogo2 } from '@components/atoms/Icons'
import { openTransactionExplorer, redirectToHome } from '@services/urls'

const ThankYou: NextPage = () => {
  const { t } = useTranslation()
  const router = useRouter()
  
  const hash = router.query.hash || ''
  const amount = router.query.amount || '0'
  const token = router.query.token || ''
  
  const onNavigate = (newRoute: string) => router.push(newRoute)
  const showMoreDetails = () => openTransactionExplorer(hash as string)

  const iconSize = useBreakpointValue({
    base: '70px',
    lg: '130px',
  })

  return (
    <SecondaryLayout>
      <VStack
        w="100%"
        h={{ base: '93vh', lg: '100%' }}
        minH="100vh"
        justifyContent="start"
        position="relative"
        overflowY="hidden"
      >
        <NavigationBar hideBottomBar />
        <HStack justifyContent="center" pb={7} mt={{base: 12, lg: 6}}>
          <Box>
            <POILogo2 size={iconSize} />
          </Box>
        </HStack>
        <Box
          w={{ base: '340', lg: '720' }}
          pt={10}
          pb={16}
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
              {t(keys.thankYou.youContributed)}{' '}
              <strong>
                {amount} {token} {t(keys.thankYou.toOurPool)}
              </strong>
            </Text>
            <Text color="text.800" fontSize={{ base: 'lg', lg: 'xl' }}>
              {t(keys.thankYou.weAreHappy)}
            </Text>
          </VStack>
          <Button variant="link" colorScheme="primary" mt={8} onPress={showMoreDetails}>
            {t(keys.thankYou.moreDetails)}
          </Button>
          <Button
            variant="solid"
            mt={8}
            w="200px"
            h="50px"
            onPress={() => onNavigate('donate')}
          >
            {t(keys.thankYou.continueHelping)}
          </Button>
        </Box>
        <Button variant="link" mt={8} onPress={redirectToHome}>
          {t(keys.thankYou.goBackToHome)}
        </Button>
        <Box
          top={{base: 8, lg: 0}}
          left="0"
          zIndex="-1"
          position="absolute"
          w={{ base: '6rem', lg: '9rem' }}
          h={{ base: '7rem', lg: '10.55rem' }}
        >
          <Corner position="leftup" />
        </Box>
        <Box
          top={{base: 8, lg: 0}}
          right="0"
          zIndex="-1"
          position="absolute"
          w={{ base: '11.4rem', lg: '20rem' }}
          h={{ base: '6rem', lg: '5.4rem' }}
        >
          <Corner position="rightup" />
        </Box>
        <Box
          bottom="0"
          left="0"
          zIndex="-1"
          position="absolute"
          w={{ base: '7rem', lg: '18rem' }}
          h={{ base: '2rem', lg: '5.1rem' }}
        >
          <Corner position="leftdown" />
        </Box>
        <Box
          bottom="0"
          right="0"
          zIndex="-1"
          position="absolute"
          w={{ base: '11rem', lg: '28rem' }}
          h={{ base: '2rem', lg: '5rem' }}
        >
          <Corner position="rightdown" />
        </Box>
      </VStack>
    </SecondaryLayout>
  )
}

export default ThankYou
