import { Flex, VStack, View, Text, FormControl, Input, Select, Divider } from 'native-base'
import { useEffect, useState } from 'react'
import type { NextPage } from 'next'

import BaseLayout from '../components/templates/BaseLayout'
import ActionButton from '../components/atoms/Button'
import { useWallet } from '../hooks/wallet'
import { TOKENS, transfer, waitTransaction } from '../services/contracts/tx.contract'

const StepPill = ({ children, color, textColor = "invertedText.900", ...props }: any) =>
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

const Donate: NextPage = () => {
  const {
    active,
    account,
    library,
    chainId,
  } = useWallet()
  const [tokenSymbol, setTokenSymbol] = useState("ETH")
  const [amount, setAmount] = useState(0)
  const [tx, setTx] = useState()
  const [txError, setTxError] = useState()
  const updateTokenSymbol = (value: String) => setTokenSymbol(value)
  const updateAmount = (event: any) => setAmount(event.target.value)
  const donate = async (event: any) => {
    event.preventDefault()
    try {
      const transaction = await transfer(tokenSymbol, amount, account, chainId, library)
      setTx(transaction)
      // TODO: Redirect to typ
    } catch (error) {
      setTxError(error)
    }
  }
  const canSubmit = () => active && amount > 0 && !txError
  const controlsDisabled = !canSubmit()

  useEffect(() => {
    if (txError) {
      setTimeout(() => setTxError(null), 5000)
    }
  }, [txError])

  useEffect(() => {
    if (tx) {
      waitTransaction(tx, (receipt) => console.info('Transaction complete', receipt))
    }
  }, [tx])

  return (<BaseLayout
    title="Help Humans in Need"
    subTitle="Because urgent needs require urgent answers, we accept crypto donations."
    withConnect
    bg="#F2E4E3"
    color="black"
  >
    <VStack mt={100} w={500}>
      <Flex direction="row" justify="space-between" alignItems="center" width="100%" pl="10px" pr="10px">
        <Text>
          <StepPill color="primary.700" textColor="#172815">1</StepPill>
          <View ml={1}>Connect your wallet</View>
        </Text>
        <View flexGrow={1} pl={2} pr={2}>
          <Divider bg="light.400" thickness="2" mx="2" orientation="horizontal" />
        </View>
        <Text ml={4}>
          <StepPill color="primary.700" textColor="#172815" opacity={controlsDisabled ? "0.3" : "1"}>2</StepPill>
          <View ml={1} opacity={controlsDisabled ? "0.3" : "1"}>Make a donation</View>
        </Text>
      </Flex>
      <Flex
        direction="column"
        alignItems="center"
        borderWidth={1}
        borderColor="border.500"
        borderRadius={20}
        pl={4}
        pt={10}
        pb={12}
        width="100%"
        mt={4}
        bg="white"
        >
        <Flex direction="row" alignItems="flex-end" mt={5}>
          <FormControl w="60%">
            <FormControl.Label>Enter amount</FormControl.Label>
            <Input
              type="number"
              placeholder="Amount"
              borderWidth={1}
              borderRightWidth={0}
              borderRightRadius={0}
              onChange={updateAmount}
              mt={5}
              h={10}
              bg="white"
            />
          </FormControl>
          <FormControl w="40%" isDisabled={controlsDisabled} ml={-1}>
            <Select minW={8} w={24} borderWidth={1} borderLeftRadius={0} bg="white" onValueChange={updateTokenSymbol}>
              {TOKENS.map(({ symbol }) => <Select.Item key={symbol} value={symbol} label={symbol} />)}
            </Select>
          </FormControl>
        </Flex>
        <ActionButton
          mt={8}
          isDisabled={controlsDisabled}
          onPress={donate}
          color="secondary.900"
        >
          Donate
        </ActionButton>
        {txError && <View>There was a problem with the transaction. Check your funds and try again.</View>}
      </Flex>
    </VStack>
  </BaseLayout>
  )
}

export default Donate
