export interface IConfig {
  donationAddressPOI: string
  apiPOI: string
  validChainId: number
  homeSubdomain: string
  etherscanURL: string
  staknetContractAddress: string
  web3StorageApiKey: string
}

export default {
  donationAddressPOI: process.env.NEXT_PUBLIC_POI_DONATION_ADDRESS || '',
  apiPOI: process.env.NEXT_PUBLIC_POI_API || '',
  validChainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || '', 10) || 1,
  homeSubdomain: process.env.NEXT_PUBLIC_HOME_SUBDOMAIN || '',
  etherscanURL: process.env.NEXT_PUBLIC_ETHERSCAN_URL || '',
  staknetContractAddress:
    process.env.NEXT_PUBLIC_STARKNET_CONTRACT_ADDRESS || '',
  web3StorageApiKey: process.env.NEXT_PUBLIC_WEB3_STORAGE_API_KEY || '',
} as IConfig
