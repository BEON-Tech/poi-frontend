import { useEffect, useState } from 'react'
import { FlatList, HStack, Spinner, VStack } from 'native-base'
import { FullTransactionsCell, FullTransactionsHeader } from '@components/atoms'
import { getTransactions } from '@services/API'
import { Transaction } from '@constants/types'
import { FullTablePaginator } from '..'

const PAGE_SIZE = 5

interface IFullTransactionsTable {
  setTotalResults: (total: number) => void
}

interface IFullTransactionsTableBody {
  data: Array<Transaction>
}

const FullTransactionsTableBody = ({ data }: IFullTransactionsTableBody) => (
  <FlatList
    w="full"
    data={data}
    renderItem={({ item }) => <FullTransactionsCell transaction={item} />}
    keyExtractor={(item) => item.id.toString()}
  />
)

const FullTransactionsTable = ({ setTotalResults }: IFullTransactionsTable) => {
  const [data, setData] = useState<any>([])
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const loadTransactions = async (pageNumber: number) => {
    setLoading(true)
    const response = await getTransactions(PAGE_SIZE, pageNumber)
    setData(response.data)
    setTotalResults(response.total)
    setTotalPages(response.totalPages)
    setLoading(false)
  }

  const setPageNumber = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    loadTransactions(pageNumber)
  }

  useEffect(() => {
    ;(async () => {
      loadTransactions(currentPage)
    })()
  }, [])

  return (
    <VStack w="full" mt={{ base: 0, lg: 4 }}>
      <FullTransactionsHeader />
      {loading ? (
        <HStack w="full" h={{ base: '940px', lg: '525px' }}>
          <Spinner color="primary.600" />
        </HStack>
      ) : (
        <FullTransactionsTableBody data={data} />
      )}
      <FullTablePaginator
        totalPages={totalPages}
        currentPage={currentPage}
        setPageNumber={setPageNumber}
      />
    </VStack>
  )
}

export default FullTransactionsTable
