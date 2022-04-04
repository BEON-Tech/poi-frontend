import { useMemo, useState, useEffect } from 'react'
import { useTranslation } from 'next-export-i18n'

import { useBreakpoint } from '@components/providers'
import keys from '@i18n/keys'
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
          detailsLabel: t(keys.publicAudit.certificationsTable.moreDetails),
        }))
      )
      setHasMore(newData.hasMore)
      setLoading(false)
    })()
  }, [])

  return (
    <CertificationTableBare data={data} hasMore={hasMore} loading={loading} />
  )
}

export default CertificationTable
