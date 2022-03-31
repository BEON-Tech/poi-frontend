import { Element } from 'react-scroll'
import { useTranslation } from 'next-export-i18n'
import { VStack, HStack, Heading, View, Button, Text } from 'native-base'

import { ASSISTANCE_PROGRAM_SECTION } from '@constants'
import { Images } from '@components/atoms'
import keys from '../../../i18n/keys'

const aimBoxItems = [
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
  },
]
const AssistanceProgramSection = () => {
  const { t } = useTranslation()

  return (
    <VStack px="80px" pt="147px">
      <Element name={ASSISTANCE_PROGRAM_SECTION} />
      <Heading textAlign="center" size="4xl" fontWeight="semibold">
        {t(keys.assistanceProgram.title)}
      </Heading>
      <HStack mt="60px">
        <VStack flex="1">
          <HStack
            maxH="243px"
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
            maxW="643px"
            borderRadius="20px"
            bg="general.100"
            pl="70px"
            pr="52px"
            alignItems="center"
          >
            <Text w="240px" mr="30px" lineHeight="60px" fontSize="4xl">
              {t(keys.assistanceProgram.secondBox.title)}
            </Text>
            <Button maxW="250px" h="60px">
              {t(keys.assistanceProgram.secondBox.button)}
            </Button>
          </HStack>
        </VStack>
        <VStack flex="1" justifyContent="flex-start">
          <VStack
            borderWidth="1px"
            p="25px"
            w="405px"
            h="405px"
            borderRadius="20px"
            borderColor="general.100"
          >
            <Images.AssistanceProgramMap width="355px" height="355px" />
          </VStack>
          <VStack
            position="absolute"
            left="291px"
            top="171px"
            borderColor="general.100"
            borderRadius="20px"
            borderWidth="1px"
            py="32px"
            px="24px"
            bg="general.50"
          >
            <Text fontSize="xl" lineHeight="40px">
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
      </HStack>
    </VStack>
  )
}

export default AssistanceProgramSection
