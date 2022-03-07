import { useState } from 'react'
import { Element } from 'react-scroll'
import { useTranslation } from 'next-export-i18n'
import {
  VStack,
  Heading,
  HStack,
  Button,
  ChevronDownIcon,
  View,
  FlatList,
} from 'native-base'

import keys from '@i18n/keys'
import { TagsType } from '@constants/types'
import { OUR_TEAM_SECTION } from '@constants'
import { PersonCard } from '@components/molecules'

import { FILTERS, LIST_ITEMS } from './helpers'

interface IOurTeamSectionsProps {
  onShowAdvisors: () => void
  advisorsShown: boolean
}

const OurTeamSection = ({
  advisorsShown,
  onShowAdvisors,
}: IOurTeamSectionsProps) => {
  const { t } = useTranslation()
  const [data, setData] = useState(LIST_ITEMS)
  const [currentFilter, setCurrentFilter] = useState()

  const filterData = (filter?: TagsType) => {
    if (filter !== currentFilter) {
      if (filter) {
        const filteredList = LIST_ITEMS.filter(
          (item) => item.tags && item.tags.includes(filter)
        )
        setData(filteredList)
      } else {
        setData(LIST_ITEMS)
      }
      setCurrentFilter(filter as any)
    }
  }

  return (
    <VStack pt="217px" alignItems="center">
      <Element name={OUR_TEAM_SECTION} />
      <Heading lineHeight="76.5px" size="4xl" fontWeight="semibold">
        {t(keys.ourTeam.title)}
      </Heading>
      <HStack mt="12px">
        {FILTERS.map(({ label, filterKey }) => (
          <Button variant="link" onPress={() => filterData(filterKey)}>
            {t(label)}
          </Button>
        ))}
      </HStack>
      <FlatList
        data={data}
        numColumns={4}
        renderItem={(item) => <PersonCard item={item.item} />}
        keyExtractor={(item) => item.name}
      />
      {!advisorsShown && (
        <View mt="81px">
          <Button
            bg="general.100"
            rightIcon={<ChevronDownIcon />}
            onPress={onShowAdvisors}
          >
            {t(keys.ourTeam.meetTheAdvisors)}
          </Button>
        </View>
      )}
    </VStack>
  )
}

export default OurTeamSection
