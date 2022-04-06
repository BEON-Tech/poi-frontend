import { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'next-export-i18n'

import keys from '@i18n/keys'
import {
  DonationTableCell,
  DonationTableHeader,
  GenericTable,
} from '@components/atoms'
import type { DonationData } from '@services/API/types'
import { useBreakpoint } from '@hooks'

const AMOUNT_ITEMS = 3

export interface IDonationTableProps {
  loadData: (page: number, amount: number) => Promise<DonationData>
}

interface IDonationTableBareProps {
  data: DonationData['data']
  hasMore: boolean
  loading: boolean
}

const DonationTableBare = ({
  data,
  hasMore,
  loading,
}: IDonationTableBareProps) => {
  const { isDesktop } = useBreakpoint()
  const { t } = useTranslation()

  const extendedData = useMemo(
    () =>
      data.map((item) => ({
        ...item,
        type: t(item.type),
        collapsed: !isDesktop,
      })),
    [data, isDesktop]
  )

  return (
    <GenericTable
      footerTitle={t(keys.publicAudit.donationsTable.seeMore)}
      data={extendedData}
      hasMore={hasMore}
      loading={loading}
      renderItem={DonationTableCell}
      ListHeaderComponent={DonationTableHeader}
    />
  )
}

const DonationTable = ({ loadData }: IDonationTableProps) => {
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
          detailsLabel: t(keys.publicAudit.donationsTable.moreDetails),
        }))
      )
      setHasMore(newData.hasMore)
      setLoading(false)
    })()
  }, [])

  return <DonationTableBare data={data} hasMore={hasMore} loading={loading} />
}

export default DonationTable
