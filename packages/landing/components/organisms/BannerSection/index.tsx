/* eslint-disable jsx-a11y/iframe-has-title */
import { VStack, ZStack, View, Flex, HStack } from 'native-base'
import { useTranslation } from 'next-export-i18n'

import keys from '@i18n/keys'
import { BANNER_SECTION } from '@constants'
import { Images, ContentBubble } from '@components/atoms'
import { useBreakpoint } from '@hooks'

const BannerSectionDesktop = () => {
  const { t } = useTranslation()

  return (
    <ZStack
      alignItems="center"
      height="600px"
      nativeID={BANNER_SECTION}
      overflow="hidden"
    >
      <View width="100%" overflow="hidden">
        <View>
          <Images.Banner objectFit="cover" width="100%" height="auto" />
        </View>
      </View>
      <HStack w="100%">
        <HStack flex={1} alignSelf="center" justifyContent="center" mt="20px">
          <View maxW="100%" maxWidth="853px">
            <iframe
              width="853"
              height="480"
              src="https://www.youtube.com/embed/V4oRObpgiMU"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </View>
        </HStack>

        <Flex
          h="100%"
          alignSelf={{ lg: 'center', xl: 'flex-end' }}
          mt={{ lg: '30px', xl: '30px' }}
          mr={{ xl: '40px' }}
          flexDir={{ lg: 'row', xl: 'column' }}
        >
          <ContentBubble
            text={t(keys.banner.bubble1)}
            mb={{ xl: '20px' }}
            mr={{ lg: '20px', xl: 0 }}
          />
          <ContentBubble text={t(keys.banner.bubble2)} />
        </Flex>
      </HStack>
    </ZStack>
  )
}

const BannerSectionMobile = () => {
  const { t } = useTranslation()

  return (
    <ZStack
      alignItems="center"
      height="780px"
      nativeID={BANNER_SECTION}
      overflow="hidden"
    >
      <View width="100%" overflow="hidden">
        <View left="-700px" top="-0px">
          <Images.Banner objectFit="cover" width="2088px" height="1392px" />
        </View>
      </View>
      <VStack w="100%" alignItems="center">
        <View maxW="100%" maxWidth="320px" mt="40px">
          <iframe
            width="320"
            height="180"
            src="https://www.youtube.com/embed/V4oRObpgiMU"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </View>
        <ContentBubble text={t(keys.banner.bubble1)} mb="20px" mt="20px" />
        <ContentBubble text={t(keys.banner.bubble2)} />
      </VStack>
    </ZStack>
  )
}

const BannerSection = () => {
  const { isDesktop } = useBreakpoint()
  return isDesktop ? <BannerSectionDesktop /> : <BannerSectionMobile />
}

export default BannerSection
