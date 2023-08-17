import type { NextPage } from 'next'
import { Button, FormControl, Input, Text, VStack } from 'native-base'
import { SecondaryLayout } from '@components/templates'
import { StarknetNavigationBar } from '@components/organisms'
import { StarknetFooter, StarknetHeader } from '@components/molecules'
import { useState } from 'react'
import { MAX_WIDTH } from '@constants'
import {
  Edition,
  getEdition,
  updateEdition,
} from '@services/starknet/poi.service'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'

const VENUE_MAX_CHARACTERS = 48

const StarknetAudit: NextPage = () => {
  const { push } = useRouter()

  const [editionIndex, setEditionIndex] = useState<null | string>(null)
  const [edition, setEdition] = useState<null | Edition>(null)
  const [editionNumber, setEditionNumber] = useState('')
  const [venue, setVenue] = useState('')
  const [photoCID, setPhotoCID] = useState('')
  const [graduatesNumber, setGraduatesNumber] = useState('')
  const [walletsNumber, setWalletsNumber] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showBackButton, setShowBackButton] = useState(false)

  const updateEditionOnStarknet = async () => {
    if (isLoading) {
      return
    }

    setShowBackButton(false)
    setIsLoading(true)

    const transaction = await updateEdition(
      Number(editionIndex),
      Number(editionNumber),
      venue,
      photoCID,
      Number(graduatesNumber),
      Number(walletsNumber)
    )

    setIsLoading(false)
    setShowBackButton(true)
    showTransactionSuccess(transaction.transaction_hash)
  }

  const validForm =
    editionNumber.length > 0 &&
    venue.length > 0 &&
    photoCID.length > 0 &&
    graduatesNumber.length > 0 &&
    walletsNumber.length > 0

  const filterOnlyNumbers = (value: string) => value.replace(/\D/g, '')

  const updateEditionIndex = (event: any) => {
    setEditionIndex(filterOnlyNumbers(event.target.value))
  }

  const updateEditionNumber = (event: any) => {
    setEditionNumber(filterOnlyNumbers(event.target.value))
  }

  const updateVenue = (event: any) => {
    const updatedVenue = event.target.value as string
    setVenue(updatedVenue.substring(0, VENUE_MAX_CHARACTERS))
  }

  const updatePhotoCID = (event: any) => {
    const updatePhotoCIDValue = event.target.value as string
    setPhotoCID(updatePhotoCIDValue)
  }

  const updateGraduatesNumber = (event: any) => {
    setGraduatesNumber(filterOnlyNumbers(event.target.value))
  }

  const updateWalletsNumber = (event: any) => {
    setWalletsNumber(filterOnlyNumbers(event.target.value))
  }

  const fetchEditionAtIndex = async () => {
    if (editionIndex) {
      const editionIndexNumber = Number(editionIndex)
      if (!Number.isNaN(editionIndexNumber)) {
        const fetchedEdition = await getEdition(editionIndexNumber)
        setEditionNumber(
          fetchedEdition.editionNumber
            ? String(fetchedEdition.editionNumber)
            : ''
        )
        setVenue(fetchedEdition.venue)
        setPhotoCID(fetchedEdition.photoCID)
        setGraduatesNumber(
          fetchedEdition.graduatesNumber
            ? String(fetchedEdition.graduatesNumber)
            : ''
        )
        setWalletsNumber(
          fetchedEdition.walletsNumber
            ? String(fetchedEdition.walletsNumber)
            : ''
        )
        setEdition(fetchedEdition)
      }
    }
  }

  const cancelUpdateEdition = () => {
    if (!isLoading) {
      setEditionIndex(null)
      setEdition(null)
    }
  }

  const goBackToMainPage = () => {
    push('/starknet')
  }

  const showTransactionSuccess = (hash: string) => {
    Swal.fire({
      title: 'Success!',
      icon: 'success',
      text: `The transaction has been submitted successfully.\r\nTransaction hash: ${hash}`,
    })
  }

  return (
    <SecondaryLayout>
      <StarknetNavigationBar />
      <StarknetHeader title="Update Edition" />
      <VStack w="100%" mt={{ base: 8, lg: 12 }}>
        <VStack>
          <VStack
            w="640px"
            maxW={MAX_WIDTH}
            mt="6%"
            mb={edition ? '0%' : '60%'}
            pl={{ base: 6, lg: 8 }}
            pr={{ base: 6, lg: 8 }}
            alignItems={{ base: 'flex-start', lg: 'center' }}
            justifyContent={{ base: 'initial', lg: 'space-between' }}
            space={{ base: 20, lg: 0 }}
          >
            {edition ? (
              <FormControl width="82%" alignItems="center">
                <Text
                  w="full"
                  fontSize="xl"
                  textAlign="start"
                  mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
                >
                  Edition number:
                </Text>
                <Input
                  type="number"
                  placeholder="Edition number"
                  value={editionNumber}
                  borderWidth={1}
                  borderRadius={8}
                  onChange={updateEditionNumber}
                  mt={{ base: 2, sm: 3, lg: 3, xl: 3 }}
                  h={10}
                  bg="white"
                  overflowY="hidden"
                  fontSize="xl"
                  w="480px"
                />
                <Text
                  w="full"
                  fontSize="xl"
                  textAlign="start"
                  mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
                >
                  Venue:
                </Text>
                <Input
                  type="number"
                  placeholder="Venue"
                  value={venue}
                  borderWidth={1}
                  borderRadius={8}
                  onChange={updateVenue}
                  mt={{ base: 2, sm: 3, lg: 3, xl: 3 }}
                  h={10}
                  bg="white"
                  overflowY="hidden"
                  fontSize="xl"
                  w="480px"
                />
                <Text
                  w="full"
                  fontSize="xl"
                  textAlign="start"
                  mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
                >
                  Photo CID:
                </Text>
                <Input
                  type="number"
                  placeholder="Photo CID"
                  value={photoCID}
                  borderWidth={1}
                  borderRadius={8}
                  onChange={updatePhotoCID}
                  mt={{ base: 2, sm: 3, lg: 3, xl: 3 }}
                  h={10}
                  bg="white"
                  overflowY="hidden"
                  fontSize="xl"
                  w="480px"
                />
                <Text
                  w="full"
                  fontSize="xl"
                  textAlign="start"
                  mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
                >
                  # Graduates:
                </Text>
                <Input
                  type="number"
                  placeholder="# Graduates"
                  value={graduatesNumber}
                  borderWidth={1}
                  borderRadius={8}
                  onChange={updateGraduatesNumber}
                  mt={{ base: 2, sm: 3, lg: 3, xl: 3 }}
                  h={10}
                  bg="white"
                  overflowY="hidden"
                  fontSize="xl"
                  w="480px"
                />
                <Text
                  w="full"
                  fontSize="xl"
                  textAlign="start"
                  mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
                >
                  # Graduates addresses:
                </Text>
                <Input
                  type="number"
                  placeholder="# Graduates addresses"
                  value={walletsNumber}
                  borderWidth={1}
                  borderRadius={8}
                  onChange={updateWalletsNumber}
                  mt={{ base: 2, sm: 3, lg: 3, xl: 3 }}
                  h={10}
                  bg="white"
                  overflowY="hidden"
                  fontSize="xl"
                  w="480px"
                />
              </FormControl>
            ) : (
              <>
                <Input
                  type="number"
                  placeholder="Edition index"
                  value={editionIndex || ''}
                  borderWidth={1}
                  borderRadius={8}
                  onChange={updateEditionIndex}
                  mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
                  h={10}
                  bg="white"
                  overflowY="hidden"
                  fontSize="xl"
                  w="480px"
                />
                <Button
                  mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
                  px={10}
                  py={7}
                  _text={{ fontSize: 20 }}
                  onPress={fetchEditionAtIndex}
                  alignSelf="center"
                >
                  Fetch edition
                </Button>
              </>
            )}
            {edition && (
              <>
                <Button
                  mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
                  px={10}
                  py={7}
                  _text={{ fontSize: 20 }}
                  onPress={updateEditionOnStarknet}
                  alignSelf="center"
                  disabled={!validForm}
                >
                  {isLoading ? 'Loading...' : 'Update edition'}
                </Button>
                <Button
                  mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
                  px={10}
                  py={7}
                  _text={{ fontSize: 20 }}
                  onPress={cancelUpdateEdition}
                  alignSelf="center"
                >
                  Cancel
                </Button>
              </>
            )}
            {showBackButton && (
              <Button
                mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
                px={10}
                py={7}
                _text={{ fontSize: 20 }}
                alignSelf="center"
                onPress={goBackToMainPage}
              >
                Back to Main Page
              </Button>
            )}
          </VStack>
        </VStack>
        <StarknetFooter
          buttonText="Back to Main Page"
          buttonAction={goBackToMainPage}
        />
      </VStack>
    </SecondaryLayout>
  )
}

export default StarknetAudit
