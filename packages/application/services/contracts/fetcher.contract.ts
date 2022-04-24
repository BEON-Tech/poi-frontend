/* eslint-disable camelcase */
import { useCallback } from 'react'
import { Contract } from '@ethersproject/contracts'

import {
  PoHContractABI,
  UBIV2ContractABI,
  PoH_CONTRACT_ADDRESS,
  UBIv2_CONTRACT_ADDRESS,
} from '@constants'
import { useWallet } from '@hooks'

const GAS_LIMIT = 200 * 21000

// const fetcher =
//   (library: Web3Provider, abi: any, address: any, method: string) =>
//   (...args: any[]): Promise<any> => {
//     // it's a contract
//     if (isAddress(address)) {
//       const contract = new Contract(address, abi, library.getSigner())
//       // if (filterName) {
//       //   const fromMe = contract.filters[filterName](account, null)
//       //   library.on(fromMe, (from, to, amount, event) => {
//       //     console.log('Transfer|sent', { from, to, amount, event })
//       //   })
//       // }
//       console.log('calling contract', method, args)
//       const extraParams = account
//         ? {
//             from: account,
//             gasLimit: GAS_LIMIT,
//           }
//         : {}
//       return contract[method](...args, extraParams)
//     }
//     console.log('here')
//     // it's a eth call
//     return (library as any)[method](...args)
//   }

const UBIv2_CONTRACT_NAME = 'UBIv2'
const PoH_CONTRACT_NAME = 'PoH'

const ADMITTED_CONTRACTS = [UBIv2_CONTRACT_NAME, PoH_CONTRACT_NAME] as const
type ContractType = typeof ADMITTED_CONTRACTS[number]

const CONTRACT_INFO = {
  [UBIv2_CONTRACT_NAME]: {
    abi: UBIV2ContractABI,
    address: UBIv2_CONTRACT_ADDRESS,
  },
  [PoH_CONTRACT_NAME]: {
    abi: PoHContractABI,
    address: PoH_CONTRACT_ADDRESS,
  },
}

const errorFn = () => {
  throw new Error('No active wallet')
}

interface IContractFunctionParams {
  contractCallArguments?: any[]
  addOverridaParams?: boolean
  extraParams?: {
    gasLimit?: number
    from?: string
    gasPrice?: number
    value?: string
    blockTag?: string
  }
}

const useContractCall = (contractType: ContractType, method: string) => {
  const { library, active, account } = useWallet()
  const { abi, address } = CONTRACT_INFO[contractType]

  const call = useCallback(
    ({
      contractCallArguments = [],
      addOverridaParams = false,
      extraParams,
    }: IContractFunctionParams): Promise<any> => {
      if (active) {
        const contract = new Contract(address, abi, library!.getSigner())
        const override = addOverridaParams
          ? {
              from: account,
              gasLimit: GAS_LIMIT,
              ...extraParams,
            }
          : null
        return contract[method](...contractCallArguments, override)
      }
      return errorFn()
    },
    [library, active]
  )

  return { call }
}

export default useContractCall
