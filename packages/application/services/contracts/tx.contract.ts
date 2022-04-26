import { parseEther, parseUnits } from '@ethersproject/units'
import { BigNumber } from '@ethersproject/bignumber'
import { Contract } from '@ethersproject/contracts'
import { JsonRpcSigner, TransactionReceipt } from '@ethersproject/providers'

import ethImage from '../../public/tokens/ETH.png'
import daiImage from '../../public/tokens/DAI.png'
import usdImage from '../../public/tokens/USDC.png'
import btcImage from '../../public/tokens/WBTC.png'

// Does not work for ETH transfers
// const POOL_ADDRESS="0x53B5D53101ac06178F419E7888f883C70e6Af7DA"
const POOL_ADDRESS="0x3BC39941A15745De6c7470E2c0061Cfe30f6D8Bd"

const ERC20Abi = [
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function balanceOf(address) view returns (uint)",
  "function transfer(address to, uint amount)",
  "event Transfer(address indexed from, address indexed to, uint amount)"
];
const GAS_LIMIT = "100000"

export const TOKENS = [
  {
    "symbol": "ETH",
    "address": "",
    "icon": ethImage,
  },
  {
    "symbol": "DAI",
    "address": {
      "1": "0x6b175474e89094c44da98b954eedeac495271d0f",
      "42": "0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa",
    },
    "decimals": 18,
    "icon": daiImage
  },
  {
    "symbol": "USDC",
    "address": {
      "1": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "42": "0x7079f3762805cff9c979a5bdc6f5648bcfee76c8",
    },
    "decimals": 6,
    "icon": usdImage
  },
  {
    "symbol": "WBTC",
    "address": {
      "1": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "42": "0x7afe7373126eb5ef766caad2072c4a87810fbfa3",
    },
    "decimals": 8,
    "icon": btcImage
  },
]

export const NETWORK_EXPLORER_URLS = {
  "1": "https://etherscan.io",
  "42": "https://kovan.etherscan.io",
}

export const buildTransactionExplorerUrl = (hash, chainId) =>
  `${NETWORK_EXPLORER_URLS[chainId]}/tx/${hash}`

export const transfer = async (tokenSymbol, amount, account, chainId, library) => {
  const signer: JsonRpcSigner = library.getSigner()
  const nonce = await library.getTransactionCount(account)

  console.info({ tokenSymbol, amount, account, chainId, nonce })

  if (tokenSymbol === "ETH") {
    return signer.sendTransaction({
      to: POOL_ADDRESS,
      value: parseEther(amount),
      gasLimit: BigNumber.from(GAS_LIMIT).toHexString(),
      chainId: BigNumber.from(chainId).toHexString(),
      nonce: BigNumber.from(nonce).toHexString(),
    })
  }

  // ERC-20
  const { address, decimals } = TOKENS.find(({ symbol }) => symbol === tokenSymbol)
  const contract = new Contract(address[chainId], ERC20Abi, library)
  const tokenWithSigner = contract.connect(signer)

  return tokenWithSigner.transfer(POOL_ADDRESS, parseUnits(amount, decimals), {
    gasLimit: BigNumber.from(GAS_LIMIT).toHexString(),
    chainId: BigNumber.from(chainId).toHexString(),
    nonce: BigNumber.from(nonce).toHexString(),
  })
}

export const waitTransaction = async (tx, cb) => {
  try {
    const receipt: TransactionReceipt = await tx.wait()
    cb(receipt)
  } catch (err) {
    if (err.hash) {
      console.error('TRANSACTION_REPLACED err')
    } else if (err.receipt) {
      console.error('CALL_EXCEPTION err')
    } else {
      console.error('UNKNOWN err')
    }
    console.error(err)
  }
}

