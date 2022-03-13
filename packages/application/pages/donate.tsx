import { Flex, VStack, Stack, View, Text, FormControl, Input, Select, Button } from 'native-base'
import { useEffect, useState } from 'react'
import type { NextPage } from 'next'

import BaseLayout from '../components/templates/BaseLayout'
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
  const updateTokenSymbol = (value: String) => setTokenSymbol(value)
  const updateAmount = (event: any) => setAmount(event.target.value)
  const donate = async (event: any) => {
    event.preventDefault()
    try {
      const transaction = await transfer(tokenSymbol, amount, account, chainId, library)
      setTx(transaction)
    } catch (error) {
      setTxError(error)
    }
  }
  const canSubmit = () => active && amount > 0 && !txError

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
  >
    <VStack
      borderWidth={1}
      borderColor="border.500"
      borderRadius={20}
      paddingTop="60px"
      paddingBottom="60px"
      padding="100px"
      width="100%"
      >
      <Flex direction="row" justify="space-between">
        <Text>
          <Text>1</Text>
          <Text>Connect your wallet</Text>
        </Text>
        <Text>-----</Text>
        <Text>
          <Text>2</Text>
          <Text>Make a donation</Text>
        </Text>
      </Flex>
      <View>
        <Flex direction="row" alignItems="bottom">
          <FormControl w="50px">
            <Stack>
              <FormControl.Label>Etner amount</FormControl.Label>
              <Input type="number" placeholder="Amount" onChange={updateAmount} />
            </Stack>
          </FormControl>
          <FormControl w="50px" isDisabled={!canSubmit()}>
            <Select minWidth="200" mt={1} onValueChange={updateTokenSymbol}>
              {TOKENS.map(({ symbol }) => <Select.Item key={symbol} value={symbol} label={symbol} />)}
            </Select>
          </FormControl>
          <Button isDisabled={!canSubmit()} onPress={donate}>Donate</Button>
        </Flex>
        {txError && <View>There was a problem with the transaction. Check your funds and try again.</View>}
      </View>
    </VStack>
  </BaseLayout>
  )
}

export default Donate
