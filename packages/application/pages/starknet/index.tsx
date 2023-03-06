import type { NextPage } from 'next'
import { VStack } from 'native-base'
import { SecondaryLayout } from '@components/templates'
import { NavigationBar, StarknetTable } from '@components/organisms'
import { StarknetFooter, StarknetHeader } from '@components/molecules'
import { useRouter } from 'next/router'

const items = [
  ['# 01', '20'],
  ['# 02', '17'],
  ['# 03', '23'],
  ['# 04', '19'],
  ['# 05', '15'],
  ['# 06', '25'],
  ['# 07', '21'],
]

const StarknetAudit: NextPage = () => {
  const { push } = useRouter()

  const onClick = (itemIndex: number) => {
    const item = items[itemIndex][0].replace('# ', '')
    push(`/starknet/${item}`)
  }

  return (
    <SecondaryLayout>
      <NavigationBar />
      <VStack w="100%" mt={{ base: 8, lg: 12 }}>
        <StarknetHeader title="POI Courses" />
        <StarknetTable
          header="7 programs"
          tableHeaders={['Program', 'Students']}
          items={items}
          onClick={onClick}
        />
        <StarknetFooter />
      </VStack>
    </SecondaryLayout>
  )
}

export default StarknetAudit
