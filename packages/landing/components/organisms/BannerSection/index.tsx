import { Heading, VStack, ZStack, View, Flex } from 'native-base'
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
      <VStack w="100%">
        <View maxW="100%">
          <Heading
            mt="12"
            w="100%"
            maxW="700px"
            justifySelf="center"
            alignSelf="center"
            fontWeight="extrabold"
            size={{ base: '2xl', md: '3xl' }}
            textAlign="center"
            opacity={0}
          >
            {t(keys.banner.title)}
          </Heading>
        </View>

        <Flex
          h="100%"
          alignSelf={{ lg: 'center', xl: 'flex-end' }}
          mt={{ lg: '30px', xl: '-210px' }}
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
      </VStack>
    </ZStack>
  )
}

const BannerSectionMobile = () => {
  const { t } = useTranslation()

  return (
    <ZStack
      alignItems="center"
      height="700px"
      nativeID={BANNER_SECTION}
      overflow="hidden"
    >
      <View width="100%" overflow="hidden">
        <View left="-700px" top="-0px">
          <Images.Banner objectFit="cover" width="2088px" height="1392px" />
        </View>
      </View>
      <VStack w="100%" alignItems="center">
        <Heading
          mt="12"
          w="360px"
          justifySelf="center"
          fontWeight="extrabold"
          size={{ base: '2xl', md: '3xl' }}
          textAlign="center"
          opacity={0}
        >
          {t(keys.banner.title)}
        </Heading>
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
