import { useEffect, useState } from 'react'
import { FlatList, HStack, Spinner, VStack } from 'native-base'
import {
  FullCertificationsCell,
  FullCertificationsHeader,
} from '@components/atoms'
import { getCertifications } from '@services/API'
import { FullCertification } from '@constants/types'
import { FullTablePaginator } from '..'

const PAGE_SIZE = 5

interface IFullCertificationsTable {
  setTotalResults: (total: number) => void
}

interface IFullCertificationsTableBody {
  data: Array<FullCertification>
}

const FullCertificationsTableBody = ({
  data,
}: IFullCertificationsTableBody) => (
  <FlatList
    w="full"
    minH={{ base: 0, lg: '315px' }}
    data={data}
    renderItem={({ item }) => <FullCertificationsCell certification={item} />}
    keyExtractor={(item) => item.id.toString()}
  />
)

const FullCertificationsTable = ({
  setTotalResults,
}: IFullCertificationsTable) => {
  const [data, setData] = useState<any>([])
  const [totalPages, setTotalPages] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(true)

  const loadTransactions = async (pageNumber: number) => {
    setLoading(true)
    const response = await getCertifications(PAGE_SIZE, pageNumber)
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
      <FullCertificationsHeader />
      {loading ? (
        <HStack w="full" h={{ base: '940px', lg: '525px' }}>
          <Spinner color="primary.600" />
        </HStack>
      ) : (
        <FullCertificationsTableBody data={data} />
      )}
      <FullTablePaginator
        totalPages={totalPages}
        currentPage={currentPage}
        setPageNumber={setPageNumber}
      />
    </VStack>
  )
}

export default FullCertificationsTable
