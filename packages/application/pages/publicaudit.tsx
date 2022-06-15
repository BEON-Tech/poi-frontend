import type { NextPage } from 'next'
import { VStack } from 'native-base'
import { SecondaryLayout } from '@components/templates'
import {
  NavigationBar,
  PublicAuditTablesContainer,
} from '@components/organisms'
import { PublicAuditFooter, PublicAuditHeader } from '@components/molecules'

const PublicAudit: NextPage = () => (
  <SecondaryLayout>
    <NavigationBar />
    <VStack w="100%" mt={{ base: 8, lg: 12 }}>
      <PublicAuditHeader />
      <PublicAuditTablesContainer />
      <PublicAuditFooter />
    </VStack>
  </SecondaryLayout>
)

export default PublicAudit
