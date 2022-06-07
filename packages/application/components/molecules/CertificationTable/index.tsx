import { useMemo, useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'
import { Text } from 'native-base'
import { useBreakpoint } from '@hooks'
import {
  CertificationTableCell,
  CertificationTableHeader,
  GenericTable,
} from '@components/atoms'
import { CertificationData } from '@services/API/types'

const AMOUNT_ITEMS = 3

export interface ICertificationTableProps {
  loadData: (page: number, amount: number) => Promise<CertificationData>
}

interface ICertificationTableBareProps {
  data: CertificationData['data']
  hasMore: boolean
  loading: boolean
}

const CertificationTableBare = ({
  data,
  hasMore,
  loading,
}: ICertificationTableBareProps) => {
  const { isDesktop } = useBreakpoint()
  const { t } = useTranslation()

  const extendedData = useMemo(
    () => data.map((item) => ({ ...item, collapsed: !isDesktop })),
    [data, isDesktop]
  )

  return (
    <GenericTable
      footerTitle={t(keys.publicAudit.certificationsTable.seeMore)}
      data={extendedData}
      hasMore={hasMore}
      loading={loading}
      extraData={{ isCollapsed: isDesktop }}
      renderItem={CertificationTableCell}
      ListHeaderComponent={CertificationTableHeader}
    />
  )
}

const CertificationTable = ({ loadData }: ICertificationTableProps) => {
  const { t } = useTranslation()
  const [data, setData] = useState<any>([])
  const [hasMore, setHasMore] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      const newData = await loadData(0, AMOUNT_ITEMS)
      setData(
        newData.data.map((item) => ({
          ...item,
          detailsLabel: t(keys.publicAudit.moreDetails),
        }))
      )
      setHasMore(newData.hasMore)
      setLoading(false)
    })()
  }, [])

  /* return data.length > 0 ? (
    <CertificationTableBare data={data} hasMore={hasMore} loading={loading} />
  ) : (
    <Text mt={{ lg: '50px' }}>
      <Text color="primary.500">{t(keys.publicAudit.noDataTitle)}</Text>
      <Text>{t(keys.publicAudit.noDataText)}</Text>
      <Text fontWeight="bold">{t(keys.publicAudit.noDataDate)}</Text>
    </Text>
  ) */

  return false ? (
    <CertificationTableBare data={data} hasMore={hasMore} loading={loading} />
  ) : (
    <Text mt={{ lg: '50px' }}>
      <Text color="primary.500">{t(keys.publicAudit.noDataTitle)}</Text>
      <Text>{t(keys.publicAudit.noDataText)}</Text>
      <Text fontWeight="bold">{t(keys.publicAudit.noDataDate)}</Text>
    </Text>
  )
}

export default CertificationTable
