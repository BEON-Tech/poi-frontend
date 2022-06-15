import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'
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
  loading: boolean
}

const DonationTableBare = ({
  data,
  loading,
}: IDonationTableBareProps) => {
  const { isDesktop } = useBreakpoint()
  const { t } = useTranslation()
  const router = useRouter()

  const extendedData = useMemo(
    () =>
      data.map((item) => ({
        ...item,
        type: t(item.type),
        collapsed: !isDesktop,
      })),
    [data, isDesktop]
  )

  const seeMoreAction = () => {
    router.push('/publicaudit?section=transactions')
  }

  return (
    <GenericTable
      footerTitle={t(keys.publicAudit.donationsTable.seeMore)}
      seeMoreAction={seeMoreAction}
      data={extendedData}
      loading={loading}
      renderItem={DonationTableCell}
      ListHeaderComponent={DonationTableHeader}
    />
  )
}

const DonationTable = ({ loadData }: IDonationTableProps) => {
  const { t } = useTranslation()
  const [data, setData] = useState<any>([])
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
      setLoading(false)
    })()
  }, [])

  return <DonationTableBare data={data} loading={loading} />
}

export default DonationTable
