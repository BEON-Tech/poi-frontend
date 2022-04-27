export interface IConfig {
  addressPOI: string
  validChainId: number
}

export default {
  addressPOI: process.env.POI_ADDRESS || '',
  validChainId: process.env.CHAIN_ID || 1
} as IConfig
