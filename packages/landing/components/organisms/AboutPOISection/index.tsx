import {
  Text,
  View,
  VStack,
  Heading,
  HStack,
  Button,
  MinusIcon,
  AddIcon,
} from 'native-base'
import { useTranslation } from 'next-export-i18n'

import keys from '@i18n/keys'
import { ABOUT_POI_SECTION } from '@constants'
import { Images } from '@components/atoms'
import { AboutPOIOutlinedImage } from '@components/molecules'
import { Container } from '@components/templates'
import { useBreakpoint } from '@hooks'
import { useState } from 'react'

const AboutPOISectionDesktop = () => {
  const { t } = useTranslation()
  return (
    <View
      nativeID={ABOUT_POI_SECTION}
      zIndex="2"
      bg="general.50"
      mt="-70px"
      pt="101px"
      borderRadius="70px"
    >
      <Container>
        <HStack justifyContent="center" alignItems="flex-start">
          <AboutPOIOutlinedImage />
          <VStack flex="1" pt="51px" px={{ lg: '100px', xl: 'unset' }}>
            <Text fontSize="4xl" lineHeight="76.5px">
              {t(keys.aboutPOI.upperTittle)}
            </Text>
            <Heading size="6xl" fontWeight="semibold" lineHeight="109.28px">
              {t(keys.aboutPOI.tittle)}
            </Heading>
            <HStack mt="37px" maxW={{ xl: '601px' }} w="100%">
              <View w="60px">
                <Images.Polygon height="35px" width="35px" />
              </View>
              <View w="100%">
                <Text>{t(keys.aboutPOI.descriptionFirstParagraph)}</Text>
                <Text mt="5">
                  {t(keys.aboutPOI.descriptionSecondParagraph)}
                </Text>
                <Text mt="5">{t(keys.aboutPOI.descriptionThirdParagraph)}</Text>
                <Text mt="5">
                  {t(keys.aboutPOI.descriptionFourthParagraph)}
                </Text>
              </View>
            </HStack>
            <View
              mt="40px"
              justifySelf="flex-end"
              alignSelf="flex-end"
              maxW="606px"
              maxH="266px"
              borderTopLeftRadius="315px"
              borderTopRightRadius="315px"
              borderBottomRadius="20px"
              overflow="hidden"
            >
              <Images.PersonBottomAboutPOISection width="100%" height="100%" />
            </View>
          </VStack>
        </HStack>
      </Container>
    </View>
  )
}

const AboutPOISectionMobile = () => {
  const [showMore, setShowMore] = useState(false)
  const { t } = useTranslation()

  const onShowHide = () => {
    setShowMore(!showMore)
  }
  return (
    <HStack
      nativeID={ABOUT_POI_SECTION}
      bg="general.50"
      justifyContent="center"
      alignItems="flex-start"
      mt="-30px"
      borderRadius="30px"
      px="20px"
    >
      <VStack flex="1" pt="51px">
        <Text fontSize="4xl" lineHeight="41px">
          {t(keys.aboutPOI.upperTittle)}
        </Text>
        <Heading size="6xl" fontWeight="semibold" lineHeight="54px">
          {t(keys.aboutPOI.tittle)}
        </Heading>
        <View mt="55px" mb="10px">
          <Images.Polygon height="35px" width="35px" />
        </View>
        <Text>{t(keys.aboutPOI.descriptionFirstParagraph)}</Text>
        {showMore && (
          <>
            <Text mt="5">{t(keys.aboutPOI.descriptionSecondParagraph)}</Text>
            <Text mt="5">{t(keys.aboutPOI.descriptionThirdParagraph)}</Text>
            <Text mt="5">{t(keys.aboutPOI.descriptionFourthParagraph)}</Text>
          </>
        )}
        <Button
          alignSelf="flex-start"
          mt="42px"
          mb="30px"
          w="auto"
          onPress={onShowHide}
          variant="link"
          leftIcon={
            showMore ? (
              <MinusIcon color="primary.700" size="3" mt="-10px" />
            ) : (
              <AddIcon size="3" color="primary.700" />
            )
          }
        >
          {showMore ? t(keys.aboutPOI.hide) : t(keys.aboutPOI.show)}
        </Button>
        <AboutPOIOutlinedImage center />
      </VStack>
    </HStack>
  )
}

const AboutPOISection = () => {
  const { isDesktop } = useBreakpoint()
  return isDesktop ? <AboutPOISectionDesktop /> : <AboutPOISectionMobile />
}

export default AboutPOISection
