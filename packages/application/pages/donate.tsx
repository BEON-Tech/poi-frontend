import {
  Flex,
  VStack,
  View,
  Text,
  FormControl,
  Input,
  Divider,
  HStack,
  Menu,
  Button
} from 'native-base'
import { useEffect, useState } from 'react'
import type { NextPage } from 'next'

import BaseLayout from '../components/templates/BaseLayout'
import { useWallet } from '../hooks/wallet'
import {
  TOKENS,
  transfer,
  waitTransaction,
} from '../services/contracts/tx.contract'
import {
  EthereumIcon,
  DaiIcon,
  UsdcIcon,
  WbtcIcon,
} from '../components/atoms/Icons/Crypto'
import { t } from '../i18n'
import keys from '../i18n/keys'
import MenuChevronIcon from '../components/atoms/MenuChevronIcon'

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

const CryptoIcon = ({ tokenSymbol }: any) => {
  switch (tokenSymbol) {
    case 'DAI':
      return <DaiIcon />
    case 'USDC':
      return <UsdcIcon />
    case 'WBTC':
      return <WbtcIcon />
    default:
      return <EthereumIcon />
  }
}

const TriggerMenu = ({ tokenIcon, menuOpen, ...triggerProps }: any) => (
  <Button
    minW={8}
    w={32}
    pl={3}
    pr={3}
    borderWidth={1}
    borderColor="#2D6320"
    borderBottomColor={menuOpen ? "white" : "#2D6320"}
    borderRadius={8}
    borderBottomRadius={menuOpen ? 0 : 8}
    backgroundColor="white"
    overflowY="hidden"
    fontSize="sm"
    variant="solid"
    {...triggerProps}
    endIcon={MenuChevronIcon(3, menuOpen)}
    _stack={{
      width: '100%',
      justifyContent: 'space-between',
    }}
  >
    <HStack w="auto" space={2}>
      <CryptoIcon tokenSymbol={tokenIcon} />
      <Text>{tokenIcon}</Text>
    </HStack>
  </Button>
)

const Donate: NextPage = () => {
  const { active, account, library, chainId } = useWallet()
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [tokenSymbol, setTokenSymbol] = useState('ETH')
  const [amount, setAmount] = useState(0)
  const [tx, setTx] = useState()
  const [txError, setTxError] = useState()
  const updateIsMenuOpen = (isOpen: boolean) => setMenuOpen(isOpen)
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
      title={t(keys.header.title)}
      subTitle={t(keys.header.subtitle)}
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
              <Text fontSize="xl">{t(keys.form.label)}</Text>
              <Input
                type="number"
                placeholder={t(keys.form.placeholder)}
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
              <Menu
                placement="bottom"
                bg="white"
                w={32}
                shadow={0}
                borderWidth={1}
                borderTopWidth={0}
                borderTopRadius={0}
                borderBottomRadius={8}
                borderColor="#2D6320"
                // eslint-disable-next-line react/no-unstable-nested-components
                trigger={(triggerProps) =>
                  TriggerMenu({
                    tokenIcon: tokenSymbol,
                    menuOpen: isMenuOpen,
                    ...triggerProps,
                  })
                }
                onOpen={() => updateIsMenuOpen(true)}
                onClose={() => updateIsMenuOpen(false)}
              >
                {TOKENS.map(({ symbol }) => (
                  <Menu.Item
                    key={symbol}
                    onPress={() => updateTokenSymbol(symbol)}
                    pl={0}
                  >
                    <HStack justifyContent="flex-start" pl={3} space={2}>
                      <CryptoIcon tokenSymbol={symbol} />
                      <Text>{symbol}</Text>
                    </HStack>
                  </Menu.Item>
                ))}
              </Menu>
            </FormControl>
          </HStack>
          <Button
            mt={16}
            isDisabled={controlsDisabled}
            onPress={donate}
            color="secondary.900"
          >
            Donate
          </Button>
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
