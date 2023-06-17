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
import { SecondaryLayout } from '@components/templates'
import { StarknetNavigationBar } from '@components/organisms'
import { StarknetFooter } from '@components/molecules'
import { useRef, useState } from 'react'
import { MAX_WIDTH } from '@constants'
import { TagsInput } from 'react-tag-input-component'
import {
  filterRepeatedWallets,
  parseValidWallets,
} from '@services/starknet/wallet.service'

interface IInputFile {
  placeholder: string
}

const InputFile = ({ placeholder }: IInputFile) => {
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
  const [edition, setEdition] = useState<string>('')
  const [wallets, setWallets] = useState<string[]>([])
  const [transactionHash, setTransactionHash] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const updateEdition = (event: any) => setEdition(event.target.value)

  const addEditionToStarknet = async () => {
    /* if (isLoading) {
      return
    }

    setIsLoading(true)

    const result = await addStudent(course, wallet)
    setTransactionHash(result.transaction_hash)

    setCourse('')

    setIsLoading(false) */
  }

  const beforeAddWalletsValidate = (tag: string, existingTags: string[]) => {
    const allWallets = [...existingTags, ...parseValidWallets(tag)]
    const filteredWallets = filterRepeatedWallets(allWallets)
    setWallets(filteredWallets)
    return true
  }

  return (
    <SecondaryLayout>
      <StarknetNavigationBar />
      <VStack w="100%" mt={{ base: 8, lg: 12 }}>
        <VStack>
          <VStack
            w="640px"
            maxW={MAX_WIDTH}
            pl={{ base: 6, lg: 8 }}
            pr={{ base: 8, lg: 32 }}
            alignItems={{ base: 'flex-start', lg: 'center' }}
            justifyContent={{ base: 'initial', lg: 'space-between' }}
            space={{ base: 20, lg: 0 }}
          >
            <FormControl width="100%">
              <Input
                type="number"
                placeholder="Edition number"
                value={edition}
                borderWidth={1}
                borderRadius={8}
                onChange={updateEdition}
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
                // value={edition}
                borderWidth={1}
                borderRadius={8}
                // onChange={updateEdition}
                mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
                h={10}
                bg="white"
                overflowY="hidden"
                fontSize="xl"
                w="480px"
              />
              <InputFile placeholder="Graduates photo" />
              <Input
                type="number"
                placeholder="# Graduates"
                // value={edition}
                borderWidth={1}
                borderRadius={8}
                // onChange={updateEdition}
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
            >
              {isLoading ? 'Loading...' : 'Add edition'}
            </Button>
          </VStack>
          {transactionHash && <Text>Transaction Hash: {transactionHash}</Text>}
        </VStack>
        <StarknetFooter hideButton />
      </VStack>
    </SecondaryLayout>
  )
}

export default StarknetAudit
