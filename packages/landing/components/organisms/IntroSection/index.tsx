import { Button, Heading, HStack, Text, VStack, View } from 'native-base'
import { useTranslation } from 'next-export-i18n'
import { Element } from 'react-scroll'

import keys from '@i18n/keys'
import { INTRO_SECTION } from '@constants'
import { IntroSectionImages } from '@components/molecules'
import { Images } from '@components/atoms'
import { useBreakpoint } from '@components/providers'

const IntroSectionDesktop = () => {
  const { t } = useTranslation()

  return (
    <HStack pb="140px">
      <Element name={INTRO_SECTION} />
      <VStack mt="100px" ml="80px" maxW="640px" flex="1">
        <Heading size="7xl" fontWeight="normal" lineHeight="110px">
          {t(keys.introSection.title)}
        </Heading>
        <Text mt="16">{t(keys.introSection.subTitle.firstSection)}</Text>
        <Text mt="5" mb="16">
          {t(keys.introSection.subTitle.secondSection)}
        </Text>
        <Button variant="solid" maxW="250px" w="100%" h="60px">
          {t(keys.introSection.donateCTA)}
        </Button>
      </VStack>
      <IntroSectionImages />
    </HStack>
  )
}

const IntroSectionMobile = () => {
  const { t } = useTranslation()

  return (
    <VStack zIndex="-1">
      <Element name={INTRO_SECTION} />
      <View width="100%" height="auto" mt="-70px">
        <Images.PeopleCenterIntroSection width="100%" height="auto" />
      </View>
      <VStack bg="general.50" p="20px" borderRadius="30px" mt="-44px">
        <Heading mb="31px" size="7xl" fontWeight="normal" lineHeight="60px">
          {t(keys.introSection.title)}
        </Heading>
        <Button variant="solid" maxW="100%" w="100%" h="60px">
          {t(keys.introSection.donateCTA)}
        </Button>
        <View mb="30px" mt="59px">
          <Images.PeopleBottomIntroSection height="210px" width="210px" />
        </View>
        <Text letterSpacing="-0.27%">
          {t(keys.introSection.subTitle.firstSection)}
        </Text>
        <Text mt="5" letterSpacing="-0.27%">
          {t(keys.introSection.subTitle.secondSection)}
        </Text>
        <View mt="59px" mb="71px" alignSelf="center">
          <Images.Logo width="68px" height="68px" />
        </View>
      </VStack>
    </VStack>
  )
}

const IntroSection = () => {
  const { isDesktop } = useBreakpoint()
  return isDesktop ? <IntroSectionDesktop /> : <IntroSectionMobile />
}

export default IntroSection
