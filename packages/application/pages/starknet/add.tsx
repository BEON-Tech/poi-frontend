import type { NextPage } from 'next'
import { Button, FormControl, HStack, Input, Text, VStack } from 'native-base'
import { SecondaryLayout } from '@components/templates'
import { StarknetNavigationBar } from '@components/organisms'
import { StarknetFooter } from '@components/molecules'
import { useState } from 'react'
import { MAX_WIDTH } from '@constants'
import { TagsInput } from 'react-tag-input-component'
import {
  filterRepeatedWallets,
  parseValidWallets,
} from '@services/starknet/wallet.service'

const StarknetAudit: NextPage = () => {
  const [course, setCourse] = useState<string>('')
  const [wallets, setWallets] = useState<string[]>([])
  const [transactionHash, setTransactionHash] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const updateCourse = (event: any) => setCourse(event.target.value)

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
            h="380px"
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
                placeholder="Course"
                value={course}
                borderWidth={1}
                borderRadius={8}
                onChange={updateCourse}
                mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
                h={10}
                bg="white"
                overflowY="hidden"
                fontSize="xl"
                w="480px"
              />
            </FormControl>
            <HStack w={640} maxW={640}>
              <TagsInput
                value={wallets}
                beforeAddValidate={beforeAddWalletsValidate}
                name="wallets"
                placeHolder="Wallets"
                classNames={{
                  tag: 'tags',
                  input: 'tags tags-input',
                }}
              />
            </HStack>
            <Button
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
        <StarknetFooter />
      </VStack>
    </SecondaryLayout>
  )
}

export default StarknetAudit
