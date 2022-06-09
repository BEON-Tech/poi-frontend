import { HStack, Text } from 'native-base'
import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'
import { useBreakpoint } from '@hooks'

const DonationTableHeader = () => {
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
        <Text fontSize={18} fontWeight={400}>{t(keys.publicAudit.donationsTable.amountColumn)}</Text>
      </HStack>
      <HStack flex="1" alignItems="center" justifyContent="flex-start">
        <Text fontSize={18} fontWeight={400}>{t(keys.publicAudit.donationsTable.typeColumn)}</Text>
      </HStack>
      {isDesktop && (
        <HStack flex="1" alignItems="center" justifyContent="flex-start">
          <Text fontSize={18} fontWeight={400}>{t(keys.publicAudit.donationsTable.etherscanColumn)}</Text>
        </HStack>
      )}
    </HStack>
  )
}

export default DonationTableHeader
