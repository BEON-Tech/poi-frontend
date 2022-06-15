import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'
import { FullGenericHeader } from '..'

const FullCertificationsHeader = () => {
  const { t } = useTranslation()

  const columns = [
    { flex: 1, title: t(keys.publicAudit.certificationsTable.programColumn) },
    { flex: 1, title: t(keys.publicAudit.certificationsTable.placeColumn) },
    { flex: 1, title: t(keys.publicAudit.certificationsTable.statusColumn) },
    { flex: 1, title: t(keys.publicAudit.certificationsTable.dateColumn) },
    { flex: 1, title: t(keys.publicAudit.certificationsTable.applicantColumn) },
  ]

  return <FullGenericHeader columns={columns} />
}

export default FullCertificationsHeader
