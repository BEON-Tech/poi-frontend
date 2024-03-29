import type { NextPage } from 'next'
import {
  Button,
  FormControl,
  HStack,
  Input,
  Text,
  VStack,
  ZStack,
} from 'native-base'
import { StarknetLayout } from '@components/templates'
import { StarknetNavigationBar } from '@components/organisms'
import { StarknetFooter, StarknetHeader } from '@components/molecules'
import { useRef, useState } from 'react'
import { MAX_WIDTH } from '@constants'
import { TagsInput } from 'react-tag-input-component'
import {
  filterRepeatedWallets,
  parseValidWallets,
} from '@services/starknet/wallet.service'
import {
  web3GetFilePath,
  web3UploadFile,
} from '@services/starknet/ipfs.service'
import { addEdition } from '@services/starknet/poi.service'
import Swal, { SweetAlertResult } from 'sweetalert2'
import { useRouter } from 'next/router'

const VENUE_MAX_CHARACTERS = 48

interface IInputFile {
  placeholder: string
  fileSelectedCallback?: (file: File) => void
}

const InputFile = ({ placeholder, fileSelectedCallback }: IInputFile) => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [fileName, setFileName] = useState('')

  const selectFile = () => {
    fileInputRef.current?.click()
  }

  const onFileSelected = (event: any) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0]
      if ('name' in file) {
        const selectedFileName = file.name as string
        setFileName(selectedFileName)
        if (fileSelectedCallback) {
          fileSelectedCallback(file)
        }
      }
    }
  }

  return (
    <ZStack mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}>
      <Button
        w="full"
        borderRadius={0}
        onPress={selectFile}
        opacity={0}
        zIndex={2}
      >
        &nbsp;
      </Button>
      <Input
        placeholder={placeholder}
        value={fileName}
        borderWidth={1}
        borderRadius={8}
        h={10}
        bg="white"
        overflowY="hidden"
        fontSize="xl"
        w="480px"
        zIndex={1}
      />
      <HStack ml="10px">
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ opacity: 0 }}
          onChange={onFileSelected}
        />
      </HStack>
    </ZStack>
  )
}

const StarknetAudit: NextPage = () => {
  const { push } = useRouter()

  const [editionNumber, setEditionNumber] = useState('')
  const [venue, setVenue] = useState('')
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [graduatesNumber, setGraduatesNumber] = useState('')
  const [wallets, setWallets] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showBackButton, setShowBackButton] = useState(false)
  const [stepsStack, setStepsStack] = useState<string[]>([])

  const fileSelectedCallback = (file: File) => {
    setSelectedFile(file)
  }

  const resetStepsStack = () => {
    setTimeout(() => {
      setStepsStack([])
    }, 100)
  }

  const addStepToStack = async (step: string) => {
    setTimeout(() => {
      setStepsStack((previusStepsStack) => [...previusStepsStack, step])
    }, 100)
  }

  const addEditionToStarknet = async () => {
    if (isLoading) {
      return
    }

    if (wallets.length === 0) {
      Swal.fire({
        title: 'Warning!',
        icon: 'warning',
        text: "You didn't add any graduates addresses. Do you want to continue anyway?",
        confirmButtonText: 'Yes',
        showDenyButton: true,
        showConfirmButton: true,
      }).then((result: SweetAlertResult) => {
        if (result.isConfirmed) {
          doAddEditionToStarknet()
        }
      })
    } else {
      doAddEditionToStarknet()
    }
  }

  const doAddEditionToStarknet = async () => {
    resetStepsStack()
    setShowBackButton(false)
    setIsLoading(true)

    await addStepToStack('Uploading photo to IPFS...')
    const cid = await web3UploadFile(selectedFile!)

    await addStepToStack(`File CID: ${cid}`)

    const web3FilePath = await web3GetFilePath(cid)
    await addStepToStack(`Photo URL: ${web3FilePath}`)

    await addStepToStack('Creating transaction on Starknet...')
    const transaction = await addEdition(
      Number(editionNumber),
      venue,
      cid,
      Number(graduatesNumber),
      wallets
    )

    await addStepToStack(`Transaction hash: ${transaction.transaction_hash}`)

    setIsLoading(false)
    setShowBackButton(true)
    showTransactionSuccess()
  }

  const validForm =
    editionNumber.length > 0 &&
    venue.length > 0 &&
    selectedFile != null &&
    graduatesNumber.length > 0

  const filterOnlyNumbers = (value: string) => value.replace(/\D/g, '')

  const updateEditionNumber = (event: any) => {
    setEditionNumber(filterOnlyNumbers(event.target.value))
  }

  const updateVenue = (event: any) => {
    const updatedVenue = event.target.value as string
    setVenue(updatedVenue.substring(0, VENUE_MAX_CHARACTERS))
  }

  const updateGraduatesNumber = (event: any) => {
    setGraduatesNumber(filterOnlyNumbers(event.target.value))
  }

  const beforeAddWalletsValidate = (tag: string, existingTags: string[]) => {
    const allWallets = [...existingTags, ...parseValidWallets(tag)]
    const filteredWallets = filterRepeatedWallets(allWallets)
    setWallets(filteredWallets)
    return true
  }

  const goBackToMainPage = () => {
    push('/starknet')
  }

  const showTransactionSuccess = () => {
    Swal.fire({
      title: 'Success!',
      icon: 'success',
      text: 'The transaction has been submitted successfully.',
    })
  }

  return (
    <StarknetLayout>
      <StarknetNavigationBar />
      <StarknetHeader title="Add Edition" />
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
            <FormControl width="100%" alignItems="center">
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
                placeholder="Venue"
                value={venue}
                borderWidth={1}
                borderRadius={8}
                onChange={updateVenue}
                mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
                h={10}
                bg="white"
                overflowY="hidden"
                fontSize="xl"
                w="480px"
              />
              <InputFile
                placeholder="Graduates photo"
                fileSelectedCallback={fileSelectedCallback}
              />
              <Input
                type="number"
                placeholder="# Graduates"
                value={graduatesNumber}
                borderWidth={1}
                borderRadius={8}
                onChange={updateGraduatesNumber}
                mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
                h={10}
                bg="white"
                overflowY="hidden"
                fontSize="xl"
                w="480px"
              />
            </FormControl>
            <HStack w={640} maxW={640} mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}>
              <TagsInput
                value={wallets}
                beforeAddValidate={beforeAddWalletsValidate}
                name="wallets"
                placeHolder="Graduates addresses"
                classNames={{
                  tag: 'tags',
                  input: 'tags tags-input',
                }}
              />
            </HStack>
            <Button
              mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
              px={10}
              py={7}
              _text={{ fontSize: 20 }}
              onPress={addEditionToStarknet}
              alignSelf="center"
              disabled={!validForm}
            >
              {isLoading ? 'Loading...' : 'Submit edition'}
            </Button>
            <VStack w="640px" mt={8} alignItems="start">
              {stepsStack.map((step) => (
                <Text key={step}>{step}</Text>
              ))}
            </VStack>
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
        <StarknetFooter hideButton />
      </VStack>
    </StarknetLayout>
  )
}

export default StarknetAudit
