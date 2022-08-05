import React from 'react'

import { useTranslation } from 'next-export-i18n'
import { VStack, HStack, View, Button, Text, Tooltip } from 'native-base'

import keys from '@i18n/keys'
import { ASSISTANCE_PROGRAM_SECTION } from '@constants'
import { Images } from '@components/atoms'
import { Container } from '@components/templates'
import { useBreakpoint } from '@hooks'
import { IHStackProps } from 'native-base/lib/typescript/components/primitives/Stack/HStack'
import Config from '@config'

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
]

const DonateButton = ({ title, ...props }: any) => {
  const openApp = () => {
    window.open(`${Config.appURL}/donate`, '_blank')
  }

  return (
    <Button
      flex="3"
      minW="200px"
      maxW="250px"
      w="100%"
      h="60px"
      alignSelf="center"
      {...props}
      onPress={openApp}
    >
      {title}
    </Button>
  )
}

const AssistanceProgramSectionDesktop = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <VStack px="80px" pt="147px" nativeID={ASSISTANCE_PROGRAM_SECTION}>
        <VStack alignSelf="center">
          <Images.AprendoCriptoLogo width="758px" height="100px" />
          <HStack
            justifyContent="flex-end"
            alignItems="center"
            top="-15px"
            space={4}
          >
            <Text bold mb="4px">
              {t(keys.assistanceProgram.title)}
            </Text>
            <Images.LogoPOIColors width="206px" height="50px" />
            <Text bold mb="4px" ml="-10px" mr="10px">
              {t(keys.assistanceProgram.title2)}
            </Text>
          </HStack>
        </VStack>
        <HStack mt="60px" justifyContent="space-between">
          <VStack flex="1" mr="20px">
            <VStack
              maxH="auto"
              maxW="643px"
              borderWidth="1px"
              borderColor="general.100"
              borderRadius="52px"
              p="41px"
            >
              <Text fontSize="xl">
                {t(keys.assistanceProgram.firstBox.subtitle)}
              </Text>
              <Text fontSize="lg" lineHeight="40px" mt="30px">
                <Text>
                  {t(keys.assistanceProgram.firstBox.firstParagraph.first)}
                </Text>
                <Text bold>
                  {t(keys.assistanceProgram.firstBox.firstParagraph.second)}
                </Text>
                <Text>
                  {t(keys.assistanceProgram.firstBox.firstParagraph.third)}
                </Text>
                <Text bold>
                  {t(keys.assistanceProgram.firstBox.firstParagraph.fourth)}
                </Text>
              </Text>
              <Text fontSize="lg" lineHeight="40px" mt="30px">
                <Text>
                  {t(keys.assistanceProgram.firstBox.secondParagraph.first)}
                </Text>
                <Text bold>
                  {t(keys.assistanceProgram.firstBox.secondParagraph.second)}
                </Text>
                <Text>
                  {t(keys.assistanceProgram.firstBox.secondParagraph.third)}
                </Text>
              </Text>
              <Text fontSize="lg" lineHeight="40px" mt="30px">
                <Text>
                  {t(keys.assistanceProgram.firstBox.thirdParagraph.first)}
                </Text>
                <Text bold>
                  {t(keys.assistanceProgram.firstBox.thirdParagraph.second)}
                </Text>
                <Tooltip
                  label={t(
                    keys.assistanceProgram.firstBox.thirdParagraph.tooltip
                  )}
                >
                  <Text bold>
                    {t(keys.assistanceProgram.firstBox.thirdParagraph.third)}
                  </Text>
                </Tooltip>
                <Text>
                  {t(keys.assistanceProgram.firstBox.thirdParagraph.fourth)}
                </Text>
              </Text>
            </VStack>
          </VStack>
          <VStack flex="1" justifyContent="flex-start">
            <VStack
              borderColor="general.100"
              borderRadius="20px"
              borderWidth="1px"
              py="32px"
              px="24px"
              maxW="600px"
              maxH="500px"
              bg="general.50"
            >
              <Text fontSize="xl" lineHeight="40px" mb="15px">
                {t(keys.assistanceProgram.aimBox.title)}
              </Text>
              {aimBoxItems.map(({ Image, text, ...props }) => (
                <HStack
                  justifyContent="flex-start"
                  alignItems="center"
                  mt="15px"
                  key={`assistance-program-${text}`}
                  w="60%"
                  {...props}
                >
                  <View>
                    <Image />
                  </View>
                  <Text ml="15px" fontSize="md">
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
              right="-50px"
              top={{ lg: '100px', xl: '100px' }}
              zIndex={1}
            >
              <Images.AssistanceProgramMap width="100%" height="100%" />
            </VStack>
            <VStack
              borderColor="general.100"
              borderRadius="20px"
              borderWidth="1px"
              py="32px"
              px="24px"
              maxW="600px"
              maxH="500px"
              bg="general.50"
              mt="20px"
            >
              <Text fontSize="xl" lineHeight="40px">
                {t(keys.assistanceProgram.aimSecondBox.subtitle)}
              </Text>
              <Text fontSize="lg" lineHeight="40px" mt="30px">
                <Text>
                  {t(keys.assistanceProgram.aimSecondBox.paragraph.first)}
                </Text>
                <Text bold>
                  {t(keys.assistanceProgram.aimSecondBox.paragraph.second)}
                </Text>
                <Text>
                  {t(keys.assistanceProgram.aimSecondBox.paragraph.third)}
                </Text>
                <Text bold>
                  {t(keys.assistanceProgram.aimSecondBox.paragraph.fourth)}
                </Text>
                <Text>
                  {t(keys.assistanceProgram.aimSecondBox.paragraph.fifth)}
                </Text>
                <Text bold>
                  {t(keys.assistanceProgram.aimSecondBox.paragraph.sixth)}
                </Text>
              </Text>
            </VStack>
          </VStack>
        </HStack>
        <HStack
          mt="28px"
          w="fit-content"
          h="180px"
          maxH="180px"
          borderRadius="20px"
          bg="general.100"
          px="20px"
          alignItems="center"
          alignSelf="center"
        >
          <Text lineHeight="60px" fontSize={{ lg: '2xl', xl: '3xl' }} mr="40px">
            {t(keys.assistanceProgram.secondBox.title)}
          </Text>
          <DonateButton title={t(keys.assistanceProgram.secondBox.button)} />
        </HStack>
      </VStack>
    </Container>
  )
}

const AssistanceProgramSectionMobile = () => {
  const { t } = useTranslation()

  return (
    <VStack px="20px" pt="147px" nativeID={ASSISTANCE_PROGRAM_SECTION}>
      <VStack alignSelf="center">
        <Images.AprendoCriptoLogo width="300px" />
        <HStack
          justifyContent="flex-end"
          alignItems="center"
          top="-5px"
          space={3}
        >
          <Text fontSize="12px" bold mb="2px">
            {t(keys.assistanceProgram.title)}
          </Text>
          <Images.LogoPOIColors width="140px" />
          <Text fontSize="12px" bold mb="2px" ml="-8px">
            {t(keys.assistanceProgram.title2)}
          </Text>
        </HStack>
      </VStack>
      <VStack
        mt="40px"
        maxH="auto"
        borderWidth="1px"
        borderColor="general.100"
        borderRadius="20px"
        py="36px"
        px="28px"
      >
        <Text fontSize="xl" textAlign="center">
          {t(keys.assistanceProgram.firstBox.subtitle)}
        </Text>
        <Text fontSize="lg" lineHeight="40px" mt="17px">
          <Text>{t(keys.assistanceProgram.firstBox.firstParagraph.first)}</Text>
          <Text bold>
            {t(keys.assistanceProgram.firstBox.firstParagraph.second)}
          </Text>
          <Text>{t(keys.assistanceProgram.firstBox.firstParagraph.third)}</Text>
          <Text bold>
            {t(keys.assistanceProgram.firstBox.firstParagraph.fourth)}
          </Text>
        </Text>
        <Text fontSize="lg" lineHeight="40px" mt="17px">
          <Text>
            {t(keys.assistanceProgram.firstBox.secondParagraph.first)}
          </Text>
          <Text bold>
            {t(keys.assistanceProgram.firstBox.secondParagraph.second)}
          </Text>
          <Text>
            {t(keys.assistanceProgram.firstBox.secondParagraph.third)}
          </Text>
        </Text>
        <Text fontSize="lg" lineHeight="40px" mt="17px">
          <Text>{t(keys.assistanceProgram.firstBox.thirdParagraph.first)}</Text>
          <Text bold>
            {t(keys.assistanceProgram.firstBox.thirdParagraph.second)}
          </Text>
          <Tooltip
            label={t(keys.assistanceProgram.firstBox.thirdParagraph.tooltip)}
          >
            <Text bold>
              {t(keys.assistanceProgram.firstBox.thirdParagraph.third)}
            </Text>
          </Tooltip>
          <Text>
            {t(keys.assistanceProgram.firstBox.thirdParagraph.fourth)}
          </Text>
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
      <VStack
        mt="60px"
        borderColor="general.100"
        borderRadius="20px"
        borderWidth="1px"
        p="34px"
        bg="general.50"
      >
        <Text fontSize="xl" lineHeight="40px" textAlign="center">
          {t(keys.assistanceProgram.aimSecondBox.subtitle)}
        </Text>
        <Text fontSize="lg" lineHeight="40px" mt="30px">
          <Text>{t(keys.assistanceProgram.aimSecondBox.paragraph.first)}</Text>
          <Text bold>
            {t(keys.assistanceProgram.aimSecondBox.paragraph.second)}
          </Text>
          <Text>{t(keys.assistanceProgram.aimSecondBox.paragraph.third)}</Text>
          <Text bold>
            {t(keys.assistanceProgram.aimSecondBox.paragraph.fourth)}
          </Text>
          <Text>{t(keys.assistanceProgram.aimSecondBox.paragraph.fifth)}</Text>
          <Text bold>
            {t(keys.assistanceProgram.aimSecondBox.paragraph.sixth)}
          </Text>
        </Text>
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
