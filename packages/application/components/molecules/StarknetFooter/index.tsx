import {
  Box,
  Button,
  FormControl,
  Input,
  Stack,
  Text,
  VStack,
} from 'native-base'
import { CornerPublicAudit } from '@components/atoms'
import { MAX_WIDTH } from '@constants'
import { useState } from 'react'
import { addStudent } from '@services/starknet/poi.service'

const StarknetFooter = () => {
  const [course, setCourse] = useState<string>('')
  const [wallet, setWallet] = useState<string>('')
  const [transactionHash, setTransactionHash] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const updateCourse = (event: any) => setCourse(event.target.value)
  const updateWallet = (event: any) => setWallet(event.target.value)

  const addStudentToStarknet = async () => {
    if (isLoading) {
      return
    }

    setIsLoading(true)

    const result = await addStudent(course, wallet)
    setTransactionHash(result.transaction_hash)

    setCourse('')
    setWallet('')

    setIsLoading(false)
  }

  return (
    <VStack w="full" mb={{ base: 20, lg: 0 }}>
      <Box
        top="0"
        left="0"
        zIndex="-1"
        position="absolute"
        w={{ base: '50px', lg: '80px' }}
        h={{ base: '450px', lg: '308px' }}
      >
        <CornerPublicAudit position="bottom1" />
      </Box>
      <Box
        bottom="0"
        left="0"
        zIndex="-1"
        position="absolute"
        w={{ base: '138px', lg: '206px' }}
        h={{ base: '94px', lg: '112px' }}
      >
        <CornerPublicAudit position="bottom2" />
      </Box>
      <VStack>
        <Stack
          w="full"
          h="380px"
          maxW={MAX_WIDTH}
          pl={{ base: 6, lg: 8 }}
          pr={{ base: 8, lg: 32 }}
          direction={{ base: 'column', lg: 'row' }}
          alignItems={{ base: 'flex-start', lg: 'center' }}
          justifyContent={{ base: 'initial', lg: 'space-between' }}
          space={{ base: 20, lg: 0 }}
        >
          <FormControl width="30%">
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
              w="100%"
            />
          </FormControl>
          <FormControl width="40%">
            <Input
              type="number"
              placeholder="Wallet"
              value={wallet}
              borderWidth={1}
              borderRadius={8}
              onChange={updateWallet}
              mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
              h={10}
              bg="white"
              overflowY="hidden"
              fontSize="xl"
              w="100%"
            />
          </FormControl>
          <Button
            px={10}
            py={7}
            _text={{ fontSize: 20 }}
            onPress={addStudentToStarknet}
            alignSelf="center"
          >
            {isLoading ? 'Loading...' : 'Add Student'}
          </Button>
        </Stack>
        {transactionHash && <Text>Transaction Hash: {transactionHash}</Text>}
      </VStack>
      <Box
        bottom="0"
        right={{ base: '80px', lg: '200px' }}
        zIndex="-1"
        position="absolute"
        w={{ base: '216px', lg: '330px' }}
        h={{ base: '70px', lg: '74px' }}
      >
        <CornerPublicAudit position="bottom3" />
      </Box>
      <Box
        bottom="40px"
        right="0"
        zIndex="-1"
        position="absolute"
        w={{ base: '56px', lg: '100px' }}
        h={{ base: '140px', lg: '250px' }}
      >
        <CornerPublicAudit position="bottom4" />
      </Box>
    </VStack>
  )
}

export default StarknetFooter
