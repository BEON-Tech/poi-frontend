import { Element } from 'react-scroll'
import { Heading, View, VStack } from 'native-base'
import { useTranslation } from 'next-export-i18n'

import keys from '@i18n/keys'
import { BANNER_SECTION } from '@constants'
import { Images } from '@components/atoms'
import DescriptionBlock from '../../molecules/DescriptionBlock'
import ContentBubble from '../../atoms/ContentBubble'

const AboutPOISection = () => {
  const { t } = useTranslation()

  return (
    <VStack alignItems="center" position="relative">
      <Element name={BANNER_SECTION} />
      <Images.Banner />
      <View position="absolute">
        <Heading
          mt="12"
          w="569px"
          fontWeight="extrabold"
          size="3xl"
          textAlign="center"
        >
          {t(keys.banner.title)}
        </Heading>
      </View>
      <ContentBubble
        text={t(keys.banner.bubble1)}
        right="80px"
        top="70px"
        position="absolute"
      />
      <ContentBubble
        text={t(keys.banner.bubble2)}
        maxW=""
        right="80px"
        top="237px"
        position="absolute"
      />
    </VStack>
  )
}

export default AboutPOISection
