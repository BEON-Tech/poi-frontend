import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
  HStack,
  VStack,
  Text,
  Input,
  Button,
  FormControl,
  Menu,
  Pressable,
} from 'native-base'
import { useTranslation } from 'react-i18next'
import { keys } from '@i18n'
import MenuChevronIcon from '@components/atoms/MenuChevronIcon'
import {
  EthereumIcon,
  DaiIcon,
  UsdtIcon,
  UsdcIcon,
  WbtcIcon,
} from '@components/atoms/Icons'
import AlertIcon from '@components/atoms/Icons/AlertIcon'
import { useWallet } from '@hooks'
import {
  TOKENS,
  transfer,
  waitTransaction,
} from '@services/contracts/tx.contract'
// import { registerDonationTransacion } from '@services/API'
import config from '@config'

const TriggerMenu = ({ tokenIcon, menuOpen, ...triggerProps }: any) => (
  <Button
    minW={8}
    w={32}
    pl={3}
    pr={3}
    borderWidth={1}
    borderColor="greenColor.900"
    borderBottomColor={menuOpen ? 'white' : 'greenColor.900'}
    borderRadius={8}
    borderBottomRadius={menuOpen ? 0 : 8}
    backgroundColor="white"
    overflowY="hidden"
    fontSize="sm"
    variant="solid"
    {...triggerProps}
    endIcon={<MenuChevronIcon size={6} isMenuOpen={menuOpen} />}
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
    case 'USDT':
      return <UsdtIcon />
    case 'USDC':
      return <UsdcIcon />
    case 'WBTC':
      return <WbtcIcon />
    default:
      return <EthereumIcon />
  }
}

const BlockchainErrorMessage = ({
  title,
  description,
  onPress = null,
}: any) => (
  <Pressable onPress={onPress}>
    <VStack
      mt={{
        base: 10,
        sm: 100,
        lg: 100,
        xl: 100,
      }}
      maxW="96%"
      w={500}
      bg="white"
      borderWidth={1}
      borderColor="#F5841F"
      borderRadius={10}
      px={{
        base: 6,
        sm: 8,
        lg: 8,
        xl: 8,
      }}
      py={6}
      alignItems="flex-start"
      alignSelf="center"
      space={4}
    >
      <HStack space={4}>
        <AlertIcon
          alignSelf="start"
          size={{
            base: 'md',
            sm: 'xl',
            lg: 'xl',
            xl: 'xl',
          }}
        />
        <VStack flex="fit-content" alignItems="flex-start" space={4}>
          <Text
            fontSize={{
              base: 'lg',
              sm: '2xl',
              lg: '2xl',
              xl: '2xl',
            }}
            bold
          >
            {title}
          </Text>
          <Text
            fontSize={{
              base: 'md',
              sm: 'xl',
              lg: 'xl',
              xl: 'xl',
            }}
          >
            {description}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  </Pressable>
)

const DonationForm = () => {
  const { t } = useTranslation()
  const { active, account, library, chainId } = useWallet()
  const router = useRouter()
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [tokenSymbol, setTokenSymbol] = useState('ETH')
  const [amount, setAmount] = useState(0)
  const [initAmount, setInitAmount] = useState<string>('')
  const [tx, setTx] = useState()
  const [txError, setTxError] = useState(false)
  const updateIsMenuOpen = (isOpen: boolean) => setMenuOpen(isOpen)
  const updateTokenSymbol = (value: String) => setTokenSymbol(value as string)
  const updateAmount = (event: any) => setAmount(event.target.value)

  const redirectToThankYouPage = (hash: string) => {
    const amountString = amount.toString()
    router.push(
      `/thankyou?hash=${hash}&token=${tokenSymbol}&amount=${amountString}`
    )
  }

  useEffect(() => {
    if (
      router.query.token &&
      ['DAI', 'USDT', 'USDC'].includes(router.query.token as string)
    ) {
      setTokenSymbol(router.query.token as string)
      if (router.query.amount) {
        const queryAmount = parseInt(router.query.amount as string, 10)
        if (!Number.isNaN(queryAmount)) {
          setAmount(queryAmount)
          setInitAmount(router.query.amount as string)
        }
      }
    }
  }, [])

  const donate = async (event: any) => {
    event.preventDefault()
    try {
      const transaction = await transfer(
        tokenSymbol,
        amount,
        account as string,
        chainId ? chainId.toString() : '',
        library
      )
      setTx(transaction)
      // registerDonationTransacion(transaction, tokenSymbol, amount)
      redirectToThankYouPage(transaction.hash)
    } catch (error) {
      setTxError(true)
    }
  }

  const controlsDisabled = !(active && amount > 0 && !txError)
  const invalidNetwork = chainId !== config.validChainId
  const blockchainError = txError || (invalidNetwork && active)
  const resetTxError = () => setTxError(false)

  useEffect(() => {
    if (tx) {
      waitTransaction(tx, () => {})
    }
  }, [tx])

  const normalForm = (
    <VStack
      mt={{
        base: 10,
        sm: 10,
        lg: 10,
        xl: 10,
      }}
      mb={{
        base: 0,
        sm: 0,
        lg: 40,
        xl: 100,
      }}
      w="100%"
    >
      <VStack
        alignItems="center"
        justifyContent="center"
        borderWidth={1}
        borderColor="border.500"
        borderRadius={12}
        pt={{
          base: 4,
          sm: 10,
          lg: 10,
          xl: 10,
        }}
        pb={{
          base: 12,
          sm: 16,
          lg: 16,
          xl: 16,
        }}
        px={{
          base: 6,
          sm: 32,
          lg: 32,
          xl: 32,
        }}
        width="100%"
        mt={4}
        bg="white"
      >
        <HStack alignItems="flex-end" mt={5} w="100%">
          <FormControl width="100%">
            <Text
              fontSize="xl"
              pl={{
                base: 2,
                sm: 0,
                lg: 0,
                xl: 0,
              }}
            >
              {t(keys.donate.label)}
            </Text>
            <Input
              type="number"
              placeholder={t(keys.donate.placeholder)}
              value={initAmount}
              borderWidth={1}
              borderRadius={8}
              onChange={updateAmount}
              mt={{ base: 3, sm: 5, lg: 5, xl: 5 }}
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
              mt={-2.5}
              shadow={0}
              borderWidth={1}
              borderTopWidth={0}
              borderTopRadius={0}
              borderBottomRadius={8}
              borderColor="greenColor.900"
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
          variant="solid"
          mt={{
            base: 12,
            sm: 16,
            lg: 16,
            xl: 16,
          }}
          isDisabled={controlsDisabled}
          onPress={donate}
        >
          {t(keys.donate.donate)}
        </Button>
      </VStack>
    </VStack>
  )

  if (blockchainError) {
    if (txError) {
      return (
        <BlockchainErrorMessage
          title={t(keys.donate.transactionErrorTitle)}
          description={t(keys.donate.transactionErrorDescription)}
          onPress={resetTxError}
        />
      )
    }

    if (invalidNetwork) {
      return (
        <BlockchainErrorMessage
          title={t(keys.donate.invalidNetworkTitle)}
          description={t(keys.donate.invalidNetworkDescription)}
          dismissable
        />
      )
    }
  }

  return normalForm
}

export default DonationForm
