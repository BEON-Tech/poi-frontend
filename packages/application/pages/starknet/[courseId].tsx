import type { NextPage } from 'next'
import { VStack } from 'native-base'
import { SecondaryLayout } from '@components/templates'
import { NavigationBar, StarknetTable } from '@components/organisms'
import { StarknetFooter, StarknetHeader } from '@components/molecules'

const items = [
  ['0xc0ffee254729296a45a3885639AC7E10F9d54979'],
  ['0xc0ffee254729296a45a3885639AC7E10F9d54979'],
  ['0xc0ffee254729296a45a3885639AC7E10F9d54979'],
  ['0xc0ffee254729296a45a3885639AC7E10F9d54979'],
  ['0xc0ffee254729296a45a3885639AC7E10F9d54979'],
  ['0xc0ffee254729296a45a3885639AC7E10F9d54979'],
  ['0xc0ffee254729296a45a3885639AC7E10F9d54979'],
  ['0xc0ffee254729296a45a3885639AC7E10F9d54979'],
  ['0xc0ffee254729296a45a3885639AC7E10F9d54979'],
  ['0xc0ffee254729296a45a3885639AC7E10F9d54979'],
  ['0xc0ffee254729296a45a3885639AC7E10F9d54979'],
  ['0xc0ffee254729296a45a3885639AC7E10F9d54979'],
  ['0xc0ffee254729296a45a3885639AC7E10F9d54979'],
  ['0xc0ffee254729296a45a3885639AC7E10F9d54979'],
  ['0xc0ffee254729296a45a3885639AC7E10F9d54979'],
]

const StarknetAudit: NextPage = () => {
  const onClick = (itemIndex: number) => {
    const item = items[itemIndex]
    // eslint-disable-next-line no-console
    console.log(item[0])
  }

  return (
    <SecondaryLayout>
      <NavigationBar />
      <VStack w="100%" mt={{ base: 8, lg: 12 }}>
        <StarknetHeader title="POI Courses" />
        <StarknetTable
          header="15 students"
          tableHeaders={['Wallet']}
          items={items}
          onClick={onClick}
        />
        <StarknetFooter />
      </VStack>
    </SecondaryLayout>
  )
}

export default StarknetAudit
