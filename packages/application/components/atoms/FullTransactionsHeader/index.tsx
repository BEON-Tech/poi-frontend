import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'
import { FullGenericHeader } from '..'

const FullTransactionsHeader = () => {
  const { t } = useTranslation()

  const columns = [
    t(keys.publicAudit.donationsTable.amountColumn),
    t(keys.publicAudit.donationsTable.typeColumn),
    t(keys.publicAudit.donationsTable.addressColumn),
    t(keys.publicAudit.donationsTable.dateColumn),
    t(keys.publicAudit.donationsTable.etherscanColumn),
  ]

  return <FullGenericHeader columns={columns} />
}

export default FullTransactionsHeader
