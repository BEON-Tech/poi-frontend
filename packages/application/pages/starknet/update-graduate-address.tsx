import type { NextPage } from 'next'
import { Button, FormControl, Input, Text, VStack } from 'native-base'
import { SecondaryLayout } from '@components/templates'
import { StarknetNavigationBar } from '@components/organisms'
import { StarknetFooter, StarknetHeader } from '@components/molecules'
import { useState } from 'react'
import { MAX_WIDTH } from '@constants'
import {
  getStudentWallet,
  updateStudentWallet,
} from '@services/starknet/poi.service'
import Swal from 'sweetalert2'
import { useRouter } from 'next/router'
import { isAddress } from '@ethersproject/address'

const StarknetAudit: NextPage = () => {
  const { push } = useRouter()

  const [editionNumber, setEditionNumber] = useState('')
  const [walletIndex, setWalletIndex] = useState('')
  const [address, setAddress] = useState('')
  const [addressSet, setAddressSet] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [showBackButton, setShowBackButton] = useState(false)

  const updateWalletOnStarknet = async () => {
    if (isLoading) {
      return
    }

    if (isAddress(address)) {
      setShowBackButton(false)
      setIsLoading(true)

      const transaction = await updateStudentWallet(
        Number(editionNumber),
        Number(walletIndex),
        address || ''
      )

      setIsLoading(false)
      setShowBackButton(true)
      showTransactionSuccess(transaction.transaction_hash)
    } else {
      showInvalidAddress()
    }
  }

  const validForm = editionNumber.length > 0 && walletIndex.length > 0

  const filterOnlyNumbers = (value: string) => value.replace(/\D/g, '')

  const updateEditionNumber = (event: any) => {
    setEditionNumber(filterOnlyNumbers(event.target.value))
  }

  const updateWalletIndex = (event: any) => {
    setWalletIndex(filterOnlyNumbers(event.target.value))
  }

  const updateGraduateAddress = (event: any) => {
    setAddress(event.target.value)
  }

  const fetchStudentWallet = async () => {
    if (editionNumber.length > 0 && walletIndex.length > 0) {
      const editionNumberNumber = Number(editionNumber)
      const walletIndexNumber = Number(walletIndex)
      if (
        !Number.isNaN(editionNumberNumber) &&
        !Number.isNaN(walletIndexNumber)
      ) {
        const fetchedWallet = await getStudentWallet(
          editionNumberNumber,
          walletIndexNumber
        )
        setAddress(fetchedWallet)
        setAddressSet(true)
      }
    }
  }

  const cancelUpdateAddress = () => {
    if (!isLoading) {
      setEditionNumber('')
      setWalletIndex('')
      setAddress('')
      setAddressSet(false)
    }
  }

  const goBackToMainPage = () => {
    push('/starknet')
  }

  const showInvalidAddress = () => {
    Swal.fire({
      title: 'Error',
      icon: 'error',
      text: 'The wallet address you entered is invalid.',
    })
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
      <StarknetHeader title="Update Graduate Address" />
      <VStack w="100%" mt={{ base: 8, lg: 12 }}>
        <VStack>
          <VStack
            w="640px"
            maxW={MAX_WIDTH}
            mt="6%"
            mb="40%"
            pl={{ base: 6, lg: 8 }}
            pr={{ base: 6, lg: 8 }}
            alignItems={{ base: 'flex-start', lg: 'center' }}
            justifyContent={{ base: 'initial', lg: 'space-between' }}
            space={{ base: 20, lg: 0 }}
          >
            {addressSet ? (
              <FormControl width="82%" alignItems="center">
                <Text
                  w="full"
                  fontSize="xl"
                  textAlign="start"
                  mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
                >
                  Graduate address:
                </Text>
                <Input
                  type="number"
                  placeholder="Graduate address"
                  value={address}
                  borderWidth={1}
                  borderRadius={8}
                  onChange={updateGraduateAddress}
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
                  placeholder="Edition number"
                  value={editionNumber}
                  borderWidth={1}
                  borderRadius={8}
                  onChange={updateEditionNumber}
                  mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
                  h={10}
                  bg="white"
                  overflowY="hidden"
                  fontSize="xl"
                  w="480px"
                />
                <Input
                  type="number"
                  placeholder="Graduate address index"
                  value={walletIndex}
                  borderWidth={1}
                  borderRadius={8}
                  onChange={updateWalletIndex}
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
                  onPress={fetchStudentWallet}
                  alignSelf="center"
                  disabled={!validForm}
                >
                  Fetch address
                </Button>
              </>
            )}
            {addressSet && (
              <>
                <Button
                  mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
                  px={10}
                  py={7}
                  _text={{ fontSize: 20 }}
                  onPress={updateWalletOnStarknet}
                  alignSelf="center"
                  disabled={address.length === 0}
                >
                  {isLoading ? 'Loading...' : 'Update address'}
                </Button>
                <Button
                  mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
                  px={10}
                  py={7}
                  _text={{ fontSize: 20 }}
                  onPress={cancelUpdateAddress}
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
