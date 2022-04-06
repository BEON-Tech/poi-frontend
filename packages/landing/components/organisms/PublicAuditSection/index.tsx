import { Element } from 'react-scroll'
import { useTranslation } from 'next-export-i18n'
import { useEffect } from 'react'
import { Text, VStack, Flex } from 'native-base'

import keys from '@i18n/keys'
import { PUBLIC_AUDIT_SECTION } from '@constants'
import { CertificationTable, DonationTable } from '@components/molecules'
import { API } from '@services'
import { BulletedTitle } from '@components/atoms'
import { Container } from '@components/templates'
import { useBreakpoint } from '@hooks'

const PublicAuditSection = () => {
  const { isDesktop } = useBreakpoint()
  const { t } = useTranslation()

  useEffect(() => {}, [])

  return (
    <Container>
      <VStack px={{ base: '20px', lg: '80px' }} pt="150px">
        <Element name={PUBLIC_AUDIT_SECTION} />
        <BulletedTitle
          pl="30px"
          separation={isDesktop ? 60 : 30}
          imageName="Polygon"
          title={t(keys.publicAudit.title)}
        />
        <Flex mt="43px" flexDirection={{ base: 'column', lg: 'row' }} w="100%">
          <VStack
            flex="1"
            pr={{ base: '0', lg: '20px' }}
            maxW={{ base: '100%', lg: '50%' }}
          >
            <Text mb="28px">
              {t(keys.publicAudit.certificationsTable.title)}
            </Text>
            <CertificationTable loadData={API.getLatestCertifications as any} />
          </VStack>
          <VStack
            flex="1"
            pl={{ base: 0, lg: '36px' }}
            pt={{ base: '36px', lg: 0 }}
            maxW={{ base: '100%', lg: '50%' }}
          >
            <Text mb="28px">{t(keys.publicAudit.donationsTable.title)}</Text>
            <DonationTable loadData={API.getLatestDonations as any} />
          </VStack>
        </Flex>
      </VStack>
    </Container>
  )
}

export default PublicAuditSection
