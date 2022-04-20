import { Web3Provider } from '@ethersproject/providers'
import { useWeb3React } from '@web3-react/core'
// eslint-disable-next-line import/no-unresolved
import { Web3ReactContextInterface } from '@web3-react/core/dist/types'
import { InjectedConnector } from '@web3-react/injected-connector'
import { useEffect } from 'react'

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    1, // Mainet
    // 3, // Ropsten
    // 4, // Rinkeby
    // 5, // Goerli
    42, // Kovan
  ],
})

interface IUseWalletResult
  extends Omit<Web3ReactContextInterface<Web3Provider>, 'activate'> {
  activate: (
    onError?: ((error: Error) => void) | undefined,
    throwErrors?: boolean | undefined
  ) => void
}

const useWallet = (): IUseWalletResult => {
  const { activate, account, ...rest } = useWeb3React<Web3Provider>()

  useEffect(() => {
    ;(async () => {
      const isAuthorized = await injectedConnector.isAuthorized()
      if (isAuthorized) activate(injectedConnector, undefined, false)
    })()
  }, [])

  return {
    account,
    ...rest,
    activate: (onError, throwErrors = false) =>
      activate(injectedConnector, onError, throwErrors),
  }
}

export default useWallet
