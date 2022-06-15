import { useMemo, useState, useEffect } from 'react'
import { useTranslation } from 'next-export-i18n'
import { Text } from 'native-base'
import { useBreakpoint } from '@hooks'
import keys from '@i18n/keys'
import {
  CertificationTableCell,
  CertificationTableHeader,
  GenericTable,
} from '@components/atoms'
import { CertificationData } from '@services/API/types'
import Config from '@config'

const AMOUNT_ITEMS = 3

export interface ICertificationTableProps {
  loadData: (page: number, amount: number) => Promise<CertificationData>
}

interface ICertificationTableBareProps {
  data: CertificationData['data']
}

const CertificationTableBare = ({
  data,
}: ICertificationTableBareProps) => {
  const { isDesktop } = useBreakpoint()
  const { t } = useTranslation()

  const seeAll = () => {
    const url = `${Config.appURL}/publicaudit`
    window.open(url, '_blank')
  }

  const extendedData = useMemo(
    () => data.map((item) => ({ ...item, collapsed: !isDesktop })),
    [data, isDesktop]
  )

  return (
    <GenericTable
      footerTitle={t(keys.publicAudit.certificationsTable.seeMore)}
      data={extendedData}
      extraData={{ isCollapsed: isDesktop }}
      renderItem={CertificationTableCell}
      ListHeaderComponent={CertificationTableHeader}
      seeAllAction={seeAll}
    />
  )
}

const CertificationTable = ({ loadData }: ICertificationTableProps) => {
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

  return data.length > 0 ? (
    <CertificationTableBare data={data} />
  ) : (
    <Text mt={{ lg: '50px' }}>
      <Text color="primary.500">{t(keys.publicAudit.noDataTitle)}</Text>
      <Text>{t(keys.publicAudit.noDataText)}</Text>
      <Text fontWeight="bold">{t(keys.publicAudit.noDataDate)}</Text>
    </Text>
  )
}

export default CertificationTable
