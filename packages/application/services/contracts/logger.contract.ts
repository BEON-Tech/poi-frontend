import { Web3Provider } from '@ethersproject/providers'
import { Contract } from '@ethersproject/contracts'

interface ContractData {
  address: string
  abi: any
}

const getAccountEventsFromContract = (
  library: Web3Provider,
  contractInfo: ContractData,
  account: string
) => {
  const { abi, address } = contractInfo
  const contract = new Contract(address, abi, library.getSigner())
  const fromMe = contract.filters.Transfer(account, null)
  return fromMe
}
