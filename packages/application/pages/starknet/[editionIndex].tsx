import type { NextPage } from 'next'
import { VStack } from 'native-base'
import { SecondaryLayout } from '@components/templates'
import { StarknetNavigationBar, StarknetTable } from '@components/organisms'
import { StarknetFooter, StarknetHeader } from '@components/molecules'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { Edition, getEdition } from '@services/starknet/poi.service'

const StarknetAudit: NextPage = () => {
  const [edition, setEdition] = useState<Edition | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const { query } = useRouter()

  useEffect(() => {
    /* const getCourseStudentsCount = async (courseIdString?: string) => {
      if (!courseIdString) {
        return 0
      }

      const count = await getStudentsCountByCourse(courseIdString)
      setProgramCount(count)
      return count
    }

    const getStudentWalletAtPosition = async (
      courseIdNumber: number,
      listStudents: string[][],
      currentPosition: number,
      maxPosition: number
    ) => {
      if (currentPosition === maxPosition) {
        setWallets(listStudents)
        setIsLoading(false)
        return
      }

      const wallet = await getStudentByCourseAndPosition(
        courseIdNumber,
        currentPosition
      )
      listStudents.push([wallet])

      getStudentWalletAtPosition(
        courseIdNumber,
        listStudents,
        currentPosition + 1,
        maxPosition
      )
    } */

    const handler = async (editionIndex: number) => {
      const selectedEdition = await getEdition(editionIndex)

      setEdition({
        editionNumber: selectedEdition.editionNumber as number,
        venue: selectedEdition.venue as string,
        photoCID: selectedEdition.photoCID as string,
        graduatesNumber: selectedEdition.graduatesNumber as number,
        wallets: [],
      })

      // const initialList: string[][] = []
      // getStudentAtPosition(courseIdNumber, initialList, 0, count)
    }

    ;(async () => {
      const editionIndexString = query.editionIndex as string
      const editionIndex = Number(editionIndexString)
      if (!Number.isNaN(editionIndex)) {
        await handler(editionIndex)
      }
    })()
  }, [query])

  const onWalletClick = () => {
    // do nothing
  }

  return (
    <SecondaryLayout>
      <StarknetNavigationBar />
      <VStack w="100%" mt={{ base: 8, lg: 12 }}>
        <StarknetHeader
          title={
            edition
              ? `POI Graduates - Edition # ${edition.editionNumber} - ${edition.venue}`
              : ''
          }
        />
        <StarknetTable
          header={
            edition ? `${edition.graduatesNumber} graduates` : 'Loading...'
          }
          tableHeaders={['Wallet']}
          items={edition ? [edition.wallets] : []}
          onClick={onWalletClick}
          isLoading={isLoading}
        />
        <StarknetFooter />
      </VStack>
    </SecondaryLayout>
  )
}

export default StarknetAudit
