import { connect } from '@argent/get-starknet'
import config from '@config'
import { Contract, Provider, number, shortString } from 'starknet'
import { isAddress } from '@ethersproject/address'
import POIAbi from '../../constants/abi_starknet/poi_abi.json'
import { networkId } from './wallet.service'

const tokenAddress = config.staknetContractAddress
// const supportedNetwork = 'mainnet-alpha'
const supportedNetwork = 'goerli-alpha'

export interface Edition {
  editionNumber: number
  venue: string
  photoCID: string
  graduatesNumber: number
  walletsNumber: number
}

const getProvider = () =>
  new Provider({
    sequencer: {
      network: supportedNetwork,
    },
  })

const getContract = async (setProvider: boolean = true) => {
  const starknet = await connect({ showList: false })
  const contract = new Contract(
    POIAbi as any,
    tokenAddress,
    starknet?.account as any
  )

  if (setProvider) {
    const provider = getProvider()
    contract.connect(provider)
  }

  return contract
}

export const getOwner = async () => {
  const contract = await getContract()
  const owner = await contract.get_owner()
  return number.toHex(owner)
}

/* Helper functions */

/**
 * midString = 62 characters max
 * @throws Error when string length > 62
 */
export const midStringToLowAndHighFelts = (midString: string) => {
  if (midString.length > 62) {
    throw Error('Invalid string length (62 characters max)')
  }

  const lowShortString = midString.substring(0, 31)
  const highShortString = midString.substring(31, 62)

  const lowFelt = number.toFelt(
    number.toHex(shortString.encodeShortString(lowShortString))
  )
  const highFelt = number.toFelt(
    number.toHex(shortString.encodeShortString(highShortString))
  )

  return { low: lowFelt, high: highFelt }
}

/**
 * @param low - felt string
 * @param high - felt string
 * @returns 62 characters max string
 */
export const lowAndHighFeltsToMidString = (low: string, high: string) => {
  let lowShortString = ''
  let highShortString = ''

  const lowObject = low as any
  const highObject = high as any

  if (lowObject.words.length !== 1 || lowObject.words[0] !== 0) {
    lowShortString = shortString.decodeShortString(low)
  }

  if (highObject.words.length !== 1 || highObject.words[0] !== 0) {
    highShortString = shortString.decodeShortString(high)
  }

  return `${lowShortString}${highShortString}`
}

/**
 * walletAddress - string with a valid wallet address
 * @throws Error when string is an invalid wallet address
 */
export const walletAddressToLowAndHighFelts = (walletAddress: string) => {
  if (!isAddress(walletAddress)) {
    throw Error('Invalid wallet address')
  }

  return midStringToLowAndHighFelts(walletAddress)
}

/**
 * @param low - felt string
 * @param high - felt string
 * @returns string with a valid wallet address
 */
export const lowAndHighFeltsToWalletAddress = (low: string, high: string) =>
  lowAndHighFeltsToMidString(low, high)

/* Contract functions */

export const getEditionsCount = async () => {
  const contract = await getContract()
  const { count: value } = await contract.get_editions_count()
  return parseInt(number.toHex(value), 16)
}

export const getEdition = async (editionIndex: number): Promise<Edition> => {
  const contract = await getContract()
  const { edition } = await contract.get_edition(editionIndex)

  return {
    editionNumber: parseInt(number.toHex(edition.edition_number), 16),
    venue: lowAndHighFeltsToMidString(edition.venue.low, edition.venue.high),
    photoCID: lowAndHighFeltsToMidString(
      edition.photo_cid.low,
      edition.photo_cid.high
    ),
    graduatesNumber: parseInt(number.toHex(edition.graduates_number), 16),
    walletsNumber: parseInt(number.toHex(edition.wallets_number), 16),
  }
}

export const getStudentWallet = async (
  editionNumber: number,
  walletIndex: number
) => {
  const contract = await getContract()
  const { wallet } = await contract.get_student_wallet(
    editionNumber,
    walletIndex
  )
  return lowAndHighFeltsToWalletAddress(
    wallet.wallet_address_low,
    wallet.wallet_address_high
  )
}

export const addEdition = async (
  editionNumber: number,
  venue: string,
  photoCID: string,
  graduatesNumber: number,
  studentsWallets: string[]
) => {
  const networkIdValue = await networkId()
  if (networkIdValue !== supportedNetwork) {
    // eslint-disable-next-line no-alert
    window.alert('Unsupported Network')
    return undefined
  }

  const editionNumberFelt = number.toFelt(editionNumber)
  const venueLowAndHigh = midStringToLowAndHighFelts(venue)
  const photoCIDLowAndHigh = midStringToLowAndHighFelts(photoCID)
  const graduatesNumberFelt = number.toFelt(graduatesNumber)
  const studentsWalletsLowAndHighArray = studentsWallets.map((wallet) =>
    walletAddressToLowAndHighFelts(wallet)
  )

  const contract = await getContract(false)
  return contract.add_edition(
    editionNumberFelt,
    [venueLowAndHigh.low, venueLowAndHigh.high],
    [photoCIDLowAndHigh.low, photoCIDLowAndHigh.high],
    graduatesNumberFelt,
    studentsWalletsLowAndHighArray.map((lowAndHigh) => [
      lowAndHigh.low,
      lowAndHigh.high,
    ])
  )
}

export const updateEdition = async (
  editionIndex: number,
  editionNumber: number,
  venue: string,
  photoCID: string,
  graduatesNumber: number,
  walletsNumber: number
) => {
  const networkIdValue = await networkId()
  if (networkIdValue !== supportedNetwork) {
    // eslint-disable-next-line no-alert
    window.alert('Unsupported Network')
    return undefined
  }

  const editionIndexFelt = number.toFelt(editionIndex)
  const editionNumberFelt = number.toFelt(editionNumber)
  const venueLowAndHigh = midStringToLowAndHighFelts(venue)
  const photoCIDLowAndHigh = midStringToLowAndHighFelts(photoCID)
  const graduatesNumberFelt = number.toFelt(graduatesNumber)
  const walletsNumberFelt = number.toFelt(walletsNumber)

  const contract = await getContract(false)
  return contract.update_edition_data(
    editionIndexFelt,
    editionNumberFelt,
    [venueLowAndHigh.low, venueLowAndHigh.high],
    [photoCIDLowAndHigh.low, photoCIDLowAndHigh.high],
    graduatesNumberFelt,
    walletsNumberFelt
  )
}

export const updateStudentWallet = async (
  editionNumber: number,
  walletIndex: number,
  studentsWallet: string
) => {
  const networkIdValue = await networkId()
  if (networkIdValue !== supportedNetwork) {
    // eslint-disable-next-line no-alert
    window.alert('Unsupported Network')
    return undefined
  }

  const editionNumberFelt = number.toFelt(editionNumber)
  const walletIndexFelt = number.toFelt(walletIndex)
  const studentsWalletLowAndHigh =
    walletAddressToLowAndHighFelts(studentsWallet)

  const contract = await getContract(false)
  return contract.update_student_wallet(editionNumberFelt, walletIndexFelt, [
    studentsWalletLowAndHigh.low,
    studentsWalletLowAndHigh.high,
  ])
}
