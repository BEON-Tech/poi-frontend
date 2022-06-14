import { ChevronLeftIcon, ChevronRightIcon, HStack, Text } from 'native-base'
import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'
import {
  FullTablePageButton,
  FullTablePaginatorButton,
} from '@components/atoms'

interface IFullTablePageNumberContainer {
  totalPages: number
  currentPage: number
  onPageSelected: (page: number) => void
}

interface IFullTablePaginator {
  totalPages: number
  currentPage: number
  setPageNumber: (pageNumber: number) => void
}

const FullTablePageNumberContainer = ({
  totalPages,
  currentPage,
  onPageSelected,
}: IFullTablePageNumberContainer) => {
  const pagesToDraw = totalPages > 3 ? 3 : totalPages
  let start = 0

  if (currentPage === 1) {
    start = 1
  } else if (currentPage === totalPages) {
    start = totalPages - pagesToDraw + 1
  } else {
    start = currentPage - 1
  }

  const end = start + pagesToDraw - 1
  const arrayNumbers = [...Array(end - start + 1).keys()].map((x) => x + start)

  return (
    <HStack flex="auto" space={2}>
      <Text
        fontSize="sm"
        color="general.300"
        opacity={arrayNumbers.includes(1) ? 0 : 1}
      >
        ...
      </Text>
      {arrayNumbers.map((pageNumber) => (
        <FullTablePageButton
          pageNumber={pageNumber}
          isActive={pageNumber === currentPage}
          onPageSelected={onPageSelected}
          key={pageNumber}
        />
      ))}
      <Text
        fontSize="sm"
        color="general.300"
        opacity={arrayNumbers.includes(totalPages) ? 0 : 1}
      >
        ...
      </Text>
    </HStack>
  )
}

const FullTablePaginator = ({ totalPages, currentPage, setPageNumber }: IFullTablePaginator) => {
  const { t } = useTranslation()

  const isFirstPage = () => currentPage === 1
  const thereIsPreviousPage = () => currentPage > 1
  const isLastPage = () => currentPage === totalPages
  const thereIsNextPage = () => currentPage < totalPages

  return (
    <HStack
      w={{ base: 'full', lg: 'auto' }}
      px={4}
      space={2}
      mt={{ base: 8, lg: 16 }}
      mb={40}
    >
      {totalPages > 0 && (
        <>
          <FullTablePaginatorButton
            text={t(keys.publicAudit.first)}
            disabled={isFirstPage()}
            onPress={() => setPageNumber(1)}
          />
          <FullTablePaginatorButton
            icon={<ChevronLeftIcon />}
            disabled={!thereIsPreviousPage()}
            onPress={() => setPageNumber(currentPage - 1)}
          />
          <FullTablePageNumberContainer
            currentPage={currentPage}
            totalPages={totalPages}
            onPageSelected={setPageNumber}
          />
          <FullTablePaginatorButton
            icon={<ChevronRightIcon />}
            disabled={!thereIsNextPage()}
            onPress={() => setPageNumber(currentPage + 1)}
          />
          <FullTablePaginatorButton
            text={t(keys.publicAudit.last)}
            disabled={isLastPage()}
            onPress={() => setPageNumber(totalPages)}
          />
        </>
      )}
    </HStack>
  )
}

export default FullTablePaginator
