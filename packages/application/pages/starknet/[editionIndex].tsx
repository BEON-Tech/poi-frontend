import type { NextPage } from 'next'
import { VStack } from 'native-base'
import { StarknetLayout } from '@components/templates'
import { StarknetNavigationBar, StarknetTable } from '@components/organisms'
import { StarknetFooter, StarknetHeader } from '@components/molecules'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import {
  Edition,
  getEdition,
  getStudentWallet,
} from '@services/starknet/poi.service'
import StarknetEditionPhoto from '@components/molecules/StarknetEditionPhoto'

const StarknetAudit: NextPage = () => {
  const [edition, setEdition] = useState<Edition | null>(null)
  const [wallets, setWallets] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const { query, push } = useRouter()

  const goBackToMainPage = () => {
    push('/starknet')
  }

  useEffect(() => {
    const getStudentWalletAtPosition = async (
      editionNumber: number,
      listWallets: string[],
      walletIndex: number,
      walletsCount: number
    ) => {
      if (walletIndex === walletsCount) {
        setWallets(listWallets)
        setIsLoading(false)
        return
      }

      const wallet = await getStudentWallet(editionNumber, walletIndex)

      listWallets.push(wallet as string)

      getStudentWalletAtPosition(
        editionNumber,
        listWallets,
        walletIndex + 1,
        walletsCount
      )
    }

    const handler = async (editionIndex: number) => {
      const selectedEdition = await getEdition(editionIndex)
      setEdition(selectedEdition)

      getStudentWalletAtPosition(
        selectedEdition.editionNumber,
        [],
        0,
        selectedEdition.walletsNumber
      )
    }

    ;(async () => {
      const editionIndexString = query.editionIndex as string
      const editionIndex = Number(editionIndexString)
      if (!Number.isNaN(editionIndex)) {
        await handler(editionIndex)
      }
    })()
  }, [query])

  return (
    <StarknetLayout>
      <StarknetNavigationBar />
      <VStack w="100%" mt={{ base: 8, lg: 12 }}>
        <StarknetHeader
          title={edition ? '#aPRENDOcripto' : ''}
          subtitles={
            edition ? [`Edition #${edition.editionNumber}`, edition.venue] : []
          }
          hidePolygon
        />
        <StarknetEditionPhoto cid={edition?.photoCID} />
        <StarknetTable
          header={
            edition ? `${edition.graduatesNumber} graduates` : 'Loading...'
          }
          tableHeaders={wallets.length > 0 ? ['Graduates addresses'] : []}
          items={wallets.map((wallet) => [wallet])}
          minH="500px"
          isLoading={isLoading}
        />
        <StarknetFooter
          buttonText="Back to Main Page"
          buttonAction={goBackToMainPage}
        />
      </VStack>
    </StarknetLayout>
  )
}

export default StarknetAudit
