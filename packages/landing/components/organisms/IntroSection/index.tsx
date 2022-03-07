import { Button, Heading, HStack, Text, VStack } from 'native-base'
import { useTranslation } from 'next-export-i18n'
import { Element } from 'react-scroll'

import keys from '@i18n/keys'
import { INTRO_SECTION } from '@constants'
import { IntroSectionImages } from '@components/molecules'

const IntroSection = () => {
  const { t } = useTranslation()

  return (
    <HStack pb="140px">
      <Element name={INTRO_SECTION} />
      <VStack mt="150px" ml="80px" maxW="600px" flex="1">
        <Heading size="7xl" fontWeight="normal" lineHeight="110px">
          {t(keys.introSection.title)}
        </Heading>
        <Text mt="16">{t(keys.introSection.subTitle.firstSection)}</Text>
        <Text mt="5">{t(keys.introSection.subTitle.secondSection)}</Text>
        <Button colorScheme="primary" variant="solid">
          {t(keys.introSection.donateCTA)}
        </Button>
      </VStack>
      <IntroSectionImages />
    </HStack>
  )
}

export default IntroSection
