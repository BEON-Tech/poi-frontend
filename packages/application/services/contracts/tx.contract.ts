import { parseEther, parseUnits } from '@ethersproject/units'
import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'
import { JsonRpcSigner, TransactionReceipt } from '@ethersproject/providers'
import { isNull, isUndefined } from 'lodash'

// Does not work for ETH transfers
// const POOL_ADDRESS="0x53B5D53101ac06178F419E7888f883C70e6Af7DA"
const POOL_ADDRESS = '0x3BC39941A15745De6c7470E2c0061Cfe30f6D8Bd'

const ERC20Abi = [
  'function name() view returns (string)',
  'function symbol() view returns (string)',
  'function balanceOf(address) view returns (uint)',
  'function transfer(address to, uint amount)',
  'event Transfer(address indexed from, address indexed to, uint amount)',
]
const GAS_LIMIT = '100000'

interface IAddressToken {
  [key: string]: string
}

export const NETWORK_NAMES = {
  '1': 'mainnet',
  '42': 'kovan',
}

export const TOKENS: Array<{
  symbol: string
  address?: IAddressToken
  decimals: number
}> = [
  {
    symbol: 'ETH',
    decimals: 0,
  },
  {
    symbol: 'DAI',
    address: {
      '1': '0x6b175474e89094c44da98b954eedeac495271d0f',
      '42': '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa',
    },
    decimals: 18,
  },
  {
    symbol: 'USDC',
    address: {
      '1': '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
      '42': '0x7079f3762805cff9c979a5bdc6f5648bcfee76c8',
    },
    decimals: 6,
  },
  {
    symbol: 'WBTC',
    address: {
      '1': '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      '42': '0x7afe7373126eb5ef766caad2072c4a87810fbfa3',
    },
    decimals: 8,
  },
]

interface INetworkExplorers {
  [key: string]: string
}

export const NETWORK_EXPLORER_URLS: INetworkExplorers = {
  '1': 'https://etherscan.io',
  '42': 'https://kovan.etherscan.io',
}

export const buildTransactionExplorerUrl = (hash: string, chainId: string) =>
  `${NETWORK_EXPLORER_URLS[chainId]}/tx/${hash}`

export const transfer = async (
  tokenSymbol: string,
  amount: number,
  account: string,
  chainId: string,
  library: any
) => {
  const signer: JsonRpcSigner = library.getSigner()
  const nonce = await library.getTransactionCount(account)

  if (tokenSymbol === 'ETH') {
    return signer.sendTransaction({
      to: POOL_ADDRESS,
      value: parseEther(amount.toString()),
      gasLimit: BigNumber.from(GAS_LIMIT).toHexString(),
      chainId: parseInt(chainId, 10),
      nonce: BigNumber.from(nonce).toHexString(),
    })
  }

  // ERC-20
  const result = TOKENS.find(({ symbol }) => symbol === tokenSymbol)

  if (
    !isNull(result) &&
    !isUndefined(result) &&
    'address' in result &&
    !isUndefined(result.address)
  ) {
    const contract = new Contract(result.address[chainId], ERC20Abi, library)
    const tokenWithSigner = contract.connect(signer)
    return tokenWithSigner.transfer(
      POOL_ADDRESS,
      parseUnits(amount.toString(), result.decimals),
      {
        gasLimit: BigNumber.from(GAS_LIMIT).toHexString(),
        // chainId: BigNumber.from(chainId).toHexString(),
        nonce: BigNumber.from(nonce).toHexString(),
      }
    )
  }

  return null
}

export const waitTransaction = async (tx: any, cb: any) => {
  try {
    const receipt: TransactionReceipt = await tx.wait()
    cb(receipt)
  } catch (err) {
    console.error('TRANSACTION ERROR')
  }
}
