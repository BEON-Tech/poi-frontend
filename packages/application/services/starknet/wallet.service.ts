import { connect } from '@argent/get-starknet'
import { isAddress } from '@ethersproject/address'
import { constants, shortString } from 'starknet'

const getStarknetObject = async () => connect({ showList: false })

export const silentConnectWallet = async () => {
  const windowStarknet = await connect({ showList: false })
  if (!windowStarknet?.isConnected) {
    await windowStarknet?.enable({
      showModal: false,
      starknetVersion: 'v4',
    } as any)
  }
  return windowStarknet
}

export const connectWallet = async () => {
  const windowStarknet = await connect({
    include: ['argentX'],
  })
  windowStarknet?.enable({ starknetVersion: 'v4' } as any)
  return windowStarknet
}

export const walletAddress = async (): Promise<string | undefined> => {
  const starknet = await getStarknetObject()
  if (!starknet?.isConnected) {
    return undefined
  }
  return starknet.selectedAddress
}

export const networkId = async (): Promise<string | undefined> => {
  const starknet = await getStarknetObject()
  if (!starknet?.isConnected) {
    return undefined
  }

  try {
    const { chainId } = starknet.provider
    if (chainId === constants.StarknetChainId.MAINNET) {
      return 'mainnet-alpha'
    }

    if (chainId === constants.StarknetChainId.TESTNET) {
      return 'goerli-alpha'
    }

    return 'localhost'
  } catch {
    return undefined
  }
}

export const addToken = async (address: string): Promise<void> => {
  const starknet = await getStarknetObject()
  if (!starknet?.isConnected) {
    throw Error('starknet wallet not connected')
  }
  await starknet.request({
    type: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address,
      },
    },
  })
}

export const getExplorerBaseUrl = async (): Promise<string | undefined> => {
  const network = await networkId()
  if (network === 'mainnet-alpha') {
    return 'https://voyager.online'
  }

  if (network === 'goerli-alpha') {
    return 'https://goerli.voyager.online'
  }

  return undefined
}

export const chainId = async (): Promise<string | undefined> => {
  const starknet = await getStarknetObject()
  if (!starknet?.isConnected) {
    return undefined
  }

  try {
    return shortString.decodeShortString(starknet.provider.chainId)
  } catch {
    return undefined
  }
}

export const signMessage = async (message: string) => {
  const starknet = await getStarknetObject()
  if (!starknet?.isConnected) throw Error('starknet wallet not connected')
  if (!shortString.isShortString(message)) {
    throw Error('message must be a short string')
  }

  const networkIdValue =
    (await networkId()) === 'mainnet-alpha' ? 'SN_MAIN' : 'SN_GOERLI'

  return starknet.account.signMessage({
    domain: {
      name: 'Example DApp',
      chainId: networkIdValue,
      version: '0.0.1',
    },
    types: {
      StarkNetDomain: [
        { name: 'name', type: 'felt' },
        { name: 'chainId', type: 'felt' },
        { name: 'version', type: 'felt' },
      ],
      Message: [{ name: 'message', type: 'felt' }],
    },
    primaryType: 'Message',
    message: {
      message,
    },
  })
}

export const waitForTransaction = async (hash: string) => {
  const starknet = await getStarknetObject()
  if (!starknet?.isConnected) {
    return undefined
  }
  return starknet.provider.waitForTransaction(hash)
}

export const addWalletChangeListener = async (
  handleEvent: (accounts: string[]) => void
) => {
  const starknet = await getStarknetObject()
  if (!starknet?.isConnected) {
    return
  }
  starknet.on('accountsChanged', handleEvent)
}

export const removeWalletChangeListener = async (
  handleEvent: (accounts: string[]) => void
) => {
  const starknet = await getStarknetObject()
  if (!starknet?.isConnected) {
    return
  }
  starknet.off('accountsChanged', handleEvent)
}

export const parseValidWallets = (walletsList: string): string[] => {
  const list = walletsList.split(' ').map((wallet: string) => wallet.trim())
  return list.filter((wallet: string) => isAddress(wallet))
}

export const filterRepeatedWallets = (walletsList: string[]): string[] => {
  const filteredWalletsList: string[] = []
  walletsList.forEach((wallet) => {
    const lowercaseWallet = wallet.toLowerCase()
    const found = filteredWalletsList.some(
      (value) => lowercaseWallet === value.toLowerCase()
    )
    if (!found) {
      filteredWalletsList.push(wallet)
    }
  })

  return filteredWalletsList
}
