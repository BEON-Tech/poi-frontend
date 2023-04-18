import type { NextPage } from 'next'
import { VStack } from 'native-base'
import { SecondaryLayout } from '@components/templates'
import { StarknetNavigationBar, StarknetTable } from '@components/organisms'
import { StarknetFooter, StarknetHeader } from '@components/molecules'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getStudentsCountByCourse } from '@services/starknet/poi.service'

const ITEM_DEFAULT_VALUE = 'Loading...'

const StarknetAudit: NextPage = () => {
  const [items, setItems] = useState([
    ['# 01', ITEM_DEFAULT_VALUE],
    ['# 02', ITEM_DEFAULT_VALUE],
    ['# 03', ITEM_DEFAULT_VALUE],
    ['# 04', ITEM_DEFAULT_VALUE],
    ['# 05', ITEM_DEFAULT_VALUE],
    ['# 06', ITEM_DEFAULT_VALUE],
    ['# 07', ITEM_DEFAULT_VALUE],
    ['# 08', ITEM_DEFAULT_VALUE],
    ['# 09', ITEM_DEFAULT_VALUE],
    ['# 10', ITEM_DEFAULT_VALUE],
    ['# 11', ITEM_DEFAULT_VALUE],
    ['# 12', ITEM_DEFAULT_VALUE],
    ['# 13', ITEM_DEFAULT_VALUE],
    ['# 14', ITEM_DEFAULT_VALUE],
    ['# 15', ITEM_DEFAULT_VALUE],
    ['# 16', ITEM_DEFAULT_VALUE],
    ['# 17', ITEM_DEFAULT_VALUE],
    ['# 18', ITEM_DEFAULT_VALUE],
    ['# 19', ITEM_DEFAULT_VALUE],
    ['# 20', ITEM_DEFAULT_VALUE],
    ['# 21', ITEM_DEFAULT_VALUE],
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
        <StarknetHeader title="#aPRENDOcripto editions" />
        <StarknetTable
          header="21 editions"
          tableHeaders={['Edition', 'Graduates']}
          items={items}
          onClick={onClick}
          isLoading={false}
        />
        <StarknetFooter />
      </VStack>
    </SecondaryLayout>
  )
}

export default StarknetAudit
