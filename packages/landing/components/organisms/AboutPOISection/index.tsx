import { Element } from 'react-scroll'
import { Text, View, VStack, Heading, HStack } from 'native-base'
import { useTranslation } from 'next-export-i18n'

import keys from '@i18n/keys'
import { ABOUT_POI_SECTION } from '@constants'
import { Images } from '@components/atoms'

const AboutPOISection = () => {
  const { t } = useTranslation()
  return (
    <HStack justifyContent="center" alignItems="flex-start" pt="72px">
        <Element name={ABOUT_POI_SECTION} />
        <HStack flex="1" position="relative" pl="80px">
          <View
            position="absolute"
            w="520px"
            h="649px"
            borderTopRadius="315px"
            borderBottomRadius="50px"
            ml="104px"
            borderWidth="1px"
            borderColor="#F2EAE3"
          />
          <View
            pt="72px"
            width="557px"
            height="788px"
            borderTopRadius="315px"
            borderBottomRadius="50px"
            overflow="hidden"
          >
            <Images.PersonLeftAboutPOISection width="557px" height="788px" />
          </View>
        </HStack>
        <VStack flex="1" pt="51px">
          <Text fontSize="4xl" lineHeight="76.5px">
            {t(keys.aboutPOI.upperTittle)}
          </Text>
          <Heading size="6xl" fontWeight="semibold" lineHeight="109.28px">
            {t(keys.aboutPOI.tittle)}
          </Heading>
          <View pl="60px" mt="37px" w="601px">
            <Text>{t(keys.aboutPOI.descriptionFirstParagraph)}</Text>
            <Text mt="5">{t(keys.aboutPOI.descriptionSecondParagraph)}</Text>
            <Text mt="5">{t(keys.aboutPOI.descriptionThirdParagraph)}</Text>
          </View>
          <View
            mt="40px"
            justifySelf="flex-end"
            alignSelf="flex-end"
            width="606px"
            height="266px"
            borderTopLeftRadius="315px"
            borderTopRightRadius="315px"
            borderBottomRadius="20px"
            overflow="hidden"
          >
            <Images.PersonBottomAboutPOISection width="606px" height="266px" />
          </View>
        </VStack>
      </HStack>
  )
}
export default AboutPOISection
