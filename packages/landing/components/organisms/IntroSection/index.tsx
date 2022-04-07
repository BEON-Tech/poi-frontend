import { Button, Heading, HStack, Text, VStack, View } from 'native-base'
import { useTranslation } from 'next-export-i18n'

import keys from '@i18n/keys'
import { INTRO_SECTION } from '@constants'
import { IntroSectionImages } from '@components/molecules'
import { Images, ComingSoon } from '@components/atoms'
import { useBreakpoint } from '@hooks'
import { Container } from '@components/templates'
import Image from 'next/image'
import { ImageSources } from '@components/atoms/Images'

const DonateButton = ({ title, ...props }: any) => (
  <ComingSoon
    Component={(comingSoonProps) => (
      <Button
        variant="solid"
        h="60px"
        alignSelf="center"
        {...props}
        {...comingSoonProps}
      >
        {title}
      </Button>
    )}
  />
)

const IntroSectionDesktop = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <HStack pb="140px" mt="60px" nativeID={INTRO_SECTION}>
        <VStack ml="80px" maxW="640px" flex="1">
          <Heading size="7xl" fontWeight="light" lineHeight="110px">
            {t(keys.introSection.title)}
          </Heading>
          <Text mt="16">{t(keys.introSection.subTitle.firstSection)}</Text>
          <Text mt="5" mb="16">
            {t(keys.introSection.subTitle.secondSection)}
          </Text>
          <DonateButton title={t(keys.introSection.donateCTA)} />
        </VStack>
        <IntroSectionImages />
      </HStack>
    </Container>
  )
}

const IntroSectionMobile = () => {
  const { t } = useTranslation()

  return (
    <VStack zIndex="-1" nativeID={INTRO_SECTION}>
      <View width="auto" height="auto" maxH="750px" mt="-70px">
        <View width="100%" h="1200px" position="relative" top="-400px">
          <Image
            src={ImageSources.PeopleCenterIntroSection}
            width="100%"
            height="100%"
            layout="fill"
            objectFit="cover"
          />
        </View>
      </View>
      <VStack bg="general.50" p="20px" borderRadius="30px" mt="-44px">
        <Heading mb="31px" size="6xl" fontWeight="normal" lineHeight="60px">
          {t(keys.introSection.title)}
        </Heading>
        <DonateButton title={t(keys.introSection.donateCTA)} />
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
