import type { NextPage } from 'next'
import { VStack } from 'native-base'
import { StarknetLayout } from '@components/templates'
import { StarknetNavigationBar, StarknetTable } from '@components/organisms'
import { StarknetFooter, StarknetHeader } from '@components/molecules'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { getEdition, getEditionsCount } from '@services/starknet/poi.service'

const StarknetAudit: NextPage = () => {
  const [editions, setEditions] = useState<string[][]>([])
  const [editionsNumber, setEditionsNumber] = useState<number | null>(null)

  const { push } = useRouter()

  const onClick = (itemIndex: number) => {
    push(`/starknet/${itemIndex}`)
  }

  useEffect(() => {
    const getNextEditionGraduates = async (
      editionIndex: number,
      editionsCount: number,
      editionsArray: string[][]
    ) => {
      if (editionIndex === editionsCount) {
        setEditions(editionsArray)
        return
      }

      const edition = await getEdition(editionIndex)

      editionsArray.push([
        `# ${edition.editionNumber}`,
        edition.venue,
        String(edition.graduatesNumber as number),
      ])

      setEditions([...editionsArray])

      await getNextEditionGraduates(
        editionIndex + 1,
        editionsCount,
        editionsArray
      )
    }

    const handler = async () => {
      const editionsCount = await getEditionsCount()
      setEditionsNumber(editionsCount)

      getNextEditionGraduates(0, editionsCount, [])
    }

    ;(async () => {
      await handler()
    })()
  }, [])

  return (
    <StarknetLayout>
      <StarknetNavigationBar />
      <VStack w="100%" mt={{ base: 8, lg: 12 }}>
        <StarknetHeader title="#aPRENDOcripto editions" />
        <StarknetTable
          header={
            editionsNumber != null ? `${editionsNumber} editions` : 'Loading...'
          }
          tableHeaders={['Edition', 'Venue', '# Graduates']}
          items={editions}
          onClick={onClick}
          isLoading={false}
        />
        <StarknetFooter />
      </VStack>
    </StarknetLayout>
  )
}

export default StarknetAudit
