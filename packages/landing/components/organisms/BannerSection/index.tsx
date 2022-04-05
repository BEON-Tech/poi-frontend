import { Element } from 'react-scroll'
import { Heading, VStack, ZStack, View } from 'native-base'
import { useTranslation } from 'next-export-i18n'

import keys from '@i18n/keys'
import { BANNER_SECTION } from '@constants'
import { Images, ContentBubble } from '@components/atoms'
import { useBreakpoint } from '@hooks'

const BannerSectionDesktop = () => {
  const { t } = useTranslation()

  return (
    <ZStack alignItems="center" height="494px">
      <Element name={BANNER_SECTION} />
      <Images.Banner width="100%" height="494px" />
      <VStack w="100%">
        <View maxW="100%">
          <Heading
            mt="12"
            w="360px"
            justifySelf="center"
            fontWeight="extrabold"
            size={{ base: '2xl', md: '3xl' }}
            textAlign="center"
          >
            {t(keys.banner.title)}
          </Heading>
        </View>

        <VStack
          h="100%"
          alignSelf="flex-end"
          mt="-50px"
          mr={{ lg: '80px', md: '20px' }}
        >
          <ContentBubble text={t(keys.banner.bubble1)} mb="44px" />
          <ContentBubble text={t(keys.banner.bubble2)} />
        </VStack>
      </VStack>
    </ZStack>
  )
}

const BannerSectionMobile = () => {
  const { t } = useTranslation()

  return (
    <ZStack alignItems="center" height="831px">
      <Element name={BANNER_SECTION} />
      <Images.Banner width="auto" height="831px" />
      <VStack w="100%" alignItems="center">
        <Heading
          mt="12"
          w="360px"
          justifySelf="center"
          fontWeight="extrabold"
          size={{ base: '2xl', md: '3xl' }}
          textAlign="center"
        >
          {t(keys.banner.title)}
        </Heading>

        <ContentBubble text={t(keys.banner.bubble1)} mb="44px" mt="70px" />
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
