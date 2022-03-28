import { Flex, VStack, View, Text, FormControl, Input, Select, Divider, Button } from 'native-base'
import { useEffect, useState } from 'react'
import type { NextPage } from 'next'

import BaseLayout from '../components/templates/BaseLayout'
import ThankYou from '../components/organisms/ThankYou'
import { useWallet } from '../hooks/wallet'
import { TOKENS, transfer, waitTransaction } from '../services/contracts/tx.contract'

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
  const [submitting, setSubmitting] = useState(false)
  const updateTokenSymbol = (value: String) => setTokenSymbol(value)
  const updateAmount = (event: any) => setAmount(event.target.value)
  const donate = async (event: any) => {
    event.preventDefault()
    setSubmitting(true)
    try {
      const transaction = await transfer(tokenSymbol, amount, account, chainId, library)
      setTx(transaction)
    } catch (error) {
      setTxError(error)
    }
  }
  const controlsDisabled = !(active && amount > 0 && !txError)

  useEffect(() => {
    if (txError) {
      setSubmitting(false)
      setTimeout(() => setTxError(null), 5000)
    }
  }, [txError])

  useEffect(() => {
    if (tx) {
      waitTransaction(tx, (receipt) => console.info('Transaction complete', receipt))
    }
  }, [tx])

  return (tx ? <ThankYou tokenSymbol={tokenSymbol} amount={amount} /> : <BaseLayout
    title="Help Humans in Need"
    subTitle="Because urgent needs require urgent answers, we accept crypto donations."
    withConnect
    bg="#F2E4E3"
    color="black"
  >
    <VStack mt={100} w={500}>
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
            <Select
              minW={8}
              w={24}
              borderWidth={1}
              borderLeftRadius={0}
              bg="white"
              onValueChange={updateTokenSymbol}
              defaultValue="ETH"
            >
              {TOKENS.map(({ symbol }) => <Select.Item key={symbol} value={symbol} label={symbol} />)}
            </Select>
          </FormControl>
        </Flex>
        <Button
          mt={8}
          isDisabled={controlsDisabled}
          onPress={donate}
          maxW={165}
          w={165}
          maxH="10"
          borderRadius={30}
          onPress={donate}
        >
          {submitting ? 'Donating...' : 'Donate'}
        </Button>
        {txError && <View>There was a problem with the transaction. Check your funds and try again.</View>}
      </Flex>
    </VStack>
  </BaseLayout>
  )
}

export default Donate
