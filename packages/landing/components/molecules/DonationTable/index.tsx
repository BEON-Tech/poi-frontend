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
import Config from '@config'

const AMOUNT_ITEMS = 3

export interface IDonationTableProps {
  loadData: (page: number, amount: number) => Promise<DonationData>
}

interface IDonationTableBareProps {
  data: DonationData['data']
}

const DonationTableBare = ({ data }: IDonationTableBareProps) => {
  const { isDesktop } = useBreakpoint()
  const { t } = useTranslation()

  const seeAll = () => {
    const url = `${Config.appURL}/publicaudit?section=transactions`
    window.open(url, '_blank')
  }

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
      renderItem={DonationTableCell}
      ListHeaderComponent={DonationTableHeader}
      seeAllAction={seeAll}
    />
  )
}

const DonationTable = ({ loadData }: IDonationTableProps) => {
  const { t } = useTranslation()
  const [data, setData] = useState<any>([])

  useEffect(() => {
    ;(async () => {
      const newData = await loadData(0, AMOUNT_ITEMS)
      setData(
        newData.data.map((item) => ({
          ...item,
          detailsLabel: t(keys.publicAudit.moreDetails),
        }))
      )
    })()
  }, [])

  return <DonationTableBare data={data} />
}

export default DonationTable
