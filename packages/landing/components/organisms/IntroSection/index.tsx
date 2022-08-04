import {
  Button,
  Heading,
  HStack,
  Text,
  VStack,
  View,
  Tooltip,
} from 'native-base'
import { useTranslation } from 'next-export-i18n'
import keys from '@i18n/keys'
import { INTRO_SECTION } from '@constants'
import { IntroSectionImages } from '@components/molecules'
import { Images } from '@components/atoms'
import { useBreakpoint } from '@hooks'
import { Container } from '@components/templates'
import Config from '@config'

const DonateButton = ({ title, ...props }: any) => {
  const openAppDonate = () => {
    const url = `${Config.appURL}/donate`
    window.open(url, '_blank')
  }

  return (
    <Button
      variant="solid"
      h="60px"
      alignSelf="center"
      {...props}
      onPress={openAppDonate}
    >
      {title}
    </Button>
  )
}

const IntroSectionDesktop = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <HStack pb="140px" mt="60px" nativeID={INTRO_SECTION}>
        <VStack ml="80px" maxW="640px" flex="1">
          <Heading size="7xl" fontWeight="light" lineHeight="110px">
            {t(keys.introSection.title)}
          </Heading>
          <Text mt="16">
            <Text>{t(keys.introSection.subTitle.firstSection.first)}</Text>
            <Text bold>
              {t(keys.introSection.subTitle.firstSection.second)}
            </Text>
            <Text>{t(keys.introSection.subTitle.firstSection.third)}</Text>
          </Text>
          <Text mt="5" mb="16">
            <Text>{t(keys.introSection.subTitle.secondSection.first)}</Text>
            {t(keys.introSection.subTitle.secondSection.secondTooltip).trim()
              .length > 0 ? (
              <Tooltip
                label={t(
                  keys.introSection.subTitle.secondSection.secondTooltip
                )}
              >
                <Text bold>
                  {t(keys.introSection.subTitle.secondSection.second)}
                </Text>
              </Tooltip>
            ) : (
              <Text bold>
                {t(keys.introSection.subTitle.secondSection.second)}
              </Text>
            )}
            <Text>{t(keys.introSection.subTitle.secondSection.third)}</Text>
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
  const { isMobile } = useBreakpoint()

  const imageProps = isMobile
    ? {
        width: '600px',
        height: '800px',
      }
    : {
        width: '1000px',
        height: '1300px',
      }

  return (
    <VStack zIndex="-1" nativeID={INTRO_SECTION}>
      <View
        width="100%"
        height="100%"
        maxH="620px"
        mt="-120px"
        overflow="hidden"
      >
        <View
          width="auto"
          h="1200px"
          position="relative"
          top={{ base: '-150px', sm: '-500px' }}
          left={{ base: '-100px', sm: '-10px' }}
        >
          <Images.PeopleCenterIntroSection {...imageProps} />
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
          <Text>{t(keys.introSection.subTitle.firstSection.first)}</Text>
          <Text bold>{t(keys.introSection.subTitle.firstSection.second)}</Text>
          <Text>{t(keys.introSection.subTitle.firstSection.third)}</Text>
        </Text>
        <Text mt="5" letterSpacing="-0.27%">
          <Text>{t(keys.introSection.subTitle.secondSection.first)}</Text>
          {t(keys.introSection.subTitle.secondSection.secondTooltip).trim()
            .length > 0 ? (
            <Tooltip
              label={t(keys.introSection.subTitle.secondSection.secondTooltip)}
            >
              <Text bold>
                {t(keys.introSection.subTitle.secondSection.second)}
              </Text>
            </Tooltip>
          ) : (
            <Text bold>
              {t(keys.introSection.subTitle.secondSection.second)}
            </Text>
          )}
          <Text>{t(keys.introSection.subTitle.secondSection.third)}</Text>
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
