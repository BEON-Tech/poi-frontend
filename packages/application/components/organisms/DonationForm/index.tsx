import { useEffect, useState } from 'react'
import { HStack, VStack, Text, Input, Button, FormControl, Menu, View } from 'native-base'
import MenuChevronIcon from '../../atoms/MenuChevronIcon'
import {
  EthereumIcon,
  DaiIcon,
  UsdcIcon,
  WbtcIcon,
} from '../../atoms/Icons/Crypto'
import { t } from '../../../i18n'
import keys from '../../../i18n/keys'
import { useWallet } from '../../../hooks/wallet'
import {
  TOKENS,
  transfer,
  waitTransaction,
} from '../../../services/contracts/tx.contract'

const TriggerMenu = ({ tokenIcon, menuOpen, ...triggerProps }: any) => (
  <Button
    minW={8}
    w={32}
    pl={3}
    pr={3}
    borderWidth={1}
    borderColor="#2D6320"
    borderBottomColor={menuOpen ? 'white' : '#2D6320'}
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

const DonationForm = () => {
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
    <VStack mt={100} w={660}>
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
          w="200px"
          h="50px"
          mt={16}
          borderRadius={100}
          isDisabled={controlsDisabled}
          onPress={donate}
          bg="#2d6320"
          color="white"
        >
          <Text color="white" fontSize="lg">
            Donate
          </Text>
        </Button>
        {txError && (
          <View>
            <Text>
              There was a problem with the transaction. Check your funds and try
              again.
            </Text>
          </View>
        )}
      </VStack>
    </VStack>
  )
}

export default DonationForm
