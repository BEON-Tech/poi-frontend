import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'
import { FullGenericHeader } from '..'

const FullTransactionsHeader = () => {
  const { t } = useTranslation()

  const columns = [
    { flex: 1, title: t(keys.publicAudit.donationsTable.amountColumn) },
    { flex: 1, title: t(keys.publicAudit.donationsTable.typeColumn) },
    { flex: 1, title: t(keys.publicAudit.donationsTable.addressColumn) },
    { flex: 1, title: t(keys.publicAudit.donationsTable.dateColumn) },
    { flex: 1, title: t(keys.publicAudit.donationsTable.etherscanColumn) },
  ]

  return <FullGenericHeader columns={columns} />
}

export default FullTransactionsHeader
