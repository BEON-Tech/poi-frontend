import { Flex, VStack, Text } from 'native-base'
import type { NextPage } from 'next'
import Link from 'next/link'

import { DollarSignIcon, HandShakeIcon } from '../components/atoms/Icons'
import ActionCard from '../components/molecules/ActionCard'

import BaseLayout from '../components/templates/BaseLayout'

const Home: NextPage = () => {
  const onRedirectToDonate = () => {}
  const onRedirectToNeedUBI = () => {}

  return (
    <BaseLayout
      title="#ProofOfIntegrity"
      subTitle="A descentralized protocol to certify who is in need of Universal Basic Income"
      withConnect
    >
      <VStack flex={1} space={2}>
        <Flex
          alignItems="center"
          justifyContent="center"
          flexDirection={{ sm: 'column', md: 'row' }}
          flex={3}
        >
          <ActionCard.IconActionCard
            onPress={onRedirectToNeedUBI}
            title="I Need $UBI"
            Icon={DollarSignIcon}
            color="primary.700"
            isDisabled
            mr={{ base: 0, md: 300 }}
            mb={{ base: 10, md: 0 }}
          />
          <Link href="/donate">
            <ActionCard.IconActionCard
              onPress={onRedirectToDonate}
              title="I Can Help"
              Icon={HandShakeIcon}
              color="secondary.900"
            />
          </Link>
        </Flex>
        <Text textAlign="center" flex={1} fontSize="lg">
          A project to support Proof of Humanity initiative
        </Text>
      </VStack>
    </BaseLayout>
  )
}

export default Home
