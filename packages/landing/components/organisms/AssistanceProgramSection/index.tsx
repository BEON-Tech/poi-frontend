import React from 'react'
import { Element } from 'react-scroll'
import { useTranslation } from 'next-export-i18n'
import { VStack, HStack, View, Button, Text, Heading } from 'native-base'

import keys from '@i18n/keys'
import { ASSISTANCE_PROGRAM_SECTION } from '@constants'
import { BulletedTitle, Images } from '@components/atoms'
import { Container } from '@components/templates'
import { useBreakpoint } from '@hooks'
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack'

interface IAimBoxItem extends IHStackProps {
  Image: React.FC
  text: string
}

const aimBoxItems: IAimBoxItem[] = [
  {
    Image: () => (
      <Images.AssistanceProgramAimFirstIcon width="24px" height="24px" />
    ),
    text: keys.assistanceProgram.aimBox.firstItem,
  },
  {
    Image: () => (
      <Images.AssistanceProgramAimSecondIcon width="24px" height="24px" />
    ),
    text: keys.assistanceProgram.aimBox.secondItem,
  },
  {
    Image: () => (
      <Images.AssistanceProgramAimThirdIcon width="24px" height="24px" />
    ),
    text: keys.assistanceProgram.aimBox.thirdItem,
    pr: '150',
    alignItems: 'flex-start',
  },
]

const AssistanceProgramSectionDesktop = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <VStack px="80px" pt="147px">
        <Element name={ASSISTANCE_PROGRAM_SECTION} />
        <Heading textAlign="center" size="4xl" fontWeight="semibold">
          {t(keys.assistanceProgram.title)}
        </Heading>
        <HStack mt="60px" justifyContent="space-between">
          <VStack flex="1" mr="20px">
            <HStack
              maxH="auto"
              maxW="643px"
              borderWidth="1px"
              borderColor="general.100"
              borderRadius="52px"
              p="41px"
            >
              <View mr="31px">
                <Images.UBILogo width="57.68px" height="59.03px" />
              </View>
              <Text fontSize="lg" lineHeight="40px">
                <Text>{t(keys.assistanceProgram.firstBox.firstSentence)}</Text>
                <Text fontWeight="bold">
                  {t(keys.assistanceProgram.firstBox.secondSentenceBold)}
                </Text>
                <Text>{t(keys.assistanceProgram.firstBox.thirdSentence)}</Text>
              </Text>
            </HStack>
            <HStack
              mt="28px"
              h="180px"
              maxH="180px"
              maxW="auto"
              borderRadius="20px"
              bg="general.100"
              px="20px"
              alignItems="center"
            >
              <Text flex="1" lineHeight="60px" fontSize="3xl">
                {t(keys.assistanceProgram.secondBox.title)}
              </Text>
              <Button
                flex="3"
                minW="200px"
                maxW="250px"
                w="100%"
                h="60px"
                alignSelf="center"
              >
                {t(keys.assistanceProgram.secondBox.button)}
              </Button>
            </HStack>
          </VStack>
          <VStack flex="1" justifyContent="flex-start">
            <VStack
              borderColor="general.100"
              borderRadius="20px"
              borderWidth="1px"
              py="32px"
              px="24px"
              maxW="405px"
              maxH="405px"
              bg="general.50"
            >
              <Text fontSize="xl" lineHeight="40px">
                {t(keys.assistanceProgram.aimBox.title)}
              </Text>
              {aimBoxItems.map(({ Image, text, ...props }) => (
                <HStack
                  justifyContent="flex-start"
                  alignItems="center"
                  mt="23px"
                  key={`assistance-program-${text}`}
                  {...props}
                >
                  <View>
                    <Image />
                  </View>
                  <Text ml="26px" fontSize="xs">
                    {t(text)}
                  </Text>
                </HStack>
              ))}
            </VStack>
            <VStack
              borderRadius="20px"
              bg="general.100"
              p="21px"
              w={{ lg: '225px', xl: '270px' }}
              h={{ lg: '225px', xl: '270px' }}
              position="absolute"
              left="255px"
              top="185px"
            >
              <Images.AssistanceProgramMap width="100%" height="100%" />
            </VStack>
          </VStack>
        </HStack>
      </VStack>
    </Container>
  )
}

const AssistanceProgramSectionMobile = () => {
  const { t } = useTranslation()

  return (
    <VStack px="20px" pt="147px">
      <Element name={ASSISTANCE_PROGRAM_SECTION} />
      <View pr="80px">
        <BulletedTitle
          hideBullet
          imageName="Pentagon"
          title={t(keys.assistanceProgram.title)}
        />
      </View>
      <VStack
        mt="40px"
        maxH="auto"
        borderWidth="1px"
        borderColor="general.100"
        borderRadius="20px"
        py="36px"
        px="28px"
      >
        <Images.UBILogo width="57.68px" height="59.03px" />
        <Text mt="17px" fontSize="lg" lineHeight="40px">
          <Text>{t(keys.assistanceProgram.firstBox.firstSentence)}</Text>
          <Text fontWeight="bold">
            {t(keys.assistanceProgram.firstBox.secondSentenceBold)}
          </Text>
          <Text>{t(keys.assistanceProgram.firstBox.thirdSentence)}</Text>
        </Text>
      </VStack>
      <VStack
        mt="60px"
        borderColor="general.100"
        borderRadius="20px"
        borderWidth="1px"
        p="34px"
        bg="general.50"
      >
        <Text fontSize="xl" lineHeight="40px" textAlign="center">
          {t(keys.assistanceProgram.aimBox.title)}
        </Text>
        {aimBoxItems.map(({ Image, text }) => (
          <HStack
            justifyContent="flex-start"
            alignItems="center"
            mt="23px"
            key={`assistance-program-${text}`}
          >
            <View>
              <Image />
            </View>
            <Text ml="26px" fontSize="xs">
              {t(text)}
            </Text>
          </HStack>
        ))}
      </VStack>
    </VStack>
  )
}

const AssistanceProgramSection = () => {
  const { isDesktop } = useBreakpoint()
  return isDesktop ? (
    <AssistanceProgramSectionDesktop />
  ) : (
    <AssistanceProgramSectionMobile />
  )
}

export default AssistanceProgramSection
