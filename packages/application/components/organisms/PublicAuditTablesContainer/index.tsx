import { useState } from 'react'
import { HStack, Text, VStack } from 'native-base'
import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'
import { FullTransactionsTable } from '@components/molecules'
import { PublicAuditOptionButton } from '@components/atoms'
import { MAX_WIDTH } from '@constants'

const PublicAuditTablesContainer = () => {
  const { t } = useTranslation()
  const [optionSelected, setOptionSelected] = useState(0)
  const [countResults, setCountResults] = useState('345 transactions')

  const options = [
    {
      id: 0,
      title: t(keys.publicAudit.certificationsTable.shortTitle),
    },
    {
      id: 1,
      title: t(keys.publicAudit.donationsTable.shortTitle),
    },
  ]

  const onOptionSelected = (id: number) => {
    setOptionSelected(id)
    // TODO
  }

  return (
    <VStack w="full" maxW={`${MAX_WIDTH}px`} mt={{ base: 8, lg: 16 }}>
      <HStack
        w="full"
        justifyContent="flex-start"
        borderBottomWidth="1px"
        borderBottomColor="general.300"
      >
        <HStack
          w={{ base: 'full', lg: 'container' }}
          top={0.5}
          justifyContent="space-evenly"
        >
          {options.map((option) => (
            <PublicAuditOptionButton
              id={option.id}
              title={option.title}
              isActive={optionSelected === option.id}
              onPress={onOptionSelected}
            />
          ))}
        </HStack>
      </HStack>
      <Text alignSelf="flex-start" my={6} ml={{ base: 4, lg: 0 }}>
        {countResults}
      </Text>
      <FullTransactionsTable />
    </VStack>
  )
}

export default PublicAuditTablesContainer
