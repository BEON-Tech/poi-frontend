import { Flex, HStack, Heading, VStack, Button, View, Text } from 'native-base'
import { Element } from 'react-scroll'

import { CONTACT_US_SECTION } from '@constants'
import { useTranslation } from 'next-export-i18n'
import keys from '@i18n/keys'
import { Images } from '@components/atoms'

const ConctactUsSection = () => {
  const { t } = useTranslation()

  const buttonText = t(keys.contactUS.button)
  const onMailPress = () => {
    window.location.href = `mailto:${buttonText}`
  }
  return (
    <Flex
      position="relative"
      pb={{ base: '100px', lg: '210px' }}
      pt={{ base: '100px', lg: '170px' }}
      px={{ base: '20px', lg: '80px' }}
      flexDirection={{ base: 'column', sm: 'row' }}
    >
      <Element name={CONTACT_US_SECTION} />
      <HStack flex="1" mb="35px">
        <View
          position="absolute"
          borderWidth="1px"
          borderColor="general.100"
          top="15px"
          left="40px"
          borderRadius={{ base: '30px', lg: '50px' }}
          w={{ base: '90%', lg: '595px' }}
          h={{ base: '100%', lg: '327px' }}
        />
        <View
          mr="50px"
          overflow="hidden"
          borderRadius={{ base: '30px', lg: '50px' }}
          w={{ base: '90%', lg: '595px' }}
          h={{ base: 'auto', lg: '325px' }}
        >
          <Images.ContactUsLeftImage width="100%" height="100%" />
        </View>
      </HStack>
      <VStack
        flex="1"
        bg="general.100"
        height="325px"
        maxW={{ base: '100%', lg: '633px' }}
        width="100%"
        py={{ base: '27px', lg: '50px' }}
        px={{ base: '33px', lg: '87px' }}
        borderRadius="50px"
      >
        <Heading w="480px" size="2xl" fontWeight="normal" lineHeight="70px">
          {t(keys.contactUS.title)}
        </Heading>
        <Text fontSize="lg">{t(keys.contactUS.subtitle)}</Text>
        <Button
          onPress={onMailPress}
          leftIcon={<Images.MailLogoGreen width="40px" height="40px" />}
          mt="45px"
          w={{ base: '100%', lg: '313px' }}
          variant="outline"
        >
          {buttonText}
        </Button>
      </VStack>
    </Flex>
  )
}

export default ConctactUsSection
