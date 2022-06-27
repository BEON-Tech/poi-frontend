import { Box, Button, HStack, Stack, Text, VStack } from 'native-base'
import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'
import { Transaction } from '@constants/types'

interface IFullTransactionsCell {
  transaction: Transaction
}

const FullTransactionsCell = ({ transaction }: IFullTransactionsCell) => {
  const { t } = useTranslation()

  const formatAmount = () => {
    const amountInt = parseInt(transaction.amount, 10)
    if (!Number.isNaN(amountInt)) {
      return `${amountInt / 1000 ** 6} ${transaction.tokenName}`
    }
    return `0 ${transaction.tokenName}`
  }

  const showTransactionDetails = () =>
    transaction.type === 'administrativeExpenses'

  const getTransactionDetails = () => {
    const json = JSON.parse(transaction.description)
    const language = t(keys.language)
    return json[language].description
  }

  const formatDate = () => new Date(transaction.createdAt).toLocaleDateString()

  const openBlockchainExplorer = () => {
    window.open(transaction.transactionUrl, '_blank')
  }

  return (
    <Stack
      w="full"
      px={{ base: 4, lg: 0 }}
      py={{ base: 6, lg: 8 }}
      borderBottomColor="general.200"
      borderBottomWidth={0.5}
      justifyContent="flex"
      alignItems={{ base: 'initial', lg: 'center' }}
      direction={{ base: 'column', lg: 'row' }}
      space={{ base: 2, lg: 0 }}
    >
      <HStack flex={1} alignItems={{ base: 'flex-end', lg: 'center' }}>
        <Text
          flex={1}
          color="general.900"
          fontSize={{ base: 'lg', lg: 'md' }}
          fontWeight="bold"
        >
          {formatAmount()}
        </Text>
        <Text
          display={{ base: 'flex', lg: 'none' }}
          fontSize={{ base: 'sm', lg: 'md' }}
        >
          {formatDate()}
        </Text>
      </HStack>
      <VStack flex={1} alignItems="flex-start">
        <Text color="general.900">
          {t(keys.transactions[transaction.type])}
        </Text>
        {showTransactionDetails() && (
          <Text fontSize=".8rem" color="general.900" marginRight="20px">
            {getTransactionDetails()}
          </Text>
        )}
      </VStack>
      <Box flex={1} color="general.900">
        <Text w={{ base: '60%', lg: '80%' }} isTruncated>
          {transaction.recipientAddress || '-'}
        </Text>
      </Box>
      <Text flex={1} display={{ base: 'none', lg: 'flex' }}>
        {formatDate()}
      </Text>
      <Button
        flex={1}
        variant="link"
        mt={{ base: 2, lg: 0 }}
        p={0}
        justifyContent="flex-start"
        _text={{ fontSize: 16 }}
        onPress={openBlockchainExplorer}
      >
        {t(keys.publicAudit.donationsTable.openBlockchainExplorer)}
      </Button>
    </Stack>
  )
}

export default FullTransactionsCell
