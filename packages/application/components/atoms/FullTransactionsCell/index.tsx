import { Box, Button, HStack, Text } from 'native-base'
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

  const formatDate = () => new Date(transaction.createdAt).toLocaleDateString()

  const openBlockchainExplorer = () => {
    window.open(transaction.transactionUrl, '_blank')
  }

  return (
    <HStack
      w="full"
      py={8}
      borderBottomColor="general.200"
      borderBottomWidth={0.5}
      justifyContent="flex"
    >
      <Text flex={1} color="general.900" fontWeight="bold">
        {formatAmount()}
      </Text>
      <Text flex={1} color="general.900">
        {t(keys.transactions[transaction.type])}
      </Text>
      <Box flex={1} color="general.900">
        <Text w="80%" isTruncated>
          {transaction.recipientAddress || '-'}
        </Text>
      </Box>
      <Text flex={1}>{formatDate()}</Text>
      <Button
        flex={1}
        variant="link"
        p={0}
        justifyContent="flex-start"
        _text={{ fontSize: 16 }}
        onPress={openBlockchainExplorer}
      >
        {t(keys.publicAudit.donationsTable.openBlockchainExplorer)}
      </Button>
    </HStack>
  )
}

export default FullTransactionsCell
