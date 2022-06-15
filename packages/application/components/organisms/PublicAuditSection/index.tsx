import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'
import { Text, VStack, Flex } from 'native-base'
import { CertificationTable, DonationTable } from '@components/molecules'
import { API } from '@services'
import { BulletedTitle } from '@components/atoms'
import { Container } from '@components/templates'

const PublicAuditSection = () => {
  const { t } = useTranslation()

  useEffect(() => {}, [])

  return (
    <Container
      mt={{ base: '0', lg: '50px' }}
      mb={{ base: '80px', lg: '200px' }}
    >
      <VStack px={{ base: '20px', lg: '80px' }}>
        <BulletedTitle
          polygonName="homePolygon1"
          title={t(keys.publicAudit.title)}
        />
        <Flex mt="43px" flexDirection={{ base: 'column', lg: 'row' }} w="100%">
          <VStack
            flex={{ base: 'unset', lg: '1' }}
            pr={{ base: '0', lg: '20px' }}
            maxW={{ base: '100%', lg: '50%' }}
            justifyContent="flex-start"
          >
            <Text mb="28px" alignSelf="flex-start" fontSize={18}>
              {t(keys.publicAudit.certificationsTable.title)}
            </Text>
            <CertificationTable loadData={API.getLatestCertifications as any} />
          </VStack>
          <VStack
            flex={{ base: 'unset', lg: '1' }}
            pl={{ base: 0, lg: '36px' }}
            pt={{ base: '36px', lg: 0 }}
            maxW={{ base: '100%', lg: '50%' }}
            justifyContent="flex-start"
          >
            <Text mb="28px" alignSelf="flex-start" fontSize={18}>
              {t(keys.publicAudit.donationsTable.title)}
            </Text>
            <DonationTable loadData={API.getLatestDonations as any} />
          </VStack>
        </Flex>
      </VStack>
    </Container>
  )
}

export default PublicAuditSection
