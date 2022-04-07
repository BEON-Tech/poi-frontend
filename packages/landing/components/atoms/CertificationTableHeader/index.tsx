import { HStack, Text } from 'native-base'
import { useTranslation } from 'next-export-i18n'

import keys from '@i18n/keys'
import { useBreakpoint } from '@hooks'

const CertificationCell = () => {
  const { isDesktop } = useBreakpoint()
  const { t } = useTranslation()
  return (
    <HStack
      w="100%"
      py="29px"
      alignItems="center"
      justifyContent="flex-start"
      px="36px"
      borderBottomWidth="1px"
      borderBottomColor="general.100"
    >
      <HStack flex="1" alignItems="center" justifyContent="flex-start">
        <Text>{t(keys.publicAudit.certificationsTable.applicantColumn)}</Text>
      </HStack>
      <HStack flex="1" alignItems="center" justifyContent="flex-start">
        <Text>{t(keys.publicAudit.certificationsTable.dateColumn)}</Text>
      </HStack>
      {isDesktop && (
        <HStack flex="1" alignItems="center" justifyContent="flex-start">
          <Text>{t(keys.publicAudit.certificationsTable.detailsColumn)}</Text>
        </HStack>
      )}
    </HStack>
  )
}

export default CertificationCell
