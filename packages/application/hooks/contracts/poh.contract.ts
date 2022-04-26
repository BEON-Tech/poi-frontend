import { useEffect, useState } from 'react'

import { PoHMethods } from '@constants'
import { ContractService } from '@services'

import { useWallet } from '../wallet'

const { useContractCall } = ContractService

const {
  isRegistered: { name: isRegisteredMethod },
} = PoHMethods

export const useIsRegisteredPoH = () => {
  const { active, account } = useWallet()
  const [data, setData] = useState<any>()
  const [error, setError] = useState<any>()
  const { call: getIsRegistered } = useContractCall('PoH', isRegisteredMethod)

  useEffect(() => {
    if (active) {
      getIsRegistered({ contractCallArguments: [account] })
        .then(setData)
        .catch(setError)
    }
  }, [active])

  return { isRegistered: data, error }
}
