import {
  Flex,
  VStack,
  View,
  Text,
  FormControl,
  Input,
  Select,
  Divider,
  HStack,
} from 'native-base'
import { useEffect, useState } from 'react'
import type { NextPage } from 'next'

import BaseLayout from '../components/templates/BaseLayout'
import ActionButton from '../components/atoms/Button'
import { useWallet } from '../hooks/wallet'
import {
  TOKENS,
  transfer,
  waitTransaction,
} from '../services/contracts/tx.contract'
import { EthereumIcon, DaiIcon, UsdcIcon, WbtcIcon } from '../components/atoms/Icons/Crypto'

const StepPill = ({
  children,
  color,
  textColor = 'invertedText.900',
  ...props
}: any) => (
  <View
    borderRadius={100}
    color={textColor}
    bg={color}
    padding={3}
    pt={1}
    pb={1}
    {...props}
  >
    {children}
  </View>
)

const Donate: NextPage = () => {
  const { active, account, library, chainId } = useWallet()
  const [tokenSymbol, setTokenSymbol] = useState('ETH')
  const [amount, setAmount] = useState(0)
  const [tx, setTx] = useState()
  const [txError, setTxError] = useState()
  const updateTokenSymbol = (value: String) => setTokenSymbol(value)
  const updateAmount = (event: any) => setAmount(event.target.value)
  const donate = async (event: any) => {
    event.preventDefault()
    try {
      const transaction = await transfer(
        tokenSymbol,
        amount,
        account,
        chainId,
        library
      )
      setTx(transaction)
      // TODO: Redirect to typ
    } catch (error) {
      setTxError(error)
    }
  }
  const controlsDisabled = !(active && amount > 0 && !txError)

  const setCryptoIcon = () => {
    switch(tokenSymbol) {
      case 'DAI': return <DaiIcon />
      case 'USDC': return <UsdcIcon />
      case 'WBTC': return <WbtcIcon />
      default: return <EthereumIcon />
    }
  }

  useEffect(() => {
    if (txError) {
      setTimeout(() => setTxError(null), 5000)
    }
  }, [txError])

  useEffect(() => {
    if (tx) {
      waitTransaction(tx, (receipt) =>
        console.info('Transaction complete', receipt)
      )
    }
  }, [tx])

  return (
    <BaseLayout
      title="Help Humans in Need"
      subTitle="Because urgent needs require urgent answers, we accept crypto donations."
      withConnect
      bg="#F2E4E3"
      color="black"
    >
      <VStack mt={100} w={660}>
        <Flex
          direction="row"
          justify="space-between"
          alignItems="center"
          width="100%"
          pl={3}
          pr={3}
        >
          <Text>
            <StepPill color="primary.700" textColor="#172815">
              <Text>1</Text>
            </StepPill>
            <View ml={1}>
              <Text>Connect your wallet</Text>
            </View>
          </Text>
          <View flexGrow={1} pl={2} pr={2}>
            <Divider
              bg="light.400"
              thickness="2"
              mx="2"
              orientation="horizontal"
            />
          </View>
          <Text ml={4}>
            <StepPill
              color="primary.700"
              textColor="#172815"
              opacity={controlsDisabled ? '0.3' : '1'}
            >
              <Text>2</Text>
            </StepPill>
            <View ml={1} opacity={controlsDisabled ? '0.3' : '1'}>
              <Text>Make a donation</Text>
            </View>
          </Text>
        </Flex>
        <VStack
          alignItems="center"
          justifyContent="center"
          borderWidth={1}
          borderColor="border.500"
          borderRadius={12}
          pt={10}
          pb={16}
          px={32}
          width="100%"
          mt={4}
          bg="white"
        >
          <HStack alignItems="flex-end" mt={5} w="100%">
            <FormControl width="100%">
              <Text fontSize="xl">Enter amount</Text>
              <Input
                type="number"
                placeholder="Amount"
                borderWidth={1}
                borderRadius={8}
                onChange={updateAmount}
                mt={5}
                h={10}
                bg="white"
                overflowY="hidden"
                fontSize="xl"
                w="100%"
              />
            </FormControl>
            <FormControl
              borderRadius={8}
              position="absolute"
              right={0}
              bottom={0}
              width="auto"
            >
              <Select
                minW={8}
                w={32}
                pl={10}
                borderWidth={1}
                borderColor="#2D6320"
                borderRadius={8}
                bg="white"
                onValueChange={updateTokenSymbol}
                defaultValue="ETH"
                overflowY="hidden"
                fontSize="sm"
              >
                {TOKENS.map(({ symbol }) => (
                  <Select.Item key={symbol} value={symbol} label={symbol} />
                ))}
              </Select>
              <View position="absolute" h="100%" pl={2} justifyContent="center">
                {setCryptoIcon()}
              </View>
            </FormControl>
          </HStack>
          <ActionButton
            mt={16}
            isDisabled={controlsDisabled}
            onPress={donate}
            color="secondary.900"
          >
            Donate
          </ActionButton>
          {txError && (
            <View>
              <Text>
                There was a problem with the transaction. Check your funds and
                try again.
              </Text>
            </View>
          )}
        </VStack>
      </VStack>
    </BaseLayout>
  )
}

export default Donate
