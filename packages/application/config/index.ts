export interface IConfig {
  addressPOI: string
}

export default {
  addressPOI: process.env.POI_ADDRESS || '',
} as IConfig
