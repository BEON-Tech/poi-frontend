export interface IConfig {
  donationAddressPOI: string
  validChainId: number
  homeSubdomain: string
}

export default {
  donationAddressPOI: process.env.NEXT_PUBLIC_POI_DONATION_ADDRESS || '',
  validChainId: parseInt(process.env.NEXT_PUBLIC_CHAIN_ID || '', 10) || 1,
  homeSubdomain: process.env.NEXT_PUBLIC_HOME_SUBDOMAIN || ''
} as IConfig
