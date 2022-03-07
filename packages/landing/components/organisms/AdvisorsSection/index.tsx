import { Element } from 'react-scroll'
import { useTranslation } from 'next-export-i18n'
import {
  VStack,
  Heading,
  Button,
  ChevronDownIcon,
  View,
  FlatList,
} from 'native-base'

import keys from '@i18n/keys'
import { OUR_TEAM_SECTION } from '@constants'
import { AdvisorCard } from '@components/molecules'

import { LIST_ITEMS } from './helpers'

interface IAdvisorsSectionProps {
  onHideAdvisors: () => void
}

const AdvisorsSection = ({ onHideAdvisors }: IAdvisorsSectionProps) => {
  const { t } = useTranslation()

  return (
    <VStack alignItems="center">
      <Element name={OUR_TEAM_SECTION} />
      <View mb="83px">
        <Button
          variant="link"
          rightIcon={<ChevronDownIcon />}
          onPress={onHideAdvisors}
        >
          {t(keys.advisors.hideAdvisors)}
        </Button>
      </View>
      <Heading mb="73px" lineHeight="76.5px" size="4xl" fontWeight="semibold">
        {t(keys.advisors.title)}
      </Heading>
      <FlatList
        data={LIST_ITEMS}
        numColumns={5}
        renderItem={(item) => <AdvisorCard item={item.item} />}
        keyExtractor={(item) => item.name}
      />
    </VStack>
  )
}

export default AdvisorsSection
