export interface IConfig {
  donationAddressPOI: string
  validChainId: number
}

export default {
  donationAddressPOI: process.env.NEXT_PUBLIC_POI_ADDRESS || '',
  validChainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || '', 10) || 1
} as IConfig
