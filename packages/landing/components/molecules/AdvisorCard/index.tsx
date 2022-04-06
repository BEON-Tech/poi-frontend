import { Text, Flex, View } from 'native-base'

import { IAdvisor } from '@constants/types'
import { useTranslation } from 'next-export-i18n'

interface IAdvisorCardProps {
  item: IAdvisor
}

const AdvisorCard = ({ item }: IAdvisorCardProps) => {
  const { t } = useTranslation()

  const { imagePath, name, role, littleDescription } = item

  return (
    <Flex
      w={{ base: '100%', lg: '222px' }}
      px={{ base: '10px', lg: '25px' }}
      flexDirection={{ base: 'row', lg: 'column' }}
    >
      <View
        flex={{ base: '1', lg: 'unset' }}
        maxW={{ base: '130px', lg: '173px' }}
        maxH={{ base: '130px', lg: '173px' }}
        mr={{ base: '25px', lg: '0' }}
      >
        <img
          width="100%"
          height="100%"
          src={imagePath}
          alt={`${name}'s facial`}
        />
      </View>
      <View flex={{ base: '1.25', lg: 'unset' }} h="auto">
        <Text fontWeight="bold" fontSize="lg">
          {name}
        </Text>
        <Text fontSize="md">{t(role)}</Text>
        <Text fontSize="xs" lineHeight="24px">
          {t(littleDescription)}
        </Text>
      </View>
    </Flex>
  )
}

export default AdvisorCard
