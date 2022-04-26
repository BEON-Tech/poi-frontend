import {
  Flex,
  VStack,
  View,
  Text,
  FormControl,
  Input,
  Button,
  Menu,
  ChevronDownIcon,
} from 'native-base'
import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'

import { ThankYou } from '@components/organisms'
import { BaseLayout } from '@components/templates'
import { useWallet } from '@hooks'
import {
  TOKENS,
  transfer,
  waitTransaction,
  buildTransactionExplorerUrl,
} from '@services/contracts/tx.contract'

const Donate: NextPage = () => {
  const { active, account, library, chainId } = useWallet()
  const [tokenSymbol, setTokenSymbol] = useState<string>('ETH')
  const [token, setToken] = useState<undefined | any>({})
  const [amount, setAmount] = useState(0)
  const [tx, setTx] = useState<any>()
  const [txError, setTxError] = useState()
  const [submitting, setSubmitting] = useState(false)

  const updateTokenSymbol = (value: string) => setTokenSymbol(value)

  const updateAmount = (event: any) => setAmount(event.target.value)

  const donate = async (event: any) => {
    event.preventDefault()
    setSubmitting(true)
    try {
      const transaction = await transfer(
        tokenSymbol,
        amount,
        account,
        chainId,
        library
      )
      setTx(transaction)
    } catch (error: any) {
      setTxError(error)
    }
  }
  const controlsDisabled = !(active && amount > 0 && !txError)

  useEffect(() => {
    if (txError) {
      setSubmitting(false)
      setTimeout(setTxError, 5000)
    }
  }, [txError])

  useEffect(() => {
    if (tx) {
      waitTransaction(tx, (receipt: any) =>
        console.info('Transaction complete', receipt)
      )
    }
  }, [tx])

  useEffect(() => {
    if (tokenSymbol) {
      setToken(TOKENS.find(({ symbol }) => symbol === tokenSymbol))
    }
  }, [tokenSymbol])

  return tx ? (
    <ThankYou
      tokenSymbol={tokenSymbol}
      amount={amount}
      transactionUrl={buildTransactionExplorerUrl(tx.hash, chainId)}
    />
  ) : (
    <BaseLayout
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
                borderRadius={10}
                borderRightWidth={0}
                borderRightRadius={0}
                onChange={updateAmount}
                mt={5}
                h={10}
                bg="white"
              />
            </FormControl>
            <FormControl w="40%" isDisabled={controlsDisabled} ml={-1}>
              <Menu
                trigger={(triggerProps) => (
                  <Button
                    {...triggerProps}
                    background="secondary.900"
                    color="black"
                    borderColor="primary.900"
                    borderWidth={1}
                    borderRadius={10}
                    isDisabled={controlsDisabled}
                  >
                    <Flex
                      direction="row"
                      alignItems="center"
                      justify="space-between"
                      w={120}
                    >
                      <Flex direction="row" alignItems="center">
                        {token.icon ? (
                          <Image
                            src={token.icon}
                            layout="fixed"
                            width={24}
                            height={24}
                          />
                        ) : null}
                        <Text ml={2}>{tokenSymbol}</Text>
                      </Flex>
                      <ChevronDownIcon color="primary.900" />
                    </Flex>
                  </Button>
                )}
              >
                {TOKENS.map(({ symbol, icon }) => (
                  <Menu.Item
                    key={symbol}
                    onPress={() => updateTokenSymbol(symbol)}
                    w={120}
                  >
                    <Flex direction="row" alignItems="center">
                      <Image src={icon} layout="fixed" width={24} height={24} />
                      <Text ml={2}>{symbol}</Text>
                    </Flex>
                  </Menu.Item>
                ))}
              </Menu>
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
          >
            {submitting ? 'Donating...' : 'Donate'}
          </Button>
          {txError && (
            <View>
              There was a problem with the transaction. Check your funds and try
              again.
            </View>
          )}
        </Flex>
      </VStack>
    </BaseLayout>
  )
}

export default Donate
