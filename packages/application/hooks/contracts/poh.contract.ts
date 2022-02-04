import { useEffect, useState } from 'react'

import { useContractCall } from '../../services/contracts'
import { useWallet } from '../wallet'

import { PoHMethods } from '../../constants'

const {
  isRegistered: { name: isRegisteredMethod },
} = PoHMethods

// eslint-disable-next-line import/prefer-default-export
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
