import { connect } from '@argent/get-starknet'
import { Contract, Provider, number, uint256 } from 'starknet'
import POIAbi from '../../constants/abi_starknet/poi_abi.json'
import { networkId } from './wallet.service'

const tokenAddress =
  '0x79d4ce7a802a929804ea82e0134d730d7bd9af05c6e49222687ece405ebcbc7'
const supportedNetwork = 'goerli-alpha'

const getProvider = () =>
  new Provider({
    sequencer: {
      network: supportedNetwork,
    },
  })

const getContract = async () => {
  const starknet = await connect({ showList: false })
  const provider = getProvider()
  const contract = new Contract(
    POIAbi as any,
    tokenAddress,
    starknet?.account as any
  )
  contract.connect(provider)

  return contract
}

export const getOwner = async () => {
  const contract = await getContract()
  const owner = await contract.get_owner()
  return number.toHex(owner)
}

export const getStudentsCountByCourse = async (courseNumber: string) => {
  const courseNumberValue = Number(courseNumber)

  if (Number.isNaN(courseNumberValue)) {
    // eslint-disable-next-line no-alert
    window.alert('Invalid course number')
    return undefined
  }

  const courseFelt = number.toFelt(courseNumberValue)

  const contract = await getContract()
  const { count: value } = await contract.get_students_count_by_program(
    courseFelt
  )
  return parseInt(number.toHex(value), 16)
}

export const getStudentByCourseAndPosition = async (
  course: number,
  position: number
) => {
  const courseFelt = number.toFelt(course)
  const positionFelt = number.toFelt(position)

  const contract = await getContract()
  const { wallet: student } = await contract.get_student_wallet(
    courseFelt,
    positionFelt
  )

  const low = number.toHex(student.wallet_address_low)
  const high = number.toHex(student.wallet_address_high)
  const bigNumber = uint256.uint256ToBN({ low, high })

  return number.toHex(bigNumber)
}

export const addStudent = async (
  courseNumber: string,
  studentAddress: string
) => {
  if (networkId() !== supportedNetwork) {
    // eslint-disable-next-line no-alert
    window.alert('Unsupported Network')
    return undefined
  }

  const courseNumberValue = Number(courseNumber)

  if (Number.isNaN(courseNumberValue)) {
    // eslint-disable-next-line no-alert
    window.alert('Invalid course number')
    return undefined
  }

  const courseFelt = number.toFelt(courseNumberValue)

  const bigIntAddress = BigInt(studentAddress)
  if (Number.isNaN(bigIntAddress)) {
    // eslint-disable-next-line no-alert
    window.alert('Invalid wallet address')
    return undefined
  }

  const walletBN = number.toBN(bigIntAddress)
  const walletUint256 = uint256.bnToUint256(walletBN)

  const contract = await getContract()
  return contract.register_student(courseFelt, [
    walletUint256.low,
    walletUint256.high,
  ])
}
