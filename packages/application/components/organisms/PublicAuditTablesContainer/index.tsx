import { useState } from 'react'
import { useRouter } from 'next/router'
import { HStack, Text, VStack } from 'native-base'
import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'
import { FullTransactionsTable } from '@components/molecules'
import { PublicAuditOptionButton } from '@components/atoms'
import { MAX_WIDTH } from '@constants'
import FullCertificationsTable from '@components/molecules/FullCertificationsTable'

const PublicAuditTablesContainer = () => {
  const { t } = useTranslation()
  const router = useRouter()
  
  let defaultOption = 0
  if ('section' in router.query && router.query.section === 'transactions') {
    defaultOption = 1
  }

  const [optionSelected, setOptionSelected] = useState(defaultOption)
  const [countCertifications, setCountCertifications] = useState(0)
  const [countTransactions, setCountTransactions] = useState(0)
  const [countResults, setCountResults] = useState(' - ')

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

  const setTotalResultsCertifications = (totalNumber: number) => {
    setCountCertifications(totalNumber)
    setCountResults(
      `${totalNumber} ${t(
        keys.publicAudit.certificationsTable.shortTitle
      ).toLowerCase()}`
    )
  }

  const setTotalResultsTransactions = (totalNumber: number) => {
    setCountTransactions(totalNumber)
    setCountResults(
      `${totalNumber} ${t(
        keys.publicAudit.donationsTable.shortTitle
      ).toLowerCase()}`
    )
  }

  const onOptionSelected = (id: number) => {
    setOptionSelected(id)
    setCountResults(
      id === 0
        ? `${countCertifications} ${t(
            keys.publicAudit.certificationsTable.shortTitle
          ).toLowerCase()}`
        : `${countTransactions} ${t(
            keys.publicAudit.donationsTable.shortTitle
          ).toLowerCase()}`
    )
  }

  return (
    <VStack w="full" maxW={`${MAX_WIDTH}px`} mt={{ base: 8, lg: 16 }} px={{ base: 0, lg: 8 }}>
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
              key={option.id}
            />
          ))}
        </HStack>
      </HStack>
      <Text alignSelf="flex-start" my={6} ml={{ base: 4, lg: 0 }}>
        {countResults}
      </Text>
      {optionSelected === 0 ? (
        <FullCertificationsTable
          setTotalResults={setTotalResultsCertifications}
        />
      ) : (
        <FullTransactionsTable setTotalResults={setTotalResultsTransactions} />
      )}
    </VStack>
  )
}

export default PublicAuditTablesContainer
