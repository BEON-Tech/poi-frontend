import { Text, VStack, View } from 'native-base'
import NextImage from 'next/image'

import { IAdvisor } from '@constants/types'
import { useTranslation } from 'next-export-i18n'

interface IAdvisorCardProps {
  item: IAdvisor
}

const AdvisorCard = ({ item }: IAdvisorCardProps) => {
  const { t } = useTranslation()

  const { imagePath, name, role, littleDescription } = item

  return (
    <VStack w="222px" mx="25px">
      <View maxW="173px" maxH="173px">
        <NextImage
          width="173px"
          height="173px"
          src={imagePath}
          alt={`${name}'s facial picture`}
        />
      </View>
      <Text fontWeight="bold" fontSize="lg">
        {name}
      </Text>
      <Text fontSize="md">{t(role)}</Text>
      <Text fontSize="xs">{t(littleDescription)}</Text>
    </VStack>
  )
}

export default AdvisorCard
