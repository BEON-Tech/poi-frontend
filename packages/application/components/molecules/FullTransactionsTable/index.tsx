import { VStack } from 'native-base'
import { FullTransactionsHeader } from '@components/atoms'

const FullTransactionsTable = () => {
  console.log('hello')
  return (
    <VStack w="full" mt={4}>
      <FullTransactionsHeader />
    </VStack>
  )
}

export default FullTransactionsTable
