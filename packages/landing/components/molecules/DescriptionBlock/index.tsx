import { HStack, VStack, Text } from 'native-base'
import { useTranslation } from 'next-export-i18n'

import keys from '@i18n/keys'
import { Images } from '@components/atoms'

const items = [
  {
    Image: () => <Images.BannerDescriptionItem1 width="99px" height="93px" />,
    textKey: keys.banner.descriptionItem1,
    key: 'firstDescriptionItem',
  },
  {
    Image: () => <Images.BannerDescriptionItem2 width="92px" height="84px" />,
    textKey: keys.banner.descriptionItem2,
    key: 'secondDescriptionItem',
  },
  {
    Image: () => <Images.BannerDescriptionItem3 width="93px" height="93px" />,
    textKey: keys.banner.descriptionItem3,
    key: 'thirdDescriptionItem',
  },
]

const DescriptionBlock = () => {
  const { t } = useTranslation()

  return (
    <HStack
      w="100%"
      h="499px"
      borderTopRadius="70px"
      marginTop="-70px"
      bg="general.50"
      justifyContent="space-between"
      alignItems="center"
      px="150px"
    >
      {items.map(({ Image, textKey, key }) => (
        <VStack
          justifyContent="center"
          alignItems="center"
          key={key}
          flex="1"
          maxW="292px"
        >
          <Image />
          <Text mt="40px" textAlign="center" maxW="292px">
            {t(textKey)}
          </Text>
        </VStack>
      ))}
    </HStack>
  )
}

export default DescriptionBlock
