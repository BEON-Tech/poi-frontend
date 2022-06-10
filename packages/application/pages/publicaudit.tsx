import type { NextPage } from 'next'
import { VStack } from 'native-base'
import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'
import { SecondaryLayout } from '@components/templates'
import {
  NavigationBar,
  PublicAuditTablesContainer,
} from '@components/organisms'
import { BulletedTitle } from '@components/atoms'

const PublicAudit: NextPage = () => {
  const { t } = useTranslation()

  return (
    <SecondaryLayout>
      <NavigationBar />
      <VStack w="100%" mt={{ base: 8, lg: 12 }}>
        <BulletedTitle
          polygonName="homePolygon1"
          title={t(keys.publicAudit.title)}
          showSmall
          alignSelf={{ base: 'flex-start', lg: 'center' }}
          ml={{ base: 6, lg: 0 }}
        />
        <PublicAuditTablesContainer />
      </VStack>
    </SecondaryLayout>
  )
}

export default PublicAudit
