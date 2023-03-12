import type { NextPage } from 'next'
import { VStack } from 'native-base'
import { SecondaryLayout } from '@components/templates'
import { StarknetNavigationBar, StarknetTable } from '@components/organisms'
import { StarknetFooter, StarknetHeader } from '@components/molecules'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  getStudentByCourseAndPosition,
  getStudentsCountByCourse,
} from '@services/starknet/poi.service'

const StarknetAudit: NextPage = () => {
  const [programCount, setProgramCount] = useState<number | undefined>(0)
  const [wallets, setWallets] = useState<string[][]>([])
  const [courseId, setCourseId] = useState<string | null>(null)

  const { query } = useRouter()

  const onClick = (itemIndex: number) => {
    const item = wallets[itemIndex]
    // eslint-disable-next-line no-console
    console.log(item[0])
  }

  useEffect(() => {
    const getCourseStudentsCount = async (courseIdString?: string) => {
      if (!courseIdString) {
        return 0
      }

      const count = await getStudentsCountByCourse(courseIdString)
      setProgramCount(count)
      return count
    }

    const getStudentAtPosition = async (
      courseIdNumber: number,
      listStudents: string[][],
      currentPosition: number,
      maxPosition: number
    ) => {
      if (currentPosition === maxPosition) {
        setWallets(listStudents)
        return
      }

      const wallet = await getStudentByCourseAndPosition(
        courseIdNumber,
        currentPosition
      )
      listStudents.push([wallet])

      getStudentAtPosition(
        courseIdNumber,
        listStudents,
        currentPosition + 1,
        maxPosition
      )
    }

    const handler = async (courseIdString?: string) => {
      const count = await getCourseStudentsCount(courseIdString)
      const courseIdNumber = Number(courseIdString)
      if (!count || !courseIdNumber) {
        return
      }

      const initialList: string[][] = []
      getStudentAtPosition(courseIdNumber, initialList, 0, count)
    }

    ;(async () => {
      const courseIdString = query.courseId as string
      setCourseId(courseIdString)
      await handler(courseIdString)
    })()
  }, [query])

  return (
    <SecondaryLayout>
      <StarknetNavigationBar />
      <VStack w="100%" mt={{ base: 8, lg: 12 }}>
        <StarknetHeader title={`POI Students - Course #${courseId}`} />
        <StarknetTable
          header={`${programCount} students`}
          tableHeaders={['Wallet']}
          items={wallets}
          onClick={onClick}
        />
        <StarknetFooter />
      </VStack>
    </SecondaryLayout>
  )
}

export default StarknetAudit
