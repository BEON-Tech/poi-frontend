import type { NextPage } from 'next'
import { VStack } from 'native-base'
import { SecondaryLayout } from '@components/templates'
import { StarknetNavigationBar, StarknetTable } from '@components/organisms'
import { StarknetFooter, StarknetHeader } from '@components/molecules'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getStudentsCountByCourse } from '@services/starknet/poi.service'

const StarknetAudit: NextPage = () => {
  const [items, setItems] = useState([
    ['# 01', '0'],
    ['# 02', '0'],
    ['# 03', '0'],
    ['# 04', '0'],
    ['# 05', '0'],
    ['# 06', '0'],
    ['# 07', '0'],
  ])

  const { push } = useRouter()

  const onClick = (itemIndex: number) => {
    const item = items[itemIndex][0].replace('# ', '')
    push(`/starknet/${item}`)
  }

  useEffect(() => {
    const getNextCourseCount = async (
      remainingItems: string[],
      updatedItems: string[][]
    ) => {
      if (!remainingItems.length) {
        setItems(updatedItems)
        return
      }

      const firstItem = remainingItems.shift()
      const program = firstItem?.replace('# ', '')
      const count = await getStudentsCountByCourse(program || '')
      updatedItems.push([firstItem || '', String(count)])

      getNextCourseCount(remainingItems, updatedItems)
    }

    const handler = async () => {
      const updatedItems: string[][] = []
      const allCourses = items.map((values) => values[0])
      getNextCourseCount(allCourses, updatedItems)
    }

    ;(async () => {
      await handler()
    })()
  }, [])

  return (
    <SecondaryLayout>
      <StarknetNavigationBar />
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
