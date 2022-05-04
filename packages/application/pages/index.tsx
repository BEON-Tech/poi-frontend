import { Text } from 'native-base'
import type { NextPage } from 'next'

import { BaseLayout } from '@components/templates'

const Home: NextPage = () => (
  <BaseLayout
    title="#ProofOfIntegrity"
    subTitle="A descentralized protocol to certify who is in need of Universal Basic Income"
  >
    <Text textAlign="center" flex={1} fontSize="lg">
      A project to support Proof of Humanity initiative
    </Text>
  </BaseLayout>
)

export default Home
