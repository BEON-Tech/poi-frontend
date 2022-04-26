export interface IConfig {
  addressPOI: string
}

export default {
  addressPOI: process.env.POI_ADDRESS || '',
  chainId: process.env.CHAIN_ID || '',
} as IConfig
