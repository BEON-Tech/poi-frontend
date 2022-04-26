import { Flex, Heading, VStack, Button, View, Text } from 'native-base'

import { CONTACT_US_SECTION } from '@constants'
import { useTranslation } from 'next-export-i18n'
import keys from '@i18n/keys'
import { Images } from '@components/atoms'
import { Container } from '@components/templates'

const ConctactUsSection = () => {
  const { t } = useTranslation()

  const buttonText = 'info@proofofintegrity.org'
  const onMailPress = () => {
    window.location.href = `mailto:${buttonText}`
  }
  return (
    <Container nativeID={CONTACT_US_SECTION}>
      <Flex
        position="relative"
        pb={{ base: '100px', lg: '210px' }}
        pt={{ base: '100px', lg: '170px' }}
        px={{ base: '20px', lg: '80px' }}
        alignItems="center"
        flexDirection={{ base: 'column', xl: 'row' }}
      >
        <View
          flex="1"
          height="100%"
          maxH="314px"
          maxW={{ base: '100%', sm: '600px', lg: '633px' }}
          mb={{ base: '35px', xl: 0 }}
          mr={{ xl: '200px' }}
        >
          <View
            flex="1"
            position="absolute"
            borderWidth="1px"
            borderColor="general.100"
            mt="20px"
            ml="50px"
            borderRadius={{ base: '30px', lg: '50px' }}
            w="100%"
            h="100%"
            maxW={{ base: '90%', md: 'unset' }}
            maxH={{ base: '85%', md: 'unset' }}
          />
          <View
            overflow="hidden"
            maxW={{ lg: '633px' }}
            flex="1"
            borderRadius={{ base: '30px', lg: '50px' }}
            w="100%"
            h="auto"
          >
            <Images.ContactUsLeftImage width="100%" height="auto" />
          </View>
        </View>
        <View
          maxW={{ base: '100%', sm: '600px', lg: '633px' }}
          maxH="314px"
          h={{ lg: '100%', xl: '345px' }}
          flex="1"
          w="100%"
        >
          <VStack
            h="100%"
            bg="general.100"
            // maxW={{ base: '100%', lg: '633px' }}
            py={{ base: '27px', lg: '50px' }}
            px={{ base: '33px', lg: '87px' }}
            borderRadius="50px"
          >
            <Heading size="2xl" fontWeight="normal" lineHeight="70px">
              {t(keys.contactUS.title)}
            </Heading>
            <Text fontSize="lg">{t(keys.contactUS.subtitle)}</Text>
            <Button
              onPress={onMailPress}
              leftIcon={<Images.MailLogoGreen width="40px" height="40px" />}
              mt={{ base: '20px', md: '45px' }}
              mb={{ base: '40px', md: '0' }}
              maxW="300px"
              w={{ base: '100%', lg: '313px' }}
              variant="outline"
            >
              {buttonText}
            </Button>
          </VStack>
        </View>
      </Flex>
    </Container>
  )
}

export default ConctactUsSection
