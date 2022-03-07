import { Element } from 'react-scroll'
import { useTranslation } from 'next-export-i18n'
import { useEffect } from 'react'
import { Heading, HStack, Text, VStack } from 'native-base'

import keys from '@i18n/keys'
import { PUBLIC_AUDIT_SECTION } from '@constants'
import { CertificationTable, DonationTable } from '@components/molecules'
import { API } from '@services'

const PublicAuditSection = () => {
  const { t } = useTranslation()

  useEffect(() => {}, [])

  return (
    <VStack px="80px" pt="150px">
      <Element name={PUBLIC_AUDIT_SECTION} />
      <Heading textAlign="center" size="4xl" fontWeight="semibold">
        {t(keys.publicAudit.title)}
      </Heading>
      <HStack mt="43px">
        <VStack flex="1" pr="36px">
          <Text mb="28px">{t(keys.publicAudit.certificationsTable.title)}</Text>
          <CertificationTable loadData={API.getLatestCertifications} />
        </VStack>
        <VStack flex="1" pl="36px">
          <Text mb="28px">{t(keys.publicAudit.donationsTable.title)}</Text>
          <DonationTable loadData={API.getLatestDonations} />
        </VStack>
      </HStack>
    </VStack>
  )
}

export default PublicAuditSection
